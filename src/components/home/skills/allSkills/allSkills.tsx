"use client";

import { Separator } from "@/components/ui/separator";
import { SkillCategories } from "@/constants/mySKills";
import * as Si from "react-icons/si";
import { IconType } from "react-icons";
import { MotionDiv, MotionH1, MotionH3 } from "@/lib/motion";

// Animation Variants
const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.05 },
    },
};

const item = {
    hidden: { opacity: 0, y: 15, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
};

// 🔹 Map skill names → Icons
const skillIcons: Record<string, { icon: IconType; color: string }> = {
    "JavaScript (ES6+)": { icon: Si.SiJavascript, color: "#f7df1e" },
    TypeScript: { icon: Si.SiTypescript, color: "#3178c6" },
    HTML5: { icon: Si.SiHtml5, color: "#e34f26" },
    CSS3: { icon: Si.SiCss3, color: "#1572b6" },
    "React.js": { icon: Si.SiReact, color: "#61dafb" },
    "Next.js": { icon: Si.SiNextdotjs, color: "#ffffff" },
    Vite: { icon: Si.SiVite, color: "#646cff" },
    "Tailwind CSS": { icon: Si.SiTailwindcss, color: "#38bdf8" },
    "ShadCN UI": { icon: Si.SiRadixui, color: "#ffffff" },
    "Framer Motion": { icon: Si.SiFramer, color: "#e91e63" },
    Redux: { icon: Si.SiRedux, color: "#764abc" },
    "Context API": { icon: Si.SiReact, color: "#61dafb" },
    "Node.js": { icon: Si.SiNodedotjs, color: "#339933" },
    "Express.js": { icon: Si.SiExpress, color: "#ffffff" },
    "RESTful APIs": { icon: Si.SiApachespark, color: "#e25a1c" },
    JWT: { icon: Si.SiJsonwebtokens, color: "#000000" },
    Clerk: { icon: Si.SiClerk, color: "#6c47ff" },
    "NextAuth.js": { icon: Si.SiAuth0, color: "#eb5424" },
    MongoDB: { icon: Si.SiMongodb, color: "#47a248" },
    Mongoose: { icon: Si.SiMongoose, color: "#880000" },
    "Neon (PostgreSQL)": { icon: Si.SiPostgresql, color: "#336791" },
    Prisma: { icon: Si.SiPrisma, color: "#2d3748" },
    "Git & GitHub": { icon: Si.SiGithub, color: "#ffffff" },
    Git: { icon: Si.SiGit, color: "#f05032" },
    Vercel: { icon: Si.SiVercel, color: "#ffffff" },
    Render: { icon: Si.SiRender, color: "#46e3b7" },
    Cloudinary: { icon: Si.SiCloudinary, color: "#3448c5" },
    Stripe: { icon: Si.SiStripe, color: "#635bff" },
    PayPal: { icon: Si.SiPaypal, color: "#00457c" },
    "OpenAI (ChatGPT API)": { icon: Si.SiOpenai, color: "#10a37f" },
    "Gemini AI": { icon: Si.SiGooglecloud, color: "#4285f4" },
    LangChain: { icon: Si.SiChainlink, color: "#375bd2" },
};

// 🔹 Fallback Icon
const FallbackIcon: IconType = Si.SiCoder;

const AllSkills = () => {
    return (
        <section className="w-full max-w-5xl mx-auto px-6 py-20 text-white">
            {/* Heading */}
            <MotionH1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center text-4xl md:text-5xl text-orange-50 lg:text-6xl font-extrabold tracking-tight"
            >
                MY TECH STACK/
            </MotionH1>
            <Separator className="w-20 mx-auto bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 my-10 rounded-full" />

            <div className="space-y-14">
                {SkillCategories.map((category) => (
                    <MotionDiv
                        key={category.title}
                        initial="hidden"
                        whileInView="visible"
                        variants={container}
                        viewport={{ once: true }}
                    >
                        {/* Category Title */}
                        <MotionH3
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-lg md:text-xl font-semibold text-center mb-6 bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent"
                        >
                            {category.title}
                        </MotionH3>

                        {/* Skills Grid */}
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
                            {Object.values(category.skills)
                                .flat()
                                .map((skill) => {
                                    const skillData = skillIcons[skill];
                                    const Icon = skillData?.icon || FallbackIcon;
                                    const color = skillData?.color || "#ffffff";

                                    return (
                                        <MotionDiv
                                            key={skill}
                                            variants={item}
                                            whileTap={{ scale: 1.05 }}
                                            whileHover={{
                                                scale: 1.07,
                                                rotate: 1,
                                                boxShadow:
                                                    "0 0 8px rgba(168,85,247,0.6), 0 0 14px rgba(236,72,153,0.5), 0 0 18px rgba(59,130,246,0.4)",
                                            }}
                                            className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 transition-all cursor-pointer"
                                        >
                                            {/* Icon */}
                                            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-tr from-gray-800 to-gray-900">
                                                <Icon className="text-xl" style={{ color }} />
                                            </div>
                                            <span className="mt-2 text-xs md:text-sm font-medium text-gray-200 text-center">
                                                {skill}
                                            </span>
                                        </MotionDiv>
                                    );
                                })}
                        </div>
                    </MotionDiv>
                ))}
            </div>
        </section>
    );
};

export default AllSkills;
