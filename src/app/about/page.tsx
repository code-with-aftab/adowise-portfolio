import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Adowise - Next.js React Web Development Agency for Chandigarh, Punjab & Himachal",
  description:
    "Adowise is a Next.js React web development agency based in Himachal Pradesh serving businesses in Chandigarh, Tricity, Punjab and North India with 7-day website delivery and startup-friendly pricing.",
  keywords: [
    "about Adowise web agency",
    "Next.js React developer Himachal Pradesh",
    "web development company Chandigarh",
    "startup website agency North India",
    "web designer Solan HP",
    "SaaS and business website development"
  ],
  openGraph: {
    title:
      "About Adowise - High-Performance Web Development for North Indian Businesses",
    description:
      "Learn about Adowise, a modern web development agency specializing in Next.js, React and Tailwind CSS for businesses in Chandigarh, Punjab and Himachal Pradesh.",
    images: ["/og/about-adwise-agency.jpg"],
    url: "https://adowise.in/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Adowise - Next.js React Web Development Agency",
    description:
      "Know the story, mission and expertise behind Adowise, helping North Indian startups and businesses launch fast, conversion-focused websites.",
    images: ["/twitter/about-adwise-agency.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://adowise.in/about",
  },
};


const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Discover Adowise, the ultimate SaaS & business solution designed to help startups and businesses scale efficiently."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
