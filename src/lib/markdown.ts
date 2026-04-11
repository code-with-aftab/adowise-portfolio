import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Blog } from "@/types/blog";

const blogsDirectory = path.join(process.cwd(), "src/content/blogs");

export function getAllBlogs(): Blog[] {
  if (!fs.existsSync(blogsDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(blogsDirectory);
  const allBlogsData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      // Remove ".md" from file name to get base id if needed, though we store id in frontmatter
      const fullPath = path.join(blogsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);
      const data = matterResult.data;

      // Map frontmatter to the Blog interface
      return {
        id: data.id,
        _id: String(data.id), // String ID for URL mapping if used
        title: data.title,
        paragraph: data.paragraph,
        image: data.image,
        author: {
          name: data.authorName,
          image: data.authorImage,
          designation: data.authorDesignation,
        },
        tags: data.tags || [],
        publishDate: data.publishDate,
        content: matterResult.content, // HTML content in string
      };
    });

  // Sort blogs by id descending (assuming newer blogs have higher IDs, or you can sort by date)
  return allBlogsData.sort((a, b) => b.id - a.id);
}

export function getBlogById(id: string | number): Blog | undefined {
  const blogs = getAllBlogs();
  return blogs.find((blog) => String(blog.id) === String(id));
}
