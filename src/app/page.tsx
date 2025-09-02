// app/page.tsx (Home)
"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import Hero from "@/components/home/hero/hero";
import AboutMe from "@/components/home/aboutMe";
import Frontend from "@/components/home/skills/frontend/frontend";
import Backend from "@/components/home/skills/backend/backend";
import OtherTools from "@/components/home/skills/otherTools/otherTools";
import ShowscaseSections from "@/components/home/showcaseSections/showcaseSections";
import MenuButton from "@/components/common/hamburgerButton";
import { MotionDiv, MotionSection } from "@/lib/motion";

export default function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const showcaseRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);


  function useResponsiveOffset() {
    const [offsets, setOffsets] = useState({ backend: "17vh", other: "34vh" });
    useEffect(() => {
      function updateOffsets() {
        const width = window.innerWidth;
        if (width < 640) setOffsets({ backend: "18vh", other: "26vh" });
        else if (width < 1024) setOffsets({ backend: "16vh", other: "32vh" });
        else setOffsets({ backend: "16vh", other: "32vh" });
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

  const step = 1 / 6;

  const showMenuButton = useTransform(scrollYProgress, [0, 2 * step, 2 * step], [0, 0, 1]);


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
    [2.2 * step, 3 * step, 4 * step],
    ["100vh", backend, backend]
  );

  const otherToolsTranslate = useTransform(
    scrollYProgress,
    [3.2 * step, 4 * step, 5 * step],
    ["100vh", other, other]
  );

  const showcaseTranslate = useTransform(
    scrollYProgress,
    [4.2 * step, 5 * step, 1],
    ["100vh", "0vh", "0vh"]
  );

  // Helper: scroll window to a given progress of the big 600vh container
  const scrollOuterToProgress = (progress: number) => {
    const el = containerRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const containerTop = window.scrollY + rect.top;
    const scrollable = rect.height - window.innerHeight; // ≈ 500vh for 600vh container
    const clamped = Math.max(0, Math.min(1, progress));
    const target = containerTop + clamped * scrollable;

    window.scrollTo({ top: target, behavior: "smooth" });
  };

  // Handle hash navigation from header/menu links
  useEffect(() => {
    const handleHash = () => {
      const raw = window.location.hash.replace("#", "").trim();
      if (!raw) return;

      // 1) Sliding stack: only "about" (you said only About should jump here)
      if (raw === "home") {
        scrollOuterToProgress(0);
        return;
      }
      if (raw === "about") {
        scrollOuterToProgress(step); // bring About fully into place
        return;
      }

      // 2) Everything else is inside the Showcase scroller
      // First bring the Showcase into view
      scrollOuterToProgress(5 * step);

      // Then scroll *inside* the showcase scroller to the specific section
      // Do it on the next frame so the element is measurable even during the smooth outer scroll
      requestAnimationFrame(() => {
        const scroller = showcaseRef.current;
        const targetEl = document.getElementById(raw);
        if (scroller && targetEl) {
          // offsetTop is fine here because `scroller` is the scroll container
          scroller.scrollTo({ top: targetEl.offsetTop - 8, behavior: "smooth" });
        }
      });
    };

    window.addEventListener("hashchange", handleHash);
    handleHash(); // handle direct landings with a hash
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  return (
    <div ref={containerRef} className="relative h-[600vh]">
      {/* Hero */}
      <MotionSection
        style={{ opacity: heroOpacity, y: heroTranslate }}
        className="h-screen flex items-center justify-center fixed top-0 left-0 w-full bg-black z-10"
      >
        <Hero />
      </MotionSection>

      {/* AboutMe */}
      <MotionSection
        id="about"
        style={{ y: aboutMeTranslate }}
        className="h-screen flex items-center justify-center bg-[#e8e8e3] text-black border border-gray-800 rounded-2xl fixed top-0 left-0 w-full z-20"
      >
        <AboutMe />
      </MotionSection>

      <MotionDiv
        style={{ opacity: showMenuButton, scale: showMenuButton }}
        className="fixed top-5 right-10 z-[1000]"
      >
        <MenuButton open={open} setOpen={setOpen} />
      </MotionDiv>



      {/* Frontend */}
      <MotionSection
        style={{ y: frontendTranslate }}
        className="h-screen flex items-center justify-center bg-[#1f1c19] text-[#e8e8e3] border border-gray-800 fixed rounded-2xl top-0 left-0 w-full z-30"
      >
        <Frontend />
      </MotionSection>

      {/* Backend */}
      <MotionSection
        style={{ y: backendTranslate }}
        className="h-screen flex items-center justify-center bg-[#e8e8e3] text-black rounded-2xl border border-gray-800 fixed top-0 left-0 w-full z-40"
      >
        <Backend />
      </MotionSection>

      {/* Other Tools */}
      <MotionSection
        style={{ y: otherToolsTranslate }}
        className="h-screen flex items-center justify-center bg-[#1f1c19] text-[#e8e8e3] border border-gray-800 rounded-2xl fixed top-0 left-0 w-full z-50"
      >
        <OtherTools />
      </MotionSection>

      {/* Showcase (scrollable) */}
      <MotionSection
        id="showcase"
        ref={showcaseRef}
        style={{ y: showcaseTranslate }}
        className="h-screen flex flex-col justify-start items-center bg-black text-[#1f1c19] border border-gray-800 rounded-2xl fixed top-0 left-0 w-full z-60 overflow-y-auto  py-8"
      >
        <ShowscaseSections />
      </MotionSection>
    </div>
  );
}
