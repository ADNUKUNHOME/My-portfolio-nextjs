"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Hero from "@/components/home/hero/hero";
import AboutMe from "@/components/home/aboutMe";
import Frontend from "@/components/home/skills/frontend/frontend";
import Backend from "@/components/home/skills/backend/backend";
import OtherTools from "@/components/home/skills/otherTools/otherTools";
import Projects from "@/components/home/projects/projects";

export default function Home() {
  const containerRef = useRef(null);
  function useResponsiveOffset() {
    const [offsets, setOffsets] = useState({ backend: "17vh", other: "34vh" });

    useEffect(() => {
      function updateOffsets() {
        const width = window.innerWidth;

        if (width < 640) {
          // Small screens
          setOffsets({ backend: "18vh", other: "26vh" });
        } else if (width < 1024) {
          // Medium screens
          setOffsets({ backend: "16vh", other: "32vh" });
        } else {
          // Large screens
          setOffsets({ backend: "17vh", other: "34vh" });
        }
      }

      updateOffsets();
      window.addEventListener("resize", updateOffsets);
      return () => window.removeEventListener("resize", updateOffsets);
    }, []);

    return offsets;
  }

  const { backend, other } = useResponsiveOffset();



  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Divide scroll progress into 6 equal sections (Education removed)
  const step = 1 / 6;

  const heroOpacity = useTransform(scrollYProgress, [0, step * 2], [1, 0]);
  const heroTranslate = useTransform(scrollYProgress, [0, step], [0, -50]);

  const aboutMeTranslate = useTransform(
    scrollYProgress,
    [0, step, 2 * step],
    ["100vh", "0vh", "0vh"]
  );

  const frontendTranslate = useTransform(
    scrollYProgress,
    [step, 2 * step, 3 * step],
    ["100vh", "0vh", "0vh"]
  );

  const backendTranslate = useTransform(
    scrollYProgress,
    [2 * step, 3 * step, 4 * step],
    ["100vh", backend, backend]
  );

  const otherToolsTranslate = useTransform(
    scrollYProgress,
    [3 * step, 4 * step, 5 * step],
    ["100vh", other, other]
  );


  const projectsTranslate = useTransform(
    scrollYProgress,
    [4 * step, 5 * step, 1],
    ["100vh", "0vh", "0vh"]
  );

  return (
    <div ref={containerRef} className="relative h-[600vh]">
      {/* Hero */}
      <motion.section
        style={{ opacity: heroOpacity, y: heroTranslate }}
        className="h-screen flex items-center justify-center fixed top-0 left-0 w-full bg-black z-10"
      >
        <Hero />
      </motion.section>

      {/* AboutMe */}
      <motion.section
        style={{ y: aboutMeTranslate }}
        className="h-screen flex items-center justify-center bg-[#e8e8e3] text-black border border-gray-800 rounded-2xl fixed top-0 left-0 w-full z-20"
      >
        <AboutMe />
      </motion.section>

      {/* Frontend */}
      <motion.section
        style={{ y: frontendTranslate }}
        className="h-screen flex items-center justify-center bg-[#1f1c19] text-[#e8e8e3] border border-gray-800 fixed rounded-2xl top-0 left-0 w-full z-30"
      >
        <Frontend />
      </motion.section>

      {/* Backend */}
      <motion.section
        style={{ y: backendTranslate }}
        className="h-screen flex items-center justify-center bg-[#e8e8e3] text-black rounded-2xl border border-gray-800 fixed top-0 left-0 w-full z-40"
      >
        <Backend />
      </motion.section>

      {/* Other Tools */}
      <motion.section
        style={{ y: otherToolsTranslate }}
        className="h-screen flex items-center justify-center bg-[#1f1c19] text-[#e8e8e3] border border-gray-800 rounded-2xl fixed top-0 left-0 w-full z-50"
      >
        <OtherTools />
      </motion.section>

      {/* Projects */}
      <motion.section
        style={{ y: projectsTranslate }}
        className="h-screen flex flex-col justify-start items-center bg-black text-[#1f1c19] border border-gray-800 rounded-2xl fixed top-0 left-0 w-full z-60 overflow-y-auto p-8"
      >
        <Projects />
      </motion.section>
    </div>
  );
}
