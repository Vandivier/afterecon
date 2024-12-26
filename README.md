# AfterEcon

A modern rebuild of John Vandivier's economics blog, featuring content from his training in economics and experience in software engineering.

## About

AfterEcon is a collection of writings on economics, technology, and their intersection. The blog features content from John Vandivier, who holds a Ph.D. in Economics from George Mason University and has extensive experience as a software engineer.

## Features

- Modern Next.js 14 with App Router
- Dark mode support
- Markdown blog posts converted from original WordPress content
- Static site generation for optimal performance
- Responsive design with Tailwind Typography
- TypeScript & Tailwind CSS

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

4. Build for production:

```bash
npm run build
```

## Project Structure

```
afterecon/
├── app/                  # Next.js app directory
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout with theme support
│   ├── page.tsx         # Home page listing all posts
│   └── posts/           # Dynamic post routes
│       └── [slug]/      # Individual post pages
├── components/          # React components
│   └── theme-provider   # Dark mode provider
├── content/             # Blog content
│   └── *.md            # Markdown blog posts
├── lib/                 # Utilities
│   └── posts.ts        # Post loading and parsing logic
└── scripts/            # Build scripts
    ├── sql-to-markdown.js  # WordPress SQL to JSON conversion
    └── json-to-markdown.js # JSON to Markdown conversion
```

## Content Management

The blog content follows a two-step conversion process:

1. WordPress SQL dump → JSON
   - Script: `sql-to-markdown.js`
   - Extracts posts from WordPress database
   - Preserves metadata like dates, titles, and authors
   - Outputs to `articles.json`

2. JSON → Markdown files
   - Script: `json-to-markdown.js`
   - Converts each article to a Markdown file
   - Includes YAML frontmatter with metadata
   - Places files in `content/` directory

The Next.js application then:

- Statically generates pages at build time
- Parses Markdown with gray-matter and remark
- Supports both light and dark modes
- Provides a responsive, accessible reading experience

## Build Process

The build process involves:

1. Content preparation:

```bash
npm run convert  # Converts WordPress content to Markdown
```

2. Static site generation:

```bash
npm run build   # Builds optimized production site
```

This creates a fully static site with:

- Homepage listing all posts
- Individual pages for each post
- Optimized images and styles
- Dark mode support
- Fast page loads

## License

MIT

## Author

John Vandivier - [GitHub](https://github.com/Vandivier) | [LinkedIn](https://www.linkedin.com/in/john-vandivier) | [Ladderly](https://www.ladderly.io/)
