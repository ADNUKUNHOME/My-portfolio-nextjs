import { useState } from "react";
import useShuffleText from "./shuffleText";
import { MotionDiv } from "@/lib/motion";
import BlobMedia from "./blobMedia";
import { Button } from "@/components/ui/button";

const ProjectCard = ({
    title,
    description,
    tech,
    index,
    videoSrc,
    imageSrc,
    liveLink,
    githubLink,
    year,
}: {
    title: string;
    description: string;
    tech: string[];
    index: number;
    videoSrc: string;
    imageSrc: string;
    liveLink: string;
    githubLink: string;
    year: string
}) => {
    const [inView, setInView] = useState(false);
    const displayTitle = useShuffleText(title, inView);

    return (
        <MotionDiv
            onViewportEnter={() => setInView(true)}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col md:flex-row gap-6 rounded-2xl bg-[#2a2622] border border-gray-700 shadow-lg"
        >
            {/* First: Video */}
            <BlobMedia type="video" src={videoSrc} liveLink={liveLink} />

            {/* Text */}
            <div className="flex flex-col justify-cneter items-center gap-5 m-6 flex-1">
                <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#e8e8e3] mb-2">{displayTitle}</h3>
                    <p className="text-gray-400 text-sm md:text-base mb-4">{description}</p>
                    <div className="flex flex-wrap gap-2">
                        {tech.map((t, i) => (
                            <span
                                key={i}
                                className="text-xs md:text-sm px-3 py-1 rounded-full bg-gray-800 text-gray-300 border border-gray-600"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Buttons */}
                    <div className="flex gap-1 mt-4 w-full items-start">
                        <Button
                            className="rounded-xl text-gray-300 hover:text-white text-sm bg-[#161412] hover:bg-[#161412]"
                            onClick={() => window.open(githubLink, "_blank")}
                        >
                            DEVELOPMENT
                        </Button>
                        <Button
                            className="rounded-xl bg-gray-800 hover:bg-gray-600 text-white  text-sm"
                            onClick={() => window.open(liveLink, "_blank")}
                        >
                            {year}
                        </Button>
                    </div>
                </div>

            {/* Second: Image */}
            <BlobMedia type="image" src={imageSrc} githubLink={githubLink} />
        </MotionDiv>
    );
};

export default ProjectCard;