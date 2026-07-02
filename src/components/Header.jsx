import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/logo.jpeg";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/#services" },
  { label: "Projects", to: "/projects" },
  { label: "Process", to: "/#process" },
  {
    label: "Resources",
    dropdown: [{ label: "Blog", to: "/blog" }],
  },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FAF6EE] border-b border-brand-200 shadow-sm">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-[76px] items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0 ml-4 lg:ml-8">
            <img
              src={logo}
              alt="Asya Build logo"
              className="h-14 w-auto object-contain rounded-lg"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setResourcesOpen(true)}
                  onMouseLeave={() => setResourcesOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => setResourcesOpen((v) => !v)}
                    className="flex items-center gap-1 py-2 text-[14px] font-medium text-coffee-700 hover:text-brand-600 transition-colors tracking-wide"
                  >
                    {link.label}
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform ${resourcesOpen ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`absolute left-0 top-full z-50 w-44 rounded-lg border border-brand-200 bg-[#FAF6EE] py-2 shadow-lg transition-all duration-150 ${resourcesOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0 pointer-events-none"}`}>
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        to={item.to}
                        onClick={() => setResourcesOpen(false)}
                        className="block px-4 py-2.5 text-[14px] font-medium text-coffee-700 hover:bg-brand-100 hover:text-brand-600 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-[14px] font-medium text-coffee-700 hover:text-brand-600 transition-colors tracking-wide"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block shrink-0">
            <Link
              to="/contact"
              className="btn-gold inline-flex items-center rounded-md px-5 py-2.5 text-[14px] font-semibold tracking-wide"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button className="lg:hidden text-coffee-700" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-brand-200 bg-[#FAF6EE] px-6 py-5">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label}>
                  <button
                    onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                    className="flex w-full items-center justify-between text-[15px] font-medium text-coffee-800"
                  >
                    {link.label}
                    <ChevronDown className={`h-4 w-4 transition-transform ${mobileResourcesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {mobileResourcesOpen && (
                    <div className="mt-3 flex flex-col gap-3 pl-4">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          to={item.to}
                          onClick={() => setOpen(false)}
                          className="text-[14px] font-medium text-coffee-600"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="text-[15px] font-medium text-coffee-800"
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn-gold mt-2 inline-flex justify-center rounded-md px-5 py-3 text-[14.5px] font-semibold"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}