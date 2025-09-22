"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const PrivateProject = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 px-4">
            <div className="max-w-xl text-center bg-gray-950 bg-opacity-80 backdrop-blur-md rounded-3xl shadow-2xl p-12 space-y-6">
                <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400 animate-pulse">
                    🔒 Private Project
                </h1>
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                    This project is <span className="text-pink-400 font-semibold">private</span> and not publicly accessible.
                    You cannot view the live demo or the source code.
                </p>

                <div className="relative inline-block group">
                    <Link
                        href="/"
                        className="relative z-10 inline-flex items-center gap-2 px-6 py-3 font-semibold text-yellow-50 transition-all duration-300 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full shadow-lg hover:scale-105 hover:shadow-2xl"
                    >
                        <ArrowLeft className="w-5 h-5 animate-bounce" />
                        Back to Home
                    </Link>
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-20 blur-xl group-hover:opacity-50 transition duration-500"></span>
                </div>

                <div className="mt-6">
                    <p className="text-gray-400 italic text-sm">
                        🔹 You can explore other projects from my portfolio.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivateProject;
