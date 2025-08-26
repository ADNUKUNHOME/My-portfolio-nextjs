'use client';

import { MySkillsSection } from "@/constants/mySKills";
import { Separator } from "../../../ui/separator";
import { MotionSection } from "@/lib/motion";
import SkillsCard from "../skillCard";


export default function Backtend() {
    const frontendSkills = MySkillsSection[1];
    const type = frontendSkills.type;
    const description = frontendSkills.description;
    const skills = frontendSkills.skills;
    return (
        <MotionSection
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.4 }}
            className="min-h-screen w-full flex flex-col pt-5 text-[#393632] px-6"
        >
            <div className="flex items-center justify-between">
                <h2 className="hidden md:block text-5xl tracking-tighter items-center font-bold">(02)</h2>
                <div className="flex items-center justify-center">
                    <h2 className="text-2xl md:text-3xl lg:text-5xl whitespace-nowrap tracking-tighter items-center font-bold md:mr-15">
                        BACKEND DEVELOPMENT
                    </h2>
                </div>
            </div>
            <Separator className="w-full mt-3 md:mt-8 bg-gray-800" />
            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center mt-5 md:mt-8 w-full">
                <div className="hidden md:block"></div>
                <SkillsCard
                    type={type}
                    description={description}
                    skills={skills}
                />
            </div>
        </MotionSection>
    );
}
