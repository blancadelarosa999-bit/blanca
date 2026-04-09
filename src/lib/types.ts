export interface PurchaseLink {
  label: string;
  url: string;
}

export interface Book {
  title: string;
  slug: string;
  genre: "Memoir" | "Fiction" | "Non-Fiction" | "Spiritual";
  language: "en" | "es";
  pairedLanguageSlug?: string;
  coverImage: string;
  excerpt: string;
  purchaseLinks: PurchaseLink[];
  publisher?: string;
  publishDate?: string;
  featured?: boolean;
  order: number;
  content: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  category?: string;
  content: string;
}

export interface PageContent {
  title: string;
  description?: string;
  content: string;
}
