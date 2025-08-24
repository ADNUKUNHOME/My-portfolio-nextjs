'use client';

import { motion } from "framer-motion";

export default function Frontend() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.4 }}
            className="min-h-screen flex flex-col justify-center items-center text-[#393632] px-6"
        >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Frontend Skills</h2>
            <p className="text-lg md:text-xl text-black  max-w-2xl text-center">
                React, Next.js, TailwindCSS, Framer Motion, TypeScript, Responsive UI
                Design, and more.
            </p>
        </motion.section>
    );
}
