export type Language = "en" | "id";

export type LocalizedText = Readonly<Record<Language, string>>;

export type NavigationIcon = "about" | "work" | "resume" | "skills" | "contact";

export type NavigationItem = {
  readonly number: string;
  readonly label: LocalizedText;
  readonly href: string;
  readonly icon: NavigationIcon;
};

export type CareerStat = {
  readonly value: string;
  readonly lines: readonly LocalizedText[];
};

export type ServiceIcon = "code" | "layers" | "quality";

export type Service = {
  readonly icon: ServiceIcon;
  readonly title: LocalizedText;
  readonly description: LocalizedText;
};

export type Project = {
  readonly title: string;
  readonly type: LocalizedText;
  readonly role: LocalizedText;
  readonly description: LocalizedText;
  readonly stack: readonly string[];
  readonly previews: readonly ProjectPreview[];
  readonly href?: string;
};

export type ProjectPreviewVariant =
  | "dashboard"
  | "operations"
  | "mobile"
  | "landing"
  | "portfolio"
  | "detail";

export type ProjectPreview =
  | {
      readonly kind: "image";
      readonly label: LocalizedText;
      readonly image: string;
    }
  | {
      readonly kind: "placeholder";
      readonly label: LocalizedText;
      readonly variant: ProjectPreviewVariant;
    };

export type Experience = {
  readonly period: LocalizedText;
  readonly company: string;
  readonly role: LocalizedText;
  readonly description: LocalizedText;
  readonly responsibilities?: readonly LocalizedText[];
  readonly projectGroups?: readonly ExperienceProjectGroup[];
};

export type ExperienceProjectGroup = {
  readonly label: LocalizedText;
  readonly items: readonly ExperienceProject[];
};

export type ExperienceProject = {
  readonly name: string;
  readonly detail?: LocalizedText;
};

export type SkillGroup = {
  readonly label: LocalizedText;
  readonly items: readonly string[];
};

export type Profile = {
  readonly name: string;
  readonly nameLines: readonly string[];
  readonly role: LocalizedText;
  readonly availability: LocalizedText;
  readonly location: LocalizedText;
  readonly timezone: string;
  readonly photo: string;
  readonly cv: string;
  readonly linkedIn: string;
  readonly github: string;
};

export type ContactDetails = {
  readonly email: string;
  readonly phoneDisplay: string;
  readonly whatsappHref: string;
};

export type Education = {
  readonly period: string;
  readonly institution: string;
  readonly degree: LocalizedText;
};
