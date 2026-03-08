import Blog from "@/components/Blog";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { getMessages } from "@/lib/i18n";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog | Adowise - Insights on Web Development, AI & SaaS",
    description: "Stay updated with the latest insights on web development, AI integration, SaaS scalability, and digital transformation from the experts at Adowise.",
    keywords: [
        "Adowise blog",
        "web development blog",
        "AI integration tips",
        "SaaS development insights",
        "Next.js tutorials",
        "React performance tips",
        "digital transformation blog"
    ],
};

const BlogPage = async ({ params }: { params: Promise<{ lang: string }> }) => {
    const { lang } = await params;
    const messages = await getMessages(lang);
    return (
        <>
            <Breadcrumb
                pageName="Blog Grid"
                description="Explore our latest thoughts, ideas, and insights on technology, design, and business growth."
            />
            <Blog messages={messages} />
        </>
    );
};

export default BlogPage;
