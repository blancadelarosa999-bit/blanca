import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Container } from "@/components/ui/Container";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/content";
import { ArrowLeft, Calendar } from "lucide-react";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="py-16">
      <Container>
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-[family-name:var(--font-montserrat)] text-sm text-charcoal-light transition-colors hover:text-teal"
          >
            <ArrowLeft size={16} />
            All Posts
          </Link>

          <header className="mt-8">
            <div className="flex items-center gap-2 text-sm text-charcoal-light">
              <Calendar size={14} />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              {post.category && (
                <>
                  <span className="text-cream-dark">&bull;</span>
                  <span className="rounded-full bg-cream-dark px-2 py-0.5 text-xs font-medium">
                    {post.category}
                  </span>
                </>
              )}
            </div>
            <h1 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <div className="gold-line mt-6" />
          </header>

          <div className="panel mt-10 p-8 sm:p-10">
            <div className="prose prose-lg max-w-none">
              <MDXRemote source={post.content} />
            </div>
          </div>
        </div>
      </Container>
    </article>
  );
}
