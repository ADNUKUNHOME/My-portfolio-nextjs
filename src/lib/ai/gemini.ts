import { GoogleGenerativeAI } from "@google/generative-ai";
import { SYSTEM_PROMPT } from "./systemPrompt";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY! as string);

export async function generateWithGemini(message: string) {
    try {
        const model = genAI.getGenerativeModel({
            model: "gemini-2.0-flash",
        });

        const result = await model.generateContent([
            SYSTEM_PROMPT,
            `User: ${message}`,
        ]);

        const response = result.response.text();

        return response;
    } catch (error) {
        console.error("Gemini Error:", error);
        throw new Error("GEMINI_FAILED");
    }
}