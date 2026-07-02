import { Link } from "react-router-dom";

export default function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="bg-coffee-900 py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center gap-1.5 text-[13px] text-coffee-400">
          <Link to="/" className="hover:text-brand-400 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-coffee-200">{title}</span>
        </div>
        {eyebrow && (
          <div className="flex items-center gap-3 mt-5 mb-3">
            <div className="gold-divider" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-400">{eyebrow}</p>
          </div>
        )}
        <h1 className="font-serif text-[2.3rem] font-bold text-brand-50">{title}</h1>
        {description && <p className="mt-3 max-w-2xl text-[15px] text-coffee-300 leading-relaxed">{description}</p>}
      </div>
    </section>
  );
}
