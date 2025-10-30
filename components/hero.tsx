"use client";

import { ElementType } from "react";
import { GithubIcon, LinkedInIcon } from "@/components/icons";
import { FC } from "react";
import { paths } from "@/constants";
import { Link } from "@/components/link";
import { motion } from "motion/react";

interface HeroProps {
  greeting: string;
  name: string;
}

export const Hero: FC<HeroProps> = ({ greeting, name }) => {
  return (
    <div className="flex flex-col items-end">
      <motion.h1
        className="text-accent text-right font-sans text-4xl font-semibold select-none"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          y: { duration: 0.3 },
          opacity: { duration: 0.5 },
        }}
      >
        {greeting} <br />
        {name}
      </motion.h1>

      <motion.span
        className="text-muted-foreground/75 items-end"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.15 }}
      >
        — @raphaelch
      </motion.span>

      <motion.ul
        className="flex items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.15 }}
      >
        <SocialLink href={paths.github} icon={GithubIcon} />
        <SocialLink href={paths.linkedin} icon={LinkedInIcon} />
      </motion.ul>
    </div>
  );
};

const SocialLink = ({
  href,
  icon: Icon,
}: {
  href: string;
  icon: ElementType;
}) => {
  return (
    <li className="grid place-items-center">
      <Link
        href={href}
        className="hover:bg-muted-background rounded-xl p-2 transition-colors duration-150"
      >
        <Icon className="text-muted-foreground size-4" />
      </Link>
    </li>
  );
};
