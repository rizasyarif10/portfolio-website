import { BriefcaseBusiness, FileText, Mail, UserRound, Wrench } from "lucide-react";
import type { NavigationIcon as NavigationIconName } from "../../types/portfolio";

const NAVIGATION_ICONS = {
  about: UserRound,
  work: BriefcaseBusiness,
  resume: FileText,
  skills: Wrench,
  contact: Mail,
} satisfies Record<NavigationIconName, typeof UserRound>;

type NavigationIconProps = {
  name: NavigationIconName;
  size?: number;
};

export function NavigationIcon({ name, size = 18 }: NavigationIconProps) {
  const Icon = NAVIGATION_ICONS[name];
  return <Icon size={size} strokeWidth={1.8} aria-hidden="true" />;
}
