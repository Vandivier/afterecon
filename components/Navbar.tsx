"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Search from "./Search";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-sky-50 dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center gap-4">
        <Link
          href="/"
          className="text-2xl font-semibold text-gray-800 dark:text-gray-100 hover:text-sky-600 dark:hover:text-sky-400 transition-colors shrink-0"
        >
          AfterEcon
        </Link>
        <div className="flex-1 flex justify-center max-w-sm">
          <Search />
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
}
