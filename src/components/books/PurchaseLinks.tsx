import { ShoppingCart, ExternalLink } from "lucide-react";
import type { PurchaseLink } from "@/lib/types";

type PurchaseLinksProps = {
  links: PurchaseLink[];
};

export function PurchaseLinks({ links }: PurchaseLinksProps) {
  if (links.length === 0) return null;

  return (
    <div className="space-y-3">
      <h3 className="font-[family-name:var(--font-montserrat)] text-sm font-semibold uppercase tracking-[0.18em] text-charcoal-light">
        Purchase
      </h3>
      <div className="flex flex-wrap gap-3">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-navy/20 bg-white px-5 py-3 font-[family-name:var(--font-montserrat)] text-sm font-medium text-navy transition-colors hover:border-navy hover:bg-navy hover:text-white"
          >
            {link.label === "Amazon" ? <ShoppingCart size={16} /> : <ExternalLink size={16} />}
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
