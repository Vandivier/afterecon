# AI Agent Guide for AfterEcon

This document provides essential context and instructions for AI coding assistants working on the AfterEcon project.

## Project Overview

AfterEcon is a modern rebuild of John Vandivier's economics blog, using content originally from a WordPress site.

- **Purpose:** Economics and technology blog.
- **Author:** John Vandivier, Ph.D. in Economics & Software Engineer.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with @tailwindcss/typography (`prose` class)
- **Theme:** Dark mode support via `next-themes`
- **Content Parsing:** `gray-matter` for frontmatter extraction.
- **Utilities:** `date-fns` for date formatting.

## Content Architecture

### Blog Posts
- **Location:** `content/*.md`
- **Format:** Markdown files with YAML frontmatter.
- **Frontmatter Fields:**
  - `title`: Post title
  - `date`: Publication date (YYYY-MM-DD)
  - `author`: Usually "John Vandivier"
- **Body Content:** A mix of raw text, Markdown, and HTML (legacy WordPress artifacts).

### Data Flow
1. `lib/posts.ts`: Contains functions to read and parse files from `content/`.
   - `getSortedPosts()`: Returns an array of post metadata (slug, title, date, author).
   - `getPostData(slug)`: Returns full post data including content.
2. `app/page.tsx`: Displays the recent posts list.
3. `app/posts/[slug]/page.tsx`: Renders an individual post.
   - **Note:** Currently uses `dangerouslySetInnerHTML` to render the content.

## Conversion Process (WordPress to Markdown)

The project includes scripts to migrate content:
1. `scripts/sql-to-json.ts`: Converts WordPress SQL dump to `articles.json`.
2. `scripts/json-to-markdown.ts`: Converts `articles.json` into individual `.md` files in `content/`.

## Coding Conventions

- **Server Components:** Prefer Server Components for data fetching (default in App Router).
- **Styling:** Use Tailwind CSS. For article content, use the `prose` class (and `dark:prose-invert`).
- **Types:** Always provide proper TypeScript interfaces for data.
- **Performance:** Since this is a blog, prefer static generation where possible (`generateStaticParams`, `generateMetadata`).

## Known Issues / Future Work
- **Markdown Rendering:** The project uses `remark` and `remark-html` in `lib/posts.ts` to convert Markdown content into HTML. This handles both pure Markdown and legacy WordPress HTML (via `sanitize: false`). Content is then rendered in `app/posts/[slug]/page.tsx` using `dangerouslySetInnerHTML`.
- **Pagination:** The home page has basic pagination logic but might need refinement as the number of posts grows.
