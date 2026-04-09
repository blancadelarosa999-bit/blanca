import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BlogFilters } from "@/components/blog/BlogFilters";
import { getAllBlogPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts on career empowerment, personal growth, culture, and the stories behind Blanca De La Rosa's books.",
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Journal"
          title="Blog"
          subtitle="Reflections on career growth, personal conviction, culture, and the stories behind the books."
        />
        <div className="mt-12">
          <BlogFilters posts={posts} />
        </div>
      </Container>
    </section>
  );
}
