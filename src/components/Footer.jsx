import { Link } from "react-router-dom";
import { Building2, MapPin, Phone, Mail, Clock } from "lucide-react";

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.45 2.91h-2.33V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
    </svg>
  );
}
function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.27 2.38 4.27 5.48v6.26ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}
function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const quickLinks = [
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/#services" },
  { label: "Projects", to: "/projects" },
  { label: "Our Process", to: "/#process" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];
const serviceLinks = [
  { label: "Design and Build", to: "/services/design-and-build" },
  { label: "Construction", to: "/services/construction" },
  { label: "Renovation", to: "/services/renovation" },
  { label: "Cost Estimate", to: "/services/cost-estimate" },
];
const resourceLinks = [
  { label: "Project Gallery", to: "/projects" },
  { label: "FAQs", to: "/#faq" },
  { label: "News & Insights", to: "/blog" },
  { label: "Get a Quote", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-coffee-900 text-coffee-200">
      {/* Gold top border */}
      <div className="h-1 w-full bg-gradient-to-r from-brand-700 via-brand-400 to-brand-700" />

      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-brand-600">
                <Building2 className="h-4.5 w-4.5 text-brand-50" strokeWidth={2} />
              </div>
              <span className="font-serif text-[18px] font-bold text-brand-50 tracking-tight">
                Asya <span className="text-brand-400">Build</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-[13.5px] leading-relaxed text-coffee-300">
              Asya Build is a premier construction company committed to quality, integrity, and exceptional delivery across Kenya.
            </p>
            <div className="mt-5 flex gap-3">
              {[FacebookIcon, LinkedinIcon, InstagramIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-coffee-700 text-coffee-300 hover:border-brand-500 hover:bg-brand-600 hover:text-brand-50 transition-all"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-[14px] font-semibold text-brand-300 tracking-wider uppercase">Quick Links</h4>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-[13.5px] text-coffee-300 hover:text-brand-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-[14px] font-semibold text-brand-300 tracking-wider uppercase">Services</h4>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-[13.5px] text-coffee-300 hover:text-brand-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-serif text-[14px] font-semibold text-brand-300 tracking-wider uppercase">Resources</h4>
            <ul className="mt-4 space-y-2.5">
              {resourceLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-[13.5px] text-coffee-300 hover:text-brand-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-serif text-[14px] font-semibold text-brand-300 tracking-wider uppercase">Contact Us</h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                <span className="text-[13px] text-coffee-300">Mombasa Road, Mombasa, Kenya</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-brand-500" />
                <span className="text-[13px] text-coffee-300">+254 736681362</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-brand-500" />
                <span className="text-[13px] text-coffee-300">info@asyabuild.co.ke</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                <span className="text-[13px] text-coffee-300">Mon – Fri: 8:00 AM – 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-coffee-800 pt-6 text-center text-[12.5px] text-coffee-500">
          © {new Date().getFullYear()} Asya Consult Construction. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
