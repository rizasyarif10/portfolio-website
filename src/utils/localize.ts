import type { Language, LocalizedText } from "@/types/portfolio";

export function localize(value: LocalizedText, language: Language): string {
  return value[language];
}
