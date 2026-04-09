"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/site-config";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled
          ? "bg-cream/90 shadow-[0_12px_32px_rgba(2,32,109,0.08)] backdrop-blur-md"
          : "bg-cream/80 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setMobileOpen(false)}
        >
          <span className="relative h-12 w-12 overflow-hidden rounded-full border border-navy/10 bg-white shadow-sm">
            <Image
              src="/images/brand/logo.png"
              alt="Blanca De La Rosa"
              fill
              sizes="48px"
              className="object-contain p-1"
              priority
            />
          </span>
          <span>
            <span className="block font-[family-name:var(--font-playfair)] text-xl font-bold tracking-wide text-navy sm:text-2xl">
              Blanca De La Rosa
            </span>
            <span className="hidden font-[family-name:var(--font-montserrat)] text-[11px] uppercase tracking-[0.24em] text-charcoal-light sm:block">
              Author and Speaker
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {siteConfig.primaryNav.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`font-[family-name:var(--font-montserrat)] text-sm font-medium uppercase tracking-[0.18em] transition-colors ${
                  pathname === link.href
                    ? "text-navy"
                    : "text-charcoal hover:text-teal"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="text-navy md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden border-t border-cream-dark bg-cream md:hidden"
          >
            <ul className="space-y-1 px-4 py-4">
              {siteConfig.primaryNav.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    className={`block rounded-2xl px-4 py-3 font-[family-name:var(--font-montserrat)] text-sm font-medium uppercase tracking-[0.18em] transition-colors ${
                      pathname === link.href
                        ? "bg-navy text-white"
                        : "text-charcoal hover:bg-cream-dark hover:text-teal"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
