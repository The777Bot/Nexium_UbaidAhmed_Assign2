"use client";
import Image from "next/image";
import BlogForm from "../components/BlogForm";
import { Sparkles, Users, FileText, Star, Zap, Brain, Activity, Languages, ListOrdered, Globe, Github, Twitter, Linkedin } from "lucide-react";
import { useTheme } from "../components/ThemeProvider";

export default function Home() {
  const { theme } = useTheme();
  const blob1 = theme === "light"
    ? "bg-gradient-to-br from-yellow-300 via-orange-200 to-yellow-100"
    : "bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900";
  const blob2 = theme === "light"
    ? "bg-gradient-to-br from-orange-200 via-yellow-100 to-yellow-200"
    : "bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-900";

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-between overflow-x-hidden bg-gradient-to-br from-[#18192a] via-[#1a1333] to-[#0a0a16] animate-gradient-move">
      {/* 🌈 Animated Background Blobs */}
      <div className={`absolute -top-32 -left-32 w-[400px] h-[400px] ${blob1} rounded-full blur-3xl opacity-40 z-0 animate-pulse`} />
      <div className={`absolute top-1/2 right-0 w-[300px] h-[300px] ${blob2} rounded-full blur-2xl opacity-30 z-0 animate-pulse`} />

      {/* 🚀 Hero Section */}
      <section className="w-full flex flex-col items-center justify-center text-center pt-24 pb-16 z-10">
        <span className="inline-flex items-center justify-center bg-gradient-to-tr from-indigo-400 to-purple-500 rounded-full p-5 shadow-2xl mb-6 animate-fade-in">
          <Sparkles className="w-12 h-12 text-white" />
        </span>
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-2xl animate-fade-in">
          AI Blog Summarizer
        </h1>
        <p className="text-2xl sm:text-3xl max-w-2xl text-gray-700 dark:text-gray-200 mt-6 leading-relaxed animate-fade-in delay-200">
          Instantly generate <strong>AI-powered summaries</strong> in English & Urdu for any blog or article.<br />
          <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent font-semibold">
            Powered by n8n & LLMs
          </span>
        </p>
        <div className="mt-10 animate-fade-in delay-300">
          {/* Optionally, add a CTA button here */}
        </div>
      </section>

      {/* --- Section Divider --- */}
      <SectionDivider />

      {/* 📊 Stats/Features Section */}
      <section className="w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16 z-10 animate-fade-in-up">
        <StatCard icon={<Users className="w-8 h-8 text-indigo-500" />} label="Active Users" value="50K+" />
        <StatCard icon={<FileText className="w-8 h-8 text-purple-500" />} label="Blogs Summarized" value="500K+" />
        <StatCard icon={<Star className="w-8 h-8 text-pink-500" />} label="Satisfaction Rate" value="99.9%" />
      </section>

      {/* --- Section Divider --- */}
      <SectionDivider />

      {/* 🧠 Form Section */}
      <main className="flex flex-col gap-16 items-center w-full max-w-6xl mx-auto z-10 text-gray-900 dark:text-white">
        <BlogForm />
      </main>

      {/* --- Section Divider --- */}
      <SectionDivider />

      {/* 🌟 Features Grid Section */}
      <section className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-20 px-4 z-10 animate-fade-in-up">
        <FeatureCard icon={<Zap className="w-7 h-7" />} title="Instant Summaries" desc="Get concise, accurate summaries of any blog post in seconds with our advanced AI technology." />
        <FeatureCard icon={<Brain className="w-7 h-7" />} title="Smart Analysis" desc="Leverages cutting-edge language models to understand context and extract key insights." />
        <FeatureCard icon={<Activity className="w-7 h-7" />} title="Key Highlights" desc="Automatically identifies and extracts the most important points and actionable insights." />
        <FeatureCard icon={<Languages className="w-7 h-7" />} title="Urdu Translation" desc="Get summaries in both English and Urdu for better accessibility and understanding." />
        <FeatureCard icon={<ListOrdered className="w-7 h-7" />} title="Article Empowers" desc="Our tool empowers users with article summarization capabilities in the form of a list." />
        <FeatureCard icon={<Globe className="w-7 h-7" />} title="Universal Support" desc="Works with any blog URL or direct content input from across the web." />
      </section>

      {/* --- Section Divider --- */}
      <SectionDivider />

      {/* Footer Glow */}
      <div className="w-full h-8 -mb-8 z-20 relative">
        <div className="absolute left-1/2 -translate-x-1/2 w-3/4 h-8 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 blur-2xl opacity-40 rounded-full" />
      </div>

      {/* ⚙️ Footer */}
      <footer className="w-full flex flex-col items-center justify-center gap-6 py-12 px-4 bg-gradient-to-t from-indigo-500/30 via-purple-500/20 to-pink-500/10 dark:from-indigo-900/60 dark:via-purple-900/40 dark:to-indigo-800/20 backdrop-blur-xl border-t border-indigo-100 dark:border-gray-800 animate-fade-in-up mt-16">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl gap-4">
          <div className="flex items-center gap-4 mb-2 md:mb-0">
            <FooterSocialIcon href="https://github.com/The777Bot" label="GitHub">
              <Github className="w-6 h-6" />
            </FooterSocialIcon>
            <FooterSocialIcon href="https://x.com/Ubaiahme1" label="X (Twitter)">
              <Twitter className="w-6 h-6" />
            </FooterSocialIcon>
            <FooterSocialIcon href="https://www.linkedin.com/in/ubaid-ahmed-230098328/" label="LinkedIn">
              <Linkedin className="w-6 h-6" />
            </FooterSocialIcon>
          </div>
          <div className="text-center text-gray-700 dark:text-gray-300 text-sm">
            © {new Date().getFullYear()} AI Blog Summarizer. Powered by the future of content analysis.
          </div>
          <div className="flex items-center gap-6">
            <FooterLink href="#" label="Privacy" />
            <FooterLink href="#" label="Terms" />
            <FooterLink href="#" label="Support" />
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionDivider() {
  return (
    <div className="w-full flex justify-center py-2">
      <div className="w-2/3 h-0.5 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 dark:from-indigo-700 dark:via-purple-700 dark:to-pink-700 opacity-40 rounded-full" />
    </div>
  );
}

function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex flex-col items-center justify-center bg-white/70 dark:bg-black/30 backdrop-blur-xl rounded-2xl shadow-xl border border-indigo-100 dark:border-indigo-700 py-8 px-6 transition-transform hover:scale-105 hover:shadow-2xl">
      <div className="mb-3">{icon}</div>
      <div className="text-3xl font-extrabold text-indigo-700 dark:text-indigo-300 mb-1">{value}</div>
      <div className="text-base font-medium text-gray-700 dark:text-gray-300">{label}</div>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="flex flex-col gap-4 bg-white/80 dark:bg-gradient-to-br dark:from-indigo-900/80 dark:via-purple-900/70 dark:to-indigo-800/80 border-2 border-transparent bg-clip-padding rounded-2xl shadow-lg p-8 backdrop-blur-xl transition-transform hover:scale-105 hover:shadow-2xl relative group">
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-lg mb-2 group-hover:scale-110 transition-transform">
        <span className="text-white">{icon}</span>
      </div>
      <div className="text-lg font-bold text-indigo-600 dark:text-purple-300 mb-1">{title}</div>
      <div className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">{desc}</div>
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-tr group-hover:from-indigo-500 group-hover:via-purple-500 group-hover:to-pink-500 pointer-events-none transition-all duration-300" />
    </div>
  );
}

const FooterLink = ({ href, label }: { href: string; label: string }) => (
  <a
    className="relative text-indigo-700 dark:text-purple-200 font-medium transition-colors after:content-[''] after:block after:h-0.5 after:bg-gradient-to-r after:from-indigo-500 after:to-pink-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left px-1"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {label}
  </a>
);

const FooterSocialIcon = ({ href, label, children }: { href: string; label: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="rounded-full p-2 bg-white/60 dark:bg-indigo-900/60 shadow hover:bg-gradient-to-tr hover:from-indigo-500 hover:to-pink-500 hover:text-white transition-colors duration-200"
  >
    {children}
  </a>
);
