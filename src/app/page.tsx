import Image from "next/image";
import BlogForm from "../components/BlogForm";
import { Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-between py-8 px-4 overflow-x-hidden bg-gradient-to-br from-indigo-100 via-white to-purple-200 animate-gradient-move">
      {/* Animated background blobs */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-gradient-to-br from-indigo-300 via-purple-200 to-pink-200 rounded-full blur-3xl opacity-40 z-0 animate-pulse" />
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-gradient-to-br from-pink-200 via-purple-100 to-indigo-200 rounded-full blur-2xl opacity-30 z-0 animate-pulse" />
      <main className="flex flex-col gap-10 items-center w-full max-w-2xl mx-auto z-10">
        <div className="flex flex-col items-center gap-3 mt-12">
          <span className="inline-flex items-center justify-center bg-gradient-to-tr from-indigo-400 to-purple-400 rounded-full p-3 shadow-lg mb-2">
            <Sparkles className="w-8 h-8 text-white" />
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 dark:text-white drop-shadow-lg tracking-tight">
            Blog Summarizer
          </h1>
          <p className="text-lg sm:text-xl text-center text-gray-700 dark:text-gray-200 max-w-2xl mt-2">
            Instantly generate concise, AI-powered English and Urdu summaries for any blog or article. <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent font-semibold">Powered by n8n & LLMs</span>.
          </p>
        </div>
        {/* Glassmorphism Card for BlogForm */}
        <div className="w-full max-w-xl mx-auto rounded-2xl bg-white/60 dark:bg-black/40 shadow-2xl backdrop-blur-lg border border-purple-200 dark:border-indigo-700 p-8 relative z-10">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-indigo-300 via-purple-200 to-pink-200 opacity-40 blur-lg -z-10" />
          <BlogForm />
        </div>
      </main>
      <footer className="flex gap-8 flex-wrap items-center justify-center py-8 text-base text-gray-500 dark:text-gray-300 z-10">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 transition-colors"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={18}
            height={18}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 transition-colors"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={18}
            height={18}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 transition-colors"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={18}
            height={18}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
