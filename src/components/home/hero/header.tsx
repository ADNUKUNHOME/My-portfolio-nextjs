// Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MotionA, MotionButton, MotionDiv, MotionSpan } from "@/lib/motion";

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
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={80}
                    height={80}
                    className="h-15 w-15 md:h-20 md:w-20"
                />
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
                    <MotionDiv
                        className="fixed inset-0 z-[10000]" // absolute top of the world
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <MotionDiv
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="absolute top-0 right-0 w-full h-full bg-linear-to-r from-white/20 via-black/70 to-white/20 backdrop-blur-2xl flex flex-col items-start justify-center pl-8 space-y-4"
                        >
                            {/* Cancel Button */}
                            <div className="w-100 h-100 absolute -top-30 -right-30 bg-white/30 rounded-full" />
                            <div className="w-100 h-100 absolute -top-20 -right-30 bg-white/10 rounded-full" />
                            <MotionButton
                                whileHover={{ rotate: 180 }}
                                transition={{ duration: 0.5 }}
                                onClick={() => setOpen(false)}
                                className="absolute top-6 right-6 w-15 h-15 rounded-full bg-white hover:bg-white flex items-center justify-center"
                            >
                                <MotionSpan
                                    initial={{ rotate: 0 }}
                                    animate={{ rotate: 45 }}
                                    className="absolute w-7 h-0.5 bg-black rounded"
                                />
                                <MotionSpan
                                    initial={{ rotate: 0 }}
                                    animate={{ rotate: -45 }}
                                    className="absolute w-7 h-0.5 bg-black rounded"
                                />
                            </MotionButton>

                            {/* Menu Items */}
                            {navItems.map((item, i) => (
                                <MotionDiv
                                    key={item.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * i, duration: 0.4 }}
                                >
                                    <Link
                                        href={item.href}
                                        className="text-3xl font-bold text-gray-300 tracking-tighter relative group"
                                        onClick={() => setOpen(false)}
                                    >
                                        {item.name}
                                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 transition-all duration-500 group-hover:w-full"></span>
                                    </Link>
                                </MotionDiv>
                            ))}
                        </MotionDiv>
                    </MotionDiv>
                )}
            </AnimatePresence>
        </header>
    );
}
