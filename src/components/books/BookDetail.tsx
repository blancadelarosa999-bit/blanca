import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Book } from "@/lib/types";
import { PurchaseLinks } from "./PurchaseLinks";
import { Container } from "../ui/Container";
import { ImageWithFallback } from "../ui/ImageWithFallback";
import { ArrowLeft, Globe } from "lucide-react";

export function BookDetail({ book, pairedBook }: { book: Book; pairedBook?: Book }) {
  return (
    <article>
      <Container className="pt-8">
        <Link
          href="/books"
          className="inline-flex items-center gap-2 font-[family-name:var(--font-montserrat)] text-sm text-charcoal-light transition-colors hover:text-teal"
        >
          <ArrowLeft size={16} />
          All Books
        </Link>
      </Container>

      <Container className="py-12">
        <div className="grid items-start gap-12 lg:grid-cols-5">
          <div className="flex justify-center lg:col-span-2">
            <div className="panel w-full max-w-sm overflow-hidden p-5">
              <ImageWithFallback
                src={book.coverImage}
                alt={`Cover of ${book.title}`}
                width={600}
                height={900}
                fallbackTitle={book.title}
                fallbackGenre={book.genre}
                className="h-full w-full rounded-[1.5rem] object-cover"
                priority
                sizes="(max-width: 1024px) 320px, 420px"
              />
            </div>
          </div>

          <div className="space-y-6 lg:col-span-3">
            <div>
              <span
                className={`inline-block rounded-full px-3 py-1 font-[family-name:var(--font-montserrat)] text-xs font-medium uppercase tracking-wider ${
                  book.genre === "Fiction"
                    ? "bg-teal/20 text-teal"
                    : book.genre === "Non-Fiction"
                      ? "bg-navy/20 text-navy"
                      : book.genre === "Memoir"
                        ? "bg-gold/20 text-gold"
                        : "bg-gold/15 text-navy"
                }`}
              >
                {book.genre}
              </span>
              {book.language === "es" ? (
                <span className="ml-2 inline-block rounded-full bg-cream-dark px-3 py-1 text-xs font-medium text-charcoal-light">
                  Español
                </span>
              ) : null}
            </div>

            <h1 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
              {book.title}
            </h1>

            <div className="flex flex-wrap gap-x-6 gap-y-2 font-[family-name:var(--font-montserrat)] text-sm uppercase tracking-[0.16em] text-charcoal-light">
              {book.publisher ? <p>Published by {book.publisher}</p> : null}
              <p>{book.language === "es" ? "Spanish edition" : "English edition"}</p>
            </div>

            <div className="gold-line" />

            <div className="prose max-w-none">
              <MDXRemote source={book.content} />
            </div>

            <PurchaseLinks links={book.purchaseLinks} />
            {book.purchaseLinks.length === 0 ? (
              <p className="font-[family-name:var(--font-montserrat)] text-sm text-charcoal-light">
                Retail links for this title will be added as they are confirmed.
              </p>
            ) : null}

            {pairedBook ? (
              <div className="rounded-[1.5rem] border border-cream-dark bg-cream-dark/50 p-5">
                <Link
                  href={`/books/${pairedBook.slug}`}
                  className="inline-flex items-center gap-2 font-[family-name:var(--font-montserrat)] text-sm font-medium text-teal transition-colors hover:text-navy"
                >
                  <Globe size={16} />
                  {pairedBook.language === "es"
                    ? `Disponible en español: ${pairedBook.title}`
                    : `Available in English: ${pairedBook.title}`}
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </article>
  );
}
