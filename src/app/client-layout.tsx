"use client";

import localFont from "next/font/local";
import LenisProvider from "@/components/lenis-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Providers } from "./providers";

const styrene = localFont({
    src: [
        {
            path: "../../public/font/styrene-font-family/StyreneA-Regular-Trial-BF63f6cbd970ee9.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/font/styrene-font-family/StyreneA-Medium-Trial-BF63f6cbdb24b6d.otf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../../public/font/styrene-font-family/StyreneA-Bold-Trial-BF63f6cbda1877f.otf",
            weight: "700",
            style: "normal",
        },
        {
            path: "../../public/font/styrene-font-family/StyreneA-Black-Trial-BF63f6cbd9da245.otf",
            weight: "900",
            style: "normal",
        },
    ],
    display: "swap",
});

export default function ClientLayout({
    children,
    lang,
    messages
}: {
    children: React.ReactNode;
    lang: string;
    messages: any;
}) {
    return (
        <body className={`bg-[#FCFCFC] dark:bg-black ${styrene.className}`}>
            <Providers>
                <LenisProvider>
                    <div>
                        <Header lang={lang} messages={messages} />
                        {children}
                        <Footer lang={lang} messages={messages} />
                    </div>
                </LenisProvider>
            </Providers>
        </body>
    );
}
