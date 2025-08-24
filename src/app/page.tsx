"use client";

import Frontend from "@/components/home/frontend";
import Backend from "@/components/home/backend";
import Hero from "@/components/home/hero";
import Projects from "@/components/home/projects"; // ✅ Import your new section
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Hero fade out as you scroll
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroTranslate = useTransform(scrollYProgress, [0, 0.5], [0, -200]);

  // Frontend section slide
  const frontendTranslate = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66],
    ["100vh", "0vh", "0vh"]
  );

  // Backend section slide (stops at 25% height)
  const backendTranslate = useTransform(
    scrollYProgress,
    [0.33, 0.66, 1],
    ["100vh", "20vh", "20vh"] // 👈 stops at 25% of viewport height
  );

  // Projects section slide (after backend)
  const projectsTranslate = useTransform(
    scrollYProgress,
    [0.66, 1],
    ["100vh", "40vh"]
  );

  return (
    <div ref={containerRef} className="relative h-[400vh]">
      {/* Hero Section */}
      <motion.section
        style={{ opacity: heroOpacity, y: heroTranslate }}
        className="h-screen flex items-center justify-center fixed top-0 left-0 w-full bg-black z-10"
      >
        <Hero />
      </motion.section>

      {/* Frontend Section */}
      <motion.section
        style={{ y: frontendTranslate }}
        className="h-screen flex items-center justify-center bg-[#e8e8e3] text-black border border-gray-800 rounded-2xl fixed top-0 left-0 w-full z-20"
      >
        <Frontend />
      </motion.section>

      {/* Backend Section (stops at 1/4 height) */}
      <motion.section
        style={{ y: backendTranslate }}
        className="h-screen flex items-center justify-center bg-[#e8e8e3] text-black border border-gray-800  fixed rounded-2xl top-0 left-0 w-full z-30"
      >
        <Backend />
      </motion.section>

      {/* Projects Section */}
      <motion.section
        style={{ y: projectsTranslate }}
        className="h-screen flex items-center justify-center bg-[#e8e8e3] text-black rounded-2xl border border-gray-800  fixed top-0 left-0 w-full z-40"
      >
        <Projects />
      </motion.section>
    </div>
  );
}
