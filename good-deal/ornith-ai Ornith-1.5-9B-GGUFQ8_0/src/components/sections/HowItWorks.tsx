import { Gift, Search, Zap } from "lucide-react";
import { STEPS } from "../../data/mockData";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Search,
  Gift,
  Zap,
};

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-pad">
      <div className="container-narrow">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">How it works</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            From search to savings in three steps
          </h2>
          <p className="mt-3 text-slate-600">
            No signup required to start saving. Good Deal does the heavy lifting so you
            only ever pay the smart price.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-8 hidden lg:block" aria-hidden="true">
            <div className="mx-4 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {STEPS.map((step) => {
              const Icon = iconMap[step.icon] ?? Search;
              return (
                <div key={step.order} className="relative flex flex-col">
                  <div
                    className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-soft-lg transition-transform duration-300 group-hover:-rotate-6"
                    style={{ backgroundColor: step.accent }}
                  >
                    <Icon className="h-7 w-7" strokeWidth={1.7} />
                    <span
                      className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white"
                    >
                      {step.order}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
