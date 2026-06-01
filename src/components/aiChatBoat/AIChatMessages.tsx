"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

import AILoading from "./AILoading";
import { Message } from "./types";

export default function AIChatMessages({
    messages,
    loading,
}: {
    messages: Message[];
    loading: boolean;
}) {

    const containerRef = useRef<HTMLDivElement | null>(null);
    const bottomRef = useRef<HTMLDivElement | null>(null);

    const [showScrollButton, setShowScrollButton] = useState(false);

    // Auto scroll when new messages arrive
    useEffect(() => {
        bottomRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [messages, loading]);

    // Detect if user is away from bottom
    const handleScroll = () => {
        const container = containerRef.current;

        if (!container) return;

        const threshold = 120;

        const isNearBottom =
            container.scrollHeight -
            container.scrollTop -
            container.clientHeight <
            threshold;

        setShowScrollButton(!isNearBottom);
    };

    // Scroll to latest message
    const scrollToBottom = () => {
        bottomRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <div className="relative flex-1 min-h-0">

            {/* Messages */}
            <div
                ref={containerRef}
                onScroll={handleScroll}
                className="h-full overflow-y-auto p-4 space-y-3"
            >
                {messages.length === 0 && (
                    <div className="text-white/40 text-sm text-center mt-10">
                        Ask me anything about Adnan 🚀
                    </div>
                )}

                {messages.map((msg, i) => (
                    <div
                        key={i}
                        className={`max-w-[80%] px-3 py-2 rounded-lg text-sm ${msg.role === "user"
                            ? "ml-auto bg-blue-500 text-white"
                            : "bg-white/10 text-white"
                            }`}
                    >
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeHighlight]}
                            components={{
                                a: ({ href, children }) => (
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 underline hover:text-blue-300"
                                    >
                                        {children}
                                    </a>
                                ),
                            }}
                        >
                            {msg.content}
                        </ReactMarkdown>
                    </div>
                ))}

                {loading && <AILoading />}

                {/* Bottom Target */}
                <div ref={bottomRef} />
            </div>

            {/* Scroll To Bottom Button */}
            {showScrollButton && (
                <button
                    onClick={scrollToBottom}
                    className="
                        absolute bottom-5 right-5
                        w-8 h-8
                        rounded-full
                        bg-white/10
                        backdrop-blur-md
                        border border-white/10
                        text-white
                        flex items-center justify-center
                        hover:bg-white/20
                        transition
                    "
                >
                    <ChevronDown size={20} />
                </button>
            )}
        </div>
    );
}