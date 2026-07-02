import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MapPin, Maximize2, BedDouble, Bath, Layers, Calendar, CheckCircle2, ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "../data/projects";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [activeImage, setActiveImage] = useState(0);

  if (!project) return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h1 className="font-serif text-[1.8rem] font-bold text-coffee-900">Project not found</h1>
        <Link to="/projects" className="btn-gold mt-6 inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-[14px] font-semibold">
          <ArrowLeft className="h-4 w-4" /> Back to Projects
        </Link>
      </div>
    </section>
  );

  const gallery = project.gallery?.length ? project.gallery : [project.image];
  const prev = () => setActiveImage((i) => (i === 0 ? gallery.length - 1 : i - 1));
  const next = () => setActiveImage((i) => (i === gallery.length - 1 ? 0 : i + 1));

  const quickFacts = [
    { icon: Maximize2, label: "Size", value: project.size },
    project.bedrooms && { icon: BedDouble, label: "Bedrooms", value: `${project.bedrooms} Bedrooms` },
    project.bathrooms && { icon: Bath, label: "Bathrooms", value: `${project.bathrooms} Bathrooms` },
    project.floors && { icon: Layers, label: "Floors", value: project.floors },
    project.completion && { icon: Calendar, label: "Completion", value: project.completion },
    { icon: MapPin, label: "Location", value: project.location },
  ].filter(Boolean);

  const related = projects.filter((p) => p.slug !== project.slug && p.category === project.category).slice(0, 3);

  return (
    <>
      {/* Breadcrumb */}
      <section className="bg-coffee-900 py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center gap-1.5 text-[13px] text-coffee-400">
            <Link to="/" className="hover:text-brand-400 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/projects" className="hover:text-brand-400 transition-colors">Projects</Link>
            <span>/</span>
            <span className="text-coffee-200">{project.title}</span>
          </div>
          <div className="flex items-center gap-3 mt-5 mb-2">
            <div className="gold-divider" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-400">{project.category}</p>
          </div>
          <h1 className="font-serif text-[2.2rem] font-bold text-brand-50">{project.title}</h1>
          <p className="mt-2 flex items-center gap-1.5 text-[14px] text-coffee-300">
            <MapPin className="h-4 w-4 text-brand-500" />{project.location}
          </p>
        </div>
      </section>

      {/* Gallery + Details */}
      <section className="bg-[#FDFAF4] py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">

            {/* Left: Gallery */}
            <div className="flex flex-col gap-4">
              <div className="relative overflow-hidden rounded-2xl bg-coffee-100 shadow-md">
                <img src={gallery[activeImage]} alt={`${project.title} — view ${activeImage + 1}`}
                  className="h-[300px] w-full object-cover sm:h-[380px] lg:h-[440px] transition-opacity duration-300" />
                <div className="absolute bottom-3 right-3 rounded-full bg-coffee-900/70 px-3 py-1 text-[12px] font-semibold text-brand-200">
                  {activeImage + 1} / {gallery.length}
                </div>
                {project.status === "ongoing" && (
                  <div className="absolute top-3 left-3 rounded-full bg-brand-600 px-3 py-1 text-[11px] font-bold text-brand-50 uppercase tracking-wide">Ongoing</div>
                )}
                {gallery.length > 1 && (
                  <>
                    <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-coffee-800 shadow hover:bg-white transition-colors" aria-label="Previous">
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-coffee-800 shadow hover:bg-white transition-colors" aria-label="Next">
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}
              </div>

              {gallery.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-hide">
                  {gallery.map((img, i) => (
                    <button key={i} onClick={() => setActiveImage(i)}
                      className={`shrink-0 h-20 w-28 overflow-hidden rounded-lg border-2 transition-all ${activeImage === i ? "border-brand-600 shadow-md" : "border-transparent opacity-60 hover:opacity-100"}`}>
                      <img src={img} alt={`Thumbnail ${i + 1}`} className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              <div className="mt-2">
                <h2 className="font-serif text-[1.3rem] font-bold text-coffee-900">About This Project</h2>
                <p className="mt-2 text-[14.5px] leading-relaxed text-coffee-500">{project.description}</p>
              </div>
            </div>

            {/* Right: Details */}
            <div className="flex flex-col gap-5">
              {/* Quick facts */}
              <div className="rounded-2xl border border-brand-200 bg-white p-6 shadow-sm">
                <h2 className="font-serif text-[1rem] font-bold uppercase tracking-wider text-coffee-700 mb-4">Property Details</h2>
                <div className="divide-y divide-brand-100">
                  {quickFacts.map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-center justify-between py-3">
                      <div className="flex items-center gap-2.5 text-[13.5px] text-coffee-400">
                        <Icon className="h-4 w-4 text-brand-600" strokeWidth={1.8} />{label}
                      </div>
                      <span className="text-[13.5px] font-semibold text-coffee-800">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              {project.features?.length > 0 && (
                <div className="rounded-2xl border border-brand-200 bg-white p-6 shadow-sm">
                  <h2 className="font-serif text-[1rem] font-bold uppercase tracking-wider text-coffee-700 mb-4">Features & Highlights</h2>
                  <ul className="space-y-2.5">
                    {project.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-[14px] text-coffee-600">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />{f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA */}
              <div className="rounded-2xl bg-coffee-900 p-6 border border-brand-700/30">
                <h3 className="font-serif text-[1.1rem] font-bold text-brand-50">Interested in a similar project?</h3>
                <p className="mt-1.5 text-[13.5px] text-coffee-300">Tell us about your project and we'll prepare a personalised quote within 24 hours.</p>
                <Link to="/contact" className="btn-gold mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-[14px] font-semibold tracking-wide">
                  Get a Quote <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/projects" className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-coffee-700 px-5 py-3 text-[14px] font-medium text-coffee-300 hover:bg-coffee-800 transition-colors">
                  <ArrowLeft className="h-4 w-4" /> Back to All Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="gold-divider" />
              <h2 className="font-serif text-[1.5rem] font-bold text-coffee-900">More {project.category}</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {related.map((r) => (
                <Link to={`/projects/${r.slug}`} key={r.slug} className="group overflow-hidden rounded-xl border border-brand-200 bg-[#FDFAF4] transition-all hover:-translate-y-1 hover:shadow-md">
                  <div className="h-44 overflow-hidden">
                    <img src={r.image} alt={r.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <p className="text-[11.5px] font-semibold uppercase tracking-[0.15em] text-brand-600">{r.category}</p>
                    <h3 className="mt-1 font-serif text-[15px] font-semibold text-coffee-900">{r.title}</h3>
                    <p className="mt-1 text-[12.5px] text-coffee-400">{r.size} • {r.location}</p>
                    <p className="mt-3 flex items-center gap-1 text-[13px] font-semibold text-brand-600">
                      View Details <ArrowRight className="h-3.5 w-3.5" />
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
