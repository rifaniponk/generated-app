import { useState } from "react";
import { Bell, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";
import { Button } from "../ui/Button";
import { useNewsletter } from "../../hooks/useNewsletter";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const { status, message, submit, reset } = useNewsletter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!submit(email)) return;
    if (status === "success") reset();
  }

  return (
    <section className="section-pad">
      <div className="container-narrow">
        <div className="card relative overflow-hidden bg-slate-900 px-6 py-12 sm:px-12 sm:py-16">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-600/30 blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl" aria-hidden="true" />

          <div className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-brand-200">
                <Bell className="h-3.5 w-3.5" /> Deal alerts, delivered
              </span>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Be the first to know when prices drop
              </h2>
              <p className="mt-4 max-w-md text-slate-300">
                Drop your email and we'll alert you the moment a deal hits your favorites or a
                product you searched for goes on sale. No spam, unsubscribe anytime.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="relative rounded-2xl bg-white p-2 shadow-soft-lg"
              noValidate
            >
              <div className="flex flex-col gap-2 sm:flex-row">
                <label htmlFor="nl-email" className="sr-only">Email address</label>
                <input
                  id="nl-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") reset();
                  }}
                  placeholder="you@email.com"
                  className="min-w-0 flex-1 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
                />
                <Button type="submit" size="lg" className="sm:w-auto">
                  <Sparkles className="h-4 w-4" /> Get alerts
                </Button>
              </div>

              {status === "success" && (
                <div className="flex items-start gap-2 rounded-lg bg-emerald-50 px-3 py-2.5 text-sm text-emerald-700" role="status">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                  <p>{message}</p>
                </div>
              )}

              {status === "error" && (
                <div className="flex items-start gap-2 rounded-lg bg-rose-50 px-3 py-2.5 text-sm text-rose-700" role="alert">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  <p>{message}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
