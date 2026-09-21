import { pt } from "./pt";
import { en } from "./en";
import { es } from "./es";
import { TranslationDictionary, Language } from "./types";

export const translations: Record<Language, TranslationDictionary> = {
  pt,
  en,
  es,
};

export type { TranslationDictionary, Language };
export { pt, en, es };
