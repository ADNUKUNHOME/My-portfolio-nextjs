"use client";

import { MotionDiv, MotionA } from "@/lib/motion";
import { Github, Linkedin, Download, Code, Cpu, Rocket, CloudLightning } from "lucide-react";
import ContactButton from "./contactButton";

const BottomRight = () => {
    const floatingIcons = [Code, Cpu, Rocket, CloudLightning];
    const iconColors = ["#ff00ff", "#00ffff", "#ffff00", "#ff00ff"];

    return (
        <MotionDiv className="relative w-full h-full flex flex-col items-center md:items-end justify-center gap-3 md:gap-8">

            {/* Floating Tech Icons with entrance + looping animation */}
            {floatingIcons.map((Icon, i) => {
                const total = floatingIcons.length;
                const angle = (i / (total - 1)) * Math.PI;
                const radius = 50;
                const verticalOffset = 50;
                const horizontalOffset = 20;

                return (
                    <MotionDiv
                        key={i}
                        className="hidden md:block absolute"
                        initial={{ opacity: 0, scale: 0.5, y: 30 }} // entrance
                        animate={{
                            opacity: [0, 1],
                            scale: [0.5, 1],
                            y: [30, 0],
                            transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
                        }}
                        whileInView={{
                            y: [0, -12, 0],
                            x: [0, 8, -8, 0],
                            rotate: [0, 10, -10, 0],
                            opacity: [0.4, 0.8, 0.4],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 4 + i,
                            ease: "easeInOut",
                            delay: i * 0.3,
                        }}
                        style={{
                            top: `${verticalOffset - Math.sin(angle) * radius}%`,
                            right: `${horizontalOffset + 10 + Math.cos(angle) * radius}%`,
                        }}
                    >
                        <Icon className="w-6 h-6" stroke={iconColors[i]} />
                    </MotionDiv>
                );
            })}

            {/* Social Links with entrance animation */}
            <div className="flex gap-6 mt-6 z-10">
                {[Github, Linkedin, Download].map((Icon, i) => (
                    <MotionA
                        key={i}
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            borderColor: [
                                "rgba(255,0,255,0.6)",
                                "rgba(0,255,255,0.6)",
                                "rgba(255,255,0,0.6)",
                                "rgba(255,0,255,0.6)",
                            ],
                        }}
                        transition={{
                            opacity: { duration: 0.6, delay: 0.5 + i * 0.2, ease: "easeOut" },
                            y: { duration: 0.6, delay: 0.5 + i * 0.2, ease: "easeOut" },
                            scale: { duration: 0.6, delay: 0.5 + i * 0.2, ease: "easeOut" },
                            borderColor: {
                                repeat: Infinity,
                                duration: 4,
                                ease: "linear",
                                delay: i * 0.2,
                            },
                        }}
                        whileHover={{ scale: 1.3, rotate: [0, 10, -10, 0] }}
                        href={
                            i === 0
                                ? "https://github.com/ADNUKUNHOME"
                                : i === 1
                                    ? "https://www.linkedin.com/in/muhammad-adnan-a479052a1"
                                    : "/resume.pdf"
                        }
                        target="_blank"
                        className="relative w-12 h-12 flex items-center justify-center rounded-full border-2 border-white/20 backdrop-blur-sm text-white shadow-lg hover:border-white/60 hover:scale-105 transition"
                    >
                        <Icon className="w-6 h-6" />
                    </MotionA>

                ))}
            </div>

            {/* Contact Button with entrance animation */}
            <MotionDiv
                className="relative z-10"
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            >
                <ContactButton />
            </MotionDiv>
        </MotionDiv>
    );
};

export default BottomRight;
