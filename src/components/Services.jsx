import { Link } from "react-router-dom";
import { PencilRuler, HardHat, Hammer, Calculator, ArrowRight } from "lucide-react";

const services = [
  {
    icon: PencilRuler,
    slug: "design-and-build",
    title: "Design and Build",
    description:
      "Architectural planning and design-build solutions that turn your vision into a clear, buildable plan from day one.",
  },
  {
    icon: HardHat,
    slug: "construction",
    title: "Construction",
    description:
      "Full-service ground-up construction for commercial, residential, and industrial projects delivered with care.",
  },
  {
    icon: Hammer,
    slug: "renovation",
    title: "Renovation",
    description:
      "Transforming existing spaces with expert renovation and modern upgrades that fit how you live and work.",
  },
  {
    icon: Calculator,
    slug: "cost-estimate",
    title: "Cost Estimate",
    description:
      "Transparent, detailed cost estimates so you know exactly what to expect before breaking ground.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#FDFAF4] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="gold-divider" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-600">
              What We Do
            </p>
            <div className="gold-divider" />
          </div>
          <h2 className="font-serif text-[2.2rem] font-bold text-coffee-900">
            Comprehensive Construction Services
          </h2>
          <p className="mt-3 mx-auto max-w-xl text-[15px] text-coffee-600 leading-relaxed">
            From concept to completion, we deliver exceptional construction
            solutions tailored to your vision and built to exceed expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, slug, title, description }) => (
            <div
              key={title}
              className="group flex flex-col items-center rounded-xl border border-brand-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-400 hover:shadow-md"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 border border-brand-200 group-hover:bg-brand-600 transition-colors duration-300">
                <Icon className="h-6 w-6 text-brand-600 group-hover:text-brand-50 transition-colors duration-300" strokeWidth={1.8} />
              </div>
              <h3 className="mt-5 font-serif text-[18px] font-semibold text-coffee-900">
                {title}
              </h3>
              <p className="mt-2.5 text-[13.5px] leading-relaxed text-coffee-500">
                {description}
              </p>
              <Link
                to={`/services/${slug}`}
                className="mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-brand-600 group-hover:gap-2.5 transition-all"
              >
                Learn More
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
