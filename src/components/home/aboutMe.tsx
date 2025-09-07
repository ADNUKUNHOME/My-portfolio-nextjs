'use client';

import { MotionDiv, MotionH2, MotionP, MotionSection } from "@/lib/motion";
import { Separator } from "../ui/separator";
import { CardData } from "@/constants/aboutMeCardData";


export default function AboutMe() {
    return (
        <MotionSection
            id="about"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="min-h-screen w-full flex flex-col pt-10 text-[#393632] px-6 md:px-20"
        >
            {/* Heading */}
            <MotionH2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-5xl md:text-7xl lg:text-8xl tracking-tight font-extrabold"
            >
                WHO I AM?
            </MotionH2>

            <Separator className="w-full bg-black my-4" />

            {/* Intro */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-center mt-8 md:mt-0">
                <MotionP
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-lg md:text-xl leading-relaxed italic font-medium bg-[#393632] text-[#e8e8e3] p-5 rounded-2xl md:bg-[#e8e8e3] md:text-[#393632] md:p-0"
                >
                    Hi, I’m <span className="font-bold">MUHAMMAD ADNAN K</span>, a
                    self-taught and passionate <span className="font-bold">Full Stack Developer </span>
                    with a strong foundation in <span className="font-bold">MERN, Next.js, and AI-driven web solutions</span>.
                    I love building scalable, user-centric applications and turning complex problems into clean, efficient solutions.
                </MotionP>
                <Separator className="block md:hidden my-3 w-full bg-black" />
                <MotionP
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    viewport={{ once: true }}
                    className="text-lg uppercase font-extrabold italic md:text-end text-gray-700"
                >
                    “Code is not just what I do, it’s how I create value and shape ideas into reality.”
                </MotionP>
            </div>

            {/* Card Section */}
            <div className="hidden md:grid md:grid-cols-3 gap-6 mt-4">
                {CardData.map((card, index) => (
                    <MotionDiv
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: card.delay }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
                        className="rounded-2xl shadow-lg p-6 bg-[#393632] text-[#e8e8e3] hover:shadow-xl transition"
                    >
                        <h3 className="text-2xl font-extrabold mb-3 uppercase">{card.title}</h3>
                        <p className="text-base leading-relaxed text-gray-300">
                            {card.description}
                        </p>
                    </MotionDiv>
                ))}
            </div>
        </MotionSection>
    );
}
