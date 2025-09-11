import { InlineLink } from "@/components/link";
import { paths } from "@/constants";
import { Hero } from "@/components/hero";
import { getBlogPosts } from "@/lib/blog";
import Link from "next/link";

export default async function Home() {
  const posts = await getBlogPosts();
  return (
    <div className="mx-auto flex max-w-screen-md flex-col gap-12 px-6 pt-24 font-mono">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-4">
        <div className="group -mt-8 flex items-center justify-end gap-32"></div>
        <Hero />
        <div className="group mt-12 flex max-w-prose flex-col gap-6">
          <h2 className="text-balance">
            un <strong>développeur web full-stack</strong> spécialisé front-end,
            <br />
            guidé par le plaisir de voir le design donner du sens à la tech
          </h2>

          <p className="text-balance">
            contribuant à mettre l&rsquo;ergonomie, l&apos;innovation et
            l&rsquo;esthétique au service de la société, de l&lsquo;
            <strong>intérêt collectif</strong> et du bien commun
          </p>

          <p>
            toujours partant pour discuter de design, de SIG,
            <br />
            de développement produit accessible à tous et pensées pour chacun
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-accent mb-4 font-sans font-semibold">écrits</h3>

        <ul className="flex flex-col gap-6">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={paths.notes(post.slug)}
                className="group flex flex-col items-start gap-0"
              >
                <span className="group-hover:text-foreground text-accent font-semibold transition-colors duration-150">
                  {post.title}
                </span>
                <span className="text-muted-foreground">
                  {post.description.replace(/\.$/, "")}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-accent mb-4 font-sans font-semibold">plus</h3>
        <div className="flex flex-col gap-6">
          <p className="max-w-prose text-pretty">
            tu peux me contacter par{" "}
            <InlineLink href={paths.email}>email</InlineLink>, mon cv complet
            est visible <InlineLink href={paths.cv}>ici</InlineLink> et tu peux
            découvrir mes projets sur{" "}
            <InlineLink href={paths.github}>github</InlineLink>
          </p>

          <p>
            {/* <InlineLink
              href={paths.repo}
              className="text-muted-foreground font-normal"
            >
              source code
            </InlineLink> */}
          </p>
        </div>
      </div>
    </div>
  );
}
