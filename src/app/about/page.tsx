import type { Metadata } from "next";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { getPageContent } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

const aboutPage = getPageContent("about");

export const metadata: Metadata = {
  title: "About The Author",
  description: aboutPage?.description || siteConfig.description,
};

export default function AboutPage() {
  return (
    <>
      <section className="py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <p className="font-[family-name:var(--font-montserrat)] text-sm font-medium uppercase tracking-[0.22em] text-teal">
                {siteConfig.about.eyebrow}
              </p>
              <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-navy sm:text-5xl lg:text-6xl">
                {siteConfig.about.title}
              </h1>
              <div className="gold-line" />
              <p className="max-w-2xl text-lg leading-relaxed text-charcoal-light sm:text-xl">
                {siteConfig.about.intro}
              </p>
              <Button href="/books">Explore the Books</Button>
            </div>

            <div className="panel grid gap-4 p-5 sm:grid-cols-2">
              <div className="relative min-h-[280px] overflow-hidden rounded-[1.5rem] sm:col-span-2">
                <Image
                  src="/images/author/blanca-event.jpg"
                  alt="Blanca De La Rosa at an author event"
                  fill
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover"
                />
              </div>
              <div className="relative min-h-[180px] overflow-hidden rounded-[1.5rem] bg-cream-dark">
                <Image
                  src="/images/events/professional-development-workshop.jpg"
                  alt="Professional development workshop"
                  fill
                  sizes="(max-width: 1024px) 50vw, 240px"
                  className="object-cover"
                />
              </div>
              <div className="relative min-h-[180px] overflow-hidden rounded-[1.5rem] bg-cream-dark">
                <Image
                  src="/images/awards/pinnacle-award.png"
                  alt="Pinnacle Award"
                  fill
                  sizes="(max-width: 1024px) 50vw, 240px"
                  className="object-contain p-5"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="panel mx-auto max-w-4xl p-8 sm:p-12">
            <div className="prose max-w-none">
              <MDXRemote source={aboutPage?.content || ""} />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.about.milestones.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.75rem] bg-white p-8 shadow-[0_18px_50px_rgba(2,32,109,0.08)] transition-shadow hover:shadow-[0_24px_60px_rgba(2,32,109,0.12)]"
              >
                <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-navy">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy py-16 text-center text-white">
        <Container>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold">
            Explore My Books
          </h2>
          <p className="mt-4 text-white/70">
            Memoir, fiction, spiritual reflection, and career guidance in one catalogue.
          </p>
          <div className="mt-8">
            <Button href="/books" className="bg-gold text-navy hover:bg-gold-light">
              View All Books
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
