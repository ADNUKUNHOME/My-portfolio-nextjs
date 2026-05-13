"use client";

import { useEffect, useState } from "react";
import AIOrb from "./AIorb";
import AIChatModal from "./AIChatModal";
import AIChatMessages from "./AIChatMessages";
import AIChatInput from "./AIChatInput";
import { Message } from "./types";
import { saveMessages, loadMessages, clearMessages } from "./storage";
import AISuggestedQuestions from "./AISuggestedQuestions";

export default function AIWrapper() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState(false);

    // Load from localStorage
    useEffect(() => {
        setMessages(loadMessages());
    }, []);

    // Save to localStorage
    useEffect(() => {
        saveMessages(messages);
    }, [messages]);

    // Send message
    const handleSend = async (text: string) => {
        const userMsg: Message = { role: "user", content: text };

        setMessages((prev) => [...prev, userMsg]);
        setLoading(true);

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                body: JSON.stringify({ message: text }),
            });

            const data = await res.json();

            const aiMsg: Message = {
                role: "assistant",
                content: data.reply,
            };

            setMessages((prev) => [...prev, aiMsg]);
        } catch {
            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: "Something went wrong. Please try again.",
                },
            ]);
        } finally {
            setLoading(false);
        }
    };

    const handleClear = () => {
        clearMessages();
        setMessages([]);
    };

    return (
        <>
            <AIOrb onClick={() => setOpen(true)} />

            <AIChatModal isOpen={open} onClose={() => setOpen(false)}>
                {/* Header Actions */}
                <div className="flex justify-end p-2">
                    <button
                        onClick={handleClear}
                        className="text-xs text-white/60 hover:text-white cursor-pointer"
                    >
                        Clear Chat
                    </button>
                </div>

                <AIChatMessages
                    messages={messages}
                    loading={loading}
                />
                {messages.length === 0 && (
                    <AISuggestedQuestions onSelect={handleSend} />
                )}
                <AIChatInput onSend={handleSend} loading={loading} />
            </AIChatModal>
        </>
    );
}