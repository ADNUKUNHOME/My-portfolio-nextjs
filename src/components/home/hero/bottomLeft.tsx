"use client";

import { MotionDiv } from "@/lib/motion";
import { Rocket, Cpu, Code, CloudLightning } from "lucide-react";

const BottomLeft = () => {
    const features = [
        { icon: Rocket, label: "Fast & Efficient" },
        { icon: Cpu, label: "Scalable Architecture" },
        { icon: Code, label: "Clean Code" },
        { icon: CloudLightning, label: "AI Powered" },
    ];

    return (
        <div className="relative w-full max-w-4xl mx-auto mt-16 px-6 md:px-0 flex flex-col md:flex-row items-center md:items-start md:gap-8 z-10">
            {/* Floating neon shapes / animated blobs */}
            <div className="absolute -top-10 -left-20 w-40 h-40 bg-gradient-to-tr from-green-400 via-blue-500 to-purple-500 rounded-full opacity-30 animate-pulse blur-3xl mix-blend-overlay" />
            <div className="absolute bottom-0 right-10 w-32 h-32 bg-gradient-to-br from-purple-400 via-pink-500 to-orange-400 rounded-full opacity-20 animate-[spin_20s_linear_infinite] blur-2xl mix-blend-overlay" />

            {/* Left Content Section */}
            <MotionDiv
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="flex-1 flex flex-col gap-6"
            >
                <p className="hidden md:block text-gray-300 text-lg md:text-xl leading-relaxed">
                    Crafting{" "}
                    <span className="text-green-400 font-semibold">fast</span>,{" "}
                    <span className="text-blue-400 font-semibold">scalable</span> and{" "}
                    <span className="text-purple-400 font-semibold">elegant</span>{" "}
                    digital experiences with{" "}
                    <span className="text-white font-medium">MERN</span>,{" "}
                    <span className="text-white font-medium">Next.js</span> & AI.
                </p>
                <p className="block md:hidden text-gray-300 text-bold text-center leading-snug">
                    Building <span className="text-green-400 font-semibold">fast</span>,{" "}
                    <span className="text-blue-400 font-semibold">scalable</span> &{" "}
                    <span className="text-purple-400 font-semibold">elegant</span> apps with{" "}
                    <span className="text-white font-medium">MERN</span>,{" "}
                    <span className="text-white font-medium">Next.js</span> & AI.
                </p>


                {/* Features with icons */}
                <div className="grid grid-cols-2 gap-4 mt-4">
                    {features.map((feature, i) => {
                        const IconComponent = feature.icon;
                        return (
                            <MotionDiv
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 * i, duration: 0.5 }}
                                className="flex items-center gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-md hover:bg-white/20 cursor-pointer transition"
                            >
                                <IconComponent className="w-6 h-6 text-white" />
                                <span className="text-white font-medium">{feature.label}</span>
                            </MotionDiv>
                        );
                    })}
                </div>
            </MotionDiv>
        </div>
    );
};

export default BottomLeft;
