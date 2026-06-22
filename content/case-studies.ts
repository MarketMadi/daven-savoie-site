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
    subtitle: "Kubernetes cost estimator — compare AWS, GKE, AKS, and Hetzner from YAML",
    domain: "open-source",
    domainLabel: "Open Source",
    period: "2025 – Present",
    featured: true,
    metrics: [
      { value: "4", label: "cloud providers" },
      { value: "41", label: "automated tests" },
      { value: "0", label: "cluster agents required" },
    ],
    summary:
      "Built a full-stack open-source tool that turns Kubernetes manifests into monthly cost estimates. CLI, npm package, GitHub Action for PR comments, live web demo, and documented methodology aligned with OpenCost.",
    highlights: [
      "Dual compute model: marginal resource rates and node-floor bin-packing across provider instance catalogs",
      "GitHub Action with policy gates — max monthly USD, confidence thresholds, PR cost diffs",
      "Helm chart input, kubectl cluster export, CronJob schedule parsing, storage class mapping",
      "Pricing sheets validated in CI against public list prices with benchmark tests",
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
    subtitle: "Decentralized P2P marketplace — solo lead engineer, mainnet launch",
    domain: "decentralized",
    domainLabel: "Decentralized Systems",
    period: "Jan 2024 – Jan 2025",
    featured: true,
    metrics: [
      { value: "Solo", label: "end-to-end delivery" },
      { value: "Dec '24", label: "mainnet launch" },
      { value: "Seconds", label: "deploy to mainnet" },
    ],
    summary:
      "Implemented the CivKit white paper from scratch in TypeScript — PGP chat, Lightning escrow, and Nostr integrations. Designed microservices with Docker and automation to regtest, signet, and mainnet.",
    highlights: [
      "Built the entire platform spec from the white paper as sole developer",
      "Automated deployment pipelines pushing updates to mainnet within seconds",
      "Microservices architecture with Docker across regtest, signet, and mainnet environments",
      "Handed over to local P2P traders for independent operation after mainnet launch",
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
    subtitle: "Bitcoin trading infrastructure and mobile wallet platform",
    domain: "fintech",
    domainLabel: "Fintech & Bitcoin",
    period: "Jan 2025 – Present",
    featured: true,
    metrics: [
      { value: "API", label: "trading & swaps" },
      { value: "CI/CD", label: "containerized deploys" },
      { value: "Mobile", label: "Flutter wallet app" },
    ],
    summary:
      "DevOps and infrastructure for a Bitcoin financial platform — trading API, wallet functionality, containerized deployments, and a Flutter mobile app with BTC and USDT flows.",
    highlights: [
      "Designed and deployed a financial trading API with Docker, enabling wallet and swap functionality",
      "Automated deployment pipelines with containerization and CI/CD, reducing errors and accelerating releases",
      "Created developer documentation and runbooks for cross-team collaboration and onboarding",
      "Mobile app development — Flutter wallet with send/receive flows for BTC and USDT",
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
    subtitle: "Legacy modernisation — first redeploy in 10+ years",
    domain: "healthcare",
    domainLabel: "Healthcare",
    period: "Jan 2023 – Jan 2024",
    featured: true,
    metrics: [
      { value: "7", label: "microservices redeployed" },
      { value: "80%", label: "slow query reduction" },
      { value: "100%", label: "critical metric logging" },
    ],
    summary:
      "Contract engagement redeploying a decade-old healthcare codebase comprising seven microservices — the first full redeployment since original creation.",
    highlights: [
      "Redeployed 10+ year legacy codebase with 7 microservices to modern infrastructure",
      "Implemented comprehensive monitoring achieving 100% logging of mission-critical metrics",
      "Reduced slow database queries by approximately 80%",
      "Upskilled team on Docker, AWS, and CI/CD — restore times from hours to minutes",
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
    subtitle: "Self-service data pipelines and automated crop intelligence",
    domain: "agtech",
    domainLabel: "AgTech & Farming",
    period: "Jul 2020 – Mar 2023",
    featured: true,
    metrics: [
      { value: "Days→Min", label: "data self-service" },
      { value: "52→63", label: "cybersecurity score" },
      { value: "2nd line", label: "support automated" },
    ],
    summary:
      "DevOps engineer for a UK farming-sector platform — automating soil health, crop health, and moisture reporting while improving security posture and enabling account manager self-service.",
    highlights: [
      "Deployed AWS Lambda scripts enabling account managers to self-serve data requirements — days to minutes",
      "Automated 2nd-line support functions including soil health, crop health, and moisture reports from internal and third-party data sources",
      "Improved application security and built a culture of cybersecurity — score from 52 to 63 points",
      "Focused team capacity on infrastructure improvements by eliminating repetitive manual work",
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
    subtitle: "15B-parameter model to production with distributed training pipeline",
    domain: "ai-ml",
    domainLabel: "AI / ML Infrastructure",
    period: "Oct 2025 – Dec 2025",
    featured: false,
    metrics: [
      { value: "15B", label: "parameter model" },
      { value: "Dev+Prod", label: "environments" },
      { value: "GitOps", label: "automated pipeline" },
    ],
    summary:
      "Contract engagement deploying a large language model to production for an AI research company — distributed training pipeline, multi-environment architecture, and DevOps training for the engineering team.",
    highlights: [
      "Deployed 15B-parameter AI model to production using GitHub Actions, Paperspace, and Ansible",
      "Architected distributed training pipeline deployed across dev and prod environments",
      "Provided DevOps training and established best practices for the engineering team",
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
    subtitle: "Android text-to-speech app on Zapstore — Kotlin, CI/CD, thousands in user donations",
    domain: "platform",
    domainLabel: "Platform Engineering",
    period: "May 2025 – Jul 2025",
    featured: false,
    metrics: [
      { value: "Android", label: "Zapstore launch" },
      { value: "1000s", label: "user donations" },
      { value: "CI/CD", label: "automated releases" },
    ],
    summary:
      "Built and shipped VOCA TTS — an Android text-to-speech app published on Zapstore with a Kotlin codebase and automated CI/CD pipeline for releases.",
    highlights: [
      "Developed and launched VOCA TTS on Zapstore as a production Android app",
      "Implemented CI/CD pipeline for automated builds and store deployments",
      "Generated thousands in user donations after launch",
      "Technical execution noted publicly by influencer Asmongold",
    ],
    stack: ["Kotlin", "Android", "CI/CD", "Zapstore"],
  },
  {
    slug: "eks-automation",
    title: "Elastic Kubernetes Platform",
    subtitle: "Four-environment EKS — deploy time from 1 hour to under 10 minutes",
    domain: "platform",
    domainLabel: "Platform Engineering",
    period: "Jun 2022 – Oct 2022",
    featured: false,
    metrics: [
      { value: "4", label: "environments" },
      { value: "<10m", label: "deploy time" },
      { value: "20%", label: "fewer post-release bugs" },
    ],
    summary:
      "Developed a fully automated four-environment Elastic Kubernetes Cluster for a distributed systems startup, mentored an engineer into a permanent DevOps role, and tightened code review standards.",
    highlights: [
      "Fully automated 4-environment Elastic Kubernetes Cluster — deployment time from 1 hour to under 10 minutes",
      "Trained software engineer into full-time DevOps role; still primary DevOps engineer 2+ years later",
      "Code review participation reducing post-release bugs by approximately 20%",
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
    subtitle: "Social enterprise — digital workforce entry in Nairobi",
    domain: "social-impact",
    domainLabel: "Social Impact",
    period: "2017 – 2019",
    featured: false,
    metrics: [
      { value: "17", label: "people placed" },
      { value: "Kenya", label: "based enterprise" },
      { value: "Remote", label: "multinational clients" },
    ],
    summary:
      "Founded a social enterprise in Nairobi helping Kenyans enter the digital workforce — placing 17 people in remote data QA roles for multinational clients at above national average pay.",
    highlights: [
      "Created social enterprise assisting Kenyans in entering the digital workforce",
      "Helped 17 people get remote jobs in Data Quality Assurance for multinational clients",
      "Improved client workflows and team experiences, increasing productivity and retention",
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
