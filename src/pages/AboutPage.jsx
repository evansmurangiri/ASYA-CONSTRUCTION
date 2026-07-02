import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Stats from "../components/Stats";
import WhyChooseUs from "../components/WhyChooseUs";

const ABOUT_IMG = "https://images.unsplash.com/photo-1609867271967-a82f85c48531?auto=format&fit=crop&w=1200&q=80";

const team = [
  { name: "David Mwangi", role: "Founder & CEO", avatar: "https://i.pravatar.cc/150?img=13" },
  { name: "Grace Achieng", role: "Lead Architect", avatar: "https://i.pravatar.cc/150?img=45" },
  { name: "Samuel Otieno", role: "Construction Manager", avatar: "https://i.pravatar.cc/150?img=51" },
  { name: "Linda Wanjiru", role: "Quantity Surveyor", avatar: "https://i.pravatar.cc/150?img=29" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About Asya Build" title="Building Spaces. Creating Futures." description="A full-service construction company delivering high-quality projects across Kenya with integrity and precision." />

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="overflow-hidden rounded-xl shadow-md">
            <img src={ABOUT_IMG} alt="Asya Build team on site" className="h-full w-full object-cover" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="gold-divider" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-600">Who We Are</p>
            </div>
            <h2 className="font-serif text-[2rem] font-bold leading-tight text-coffee-900">
              A Coordinated Team,<br />
              <span className="text-brand-600">From Design to Handover</span>
            </h2>
            <p className="mt-4 text-[14.5px] leading-relaxed text-coffee-500">
              Asya Build brings architects, quantity surveyors, and construction managers together under one roof. Whether you're starting from a blank site or renovating an existing space, we guide your project from the first sketch through to final handover.
            </p>
            <p className="mt-4 text-[14.5px] leading-relaxed text-coffee-500">
              Every project starts with a clear scope, a transparent cost estimate, and a realistic schedule — so there are no surprises once construction begins.
            </p>
            <Link to="/contact" className="btn-gold mt-7 inline-flex items-center gap-2 rounded-md px-6 py-3 text-[14.5px] font-semibold tracking-wide">
              Start Your Project <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Stats />
      <WhyChooseUs />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="gold-divider" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-600">Our Team</p>
              <div className="gold-divider" />
            </div>
            <h2 className="font-serif text-[2.2rem] font-bold text-coffee-900">Meet the People Behind the Projects</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="rounded-xl border border-brand-200 bg-[#FDFAF4] p-6 text-center transition-all hover:-translate-y-1 hover:shadow-md">
                <img src={member.avatar} alt={member.name} className="mx-auto h-20 w-20 rounded-full object-cover border-2 border-brand-300" />
                <h3 className="mt-4 font-serif text-[16px] font-semibold text-coffee-900">{member.name}</h3>
                <p className="text-[13px] text-coffee-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
