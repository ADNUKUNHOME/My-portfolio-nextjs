'use client';

import { useEffect, useRef } from "react";
import Header from "./hero/header";
import MyName from "./hero/myName";
import BottomGride from "./hero/bottomGride";
import AnimatingBg from "./hero/bg";

export default function Hero() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Particle background
    useEffect(() => {
        const cleanup = AnimatingBg(canvasRef);
        return cleanup;
    }, []);

    return (
        <section className="relative w-full h-screen overflow-hidden">
            <canvas ref={canvasRef} className="absolute inset-0 -z-10" />

            <Header />

            {/* Name */}
            <MyName />

            {/* Bottom Grid */}
            <BottomGride />
        </section>
    );
}
