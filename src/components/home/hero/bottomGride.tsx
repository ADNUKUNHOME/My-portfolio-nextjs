import BottomLeft from "./bottomLeft";
import BottomRight from "./bottomRight";

export default function BottomGride() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 absolute bottom-16 px-6 md:px-16 md:gap-12 w-full max-w-6xl mx-auto">
            {/* Left Side - Code Snippet */}
            <BottomLeft />

            {/* Right Side */}
            <BottomRight />
        </div>
    )
}