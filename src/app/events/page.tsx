import type { Metadata } from "next";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { getPageContent } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

const eventsPage = getPageContent("events");

export const metadata: Metadata = {
  title: "Events",
  description: eventsPage?.description || siteConfig.description,
};

export default function EventsPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow={siteConfig.events.eyebrow}
          title={siteConfig.events.title}
          subtitle={siteConfig.events.summary}
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="panel overflow-hidden p-8 sm:p-10">
            <div className="prose max-w-none">
              <MDXRemote source={eventsPage?.content || ""} />
            </div>
            <div className="mt-8">
              <Button href="/contact">Invite Blanca to Speak</Button>
            </div>
          </div>

          <div className="space-y-6">
            {siteConfig.events.offerings.map((offering, index) => (
              <div key={offering.title} className="rounded-[1.75rem] bg-white p-7 shadow-[0_18px_50px_rgba(2,32,109,0.08)]">
                <p className="font-[family-name:var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.2em] text-teal">
                  Offering {index + 1}
                </p>
                <h3 className="mt-3 font-[family-name:var(--font-playfair)] text-2xl font-bold text-navy">
                  {offering.title}
                </h3>
                <p className="mt-3 text-charcoal-light">{offering.description}</p>
              </div>
            ))}

            <div className="panel grid gap-4 p-5 sm:grid-cols-2">
              <div className="relative min-h-[220px] overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/images/events/professional-development-workshop.jpg"
                  alt="Workshop scene"
                  fill
                  sizes="(max-width: 1024px) 100vw, 280px"
                  className="object-cover"
                />
              </div>
              <div className="relative min-h-[220px] overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/images/events/october-7-event.jpg"
                  alt="Event promotion"
                  fill
                  sizes="(max-width: 1024px) 100vw, 280px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-[1.75rem] bg-navy px-8 py-10 text-center text-white shadow-[0_18px_50px_rgba(2,32,109,0.18)]">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold">
            Planning a workshop, panel, or reader event?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/75">
            Share your audience, venue, timing, and goals, and we can determine the best format for the conversation.
          </p>
          <div className="mt-6">
            <Button href="/contact" className="bg-gold text-navy hover:bg-gold-light">
              Start the Conversation
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
