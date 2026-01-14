import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Adowise - Web Development Agency for Chandigarh, Punjab & Himachal | Free Quote",
  description:
    "Contact Adowise for fast Next.js React website development. We serve businesses in Chandigarh, Tricity, Punjab and Himachal Pradesh with 7-day delivery and startup-friendly pricing.",
  keywords: [
    "web development Chandigarh contact",
    "website agency Tricity phone",
    "Next.js developer Solan Himachal",
    "web development Punjab free quote",
    "Adowise web agency contact",
    "hire React developer North India"
  ],
  openGraph: {
    title:
      "Contact Adowise - Next.js React Web Development for Chandigarh, Punjab & Himachal",
    description:
      "Get a free project quote for your business website, landing page or SaaS app. Adowise helps Chandigarh, Punjab and Himachal Pradesh businesses launch high-converting websites in 7 days.",
    images: ["/og/contact-adwise-north-india.jpg"],
    url: "https://adowise.in/contact",
    siteName: "Adowise Web Development Agency",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Contact Adowise - Fast Web Development for Chandigarh & Himachal",
    description:
      "Next.js React websites with 7-day delivery and startup-friendly pricing. Request your free quote today.",
    images: ["/twitter/contact-adwise-north-india.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://adowise.in/contact",
  },
};


const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="Get your free website quote from Himachal Pradesh's fastest web development agency. Next.js React experts ready to build your dream project."
      />
      <Contact />
    </>
  );
};

export default ContactPage;
