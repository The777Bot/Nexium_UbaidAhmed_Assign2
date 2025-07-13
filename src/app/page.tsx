import Image from "next/image";
import BlogForm from "../components/BlogForm";
import { Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-between py-12 px-4 overflow-x-hidden bg-gradient-to-br from-indigo-100 via-white to-purple-200 animate-gradient-move">
      {/* 🌈 Animated Background Blobs */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-gradient-to-br from-indigo-300 via-purple-200 to-pink-200 rounded-full blur-3xl opacity-40 z-0 animate-pulse" />
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-gradient-to-br from-pink-200 via-purple-100 to-indigo-200 rounded-full blur-2xl opacity-30 z-0 animate-pulse" />

      {/* 🔥 Main Content */}
      <main className="flex flex-col gap-16 items-center w-full max-w-6xl mx-auto z-10 text-gray-900 dark:text-white">
        {/* 💡 Header */}
        <div className="flex flex-col items-center gap-5 mt-16 mb-12 text-center">
          <span className="inline-flex items-center justify-center bg-gradient-to-tr from-indigo-400 to-purple-500 rounded-full p-4 shadow-lg">
            <Sparkles className="w-10 h-10 text-white" />
          </span>
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight drop-shadow-xl">
            Blog Summarizer
          </h1>
          <p className="text-xl sm:text-2xl max-w-2xl text-gray-700 dark:text-gray-200 mt-3 leading-relaxed">
            Instantly generate <strong>AI-powered summaries</strong> in English
            and Urdu for any blog or article.
            <br />
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent font-semibold">
              Powered by n8n & LLMs
            </span>
          </p>
        </div>

        {/* 🧠 Form Section */}
        <div className="w-full max-w-4xl px-4 sm:px-8 py-10 rounded-3xl bg-white/70 backdrop-blur-md shadow-xl z-10 border border-gray-200 dark:border-gray-700 dark:bg-black/30 dark:backdrop-blur-xl">
          <BlogForm />
        </div>
      </main>

      {/* ⚙️ Footer */}
      <footer className="w-full flex flex-wrap gap-6 justify-center items-center py-10 text-gray-600 dark:text-gray-300 z-10 text-sm sm:text-base">
        <FooterLink
          href="https://nextjs.org/learn"
          icon="/file.svg"
          label="Learn Next.js"
        />
        <FooterLink
          href="https://vercel.com/templates?framework=next.js"
          icon="/window.svg"
          label="Next.js Templates"
        />
        <FooterLink
          href="https://nextjs.org"
          icon="/globe.svg"
          label="Go to nextjs.org →"
        />
      </footer>
    </div>
  );
}

const FooterLink = ({
  href,
  icon,
  label,
}: {
  href: string;
  icon: string;
  label: string;
}) => (
  <a
    className="flex items-center gap-2 hover:underline hover:text-indigo-600 transition-colors"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image src={icon} alt="" width={20} height={20} aria-hidden />
    {label}
  </a>
);
