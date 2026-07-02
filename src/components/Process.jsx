const steps = [
  { number: 1, title: "Consultation", description: "We listen to your needs and understand your vision and goals." },
  { number: 2, title: "Planning", description: "Detailed architectural planning, budgeting, and scheduling." },
  { number: 3, title: "Construction", description: "Expert construction with quality and safety at the forefront." },
  { number: 4, title: "Quality Control", description: "Rigorous inspections to ensure every detail meets our standards." },
  { number: 5, title: "Handover", description: "On-time delivery and ongoing support after completion." },
];

export default function Process() {
  return (
    <section id="process" className="bg-coffee-900 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[320px_1fr] lg:items-center">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="gold-divider" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-400">Our Process</p>
            </div>
            <h2 className="font-serif text-[2rem] font-bold leading-tight text-brand-50">
              A Proven Process.
              <br />
              <span className="text-brand-400">Exceptional Results.</span>
            </h2>
            <p className="mt-4 text-[14.5px] leading-relaxed text-coffee-300">
              We follow a trusted process that ensures every project is delivered with quality, transparency, and efficiency.
            </p>
            <a
              href="#contact"
              className="btn-gold mt-6 inline-flex items-center rounded-md px-6 py-3 text-[14px] font-semibold tracking-wide"
            >
              Learn More About Our Process
            </a>
          </div>

          <div className="relative">
            <div className="hidden sm:block absolute left-6 right-6 top-6 h-px bg-gradient-to-r from-brand-700 via-brand-500 to-brand-700" />
            <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-5 sm:gap-x-4">
              {steps.map((step) => (
                <div key={step.number} className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 font-serif text-[16px] font-bold text-brand-50 shadow-lg shadow-brand-900/50">
                    {step.number}
                  </div>
                  <h3 className="mt-4 font-serif text-[14.5px] font-semibold text-brand-100">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 max-w-[140px] text-[12.5px] leading-relaxed text-coffee-400">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
