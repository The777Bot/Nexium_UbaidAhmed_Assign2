"use client";

import React, { useState } from "react";

const BlogForm = () => {
  const [url, setUrl] = useState("");
  const [summary, setSummary] = useState({ en: "", ur: "" });
  const [loading, setLoading] = useState(false);

  const N8N_WEBHOOK_URL = "http://localhost:5678/webhook/summarise";

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

      const [englishPart, urduPartRaw] = (data.text || "").split(
        /===URDU TRANSLATION BELOW===/i
      );
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
    } catch {
      setSummary({
        en: "Error connecting to n8n webhook.",
        ur: "n8n ویب ہک سے کنکشن میں خرابی۔",
      });
    }
    setLoading(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* 🌐 Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white/70 dark:bg-black/30 backdrop-blur-md shadow-xl rounded-2xl border border-gray-200 dark:border-gray-600 px-4 sm:px-8 py-8 sm:py-10"
      >
        <label className="block text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">
          Blog URL
        </label>
        <input
          type="url"
          value={url}
          onChange={e => setUrl(e.target.value)}
          placeholder="Enter blog URL"
          required
          className="w-full px-4 py-3 mb-6 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-lg bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition duration-200"
        >
          {loading ? "Summarising..." : "Summarise"}
        </button>
      </form>

      {/* 📋 Combined Summary Output */}
      {(summary.en || summary.ur) && (
        <div className="mt-12 bg-white/90 dark:bg-gray-800 shadow-2xl rounded-2xl px-2 sm:px-8 py-8 sm:py-12 border border-indigo-200 dark:border-indigo-500 w-full max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-indigo-700 dark:text-indigo-300 mb-6">
            English & Urdu Summary
          </h2>
          <div className="space-y-10">
            {/* English */}
            {summary.en && (
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  English
                </h3>
                <p className="whitespace-pre-line text-gray-700 dark:text-gray-200 text-base sm:text-lg leading-relaxed">
                  {summary.en}
                </p>
              </div>
            )}
            {/* Urdu */}
            {summary.ur && (
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  Urdu
                </h3>
                <p className="whitespace-pre-line text-right text-gray-700 dark:text-gray-200 text-base sm:text-lg leading-loose font-[Noto Nastaliq Urdu,serif]">
                  {summary.ur}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogForm;
