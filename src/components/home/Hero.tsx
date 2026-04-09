import { Button } from "../ui/Button";
import { AnimateOnScroll } from "../ui/AnimateOnScroll";
import type { Book } from "@/lib/types";
import { ImageWithFallback } from "../ui/ImageWithFallback";

type HeroProps = {
  eyebrow: string;
  title: string;
  summary: string;
  primaryCta: {
    href: string;
    label: string;
  };
  secondaryCta: {
    href: string;
    label: string;
  };
  featuredBooks: Book[];
};

export function Hero({
  eyebrow,
  title,
  summary,
  primaryCta,
  secondaryCta,
  featuredBooks,
}: HeroProps) {
  return (
    <section className="texture-overlay relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(253,248,240,0.96),rgba(253,248,240,0.84)),url('/images/backgrounds/hero-city.png')] bg-cover bg-center" />
      <div className="section-shell relative py-24 sm:py-28 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="max-w-3xl">
            <AnimateOnScroll>
              <p className="font-[family-name:var(--font-montserrat)] text-sm font-medium uppercase tracking-[0.24em] text-teal">
                {eyebrow}
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <h1 className="mt-6 font-[family-name:var(--font-playfair)] text-4xl font-bold leading-[1.05] text-navy sm:text-5xl lg:text-7xl">
                {title}
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2}>
              <div className="gold-line mt-8" />
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-charcoal-light sm:text-xl">
                {summary}
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.3}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href={primaryCta.href} size="lg">
                  {primaryCta.label}
                </Button>
                <Button href={secondaryCta.href} variant="outline" size="lg">
                  {secondaryCta.label}
                </Button>
              </div>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll delay={0.15} direction="left" className="relative">
            <div className="panel relative min-h-[440px] overflow-hidden p-8">
              <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
              <p className="font-[family-name:var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.24em] text-charcoal-light">
                Featured collection
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {featuredBooks.map((book, index) => (
                  <div
                    key={book.slug}
                    className={`${
                      index === 1 ? "translate-y-8" : index === 2 ? "translate-y-4" : ""
                    }`}
                  >
                    <div className="aspect-[2/3] overflow-hidden rounded-[1.5rem] shadow-[0_18px_50px_rgba(2,32,109,0.15)]">
                      <ImageWithFallback
                        src={book.coverImage}
                        alt={`Cover of ${book.title}`}
                        width={320}
                        height={480}
                        fallbackTitle={book.title}
                        fallbackGenre={book.genre}
                        sizes="(max-width: 1024px) 33vw, 180px"
                        className="h-full w-full object-cover"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-10 max-w-sm text-sm leading-relaxed text-charcoal-light">
                Memoir, fiction, spiritual reflection, and career guidance collected in a catalogue built to encourage courage and reinvention.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      <div className="absolute -left-20 top-24 h-48 w-48 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute bottom-10 right-0 h-56 w-56 rounded-full bg-teal/10 blur-3xl" />
    </section>
  );
}
