import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export async function generateMetadata({
  searchParams,
}: { searchParams: { page?: string } }): Promise<Metadata> {
  const page = searchParams?.page ? ` - Page ${searchParams.page}` : "";

  return {
    title: `Web Development Blog${page} | Next.js & React Tutorials for Chandigarh, Punjab & Himachal`,
    description: `Read web development blogs${page} on Next.js, React, Tailwind CSS and SEO for businesses in Chandigarh, Tricity, Punjab and Himachal Pradesh. Learn how to get a high-converting website in 7 days.`,
    keywords: [
      "web development blog Chandigarh",
      "Next.js tutorial Himachal Pradesh",
      "React tips for startups",
      "Tailwind CSS blog India",
      "website development Solan HP",
      "web design tips for Punjab businesses"
    ],
    openGraph: {
      title: `Adowise Web Dev Blog${page} - Next.js & React Insights for North India`,
      description:
        "Practical web development guides, case studies and tutorials for businesses in Chandigarh, Punjab and Himachal Pradesh. Built by a Next.js React agency.",
      images: ["/og/blog-grid-adwise.jpg"],
      url: `https://adowise.in/blog${searchParams?.page ? `?page=${searchParams.page}` : ""}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Adowise Blog${page} - Web Development & Next.js Tutorials`,
      description:
        "North India focused web development blog covering Next.js, React, Tailwind CSS and SEO for local businesses.",
      images: ["/twitter/blog-grid-adwise.jpg"],
    },
    alternates: {
      canonical: `https://adowise.in/blog${searchParams?.page ? `?page=${searchParams.page}` : ""}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}


const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="Blog Grid"
        description="Himachal Pradesh web development insights, Next.js React tutorials from Adowise agency. Boost your projects!"
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>

          {/* ✅ SEO Pagination Links */}
          <div className="-mx-4 flex flex-wrap" data-wow-delay=".15s">
            <div className="w-full px-4">
              <ul className="flex items-center justify-center pt-8">
                <li className="mx-1">
                  <a
                    href="/blog?page=1"
                    className="bg-body-color/15 text-body-color hover:bg-primary flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition hover:text-white"
                    rel="prev"
                  >
                    Prev
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="/blog?page=1"
                    className="bg-primary text-white flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm font-bold shadow-md"
                  >
                    1
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="/blog?page=2"
                    className="bg-body-color/15 text-body-color hover:bg-primary flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition hover:text-white"
                  >
                    2
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="/blog?page=3"
                    className="bg-body-color/15 text-body-color hover:bg-primary flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition hover:text-white"
                  >
                    3
                  </a>
                </li>
                <li className="mx-1">
                  <span className="bg-body-color/15 text-body-color flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md px-4 text-sm">
                    ...
                  </span>
                </li>
                <li className="mx-1">
                  <a
                    href="/blog?page=12"
                    className="bg-body-color/15 text-body-color hover:bg-primary flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition hover:text-white"
                    rel="next"
                  >
                    12
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="/blog?page=2"
                    className="bg-body-color/15 text-body-color hover:bg-primary flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition hover:text-white"
                  >
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
