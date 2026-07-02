import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Maximize2 } from "lucide-react";
import { projects } from "../data/projects";

const featuredProjects = projects.filter((p) => p.featured);

export default function Projects() {
  return (
    <section id="projects" className="bg-[#FDFAF4] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="gold-divider" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-600">Our Work</p>
            </div>
            <h2 className="font-serif text-[2.2rem] font-bold text-coffee-900">Featured Projects</h2>
          </div>
          <Link to="/projects" className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand-600 hover:text-brand-700 transition-colors">
            View All Projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProjects.map((p) => (
            <div
              key={p.slug}
              className="group flex flex-col overflow-hidden rounded-xl border border-brand-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-brand-400"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {p.status === "ongoing" && (
                  <div className="absolute top-3 left-3 rounded-full bg-brand-600 px-3 py-1 text-[11px] font-bold text-brand-50 uppercase tracking-wide">
                    Ongoing
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-600">
                  {p.category}
                </p>
                <h3 className="mt-1.5 font-serif text-[17px] font-bold text-coffee-900 leading-snug">
                  {p.title}
                </h3>

                <div className="mt-3 flex items-center gap-4 text-[12.5px] text-coffee-400">
                  <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5 text-brand-500" />{p.location}</span>
                  <span className="flex items-center gap-1"><Maximize2 className="h-3.5 w-3.5 text-brand-500" />{p.size}</span>
                </div>

                <Link
                  to={`/projects/${p.slug}`}
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-4 py-2.5 text-[13px] font-semibold text-brand-50 transition-all hover:bg-brand-700 hover:shadow-md"
                >
                  View Details <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
