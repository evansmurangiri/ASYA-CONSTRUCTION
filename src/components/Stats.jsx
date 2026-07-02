import { HardHat, Building2, Banknote } from "lucide-react";

const stats = [
  { icon: HardHat, value: "5 Years", label: "Experience" },
  { icon: Building2, value: "10", label: "Projects Completed" },
  { icon: Banknote, value: "KSh 8B", label: "Built" },
];

export default function Stats() {
  return (
    <section className="bg-coffee-900 py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {stats.map(({ icon: Icon, value, label }, i) => (
            <div key={label} className="flex flex-col items-center text-center">
              {i > 0 && (
                <div className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 h-12 w-px bg-coffee-700" />
              )}
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-600/20 border border-brand-500/30">
                <Icon className="h-5 w-5 text-brand-400" strokeWidth={1.8} />
              </div>
              <div className="mt-3 font-serif text-[2.2rem] font-bold text-brand-300 leading-tight">
                {value}
              </div>
              <div className="text-[13px] font-medium tracking-wide text-coffee-400 uppercase">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
