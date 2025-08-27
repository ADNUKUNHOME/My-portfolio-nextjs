import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    auth: {
        user: process.env.BREVO_SMTP_USER,
        pass: process.env.BREVO_SMTP_KEY,
    },
});

export const sendMail = async ({
    to,
    subject,
    html,
}: {
    to: string;
    subject: string;
    html: string;
}) => {
    return transport.sendMail({
        from: `"MUHAMMAD ADNAN" <${process.env.ADMIN_EMAIL}>`,
        to,
        subject,
        html,
    });
};