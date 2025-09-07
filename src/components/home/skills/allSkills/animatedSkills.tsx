"use client";

import {
    SiJavascript,
    SiTypescript,
    SiHtml5,
    SiCss3,
    SiReact,
    SiNextdotjs,
    SiVite,
    SiTailwindcss,
    SiFramer,
    SiRedux,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiPostgresql,
    SiPrisma,
    SiGit,
    SiGithub,
    SiVercel,
    SiRender,
    SiCloudinary,
    SiStripe,
    SiPaypal,
    SiOpenai,
    SiGooglecloud,
} from "react-icons/si";
import { IconType } from "react-icons";
import { MotionDiv } from "@/lib/motion";



interface SkillTileProps {
    Icon: IconType;
    name: string;
    color: string;
}

const logos = [
    { icon: SiJavascript, color: "#f7df1e", name: "JavaScript" },
    { icon: SiTypescript, color: "#3178c6", name: "TypeScript" },
    { icon: SiHtml5, color: "#e34f26", name: "HTML5" },
    { icon: SiCss3, color: "#1572b6", name: "CSS3" },
    { icon: SiReact, color: "#61dafb", name: "React" },
    { icon: SiNextdotjs, color: "#fff", name: "Next.js" },
    { icon: SiVite, color: "#646cff", name: "Vite" },
    { icon: SiTailwindcss, color: "#38bdf8", name: "TailwindCSS" },
    { icon: SiFramer, color: "#e31e63", name: "Framer Motion" },
    { icon: SiRedux, color: "#764abc", name: "Redux" },
    { icon: SiNodedotjs, color: "#68a063", name: "Node.js" },
    { icon: SiExpress, color: "#fff", name: "Express" },
    { icon: SiMongodb, color: "#47a248", name: "MongoDB" },
    { icon: SiPostgresql, color: "#336791", name: "PostgreSQL" },
    { icon: SiPrisma, color: "#0c344b", name: "Prisma" },
    { icon: SiGit, color: "#f05032", name: "Git" },
    { icon: SiGithub, color: "#fff", name: "GitHub" },
    { icon: SiVercel, color: "#fff", name: "Vercel" },
    { icon: SiRender, color: "#46e3b7", name: "Render" },
    { icon: SiCloudinary, color: "#3448c5", name: "Cloudinary" },
    { icon: SiStripe, color: "#635bff", name: "Stripe" },
    { icon: SiPaypal, color: "#003087", name: "PayPal" },
    { icon: SiOpenai, color: "#10a37f", name: "OpenAI" },
    { icon: SiGooglecloud, color: "#4285f4", name: "Google Cloud" },
];

// tile component with animated gradient border
const SkillTile = ({ Icon, name, color }: SkillTileProps) => (
    <MotionDiv
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.05 }}
        className="relative flex flex-col items-center justify-center w-28 h-28 rounded-xl p-[2px] overflow-hidden"
    >
        {/* animated border */}
        <MotionDiv
            className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"
            animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
            }}
            style={{
                backgroundSize: "200% 200%",
            }}
        />
        {/* inner content */}
        <div className="relative flex flex-col items-center justify-center w-full h-full rounded-lg bg-black z-10">
            <Icon className="text-3xl md:text-4xl mb-2" style={{ color }} />
            <span className="text-xs md:text-sm text-white font-medium text-center px-2">
                {name}
            </span>
        </div>
    </MotionDiv>
);

// seamless infinite row
const LogoRow = ({ reverse = false }: { reverse?: boolean }) => {
    const row = [...logos, ...logos, ...logos]; // tripled for continuous scroll
    return (
        <MotionDiv
            className="flex gap-6 min-w-max"
            animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
            transition={{
                repeat: Infinity,
                duration: 100,
                ease: "linear",
            }}
        >
            {row.map((item, i) => (
                <SkillTile
                    key={i}
                    Icon={item.icon}
                    name={item.name}
                    color={item.color}
                />
            ))}
        </MotionDiv>
    );
};


const AnimatedSkills = () => {
    return (
        <div className="w-full overflow-hidden py-20 bg-linear-to-r from-purple-500/10 via-black to-blue-600/10 relative">
            <div className="flex flex-col gap-12">
                <LogoRow />
                <LogoRow reverse />
            </div>
        </div>
    );
};

export default AnimatedSkills;
