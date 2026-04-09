import Link from "next/link";
import type { Book } from "@/lib/types";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

function GenreTag({ genre }: { genre: string }) {
  const colors: Record<string, string> = {
    Memoir: "bg-gold/20 text-gold",
    Fiction: "bg-teal/20 text-teal",
    "Non-Fiction": "bg-navy/20 text-navy",
    Spiritual: "bg-gold/15 text-navy",
  };

  return (
    <span className={`inline-block rounded-full px-3 py-1 font-[family-name:var(--font-montserrat)] text-xs font-medium uppercase tracking-wider ${colors[genre] || "bg-gray-100 text-gray-700"}`}>
      {genre}
    </span>
  );
}

export function BookCard({ book }: { book: Book }) {
  return (
    <Link
      href={`/books/${book.slug}`}
      className="group block transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="aspect-[2/3] overflow-hidden rounded-[1.5rem] shadow-[0_18px_50px_rgba(2,32,109,0.12)] transition-shadow duration-300 group-hover:shadow-[0_24px_60px_rgba(2,32,109,0.18)]">
        <ImageWithFallback
          src={book.coverImage}
          alt={`Cover of ${book.title}`}
          width={400}
          height={600}
          fallbackTitle={book.title}
          fallbackGenre={book.genre}
          className="h-full w-full object-cover"
          sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
        />
      </div>
      <div className="mt-4 space-y-2">
        <GenreTag genre={book.genre} />
        {book.language === "es" && (
          <span className="ml-2 inline-block rounded-full bg-cream-dark px-2 py-0.5 text-xs font-medium text-charcoal-light">
            Español
          </span>
        )}
        <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-navy transition-colors group-hover:text-teal">
          {book.title}
        </h3>
        <p className="line-clamp-3 text-sm text-charcoal-light">
          {book.excerpt}
        </p>
      </div>
    </Link>
  );
}
