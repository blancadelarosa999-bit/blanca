import type { MetadataRoute } from "next";
import { getAllBooks, getAllBlogPosts } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

const BASE_URL = siteConfig.siteUrl;

export default function sitemap(): MetadataRoute.Sitemap {
  const books = getAllBooks().map((book) => ({
    url: `${BASE_URL}/books/${book.slug}`,
    lastModified: new Date(),
    priority: 0.8 as const,
  }));

  const posts = getAllBlogPosts().map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    priority: 0.6 as const,
  }));

  return [
    { url: BASE_URL, lastModified: new Date(), priority: 1.0 },
    { url: `${BASE_URL}/books`, lastModified: new Date(), priority: 0.9 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), priority: 0.7 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), priority: 0.7 },
    { url: `${BASE_URL}/events`, lastModified: new Date(), priority: 0.5 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), priority: 0.5 },
    ...books,
    ...posts,
  ];
}
