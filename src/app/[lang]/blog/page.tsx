import Blog from "@/components/Blog";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { getMessages } from "@/lib/i18n";
import { getAllBlogs } from "@/lib/markdown";

import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const messages = await getMessages(lang);
    const t = messages.Blog || {};

    return {
        title: t.title,
        description: t.subtitle,
        alternates: {
            canonical: `https://adowise.com/${lang}/blog`,
        },
        openGraph: {
            title: t.title,
            description: t.subtitle,
            url: `https://adowise.com/${lang}/blog`,
            type: "website",
        }
    };
}

const BlogPage = async ({ params }: { params: Promise<{ lang: string }> }) => {
    const { lang } = await params;
    const messages = await getMessages(lang);
    const t = messages.Blog || {};

    // Load blogs from markdown files (exclude hidden SEO blogs from the list)
    const blogs = getAllBlogs(false);

    return (
        <>
            <Breadcrumb
                pageName={t.title}
                description={t.subtitle}
                lang={lang}
                slug="blog"
            />
            <Blog messages={messages} initialBlogs={blogs} />
        </>
    );
};

export default BlogPage;
