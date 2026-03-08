import Breadcrumb from "@/components/Common/Breadcrumb";
import Pricing from "@/components/Pricing";
import { Metadata } from "next";
import { getMessages } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Pricing | Affordable World-Class Web & SaaS Development Cost",
  description:
    "Get transparent, competitive pricing for premium website development, top eCommerce stores, and custom SaaS platforms. Flexible, high-quality development packages for startups and worldwide enterprises.",
  keywords: [
    "web development pricing",
    "affordable SaaS development",
    "ecommerce website cost",
    "custom software development rates",
    "best IT agency pricing",
    "startup website packages",
    "how much does a website cost",
    "hire cheap but best web developer",
    "website making monthly plans",
    "Next.js react web app pricing",
    "affordable enterprise software rates",
    "best value web design agency"
  ],
  alternates: {
    canonical: "https://adowise.in/pricing",
  },
};

const PricingPage = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const { lang } = await params;
  const messages = await getMessages(lang);
  const t = messages.Pricing || {};

  return (
    <>
      <Breadcrumb
        pageName={t.title || "Pricing"}
        description={t.subtitle || "Transparent website development pricing for startups, businesses, and ecommerce brands."}
      />
      <Pricing messages={messages} />
    </>
  );
};

export default PricingPage;
