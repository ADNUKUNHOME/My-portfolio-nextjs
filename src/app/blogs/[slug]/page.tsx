import BLOGS from "@/constants/blogs";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from 'lucide-react';
import Image from "next/image";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function BlogDetail({ params }: Props) {
  const { slug } = await params;
  const blog = BLOGS.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="relative bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#0f172a] min-h-screen text-white overflow-hidden">
        {/* Back button */}
        <Link
          href="/blogs"
          className="absolute top-6 left-6 flex gap-2 items-center text-sm font-medium text-gray-300 hover:text-white px-4 py-2 rounded-xl shadow transition z-20"
        >
          <ChevronLeft /> Back to Blogs
        </Link>
      {/* Animated blob background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-25 animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-3xl mx-auto px-6 py-20 relative">

        {/* Title */}
        <h1 className="text-2xl md:text-5xl font-extrabold tracking-tight text-center bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
          {blog.title}
        </h1>

        {/* Meta info */}
        <div className="mt-4 text-center text-gray-400 text-sm">
          <span>Published on {blog.date ?? "Unknown date"}</span>
        </div>

        {/* Blog image */}
        <div className="mt-10">
          <Image
            src={blog.image}
            alt={blog.title}
            className="w-full rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* Description */}
        <p className="mt-10 text-lg text-gray-300 leading-relaxed">
          {blog.description}
        </p>

        {/* Full content */}
        <div className="mt-8 space-y-6 text-gray-200 leading-8">
          {blog.content?.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
