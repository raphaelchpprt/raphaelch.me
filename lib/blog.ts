export type Metadata = {
  title: string;
  publishedAt: string;
  description: string;
  slug: string;
  canonicalUrl: string;
  publish: boolean;
};

export async function getBlogPosts(): Promise<Metadata[]> {
  const postsMetadata: Metadata[] = [];
  for (const post of POSTS) {
    const { metadata } = await import(`@/content/${post.slug}.mdx`);
    postsMetadata.push(metadata);
  }
  return postsMetadata;
}

export async function getBlogPostMetadata(slug: string): Promise<Metadata> {
  const { metadata } = await import(`@/content/${slug}.mdx`);
  return metadata;
}

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
