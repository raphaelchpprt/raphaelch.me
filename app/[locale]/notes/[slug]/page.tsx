import { getBlogPostContent, POSTS } from "@/lib/blog";
import Image from "next/image";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const { default: Post, metadata } = await getBlogPostContent(slug, locale);

  const dateObj = new Date(metadata.publishedAt);
  const formattedDate = dateObj.toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div>
      <div className="mb-0 flex flex-col">
        <h1 className="font-weight-extrabold font-mono">{metadata.title}</h1>
        <p className="italic">{metadata.description}</p>
        <small className="text-muted-foreground">{formattedDate}</small>
      </div>
      <hr className="mt-6 mb-8" />
      <div className="not-prose relative mb-8 aspect-video w-full overflow-hidden rounded-4xl">
        <Image
          src={metadata.image}
          alt={metadata.title}
          fill
          className="object-cover"
          priority
        />
      </div>
      <Post />
    </div>
  );
}

export async function generateStaticParams() {
  const locales = ["fr", "en"];
  const params = [];

  for (const locale of locales) {
    for (const post of POSTS) {
      params.push({
        locale,
        slug: post.slug,
      });
    }
  }

  return params;
}

export const dynamicParams = false;
