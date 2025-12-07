import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Ram  Bansal",
    designation: "CEO @Explorin.io",
    content:
      "Awoise transformed our workflow. The platform is intuitive, fast, and the support team is always available. Highly recommend for any SaaS business.",
    image: "/images/testimonials/auth-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Abhishek Singh",
    designation: "Co-founder @Tradylytics",
    content:
      "The integration with Next.js made our website lightning fast. Awoise's code is clean and easy to customize. Our team productivity has improved significantly.",
    image: "/images/testimonials/auth-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Altaf Shaikh",
    designation: "Product Manager @Formbold",
    content:
      "Switching to Awoise was the best decision for our project. The UI is elegant, responsive, and the documentation is extremely helpful.",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="What Our Users Say"
          paragraph="Trusted by top startups and SaaS businesses. Here’s what our users are saying about Awoise."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((testimonial) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>

      {/* Decorative SVGs */}
      <div className="absolute right-0 top-5 z-[-1]">
        {/* SVG code as in original */}
      </div>
      <div className="absolute bottom-5 left-0 z-[-1]">
        {/* SVG code as in original */}
      </div>
    </section>
  );
};

export default Testimonials;
