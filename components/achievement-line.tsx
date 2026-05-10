import { Fragment } from "react";

import type { AchievementLine as AchievementSegments } from "@/lib/experience-types";

type Props = {
  segments: AchievementSegments;
  slotKey: string;
};

export function AchievementLineContent({ segments, slotKey }: Props) {
  return segments.map((part, index) => {
    const key = `${slotKey}:${index}`;
    if (typeof part === "string") {
      return (
        <Fragment key={key}>
          {part}
        </Fragment>
      );
    }
    return (
      <span key={key} className="text-accent font-semibold">
        {part.highlight}
      </span>
    );
  });
}
