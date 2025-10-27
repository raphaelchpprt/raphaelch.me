"use client";

import { useParams, usePathname } from "next/navigation";
import { InlineLink } from "@/components/link";

export function LanguageSwitcher() {
  const params = useParams();
  const pathname = usePathname();
  const currentLocale = (params?.locale as string) || "fr";

  const getLocalizedPath = (newLocale: string) => {
    if (!pathname) return `/${newLocale}`;
    
    const pathnameWithoutLocale = pathname.replace(`/${currentLocale}`, "");
    return `/${newLocale}${pathnameWithoutLocale || ""}`;
  };

  return (
    <div className="flex items-center gap-1 text-sm font-mono">
      {["fr", "en"].map((locale, index) => (
        <span key={locale}>
          {currentLocale === locale ? (
            <span className="text-muted-foreground font-semibold">
              {locale}
            </span>
          ) : (
            <InlineLink href={getLocalizedPath(locale)}>
              {locale}
            </InlineLink>
          )}
          {index === 0 && <span className="text-muted-foreground mx-1"> | </span>}
        </span>
      ))}
    </div>
  );
}