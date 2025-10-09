"use client";

import { motion, useAnimation } from "framer-motion";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";

export default function FlowButton() {
  const router = useRouter();
  const controls = useAnimation();
  const [animating, setAnimating] = useState(false);
  const [textColor, setTextColor] = useState("text-white");

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (animating) return;

    setAnimating(true);
    setTextColor("text-black");

    // Trigger flow from right → left
    await controls.start({
      x: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    });

    // Navigate after short delay
    setTimeout(() => {
      router.push("/");
    }, 300);
  };

  return (
    <button
      onClick={handleClick}
      className="relative overflow-hidden border-none bg-transparent font-bold flex items-center justify-center group px-6 py-2 rounded-md"
    >
      {/* Hover effect (desktop) */}
      <span className="absolute inset-0 bg-gradient-to-l from-white to-white translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />

      {/* Tap animation (mobile) */}
      <motion.span
        initial={{ x: "100%" }}
        animate={controls}
        className="absolute inset-0 bg-white z-0"
      />

      {/* Text */}
      <span
        className={`relative z-10 flex items-center gap-0 md:gap-3 transition-colors duration-500 group-hover:text-black ${textColor}`}
      >
        <ChevronLeft />
        <span className="hidden md:flex">Back To</span> Home
      </span>
    </button>
  );
}
