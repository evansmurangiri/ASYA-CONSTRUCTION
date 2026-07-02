// Content for the 4 individual service pages (/services/:slug).
// `formKey` links each service page to its matching quiz in serviceForms.js.

import {
  PencilRuler,
  HardHat,
  Hammer,
  Calculator,
  Award,
  Users,
  Clock,
  ShieldCheck,
} from "lucide-react";

export const servicesContent = [
  {
    slug: "design-and-build",
    formKey: "design",
    icon: PencilRuler,
    title: "Design and Build",
    tagline: "From first sketch to a buildable plan.",
    description:
      "Our design-build service brings architectural planning and construction expertise together under one roof. We translate your vision — the rooms, the style, the way the spaces should feel — into clear, buildable architectural and engineering drawings, then carry that same plan straight into construction with one coordinated team and no handoff gaps.",
    highlights: [
      {
        icon: Award,
        title: "Premium Quality",
        description:
          "We use durable materials and proven construction techniques on every design.",
      },
      {
        icon: Users,
        title: "Custom Designs",
        description:
          "Every plan is built around your land, your lifestyle, and your budget.",
      },
      {
        icon: Clock,
        title: "Clear Timelines",
        description:
          "Transparent planning and a realistic schedule before work begins.",
      },
      {
        icon: ShieldCheck,
        title: "10-Year Guarantee",
        description:
          "Extended warranty coverage on structural and finishing work.",
      },
    ],
  },
  {
    slug: "construction",
    formKey: "build",
    icon: HardHat,
    title: "Construction",
    tagline: "Ground-up building, done right.",
    description:
      "Whether you already have approved drawings or are starting from a clear brief, our construction team manages the full build — commercial, residential, or industrial — with rigorous quality control, transparent budgeting, and a contractor you can actually reach throughout the project.",
    highlights: [
      {
        icon: Award,
        title: "Premium Quality",
        description:
          "Skilled crews and quality-checked materials on every phase of the build.",
      },
      {
        icon: Users,
        title: "Dedicated Project Team",
        description:
          "A single point of contact managing your build from groundwork to handover.",
      },
      {
        icon: Clock,
        title: "On-Time Delivery",
        description:
          "Clear milestones and progress updates so the schedule stays on track.",
      },
      {
        icon: ShieldCheck,
        title: "10-Year Guarantee",
        description:
          "Extended warranty coverage on structural and finishing work.",
      },
    ],
  },
  {
    slug: "renovation",
    formKey: "renovation",
    icon: Hammer,
    title: "Renovation",
    tagline: "Transform the space you already have.",
    description:
      "From a single room refresh to a full property overhaul, our renovation team works around your existing structure to modernise finishes, improve layouts, and upgrade tired spaces — with the same quality standards as a new build.",
    highlights: [
      {
        icon: Award,
        title: "Premium Finishes",
        description:
          "Quality materials and skilled workmanship, even on the smallest details.",
      },
      {
        icon: Users,
        title: "Tailored to Your Space",
        description:
          "Plans built around your existing structure, layout, and budget.",
      },
      {
        icon: Clock,
        title: "Minimal Disruption",
        description:
          "Clear scheduling that keeps your renovation moving without surprises.",
      },
      {
        icon: ShieldCheck,
        title: "Workmanship Guarantee",
        description: "Warranty coverage on all renovation work we complete.",
      },
    ],
  },
  {
    slug: "cost-estimate",
    formKey: "quantitySurveying",
    icon: Calculator,
    title: "Cost Estimate",
    tagline: "Know your numbers before you build.",
    description:
      "A professional cost estimate — backed by a detailed Bill of Quantities — gives you a realistic construction budget before you commit to anything. Use it to plan financing, compare contractor quotations, or simply understand what your project will actually cost.",
    highlights: [
      {
        icon: Award,
        title: "Detailed & Accurate",
        description:
          "Every material, quantity, and labour cost measured against your drawings.",
      },
      {
        icon: Users,
        title: "Prepared by Surveyors",
        description:
          "Estimates built by qualified Quantity Surveyors, not rough guesswork.",
      },
      {
        icon: Clock,
        title: "Fast Turnaround",
        description:
          "A clear budget in hand quickly, so you can plan your next step.",
      },
      {
        icon: ShieldCheck,
        title: "Budget Confidence",
        description:
          "A reliable number to compare quotations and control costs.",
      },
    ],
  },
];
