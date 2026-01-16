"use client";

import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";
import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Abhishek Gupta",
    designation: "Founder, Tradylytics",
    content: "Adowise helped us develop a custom trading analytics platform. Their dedication and expertise exceeded our expectations.",
    image: "https://avatars.githubusercontent.com/u/108542318?v=4",
    star: 5,
  },
  {
    id: 2,
    name: "Ananya", 
    designation: "Founder, Wholesalewale",
    content: "Transformative for our wholesale platform. Their SaaS solution integrated advanced analytics seamlessly.",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop&crop=face",
    star: 5,
  },
  {
    id: 3,
    name: "Ram Bansal",
    designation: "Founder, Explorin",
    content: "Helped develop our travel dashboard solution. Delivered high-quality work that exceeded expectations.",
    image: "https://media.licdn.com/dms/image/v2/C4D03AQFTDAn1hA_w3g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1649158698974?e=1770249600&v=beta&t=dO_iT_PBllmbr_ndA4Fjg6K-S9SLx6uKA4UheUlqf7o",
    star: 5,
  },
  {
    id: 4,
    name: "Rahul Sharma",
    designation: "Full Stack Developer",
    content: "Production-ready Next.js boilerplate accelerated our timeline. Clean, maintainable codebase.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    star: 5,
  },
  {
    id: 5,
    name: "Priya S.",
    designation: "React Developer",
    content: "Mobile-first design system perfect for scaling. Saved significant development time.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
    star: 5,
  },
];

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true, 
      align: "center",
      containScroll: "trimSnaps"
    },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  );

  return (
    <section className="py-5 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-1">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full mb-8">
            <span className="text-2xl font-bold">25+</span>
            <span>Trusted SaaS Teams</span>
          </div>
          <SectionTitle
            title="Client Success Stories"
            paragraph="Real developers building with Adowise"
            center
          />
        </div>

        {/* Embla Carousel */}
        <div className="py-2 mx-auto overflow-hidden">
          <div 
            className="embla select-none"
            ref={emblaRef}
          >
            <div className="embla__container flex h-full">
              {testimonialData.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="embla__slide flex-[0_0_80%] md:flex-[0_0_60%] lg:flex-[0_0_40%] pl-4 min-h-[300px]"
                >
                  <div className="bg-white/70 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl border border-gray-600/50 dark:border-gray-700/50 p-6 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="relative w-12 h-12 md:w-14 md:h-14">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="rounded-full object-cover border-2 border-blue-100 dark:border-blue-900/50 shadow-lg"
                          sizes="(max-width: 768px) 48px, 56px"
                        />
                      </div>
                      <div className="text-yellow-400 text-xl md:text-2xl">★★★★★</div>
                    </div>
                    <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4 italic flex-grow line-clamp-4 md:line-clamp-none">
                      "{testimonial.content}"
                    </p>
                    <div className="mt-auto pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                      <h3 className="text-base md:text-lg font-bold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.designation}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex gap-2 justify-center mt-8">
          {testimonialData.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-gray-300 dark:bg-gray-600 hover:bg-blue-400 transition-colors duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;