type SkillSection = {
    type?: string;
    description?: string;
    skills: string[];
}

type SkillsGroup = Record<string, string[]>;


interface Category {
    title: string;
    skills: SkillsGroup;
    color: string;
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


export const SkillCategories: Category[] = [
    {
        title: "Frontend",
        skills: {
            Languages: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
            "Frameworks & Libraries": ["React.js", "Next.js", "Vite"],
            "UI & Styling": ["Tailwind CSS", "ShadCN UI", "Framer Motion"],
            "State Management": ["Redux", "Context API"],
        },
        color: "from-blue-500 to-cyan-400",
    },
    {
        title: "Backend",
        skills: {
            "Runtime & Frameworks": ["Node.js", "Express.js"],
            "APIs & Authentication": ["RESTful APIs", "JWT", "Clerk", "NextAuth.js"],
            "Databases & ORM": ["MongoDB", "Mongoose", "Neon (PostgreSQL)", "Prisma"],
        },
        color: "from-purple-500 to-pink-400",
    },
    {
        title: "Other Technologies",
        skills: {
            "Dev Tools & Deployment": ["Git & GitHub", "Thunder Client", ".env Management", "Vercel", "Render"],
            "Cloud & Media": ["Cloudinary", "UploadThing"],
            Payments: ["Stripe", "PayPal"],
            "AI Integration": ["OpenAI (ChatGPT API)", "Gemini AI", "LangChain"],
        },
        color: "from-green-400 to-emerald-500",
    },
];