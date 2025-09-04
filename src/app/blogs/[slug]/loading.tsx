export default function Loading() {
    return (
        <div className="flex items-center justify-center h-screen w-full bg-black">
            <img
                src="/fallback.jpg"
                alt="Loading..."
                className="w-80 h-80 rounded-full animate-pulse shadow-[0_0_60px_20px_rgba(255,255,255,0.4)]"
            />
        </div>
    );
}
