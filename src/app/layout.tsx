import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MUHAMMAD ADNAN - Full Stack Developer",
  description:
    "Portfolio of MUHAMMAD ADNAN K, a passionate Full Stack Developer specializing in React, Node.js, Next.js and modern web technologies.",
  openGraph: {
    title: "MUHAMMAD ADNAN - Full Stack Developer",
    description:
      "Portfolio of MUHAMMAD ADNAN K, a passionate Full Stack Developer specializing in React, Node.js, Next.js and modern web technologies.",
    url: "https://muhammadadnank.vercel.app",
    siteName: "MUHAMMAD ADNAN K PORTFOLIO",
    images: [
      {
        url: "https://muhammadadnank.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Adnan Portfolio Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <Toaster />
        {children}
      </body>
    </html>
  );
}
