import { Users, Tag, Store, Wallet } from "lucide-react";
import { METRICS } from "../../data/mockData";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  users: Users,
  deals: Tag,
  stores: Store,
  saved: Wallet,
};

export function TrustMetrics() {
  return (
    <section className="section-pad">
      <div className="container-narrow">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">Why Good Deal</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Numbers that back up the savings
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {METRICS.map((metric, i) => {
            const Icon = iconMap[metric.icon] ?? Tag;
            return (
              <div
                key={metric.label}
                className={`card group relative overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg ${
                  i === 2 ? "lg:translate-y-4" : ""
                }`}
              >
                <span
                  className="absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ backgroundColor: `${getMetricTint(metric.icon)}20` }}
                  aria-hidden="true"
                />
                <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white transition-transform duration-300 group-hover:rotate-[-6deg]">
                  <Icon className="h-6 w-6" />
                </span>
                <p className="relative mt-5 text-4xl font-extrabold tracking-tight text-slate-900 lg:text-5xl">
                  {metric.value}
                </p>
                <p className="relative mt-2 text-sm font-semibold text-slate-700">{metric.label}</p>
                <p className="relative mt-1 text-xs text-slate-400">{metric.hint}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function getMetricTint(icon: string): string {
  switch (icon) {
    case "users":
      return "#3b5bff";
    case "deals":
      return "#0ea5a0";
    case "stores":
      return "#e11982";
    case "saved":
      return "#f59e0b";
    default:
      return "#3b5bff";
  }
}
