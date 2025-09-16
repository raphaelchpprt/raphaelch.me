import { ElementType } from "react";
import { InlineLink } from "@/components/link";
import { SpinningText } from "@/components/spinning-text";
import { Hero } from "@/components/hero";
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
import { paths } from "@/constants";
import { getBlogPosts } from "@/lib/blog";
import Link from "next/link";

export default async function Home() {
  const posts = await getBlogPosts();
  return (
    <div className="mx-auto flex max-w-screen-md flex-col gap-12 px-6 pt-24 font-mono">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-4">
        <div className="group -mt-8 flex items-center justify-end gap-32">
          <SpinningText
            className="-mt-4 font-mono text-sm uppercase opacity-0 transition-opacity duration-750 group-hover:opacity-100"
            radius={5.5}
            duration={15}
          >
            {`craft • interface • design • greentech • `}
          </SpinningText>
          <Hero />
        </div>

        <div className="group mt-12 flex max-w-prose flex-col gap-6">
          <h2 className="text-balance">
            un <strong>développeur fullstack</strong> basé à biarritz avec un
            intérêt marqué pour le design et des{" "}
            <strong>produits pensés pour l’utilisateur</strong>
          </h2>

          <p className="text-balance">
            cherchant à mettre la technologie, la créativité, l&apos;ergonomie
            et l&rsquo;innovation au service de l&rsquo;
            <strong>intérêt collectif</strong> et de la société
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
            développement d&rsquo;une <strong>plateforme saas</strong> portée
            par une startup qui réalise les bilans et stratégies carbone
            d&rsquo;entreprises privées, d&rsquo;ONG, d&rsquo;agences des
            nations unies et de l&rsquo;union européenne
          </p>
          <p className="max-w-prose text-pretty">
            en tant qu&rsquo;ingénieur produit au sein de l&rsquo;équipe tech,
            j&apos;ai participé à la création de fonctionnalités front et
            back-end, mettant l&apos;accent sur l&apos;
            <strong>expérience utilisateur</strong> afin d&rsquo;optimiser une
            gestion applicative de données complexes à forte volumétrie
          </p>
          <p className="max-w-prose text-pretty">
            je me consacre aujourd’hui à la conception de produits visant à{" "}
            <strong>apporter des réponses</strong> aux problèmes sociaux,
            écologiques ou numériques que peut traverser la société, avec comme
            objectif : être simples à la prise en main, naturels à
            l&rsquo;utilisation et agréables au ressenti
          </p>
        </div>
      </div>
      <div>
        <h3 className="text-accent mb-4 font-sans font-semibold">stacks</h3>
        <div className="flex flex-col gap-6">
          <p className="flex max-w-prose flex-wrap leading-loose text-pretty">
            <span className="mr-4 flex items-center space-x-2">
              <StackIcon icon={ReactIcon} />
              <span>react</span>
            </span>
            <span className="mr-4 flex items-center space-x-2">
              <StackIcon icon={NextIcon} /> <span>next</span>
            </span>
            <span className="mr-4 flex items-center space-x-2">
              <StackIcon icon={TypescriptIcon} />
              <span>typescript</span>
            </span>
            <span className="mr-4 flex items-center space-x-2">
              <StackIcon icon={TailwindIcon} />
              <span>tailwind</span>
            </span>
            <span className="mr-4 flex items-center space-x-2">
              <StackIcon icon={MaterialUiIcon} />
              <span>materialui</span>
            </span>
            <span className="mr-4 flex items-center space-x-2">
              <StackIcon icon={NodeIcon} />
              <span>node</span>
            </span>
            <span className="mr-4 flex items-center space-x-2">
              <StackIcon icon={MongodbIcon} />
              <span>mongodb</span>
            </span>
            <span className="mr-4 flex items-center space-x-2">
              <StackIcon icon={PostgresqlIcon} />
              <span>postgresql</span>
            </span>
            <span className="mr-4 flex items-center space-x-2">
              <StackIcon icon={FigmaIcon} />
              <span>figma</span>
            </span>
          </p>
        </div>
      </div>
      <div>
        <h3 className="text-accent mb-4 font-sans font-semibold">plus</h3>
        <div className="flex flex-col gap-6">
          <p className="max-w-prose text-pretty">
            tu peux me contacter par{" "}
            <InlineLink href={paths.email}>mail</InlineLink>, mon cv complet
            s&rsquo;affiche <InlineLink href={paths.cv}>ici</InlineLink>, tu
            peux aussi consulter mes projets sur{" "}
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
  return <Icon className="text-muted-foreground size-4" />;
};
