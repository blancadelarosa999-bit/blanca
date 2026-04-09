"use client";

import { useState } from "react";
import type { Book } from "@/lib/types";
import { BookCard } from "./BookCard";

export function BookGrid({ books }: { books: Book[] }) {
  const genreFilters = Array.from(new Set(books.map((book) => book.genre)));
  const filters = [
    { value: "all", label: "All Books" },
    ...genreFilters.map((genre) => ({ value: genre, label: genre })),
    { value: "es", label: "En Español" },
  ];
  const [filter, setFilter] = useState<(typeof filters)[number]["value"]>("all");

  const filtered = books.filter((book) => {
    if (filter === "all") return true;
    if (filter === "es") return book.language === "es";
    return book.genre === filter;
  });

  return (
    <div>
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

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((book) => (
          <BookCard key={book.slug} book={book} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-12 text-center text-charcoal-light">
          No books found for this filter.
        </p>
      )}
    </div>
  );
}
