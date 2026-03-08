import { Metadata } from "next";
import ClientLayout from "./client-layout";
import "../styles/index.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://adowise.in"),
  title: {
    default: "Adowise | Premier Web Development, Moltbot & Claude Bot Specialists",
    template: "%s | Adowise - Leading Digital Agency",
  },
  description:
    "Adowise is a world-class agency crafting high-performance websites, SaaS platforms, and AI-driven solutions like Moltbot and Claude Bot. Scale your business globally with our top-tier digital strategies and trending tech.",
  keywords: [
    "top IT agency in the world",
    "best SaaS development company globally",
    "AI automation services for enterprises",
    "premier web development agency",
    "high-performance ecommerce solutions",
    "global digital transformation agency",
    "expert Next.js developers for hire",
    "moltbot",
    "clawd bot",
    "Agentic AI experts",
    "Generative AI solutions",
    "Sora AI video production",
    "RAG architecture for enterprise",
    "Prompt Engineering services",
    "SpaceX Starship tech partners",
    "Artemis mission software",
    "Creator economy platforms",
    "DeFi development",
    "Carbon capture tech solutions",
    "Quantum machine learning",
    "Edge AI for IoT",
    "Short-form video strategy",
    "Brat summer web design",
    "Quiet luxury digital agency",
    "Digital nomad tech support",
    "trending tech agency 2026",
  ],
  authors: [{ name: "Adowise Team", url: "https://adowise.in" }],
  creator: "Adowise",
  publisher: "Adowise",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adowise.in",
    title: "Adowise | Premier Web Development & Trending AI Solutions",
    description:
      "Scale your business globally with our world-class web development, design, and digital marketing services. Experts in Moltbot and Claude Bot integrations.",
    siteName: "Adowise",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Adowise - Premier Web Development & Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adowise | Premier Web Development & AI Agents",
    description:
      "Scale your business globally with our world-class web development, design, and digital marketing services. Specialists in Moltbot & Claude Bot.",
    images: ["/images/og-image.png"],
    creator: "@adowise",
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
    canonical: "https://adowise.in",
    languages: {
      "en-US": "https://adowise.in/en",
      "hi-IN": "https://adowise.in/hi",
      "es-ES": "https://adowise.in/es",
      "fr-FR": "https://adowise.in/fr",
      "de-DE": "https://adowise.in/de",
      "ar-SA": "https://adowise.in/ar",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3458165392588157"
          crossOrigin="anonymous"></script>
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                "name": "Adowise",
                "url": "https://adowise.in",
                "logo": "https://adowise.in/adowise-logo.png",
                "image": "https://adowise.in/images/og-image.png",
                "description": "Adowise is the world's premier IT agency crafting high-performance websites, Next.js React SaaS platforms, and enterprise digital marketing solutions. Scale globally with the best developers.",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Chandigarh",
                  "addressRegion": "Chandigarh",
                  "addressCountry": "IN"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+91-9882835865",
                  "contactType": "customer service",
                  "areaServed": "Worldwide",
                  "availableLanguage": "en"
                },
                "sameAs": [
                  "https://www.linkedin.com/company/adowise",
                  "https://twitter.com/adowise",
                  "https://www.facebook.com/adowise",
                  "https://www.instagram.com/adowise"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Adowise",
                "url": "https://adowise.in",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://adowise.in/search?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              }
            ])
          }}
        />
      </head>
      <ClientLayout>{children}</ClientLayout>
    </html>
  );
}
