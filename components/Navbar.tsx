"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Search from "./Search";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-sky-50 dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center gap-4">
        <Link
          href="/"
          className="text-2xl font-semibold text-gray-800 dark:text-gray-100 hover:text-sky-600 dark:hover:text-sky-400 transition-colors shrink-0"
        >
          AfterEcon
        </Link>

        <div className="flex flex-1 items-center justify-end gap-6">
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600 dark:text-gray-400">
            <Link
              href="/posts/2026-05-17-where-to-read-newer-writings"
              className="hover:text-sky-600 dark:hover:text-sky-400"
            >
              About
            </Link>
            <a
              href="https://github.com/Vandivier/afterecon"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-600 dark:hover:text-sky-400"
            >
              GitHub
            </a>
            <a
              href="https://www.patreon.com/cw/johnvandivier"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-600 dark:hover:text-sky-400"
            >
              Patreon
            </a>
          </div>
          <div className="max-w-xs w-full">
            <Search />
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
