"use client";

import { MotionDiv } from "@/lib/motion";
import { AnimatePresence } from "framer-motion";
import { Brain } from "lucide-react";
import { useEffect, useState, useRef } from "react";

type AIOrbProps = {
    onClick?: () => void;
};

export default function AIOrb({ onClick }: AIOrbProps) {
    const [isHovered, setIsHovered] = useState(false);

    const messages = [
        "Hi! I'm Adnan's AI assistant",
        "Want to explore my projects?",
        "Ask about my tech stack...",
        "Need details about my work?",
        "Curious about my experience?",
        "Ask how I learned coding!",
        "Want to know my skills?",
        "Need information from my resume?",
        "Ask me anything about Adnan",
    ];

    const [currentMessage, setCurrentMessage] = useState<string | null>(null);
    const [messageIndex, setMessageIndex] = useState(0);

    const timerRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        const showMessage = () => {
            setCurrentMessage(messages[messageIndex]);
        };

        const hideMessage = () => {
            setCurrentMessage(null);
        };

        const nextMessage = () => {
            setMessageIndex((prev) => (prev + 1) % messages.length);
        };

        showMessage();

        const hideTimer = setTimeout(() => {
            hideMessage();

            const nextTimer = setTimeout(() => {
                nextMessage();
            }, 4000);

            timerRef.current = nextTimer;
        }, 6000);

        timerRef.current = hideTimer;

        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, [messageIndex]);

    return (
        <MotionDiv
            className="fixed bottom-6 right-6 z-[8888] cursor-pointer select-none"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onClick={onClick}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            {/* AI Thought Bubble - Single Message */}
            <AnimatePresence mode="wait">
                {currentMessage && (
                    <MotionDiv
                        key={currentMessage}
                        initial={{
                            opacity: 0,
                            scale: 0.3,
                            y: 25,
                            x: 15,
                        }}

                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: -35,
                            x: 0,
                        }}

                        exit={{
                            opacity: 0,
                            scale: 0.3,
                            y: 10,
                            x: 10,
                        }}

                        transition={{
                            duration: 1.2,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="
                            absolute
                            bottom-16
                            right-0
                            pointer-events-none
                            z-50
                        "
                    >
                        <MotionDiv
                            animate={{
                                y: [0, -2, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="
                                px-5
                                py-2.5
                                rounded-2xl
                                text-sm
                                font-medium
                                text-white
                                whitespace-nowrap
                                bg-gradient-to-r
                                from-purple-500/20
                                via-blue-500/20
                                to-cyan-400/20
                                backdrop-blur-xl
                                border
                                border-white/30
                                shadow-[0_0_30px_rgba(59,130,246,0.3)]
                            "
                        >
                            {currentMessage}
                        </MotionDiv>
                    </MotionDiv>
                )}
            </AnimatePresence>

            {/* Floating animation wrapper */}
            <MotionDiv
                animate={{
                    y: [0, -6, 0],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="relative"
            >
                {/* Glow layer */}
                <div
                    className="
                        absolute
                        inset-0
                        rounded-full
                        blur-xl
                        bg-gradient-to-r
                        from-purple-500
                        via-blue-500
                        to-cyan-400
                        opacity-60
                        scale-110
                    "
                />

                {/* Main Orb */}
                <MotionDiv
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                        boxShadow: [
                            "0 0 20px rgba(139,92,246,0.6)",
                            "0 0 40px rgba(59,130,246,0.8)",
                            "0 0 20px rgba(34,211,238,0.6)",
                        ],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="
                        w-14 h-14
                        rounded-full
                        flex
                        items-center
                        justify-center
                        bg-gradient-to-br
                        from-purple-600
                        via-blue-500
                        to-cyan-400
                        backdrop-blur-xl
                        border
                        border-white/20
                    "
                >
                    {/* Inner Glow */}
                    <div
                        className="
                            absolute
                            inset-1
                            rounded-full
                            bg-white/10
                            blur-md
                        "
                    />

                    {/* Brain Icon */}
                    <MotionDiv
                        animate={{
                            rotate: isHovered ? 10 : 0,
                            scale: isHovered ? 1.2 : 1,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                        }}
                        className="relative z-10"
                    >
                        <Brain className="text-white w-6 h-6" />
                    </MotionDiv>
                </MotionDiv>

                {/* Pulse Ring */}
                <MotionDiv
                    className="
                        absolute
                        inset-0
                        rounded-full
                        border
                        border-cyan-400/40
                    "
                    animate={{
                        scale: [1, 1.6],
                        opacity: [0.6, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut",
                    }}
                />

                {/* Tooltip */}
                {isHovered && (
                    <MotionDiv
                        initial={{
                            opacity: 0,
                            y: 10,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            y: 10,
                        }}
                        className="
                            absolute
                            bottom-16
                            right-1/2
                            translate-x-1/2
                            bg-black/80
                            text-white
                            text-xs
                            px-3
                            py-1.5
                            rounded-md
                            whitespace-nowrap
                            backdrop-blur
                        "
                    >
                        Ask my AI
                    </MotionDiv>
                )}
            </MotionDiv>
        </MotionDiv>
    );
}