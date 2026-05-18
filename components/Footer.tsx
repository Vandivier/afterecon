import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t border-gray-200 py-8 dark:border-gray-800">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-600 dark:text-gray-400">
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
          <p className="text-sm font-bold text-gray-500 dark:text-gray-500">
            &copy; {currentYear}{' '}
            <Link
              href="https://vandivier.github.io/not-johns-linktree/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              John Vandivier
            </Link>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
