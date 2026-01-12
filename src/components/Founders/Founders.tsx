import Image from "next/image";

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
  },
  {
    id: 2,
    name: "Mohd Aftab",
    role: "Co-founder & CTO",
    image: "/images/aftab.jpg",
    bio: "Aftab is a tech enthusiast and full-stack developer. He leads the product and engineering teams ensuring top-notch quality and innovation.",
  },
];

const FounderCard = ({ founder }: { founder: Founder }) => (
  <div className="w-full px-4 md:w-1/2">
    <div className="mb-10 rounded-xl bg-white p-6 text-center shadow-lg dark:bg-gray-800">
      {/* MOBILE FIX — CENTER IMAGE */}
      <div className="relative mx-auto mb-5 h-32 w-32">
        <Image
          src={founder.image}
          alt={founder.name}
          height={110}
          width={110}
          className="rounded-md object-cover"
        />
      </div>

      <h4 className="mb-1 text-xl font-semibold text-black dark:text-white">
        {founder.name}
      </h4>

      <p className="text-body-color mb-3 dark:text-gray-300">{founder.role}</p>

      <p className="text-body-color mb-3 text-sm dark:text-gray-400">
        {founder.bio}
      </p>

      <div className="flex justify-center space-x-4">
        {founder.social?.linkedin && (
          <a
            href={founder.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            LinkedIn
          </a>
        )}

        {founder.social?.twitter && (
          <a
            href={founder.social.twitter}
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:text-blue-600"
          >
            Twitter
          </a>
        )}
      </div>
    </div>
  </div>
);

const Founders = () => {
  return (
    <section className="bg-gray-light py-16 md:py-20 lg:py-28 dark:bg-gray-900">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold text-black dark:text-white">
          Meet Our Founders
        </h2>

        <div className="-mx-4 flex flex-wrap">
          {foundersData.map((founder) => (
            <FounderCard key={founder.id} founder={founder} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;
