import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t border-gray-200 py-8 dark:border-gray-800">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-4">
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
