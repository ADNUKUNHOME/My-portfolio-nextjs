'use client';

import { Separator } from "../../../ui/separator";
import { useState } from "react";
import MenuButton from "./hamburgerButton";
import { MotionSection } from "@/lib/motion";
import SkillsCard from "../skillCard";
import { MySkillsSection } from "@/constants/mySKills";


export default function Frontend() {
    const [open, setOpen] = useState(false);
    const frontendSkills = MySkillsSection[0];
    const description = frontendSkills.description;
    const skills = frontendSkills.skills;

    return (
        <MotionSection
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.4 }}
            className="min-h-screen w-full flex flex-col pt-5 text-[#e8e8e3] px-6"
        >
            <div className="flex md:hidden w-full items-center justify-end">
                <MenuButton setOpen={setOpen} />
            </div>
            <Separator className="block md:hidden w-full bg-gray-300 my-3" />

            <div className="flex items-center justify-between">
                <h2 className="hidden md:block text-5xl tracking-tighter items-center font-bold">(01)</h2>
                <div className="flex items-center justify-center">
                    <h2 className="text-2xl md:text-3xl lg:text-5xl whitespace-nowrap tracking-tighter items-center font-bold md:mr-10">
                        FRONTEND DEVELOPMENT
                    </h2>
                    <div className="hidden md:flex">
                        <MenuButton setOpen={setOpen} />
                    </div>
                </div>
            </div>

            <Separator className="w-full bg-gray-300 mt-3 md:mt-8" />

            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center mt-5 md:mt-12 w-full">
                <div className="hidden md:block"></div>
                <SkillsCard
                    description={description}
                    skills={skills}
                />
            </div>
        </MotionSection>
    );
}
