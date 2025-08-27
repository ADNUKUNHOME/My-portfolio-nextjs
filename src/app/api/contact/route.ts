import { sendMail } from "@/lib/mail";
import { NextResponse } from "next/server";
import DOMPurify from "isomorphic-dompurify";


export async function POST(req: Request) {
    try {
        const adminEmail = process.env.GETTING_EMAIL!;

        const { name, email, message } = await req.json();
        if (!email || !message) {
            return NextResponse.json({
                success: false,
                message: "Failed to send email!",
            }, { status: 400 });
        }

        const safeMessage = DOMPurify.sanitize(message);


        // 1️⃣ Send email to Admin
        await sendMail({
            to: adminEmail,
            subject: `📩 New Contact Message from ${name || "Anonymous"}`,
            html: `
                <h2>New Contact Form Submission from PORTFOLIO</h2>
                <p><strong>Name:</strong> ${name || "N/A"}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${safeMessage}</p>
            `,
        });

        // 2️⃣ Send confirmation email to user
        //TODO todo change url after deply
        await sendMail({
            to: email,
            subject: "📩 Thanks for contacting me!",
            html: `
        <h2>Hi ${name || "there"},</h2>
        
        <p>Thank you for reaching out through my <strong>portfolio</strong>! 🙌</p>
        
        <p>I’ve received your message and will review it soon. You can expect a response from me shortly.</p>
        
        <hr/>
        <p><em>Here’s a copy of what you submitted:</em></p>
        <blockquote style="border-left: 4px solid #facc15; padding-left: 8px; color: #555;">
            ${safeMessage}
        </blockquote>
        
        <p style="margin-top: 16px;">Looking forward to connecting with you.</p>
        
        <p>Best regards,<br/>
        <strong>-MUHAMMAD ADNAN K</strong><br/>
        <a href="https://your-portfolio-link.com" target="_blank">Portfolio Website</a></p>
    `,
        });


        return NextResponse.json(
            { success: true, message: "Message sent successfully!" },
            { status: 200 }
        );

    } catch (error) {
        console.log("Error Sending Email:", error);

        return NextResponse.json({
            success: false,
            message: "Error Sending  Email!",
        }, { status: 500 })
    }
}