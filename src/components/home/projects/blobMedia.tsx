import { MotionDiv, MotionImg } from "@/lib/motion";
import { AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

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
    const [loading, setLoading] = useState(true);
    const [isLight, setIsLight] = useState(true); // for blob color decision
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

    // brightness calculation helper
    const calculateBrightness = (el: HTMLImageElement | HTMLVideoElement) => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = 50;
        canvas.height = 50;
        ctx.drawImage(el, 0, 0, 50, 50);
        const data = ctx.getImageData(0, 0, 50, 50).data;

        let r = 0, g = 0, b = 0;
        for (let i = 0; i < data.length; i += 4) {
            r += data[i];
            g += data[i + 1];
            b += data[i + 2];
        }
        const pixels = data.length / 4;
        const avgR = r / pixels;
        const avgG = g / pixels;
        const avgB = b / pixels;

        // luminance formula
        const brightness = 0.299 * avgR + 0.587 * avgG + 0.114 * avgB;

        setIsLight(brightness > 128); // threshold
    };

    useEffect(() => {
        if (!src) return;

        if (type === "image") {
            const img = new Image();
            img.crossOrigin = "anonymous";
            img.src = src;
            img.onload = () => calculateBrightness(img);
        } else if (type === "video") {
            const video = document.createElement("video");
            video.crossOrigin = "anonymous";
            video.src = src;
            video.currentTime = 1; // pick frame
            video.onloadeddata = () => calculateBrightness(video);
        }
    }, [src, type]);

    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        if (!containerRef.current) return;
        const observer = new IntersectionObserver(
            ([entry]) => setIsInView(entry.isIntersecting),
            { threshold: 0.3 }
        );
        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);


    return (
        <div
            ref={containerRef}
            className="relative w-full md:w-1/3 h-80 md:h-100 rounded-xl overflow-hidden group cursor-pointer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onMouseMove={handleMouseMove}
            onClick={handleClick}
        >
            {loading && <Skeleton className="w-full h-full rounded-xl" />}

            {type === "video" ? (
                <div className="w-full h-full">
                    {isInView && (
                        <video
                            src={src}
                            className="w-full h-full object-cover rounded-xl"
                            autoPlay
                            muted
                            loop
                            playsInline
                            onLoadedData={() => setLoading(false)}
                        />
                    )}
                </div>
            ) : (
                <MotionImg
                    src={src}
                    loading="lazy"
                    className={`w-full h-full object-cover rounded-xl ${loading ? "hidden" : "block"}`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    onLoad={() => setLoading(false)}
                />
            )}

            {/* Blob */}
            <AnimatePresence>
                {hovered && (
                    <MotionDiv
                        key="blob"
                        className={`absolute w-20 h-20 rounded-full flex items-center justify-center 
                            text-sm font-semibold pointer-events-none 
                            backdrop-blur-lg border 
                            ${isLight
                                ? "bg-black/40 text-white border-black/30"
                                : "bg-white/40 text-black border-white/30"
                            }`}
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
