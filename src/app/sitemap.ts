import { MetadataRoute } from 'next';
import { getAllBlogs } from "@/lib/markdown";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://adowise.com";
    const locales = ["en", "hi", "es", "fr", "de", "ar", "ur"];

    const pages = [
        "",
        "/about",
        "/pricing",
        "/contact",
        "/blog",
        "/policy",
        "/signin",
        "/signup",
    ];

    const routes = locales.flatMap((lang) =>
        pages.map((page) => ({
            url: `${baseUrl}/${lang}${page}`,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: page === "" ? 1.0 : 0.8,
        }))
    );

    const blogRoutes = locales.flatMap((lang) =>
        getAllBlogs().map((blog) => ({
            url: `${baseUrl}/${lang}/blog/${blog.id}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.7,
        }))
    );

    return [...routes, ...blogRoutes];
}
