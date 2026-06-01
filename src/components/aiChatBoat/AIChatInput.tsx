"use client";

import { Send } from "lucide-react";
import { useState } from "react";

type Props = {
    onSend: (msg: string) => void;
    loading: boolean;
};

export default function AIChatInput({ onSend, loading }: Props) {
    const [text, setText] = useState("");

    const handleSend = () => {
        if (!text.trim() || loading) return;
        onSend(text);
        setText("");
    };

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                handleSend();
            }}
            className="p-3 border-t border-white/10 flex gap-2"
        >
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Ask about Adnan..."
                className="flex-1 px-3 py-2 rounded-md bg-white/10 text-white outline-none"
            />

            {text && (
                <button
                    type="submit"
                    className="px-4 py-2 bg-white/20 rounded-md text-white cursor-pointer"
                >
                    <Send />
                </button>
            )}
        </form>
    );
}