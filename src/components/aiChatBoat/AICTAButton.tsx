"use client";

import { MotionDiv } from "@/lib/motion";
import { MessageCircle } from "lucide-react";

type AICTAButtonProps = {
    onClick?: () => void;
};

export default function AICTAButton({ onClick }: AICTAButtonProps) {
    return (
        <MotionDiv
            onClick={onClick}
            className="relative inline-block cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {/* Glow background */}
            <div className="absolute inset-0 rounded-full blur-xl opacity-70 
        bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400" />

            {/* Animated border glow */}
            <MotionDiv
                className="absolute inset-0 rounded-full"
                animate={{
                    background: [
                        "linear-gradient(90deg, #a855f7, #3b82f6, #22d3ee)",
                        "linear-gradient(180deg, #22d3ee, #a855f7, #3b82f6)",
                        "linear-gradient(270deg, #3b82f6, #22d3ee, #a855f7)",
                    ],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear",
                }}
                style={{
                    padding: "2px",
                    WebkitMask:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                }}
            />

            {/* Main Button */}
            <MotionDiv
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="relative flex items-center gap-3 px-6 py-2 rounded-full 
                   bg-white/10 backdrop-blur-xl border border-white/20
                   shadow-lg overflow-hidden"
            >
                {/* Shine effect */}
                <MotionDiv
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                />

                {/* Icon */}
                <MotionDiv
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="relative z-10"
                >
                    <MessageCircle className="w-5 h-5 text-white" />
                </MotionDiv>

                {/* Text */}
                <span className="relative z-10 text-white font-medium tracking-wide">
                    Talk to my AI
                </span>
            </MotionDiv>
        </MotionDiv>
    );
}