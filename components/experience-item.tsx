"use client";

import { useState, type FC } from "react";
import type { Experience } from "@/lib/xp-data"; // Importez le type
import { cn } from "@/lib/utils";

type ExperienceItemProps = {
  experience: Experience;
};

export const ExperienceItem: FC<ExperienceItemProps> = ({ experience }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex flex-col gap-4">
      <p className="max-w-prose text-pretty">
        <span className="text-accent font-semibold">{experience.jobTitle}</span>{" "}
        @{experience.company}
        <br />
        <span className="text-muted-foreground">{experience.dateRange}</span>
      </p>
      <div
        className={cn(
          "relative overflow-hidden transition-all duration-500 ease-in-out",
          isExpanded ? "max-h-[1000px]" : "max-h-24",
        )}
      >
        <div className="flex flex-col gap-6">
          <p className="max-w-prose text-pretty">
            {experience.companyDescription}
          </p>
          <p className="max-w-prose text-pretty">
            {experience.missionDescription}
          </p>
          <ul className="flex list-inside list-disc flex-col gap-4 text-pretty">
            {experience.achievements.map((achievement, index) => (
              <li key={`${achievement}-${index}`}>{achievement}</li>
            ))}
          </ul>
        </div>

        {!isExpanded && (
          <div className="from-background absolute bottom-0 h-30 w-full bg-gradient-to-t to-transparent" />
        )}
      </div>

      <button
        onClick={toggleExpansion}
        className="text-accent hover:text-foreground -mt-2 self-start underline transition-colors hover:cursor-pointer hover:no-underline"
      >
        {isExpanded ? "voir moins" : "voir plus"}
      </button>
    </div>
  );
};
