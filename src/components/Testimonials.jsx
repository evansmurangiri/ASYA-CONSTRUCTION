import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Asya Build delivered our development ahead of schedule and exceeded every expectation. True professionals who take great pride in their work.",
    name: "Ahmed Al-Rashid",
    title: "Property Developer, Mombasa",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    quote: "Their attention to detail and commitment to quality is unmatched. Mumtaz Heights is everything we envisioned and more.",
    name: "Fatuma Saidi",
    title: "Homeowner, Nyali",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    quote: "Asya Build is our go-to contractor for every project. Reliable, transparent, and results-driven. We trust them completely.",
    name: "James Mwenda",
    title: "Director, Coastal Investments",
    avatar: "https://i.pravatar.cc/150?img=33",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[280px_1fr] lg:items-start">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="gold-divider" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-600">
                Testimonials
              </p>
            </div>
            <h2 className="font-serif text-[2rem] font-bold leading-tight text-coffee-900">
              Trusted by Clients.
              <br />
              <span className="text-brand-600">Proven by Results.</span>
            </h2>
            <p className="mt-3 text-[14px] leading-relaxed text-coffee-500">
              What our clients say about working with Asya Build.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="flex flex-col rounded-xl border border-brand-200 bg-[#FDFAF4] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400 hover:shadow-md"
              >
                <Quote className="h-7 w-7 text-brand-300 mb-3" fill="currentColor" strokeWidth={0} />
                <p className="flex-1 text-[13.5px] leading-relaxed text-coffee-600 italic">
                  "{t.quote}"
                </p>
                <div className="mt-5 flex items-center gap-3 pt-4 border-t border-brand-100">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-10 w-10 rounded-full object-cover border-2 border-brand-300"
                  />
                  <div>
                    <div className="text-[13.5px] font-semibold text-coffee-900">{t.name}</div>
                    <div className="text-[12px] text-coffee-400">{t.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
