import { NextResponse } from "next/server";
import { generateWithOpenRouter } from "@/lib/ai/openrouter";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        if (!body?.message) {
            return NextResponse.json(
                { error: "Message is required" },
                { status: 400 }
            );
        }

        const userMessage = body.message.trim();
        const previousMessages = body.messages || [];

        if (userMessage.length > 500) {
            return NextResponse.json(
                { error: "Message too long" },
                { status: 400 }
            );
        }

        let reply = "";

        try {
            reply = await generateWithOpenRouter(
                userMessage,
                previousMessages,
            );
        } catch (err) {
            return NextResponse.json({
                success: true,
                reply: "AI is currently busy due to high demand. Please try again in a moment.",
            });
        }

        return NextResponse.json({
            success: true,
            reply,
        });

    } catch (error) {
        console.error("API Error:", error);

        return NextResponse.json(
            {
                success: false,
                error: "Something went wrong. Please try again.",
            },
            { status: 500 }
        );
    }
}