import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BookGrid } from "@/components/books/BookGrid";
import { getAllBooks } from "@/lib/content";

export const metadata: Metadata = {
  title: "Books",
  description:
    "Explore Blanca De La Rosa's bilingual catalogue of memoir, career guidance, fiction, and spiritual books.",
};

export default function BooksPage() {
  const books = getAllBooks();

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Books"
          title="Books"
          subtitle="A bilingual catalogue spanning memoir, career guidance, fiction, and spiritual reflection."
        />
        <div className="mt-12">
          <BookGrid books={books} />
        </div>
      </Container>
    </section>
  );
}
