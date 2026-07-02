// Question/step definitions for the 4 "Learn More" service quiz flows.
// Each form is a sequence of steps. A step is either:
//   type: "select" -> grid of icon cards, single choice, auto-advances
//   type: "pills"  -> 2-3 stacked colored buttons (yes/no/maybe style)
// An option can carry `redirectTo` (a form key) to branch into a different
// flow instead of continuing the current one (e.g. "No architectural
// drawings?" sends the user into the Design flow).

import {
  Home,
  Building2,
  Factory,
  Blocks,
  BedDouble,
  Layers,
  Palette,
  Wallet,
  Calendar,
  CheckCircle2,
  XCircle,
  Clock,
  HelpCircle,
  Banknote,
  Landmark,
  HandCoins,
  ClipboardList,
  FileSignature,
  Scale,
  Star,
  Bath,
  Sofa,
  Briefcase,
  TreePine,
  Utensils,
} from "lucide-react";

export const serviceForms = {
  design: {
    formTitle: "Design Form",
    formSubtitle: "Architect",
    steps: [
      {
        question: "What would you like us to design?",
        type: "select",
        options: [
          { label: "Family Home", icon: Home },
          { label: "Apartment Building", icon: Building2 },
          { label: "Commercial Building", icon: Factory },
          { label: "Mixed-Use Development", icon: Blocks },
        ],
      },
      {
        question: "Do you already own the land?",
        type: "pills",
        options: [
          { label: "Yes", color: "green" },
          { label: "I'm Buying It", color: "yellow" },
          { label: "Not Yet", color: "red" },
        ],
      },
      {
        question: "How many bedrooms are you planning?",
        type: "select",
        options: [
          { label: "2", icon: BedDouble },
          { label: "3", icon: BedDouble },
          { label: "4", icon: BedDouble },
          { label: "5+", icon: BedDouble },
          { label: "Commercial", icon: Building2 },
        ],
      },
      {
        question: "How many floors?",
        type: "select",
        options: [
          { label: "Single Storey", icon: Layers },
          { label: "Double Storey", icon: Layers },
          { label: "Three Floors", icon: Layers },
          { label: "Four or More", icon: Layers },
        ],
      },
      {
        question: "Which style do you love?",
        type: "select",
        options: [
          { label: "Modern", icon: Palette },
          { label: "Contemporary", icon: Palette },
          { label: "Minimalist", icon: Palette },
          { label: "Mediterranean", icon: Palette },
          { label: "Not Sure", icon: HelpCircle },
        ],
      },
      {
        question: "What's your estimated budget?",
        type: "select",
        options: [
          { label: "Under KSh 5M", icon: Wallet },
          { label: "KSh 5M\u201310M", icon: Wallet },
          { label: "KSh 10M\u201320M", icon: Wallet },
          { label: "KSh 20M+", icon: Wallet },
        ],
      },
      {
        question: "When would you like to start?",
        type: "select",
        options: [
          { label: "Immediately", icon: Calendar },
          { label: "Within 3 Months", icon: Calendar },
          { label: "Within 6 Months", icon: Calendar },
          { label: "Within a Year", icon: Calendar },
          { label: "Just Exploring", icon: HelpCircle },
        ],
      },
      {
        question: "Will you need financing?",
        type: "pills",
        options: [
          { label: "Yes", color: "green" },
          { label: "No", color: "red" },
          { label: "Maybe", color: "yellow" },
        ],
      },
    ],
  },

  build: {
    formTitle: "Build Form",
    formSubtitle: "Construction Manager",
    steps: [
      {
        question: "Do you already have architectural drawings?",
        type: "pills",
        options: [
          { label: "Yes", color: "green" },
          { label: "No", color: "red", redirectTo: "design" },
        ],
      },
      {
        question: "Do you already have a Bill of Quantities (BOQ)?",
        type: "pills",
        options: [
          { label: "Yes", color: "green" },
          { label: "No", color: "red", redirectTo: "quantitySurveying" },
        ],
      },
      {
        question: "What are you building?",
        type: "select",
        options: [
          { label: "Family Home", icon: Home },
          { label: "Apartments", icon: Building2 },
          { label: "Commercial Building", icon: Factory },
          { label: "Mixed Use", icon: Blocks },
        ],
      },
      {
        question: "Construction budget?",
        type: "select",
        options: [
          { label: "Under KSh 5M", icon: Wallet },
          { label: "KSh 5M\u201310M", icon: Wallet },
          { label: "KSh 10M\u201320M", icon: Wallet },
          { label: "KSh 20M+", icon: Wallet },
        ],
      },
      {
        question: "When would you like to start construction?",
        type: "select",
        options: [
          { label: "Now", icon: Calendar },
          { label: "1\u20133 Months", icon: Calendar },
          { label: "3\u20136 Months", icon: Calendar },
          { label: "6\u201312 Months", icon: Calendar },
        ],
      },
      {
        question: "How will you finance the project?",
        type: "select",
        options: [
          { label: "Cash", icon: Banknote },
          { label: "Mortgage", icon: Landmark },
          { label: "Construction Loan", icon: HandCoins },
          { label: "Still Deciding", icon: HelpCircle },
        ],
      },
    ],
  },

  quantitySurveying: {
    formTitle: "Quantity Surveying Form",
    formSubtitle: "Quantity Surveyor",
    steps: [
      {
        question: "Why do you need a BOQ?",
        type: "select",
        options: [
          { label: "Budget Planning", icon: Wallet },
          { label: "Bank Financing", icon: Landmark },
          { label: "Tender", icon: FileSignature },
          { label: "Construction", icon: ClipboardList },
          { label: "Just Comparing Costs", icon: Scale },
        ],
      },
      {
        question: "Do you already have architectural drawings?",
        type: "pills",
        options: [
          { label: "Yes", color: "green" },
          { label: "No", color: "red", redirectTo: "design" },
        ],
      },
      {
        question: "What level of finishes are you planning?",
        type: "select",
        options: [
          { label: "Standard", icon: Star },
          { label: "Mid-Range", icon: Star },
          { label: "Premium", icon: Star },
          { label: "Luxury", icon: Star },
        ],
      },
      {
        question: "Estimated construction budget?",
        type: "select",
        options: [
          { label: "Under KSh 5M", icon: Wallet },
          { label: "KSh 5M\u201310M", icon: Wallet },
          { label: "KSh 10M\u201320M", icon: Wallet },
          { label: "KSh 20M+", icon: Wallet },
        ],
      },
    ],
  },

  renovation: {
    formTitle: "Renovation Form",
    formSubtitle: "Renovation Specialist",
    steps: [
      {
        question: "What would you like to renovate?",
        type: "select",
        options: [
          { label: "Entire House", icon: Home },
          { label: "Kitchen", icon: Utensils },
          { label: "Bathroom", icon: Bath },
          { label: "Living Room", icon: Sofa },
          { label: "Bedrooms", icon: BedDouble },
          { label: "Office", icon: Briefcase },
          { label: "Exterior", icon: TreePine },
        ],
      },
      {
        question: "What type of property is it?",
        type: "select",
        options: [
          { label: "Apartment", icon: Building2 },
          { label: "House", icon: Home },
          { label: "Office", icon: Briefcase },
          { label: "Commercial", icon: Factory },
        ],
      },
      {
        question: "How old is the property?",
        type: "select",
        options: [
          { label: "Less than 5 Years", icon: Calendar },
          { label: "5\u201310 Years", icon: Calendar },
          { label: "10\u201320 Years", icon: Calendar },
          { label: "20+ Years", icon: Calendar },
        ],
      },
      {
        question: "Budget?",
        type: "select",
        options: [
          { label: "Under KSh 500K", icon: Wallet },
          { label: "KSh 500K\u20132M", icon: Wallet },
          { label: "KSh 2M\u20135M", icon: Wallet },
          { label: "Over KSh 5M", icon: Wallet },
        ],
      },
      {
        question: "When would you like to begin?",
        type: "select",
        options: [
          { label: "Immediately", icon: Calendar },
          { label: "Within 3 Months", icon: Calendar },
          { label: "Within 6 Months", icon: Calendar },
          { label: "Just Planning", icon: HelpCircle },
        ],
      },
    ],
  },
};

// Maps each Services-section card title to the form it should open.
export const serviceFormKeyByTitle = {
  "Design and Build": "design",
  Construction: "build",
  "Cost Estimate": "quantitySurveying",
  Renovation: "renovation",
};
