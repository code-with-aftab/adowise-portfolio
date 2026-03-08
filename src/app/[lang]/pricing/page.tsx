import Breadcrumb from "@/components/Common/Breadcrumb";
import Pricing from "@/components/Pricing";
import { Metadata } from "next";
import { getMessages } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const messages = await getMessages(lang);
  const t = messages.Pricing || {};
  const seo = messages.SEO || {};

  return {
    title: t.title || "Pricing | Adowise - Affordable Web & SaaS Development",
    description: t.subtitle || "Get transparent, competitive pricing for premium website development.",
    keywords: seo.keywords || "web development pricing, affordable SaaS development, ecommerce website cost",
    alternates: {
      canonical: `https://adowise.in/${lang}/pricing`,
    },
    openGraph: {
      title: t.title,
      description: t.subtitle,
      url: `https://adowise.in/${lang}/pricing`,
      type: "website",
    }
  };
}

const PricingPage = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const { lang } = await params;
  const messages = await getMessages(lang);
  const t = messages.Pricing || {};
  const breadcrumbs = messages.Breadcrumbs || {};

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": breadcrumbs.home || "Home",
        "item": `https://adowise.in/${lang}`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": breadcrumbs.pricing || "Pricing",
        "item": `https://adowise.in/${lang}/pricing`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumb
        pageName={t.title || "Pricing"}
        description={t.subtitle || "Transparent website development pricing for startups, businesses, and ecommerce brands."}
      />
      <Pricing messages={messages} />
    </>
  );
};

export default PricingPage;
