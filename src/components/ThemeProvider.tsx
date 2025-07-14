"use client";
import React, { useEffect, useState, ReactNode, createContext, useContext } from "react";
import { Sun, Moon } from "lucide-react";

export const ThemeContext = createContext<{ theme: string | null }>({ theme: null });
export function useTheme() { return useContext(ThemeContext); }

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    // On mount, set theme from localStorage or system
    const stored = localStorage.getItem("theme");
    if (stored) {
      setTheme(stored);
      document.documentElement.classList.toggle("dark", stored === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  // Choose background classes
  const bgClass =
    theme === "light"
      ? "bg-gradient-to-br from-yellow-200 via-orange-200 to-yellow-100"
      : "bg-gradient-to-br from-[#18192a] via-[#1a1333] to-[#0a0a16]";
  const overlayStyle = {
    background:
      theme === "light"
        ? "linear-gradient(135deg, #fffbe6cc 60%, #fffde4cc 100%)"
        : "linear-gradient(135deg, #18192acc 60%, #0a0a16cc 100%)",
  };

  return (
    <ThemeContext.Provider value={{ theme }}>
      <div className={`relative min-h-screen w-full ${bgClass} text-black dark:text-white transition-colors duration-300`}>
        {/* Theme Toggle Button */}
        <button
          aria-label="Toggle theme"
          onClick={toggleTheme}
          className="fixed top-6 right-6 z-50 p-2 rounded-full bg-white/80 dark:bg-black/60 shadow-lg hover:scale-110 transition-all border border-gray-200 dark:border-gray-700"
        >
          {/* Reverse: show Moon in dark, Sun in light */}
          {theme === "dark" ? <Moon className="w-6 h-6 text-orange-500" /> : <Sun className="w-6 h-6 text-yellow-400" />}
        </button>
        {/* Blurred Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed inset-0 w-full h-full object-cover z-0 pointer-events-none select-none blur-xl opacity-50"
          style={{ objectPosition: "center" }}
        >
          <source src="/bgvideo1.mp4" type="video/mp4" />
        </video>
        {/* Overlay for readability */}
        <div className="fixed inset-0 z-0 pointer-events-none" style={overlayStyle} />
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  );
} 