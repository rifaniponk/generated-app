import { Star } from "lucide-react";
import { TESTIMONIALS } from "../../data/mockData";

export function Testimonials() {
  return (
    <section className="bg-slate-100/60">
      <div className="section-pad">
        <div className="container-narrow">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">Loved by shoppers</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Real people, real savings
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <figure
                key={t.id}
                className={`card relative flex.flex-col p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg ${
                  i === 1 ? "md:scale-[1.03] md:-my-4" : ""
                }`}
              >
                <blockquote className="text-slate-700 leading-relaxed">
                  <span className="sr-only">Testimonial from {t.name}</span>
                  “{t.quote}”
                </blockquote>

                <div className="mt-4 flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-full ${t.color} text-sm font-bold text-white`}
                  >
                    {t.initials}
                  </span>
                  <span className="leading-tight">
                    <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-400">{t.role} · {t.location}</p>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
