"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Intro() {
    const [status, setStatus] = useState<"show" | "done">("show"); // start by showing

    useEffect(() => {
        const alreadyShown = sessionStorage.getItem("introShow");

        if (alreadyShown) {
            // immediately skip if seen before
            setStatus("done");
        } else {
            // let it play once
            const timer = setTimeout(() => {
                setStatus("done");
                sessionStorage.setItem("introShow", "true");
            }, 4000);

            return () => clearTimeout(timer);
        }
    }, []);

    const letters = "MUHAMMAD ADNAN K".split("");

    return (
        <AnimatePresence>
            {status === "show" && (
                <motion.div
                    key="intro"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="fixed inset-0 z-[2000] flex items-center justify-center bg-gradient-to-b from-black via-[#0a0a0a] to-black"
                >
                    {/* Glow background */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0.5 }}
                        animate={{ scale: [0, 1.5, 1], opacity: [0.5, 0.2, 0] }}
                        transition={{ duration: 3, ease: "easeInOut" }}
                        className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-pink-500/40 via-yellow-400/40 to-orange-500/40 blur-3xl"
                    />

                    {/* Name animation */}
                    <motion.h1
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 1.3, opacity: 0 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        className="relative flex text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-[0.25em] text-white"
                    >
                        {letters.map((char, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05, duration: 0.5 }}
                                className={
                                    char === " "
                                        ? "mx-2"
                                        : "inline-block bg-gradient-to-r from-[#929291] via-[#444443] to-[#707062] bg-clip-text text-transparent"
                                }
                            >
                                {char}
                            </motion.span>
                        ))}

                        {/* Shine effect */}
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: "200%" }}
                            transition={{ duration: 2.5, ease: "easeInOut", repeat: 0 }}
                            className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                        />
                    </motion.h1>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
