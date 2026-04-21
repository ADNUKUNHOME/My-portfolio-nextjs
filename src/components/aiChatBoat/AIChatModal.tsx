"use client";

import { MotionDiv } from "@/lib/motion";
import { X } from "lucide-react";
import { useEffect } from "react";

type AIChatModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function AIChatModal({ isOpen, onClose }: AIChatModalProps) {
    // Close on ESC
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <MotionDiv
            className="fixed inset-0 z-9998 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* 🔥 Background Overlay */}
            <MotionDiv
                className="absolute inset-0 bg-black/40 backdrop-blur-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={onClose}
            />

            {/* ✨ Chat Card */}
            <MotionDiv
                initial={{ opacity: 0, scale: 0.8, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 15,
                }}
                className="relative z-10 w-[90%] max-w-md h-[70vh] 
                   rounded-2xl border border-white/20 
                   bg-white/10 backdrop-blur-2xl 
                   shadow-2xl overflow-hidden"
            >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-linear-to-br from-purple-500/20 via-blue-500/20 to-cyan-400/20 blur-2xl opacity-50" />

                {/* Header */}
                <div className="relative z-10 flex items-center justify-between px-4 py-3 border-b border-white/10">
                    <h2 className="text-white font-medium">Adnan AI</h2>

                    <button
                        onClick={onClose}
                        className="p-1 rounded-md hover:bg-white/10 transition"
                    >
                        <X className="w-5 h-5 text-white" />
                    </button>
                </div>

                {/* Body (EMPTY for now) */}
                <div className="relative z-10 flex items-center justify-center h-full text-white/60 text-sm">
                    Chat UI coming soon...
                </div>
            </MotionDiv>
        </MotionDiv>
    );
}