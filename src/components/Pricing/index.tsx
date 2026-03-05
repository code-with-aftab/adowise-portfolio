"use client";

import SectionTitle from "../Common/SectionTitle";
import { ShinyButton } from "../ui/shiny-button";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Basic Website Plan",
    price: "₹8,000",
    period: "one-time",
    description:
      "Up to 5 pages for startups and local businesses that need a clean, responsive website fast.",
    delivery: "3–5 working days",
    cta: "Choose Basic Plan",
    popular: false,
    features: [
      "Up to 5 pages (Home, About, Services, Contact, Gallery)",
      "Responsive design (mobile, tablet, desktop)",
      "Clean UI layout",
      "Contact / enquiry form with email integration",
      "Basic SEO setup (title, meta tags)",
      "Google Map integration (if required)",
      "Social media links integration",
      "Domain connection and website deployment",
    ],
  },
  {
    name: "Business Website Plan",
    price: "₹15,000",
    period: "one-time",
    description:
      "For growing businesses that need custom presentation, editable content, and stronger conversion structure.",
    delivery: "5–7 working days",
    cta: "Choose Business Plan",
    popular: true,
    features: [
      "Up to 8–10 pages website",
      "Custom UI design (professional layout)",
      "Fully responsive design",
      "Admin panel / CMS to update content",
      "Blog / news section (optional)",
      "Contact form with email notification",
      "Basic SEO optimization",
      "Google Analytics integration",
      "Social media integration",
      "Website deployment on domain",
    ],
  },
  {
    name: "Fully Custom Enterprise Plan",
    price: "₹22,000",
    period: "one-time",
    description:
      "A fully customized, professional website or web application tailored specifically to your exact business requirements.",
    delivery: "7–10 working days",
    cta: "Choose Custom Plan",
    popular: false,
    features: [
      "Fully customized architecture and design",
      "Advanced functionality & API integrations",
      "User authentication and profile management",
      "Secure database and backend system",
      "Payment gateway integration (UPI / Card / Netbanking)",
      "Custom admin dashboard & CMS",
      "Advanced user tracking and analytics",
      "Mobile-first responsive progressive design",
      "Advanced SEO & performance optimization",
      "Automated email & SMS notifications",
      "Website deployment & server setup",
      "Domain Purchase included (₹800 - ₹1500/year value)",
      "Initial Content/Data Setup included (₹2,000 - ₹5,000 value)",
      "Monthly maintenance and updates (₹1,000 value)"
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">


        <div className="grid items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative overflow-hidden rounded-xs border p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 ${plan.popular
                ? "border-primary/40 bg-white/95 shadow-2xl dark:bg-gray-dark/95 lg:scale-[1.02]"
                : "border-body-color/20 bg-white/80 shadow-three dark:border-white/10 dark:bg-gray-dark/75"
                }`}
            >
              <div className="mb-6 flex items-center justify-between gap-2">
                <h3 className="text-dark text-2xl font-bold dark:text-white">{plan.name}</h3>
              </div>

              <div className="mb-2 flex items-end gap-2">
                <span className="text-dark text-4xl font-extrabold dark:text-white">{plan.price}</span>
                <span className="text-body-color pb-1 text-sm">/{plan.period}</span>
              </div>

              <p className="text-body-color mb-3 text-sm leading-relaxed">{plan.description}</p>
              <p className="mb-6 text-sm font-semibold text-primary">Delivery: {plan.delivery}</p>

              <Link href={`/contact?plan=${encodeURIComponent(plan.name)}`} className="block mb-7">
                <ShinyButton className="w-full border-primary/40 bg-primary/5 text-center">
                  {plan.cta}
                </ShinyButton>
              </Link>

              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <span className="bg-primary/10 mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-primary">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-body-color">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-primary/10 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-16 left-1/2 h-28 w-28 -translate-x-1/2 rounded-full bg-primary/10 blur-xl" />
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;
