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
    eyebrow: "Welcome to a new era",
    titleLines: [
      "Technology that redefines",
      "the nature of interaction",
    ],
    subtitle:
      "We build systems at the intersection of data, energy, and intelligence — where something fundamentally new comes to life.",
    buttons: [
      { label: "Get started", withArrow: true },
      { label: "See how it works", withArrow: false },
    ],
  },
  cards: [
    {
      id: "deployment",
      title: "Faster deployment",
      stat: "3×",
      description:
        "From concept to production in a fraction of the time — without sacrificing quality.",
    },
    {
      id: "teams",
      title: "Teams worldwide",
      stat: "2,400+",
      description:
        "Trusted by teams across 40 countries to power their most critical workflows.",
    },
    {
      id: "efficiency",
      title: "Average efficiency gain",
      stat: "68%",
      description:
        "Measured across industries. Real numbers from real deployments.",
    },
  ],
  wave: {
    eyebrow: "The pull of results",
    titleLines: ["Everything revolves around", "one thing — your growth"],
    subtitle:
      "Thousands of data points. One centre of gravity. We turn the noise of information into a focused point of energy for your business.",
    buttons: [
      { label: "Start your free trial", withArrow: true },
      { label: "Book a demo", withArrow: false },
    ],
  },
  galaxy: {
    eyebrow: "Our product ecosystem",
    titleLines: ["A universe of possibilities —", "already in motion"],
    subtitle:
      "Our platform is not a single tool. It's a living ecosystem with your business at its core, surrounded by services, partners, and data orbiting around you.",
    buttons: [
      { label: "Explore the ecosystem", withArrow: true },
      { label: "View integrations", withArrow: false },
    ],
  },
};
