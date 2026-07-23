import { ElementType } from "react";
import Image from "next/image";
import { InlineLink } from "@/components/link";
import { SpinningText } from "@/components/spinning-text";
import { Hero } from "@/components/hero";
import { ExperienceItem } from "@/components/experience-item";
import {
  ReactIcon,
  NextIcon,
  RemixIcon,
  ReactRouterIcon,
  TypescriptIcon,
  ZodIcon,
  ViteIcon,
  TailwindIcon,
  MaterialUiIcon,
  MantineIcon,
  NodeIcon,
  MongodbIcon,
  PostgresqlIcon,
  PrismaIcon,
  RechartsIcon,
  JestIcon,
  PlaywrightIcon,
  StorybookIcon,
  FigmaIcon,
  WebflowIcon,
} from "@/components/icons";
import { paths } from "@/constants";
import { getBlogPosts } from "@/lib/blog";
import { experiencesFr } from "@/lib/xp-data-fr";
import { experiencesEn } from "@/lib/xp-data-en";
import { getDictionary } from "@/hooks/use-translation";
import Link from "next/link";
import { LanguageSwitcher } from "@/components/language-switcher";

const stacks: { label: string; icon: ElementType }[] = [
  { label: "react", icon: ReactIcon },
  { label: "next", icon: NextIcon },
  { label: "remix 2", icon: RemixIcon },
  { label: "react router v7", icon: ReactRouterIcon },
  { label: "typescript", icon: TypescriptIcon },
  { label: "zod", icon: ZodIcon },
  { label: "vite", icon: ViteIcon },
  { label: "tailwind", icon: TailwindIcon },
  { label: "materialui", icon: MaterialUiIcon },
  { label: "mantine", icon: MantineIcon },
  { label: "node", icon: NodeIcon },
  { label: "mongodb", icon: MongodbIcon },
  { label: "postgresql", icon: PostgresqlIcon },
  { label: "prisma", icon: PrismaIcon },
  { label: "recharts", icon: RechartsIcon },
  { label: "jest", icon: JestIcon },
  { label: "playwright", icon: PlaywrightIcon },
  { label: "storybook", icon: StorybookIcon },
  { label: "figma", icon: FigmaIcon },
  { label: "webflow", icon: WebflowIcon },
];

const sectionTitleClassName =
  "text-accent text-muted-foreground mb-4 font-semibold uppercase";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as "en" | "fr");
  const posts = await getBlogPosts(locale);
  const experiences = locale === "fr" ? experiencesFr : experiencesEn;

  return (
    <div className="mx-auto flex max-w-screen-md flex-col gap-12 px-6 pt-24 font-mono">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-4">
        {/* Mobile */}
        <div className="-mt-8 -ml-6 flex items-center justify-between sm:hidden">
          <div className="-ml-18">
            <SpinningText
              className="font-mono text-sm uppercase"
              radius={5.5}
              duration={15}
              alwaysVisible={true}
            >
              {dict.home.spinningText}
            </SpinningText>
          </div>

          <div className="flex flex-col items-end gap-2">
            <LanguageSwitcher />
            <Hero greeting={dict.hero.greeting} name={dict.hero.name} />
          </div>
        </div>

        {/* Desktop */}
        <div className="group -mt-8 hidden items-center justify-end gap-32 sm:flex">
          <SpinningText
            className="-mt-2 font-mono text-sm uppercase opacity-0 transition-opacity duration-750 group-hover:opacity-100"
            radius={5.5}
            duration={15}
          >
            {dict.home.spinningText}
          </SpinningText>

          <div className="flex flex-col items-end gap-2">
            <LanguageSwitcher />
            <Hero greeting={dict.hero.greeting} name={dict.hero.name} />
          </div>
        </div>

        <div className="group mt-12 flex max-w-prose flex-col gap-6 font-sans">
          <h2 className="text-balance">
            <strong>{dict.home.title}</strong> {dict.home.subtitle1}{" "}
            <strong>{dict.home.subtitle1Bold}</strong>
          </h2>
          <p className="text-balance">
            {dict.home.description1}{" "}
            <strong>{dict.home.description1Bold}</strong>{" "}
            {dict.home.description1End}
          </p>
          <p>
            {dict.home.description2}{" "}
            <strong>{dict.home.description2Bold}</strong>
          </p>
        </div>
      </div>

      <div>
        <h3 className={sectionTitleClassName}>{dict.sections.stacks}</h3>
        <div className="flex flex-col gap-6 font-sans">
          <p className="flex max-w-prose flex-wrap leading-loose text-pretty">
            {stacks.map(({ label, icon }, index) => (
              <span
                key={`${label}-${index}`}
                className="mr-4 flex items-center space-x-2"
              >
                <StackIcon icon={icon} />
                <span>{label}</span>
              </span>
            ))}
          </p>
        </div>
      </div>

      <div>
        <h3 className={sectionTitleClassName}>{dict.sections.notes}</h3>
        <ul className="flex flex-col gap-6 font-sans">
          {posts
            .filter((post) => post.publish)
            .map((post, thumbIndex) => (
              <li key={post.slug}>
                <Link
                  href={paths.notes(post.slug, locale)}
                  className="group flex items-start gap-4 sm:gap-6"
                >
                  <div className="flex flex-1 flex-col gap-0">
                    <span className="group-hover:text-foreground text-accent font-semibold transition-colors duration-150">
                      {post.title}
                    </span>
                    <span className="text-muted-foreground mt-2 sm:mt-0">
                      {post.description.replace(/\.$/, "")}
                    </span>
                  </div>

                  {post.image && (
                    <div className="relative h-16 w-20 flex-shrink-0 overflow-hidden rounded-lg transition-shadow duration-300 group-hover:shadow-lg sm:h-22 sm:w-28">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 639px) 80px, 112px"
                        priority={thumbIndex === 0}
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}
                </Link>
              </li>
            ))}
        </ul>
      </div>

      <div>
        <h3 className={sectionTitleClassName}>{dict.sections.about}</h3>
        <div className="flex flex-col gap-6 font-sans">
          <p className="max-w-prose text-pretty">{dict.about.paragraph1}</p>
          <p className="max-w-prose text-pretty">{dict.about.paragraph2}</p>
          <p className="max-w-prose text-pretty">{dict.about.paragraph3}</p>
        </div>
      </div>

      <div>
        <h3 className={sectionTitleClassName}>{dict.sections.experience}</h3>

        <div className="font-sans">
          <h4 className="text-muted-foreground mt-5 mb-3 text-sm uppercase">
            {dict.sections.developmentWeb}
          </h4>
          {experiences
            .filter(
              (exp) =>
                exp.type === "développement web" ||
                exp.type === "software engineering",
            )
            .map((exp, index) => (
              <ExperienceItem
                key={`${exp.company}-${index}`}
                experience={exp}
                showMoreLabel={dict.experience.showMore}
                showLessLabel={dict.experience.showLess}
              />
            ))}
          <h4 className="text-muted-foreground mt-8 mb-3 text-sm uppercase">
            {dict.sections.webCommunication}
          </h4>
          {experiences
            .filter(
              (exp) =>
                exp.type === "communication web" ||
                exp.type === "web communication",
            )
            .map((exp, index) => (
              <ExperienceItem
                key={`${exp.company}-${index}`}
                experience={exp}
                showMoreLabel={dict.experience.showMore}
                showLessLabel={dict.experience.showLess}
              />
            ))}
        </div>
      </div>

      <div>
        <h3 className={sectionTitleClassName}>{dict.sections.more}</h3>
        <div className="flex flex-col gap-6 font-sans">
          <p className="max-w-prose text-pretty">
            {dict.more.contact}{" "}
            <InlineLink href={paths.email}>{dict.more.mail}</InlineLink>,{" "}
            {dict.more.cv}{" "}
            <InlineLink href={locale === "en" ? paths.cvEnglish : paths.cv}>
              {dict.more.here}
            </InlineLink>
            , {dict.more.projects}{" "}
            <InlineLink href={paths.github}>{dict.more.github}</InlineLink>
          </p>

          <p>
            <InlineLink
              href={paths.repo}
              className="text-muted-foreground hover:text-accent font-normal"
            >
              {dict.more.sourceCode}
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
