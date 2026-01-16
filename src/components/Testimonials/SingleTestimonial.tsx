import { Testimonial } from "@/types/testimonial";
import Image from "next/image";

const starIcon = (
  <svg width="14" height="14" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { star, name, image, content, designation } = testimonial;

  return (
    <div className="w-full">
      <div
        className="
          bg-white dark:bg-dark
          rounded-xl shadow-two
          p-3 sm:p-6
          max-h-[190px] sm:max-h-none
          overflow-hidden
          transition-all
        "
      >
        {/* Stars */}
        <div className="flex items-center space-x-1 mb-2 text-yellow-400">
          {Array.from({ length: star }).map((_, i) => (
            <span key={i}>{starIcon}</span>
          ))}
        </div>

        {/* Content */}
        <p
          className="
            text-[11px] sm:text-base
            leading-tight sm:leading-relaxed
            text-body-color dark:text-white
            line-clamp-2 sm:line-clamp-none
            mb-2
          "
        >
          “{content}”
        </p>

        {/* User */}
        <div className="flex items-center gap-2 mt-2">
          <Image
            src={image}
            alt={name}
            width={32}
            height={32}
            className="rounded-full object-cover sm:w-[48px] sm:h-[48px]"
          />
          <div>
            <h3 className="text-xs sm:text-lg font-semibold dark:text-white">
              {name}
            </h3>
            <p className="text-[10px] sm:text-sm text-body-color">
              {designation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
