"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/types";

export function BlogFilters({ posts }: { posts: BlogPost[] }) {
  const categories = Array.from(
    new Set(posts.map((post) => post.category).filter(Boolean))
  ) as string[];
  const filters = [
    { value: "all", label: "All Posts" },
    ...categories.map((category) => ({ value: category, label: category })),
  ];
  const [filter, setFilter] = useState<(typeof filters)[number]["value"]>("all");

  const filtered = posts.filter((post) => {
    if (filter === "all") return true;
    return post.category === filter;
  });

  return (
    <div>
      {/* Filter Tabs */}
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {filters.map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => setFilter(f.value)}
            className={`rounded-full px-5 py-2 font-[family-name:var(--font-montserrat)] text-sm font-medium tracking-wide transition-colors ${
              filter === f.value
                ? "bg-navy text-white"
                : "bg-white text-charcoal shadow-sm hover:bg-navy/10"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Posts */}
      <div className="mx-auto max-w-3xl space-y-8">
        {filtered.map((post) => (
          <article
            key={post.slug}
            className="group rounded-[1.75rem] bg-white p-8 shadow-[0_18px_50px_rgba(2,32,109,0.08)] transition-shadow hover:shadow-[0_22px_60px_rgba(2,32,109,0.12)]"
          >
            <div className="flex items-center gap-2 text-sm text-charcoal-light">
              <Calendar size={14} />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              {post.category && (
                <>
                  <span className="text-cream-dark">&bull;</span>
                  <span className="rounded-full bg-cream-dark px-2 py-0.5 text-xs font-medium">
                    {post.category}
                  </span>
                </>
              )}
            </div>
            <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-2xl font-bold text-navy transition-colors group-hover:text-teal">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="mt-3 leading-relaxed text-charcoal-light">
              {post.excerpt}
            </p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-4 inline-flex items-center gap-1 font-[family-name:var(--font-montserrat)] text-sm font-medium text-teal transition-colors hover:text-navy"
            >
              Read More
              <ArrowRight size={14} />
            </Link>
          </article>
        ))}

        {filtered.length === 0 && (
          <p className="py-12 text-center text-charcoal-light">
            No posts found for this category.
          </p>
        )}
      </div>
    </div>
  );
}
