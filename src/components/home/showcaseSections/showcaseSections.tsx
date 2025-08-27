"use client";

import Footer from "@/components/common/footer";
import Contact from "../contact";
import Education from "../education/education";
import Projects from "../projects/projects";
import AllSkills from "../skills/allSkills/allSkills";
import AnimatedSkills from "../skills/allSkills/animatedSkills";
import MenuButton from "../skills/frontend/hamburgerButton";
import { useState } from "react";

const ShowscaseSections = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative  w-full items-center justify-center flex flex-col gap-10">
            {/* Keep MenuButton fixed at the top-right */}
            <div className="fixed top-5 right-5 md:right-10 z-[100]">
                <MenuButton setOpen={setOpen} />
            </div>
            <Projects />
            <Education />
            <AllSkills />
            <AnimatedSkills />
            <Contact />
            <Footer />
        </div>
    );
};

export default ShowscaseSections;
