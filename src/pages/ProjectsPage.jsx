import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Maximize2 } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { projects } from "../data/projects";

const categories = ["All", ...new Set(projects.map((p) => p.category))];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const visible = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <PageHeader eyebrow="Our Work" title="Our Projects" description="Commercial, residential, and industrial projects delivered across Kenya with precision and care." />

      <section className="bg-[#FDFAF4] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 mb-9">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-5 py-2 text-[13.5px] font-medium transition-all ${activeCategory === cat ? "bg-brand-600 text-brand-50 shadow-sm" : "bg-white border border-brand-200 text-coffee-600 hover:border-brand-400"}`}>
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((p) => (
              <div key={p.slug} className="group flex flex-col overflow-hidden rounded-xl border border-brand-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-400 hover:shadow-lg">
                <div className="relative h-56 w-full overflow-hidden">
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  {p.status === "ongoing" && (
                    <div className="absolute top-3 left-3 rounded-full bg-brand-600 px-3 py-1 text-[11px] font-bold text-brand-50 uppercase tracking-wide">Ongoing</div>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[11.5px] font-semibold uppercase tracking-[0.15em] text-brand-600">{p.category}</p>
                  <h3 className="mt-1.5 font-serif text-[19px] font-bold text-coffee-900 leading-snug">{p.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-coffee-500 line-clamp-2">{p.description}</p>
                  <div className="mt-4 flex items-center gap-4 border-t border-brand-100 pt-4 text-[12.5px] text-coffee-400">
                    <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5 text-brand-500" />{p.location}</span>
                    <span className="flex items-center gap-1"><Maximize2 className="h-3.5 w-3.5 text-brand-500" />{p.size}</span>
                  </div>
                  <Link to={`/projects/${p.slug}`} className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-4 py-2.5 text-[13.5px] font-semibold text-brand-50 hover:bg-brand-700 transition-colors">
                    View Details <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {visible.length === 0 && <p className="mt-12 text-center text-[14px] text-coffee-400">No projects in this category yet.</p>}
        </div>
      </section>
    </>
  );
}
