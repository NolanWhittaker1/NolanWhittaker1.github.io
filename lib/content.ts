// Single source of truth for the portfolio copy.
// Swap these values for your own — nothing else needs to change.

export const profile = {
  name: "Nolan Whittaker",
  role: "Junior Software Developer",
  location: "Vancouver, BC",
  available: true,
  availableLabel: "Open to 2027 Internships",
  email: "nolanwhittaker1@gmail.com",
  links: [
    { label: "GitHub", href: "https://github.com/NolanWhittaker1" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/nolanwhittaker1" },
    { label: "Resume", href: "/2026NWhittaker.pdf" },
  ],
};

export const about = {
  photo: {
    src: "/images/profilephoto.png",
    alt: "Portfolio Photo",
  },
  paragraphs: [
    "I'm a fourth-year Computer Science student at SFU with experience at Downhole Battery and Cortico Health, building full-stack web applications. Outside of developing, I also enjoy working on data analysis projects and building predictive models.",
    "When I have spare time, I enjoy learning new technologies and expanding my knowledge. You'll usually find me on the golf course, playing TCGs, or diving into tech.",
  ],
  skills: [
    {
      group: "Languages",
      items: ["TypeScript", "JavaScript", "Python", "SQL"],
    },
    {
      group: "Frontend",
      items: ["React", "Angular", "Tailwind"],
    },
    {
      group: "Backend",
      items: ["Node.js", "Express", "PostgreSQL", "REST APIs", "Django"],
    },
    {
      group: "Tooling",
      items: [
        "Git",
        "Vitest",
        "Playwright",
        "Docker",
        "GitHub Actions",
        "Sentry",
        "Jenkins",
        "Pandas",
      ],
    },
  ],
};

export type Project = {
  title: string;
  year: string;
  summary: string;
  stack: string[];
  href: string;
  hrefLabel: string;
};

export const projects: Project[] = [
  {
    title: "InsightsAI",
    year: "October 2025",
    summary:
      "Engineered a full-stack application in 24 hours at StormHacks 2025, designing custom LLM system prompts to reliably parse and structure raw data outputs for business users, featuring dynamic chart rendering.",
    stack: ["React", "Supabase", "Node.js"],
    href: "https://github.com/NolanWhittaker1/StormhacksProject",
    hrefLabel: "Source",
  },
  {
    title: "NHL Game Predictor",
    year: "May 2025 - Aug 2025",
    summary:
      "End-to-end ETL and transformation across 16 years of NHL data, aggregated to prepare it for statistical analysis and prediction. Built and validated a Random Forest Classifier reaching 59% accuracy, with Seaborn visualizations highlighting the factors driving game outcomes.",
    stack: ["Python", "Pandas", "Seaborn", "SciPy"],
    href: "https://github.sfu.ca/nwa47/CMPT353DataScience",
    hrefLabel: "Source",
  },
  {
    title: "Shape Up Fitness",
    year: "Jan 2024 - Apr 2024",
    summary:
      "A fitness tracking app built with Spring Boot backend logic following the MVM pattern for structured data tracking. Iterated on design and requirements directly with the client across multiple feedback rounds.",
    stack: ["HTML", "CSS", "Spring Boot"],
    href: "https://github.com/NolanWhittaker1/software-engineering-term-project",
    hrefLabel: "Source",
  },
];

export type Role = {
  company: string;
  title: string;
  period: string;
  location: string;
  points: string[];
};

export const experience: Role[] = [
  {
    company: "Cortico Health",
    title: "Software Developer Intern",
    period: "Jan 2026 — Current",
    location: "Vancouver, BC",
    points: [
      "Designed and integrated a browser extension-based fax platform, allowing customers to reduce document processing time by 97% and reliably processing 2,000+ monthly transmissions.",
      "Resolved high-priority production escalations by analyzing Sentry telemetry and application logs, delivering same day hotfixes and implementing code guards to prevent recurring errors.",
      "Restored health to Playwright E2E and Vitest unit suites by fixing underlying bugs, reducing skipped tests by 71% to ensure we have dependable Jenkins CI/CD pipeline runs.",
    ],
  },
  {
    company: "Downhole Battery",
    title: "Frontend Develop",
    period: "Oct 2024 — Dec 2025",
    location: "Vancouver, BC",
    points: [
      "Rebuilt and optimized the corporate website using semantic HTML and Tailwind CSS, designing responsive, mobile-first layouts that delivered sub-second load times and 100% cross-browser compatibility.",
      "Developed interactive features using OpenStreetMap and Leaflet.js alongside embedded social feeds and product showcases, allowing the company to feature recent LinkedIn posts and launch new features seamlessly.",
      "Accelerated overall page performance by optimizing asset delivery, minifying CSS bundles, and implementing responsive image loading, resulting in significantly faster mobile rendering speeds.",
    ],
  },
];

export const education = [
  {
    school: "Simon Fraser University",
    credential: "Bachelors of Applied Science, Major In Computer Science",
    period: "Sept 2022 - Present",
  },
  {
    school: "Thompson Rivers University",
    credential: "Bachelors of Science, Major In Computer Science",
    period: "Sept 2021 — Apr 2022",
  },
];
