"use client";

import { Separator } from "@/components/ui/separator";
import { MyProjects } from "@/constants/projects";
import ProjectCard from "./projectCard";
import { MotionDiv } from "@/lib/motion";


const Projects = () => {
    return (
        <MotionDiv
            className="flex flex-col gap-10 w-full p-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className="flex flex-col items-center gap-3">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-300">
                    WHAT I HAVE DONE/
                </h2>
                <Separator className="w-24 bg-gray-500" />
                <p className="text-gray-400 text-sm md:text-base max-w-xl text-center">
                    A selection of my recent works, blending creativity, functionality,
                    and performance.
                </p>
            </div>

            {/* Projects List */}
            <div className="flex flex-col gap-10">
                {MyProjects.map((p, index) => (
                    <ProjectCard
                        key={index}
                        title={p.title}
                        description={p.description}
                        tech={p.tech}
                        index={index}
                        videoSrc={p.videoSrc}
                        imageSrc={p.imageSrc}
                        liveLink={p.liveLink}
                        githubLink={p.githubLink}
                        year={p.year}
                    />
                ))}
            </div>
        </MotionDiv>
    );
};

export default Projects;
