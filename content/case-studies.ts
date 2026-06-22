export type CaseStudyDomain =
  | "fintech"
  | "decentralized"
  | "healthcare"
  | "agtech"
  | "ai-ml"
  | "platform"
  | "open-source"
  | "social-impact";

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  domain: CaseStudyDomain;
  domainLabel: string;
  period?: string;
  featured: boolean;
  metrics: { value: string; label: string }[];
  summary: string;
  highlights: string[];
  stack: string[];
  links?: { label: string; href: string }[];
};

export const DOMAIN_LABELS: Record<CaseStudyDomain, string> = {
  fintech: "Fintech & Bitcoin",
  decentralized: "Decentralized Systems",
  healthcare: "Healthcare",
  agtech: "AgTech & Farming",
  "ai-ml": "AI / ML Infrastructure",
  platform: "Platform Engineering",
  "open-source": "Open Source",
  "social-impact": "Social Impact",
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "podmonkey",
    title: "Podmonkey",
    subtitle: "Compare AWS, GKE, AKS, and Hetzner costs from Kubernetes YAML",
    domain: "open-source",
    domainLabel: "Open Source",
    period: "2025 to Present",
    featured: true,
    metrics: [
      { value: "4", label: "cloud providers" },
      { value: "41", label: "automated tests" },
      { value: "0", label: "cluster agents required" },
    ],
    summary:
      "Open-source K8s cost estimator. Paste YAML, get monthly estimates. CLI, npm package, GitHub Action, live demo.",
    highlights: [
      "Marginal and node-floor compute models across four cloud provider catalogs",
      "GitHub Action with policy gates: max monthly spend, confidence thresholds, PR diffs",
      "Helm charts, kubectl export, CronJob schedules, storage class mapping",
      "Pricing sheets validated in CI against public list prices",
    ],
    stack: [
      "TypeScript",
      "Node.js",
      "Next.js",
      "js-yaml",
      "GitHub Actions",
      "Vitest",
    ],
    links: [
      {
        label: "Live demo",
        href: "https://marketmadi.github.io/podmonkey/",
      },
      {
        label: "GitHub",
        href: "https://github.com/MarketMadi/podmonkey",
      },
      {
        label: "npm",
        href: "https://www.npmjs.com/package/podmonkey",
      },
    ],
  },
  {
    slug: "civkit",
    title: "CivKit",
    subtitle: "Decentralized P2P marketplace. Solo lead. Mainnet launch.",
    domain: "decentralized",
    domainLabel: "Decentralized Systems",
    period: "Jan 2024 to Jan 2025",
    featured: true,
    metrics: [
      { value: "Solo", label: "end-to-end delivery" },
      { value: "Dec '24", label: "mainnet launch" },
      { value: "Seconds", label: "deploy to mainnet" },
    ],
    summary:
      "Built CivKit from the white paper in TypeScript. PGP chat, Lightning escrow, Nostr. Docker microservices on regtest, signet, and mainnet.",
    highlights: [
      "Sole developer. White paper to production.",
      "Deploy pipeline pushes to mainnet in seconds",
      "Microservices across regtest, signet, and mainnet",
      "Handed off to local P2P traders after launch",
    ],
    stack: [
      "TypeScript",
      "Docker",
      "Lightning Network",
      "Nostr",
      "PGP",
      "Microservices",
    ],
    links: [{ label: "GitHub", href: "https://github.com/MarketMadi/civkit-node" }],
  },
  {
    slug: "bitnomi",
    title: "Bitnomi",
    subtitle: "Bitcoin trading API and Flutter mobile wallet",
    domain: "fintech",
    domainLabel: "Fintech & Bitcoin",
    period: "Jan 2025 to Present",
    featured: true,
    metrics: [
      { value: "API", label: "trading & swaps" },
      { value: "CI/CD", label: "containerized deploys" },
      { value: "Mobile", label: "Flutter wallet app" },
    ],
    summary:
      "DevOps and infra for a Bitcoin platform: trading API, wallet, containerized deploys, Flutter app with BTC and USDT flows.",
    highlights: [
      "Trading API on Docker with wallet and swap functionality",
      "CI/CD pipelines cutting release errors and cycle time",
      "Developer docs and runbooks for faster onboarding",
      "Flutter wallet with BTC and USDT send/receive",
    ],
    stack: [
      "JavaScript",
      "Docker",
      "CI/CD",
      "Flutter",
      "Dart",
      "Bitcoin",
    ],
    links: [{ label: "GitHub", href: "https://github.com/Bitnomi/bitnomi" }],
  },
  {
    slug: "healthcare-platform",
    title: "Healthcare SaaS Platform",
    subtitle: "First redeploy of a 10-year legacy stack",
    domain: "healthcare",
    domainLabel: "Healthcare",
    period: "Jan 2023 to Jan 2024",
    featured: true,
    metrics: [
      { value: "7", label: "microservices redeployed" },
      { value: "80%", label: "slow query reduction" },
      { value: "100%", label: "critical metric logging" },
    ],
    summary:
      "Contract role. Redeployed seven microservices from a decade-old healthcare codebase. First full redeploy since launch.",
    highlights: [
      "7 microservices off a 10+ year legacy codebase onto modern infra",
      "100% logging on mission-critical metrics",
      "Slow queries down ~80%",
      "Team upskilled on Docker, AWS, CI/CD. Restore times: hours to minutes",
    ],
    stack: [
      "AWS",
      "Docker",
      "CI/CD",
      "Monitoring",
      "Microservices",
      "PostgreSQL",
    ],
  },
  {
    slug: "agtech-platform",
    title: "AgTech Platform",
    subtitle: "Self-service data pipelines and crop intelligence automation",
    domain: "agtech",
    domainLabel: "AgTech & Farming",
    period: "Jul 2020 to Mar 2023",
    featured: true,
    metrics: [
      { value: "Days→Min", label: "data self-service" },
      { value: "52→63", label: "cybersecurity score" },
      { value: "2nd line", label: "support automated" },
    ],
    summary:
      "DevOps for a UK farming platform. Automated soil, crop, and moisture reporting. Self-service data for account managers. Security score up 11 points.",
    highlights: [
      "AWS Lambda self-service for account managers. Days to minutes.",
      "Automated 2nd-line support: soil health, crop health, moisture reports",
      "Cybersecurity score 52 to 63",
      "Freed the team from repetitive manual work",
    ],
    stack: [
      "AWS",
      "Lambda",
      "Python",
      "Automation",
      "Security",
      "Compliance",
    ],
  },
  {
    slug: "ai-ml-deployment",
    title: "AI Model Production Deployment",
    subtitle: "15B-parameter model to production",
    domain: "ai-ml",
    domainLabel: "AI / ML Infrastructure",
    period: "Oct 2025 to Dec 2025",
    featured: false,
    metrics: [
      { value: "15B", label: "parameter model" },
      { value: "Dev+Prod", label: "environments" },
      { value: "GitOps", label: "automated pipeline" },
    ],
    summary:
      "Contract role at an AI research company. Shipped a 15B-parameter model to prod. Built the training pipeline and trained the eng team on DevOps.",
    highlights: [
      "15B-parameter model to production via GitHub Actions, Paperspace, Ansible",
      "Distributed training pipeline across dev and prod",
      "DevOps training and best practices for the engineering team",
    ],
    stack: [
      "GitHub Actions",
      "Ansible",
      "Paperspace",
      "Python",
      "CI/CD",
    ],
  },
  {
    slug: "voca-tts",
    title: "VOCA TTS",
    subtitle: "Android TTS app on Zapstore. Kotlin. CI/CD. Paid donations.",
    domain: "platform",
    domainLabel: "Platform Engineering",
    period: "May 2025 to Jul 2025",
    featured: false,
    metrics: [
      { value: "Android", label: "Zapstore launch" },
      { value: "1000s", label: "user donations" },
      { value: "CI/CD", label: "automated releases" },
    ],
    summary:
      "Built and shipped VOCA TTS on Zapstore. Kotlin Android app with automated CI/CD for builds and store releases.",
    highlights: [
      "Production Android TTS app on Zapstore",
      "CI/CD for automated builds and deployments",
      "Thousands in user donations post-launch",
      "Noted publicly by influencer Asmongold",
    ],
    stack: ["Kotlin", "Android", "CI/CD", "Zapstore"],
  },
  {
    slug: "eks-automation",
    title: "Elastic Kubernetes Platform",
    subtitle: "4-environment EKS. Deploys under 10 minutes.",
    domain: "platform",
    domainLabel: "Platform Engineering",
    period: "Jun 2022 to Oct 2022",
    featured: false,
    metrics: [
      { value: "4", label: "environments" },
      { value: "<10m", label: "deploy time" },
      { value: "20%", label: "fewer post-release bugs" },
    ],
    summary:
      "Automated a 4-environment EKS cluster for a distributed systems startup. Mentored an engineer into a permanent DevOps role.",
    highlights: [
      "Deploy time: 1 hour to under 10 minutes",
      "Trained a software engineer into full-time DevOps. Still in role 2+ years later.",
      "Code reviews cut post-release bugs ~20%",
    ],
    stack: [
      "Kubernetes",
      "EKS",
      "Docker",
      "CI/CD",
      "Terraform",
      "AWS",
    ],
  },
  {
    slug: "cion-data",
    title: "Cion Data",
    subtitle: "Social enterprise. Digital jobs in Nairobi.",
    domain: "social-impact",
    domainLabel: "Social Impact",
    period: "2017 to 2019",
    featured: false,
    metrics: [
      { value: "17", label: "people placed" },
      { value: "Kenya", label: "based enterprise" },
      { value: "Remote", label: "multinational clients" },
    ],
    summary:
      "Founded a social enterprise in Nairobi. Got 17 people into remote data QA roles for multinational clients. Above national average pay.",
    highlights: [
      "Social enterprise for digital workforce entry in Kenya",
      "17 people placed in remote data QA for multinational clients",
      "Improved client workflows, productivity, and retention",
    ],
    stack: ["Operations", "Remote work", "Data QA", "Team leadership"],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter((c) => c.featured);
}

export function getCaseStudiesByDomain(
  domain: CaseStudyDomain,
): CaseStudy[] {
  return caseStudies.filter((c) => c.domain === domain);
}
