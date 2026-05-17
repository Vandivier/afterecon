"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-sky-50 dark:bg-gray-900 shadow-sm">
      <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-semibold text-gray-800 dark:text-gray-100 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
        >
          AfterEcon
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}
