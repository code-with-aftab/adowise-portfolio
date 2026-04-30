import { Metadata } from "next";
import ClientLayout from "../client-layout";
import "../../styles/index.css";
import { getMessages } from "@/lib/i18n";

const baseUrl = "https://adowise.com";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const messages = await getMessages(lang);
  const t = messages.SEO || messages.Index; // Fallback to Index if SEO not found

  const defaultTitle = "Adowise | Premier Web Development & AI Agency";
  const currentTitle = t.title || defaultTitle;

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: currentTitle,
      template: `%s | ${currentTitle}`,
    },
    description: t.description || "Adowise is a world-class IT agency specializing in Next.js development, AI SaaS products, and global digital transformation.",
    keywords: t.keywords || "web development agency, SaaS development, AI automation, Moltbot, Claude Bot, Agentic AI, Next.js experts, React development, enterprise software, digital transformation",
    authors: [{ name: "Adowise Team", url: baseUrl }],
    creator: "Adowise",
    publisher: "Adowise",
    applicationName: "Adowise",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
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
        "ur": `${baseUrl}/ur`,
      },
    },
    openGraph: {
      type: "website",
      locale: lang,
      url: `${baseUrl}/${lang}`,
      title: t.og_title || t.title || defaultTitle,
      description: t.description,
      siteName: "Adowise",
      images: [
        {
          url: `${baseUrl}/images/og-image.png`,
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
      images: [`${baseUrl}/images/og-image.png`],
      creator: "@adowise",
    },
    verification: {
      other: {
        "msvalidate.01": "75F97E946295F0C276DFEB58BF39EB2A",
        "google-adsense-account": "ca-pub-3458165392588157",
      },
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

  const isRTL = lang === "ar" || lang === "ur";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    "name": "Adowise",
    "alternateName": "Adowise IT Agency",
    "url": baseUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${baseUrl}/adowise-logo.png`,
      "width": 512,
      "height": 512
    },
    "image": `${baseUrl}/mohd-altaf.png`,
    "description": "Adowise is a world-class IT agency specializing in custom web development, AI-driven solutions, and SaaS platforms.",
    "founder": {
      "@type": "Person",
      "name": "Mohammad Altaf",
      "sameAs": [
        "https://www.linkedin.com/in/reachmohdaltaf/",
        "https://twitter.com/reachmohdaltaf",
        "https://github.com/reachmohdaltaf"
      ]
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Paonta Sahib",
      "addressRegion": "Himachal Pradesh",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "adowise.info@gmail.com",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://www.linkedin.com/company/adowise",
      "https://twitter.com/adowise"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    "name": "Adowise",
    "url": baseUrl,
    "publisher": {
      "@id": `${baseUrl}/#organization`
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${baseUrl}/${lang}/blog?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mohammad Altaf",
    "url": "https://www.linkedin.com/in/reachmohdaltaf/",
    "image": `${baseUrl}/mohd-altaf.png`,
    "jobTitle": "Founder & Full-Stack Developer",
    "worksFor": {
      "@id": `${baseUrl}/#organization`
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Paonta Sahib",
      "addressRegion": "Himachal Pradesh",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.linkedin.com/in/reachmohdaltaf/",
      "https://twitter.com/reachmohdaltaf",
      "https://github.com/reachmohdaltaf"
    ],
    "description": "Mohammad Altaf is a professional full-stack web developer and the founder of Adowise, specializing in real estate portals and SaaS solutions."
  };

  return (
    <html suppressHydrationWarning lang={lang} dir={isRTL ? "rtl" : "ltr"}>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3458165392588157"
          crossOrigin="anonymous"
        ></script>
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
            __html: JSON.stringify([organizationSchema, websiteSchema, personSchema])
          }}
        />
      </head>
      <ClientLayout lang={lang} messages={messages}>{children}</ClientLayout>
    </html>
  );
}

