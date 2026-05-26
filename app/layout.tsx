import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tingting Li | Full-Stack Developer",
  description: "Full-stack developer passionate about React, Next.js, and Node.js. Building responsive web applications with modern technologies.",
  keywords: ["full-stack developer", "React", "Next.js", "Node.js", "TypeScript", "remote developer", "junior developer"],
  openGraph: {
    title: "Tingting Li | Full-Stack Developer",
    description: "Full-stack developer building responsive web applications.",
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
