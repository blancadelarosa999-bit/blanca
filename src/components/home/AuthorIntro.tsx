import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { ImageWithFallback } from "../ui/ImageWithFallback";
import { ArrowUpRight } from "lucide-react";

type AuthorIntroProps = {
  title: string;
  summary: string;
  stats: ReadonlyArray<{ label: string; value: string }>;
};

export function AuthorIntro({ title, summary, stats }: AuthorIntroProps) {
  return (
    <section className="py-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex justify-center">
            <div className="panel w-full max-w-sm overflow-hidden p-5">
              <ImageWithFallback
                src="/images/author/blanca-event.jpg"
                alt="Blanca De La Rosa"
                width={480}
                height={560}
                fallbackTitle="Blanca De La Rosa"
                className="h-full w-full rounded-[1.5rem] object-cover"
                sizes="(max-width: 1024px) 320px, 420px"
              />
            </div>
          </div>

          <div className="space-y-6">
            <p className="font-[family-name:var(--font-montserrat)] text-sm font-medium uppercase tracking-[0.2em] text-teal">
              About The Author
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <div className="gold-line" />
            <p className="text-lg leading-relaxed text-charcoal-light">
              {summary}
            </p>

            <div className="grid gap-4 pt-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-[1.5rem] border border-navy/10 bg-white/75 p-5 shadow-[0_10px_30px_rgba(2,32,109,0.06)]">
                  <p className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-navy">
                    {stat.value}
                  </p>
                  <p className="mt-1 font-[family-name:var(--font-montserrat)] text-[11px] uppercase tracking-[0.18em] text-charcoal-light">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <Button href="/about" variant="outline">
              Read My Story
              <ArrowUpRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
