'use client';

import { Separator } from "../../../ui/separator";
import { MotionSection } from "@/lib/motion";
import SkillsCard from "../skillCard";
import { MySkillsSection } from "@/constants/mySKills";


export default function OtherTools() {
    const frontendSkills = MySkillsSection[2];
    const skills = frontendSkills.skills;
    return (
        <MotionSection
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.4 }}
            className="min-h-screen w-full flex flex-col pt-5 text-[#e8e8e3] px-6"
        >
            <div className="flex items-center justify-between">
                <h2 className="hidden md:block text-5xl tracking-tighter items-center font-bold">(03)</h2>
                <div className="flex items-center justify-center">
                    <h2 className="text-2xl md:text-3xl lg:text-5xl whitespace-nowrap tracking-tighter items-center font-bold md:mr-15">
                        OTHER TECHNOLOGIES
                    </h2>
                </div>
            </div>

            <Separator className="w-full bg-gray-300 mt-3 md:mt-8" />

            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center mt-5 md:mt-12 w-full gap-5">
                <div className="flex items-center justify-center">
                    <p className="text-gray-400 text-sm md:text-lg font-medium mb-5 max-w-md">
                        I leverage essential tools and services to
                        streamline development, optimize performance, and ensure smooth deployment.
                    </p>
                </div>
                <SkillsCard
                    skills={skills}
                />
            </div>
        </MotionSection>
    );
}
