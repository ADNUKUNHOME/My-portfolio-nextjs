import OpenAI from "openai";
import { SYSTEM_PROMPT } from "./systemPrompt";
import { PROJECTS_CONTEXT } from "./projectsPrompt";

const openrouter = new OpenAI({
    apiKey: process.env.OPENROUTER_API_KEY,
    baseURL: "https://openrouter.ai/api/v1",
});

const MODELS = [
    "google/gemma-4-26b-a4b-it:free",
    "openchat/openchat-7b",
    "meta-llama/llama-3-8b-instruct",
];

export async function generateWithOpenRouter(
    message: string,
    history: any[],
) {

    const recentMessages = history
        .slice(-15)
        .map((msg) => ({
            role: msg.role,
            content: msg.content,
        }));

    for (const model of MODELS) {
        try {
            const completion = await openrouter.chat.completions.create({
                model,
                messages: [
                    { role: "system", content: SYSTEM_PROMPT },
                    { role: "system", content: PROJECTS_CONTEXT },
                    ...recentMessages,
                    { role: "user", content: message },
                ],
                temperature: 0.7,
            });

            return completion.choices[0]?.message?.content || "No response";
        } catch (error: any) {
            console.warn(`Model ${model} failed:`, error?.error?.message);
        }
    }

    throw new Error("ALL_MODELS_FAILED");
}