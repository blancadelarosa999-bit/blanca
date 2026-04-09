import Link from "next/link";
import Image from "next/image";
import { Twitter, Facebook, Linkedin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const iconMap = {
  Twitter,
  Facebook,
  LinkedIn: Linkedin,
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.9fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="relative h-14 w-14 overflow-hidden rounded-full border border-white/10 bg-white/95">
                <Image
                  src="/images/brand/logo.png"
                  alt="Blanca De La Rosa"
                  fill
                  sizes="56px"
                  className="object-contain p-1"
                />
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold">
                  {siteConfig.title}
                </h3>
                <p className="font-[family-name:var(--font-montserrat)] text-[11px] uppercase tracking-[0.22em] text-white/55">
                  Author and Speaker
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
              {siteConfig.tagline}. Blanca&apos;s books and talks invite readers to lead with conviction, resilience, and hope.
            </p>

            <div className="mt-6 flex gap-4">
              {siteConfig.socialLinks.map((social) => {
                const Icon = iconMap[social.label as keyof typeof iconMap];
                if (!Icon) return null;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 transition-colors hover:text-gold"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-montserrat)] text-sm font-semibold uppercase tracking-[0.22em] text-gold">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-3">
              {siteConfig.footerNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-montserrat)] text-sm font-semibold uppercase tracking-[0.22em] text-gold">
              Inquiries
            </h4>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              For speaking engagements, interviews, workshops, and reader correspondence, use the contact form and include the context of your request.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full border border-white/15 px-5 py-3 font-[family-name:var(--font-montserrat)] text-sm font-medium uppercase tracking-[0.16em] text-white transition-colors hover:border-gold hover:text-gold"
            >
              Contact Blanca
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/50">
          &copy; {new Date().getFullYear()} Blanca De La Rosa. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
