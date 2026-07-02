import { useState, useMemo } from "react";
import { ChevronLeft, Phone, Building2, CheckCircle2 } from "lucide-react";
import { serviceForms } from "../data/serviceForms";

const PILL_STYLES = {
  green:  "bg-brand-600 hover:bg-brand-700 text-brand-50",
  yellow: "bg-brand-300 hover:bg-brand-400 text-coffee-900",
  red:    "bg-coffee-700 hover:bg-coffee-800 text-brand-50",
};

export default function ServiceFormModal({ formKey, onClose }) {
  const [activeFormKey, setActiveFormKey] = useState(formKey);
  const [stepIndex, setStepIndex] = useState(0);
  const [phase, setPhase] = useState("questions");
  const [contact, setContact] = useState({ fullName: "", mobile: "", email: "" });
  const [redirectNotice, setRedirectNotice] = useState(null);

  const form = serviceForms[activeFormKey];
  const steps = form.steps;
  const step = steps[stepIndex];
  const totalUnits = steps.length + 1;

  const progress = useMemo(() => {
    const position = phase === "questions" ? stepIndex : steps.length;
    return Math.round((position / totalUnits) * 100);
  }, [phase, stepIndex, steps.length, totalUnits]);

  function handleSelect(option) {
    if (option.redirectTo && option.redirectTo !== activeFormKey) {
      setRedirectNotice(serviceForms[option.redirectTo].formTitle);
      window.setTimeout(() => {
        setActiveFormKey(option.redirectTo);
        setStepIndex(0);
        setPhase("questions");
        setRedirectNotice(null);
      }, 700);
      return;
    }
    window.setTimeout(() => {
      if (stepIndex + 1 < steps.length) setStepIndex(stepIndex + 1);
      else setPhase("contact");
    }, 250);
  }

  function handleBack() {
    if (phase === "contact") { setStepIndex(steps.length - 1); setPhase("questions"); return; }
    if (stepIndex > 0) setStepIndex(stepIndex - 1);
    else onClose();
  }

  function handleContactSubmit(e) { e.preventDefault(); setPhase("done"); }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#FAF6EE]">
      <div className="mx-auto max-w-3xl px-6 pt-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-brand-600">
              <Building2 className="h-4 w-4 text-brand-50" strokeWidth={2} />
            </div>
            <span className="font-serif text-[18px] font-bold text-coffee-900">
              Asya <span className="text-brand-600">Build</span>
            </span>
          </div>
          <a href="tel:+254700000000" className="flex h-9 w-9 items-center justify-center rounded-full text-coffee-500 hover:text-brand-600">
            <Phone className="h-5 w-5" />
          </a>
        </div>

        {phase !== "done" && (
          <div className="mt-7 flex items-center gap-4">
            <button onClick={handleBack} className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-coffee-500 hover:bg-brand-100 transition-colors" aria-label="Back">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-brand-100">
              <div className="h-full rounded-full bg-gradient-to-r from-brand-600 to-brand-400 transition-all duration-300" style={{ width: `${progress}%` }} />
            </div>
          </div>
        )}
        {phase !== "done" && (
          <p className="mt-2 pl-12 text-[13px] font-medium text-coffee-400">{progress}%</p>
        )}
      </div>

      <div className="mx-auto max-w-3xl px-6 pb-20 pt-6">
        {redirectNotice ? (
          <div className="flex flex-col items-center gap-3 py-24 text-center">
            <CheckCircle2 className="h-10 w-10 text-brand-600" />
            <p className="font-serif text-[17px] font-medium text-coffee-700">Got it — redirecting you now.</p>
            <p className="text-[14px] text-coffee-400">Moving to the {redirectNotice}...</p>
          </div>
        ) : phase === "questions" ? (
          <QuestionStep key={`${activeFormKey}-${stepIndex}`} step={step} onSelect={handleSelect} />
        ) : phase === "contact" ? (
          <ContactStep contact={contact} setContact={setContact} onSubmit={handleContactSubmit} />
        ) : (
          <DoneStep formTitle={form.formTitle} onClose={onClose} />
        )}
      </div>
    </div>
  );
}

function QuestionStep({ step, onSelect }) {
  const [selected, setSelected] = useState(null);

  function choose(option) {
    setSelected(option.label);
    onSelect(option);
  }

  return (
    <div>
      <h2 className="font-serif text-[1.9rem] font-bold leading-tight text-coffee-900 sm:text-[2.1rem]">
        {step.question}
      </h2>
      <div className="mt-8 space-y-4">
        {step.type === "pills"
          ? step.options.map((option) => (
              <button
                key={option.label}
                onClick={() => choose(option)}
                className={`w-full rounded-xl px-6 py-5 text-left text-[17px] font-semibold transition-all ${PILL_STYLES[option.color]} ${selected === option.label ? "ring-2 ring-offset-2 ring-brand-400" : ""}`}
              >
                {option.label}
              </button>
            ))
          : step.options.map((option) => {
              const Icon = option.icon;
              const isSelected = selected === option.label;
              return (
                <button
                  key={option.label}
                  onClick={() => choose(option)}
                  className={`flex w-full items-center gap-4 rounded-xl border-2 px-6 py-5 text-left transition-all ${
                    isSelected
                      ? "border-brand-600 bg-brand-600 text-brand-50"
                      : "border-brand-200 bg-white text-coffee-800 hover:border-brand-400"
                  }`}
                >
                  {Icon && <Icon className={`h-6 w-6 shrink-0 ${isSelected ? "text-brand-50" : "text-brand-600"}`} strokeWidth={1.8} />}
                  <span className="text-[17px] font-semibold">{option.label}</span>
                </button>
              );
            })}
      </div>
    </div>
  );
}

function ContactStep({ contact, setContact, onSubmit }) {
  const inputClass = "w-full rounded-xl border-2 border-brand-200 bg-white px-5 py-4 text-[16px] text-coffee-800 placeholder:text-coffee-300 focus:border-brand-500 focus:outline-none";
  return (
    <div>
      <h2 className="font-serif text-[1.9rem] font-bold leading-tight text-coffee-900 sm:text-[2.1rem]">
        Almost done! Where should we send your personalised project assessment?
      </h2>
      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        <input required type="text" placeholder="Full Name" value={contact.fullName} onChange={(e) => setContact({ ...contact, fullName: e.target.value })} className={inputClass} />
        <input required type="tel" placeholder="Mobile Number" value={contact.mobile} onChange={(e) => setContact({ ...contact, mobile: e.target.value })} className={inputClass} />
        <input required type="email" placeholder="Email Address" value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} className={inputClass} />
        <button type="submit" className="btn-gold w-full rounded-xl px-6 py-4 text-[17px] font-semibold tracking-wide">
          Get My Assessment
        </button>
      </form>
    </div>
  );
}

function DoneStep({ formTitle, onClose }) {
  return (
    <div className="flex flex-col items-center gap-4 py-24 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-100">
        <CheckCircle2 className="h-9 w-9 text-brand-600" />
      </div>
      <h2 className="font-serif text-[1.6rem] font-bold text-coffee-900">Thank you — you're all set!</h2>
      <p className="max-w-sm text-[14.5px] text-coffee-500">
        We've received your {formTitle.toLowerCase()} details. Our team will review your answers and get back to you within 24 hours.
      </p>
      <button onClick={onClose} className="btn-gold mt-3 rounded-md px-6 py-2.5 text-[14.5px] font-semibold">
        Close
      </button>
    </div>
  );
}
