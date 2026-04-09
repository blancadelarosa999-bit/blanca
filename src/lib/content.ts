import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Book, BlogPost, PageContent, PurchaseLink } from "./types";

const contentDir = path.join(process.cwd(), "content");

function readMdxFile(filePath: string): { data: Record<string, unknown>; content: string } {
  const raw = fs.readFileSync(filePath, "utf-8");
  return matter(raw);
}

function getMdxFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
}

function getPurchaseLinks(data: Record<string, unknown>): PurchaseLink[] {
  const purchaseLinks = data.purchaseLinks as PurchaseLink[] | undefined;
  if (Array.isArray(purchaseLinks) && purchaseLinks.length > 0) {
    return purchaseLinks.filter((link) => Boolean(link?.label && link?.url));
  }

  const fallbackLinks = [
    { label: "Amazon", url: data.amazonUrl as string | undefined },
    { label: "Books2Read", url: data.books2ReadUrl as string | undefined },
    { label: "Angels Fortune", url: data.angelsFortuneUrl as string | undefined },
  ];

  return fallbackLinks.filter((link): link is PurchaseLink => Boolean(link.url));
}

// --- Books ---

export function getAllBooks(): Book[] {
  const dir = path.join(contentDir, "books");
  const files = getMdxFiles(dir);

  return files
    .map((file) => {
      const { data, content } = readMdxFile(path.join(dir, file));
      return {
        title: data.title as string,
        slug: data.slug as string,
        genre: data.genre as Book["genre"],
        language: (data.language as Book["language"]) || "en",
        pairedLanguageSlug: data.pairedLanguageSlug as string | undefined,
        coverImage: data.coverImage as string,
        excerpt: data.excerpt as string,
        purchaseLinks: getPurchaseLinks(data),
        publisher: data.publisher as string | undefined,
        publishDate: data.publishDate as string | undefined,
        featured: (data.featured as boolean) || false,
        order: (data.order as number) || 99,
        content,
      };
    })
    .sort((a, b) => a.order - b.order);
}

export function getBookBySlug(slug: string): Book | undefined {
  return getAllBooks().find((b) => b.slug === slug);
}

export function getFeaturedBooks(): Book[] {
  return getAllBooks().filter((b) => b.featured);
}

// --- Blog ---

export function getAllBlogPosts(): BlogPost[] {
  const dir = path.join(contentDir, "blog");
  const files = getMdxFiles(dir);

  return files
    .map((file) => {
      const { data, content } = readMdxFile(path.join(dir, file));
      return {
        title: data.title as string,
        slug: data.slug as string,
        date: data.date as string,
        excerpt: data.excerpt as string,
        category: data.category as string | undefined,
        content,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return getAllBlogPosts().find((p) => p.slug === slug);
}

// --- Pages ---

export function getPageContent(pageName: string): PageContent | undefined {
  const filePath = path.join(contentDir, "pages", `${pageName}.mdx`);
  if (!fs.existsSync(filePath)) return undefined;
  const { data, content } = readMdxFile(filePath);
  return {
    title: data.title as string,
    description: data.description as string | undefined,
    content,
  };
}
