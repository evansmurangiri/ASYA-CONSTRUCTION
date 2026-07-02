import {
  Users, Workflow, MessageSquare, Calculator,
  ShieldCheck, Target, CalendarCheck,
} from "lucide-react";

const reasons = [
  { icon: Users, title: "Experienced Professionals", description: "Dedicated specialists with a proven track record in quality construction." },
  { icon: Workflow, title: "End-to-End Solutions", description: "Seamless delivery from design concept through to project handover." },
  { icon: MessageSquare, title: "Transparent Communication", description: "Clear project planning, honest updates, and open communication throughout." },
  { icon: Calculator, title: "Accurate Budgeting", description: "Professional quantity surveying keeps your project on budget." },
  { icon: ShieldCheck, title: "Quality Workmanship", description: "Premium materials and skilled craftsmen on every project." },
  { icon: Target, title: "Client-Focused Approach", description: "Every decision is guided by your goals and project requirements." },
  { icon: CalendarCheck, title: "On-Time Delivery", description: "Committed to delivering your project on schedule and within budget." },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="gold-divider" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-600">
              Why Choose Us
            </p>
            <div className="gold-divider" />
          </div>
          <h2 className="font-serif text-[2.2rem] font-bold text-coffee-900">
            Built On Trust. Backed By Experience.
          </h2>
          <p className="mt-3 mx-auto max-w-xl text-[15px] text-coffee-500 leading-relaxed">
            What sets Asya Build apart when it comes to delivering your project with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-xl border border-brand-100 bg-[#FDFAF4] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-600 group-hover:bg-brand-700 transition-colors">
                <Icon className="h-5 w-5 text-brand-50" strokeWidth={1.8} />
              </div>
              <h3 className="mt-4 font-serif text-[15.5px] font-semibold text-coffee-900">
                {title}
              </h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-coffee-500">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
