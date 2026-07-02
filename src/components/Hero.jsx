import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HERO_IMG =
  "https://images.unsplash.com/photo-1684497404598-6e844dff9cde?auto=format&fit=crop&w=2069&q=80";

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="relative h-[520px] md:h-[580px] lg:h-[620px] w-full overflow-hidden">
        <img
          src={HERO_IMG}
          alt="Construction site at sunset with a tower crane"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-coffee-900/95 via-coffee-900/75 to-coffee-900/20" />

        <div className="relative z-10 mx-auto h-full max-w-7xl px-6 lg:px-8">
          <div className="flex h-full max-w-2xl flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <div className="gold-divider" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-400">
                Premium Construction · Built to Last
              </p>
            </div>

            <h1 className="font-serif text-[3rem] leading-[1.1] font-bold tracking-tight text-brand-50 md:text-[3.6rem]">
              Building Spaces.
              <br />
              <em className="not-italic text-brand-400">Creating Futures.</em>
            </h1>

            <p className="mt-5 max-w-lg text-[15.5px] leading-relaxed text-coffee-200">
              Asya Build is a full-service general construction company delivering
              high-quality commercial, residential, and industrial projects across
              Kenya with integrity and precision.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/#projects"
                className="btn-gold inline-flex items-center gap-2 rounded-md px-7 py-3.5 text-[14.5px] font-semibold tracking-wide"
              >
                View Our Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-md border border-brand-400/60 bg-transparent px-7 py-3.5 text-[14.5px] font-semibold text-brand-200 hover:bg-brand-600/20 transition-colors tracking-wide"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
