'use client';

import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import Search from './Search';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-sky-50 shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link
          href="/"
          className="shrink-0 text-2xl font-semibold text-gray-800 transition-colors hover:text-sky-600 dark:text-gray-100 dark:hover:text-sky-400"
        >
          AfterEcon
        </Link>

        <div className="flex flex-1 items-center justify-end gap-6">
          <div className="hidden items-center gap-6 text-sm font-medium text-gray-600 dark:text-gray-400 md:flex">
            <Link
              href="/posts/2026-05-16-about-afterecon"
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
          <div className="w-full max-w-xs">
            <Search />
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
