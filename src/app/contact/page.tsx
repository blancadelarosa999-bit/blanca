import type { Metadata } from "next";
import { getPageContent } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";
import { ContactPageClient } from "@/components/contact/ContactPageClient";

const contactPage = getPageContent("contact");

export const metadata: Metadata = {
  title: "Contact",
  description: contactPage?.description || siteConfig.description,
};

export default function ContactPage() {
  return <ContactPageClient />;
}
