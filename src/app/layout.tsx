"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
// import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import LenisProvider from "@/components/lenis-provider";
import "../styles/index.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-WZCLJ6ML2S"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WZCLJ6ML2S');
            `,
          }}
        />
      </head>

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <LenisProvider>
            <div className="isolate">
              <Header />
              {children}
              <Footer />
            </div>

            {/* <ScrollToTop /> */}
          </LenisProvider>
        </Providers>
      </body>
    </html>
  );
}