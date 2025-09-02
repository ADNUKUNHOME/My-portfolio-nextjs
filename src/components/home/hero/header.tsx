// Header.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MotionA, MotionSpan } from "@/lib/motion";

const MenuItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <MotionA
        href={href}
        className="relative px-3 py-1 overflow-hidden rounded-md cursor-pointer"
        initial="rest"
        whileHover="hover"
        animate="rest"
    >
        <MotionSpan
            variants={{ rest: { y: "-100%" }, hover: { y: "0%" } }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-white z-10"
        />
        <MotionSpan
            variants={{ rest: { opacity: 1, y: 0 }, hover: { opacity: 0, y: 20 } }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="relative z-20 text-white font-medium"
        >
            {children}
        </MotionSpan>
        <MotionSpan
            variants={{ rest: { opacity: 0, y: -20 }, hover: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
            className="absolute inset-0 flex items-center justify-center z-30 text-black font-medium"
        >
            {children}
        </MotionSpan>
    </MotionA>
);

export default function Header() {
    const [open, setOpen] = useState(false);

    // lock scroll when the sheet is open (prevents awkward background scroll/clicks)
    useEffect(() => {
        const original = document.body.style.overflow;
        document.body.style.overflow = open ? "hidden" : original || "";
        return () => {
            document.body.style.overflow = original;
        };
    }, [open]);

    // 🔥 Updated navItems with full hrefs
    const navItems = [
        { name: "About", href: "/#about" },
        { name: "Projects", href: "/#projects" },
        { name: "Education", href: "/#education" },
        { name: "Skills", href: "/#skills" },
        { name: "Blogs", href: "/blogs" },
        { name: "Contact", href: "/#contact" },
    ];

    return (
        <header className="absolute top-0 left-0 w-full p-5 flex justify-between items-center z-[1000]">
            {/* Logo + Title */}
            <Link href="/" className="flex items-center">
                <img src="/logo.png" alt="Logo" className="h-15 w-15 md:h-20 md:w-20" />
                <span className="text-white text-lg md:text-xl font-bold">
                    MERN & Next.js Developer
                </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex">
                <ul className="flex space-x-4">
                    {navItems.map((item) => (
                        <MenuItem key={item.name} href={item.href}>
                            {item.name}
                        </MenuItem>
                    ))}
                </ul>
            </nav>

            {/* Mobile Hamburger (only when closed) */}
            {!open && (
                <button
                    onClick={() => setOpen(true)}
                    className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center space-y-1 z-[10000]"
                >
                    <motion.span
                        animate={{ rotate: 0, y: 0 }}
                        className="w-6 h-0.5 bg-white rounded"
                    />
                    <motion.span
                        animate={{ opacity: 1 }}
                        className="w-6 h-0.5 bg-white rounded"
                    />
                </button>
            )}

            {/* Mobile Menu Sheet – separate wrapper guarantees top-most layer */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        className="fixed inset-0 z-[10000]" // absolute top of the world
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="absolute top-0 right-0 w-full h-full bg-black/70 backdrop-blur-2xl flex flex-col items-center justify-center space-y-8"
                        >
                            {/* Cancel Button */}
                            <button
                                onClick={() => setOpen(false)}
                                className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center"
                            >
                                <motion.span
                                    initial={{ rotate: 0 }}
                                    animate={{ rotate: 45 }}
                                    className="absolute w-6 h-0.5 bg-white rounded"
                                />
                                <motion.span
                                    initial={{ rotate: 0 }}
                                    animate={{ rotate: -45 }}
                                    className="absolute w-6 h-0.5 bg-white rounded"
                                />
                            </button>

                            {/* Menu Items */}
                            {navItems.map((item, i) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * i, duration: 0.4 }}
                                >
                                    <Link
                                        href={item.href}
                                        className="text-2xl font-semibold text-white tracking-wide relative group"
                                        onClick={() => setOpen(false)}
                                    >
                                        {item.name}
                                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 transition-all duration-500 group-hover:w-full"></span>
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
