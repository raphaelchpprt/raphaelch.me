import { ElementType } from "react";
import { InlineLink } from "@/components/link";
import { paths } from "@/constants";
import { Hero } from "@/components/hero";
import { getBlogPosts } from "@/lib/blog";
import {
  ReactIcon,
  NextIcon,
  TypescriptIcon,
  TailwindIcon,
  NodeIcon,
  MaterialUiIcon,
  MongodbIcon,
  PostgresqlIcon,
  FigmaIcon,
} from "@/components/icons";
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
            un <strong>développeur full-stack</strong> avec un intérêt marqué
            pour le design, qui conçoit des{" "}
            <strong>produits pensés pour l’utilisateur</strong>
          </h2>

          <p className="text-balance">
            contribuant à mettre l&rsquo;ergonomie, la créativité et
            l&rsquo;innovation au service de l&rsquo;
            <strong>intérêt collectif</strong> et du bien commun
          </p>

          <p>
            toujours partant pour discuter de design, de SIG, de green &
            low-tech, de développement produit utile à tous et pensé pour chacun
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
        <h3 className="text-accent mb-4 font-sans font-semibold">parcours</h3>
        <div className="flex flex-col gap-6">
          <p className="max-w-prose text-pretty">
            ces 4 dernières années, j’ai eu la chance de contribuer au
            développement d&rsquo;une plateforme SaaS portée par une startup qui
            réalise les bilans et stratégies carbone d&rsquo;entreprises
            privées, d&rsquo;ONG et d&rsquo;agences des Nations Unies et de
            l&rsquo;UE
          </p>
          <p className="max-w-prose text-pretty">
            en tant qu&rsquo;ingénieur produit, j&apos;ai participé à la
            création de fonctionnalités front et back-end, mettant l&apos;accent
            sur l&apos;expérience utilisateur afin d&rsquo;optimiser une gestion
            applicative de données complexes à forte volumétrie
          </p>
          <p className="max-w-prose text-pretty">
            je mets aujourd&apos;hui ces compétences à profit pour contribuer à
            la conception de produits visant à apporter des réponses tech aux
            problèmes que peut traverser la société avec comme objectif : être
            simples à la prise en main et naturel à l&rsquo;utilisation
          </p>
        </div>
      </div>
      <div>
        <h3 className="text-accent mb-4 font-sans font-semibold">stacks</h3>
        <div className="flex flex-col gap-6">
          <div className="flex max-w-prose items-center text-pretty">
            <div className="mr-4 flex items-center space-x-2">
              <StackIcon icon={ReactIcon} />
              <span>react</span>
            </div>
            <div className="mr-4 flex items-center space-x-2">
              <StackIcon icon={NextIcon} /> <span>next</span>
            </div>
            <div className="mr-4 flex items-center space-x-2">
              <StackIcon icon={TypescriptIcon} />
              <span>typescript</span>
            </div>
            <div className="mr-4 flex items-center space-x-2">
              <StackIcon icon={TailwindIcon} />
              <span>tailwind</span>
            </div>
            <div className="mr-4 flex items-center space-x-2">
              <StackIcon icon={MaterialUiIcon} />
              <span>materialUi</span>
            </div>
          </div>
          <div className="flex max-w-prose items-center space-x-4 text-pretty">
            <div className="flex items-center space-x-2">
              <StackIcon icon={NodeIcon} />
              <span>node</span>
            </div>
            <div className="flex items-center space-x-2">
              <StackIcon icon={MongodbIcon} />
              <span>mongodb</span>
            </div>
            <div className="flex items-center space-x-2">
              <StackIcon icon={PostgresqlIcon} />
              <span>postgresql</span>
            </div>
            <div className="flex items-center space-x-2">
              <StackIcon icon={FigmaIcon} />
              <span>figma</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-accent mb-4 font-sans font-semibold">plus</h3>
        <div className="flex flex-col gap-6">
          <p className="max-w-prose text-pretty">
            tu peux me contacter par{" "}
            <InlineLink href={paths.email}>email</InlineLink>, mon cv complet
            s&rsquo;affiche <InlineLink href={paths.cv}>ici</InlineLink> et tu
            peux consulter mes projets sur{" "}
            <InlineLink href={paths.github}>github</InlineLink>
          </p>

          <p>
            <InlineLink
              href={paths.repo}
              className="text-muted-foreground font-normal"
            >
              source code
            </InlineLink>
          </p>
        </div>
      </div>
    </div>
  );
}

const StackIcon = ({ icon: Icon }: { icon: ElementType }) => {
  return <Icon className="text-muted-foreground size-5" />;
};
