"use client";

import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import { ShinyButton } from "../ui/shiny-button";
import { Check } from "lucide-react";
import Script from "next/script";

const Pricing = ({ messages }: { messages?: any }) => {
  const t = messages?.Pricing || {};
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

  const plans = [
    {
      name: t.basic_name || "Basic Website Plan",
      price: "₹8,000",
      numericPrice: 8000,
      period: "one-time",
      description: t.basic_desc || "Up to 5 pages for startups and local businesses that need a clean, responsive website fast.",
      delivery: "3–5 working days",
      cta: t.cta_basic || "Choose Basic Plan",
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
      name: t.business_name || "Business Website Plan",
      price: "₹15,000",
      numericPrice: 15000,
      period: "one-time",
      description: t.business_desc || "For growing businesses that need custom presentation, editable content, and stronger conversion structure.",
      delivery: "5–7 working days",
      cta: t.cta_business || "Choose Business Plan",
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
      name: t.custom_name || "Fully Custom Enterprise Plan",
      price: "₹22,000",
      numericPrice: 22000,
      period: "one-time",
      description: t.custom_desc || "A fully customized, professional website or web application tailored specifically to your exact business requirements.",
      delivery: "7–10 working days",
      cta: t.cta_custom || "Choose Custom Plan",
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

  const handlePayment = async (amount: number, planName: string) => {
    setLoadingPlan(planName);
    
    try {
      const orderResponse = await fetch("/api/razorpay/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });
      
      const orderData = await orderResponse.json();
      
      if (!orderResponse.ok) throw new Error(orderData.error || "Failed to create order");
      
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_live_SdqwY6SMbOGTV8",
        amount: orderData.amount,
        currency: orderData.currency,
        name: "Adowise",
        description: planName,
        order_id: orderData.id,
        handler: async function (response: any) {
          const verifyData = {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          };

          try {
            const verifyResponse = await fetch("/api/razorpay/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(verifyData),
            });
            
            const verifyResult = await verifyResponse.json();
            if (verifyResult.success) {
              alert("Payment successful! Thank you for choosing Adowise.");
            } else {
              alert("Payment verification failed. Please contact support.");
            }
          } catch (err) {
            console.error("Verification error", err);
            alert("Error verifying payment.");
          }
        },
        prefill: {
          name: "",
          email: "",
          contact: "",
        },
        theme: {
          color: "#4A6CF7",
        },
      };

      const razorpay = new (window as any).Razorpay(options);
      
      razorpay.on("payment.failed", function (response: any) {
        console.error("Payment failed", response.error);
        alert("Payment failed: " + response.error.description);
      });
      
      razorpay.open();
    } catch (error) {
      console.error(error);
      alert("Something went wrong initializing the payment. Please try again.");
    } finally {
      setLoadingPlan(null);
    }
  };

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
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
              <p className="mb-6 text-sm font-semibold text-primary">{t.delivery || "Delivery"}: {plan.delivery}</p>

              <div className="block mb-7 cursor-pointer" onClick={() => handlePayment(plan.numericPrice, plan.name)}>
                <ShinyButton className="w-full border-primary/40 bg-primary/5 text-center">
                  {loadingPlan === plan.name ? "Processing..." : plan.cta}
                </ShinyButton>
              </div>

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

