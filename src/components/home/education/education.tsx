'use client';

import { Separator } from "@/components/ui/separator"; // if you already use it
import { MotionSection } from "@/lib/motion";

export default function Education() {
    return (
        <section
            className="absolute top-0 w-full flex flex-col py-5  text-[#1f1c19] px-6  h-[300px] overflow-auto"
        >
            {/* Header */}
            <div className="flex items-center justify-between">
                <h2 className="hidden md:block text-5xl tracking-tighter items-center font-bold">(04)</h2>
                <div className="flex items-center justify-center">
                    <h2 className="text-2xl md:text-3xl lg:text-5xl whitespace-nowrap tracking-tighter items-center font-bold md:mr-15">
                        EDUCATION
                    </h2>
                </div>
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center mt-5 md:mt-12 w-full">
                {/* Left side (intro) */}
                <div className="hidden md:flex items-center justify-center">
                    <p className="text-[#e8e8e3] bg-[#1f1c19] rounded-2xl p-5 text-sm md:text-lg font-medium mb-5 max-w-md shadow-lg border border-gray-700/40">
                        My academic journey reflects both formal education and self-driven learning.
                        I combine structured study with practical, hands-on experience to grow as a full stack developer.
                    </p>
                </div>

                {/* Right side (cards) */}
                <div className="flex flex-col gap-6">
                    {/* Card 1 */}
                    <div className="bg-[#1f1c19] rounded-2xl p-5 shadow-lg border border-gray-700/40">
                        <h3 className="text-lg md:text-xl font-bold text-[#e8e8e3]">BCA (Bachelor of Computer Applications)</h3>
                        <p className="text-gray-400 text-sm md:text-base mt-1">Indira Gandhi National Open University (IGNOU)</p>
                        <p className="text-gray-500 text-xs md:text-sm mt-2">First Year Student · 2024 – Present</p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#1f1c19] rounded-2xl p-5 shadow-lg border border-gray-700/40">
                        <h3 className="text-lg md:text-xl font-bold text-[#e8e8e3]">Self-Taught Full Stack Developer</h3>
                        <p className="text-gray-400 text-sm md:text-base mt-1">Focused on MERN, Next.js, and modern web technologies</p>
                        <p className="text-gray-500 text-xs md:text-sm mt-2">Ongoing · Project-based Learning</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#1f1c19] rounded-2xl p-5 shadow-lg border border-gray-700/40">
                        <h3 className="text-lg md:text-xl font-bold text-[#e8e8e3]">Higher Secondary (Plus Two)</h3>
                        <p className="text-gray-400 text-sm md:text-base mt-1">Humanities Stream</p>
                        <p className="text-gray-500 text-xs md:text-sm mt-2">Completed · 2023</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
