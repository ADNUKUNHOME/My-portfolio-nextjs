import { MotionDiv } from "@/lib/motion";
import { AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState, useEffect, useMemo } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, placeholder, responsive } from "@cloudinary/react";
import { scale } from "@cloudinary/url-gen/actions/resize";
import { AdvancedVideo } from "@cloudinary/react";

const cld = new Cloudinary({ cloud: { cloudName: "dr7niljpd" } });

const BlobMedia = ({
    type = "image",
    src,
    liveLink,
    githubLink,
    videoPoster,
}: {
    type?: "image" | "video";
    src?: string;
    liveLink?: string;
    githubLink?: string;
    videoPoster?: string;
}) => {
    const [hovered, setHovered] = useState(false);
    const [hasBeenInView, setHasBeenInView] = useState(false);
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

    // observer only sets inView once
    useEffect(() => {
        if (!containerRef.current) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasBeenInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );
        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    // ✅ Memoize Cloudinary objects
    const cldImage = useMemo(() => {
        if (type === "image" && src) {
            return cld
                .image(src.split("/").pop()?.split(".")[0] || "")
                .format("auto")
                .quality("auto")
                .resize(scale().width(600));
        }
        return null;
    }, [src, type]);

    const cldVideo = useMemo(() => {
        if (type === "video" && src) {
            return cld
                .video(src.split("/").pop()?.split(".")[0] || "")
                .format("auto")
                .quality("auto")
                .resize(scale().width(800));
        }
        return null;
    }, [src, type]);

    return (
        <div
            ref={containerRef}
            className="relative w-full md:w-1/3 h-80 md:h-100 rounded-xl  group cursor-pointer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onMouseMove={handleMouseMove}
            onClick={handleClick}
        >

            {
                type === 'image' ?
                    <div className="absolute md:hidden -top-5 text-center w-full text-gray-400 text-[12px] font-bold">Click the Image for Source Code</div>
                    : <div className="absolute md:hidden -bottom-5 text-center w-full text-gray-400 text-[12px] font-bold">Click the video to view Live Preview</div>
            }
            {/* Media stays mounted, never blinks */}
            {type === "image" && cldImage && (
                <AdvancedImage
                    cldImg={cldImage}
                    plugins={[responsive(), placeholder({ mode: "blur" })]}
                    className="w-full h-full object-cover rounded-xl"
                />
            )}

            {type === "video" && cldVideo && hasBeenInView && (
                <AdvancedVideo
                    cldVid={cldVideo}
                    className="w-full h-full object-cover rounded-xl"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster={videoPoster}
                />
            )}

            {/* Blob layer - fixed black glass bg */}
            <AnimatePresence>
                {hovered && (
                    <MotionDiv
                        key="blob"
                        className="absolute w-20 h-20 rounded-full flex items-center justify-center 
              text-sm font-semibold pointer-events-none 
              backdrop-blur-lg bg-black/40 text-white border border-black/30"
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
