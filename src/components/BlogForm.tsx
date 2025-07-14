"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { Copy, Check, Link2, Loader2 } from "lucide-react";

const BlogForm = () => {
  const [url, setUrl] = useState("");
  const [summary, setSummary] = useState({ en: "", ur: "" });
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState("en");
  const [copied, setCopied] = useState<{ en: boolean; ur: boolean }>({ en: false, ur: false });

  const N8N_WEBHOOK_URL = "https://n8n-production-1c19.up.railway.app/webhook/summarise";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ BlogUrl: url }),
      });
      const data = await response.json();
      const [englishPart, urduPartRaw] = (data.text || "").split(/===URDU TRANSLATION BELOW===/i);
      let urduPart = "";
      if (urduPartRaw) {
        urduPart = urduPartRaw
          .replace(/Urdu Translation:/i, "")
          .replace(/Note:.*$/i, "")
          .split("\n")
          .map((line: string) => line.trim())
          .filter((line: string) => line.length > 0)
          .join("\n")
          .trim();
      }
      setSummary({
        en: (englishPart || "").trim(),
        ur: urduPart,
      });
      setTab("en");
    } catch {
      setSummary({
        en: "Error connecting to n8n webhook.",
        ur: "n8n ویب ہک سے کنکشن میں خرابی۔",
      });
    }
    setLoading(false);
  };

  const handleCopy = (lang: "en" | "ur") => {
    const text = lang === "en" ? summary.en : summary.ur;
    navigator.clipboard.writeText(text);
    setCopied(prev => ({ ...prev, [lang]: true }));
    setTimeout(() => setCopied(prev => ({ ...prev, [lang]: false })), 1200);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* 🌐 Advanced Glassmorphism Form */}
      <form
        onSubmit={handleSubmit}
        className="relative bg-white/60 dark:bg-black/30 backdrop-blur-xl shadow-2xl rounded-3xl border border-indigo-200 dark:border-indigo-600 px-6 sm:px-12 py-10 sm:py-14 overflow-hidden animate-fade-in"
        style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.25)" }}
      >
        {/* Animated Gradient Border */}
        <div className="absolute -inset-1 rounded-3xl pointer-events-none z-0 bg-gradient-to-tr from-indigo-400 via-purple-400 to-pink-400 opacity-60 blur-lg animate-gradient-move" />
        <div className="relative z-10">
          <label className="block text-lg font-bold text-gray-800 dark:text-indigo-100 mb-4 tracking-wide">
            Blog URL
          </label>
          <div className="relative mb-8">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-indigo-400">
              <Link2 className="w-5 h-5" />
            </span>
            <Input
              type="url"
              value={url}
              onChange={e => setUrl(e.target.value)}
              placeholder="Paste a blog link…"
              required
              className="pl-10 pr-4 py-4 rounded-xl border border-gray-300 dark:border-indigo-700 bg-white/80 dark:bg-black/40 focus:ring-2 focus:ring-indigo-400 outline-none text-lg shadow-inner transition-all duration-200"
            />
          </div>
          <Button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-extrabold text-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-200 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" /> AI Summarising…
              </>
            ) : (
              <>
                <SparklesIcon /> Summarise
              </>
            )}
          </Button>
        </div>
      </form>

      {/* 📋 Advanced Summary Output with Tabs */}
      {(summary.en || summary.ur) && (
        <div className="mt-14 bg-white/80 dark:bg-gray-900/80 shadow-2xl rounded-3xl px-4 sm:px-12 py-10 sm:py-14 border border-indigo-200 dark:border-indigo-600 w-full max-w-5xl mx-auto animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gradient mb-10 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            English & Urdu Summary
          </h2>
          <Tabs value={tab} onValueChange={setTab} className="w-full">
            <TabsList className="mx-auto mb-8">
              <TabsTrigger value="en">Nexium Project</TabsTrigger>
              
            </TabsList>
            <TabsContent value="en">
              <SummaryCard
                lang="en"
                text={summary.en}
                copied={copied.en}
                onCopy={() => handleCopy("en")}
              />
            </TabsContent>
            <TabsContent value="ur">
              <SummaryCard
                lang="ur"
                text={summary.ur}
                copied={copied.ur}
                onCopy={() => handleCopy("ur")}
              />
            </TabsContent>
          </Tabs>
        </div>
      )}
    </div>
  );
};

function SummaryCard({ lang, text, copied, onCopy }: { lang: "en" | "ur"; text: string; copied: boolean; onCopy: () => void }) {
  return (
    <div className={`relative bg-white/90 dark:bg-indigo-950/80 rounded-2xl shadow-lg p-6 flex flex-col gap-4 border border-indigo-100 dark:border-indigo-700 animate-fade-in ${lang === "ur" ? "text-right font-[Noto Nastaliq Urdu,serif]" : ""}`}>
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-200">{lang === "en" ? "AI-Generated Summary" : "AI-Generated Summary"}</h3>
        <Button
          variant="ghost"
          size="icon"
          onClick={onCopy}
          aria-label={`Copy ${lang === "en" ? "English" : "Urdu"} summary`}
          className="transition"
        >
          {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5 text-indigo-500" />}
        </Button>
      </div>
      <p className="whitespace-pre-line text-gray-800 dark:text-gray-100 text-base sm:text-lg leading-relaxed">
        {text}
      </p>
    </div>
  );
}

// Sparkles icon for button
const SparklesIcon = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-pink-200 animate-pulse">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414M17.95 17.95l-1.414-1.414M6.05 6.05L4.636 4.636" />
  </svg>
);

export default BlogForm;
