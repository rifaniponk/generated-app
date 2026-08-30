import { Users, TrendingUp, Store, DollarSign } from 'lucide-react';

import { stats } from '../data';

export default function Stats() {
  return (
    <section className="py-16 bg-slate-900 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Millions Saved. Every. Day.
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Our community has saved over $2 million this year alone.
          </p>
        </div>

        {/* Stats grid - asymmetrical layout */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {/* Main featured stat - spans 2 cols on desktop */}
          <div className="col-span-2 lg:col-span-2 lg:row-span-2 relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/10 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-transparent rounded-full blur-2xl" />
              <DollarSign className="w-8 h-8 text-emerald-400 mb-4" />
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
                $2M+
              </div>
              <p className="text-slate-300 text-sm mb-1">saved by users</p>
              <p className="text-slate-400 text-xs">
                That's enough to fund over 15,000 average vacations
              </p>
            </div>
          </div>

          {/* Secondary stats */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 lg:p-6 flex flex-col items-center justify-center text-center">
            <Users className="w-6 h-6 text-emerald-400 mb-2" />
            <div className="text-2xl font-bold">{stats[0].value}</div>
            <div className="text-slate-400 text-xs">{stats[0].label}</div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 lg:p-6 flex flex-col items-center justify-center text-center">
            <TrendingUp className="w-6 h-6 text-teal-400 mb-2" />
            <div className="text-2xl font-bold">{stats[1].value}</div>
            <div className="text-slate-400 text-xs">{stats[1].label}</div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 lg:p-6 flex flex-col items-center justify-center text-center">
            <Store className="w-6 h-6 text-teal-400 mb-2" />
            <div className="text-2xl font-bold">{stats[2].value}</div>
            <div className="text-slate-400 text-xs">{stats[2].label}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
