# AfterEcon

A modern rebuild of John Vandivier's economics blog, featuring content from his training in economics and experience in software engineering.

## About

AfterEcon is a collection of writings on economics, technology, and their intersection. The blog features content from John Vandivier, who holds a Ph.D. in Economics from George Mason University and has extensive experience as a software engineer.

## Features

- Modern Next.js 14 with App Router
- Dark mode support
- Markdown blog posts converted from original WordPress content
- Responsive design
- TypeScript & Tailwind CSS
- Fast, static generation

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Convert WordPress posts to Markdown:

```bash
npm run convert
```

3. Start development server:

```bash
npm run dev
```

## Project Structure

```
afterecon/
├── app/                  # Next.js app directory
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout with theme support
│   └── page.tsx         # Home page
├── components/          # React components
│   └── ThemeToggle.tsx  # Dark mode toggle
├── content/             # Blog content
│   └── posts/          # Markdown blog posts
├── lib/                 # Utilities
│   └── posts.ts        # Post loading logic
└── scripts/            # Build scripts
     └── sql-to-markdown.js  # WordPress conversion
```

## Content Migration

The blog content is migrated from a WordPress installation using a custom conversion script. The script:

1. Reads the WordPress SQL dump
2. Extracts published posts
3. Converts them to Markdown format
4. Preserves metadata like dates and titles
5. Cleans up WordPress-specific formatting

## License

MIT

## Author

John Vandivier - [GitHub](https://github.com/Vandivier) | [LinkedIn](https://www.linkedin.com/in/john-vandivier) | [Ladderly](https://www.ladderly.io/)
