import { CheckCircle2 } from "lucide-react";

export function Logo() {
  return (
    <a href="#top" className="inline-flex items-center gap-2.5 group" aria-label="Good Deal home">
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white shadow-neon transition-transform duration-300 group-hover:rotate-[8deg]">
        <CheckCircle2 className="h-5 w-5" strokeWidth={2.6} />
        <span className="absolute inset-0 rounded-xl ring-1 ring-white/30" />
      </span>
      <span className="text-xl font-extrabold tracking-tight text-slate-900">
        Good<span className="text-brand-600">Deal</span>
      </span>
    </a>
  );
}
