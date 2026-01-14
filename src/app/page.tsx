import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Founders from "@/components/Founders/Founders";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adowise - Himachal Pradesh Web Development Agency | Next.js React Experts",
  description: "HP की #1 web development company। Next.js, React, Tailwind से lightning-fast websites 7 days में। 50+ projects delivered। Free quote Himachal startups के लिए!",
  keywords: [
    "web development Himachal Pradesh",
    "Next.js agency HP", 
    "React development Solan",
    "website agency Himachal",
    "SaaS development HP",
    "Adowise web agency",
    "web designer Himachal Pradesh"
  ],
  openGraph: {
    title: "Adowise - Himachal Pradesh Web Development Company",
    description: "HP's fastest web agency | Next.js React experts | 50+ websites | 7 day delivery | Free consultation",
    url: "https://adowise.in/",
    siteName: "Adowise - HP Web Agency",
    images: [
      {
        url: "https://adowise.in/og-web-agency-hp.jpg",
        width: 1200,
        height: 630,
        alt: "Adowise Himachal Pradesh Web Development Agency"
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Himachal Pradesh Web Development | Adowise Agency",
    description: "Next.js React websites from HP | 50+ projects | Free quote today",
    images: ["https://adowise.in/twitter-web-agency.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://adowise.in/",
  },
  verification: {
    google: "your-google-verification-code", // Add when you have
  },
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Founders />
      <Blog />
      <Contact />

      {/* ✅ WhatsApp Business Button (HP Clients के लिए perfect) */}
      <a
        href="https://wa.me/9882835865?text=Hi%20Adowise%20Team%2C%20mujhe%20website%20banvani%20hai.%20Himachal%20Pradesh%20se%20hu.%20Details%20bhej%20sakte%20ho%3F"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[9999] bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white p-4 rounded-full shadow-2xl hover:shadow-emerald/50 hover:scale-110 transition-all duration-300 animate-bounce-slow border-4 border-white/20"
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="28" height="28">
          <path d="M20.52 3.48A11.78 11.78 0 0012 0a11.78 11.78 0 00-8.52 3.48A11.78 11.78 0 000 12a11.63 11.63 0 001.62 5.94L0 24l6.24-1.62A12 12 0 0012 24a11.78 11.78 0 008.52-3.48A11.78 11.78 0 0024 12a11.78 11.78 0 00-3.48-8.52zM12 22a9.9 9.9 0 01-5-1.38l-.36-.18-3.7.96.98-3.6-.22-.38A9.9 9.9 0 012 12a10 10 0 1110 10zm5.44-7.44c-.3-.15-1.77-.87-2.04-.97s-.47-.15-.67.15-.77.97-.94 1.17-.35.22-.65.07a8.15 8.15 0 01-2.4-1.47 9 9 0 01-1.68-2.1c-.17-.3 0-.46.13-.61.13-.13.3-.35.43-.52a2 2 0 00.28-.5.56.56 0 00-.02-.54c-.07-.15-.67-1.62-.92-2.22s-.5-.5-.67-.5h-.57a1.1 1.1 0 00-.8.37 3.34 3.34 0 00-1.04 2.47 5.85 5.85 0 001.22 3.07 13.26 13.26 0 005.02 4.47c.6.26 1.07.41 1.44.54a3.47 3.47 0 001.57.1 2.62 2.62 0 001.78-1.25 2.18 2.18 0 00.15-1.25c-.06-.1-.25-.16-.55-.32z" />
        </svg>
      </a>

      <style jsx global>{`
        @keyframes whatsapp-shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-4px); }
          75% { transform: translateX(4px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-whatsapp-shake { animation: whatsapp-shake 2s infinite; }
        .animate-bounce-slow { animation: bounce-slow 2s infinite; }
      `}</style>
    </>
  );
}
