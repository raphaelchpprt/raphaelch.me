import { InlineLink } from "@/components/link";
import { paths } from "@/constants";
import { Hero } from "@/components/hero";
// import Link from "next/link";

export default async function Home() {
  return (
    <div className="mx-auto flex max-w-screen-md flex-col gap-12 px-6 pt-24 font-mono">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-4">
        <div className="group -mt-8 flex items-center justify-end gap-32"></div>
        <Hero />
        <div className="group mt-12 flex max-w-prose flex-col gap-6">
          <h2 className="text-balance">
            a biarritz-based <strong>product engineer</strong> with a keen eye
            for design, crafting high impact{" "}
            <strong>user-focused products</strong>.
          </h2>

          {/* <p className="text-balance">
            currently building <InlineLink href={paths.shape}>shape</InlineLink>{' '}
            & <InlineLink href={paths.deca}>deca</InlineLink>, and{' '}
            <strong>having a blast</strong>.
          </p> */}

          <p>
            always open to chat about evm, design, digital objects, community,
            product dev, building for humans & more.
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-accent mb-4 font-sans font-semibold">writing</h3>

        <ul className="flex flex-col gap-6">
          {/* {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={paths.notes(post.slug)}
                className="group flex flex-col items-start gap-0"
              >
                <span className="group-hover:text-foreground text-accent font-semibold transition-colors duration-150">
                  {post.title}
                </span>
                <span className="text-muted-foreground">
                  {post.description.replace(/\.$/, '')}
                </span>
              </Link>
            </li>
          ))} */}
        </ul>
      </div>

      <div>
        <h3 className="text-accent mb-4 font-sans font-semibold">more</h3>
        <div className="flex flex-col gap-6">
          <p className="max-w-prose text-pretty">
            you can reach me by{" "}
            <InlineLink href={paths.email}>email</InlineLink>. my full resume is{" "}
            <InlineLink href={paths.cv}>here</InlineLink> and you can see more
            of my work on <InlineLink href={paths.github}>github</InlineLink>.
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
