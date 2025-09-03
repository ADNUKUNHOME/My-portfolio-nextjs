"use client";

import Link from "next/link";
import BLOGS from "@/constants/blogs";
import { MotionDiv, MotionH2, MotionImg } from "@/lib/motion";

const LatestBlog = () => {
    const latestBlog = BLOGS[0];

    if (!latestBlog) return null;

    return (
        <section
            id="latest-blog"
            className="w-full py-16 bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white"
        >
            <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center gap-10">
                {/* Section Heading */}
                <MotionH2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold tracking-tight"
                >
                    Latest from My <span className="text-indigo-400">Blog</span>
                </MotionH2>

                {/* Blog Card */}
                <MotionDiv
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="w-full md:w-3/4 bg-gray-800/50 rounded-2xl overflow-hidden shadow-xl hover:shadow-indigo-500/20 border border-gray-700 hover:border-indigo-400 transition"
                >
                    <div className="flex flex-col md:flex-row">
                        {/* Image */}
                        <div className="md:w-1/2 h-60 md:h-auto overflow-hidden">
                            <MotionImg
                                src={latestBlog.image}
                                alt={latestBlog.title}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                whileHover={{ scale: 1.05 }}
                            />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col justify-between p-6 md:w-1/2 text-left">
                            <div>
                                <p className="text-sm text-gray-400">{latestBlog.date}</p>
                                <h3 className="text-2xl font-semibold mt-2 mb-4">
                                    {latestBlog.title}
                                </h3>
                                <p className="text-gray-300 line-clamp-3">
                                    {latestBlog.description}
                                </p>
                            </div>

                            {/* Buttons */}
                            <div className="mt-6 flex gap-4">
                                <Link
                                    href={`/blogs/${latestBlog.slug}`}
                                    className="px-4 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-medium shadow-md transition"
                                >
                                    Read More
                                </Link>
                                <Link
                                    href="/blogs"
                                    className="px-4 py-2 rounded-xl border border-gray-600 hover:border-indigo-400 hover:text-indigo-400 transition font-medium"
                                >
                                    View All Blogs
                                </Link>
                            </div>
                        </div>
                    </div>
                </MotionDiv>
            </div>
        </section>
    );
};

export default LatestBlog;
