import Image from "next/image";
import { Hero } from "@/components/home/Hero";
import { FeaturedBook } from "@/components/home/FeaturedBook";
import { AuthorIntro } from "@/components/home/AuthorIntro";
import { BookCard } from "@/components/books/BookCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { getAllBooks, getBookBySlug } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

export default function HomePage() {
  const allBooks = getAllBooks();
  const selectedBooks = allBooks.filter((book) => book.language === "en").slice(0, 6);
  const heroBooks = siteConfig.hero.featuredBookSlugs
    .map((slug) => getBookBySlug(slug))
    .filter((book): book is NonNullable<typeof book> => Boolean(book));
  const featuredBook =
    allBooks.find((book) => book.featured && book.language === "en") ??
    getBookBySlug("broken-vows-a-blessing-in-disguise");

  return (
    <>
      <Hero
        eyebrow={siteConfig.hero.eyebrow}
        title={siteConfig.hero.title}
        summary={siteConfig.hero.summary}
        primaryCta={siteConfig.hero.primaryCta}
        secondaryCta={siteConfig.hero.secondaryCta}
        featuredBooks={heroBooks}
      />

      {featuredBook ? (
        <AnimateOnScroll>
          <FeaturedBook book={featuredBook} />
        </AnimateOnScroll>
      ) : null}

      <AnimateOnScroll>
        <AuthorIntro
          title={siteConfig.homeSections.credibilityTitle}
          summary={siteConfig.homeSections.credibilitySummary}
          stats={siteConfig.stats}
        />
      </AnimateOnScroll>

      <AnimateOnScroll>
        <section className="py-20">
          <Container>
            <SectionHeading
              eyebrow="Catalogue"
              title={siteConfig.homeSections.selectedBooksTitle}
              subtitle={siteConfig.homeSections.selectedBooksSummary}
            />
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {selectedBooks.map((book, index) => (
                <AnimateOnScroll key={book.slug} delay={index * 0.08}>
                  <BookCard book={book} />
                </AnimateOnScroll>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button href="/books" variant="outline">
                View the Full Catalogue
              </Button>
            </div>
          </Container>
        </section>
      </AnimateOnScroll>

      <AnimateOnScroll>
        <section className="py-20">
          <Container>
            <div className="panel grid items-center gap-10 p-8 lg:grid-cols-[0.35fr_1fr] lg:p-12">
              <div className="flex justify-center">
                <div className="relative h-36 w-36">
                  <Image
                    src="/images/awards/pinnacle-award.png"
                    alt="Pinnacle Award"
                    fill
                    sizes="144px"
                    className="object-contain"
                  />
                </div>
              </div>
              <div>
                <p className="font-[family-name:var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.24em] text-teal">
                  Award recognition
                </p>
                <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-bold text-navy">
                  {siteConfig.award.title}
                </h2>
                <div className="gold-line mt-4" />
                <blockquote className="mt-6 max-w-3xl font-[family-name:var(--font-playfair)] text-2xl italic leading-relaxed text-charcoal">
                  &ldquo;{siteConfig.award.quote}&rdquo;
                </blockquote>
                <p className="mt-5 font-[family-name:var(--font-montserrat)] text-sm uppercase tracking-[0.18em] text-charcoal-light">
                  {siteConfig.award.source}
                </p>
                <p className="mt-1 text-sm text-charcoal-light">{siteConfig.award.caption}</p>
              </div>
            </div>
          </Container>
        </section>
      </AnimateOnScroll>
    </>
  );
}
