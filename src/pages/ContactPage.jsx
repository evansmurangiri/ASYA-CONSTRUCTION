import { MapPin, Phone, Mail, Clock } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Contact from "../components/Contact";

const infoCards = [
  { icon: MapPin, title: "Office Address", lines: ["Mombasa Road", "Mombasa, Kenya"] },
  { icon: Phone, title: "Phone", lines: ["+254 700 000 000"] },
  { icon: Mail, title: "Email", lines: ["info@asyabuild.co.ke"] },
  { icon: Clock, title: "Office Hours", lines: ["Mon – Fri: 8:00 AM – 5:00 PM"] },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Get in Touch" title="Contact Us" description="Have a project in mind? Reach out and our team will get back to you within one business day." />

      <section className="bg-[#FDFAF4] py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {infoCards.map(({ icon: Icon, title, lines }) => (
              <div key={title} className="rounded-xl border border-brand-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-600">
                  <Icon className="h-5 w-5 text-brand-50" strokeWidth={1.8} />
                </div>
                <h3 className="mt-4 font-serif text-[15px] font-semibold text-coffee-900">{title}</h3>
                {lines.map((l) => <p key={l} className="text-[13.5px] text-coffee-400">{l}</p>)}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
