import { MotionDiv, MotionImg } from "@/lib/motion";
import { AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState } from "react";

const BlobMedia = ({
    type = "image",
    src,
    liveLink,
    githubLink,
}: {
    type?: "image" | "video";
    src?: string;
    liveLink?: string;
    githubLink?: string;
}) => {
    const [hovered, setHovered] = useState(false);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness: 300, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 300, damping: 20 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left - 40);
        mouseY.set(e.clientY - rect.top - 40);
    };

    const handleClick = () => {
        if (type === "video" && liveLink) {
            window.open(liveLink, "_blank");
        } else if (type === "image" && githubLink) {
            window.open(githubLink, "_blank");
        }
    };

    return (
        <div
            ref={containerRef}
            className="relative w-full md:w-1/3 h-48 md:h-64 rounded-xl overflow-hidden group cursor-pointer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onMouseMove={handleMouseMove}
            onClick={handleClick}
        >
            {type === "video" ? (
                <video
                    src={src}
                    className="w-full h-full object-cover rounded-xl"
                    autoPlay
                    muted
                    loop
                />
            ) : (
                <MotionImg
                    src={src}
                    className="w-full h-full object-cover rounded-xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200 }}
                />
            )}

            {/* Blob */}
            <AnimatePresence>
                {hovered && (
                    <MotionDiv
                        key="blob"
                        className="absolute w-20 h-20 rounded-full flex items-center justify-center
                 text-white font-semibold 
                 bg-white/20 dark:bg-black/20
                 backdrop-blur-lg border border-white/30 dark:border-black/30
                 pointer-events-none"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        style={{ left: springX, top: springY }}
                    >
                        {type === "video" ? "View" : "Code"}
                    </MotionDiv>
                )}
            </AnimatePresence>

        </div>
    );
};

export default BlobMedia;