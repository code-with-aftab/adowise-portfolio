"use client";

import { Inter } from "next/font/google";
import LenisProvider from "@/components/lenis-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    return (
        <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
            <Providers>
                <LenisProvider>
                    <div className="isolate">
                        <Header />
                        {children}
                        <Footer />
                    </div>
                </LenisProvider>
            </Providers>
        </body>
    );
}
