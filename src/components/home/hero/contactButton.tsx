"use client";

import { MotionA, MotionSpan } from "@/lib/motion";

export default function ContactButton() {
    const buttonVariants = {
        rest: {},
        hover: {},
    };

    return (
        <MotionA
            href="#contact"
            className="relative mt-4 md:mt-4 px-8 py-3 rounded-full overflow-hidden 
             bg-gradient-to-r from-white/10 via-black/40 to-white/10 
             backdrop-blur-md font-semibold shadow-lg flex items-center justify-center"
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
        >
            {/* White overlay (eye closing) */}
            <MotionSpan
                variants={{
                    rest: { y: "-100%" },
                    hover: { y: "0%" },
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 bg-white z-10"
            />

            {/* Text: White on Blurred Black */}
            <MotionSpan
                variants={{
                    rest: { opacity: 1, y: 0 },
                    hover: { opacity: 0, y: 20 },
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="relative z-20 text-white"
            >
                📩 Contact Me
            </MotionSpan>

            {/* Text: Black on White */}
            <MotionSpan
                variants={{
                    rest: { opacity: 0, y: -20 },
                    hover: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
                className="absolute z-30 text-black"
            >
                📩 Contact Me
            </MotionSpan>
        </MotionA>
    );
}
