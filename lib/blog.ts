export type Metadata = {
  title: string;
  publishedAt: string;
  description: string;
  slug: string;
  canonicalUrl: string;
  publish: boolean;
  locale?: string;
};

export const POSTS = [
  {
    title:
      "Du carbone au code : ce que m’a appris la greentech sur le rôle du développeur",
    slug: "carbone-code-role-developpeur",
  },
  {
    title: "Le futur du front-end : interfaces plus humaines à l’ère de l’IA",
    slug: "futur-front-end-interfaces-humaines-ia",
  },
];

export async function getBlogPosts(locale?: string): Promise<Metadata[]> {
  console.log("🚀 ~ getBlogPosts ~ locale:", locale)
  const postsMetadata: Metadata[] = [];
  for (const post of POSTS) {
    const filePath = locale ? `${post.slug}.${locale}` : post.slug;
    const { metadata } = await import(`@/content/${filePath}.mdx`);
    postsMetadata.push({ ...metadata, locale });
  }
  return postsMetadata;
}

export async function getBlogPostMetadata(slug: string, locale?: string): Promise<Metadata> {
  const filePath = locale ? `${slug}.${locale}` : slug;
  const { metadata } = await import(`@/content/${filePath}.mdx`);
  return { ...metadata, locale };
}

export async function getBlogPostContent(slug: string, locale?: string) {
  const filePath = locale ? `${slug}.${locale}` : slug;
  return await import(`@/content/${filePath}.mdx`);
}