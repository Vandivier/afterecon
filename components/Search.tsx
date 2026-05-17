'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { format } from 'date-fns';

interface SearchResult {
  title: string;
  date: string;
  slug: string;
}

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [index, setIndex] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load search index
    fetch("/search-index.json")
      .then((res) => res.json())
      .then((data: SearchResult[]) => setIndex(data))
      .catch((err) => console.error("Failed to load search index:", err));

    // Handle clicks outside
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }

    const filtered = index
      .filter((post) => post.title.toLowerCase().includes(query.toLowerCase()))
      .slice(0, 10); // Limit to 10 results
    setResults(filtered);
  }, [query, index]);

  return (
    <div className="relative" ref={searchRef}>
      <input
        type="text"
        placeholder="Search post titles..."
        className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:border-gray-800 dark:bg-gray-800 dark:text-gray-100 sm:w-64"
        value={query}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setQuery(e.currentTarget.value);
          setIsOpen(true);
        }}
        onFocus={() => setIsOpen(true)}
      />

      {isOpen && results.length > 0 && (
        <div className="absolute z-[60] mt-2 max-h-96 w-full overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-xl dark:border-gray-700 dark:bg-gray-800 sm:w-96">
          <ul className="py-2">
            {results.map((result) => (
              <li key={result.slug}>
                <Link
                  href={`/posts/${result.slug}`}
                  className="block px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700"
                  onClick={() => {
                    setIsOpen(false);
                    setQuery('');
                  }}
                >
                  <div className="line-clamp-1 text-sm font-medium text-gray-900 dark:text-gray-100">
                    {result.title}
                  </div>
                  <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    {format(new Date(result.date), 'MMMM d, yyyy')}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {isOpen && query.length >= 2 && results.length === 0 && (
        <div className="absolute z-[60] mt-2 w-full rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-500 shadow-xl dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 sm:w-64">
          No results found.
        </div>
      )}
    </div>
  );
}
