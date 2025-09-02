import {motion} from 'framer-motion';
import Image from "next/image";

const imgLoader = ({ src }: { src: string }) => src;

const readingTime = (text: string) =>
  Math.max(1, Math.round(text.split(/\s+/).length / 200));

type Blog = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  image: string;
  content: string[];
};

const BlogGrid = ({
    filtered,
}: {
    filtered: Blog[];
}) => {
  return (
        <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((blog, index) => (
            <motion.article
              key={blog.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.03] backdrop-blur-lg shadow-xl hover:border-blue-500/40 hover:shadow-blue-500/20 transition"
            >
              <div className="relative w-full h-48">
                <Image
                  loader={imgLoader}
                  unoptimized
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span>
                    {new Date(blog.date).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    })}
                  </span>
                  <span>•</span>
                  <span>{readingTime(blog.description)} min read</span>
                </div>

                <h2 className="text-lg font-semibold leading-snug group-hover:text-white">
                  {blog.title}
                </h2>
                <p className="text-sm text-gray-300 line-clamp-3">
                  {blog.description}
                </p>

                <div className="mt-1 flex flex-wrap gap-2">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs rounded-full bg-blue-500/15 text-blue-300 border border-blue-400/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <div className="text-xs text-gray-400">by Adnan</div>
                  <a
                    href={`/blogs/${blog.slug}`}
                    className="text-sm font-medium text-blue-300 hover:text-blue-200"
                  >
                    Read more →
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </section>
  )
}

export default BlogGrid
