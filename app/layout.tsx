import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alex Chen | Full-Stack Developer",
  description: "Full-stack developer specializing in React, Next.js, and Node.js. Building modern web applications with clean code and great UX.",
  keywords: ["full-stack developer", "React", "Next.js", "Node.js", "TypeScript", "remote developer"],
  openGraph: {
    title: "Alex Chen | Full-Stack Developer",
    description: "Full-stack developer building modern web applications.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-[family-name:var(--font-geist-sans)] antialiased">
        {children}
      </body>
    </html>
  );
}
