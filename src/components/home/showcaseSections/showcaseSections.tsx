"use client";

import Footer from "@/components/common/footer";
import Contact from "../contact";
import Education from "../education/education";
import Projects from "../projects/projects";
import AllSkills from "../skills/allSkills/allSkills";
import AnimatedSkills from "../skills/allSkills/animatedSkills";
import LatestBlog from "../latestBlog";

const ShowscaseSections = () => {

    return (
        <div className="relative  w-full items-center justify-center flex flex-col gap-10">
            <section id="projects">
                <Projects />
            </section>
            <section id="education">
                <Education />
            </section>
            <section id="skills">
                <AllSkills />
            </section>
            <AnimatedSkills />

            <LatestBlog />

            <section id="contact" className="w-full">
                <Contact />
            </section>
            <Footer />

        </div>
    );
};

export default ShowscaseSections;
