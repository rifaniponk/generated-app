import { StoreLogo } from "./StoreLogo";
import { STORES } from "../data/mockData";

export function StoreLogos() {
  return (
    <section id="stores" className="bg-white">
      <div className="section-pad">
        <div className="container-narrow">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-lg">
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">Our partners</p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                One place for the stores you already love
              </h2>
            </div>
            <p className="text-sm text-slate-500">
              New partners added every week. Prices always verified before they land.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {STORES.map((store) => (
              <StoreLogo key={store.name} store={store} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
