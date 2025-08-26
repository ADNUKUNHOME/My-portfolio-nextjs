type SkillSection = {
    type?: string;
    description?: string;
    skills: string[];
}

export const MySkillsSection: SkillSection[] = [
    {
        description: `I craft engaging and responsive user interfaces using modern frontend technologies.
            My focus is on building performant, accessible, and visually appealing applications
            that deliver seamless user experiences across devices`,
        skills: [
            "JavaScript (ES6+), TypeScript",
            "React.js, Next.js, Tailwind CSS",
            "Shadcn UI, Framer Motion"
        ]
    },
    {
        type: "backend",
        description: `I design and develop robust backend systems that ensure
            secure, efficient, and seamless data flow. My focus is on
            building reliable infrastructures that power smooth user experiences.`,
        skills: [
            "Node.js, Express.js",
            "REST APIs, JWT, Clerk",
            "MongoDB, PostgreSQL"
        ]
    },
    {
        skills: [
            "Git, GitHub, Vercel",
            "OpenAI, Gemini AI",
            "Render, Stripe, Paypal"
        ]
    },
]