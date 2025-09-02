const BLOGS = [
  {
    slug: "mern-ecommerce-journey",
    title: "My First MERN E-commerce Journey",
    description:
      "I built a full-stack e-commerce app with the MERN stack and Tailwind CSS: product filters, sorting, cart, PayPal checkout, order tracking, and an admin dashboard. This pushed me to design REST APIs, handle auth, and structure scalable UI states.",
    date: "2025-09-02",
    tags: ["MERN", "E-commerce", "TailwindCSS"],
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    content: [
      "When I started this project, I wanted to push myself beyond simple CRUD apps. The idea of building an e-commerce platform felt intimidating, but also exciting — it had all the challenges I needed: authentication, payments, data modeling, and UI state management.",
      "I used MongoDB for a flexible product schema, Express.js for API routes, React for the front-end, and Node.js to glue everything together. Tailwind CSS helped me move fast with design, keeping the UI consistent without writing too much custom CSS.",
      "One of the hardest parts was implementing PayPal checkout and order tracking. I had to carefully manage API calls, user sessions, and edge cases like failed payments. Debugging those flows taught me the importance of clean error handling and user feedback.",
      "By the end, I had a working app with filters, sorting, carts, checkout, and even an admin dashboard. More importantly, I left with a stronger understanding of how full-stack apps are structured in the real world."
    ]
  },
  {
    slug: "nextjs-cloudinary-portfolio-upgrade",
    title: "Next.js + Cloudinary: Portfolio Upgrade",
    description:
      "I rebuilt my portfolio in Next.js with Framer Motion animations, then moved media to Cloudinary for CDN delivery and on-the-fly optimization. This reduced payloads and simplified managing both images and demo videos across projects.",
    date: "2025-09-02",
    tags: ["Next.js", "TailwindCSS"],
    image:
      "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=800&q=80",
    content: [
      "After building projects with MERN, I realized my old portfolio felt slow and outdated. I wanted something modern, performant, and more fun to browse — so I chose Next.js for server-side rendering and routing, plus Framer Motion for subtle animations.",
      "Animations made a huge difference. I added fade-ins, slide-ups, and staggered transitions that gave the site a polished, professional feel without being too distracting.",
      "The other big upgrade was moving images and videos to Cloudinary. Before, I manually compressed files, but Cloudinary’s CDN and on-the-fly transformations handled everything automatically. My load times dropped drastically, especially on mobile.",
      "This project was less about learning fundamentals and more about refinement: performance, polish, and user experience. It taught me how important small details are in leaving a good impression."
    ]
  },
  {
    slug: "ai-roadmaps-and-summarizers",
    title: "AI Roadmaps & PDF Summaries: What I Learned",
    description:
      "Between NewWay (AI-powered student roadmaps) and Shortly (PDF summarizer with OpenAI/Gemini), I explored prompt design, auth, and dashboard UX. Shipping these taught me to balance accuracy, speed, and clean UI states for async AI tasks.",
    date: "2025-09-02",
    tags: ["AI", "Next.js"],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    content: [
      "AI apps fascinated me because they combined full-stack challenges with the unknowns of working with large language models. My first project, NewWay, generated custom study roadmaps for students. It forced me to think hard about prompt design and how to guide AI responses reliably.",
      "Then I built Shortly, a PDF summarizer powered by OpenAI/Gemini. Handling file uploads, parsing text, and streaming back results was tricky — especially keeping the UI responsive while the AI processed large documents.",
      "I also learned how important UI feedback is for async tasks. Spinners, progress indicators, and clear messaging turned confusing waiting periods into smooth experiences for users.",
      "These projects taught me that building with AI isn’t just about calling an API. It’s about managing uncertainty, guiding the model with structure, and making sure the end experience feels seamless."
    ]
  }
];

export default BLOGS; 
