"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/site-config";
import { Send, Mail, Phone, Mic2 } from "lucide-react";

export function ContactPageClient() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    try {
      const form = e.currentTarget;
      const data = new FormData(form);
      const body = Object.fromEntries(data.entries());

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow={siteConfig.contact.eyebrow}
          title={siteConfig.contact.title}
          subtitle={siteConfig.contact.summary}
        />

        <div className="mx-auto mt-12 grid max-w-5xl gap-12 lg:grid-cols-5">
          <div className="space-y-8 lg:col-span-2">
            <div className="rounded-[1.75rem] bg-white p-6 shadow-[0_18px_50px_rgba(2,32,109,0.08)]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/10">
                  <Mail size={18} className="text-navy" />
                </div>
                <div>
                  <p className="font-[family-name:var(--font-montserrat)] text-sm font-semibold uppercase tracking-wider text-navy">
                    Best way to reach out
                  </p>
                  <p className="text-sm text-charcoal-light">
                    Use the contact form for the fastest response.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.75rem] bg-white p-6 shadow-[0_18px_50px_rgba(2,32,109,0.08)]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/10">
                  <Mic2 size={18} className="text-navy" />
                </div>
                <div>
                  <p className="font-[family-name:var(--font-montserrat)] text-sm font-semibold uppercase tracking-wider text-navy">
                    Common inquiries
                  </p>
                  <div className="mt-2 space-y-1 text-sm text-charcoal-light">
                    <p>Speaking engagements</p>
                    <p>Media interviews</p>
                    <p>Book clubs and reader events</p>
                    <p>Professional development workshops</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[1.75rem] bg-white p-6 shadow-[0_18px_50px_rgba(2,32,109,0.08)]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/10">
                  <Phone size={18} className="text-navy" />
                </div>
                <div>
                  <p className="font-[family-name:var(--font-montserrat)] text-sm font-semibold uppercase tracking-wider text-navy">
                    Social channels
                  </p>
                  <div className="mt-2 flex flex-col gap-1 text-sm text-charcoal-light">
                    {siteConfig.socialLinks.map((social) => (
                      <Link
                        key={social.href}
                        href={social.href}
                        className="hover:text-teal"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {social.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-[1.75rem] bg-white p-8 shadow-[0_18px_50px_rgba(2,32,109,0.08)]"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1 block font-[family-name:var(--font-montserrat)] text-sm font-medium text-charcoal"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-sm border border-cream-dark bg-cream px-4 py-3 text-charcoal focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block font-[family-name:var(--font-montserrat)] text-sm font-medium text-charcoal"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-sm border border-cream-dark bg-cream px-4 py-3 text-charcoal focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone"
                    className="mb-1 block font-[family-name:var(--font-montserrat)] text-sm font-medium text-charcoal"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full rounded-sm border border-cream-dark bg-cream px-4 py-3 text-charcoal focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="mb-1 block font-[family-name:var(--font-montserrat)] text-sm font-medium text-charcoal"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  className="w-full rounded-sm border border-cream-dark bg-cream px-4 py-3 text-charcoal focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1 block font-[family-name:var(--font-montserrat)] text-sm font-medium text-charcoal"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full rounded-sm border border-cream-dark bg-cream px-4 py-3 text-charcoal focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 font-[family-name:var(--font-montserrat)] text-sm font-medium tracking-wide text-white transition-colors hover:bg-navy-light disabled:opacity-50"
              >
                <Send size={16} />
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "sent" ? (
                <p className="text-sm text-teal">
                  Thank you. Your message has been received and a confirmation has been sent.
                </p>
              ) : null}
              {status === "error" ? (
                <p className="text-sm text-red-600">
                  Something went wrong. Please try again later.
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
