import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Visitor from "@/models/Visitor";

export async function POST(req: Request) {
    await dbConnect();
    try {
        let body;
        try {
            body = await req.json();
        } catch (e) {
            console.error("Failed to parse visit JSON body:", e);
            return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
        }

        const { path, language, coordinates } = body;
        const ip = req.headers.get("x-forwarded-for") || "127.0.0.1";
        const userAgent = req.headers.get("user-agent") || "unknown";

        console.log(`Log visit: IP=${ip}, Path=${path}, Lang=${language}`);

        // Fetch location data from IP
        let location = { country: "Unknown", city: "Unknown" };
        try {
            if (ip !== "127.0.0.1" && ip !== "::1") {
                const geoRes = await fetch(`http://ip-api.com/json/${ip}?fields=status,country,city`);
                const geoData = await geoRes.json();
                if (geoData.status === "success") {
                    location = {
                        country: geoData.country,
                        city: geoData.city
                    };
                }
            }
        } catch (e) {
            console.error("Geo lookup failed:", e);
        }

        // If we have browser coordinates, try reverse geocoding for better accuracy
        if (coordinates?.lat && coordinates?.lng && (location.country === "Unknown" || location.city === "Unknown")) {
            try {
                const reverseRes = await fetch(
                    `https://nominatim.openstreetmap.org/reverse?lat=${coordinates.lat}&lon=${coordinates.lng}&format=json`,
                    { headers: { 'User-Agent': 'AdowisePortfolio/1.0' } }
                );
                const reverseData = await reverseRes.json();
                if (reverseData.address) {
                    location = {
                        country: reverseData.address.country || location.country,
                        city: reverseData.address.city || reverseData.address.town || reverseData.address.village || location.city,
                    };
                }
            } catch (e) {
                console.error("Reverse geocoding failed:", e);
            }
        }

        const visitorData = {
            ip,
            userAgent,
            path,
            language,
            location,
            ...(coordinates && { coordinates }),
        };

        try {
            await Visitor.create(visitorData);
        } catch (dbError) {
            console.error("Mongoose Visitor.create failed:", dbError);
            throw dbError;
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Failed to log visit (General Error):", error);
        return NextResponse.json({ error: "Failed to log visit", message: error instanceof Error ? error.message : "Internal Server Error" }, { status: 500 });
    }
}
