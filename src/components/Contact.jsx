import { useState } from "react";
import { ArrowRight } from "lucide-react";

const CONTACT_IMG = "https://images.unsplash.com/photo-1609867271967-a82f85c48531?auto=format&fit=crop&w=1200&q=80";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(e) { e.preventDefault(); setSubmitted(true); }

  return (
    <section id="contact" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="h-64 lg:h-auto">
          <img src={CONTACT_IMG} alt="Asya Build team on site" className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col justify-center px-6 py-14 lg:px-14 bg-[#FDFAF4]">
          <div className="flex items-center gap-3 mb-3">
            <div className="gold-divider" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-600">Get in Touch</p>
          </div>
          <h2 className="font-serif text-[2rem] font-bold leading-tight text-coffee-900">
            Let's Build Something<br />
            <span className="text-brand-600">Great Together</span>
          </h2>
          <p className="mt-3 text-[14.5px] text-coffee-500">
            Have a project in mind? Let's discuss how Asya Build can bring your vision to life.
          </p>
          <form onSubmit={handleSubmit} className="mt-7 space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input type="text" required placeholder="Full Name"
                className="rounded-lg border border-brand-200 bg-white px-4 py-3 text-[14px] text-coffee-800 placeholder:text-coffee-300 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500" />
              <input type="email" required placeholder="Email Address"
                className="rounded-lg border border-brand-200 bg-white px-4 py-3 text-[14px] text-coffee-800 placeholder:text-coffee-300 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500" />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input type="tel" placeholder="Phone Number"
                className="rounded-lg border border-brand-200 bg-white px-4 py-3 text-[14px] text-coffee-800 placeholder:text-coffee-300 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500" />
              <input type="text" placeholder="Company (Optional)"
                className="rounded-lg border border-brand-200 bg-white px-4 py-3 text-[14px] text-coffee-800 placeholder:text-coffee-300 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500" />
            </div>
            <textarea rows={4} placeholder="Tell us about your project"
              className="w-full resize-none rounded-lg border border-brand-200 bg-white px-4 py-3 text-[14px] text-coffee-800 placeholder:text-coffee-300 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500" />
            <button type="submit" className="btn-gold inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-[14.5px] font-semibold tracking-wide">
              Send Message <ArrowRight className="h-4 w-4" />
            </button>
            {submitted && <p className="text-[13.5px] text-emerald-600 font-medium">Thank you — we'll be in touch within 24 hours.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
