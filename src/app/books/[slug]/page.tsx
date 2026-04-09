import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllBooks, getBookBySlug } from "@/lib/content";
import { BookDetail } from "@/components/books/BookDetail";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return getAllBooks().map((book) => ({ slug: book.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const book = getBookBySlug(slug);
  if (!book) return { title: "Book Not Found" };

  return {
    title: book.title,
    description: book.excerpt,
    openGraph: {
      title: book.title,
      description: book.excerpt,
      images: [{ url: book.coverImage }],
    },
  };
}

export default async function BookPage({ params }: { params: Params }) {
  const { slug } = await params;
  const book = getBookBySlug(slug);
  if (!book) notFound();

  const pairedBook = book.pairedLanguageSlug
    ? getBookBySlug(book.pairedLanguageSlug)
    : undefined;

  return <BookDetail book={book} pairedBook={pairedBook} />;
}
