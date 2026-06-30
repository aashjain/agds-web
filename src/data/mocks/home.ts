/**
 * Placeholder copy for the home experience — mirrors the static text in the
 * source `index.html`. Passed into the view via props; never imported directly
 * into a component (see component-conventions.md → Data rules).
 */

export interface ExperienceButton {
  label: string;
  /** Primary buttons render the circular arrow glyph; secondary do not. */
  withArrow: boolean;
}

export interface ExperienceCopy {
  eyebrow: string;
  /** Heading split into lines — each entry was a `<br>`-separated row. */
  titleLines: string[];
  subtitle: string;
  buttons: ExperienceButton[];
}

export interface StatCardContent {
  id: string;
  title: string;
  stat: string;
  description: string;
}

export interface HomeContent {
  hero: ExperienceCopy;
  cards: StatCardContent[];
  wave: ExperienceCopy;
  galaxy: ExperienceCopy;
}

export const homeContent: HomeContent = {
  hero: {
    eyebrow: "A new chapter in design thinking",
    titleLines: [
      "Design that reshapes how",
      "digital experiences are felt",
    ],
    subtitle:
      "We design systems where structure, logic, and creativity converge into refined digital experiences.",
    buttons: [
      { label: "Begin", withArrow: true },
      { label: "Explore the process", withArrow: false },
    ],
  },
  cards: [
    {
      id: "deployment",
      title: "Technical",
      stat: "Websites",
      description:
        "From concept to production in a fraction of the time — without sacrificing quality.",
    },
    {
      id: "teams",
      title: "Design",
      stat: "Branding & UI/UX",
      description:
        "Trusted by teams across 40 countries to power their most critical workflows.",
    },
    {
      id: "efficiency",
      title: "Growth",
      stat: "SEO",
      description:
        "Measured across industries. Real numbers from real deployments.",
    },
  ],
  wave: {
    eyebrow: "Design driven by outcomes",
    titleLines: ["Everything revolves around", "one thing — your growth"],
    subtitle:
      "We simplify complexity into focused, intentional design systems.",
    buttons: [
      { label: "Start a project", withArrow: true },
      { label: "Book a consultation", withArrow: false },
    ],
  },
  galaxy: {
    eyebrow: "Our design ecosystem",
    titleLines: ["Measured across disciplines, grounded in real outcomes."],
    subtitle:
      "Our platform is not a single tool. It's a living ecosystem with your business at its core, surrounded by services, partners, and data orbiting around you.",
    buttons: [
      { label: "Explore work", withArrow: true },
      { label: "View capabilities", withArrow: false },
    ],
  },
};
