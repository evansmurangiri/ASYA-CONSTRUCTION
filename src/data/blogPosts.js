// Central blog post data. Home page shows the `featured` ones;
// /blog shows all of them; /blog/:slug renders the full article
// using each post's `content` paragraphs.

const HERO_IMG =
  "https://images.unsplash.com/photo-1684497404598-6e844dff9cde?auto=format&fit=crop&w=1400&q=80";
const OFFICE_IMG =
  "https://images.unsplash.com/photo-1745015446589-7ee6f702d8c1?auto=format&fit=crop&w=1400&q=80";
const CONTACT_IMG =
  "https://images.unsplash.com/photo-1609867271967-a82f85c48531?auto=format&fit=crop&w=1400&q=80";
const RESIDENCE_IMG =
  "https://images.unsplash.com/photo-1760067537293-6b30141d6a52?auto=format&fit=crop&w=1400&q=80";
const WAREHOUSE_IMG =
  "https://images.unsplash.com/photo-1740914994657-f1cdffdc418e?auto=format&fit=crop&w=1400&q=80";
const RETAIL_IMG =
  "https://images.unsplash.com/photo-1757954697151-ac9c4fb20fe1?auto=format&fit=crop&w=1400&q=80";

export const blogPosts = [
  {
    slug: "cost-to-build-a-house-in-kenya",
    image: HERO_IMG,
    date: "June 12, 2026",
    readTime: "5 min read",
    category: "Budgeting",
    title: "How Much Does It Cost to Build a House in Kenya?",
    excerpt:
      "Construction costs depend on location, design, size, and finishes. Here's how we help you plan a realistic budget before breaking ground.",
    featured: true,
    content: [
      "It's one of the first questions every client asks, and it's also the hardest to answer with a single number. Construction costs in Kenya vary widely depending on the location, the design, the size of the home, the level of finishes you choose, and the condition of the site you're building on.",
      "A simple single-storey home with standard finishes in a peri-urban area will cost very differently from a multi-storey residence with premium finishes in a prime location. Soil conditions matter too — a site that needs deep foundations or significant earthworks will cost more before a single wall goes up.",
      "Rather than rely on a generic per-square-metre figure pulled from the internet, we recommend starting with a professional cost estimate. Once we understand your land, your design intentions, and your finishing preferences, we prepare a detailed estimate that reflects your specific project — not a market average that may not apply to you.",
      "This is also why we ask new clients a short set of questions before quoting anything: the type of building, whether you already own the land, how many bedrooms or floors you're planning, your preferred style, and your budget range. Those answers let us point you toward the right next step, whether that's architectural design, a full Bill of Quantities, or moving straight into construction.",
      "If you're at the very start of planning, the best first move is simply to get a realistic number in front of you — so you can plan financing, phasing, or scope adjustments before you're financially committed.",
    ],
  },
  {
    slug: "why-a-boq-protects-your-budget",
    image: OFFICE_IMG,
    date: "June 5, 2026",
    readTime: "4 min read",
    category: "Quantity Surveying",
    title: "Why a Bill of Quantities (BOQ) Protects Your Budget",
    excerpt:
      "A BOQ helps control costs and compare contractor quotations. Here's why it matters before construction starts.",
    featured: true,
    content: [
      "A Bill of Quantities, or BOQ, is a detailed document prepared by a Quantity Surveyor that breaks down the exact quantities and costs of every material, labour item, and construction component needed for your project — from cubic metres of concrete to the number of door hinges.",
      "Without one, contractors are essentially guessing, and so are you. Two contractors quoting the same project on a vague description can come back with wildly different numbers, and you have no reliable way to know which one is realistic, which one has left things out, and which one is simply underbidding to win the job.",
      "A BOQ fixes that. Because every line item is measured and priced against the same set of drawings, you can compare quotations side by side and know you're comparing the same scope of work. It also becomes your main tool for tracking spending once construction starts — if a contractor wants to deviate from the BOQ, you'll see exactly where and by how much.",
      "We're often asked why a BOQ is needed if architectural drawings already exist. The two serve different purposes: drawings tell you what the building looks like and how it's constructed; the BOQ tells you what it will cost and in what quantities. You generally need approved drawings first, since the BOQ is measured directly from them.",
      "Whether you're planning for bank financing, preparing a tender, or simply want to control costs before construction, a professional BOQ is one of the highest-value documents you can commission before you start spending on site.",
    ],
  },
  {
    slug: "design-or-build-first",
    image: CONTACT_IMG,
    date: "May 28, 2026",
    readTime: "4 min read",
    category: "Design",
    title: "Design or Build First? Understanding the Process",
    excerpt:
      "Design and construction are two distinct stages. Here's how they fit together for a smoother, better-coordinated project.",
    featured: true,
    content: [
      "It's a common point of confusion for first-time builders: design and construction sound like they could happen together, but they're actually two distinct stages that need to happen in sequence.",
      "Design comes first. This is where an architect translates your vision — the number of bedrooms, the style, the layout, how the spaces flow — into architectural and engineering drawings. These drawings are what guide approvals from the relevant authorities, and they're also what a Quantity Surveyor uses to prepare an accurate cost estimate.",
      "Construction is the building process that follows, once designs are approved, costs are budgeted, and a contractor is appointed. Trying to start construction before design is complete almost always leads to costly rework — walls built in the wrong place, services that clash, or finishes that don't match what was actually approved.",
      "The good news is that you don't need to manage two separate, uncoordinated teams. Working with a contractor who offers both architectural design and construction services means one team carries your vision from the first sketch through to handover, with far fewer handoff gaps and miscommunications along the way.",
      "If you're not sure which stage you're actually at — whether you need a designer, a Quantity Surveyor, or you're ready to build — that's exactly what our short project assessment is for. A few quick questions point you to the right starting point.",
    ],
  },
  {
    slug: "can-you-build-in-phases",
    image: RESIDENCE_IMG,
    date: "May 20, 2026",
    readTime: "3 min read",
    category: "Planning",
    title: "Can You Build Your House in Phases?",
    excerpt:
      "Many homeowners choose phased construction based on budget. Here's how to plan phases that integrate smoothly with your original design.",
    featured: false,
    content: [
      "Yes — and it's far more common than people expect. Many homeowners don't have the full construction budget available upfront, so building in phases — completing the structure first, then finishing interiors later, or building the main house now and an extension afterward — is a perfectly normal way to manage a project.",
      "The key to phased construction working smoothly is planning for it from the very beginning, not improvising it later. If your architectural drawings and structural design account for future phases from day one, later additions integrate cleanly: foundations are sized correctly, structural connections are left in the right places, and services like plumbing and electrical are routed with the next phase in mind.",
      "Phasing without that upfront planning is where problems creep in — a future extension might require breaking into finished walls, rerouting services, or even reinforcing foundations that weren't designed to carry the additional load.",
      "If budget is the reason you're considering phases, say so early. We can structure the design and the Bill of Quantities around a phased build from the outset, so each stage is its own manageable, costed chunk of work rather than a disruptive afterthought.",
    ],
  },
  {
    slug: "documents-you-need-before-building",
    image: WAREHOUSE_IMG,
    date: "May 12, 2026",
    readTime: "4 min read",
    category: "Compliance",
    title: "What Documents Do You Need Before Building?",
    excerpt:
      "From land ownership proof to approvals, here's the documentation most projects need before construction can legally begin.",
    featured: false,
    content: [
      "Before any construction work legally begins, most projects need a fairly consistent set of documents in place. Skipping this step is one of the most common — and most expensive — mistakes first-time builders make.",
      "At minimum, you'll typically need proof of land ownership, approved architectural drawings, structural drawings where applicable, relevant approvals from local authorities, and a project cost estimate. Depending on the scale and location of your project, additional approvals or environmental considerations may also apply.",
      "Construction without approved plans isn't just risky — it can lead to stop-work orders, fines, or being required to demolish non-compliant work, all of which cost far more than getting approvals right the first time.",
      "If you already have some of these documents — say, land ownership and a rough idea of what you want to build, but no drawings yet — that's a perfectly normal starting point. Our design team can take it from there and develop the architectural drawings you'll need to move the project into construction.",
      "The short version: treat documentation as the foundation beneath the foundation. Getting it right before construction starts is what keeps the rest of the project on solid legal and financial ground.",
    ],
  },
  {
    slug: "choosing-the-right-construction-company",
    image: RETAIL_IMG,
    date: "May 3, 2026",
    readTime: "4 min read",
    category: "Tips",
    title: "How to Choose the Right Construction Company",
    excerpt:
      "Experience, transparent quotations, qualified professionals, and references — here's what to look for before you sign a contract.",
    featured: false,
    content: [
      "Choosing a contractor is one of the highest-stakes decisions in the entire building process, and it's worth slowing down to get right rather than rushing toward the lowest quote.",
      "Start with relevant experience. A contractor who has completed projects similar in scale and type to yours — a family home, an apartment block, a commercial fit-out — will anticipate problems that a less experienced team simply won't see coming.",
      "Ask to see completed projects, not just renderings or photos of work in progress. A contractor confident in their work will be happy to show you finished buildings, and ideally let you speak with past clients about their experience.",
      "Pay close attention to how quotations are presented. A transparent, itemised quotation — ideally backed by a proper Bill of Quantities — tells you the contractor has actually measured and costed the work. A single lump-sum number with no breakdown is much harder to verify and much easier to renegotiate upward later.",
      "Finally, weigh communication and professionalism as heavily as price. Projects run for months; you'll be communicating constantly about progress, decisions, and the inevitable small adjustments. A contractor who's responsive, clear, and straightforward before you've signed anything is a strong signal of how they'll behave once they have your deposit.",
    ],
  },
];
