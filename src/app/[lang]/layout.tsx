import { Metadata } from "next";
import ClientLayout from "../client-layout";
import "../../styles/index.css";
import { getMessages } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const messages = await getMessages(lang);
  const t = messages.SEO || messages.Index; // Fallback to Index if SEO not found

  const baseUrl = "https://adowise.in";

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: t.title,
      template: `%s | ${t.title || "Adowise"}`,
    },
    description: t.description,
    keywords: t.keywords || "web development, AI, SaaS, Adowise",
    authors: [{ name: "Adowise Team", url: baseUrl }],
    creator: "Adowise",
    publisher: "Adowise",
    alternates: {
      canonical: `${baseUrl}/${lang}`,
      languages: {
        "x-default": `${baseUrl}/en`,
        "en": `${baseUrl}/en`,
        "hi": `${baseUrl}/hi`,
        "es": `${baseUrl}/es`,
        "fr": `${baseUrl}/fr`,
        "de": `${baseUrl}/de`,
        "ar": `${baseUrl}/ar`,
      },
    },
    openGraph: {
      type: "website",
      locale: lang,
      url: `${baseUrl}/${lang}`,
      title: t.og_title || t.title,
      description: t.og_description || t.description,
      siteName: "Adowise",
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: t.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t.og_title || t.title,
      description: t.og_description || t.description,
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
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const messages = await getMessages(lang);
  const t = messages.SEO || messages.Index;

  return (
    <html suppressHydrationWarning lang={lang}>
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
                "@type": "Organization",
                "name": "Adowise",
                "alternateName": "Adowise IT Agency",
                "url": "https://adowise.in",
                "logo": "https://adowise.in/adowise-logo.png",
                "image": "https://adowise.in/images/og-image.png",
                "description": "Adowise is a world-class IT agency specializing in Next.js development, AI SaaS products, and global digital transformation.",
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
                  "availableLanguage": ["English", "Hindi", "Spanish", "French", "German", "Arabic"]
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
              },
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                "name": "Moltbot",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD"
                }
              }
            ])
          }}
        />
      </head>
      <ClientLayout lang={lang} messages={messages}>{children}</ClientLayout>
    </html>
  );
}

