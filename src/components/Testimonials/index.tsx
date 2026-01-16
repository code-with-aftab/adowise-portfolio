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
    content: "Adowise helped us develop a custom trading analytics platform. The team's dedication and expertise was evident throughout the project. They delivered a high-quality solution that met our needs and exceeded our expectations. I highly recommend Adowise for any software development project.",
    image: "https://avatars.githubusercontent.com/u/108542318?v=4",
    star: 5,
  },
  {
    id: 2,
    name: "Rajiv Ali", 
    designation: "Founder, Wholesalewale",
    content: "Working with Adowise was transformative for our wholesale platform. They built a tailored SaaS solution that seamlessly integrated advanced dashboard components and analytics features. Their ability to combine innovation with practical execution has been greatly valued by both our team and clients.",
    image: "https://scontent.fixc4-5.fna.fbcdn.net/v/t39.30808-1/344545639_1441036976650491_5068481260314406811_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_ohc=rjyxWihXCPkQ7kNvwFmxo8-&_nc_oc=AdkMii_gv-nBShogX11VCGQF1l-Y63EpD-DMu9E9Q7c81oU6krQhd8z5WC74rRtbajED3-1mNqNgnTJU2QcjFlPv&_nc_zt=24&_nc_ht=scontent.fixc4-5.fna&_nc_gid=l55_fg3ShzA-SJ_0yW_6Dw&oh=00_AfpzIwUu1RJTvb57hRA2xMsrINJ4Lf_SwKmqaoQyWptMrQ&oe=696F0342",
    star: 5,
  },
  {
    id: 3,
    name: "Ram Bansal",
    designation: "Founder, Explorin",
    content: "Adowise helped us develop a custom travel dashboard solution. The dedication and expertise of the team was evident throughout the project. They delivered a high-quality solution that met our needs and exceeded our expectations. I highly recommend Adowise for any SaaS development project.",
    image: "https://media.licdn.com/dms/image/v2/C4D03AQFTDAn1hA_w3g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1649158698974?e=1770249600&v=beta&t=dO_iT_PBllmbr_ndA4Fjg6K-S9SLx6uKA4UheUlqf7o",
    star: 5,
  },
  {
    id: 4,
    name: "Rahul Sharma",
    designation: "Full Stack Developer, GrowthStack",
    content: "Adowise provided us with a production-ready Next.js boilerplate that accelerated our development timeline. Their team's technical expertise and attention to detail resulted in a clean, maintainable codebase that our entire development team appreciates.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    star: 5,
  },
  {
    id: 5,
    name: "Priya S.",
    designation: "React Developer, ScaleEasy",
    content: "The mobile-first design system developed by Adowise has been perfect for our scaling needs. Their ready-to-use components saved us significant development time while maintaining excellent performance and responsiveness across all devices.",
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
            className="embla select-none" // Add select-none here
            ref={emblaRef}
          >
            <div className="embla__container flex h-full select-none"> {/* And here */}
              {testimonialData.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="embla__slide flex-[0_0_80%] md:flex-[0_0_60%] lg:flex-[0_0_40%] pl-4 select-none" // And here
                >
                  <div className="bg-white/70 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl border border-gray-600/50 dark:border-gray-700/50 p-8 h-full flex flex-col justify-center select-none"> {/* And here */}
                    <div className="flex items-center gap-3 mb-6 select-none">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="w-16 h-16 rounded-full object-cover border-4 border-blue-100 dark:border-blue-900/50 shadow-lg select-none"
                      />
                      <div className="text-yellow-400 text-2xl select-none">★★★★★</div>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-6 italic flex-1 select-none">
                      "{testimonial.content}"
                    </p>
                    <div className="select-none">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white select-none">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 select-none">
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
        <div className="flex gap-2 justify-center mt-12">
          {testimonialData.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600 hover:bg-blue-400 transition-colors duration-300 select-none"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;