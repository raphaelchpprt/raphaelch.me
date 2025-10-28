import { getBlogPostMetadata } from "@/lib/blog";
import { Metadata } from "next";
import { InlineLink } from "@/components/link";

type Props = {
  params: Promise<{ slug: string; locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const post = await getBlogPostMetadata(slug, locale);

  return {
    title: `${post.title} — raphael`,
    description: post.description,
  };
}

export default async function MdxLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <section className="prose mx-auto flex flex-col items-start gap-6 p-5 pt-24 font-sans">
      <InlineLink
        href={`/${locale}`}
        className="text-foreground font-normal hover:text-accent"
      >
        home
      </InlineLink>
      {children}
    </section>
  );
}