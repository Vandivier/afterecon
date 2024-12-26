"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      className="w-8 h-8 rounded-lg flex items-center justify-center hover:ring-2 ring-gray-300 transition-all"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}
