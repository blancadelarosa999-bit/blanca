# Blanca De La Rosa — Author Website

The official website for author Blanca De La Rosa ([authorblancadelarosa.com](https://authorblancadelarosa.com)).

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS 4
- **Content:** MDX files with gray-matter frontmatter
- **Animations:** Framer Motion
- **Email:** Resend (contact form)
- **Images:** Cloudinary (optional, falls back to local)
- **Icons:** Lucide React
- **Deployment:** Vercel

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content Management

All content lives in the `content/` directory as MDX files:

```
content/
├── books/         # Book pages (11 files — EN + ES editions)
├── blog/          # Blog posts (11 files)
└── pages/         # Static pages (about, events)
```

### Adding a Book

Create a new `.mdx` file in `content/books/`:

```yaml
---
title: "Book Title"
slug: "book-slug"
genre: "Fiction"          # Fiction | Non-Fiction | Memoir | Spiritual
language: "en"            # en | es
pairedLanguageSlug: ""    # slug of the other-language edition
coverImage: "/images/books/book-slug.jpg"
amazonUrl: ""
books2ReadUrl: ""
angelsFortuneUrl: ""
publisher: ""
excerpt: "One-line description."
featured: false
order: 12
---

Full book description in MDX format.
```

### Adding a Blog Post

Create a new `.mdx` file in `content/blog/`:

```yaml
---
title: "Post Title"
slug: "post-slug"
date: "2025-01-15"
category: "Career"        # Career | Culture | Books | Personal
excerpt: "Short excerpt for listing pages."
---

Post content in MDX format. Supports **bold**, *italic*, headings, lists, blockquotes, and links.
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in values:

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` | No | Cloudinary cloud name for image CDN |
| `RESEND_API_KEY` | For email | Resend API key for contact form |
| `CONTACT_EMAIL_TO` | For email | Recipient email address |
| `CONTACT_EMAIL_FROM` | For email | Sender address (must be verified in Resend) |
| `NEXT_PUBLIC_SITE_URL` | No | Production URL |

Without Resend configured, the contact form logs submissions to the console.

## Build

```bash
npm run build    # Production build
npm run lint     # ESLint
npx tsc --noEmit # Type check
```

## Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/
│   ├── books/        # BookCard, BookDetail, BookGrid, PurchaseLinks
│   ├── blog/         # BlogFilters
│   ├── home/         # Hero, FeaturedBook, AuthorIntro
│   ├── layout/       # Header, Footer
│   └── ui/           # Button, Container, SectionHeading, AnimateOnScroll, ImageWithFallback
├── lib/
│   ├── content.ts    # MDX file loading utilities
│   ├── cloudinary.ts # Cloudinary URL builder
│   ├── emails/       # HTML email templates
│   └── types.ts      # TypeScript interfaces
└── public/images/    # Local image assets
```
