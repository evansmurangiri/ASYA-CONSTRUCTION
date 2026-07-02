import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { servicesContent } from "../data/servicesContent";
import ServiceFormModal from "../components/ServiceFormModal";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const [formOpen, setFormOpen] = useState(false);
  const service = servicesContent.find((s) => s.slug === slug);

  if (!service) return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h1 className="font-serif text-[1.8rem] font-bold text-coffee-900">Service not found</h1>
        <Link to="/#services" className="btn-gold mt-6 inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-[14px] font-semibold">
          <ArrowLeft className="h-4 w-4" /> Back to Services
        </Link>
      </div>
    </section>
  );

  const Icon = service.icon;

  return (
    <>
      <section className="bg-coffee-900 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <div className="flex items-center justify-center gap-1.5 text-[13px] text-coffee-400 mb-4">
            <Link to="/" className="hover:text-brand-400 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/#services" className="hover:text-brand-400 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-coffee-200">{service.title}</span>
          </div>
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-600">
            <Icon className="h-7 w-7 text-brand-50" strokeWidth={1.8} />
          </div>
          <h1 className="mt-5 font-serif text-[2.2rem] font-bold text-brand-50 sm:text-[2.5rem]">{service.title}</h1>
          <p className="mt-2 text-[16px] font-medium text-brand-400">{service.tagline}</p>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-coffee-300">{service.description}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button onClick={() => setFormOpen(true)} className="btn-gold inline-flex items-center gap-2 rounded-md px-7 py-3.5 text-[14.5px] font-semibold tracking-wide">
              Start Your {service.title} Assessment <ArrowRight className="h-4 w-4" />
            </button>
            <Link to="/#services" className="inline-flex items-center rounded-md border border-coffee-600 px-7 py-3.5 text-[14.5px] font-semibold text-coffee-200 hover:bg-coffee-800 transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#FDFAF4] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {service.highlights.map(({ icon: HIcon, title, description }) => (
              <div key={title} className="group flex flex-col items-center rounded-xl border border-brand-200 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-brand-400 hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 group-hover:bg-brand-700 transition-colors">
                  <HIcon className="h-5.5 w-5.5 text-brand-50" strokeWidth={1.8} />
                </div>
                <h3 className="mt-4 font-serif text-[15.5px] font-semibold text-coffee-900">{title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-coffee-500">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-coffee-900 py-14">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="font-serif text-[1.7rem] font-bold text-brand-50">
            Ready to get started with {service.title.toLowerCase()}?
          </h2>
          <p className="mt-2 text-[14.5px] text-coffee-300">
            Answer a few quick questions and we'll prepare your personalised project assessment.
          </p>
          <button onClick={() => setFormOpen(true)} className="btn-gold mt-6 inline-flex items-center gap-2 rounded-md px-7 py-3.5 text-[14.5px] font-semibold tracking-wide">
            Start Your Assessment <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      {formOpen && <ServiceFormModal formKey={service.formKey} onClose={() => setFormOpen(false)} />}
    </>
  );
}
