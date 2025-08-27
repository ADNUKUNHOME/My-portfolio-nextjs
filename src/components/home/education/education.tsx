"use client";

import { motion } from "framer-motion";

const timeline = [
    {
        title: "BCA (Bachelor of Computer Applications)",
        subtitle: "Indira Gandhi National Open University (IGNOU)",
        period: "First Year Student · 2025 – Present",
    },
    {
        title: "Self-Taught Full Stack Developer",
        subtitle: "Focused on MERN, Next.js, and modern web technologies",
        period: "Ongoing · Project-based Learning",
    },
    {
        title: "Higher Secondary (Plus Two)",
        subtitle: "Humanities Stream",
        period: "Completed · 2023",
    },
];

export default function Education() {
    return (
        <section className="w-full py-20 px-4 md:px-10 lg:px-20 text-white">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
            >
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold bg-orange-50 bg-clip-text text-transparent">
                    EDUCATION
                </h2>
                <p className="mt-4 text-gray-400 max-w-xl text-sm md:text-base">
                    My academic journey blends formal education with self-driven learning,
                    combining structured study and hands-on projects to grow as a full-stack developer.
                </p>
            </motion.div>

            {/* Modern Cards */}
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {timeline.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.15 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 1.2 }}
                        className="relative rounded-2xl p-[1px] animate-gradient-border bg-[length:200%_200%] 
                        bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500
                        hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-all duration-300"
                    >
                        <div className="h-full w-full rounded-2xl bg-[#111] p-6 flex flex-col justify-between">
                            <div>
                                <h3 className="text-lg md:text-xl font-bold text-white">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 text-sm md:text-base mt-2">
                                    {item.subtitle}
                                </p>
                            </div>
                            <p className="text-gray-500 text-xs md:text-sm mt-4">
                                {item.period}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
