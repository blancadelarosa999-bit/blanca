import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { ImageWithFallback } from "../ui/ImageWithFallback";
import type { Book } from "@/lib/types";

export function FeaturedBook({ book }: { book: Book }) {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          title="Latest Release"
          eyebrow="Spotlight"
          subtitle="A featured title from Blanca's current catalogue"
        />
        <div className="panel mt-12 grid items-center gap-12 overflow-hidden p-8 lg:grid-cols-[0.8fr_1.2fr] lg:p-12">
          <div className="flex justify-center">
            <div className="aspect-[2/3] w-full max-w-xs overflow-hidden rounded-[1.75rem] shadow-[0_18px_50px_rgba(2,32,109,0.16)]">
              <ImageWithFallback
                src={book.coverImage}
                alt={`Cover of ${book.title}`}
                width={480}
                height={720}
                fallbackTitle={book.title}
                fallbackGenre={book.genre}
                className="h-full w-full object-cover"
                priority
                sizes="(max-width: 1024px) 280px, 360px"
              />
            </div>
          </div>

          <div className="space-y-6">
            <span className="inline-block rounded-full bg-teal/15 px-3 py-1 font-[family-name:var(--font-montserrat)] text-xs font-medium uppercase tracking-[0.16em] text-teal">
              {book.genre}
            </span>
            <h3 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-navy sm:text-4xl">
              {book.title}
            </h3>
            <div className="gold-line" />
            <p className="text-lg leading-relaxed text-charcoal-light">
              {book.excerpt}
            </p>
            {book.pairedLanguageSlug ? (
              <p className="font-[family-name:var(--font-montserrat)] text-sm font-medium uppercase tracking-[0.18em] text-gold">
                Available in English and Spanish
              </p>
            ) : null}
            <div className="flex flex-wrap gap-4">
              <Button href={`/books/${book.slug}`}>
                Learn More
              </Button>
              <Button href="/books" variant="outline">
                Browse the Catalogue
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
