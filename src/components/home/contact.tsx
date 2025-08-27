"use client";

import { SendEmailTo } from "@/actions/sendEmail";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Loader2 } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })
    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.email || !formData.message) {
            toast.error("Please provide your email and message!");
            return;
        }
        setLoading(true);

        try {

            const res = await SendEmailTo({ formData });
            if (res.success) {
                toast.success(res.message || "Message Send Successfully");
                setFormData({
                    name: "",
                    email: "",
                    message: ""
                });
            } else {
                toast.error(res.message || "Failed to send your message!");
            }
        } catch (error) {
            toast.error("Failed Submitting your Message!")
        } finally {
            setLoading(false);
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    return (
        <section
            id="contact"
            className="min-h-screen w-full flex flex-col items-center justify-center px-6 py-10 bg-gradient-to-br from-[#0f0f0f] via-[#111] to-[#1a1a1a] text-white"
        >
            {/* Heading */}
            <motion.h2
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold text-center bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent drop-shadow-lg mb-8"
            >
                LET'S MAKE IT HAPPEN
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-lg md:text-xl text-gray-300 mb-10 text-center max-w-2xl"
            >
                I’d love to hear about your projects or opportunities.
                Feel free to drop me a message!
            </motion.p>

            {/* Contact Card */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-lg bg-white/5 backdrop-blur-lg rounded-2xl shadow-[0_0_25px_rgba(255,200,0,0.15)] hover:shadow-[0_0_40px_rgba(255,200,0,0.15)] p-8"
            >
                <form onSubmit={handleFormSubmit} className="space-y-5">
                    <input
                        type="text"
                        placeholder="Your Good Name"
                        onChange={handleInputChange}
                        name="name"
                        value={formData.name}
                        className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                    <input
                        type="email"
                        placeholder="Wanna Hear Back? Add You Email."
                        onChange={handleInputChange}
                        name="email"
                        value={formData.email}
                        className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                    <textarea
                        rows={4}
                        placeholder="Your Message"
                        onChange={handleInputChange}
                        name="message"
                        value={formData.message}
                        className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    ></textarea>
                    <Button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-semibold shadow-lg hover:opacity-90 transition"
                    >
                        {loading ? <><Loader2 className="animate-spin mr-2" />Sending Your Message...</> : "Send Message"}
                    </Button>
                </form>
            </motion.div>

            {/* Social Links */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex gap-6 mt-7"
            >
                <a
                    href="mailto:adnukunhome7@gmail.com"
                    className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition"
                >
                    <Mail className="text-yellow-400 w-6 h-6" />
                </a>
                <a
                    href="https://www.linkedin.com/in/muhammad-adnan-a479052a1"
                    target="_blank"
                    className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition"
                >
                    <Linkedin className="text-yellow-400 w-6 h-6" />
                </a>
                <a
                    href="https://github.com/ADNUKUNHOME"
                    target="_blank"
                    className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition"
                >
                    <Github className="text-yellow-400 w-6 h-6" />
                </a>
            </motion.div>
        </section>
    );
};

export default Contact;
