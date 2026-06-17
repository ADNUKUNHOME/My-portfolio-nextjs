"use client";

const AnimatingBg = (
    canvasRef: React.RefObject<HTMLCanvasElement | null>
): (() => void) | void => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio, 1.5);
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    let particleCount = 80;
    if (window.innerWidth < 640) particleCount = 30;
    else if (window.innerWidth < 1024) particleCount = 50;

    let animationId: ReturnType<typeof requestAnimationFrame>;

    const particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 1,
        vy: (Math.random() - 0.5) * 1,
        size: Math.random() * 2 + 1,
    }));

    const draw = () => {
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, width, height);
        ctx.fillStyle = "#ffffff33";
        particles.forEach((p) => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
            p.x = (p.x + p.vx + width) % width;
            p.y = (p.y + p.vy + height) % height;
        });

        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.hypot(dx, dy);
                if (dist < 120) {
                    ctx.strokeStyle = `rgba(255,255,255,${1 - dist / 120})`;
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        animationId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {

        width = window.innerWidth;
        height = window.innerHeight;
        const dpr = Math.min(window.devicePixelRatio, 1.5);

        canvas.width = width * dpr;
        canvas.height = height * dpr;

        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(dpr, dpr);
    };

    window.addEventListener("resize", handleResize);
    return () => {
        cancelAnimationFrame(animationId);
        window.removeEventListener("resize", handleResize);
    };
}

export default AnimatingBg
