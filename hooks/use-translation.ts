// hooks/use-translation.ts
type Locale = 'en' | 'fr';

type TranslationKeys = {
  hero: {
    greeting: string;
    name: string;
  };
  home: {
    spinningText: string;
    title: string;
    location: string;
    subtitle1: string;
    subtitle1Bold: string;
    description1: string;
    description1Bold: string;
    description1End: string;
    description2: string;
  };
  sections: {
    stacks: string;
    experience: string;
    about: string;
    notes: string;
    more: string;
  };
  experience: {
    showMore: string;
    showLess: string;
  };
  about: {
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
  };
  more: {
    contact: string;
    mail: string;
    cv: string;
    here: string;
    projects: string;
    github: string;
    sourceCode: string;
  };
  footer: {
    linkedin: string;
    email: string;
    copied: string;
  };
};

const dictionaries = {
  en: () => import('@/locales/en.json').then((module) => module.default as TranslationKeys),
  fr: () => import('@/locales/fr.json').then((module) => module.default as TranslationKeys),
};

export async function getDictionary(locale: Locale): Promise<TranslationKeys> {
  return dictionaries[locale]();
}