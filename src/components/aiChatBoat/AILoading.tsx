"use client";

import { MotionDiv } from "@/lib/motion";

export default function AILoading() {
    return (
        <div className="flex items-center gap-2 px-3 py-2 w-fit rounded-2xl bg-white/10">
            {[0, 1, 2].map((i) => (
                <MotionDiv
                    key={i}
                    className="w-2 h-2 rounded-full bg-white/70"
                    animate={{
                        y: [0, -4, 0],
                        opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        delay: i * 0.15,
                    }}
                />
            ))}
        </div>
    );
}