import { ElementType } from "react";
import { InlineLink } from "@/components/link";
import { SpinningText } from "@/components/spinning-text";
import { Hero } from "@/components/hero";
import { ExperienceItem } from "@/components/experience-item";
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
import { experiences } from "@/lib/xp-data";
import Link from "next/link";

const stacks: { label: string; icon: ElementType }[] = [
  { label: "react", icon: ReactIcon },
  { label: "next", icon: NextIcon },
  { label: "typescript", icon: TypescriptIcon },
  { label: "tailwind", icon: TailwindIcon },
  { label: "materialui", icon: MaterialUiIcon },
  { label: "node", icon: NodeIcon },
  { label: "mongodb", icon: MongodbIcon },
  { label: "postgresql", icon: PostgresqlIcon },
  { label: "figma", icon: FigmaIcon },
];

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
            <strong>développeur fullstack</strong> basé à biarritz avec un goût
            marqué pour le design et les{" "}
            <strong>produits centrés utilisateur</strong>
          </h2>
          <p className="text-balance">
            désireux de mettre la technologie, la créativité, l&apos;ergonomie
            et l&rsquo;innovation{" "}
            <strong>au service de l&rsquo;intérêt collectif</strong> et de la
            société
          </p>
          <p>
            toujours partant pour discuter de design, de SIG, de green &
            low-tech, de développement produit utile à tous et pensé pour chacun
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-accent mb-4 font-sans font-semibold">notes</h3>

        <ul className="flex flex-col gap-6">
          {posts.map(
            (post) =>
              post.publish && (
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
              ),
          )}
        </ul>
      </div>
      <div>
        <h3 className="text-accent mb-4 font-sans font-semibold">stacks</h3>
        <div className="flex flex-col gap-6">
          <p className="flex max-w-prose flex-wrap leading-loose text-pretty">
            {stacks.map(({ label, icon }) => (
              <span key={label} className="mr-4 flex items-center space-x-2">
                <StackIcon icon={icon} />
                <span>{label}</span>
              </span>
            ))}
          </p>
        </div>
      </div>
      <div>
        <h3 className="text-accent mb-4 font-sans font-semibold">expérience</h3>
        {experiences.map((exp, index) => (
          <ExperienceItem key={`${exp.company}-${index}`} experience={exp} />
        ))}
      </div>
      <div>
        <h3 className="text-accent mb-4 font-sans font-semibold">parcours</h3>
        <div className="flex flex-col gap-6">
          <p className="max-w-prose text-pretty">
            après un master en relations internationales, j&apos;ai travaillé
            plusieurs années au sein d&apos;organisations (onu, ong) en tant que
            chargé de communication web et digitale
          </p>
          <p className="max-w-prose text-pretty">
            je me suis ensuite réorienté vers le développement web avec un
            bootcamp et j&apos;ai rejoint une startup greentech où j&apos;ai
            contribué pendant 4 ans à la conception d&apos;un saas de bilan
            carbone
          </p>
          <p className="max-w-prose text-pretty">
            aujourd&apos;hui, j&apos;aide à développer des produits tech pensés
            aussi bien pour l&apos;utilisateur que pour répondre aux défis
            sociaux, écologiques et numériques
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
