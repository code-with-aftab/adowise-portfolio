import { NextRequest, NextResponse } from "next/server";
import { getAllBlogs, getBlogById } from "@/lib/markdown";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (id) {
    const blog = getBlogById(id);
    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }
    return NextResponse.json(blog);
  }

  const blogs = getAllBlogs();
  return NextResponse.json(blogs);
}
