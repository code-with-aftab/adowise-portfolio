import Image from "next/image";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

type Founder = {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  social?: {
    linkedin?: string;
    twitter?: string;
  };
};

const foundersData: Founder[] = [
  {
    id: 1,
    name: "Mohd Altaf",
    role: "Founder & CEO",
    image: "/images/altaf.jpg",
    bio: "Altaf is a visionary leader with over 6 years of experience in SaaS and web technologies. He focuses on building scalable and user-friendly platforms.",
    social: {
      linkedin: "https://linkedin.com/in/reachmohdaltaf",
      twitter: "https://twitter.com/reachmohdaltaf",
    },
  },
  {
    id: 2,
    name: "Mohd Aftab",
    role: "Co-founder & CTO",
    image: "/images/aftab.jpg",
    bio: "Aftab is a tech enthusiast and full-stack developer. He leads the product and engineering teams ensuring top-notch quality and innovation.",
    social: {
      linkedin: "https://linkedin.com/in/aftab",
      twitter: "https://twitter.com/aftab",
    },
  },
];

const FounderCard = ({ founder }: { founder: Founder }) => (
  <div className="w-full px-4 md:w-1/2">
    <div className="group relative mb-10 overflow-hidden rounded-2xl">
      {/* Glassmorphism card */}
      <div className="relative z-10 rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl dark:border-gray-700/30 dark:bg-gray-900/40">
        
        {/* Profile Image with glow effect */}
        <div className="relative mx-auto mb-6 h-40 w-40">
          {/* Blurred light circle in background */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl"></div>
          <div className="relative rounded-full border-4 border-white/50 p-1 dark:border-gray-600/50">
            <Image
              src={founder.image}
              alt={founder.name}
              width={160}
              height={160}
              className="rounded-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative">
          <h4 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
            {founder.name}
          </h4>
          
          <p className="mb-4 text-lg font-semibold text-blue-600 dark:text-blue-400">
            {founder.role}
          </p>

          <p className="mb-6 text-gray-700 dark:text-gray-300">
            {founder.bio}
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            {founder.social?.linkedin && (
              <a
                href={founder.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/30 text-gray-700 backdrop-blur-sm transition-all duration-300 hover:bg-blue-600 hover:text-white dark:bg-gray-800/50 dark:text-gray-300 dark:hover:bg-blue-600"
                aria-label={`${founder.name}'s LinkedIn`}
              >
                <FaLinkedin size={18} />
              </a>
            )}
            
            {founder.social?.twitter && (
              <a
                href={founder.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/30 text-gray-700 backdrop-blur-sm transition-all duration-300 hover:bg-blue-400 hover:text-white dark:bg-gray-800/50 dark:text-gray-300 dark:hover:bg-blue-400"
                aria-label={`${founder.name}'s Twitter`}
              >
                <FaTwitter size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
      
      {/* Background gradient light effect */}
      <div className="absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10 blur-3xl"></div>
    </div>
  </div>
);

const Founders = () => {
  return (
    <section className="relative py-20 md:py-24 lg:py-32">
      {/* Background light effects */}
      <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl"></div>
      
      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            Meet Our Founders
          </h2>
        </div>

        {/* Founders Grid */}
        <div className="-mx-4 flex flex-wrap justify-center">
          {foundersData.map((founder) => (
            <FounderCard key={founder.id} founder={founder} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;