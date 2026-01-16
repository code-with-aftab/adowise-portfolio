"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import brandsData from "./brandsData";

const Brands = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <section className="  bg-gradient-to-r pt-10  dark:from-gray-900/80 dark:to-slate-900/80 overflow-hidden">
      <div className="container mx-auto px-2 sm:px-4">
        {/* FIXED Marquee - Mobile Responsive */}
        <div className="relative overflow-hidden rounded-lg">
          <div className="flex animate-marquee items-center whitespace-nowrap min-w-[calc(100%+12rem)] sm:min-w-[calc(100%+16rem)] md:min-w-[calc(100%+24rem)] lg:min-w-[calc(100%+32rem)]">
            {[...brandsData, ...brandsData].map((brand, index) => (
              <Link
                key={`${brand.id}-${index}`}
                href={brand.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative mx-0 sm:mx-2 md:mx-6 lg:mx-8 w-44 h-20  sm:w-44 sm:h-44 md:w-44 md:h-44 lg:w-72 lg:h-18 hover:scale-105 md:hover:scale-110 transition-all duration-300 opacity-70 hover:opacity-100 flex-shrink-0"
                aria-label={`Visit ${brand.name}`}
              >
                <Image
                  src={isDark ? brand.imageLight : brand.image}
                  alt={`${brand.name} logo`}
                  fill
                  className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300 p-1"
                  priority={brand.id === 1 && index === 0}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
