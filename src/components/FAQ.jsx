import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "How much does it cost to build a house in Kenya?", a: "Construction costs depend on location, design, size, finishes, and site conditions. We prepare a detailed cost estimate tailored to your specific project before any work begins." },
  { q: "What is the average cost per square metre?", a: "The cost per square metre varies with building type, structural requirements, and quality of finishes. We recommend a professional estimate rather than relying on market averages." },
  { q: "How long does it take to build a house in Kenya?", a: "Most residential homes take several months depending on size, approvals, and material availability. We provide a detailed schedule before construction starts." },
  { q: "Do I need architectural drawings before construction begins?", a: "Yes. Architectural drawings are essential — they guide approvals, help estimate costs, and ensure accurate construction." },
  { q: "Can you help me design and build my house?", a: "Yes. We offer both architectural design and construction services, so clients work with one coordinated team from concept to handover." },
  { q: "What documents do I need before building?", a: "Most projects require proof of land ownership, architectural drawings, structural drawings, relevant approvals, and a cost estimate." },
  { q: "What is a Bill of Quantities (BOQ) and why is it important?", a: "A BOQ details the quantities and costs of all materials and labour. It helps control costs and compare contractor quotations accurately." },
  { q: "How do I estimate my construction budget?", a: "The most accurate method is professional architectural drawings and a detailed BOQ prepared by a Quantity Surveyor." },
  { q: "What is the difference between design and build?", a: "Design produces architectural and engineering plans. Construction follows once designs are approved and budgeting is complete." },
  { q: "Can I build without approved plans?", a: "No. Construction should only begin after obtaining required approvals from relevant authorities." },
  { q: "How do I choose the right construction company?", a: "Look for relevant experience, completed projects, transparent quotations, qualified professionals, and positive client references." },
  { q: "How much deposit is required before construction starts?", a: "The initial payment depends on project scope. We provide a clear payment schedule linked to construction milestones." },
  { q: "Can I build in phases?", a: "Yes. Many clients choose phased construction based on budget. Proper planning ensures future phases integrate cleanly with the original design." },
  { q: "Do you provide renovation services?", a: "Yes. We renovate residential and commercial properties including kitchens, bathrooms, offices, apartments, and full property upgrades." },
  { q: "What types of buildings do you construct?", a: "We construct family homes, apartments, commercial buildings, mixed-use developments, and industrial facilities." },
  { q: "Can you help if I already have architectural drawings?", a: "Yes. We review your drawings, prepare a quotation, and proceed with construction after confirming project requirements." },
  { q: "What if I don't have architectural drawings?", a: "Our design team can develop the architectural drawings you need before moving your project into construction." },
  { q: "Can you estimate my budget before I start?", a: "Yes. We provide professional cost estimates to help you understand the likely budget before committing to construction." },
  { q: "What factors affect construction costs?", a: "Location, soil conditions, building size, design complexity, structural requirements, finishing materials, labour costs, and timelines." },
  { q: "How do I get started?", a: "Complete our Project Assessment Form. Based on your answers, we'll determine whether you need design, a cost estimate, construction, or renovation support." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-[#FDFAF4] py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="gold-divider" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-600">FAQs</p>
            <div className="gold-divider" />
          </div>
          <h2 className="font-serif text-[2.2rem] font-bold text-coffee-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-[15px] text-coffee-500">
            Common questions about building, renovating, and budgeting for your project in Kenya.
          </p>
        </div>

        <div className="divide-y divide-brand-100 rounded-xl border border-brand-200 bg-white overflow-hidden">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className={`text-[14.5px] font-semibold ${isOpen ? "text-brand-600" : "text-coffee-800"}`}>
                    {item.q}
                  </span>
                  <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors ${isOpen ? "bg-brand-600 text-brand-50" : "bg-brand-50 text-brand-600"}`}>
                    {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="text-[14px] leading-relaxed text-coffee-500">{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
