"use client";

import { useState } from "react";
import type { Experience } from "@/lib/xp-data-fr";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
interface ExperienceItemProps {
  experience: Experience;
  showMoreLabel: string;
  showLessLabel: string;
}

export function ExperienceItem({
  experience,
  showMoreLabel,
  showLessLabel,
}: ExperienceItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mb-8 flex flex-col gap-4 last:mb-0">
      <div className="flex items-center gap-3">
        {experience.companyLogo && (
          <Image
            src={experience.companyLogo}
            alt={`${experience.company} logo`}
            width={32}
            height={32}
            className="rounded"
          />
        )}
        <p className="max-w-prose text-pretty">
          <span className="text-accent font-semibold">
            {experience.jobTitle}
          </span>{" "}
          @{experience.company}
          <br />
          <span className="text-muted-foreground">{experience.dateRange}</span>
        </p>
      </div>
      <div
        className={cn(
          "relative overflow-hidden transition-all duration-500 ease-in-out",
          isExpanded ? "max-h-[1500px]" : "max-h-24",
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
          {experience.video && (
            <div className="relative aspect-video w-full overflow-hidden rounded-4xl">
              <iframe
                src={`https://www.youtube.com/embed/${experience.video}`}
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          )}
        </div>

        {!isExpanded && (
          <div className="from-background absolute bottom-0 h-18 w-full bg-gradient-to-t to-transparent" />
        )}
      </div>

      <button
        onClick={toggleExpansion}
        className={`${isExpanded ? "text-muted-foreground" : "text-foreground"} -mt-2 self-start underline transition-colors hover:cursor-pointer hover:no-underline`}
      >
        {isExpanded ? showLessLabel : showMoreLabel}
        {isExpanded ? (
          <ChevronUp className="inline" size={16} />
        ) : (
          <ChevronDown className="inline" size={16} />
        )}
      </button>
    </div>
  );
}
