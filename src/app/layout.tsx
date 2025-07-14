import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";

// Load fonts as CSS variables
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

// SEO Metadata
export const metadata: Metadata = {
  title: "Blog Summarizer - English & Urdu",
  description: "Instantly summarize any blog in English and Urdu using AI and n8n automation.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased transition-colors duration-300`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
