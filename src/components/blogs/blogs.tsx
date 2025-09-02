"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Header from "../../components/home/hero/header";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import BLOGS from '../../constants/blogs';
import GradientBlob from './gradientBlob';
import BlogGrid from './blogGrid';


const ALLOWED_TAGS = ["All", "Next.js", "MERN", "E-commerce", "TailwindCSS", "AI"];

export default function Blogs() {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string>("All");
  const [sort, setSort] = useState<"new" | "old">("new");

  const filtered = useMemo(() => {
    let list = BLOGS.filter((b) => {
      const q = query.trim().toLowerCase();
      const matchesQuery = q
        ? b.title.toLowerCase().includes(q) || b.description.toLowerCase().includes(q)
        : true;

      const matchesTag =
        activeTag === "All" ? true : b.tags.includes(activeTag);

      return matchesQuery && matchesTag;
    });

    list.sort((a, b) =>
      sort === "new"
        ? +new Date(b.date) - +new Date(a.date)
        : +new Date(a.date) - +new Date(b.date)
    );

    return list;
  }, [query, activeTag, sort]);

  return (
    <div className="w-full min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Gradient Blobs */}
    <GradientBlob />
      <Header />

      <main className="max-w-6xl mx-auto px-6 pb-24 pt-28 relative z-10">
        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Coding Journey
            </span>
          </h1>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Notes from building MERN apps, shipping Next.js portfolios, and experimenting with AI assistants.
          </p>
        </motion.section>

        {/* Controls */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col md:flex-row gap-4 items-center justify-between mb-10"
        >
          <div className="flex w-full md:w-auto gap-3">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search posts…"
              className="w-full md:w-80 bg-white/5 text-white placeholder:text-gray-400"
            />
            <Select
              value={sort}
              onValueChange={(val) => setSort(val as "new" | "old")}
            >
              <SelectTrigger className="w-[140px] bg-white/5 text-white">
                <SelectValue placeholder="Sort" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="new">Newest</SelectItem>
                <SelectItem value="old">Oldest</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-wrap gap-2 justify-center md:justify-end">
            {ALLOWED_TAGS.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTag(t)}
                className={`px-3 py-1 rounded-full border transition ${
                  activeTag === t
                    ? "bg-blue-600/30 border-blue-400 text-blue-200"
                    : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </motion.section>

        {/* Grid */}
        <BlogGrid filtered={filtered} />
      </main>
    </div>
  );
}
