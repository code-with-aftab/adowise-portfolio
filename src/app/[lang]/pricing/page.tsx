import Breadcrumb from "@/components/Common/Breadcrumb";
import Pricing from "@/components/Pricing";
import { Metadata } from "next";
import { getMessages } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const messages = await getMessages(lang);
  const t = messages.Pricing || {};

  return {
    title: t.title,
    description: t.subtitle,
    alternates: {
      canonical: `https://adowise.com/${lang}/pricing`,
    },
    openGraph: {
      title: t.title,
      description: t.subtitle,
      url: `https://adowise.com/${lang}/pricing`,
      type: "website",
    }
  };
}

const PricingPage = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const { lang } = await params;
  const messages = await getMessages(lang);
  const t = messages.Pricing || {};

  return (
    <>
      <Breadcrumb
        pageName={t.title}
        description={t.subtitle}
        lang={lang}
        slug="pricing"
      />
      <Pricing messages={messages} />
    </>
  );
};

export default PricingPage;
