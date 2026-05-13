"use client";

import AILoading from "./AILoading";
import { Message } from "./types";

export default function AIChatMessages({
    messages,
    loading,
}: {
    messages: Message[];
    loading: boolean;
}) {
    return (
        <div className="flex-1 min-h-0 overflow-y-auto p-4 space-y-3">
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
                    {msg.content}
                </div>
            ))}
            {loading && <AILoading />}
        </div>
    );
}