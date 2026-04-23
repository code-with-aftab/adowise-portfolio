import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

const MONGODB_URI = process.env.MONGODB_URI?.trim().replace(/^["']|["']$/g, '');

if (!MONGODB_URI) {
    console.error("MONGODB_URI not found in .env");
    process.exit(1);
}

const FounderSchema = new mongoose.Schema({
    name: String,
    image: String,
});

const Founder = mongoose.models.Founder || mongoose.model("Founder", FounderSchema);

async function updateFounderImage() {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("Connected to MongoDB");

        const result = await Founder.updateOne(
            { name: "Mohd Altaf" },
            { $set: { image: "/mohd-altaf.png" } }
        );

        if (result.matchedCount > 0) {
            console.log("Successfully updated Mohd Altaf's image in the database.");
        } else {
            console.log("Mohd Altaf not found in the database. No DB update needed.");
        }

        await mongoose.disconnect();
    } catch (error) {
        console.error("Error updating database:", error);
    }
}

updateFounderImage();
