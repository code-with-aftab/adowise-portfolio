import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* Image Column */}
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.png"
                alt="Adowise Himachal Pradesh Web Development Team"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none rounded-3xl"
              />
              <Image
                src="/images/about/about-image-2-dark.png"
                alt="Adowise HP Web Agency Innovation"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none rounded-3xl"
              />
            </div>
          </div>

          {/* Text Column - Detailed Professional Content */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[500px]">
              {/* Feature 1 - Extended */}
              <div className="mb-12">
                <h3 className="mb-6 text-2xl md:text-3xl font-black bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  🚀 7-Day Lightning Website Delivery
                </h3>
                <p className="text-lg leading-relaxed text-body-color mb-4">
                  Himachal Pradesh's fastest web development agency delivering production-ready Next.js React websites in just 7 days. From concept to live deployment, we eliminate delays with our streamlined process, dedicated project managers, and pre-built component libraries ensuring zero excuses - only exceptional results.
                </p>
                <ul className="list-disc list-inside text-base text-body-color/80 space-y-1 mb-2">
                  <li>Fully responsive mobile-first design</li>
                  <li>SEO optimized out-of-the-box</li>
                  <li>Production-ready deployment</li>
                </ul>
              </div>

              {/* Feature 2 - Extended */}
              <div className="mb-12">
                <h3 className="mb-6 text-2xl md:text-3xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  💰 World-Class Quality at HP Prices
                </h3>
                <p className="text-lg leading-relaxed text-body-color mb-4">
                  Calgary/North America quality standards at Himachal Pradesh pricing. Perfect for startups and SMBs looking for enterprise-grade websites without breaking the bank. Unlimited revisions until you're 100% satisfied with flexible payment plans tailored for Indian businesses.
                </p>
                <ul className="list-disc list-inside text-base text-body-color/80 space-y-1 mb-2">
                  <li>Websites starting at ₹25,000</li>
                  <li>Custom SaaS dashboards ₹75,000+</li>
                  <li>eCommerce stores ₹1.5L+</li>
                  <li>Monthly maintenance ₹5,000</li>
                </ul>
              </div>

              {/* Feature 3 - Extended */}
              <div className="mb-1">
                <h3 className="mb-6 text-2xl md:text-3xl font-black bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  ⚡ Next.js 15 + React 19 + TypeScript Stack
                </h3>
                <p className="text-lg leading-relaxed text-body-color mb-4">
                  Built with the absolute latest technology stack guaranteeing Google Page #1 rankings, Core Web Vitals excellence, and future-proof scalability. Our SEO-first approach combined with mobile-first design and lightning-fast performance ensures your website dominates search results from day one.
                </p>
                <ul className="list-disc list-inside text-base text-body-color/80 space-y-1">
                  <li>Next.js 15 App Router + Server Components</li>
                  <li>React 19 + TypeScript + Tailwind CSS</li>
                  <li>Prisma ORM + PostgreSQL + Vercel deployment</li>
                  <li>Google PageSpeed 95+ scores guaranteed</li>
                  <li>PWA ready + Offline support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
