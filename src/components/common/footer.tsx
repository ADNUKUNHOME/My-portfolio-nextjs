"use client";

import { FaGithub, FaInstagram, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { Mail } from "lucide-react";
import { useRef } from "react";
import { MotionButton, MotionDiv, MotionH1 } from "@/lib/motion";
import { useInView } from "framer-motion";
import ShuffleText from "./shuffleText";

const Footer = () => {
    const footerRef = useRef(null);
    const isInView = useInView(footerRef, { once: false, margin: "-50px" });

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer
            ref={footerRef}
            className="relative bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 text-white py-10 mt-20 rounded-t-2xl shadow-2xl"
        >
            <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Branding */}
                <MotionDiv
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <MotionH1
                        whileHover={{ scale: 1.05 }}
                        className="text-2xl font-bold tracking-wide"
                    >
                        MUHAMMAD ADNAN K
                    </MotionH1>
                    <p className="mt-2 text-sm opacity-80">
                        Full Stack Developer | MERN | Next.js | Tailwind
                    </p>
                </MotionDiv>

                {/* Navigation */}
                <MotionDiv
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col md:items-center">
                    <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
                    <ul className="space-y-2 opacity-90">
                        <li><a href="#about" className="hover:underline"><ShuffleText text="About" /></a></li>
                        <li><a href="#projects" className="hover:underline"><ShuffleText text="Projects" /></a></li>
                        <li><a href="#skills" className="hover:underline"><ShuffleText text="Skills" /></a></li>
                        <li><a href="#contact" className="hover:underline"><ShuffleText text="Contact" /></a></li>
                        <li><a href="/blogs" className="hover:underline"><ShuffleText text="Blog" /></a></li>
                    </ul>

                </MotionDiv>

                {/* Socials */}
                <MotionDiv
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col md:items-end">
                    <h2 className="text-lg font-semibold mb-3">Connect With Me</h2>
                    <div className="flex space-x-5 text-2xl">
                        <a href="https://github.com/ADNUKUNHOME" target="_blank" rel="noreferrer">
                            <FaGithub className="hover:text-gray-800 transition" />
                        </a>
                        <a href="https://www.linkedin.com/in/muhammad-adnan-a479052a1" target="_blank" rel="noreferrer">
                            <FaLinkedin className="hover:text-blue-500 transition" />
                        </a>
                        <a href="https://www.instagram.com/adhnan.abdullah" target="_blank" rel="noreferrer">
                            <FaInstagram className="hover:text-pink-700 transition" />
                        </a>
                        <a href="mailto:adnukunhome7@gmail.com">
                            <Mail className="hover:text-red-700 transition" />
                        </a>
                    </div>
                </MotionDiv>
            </div>

            {/* Divider */}
            <MotionDiv
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="border-t border-white/20 mt-10 pt-5 text-center text-sm opacity-70">
                © {new Date().getFullYear()} Muhammad Adnan K. All rights reserved.
            </MotionDiv>

            {/* Back to Top Button */}
            {isInView && (
                <MotionButton
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    exit={{ opacity: 0, y: 50 }}
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.9, rotate: 5 }}
                    onClick={scrollToTop}
                    className="absolute bottom-25 md:bottom-3 right-6 w-13 md:w-16 h-13 md:h-16 px-4 rounded-full bg-white/20 hover:bg-white/40 border-2 border-white transition-colors"
                >
                    <FaArrowUp className="text-white text-xl" />
                </MotionButton>
            )}
        </footer>
    );
};

export default Footer;
