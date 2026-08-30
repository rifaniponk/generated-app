import { Search, TrendingUp, Zap, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-emerald-50/30 to-teal-50/20" />
      
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-medium mb-8">
            <Zap className="w-4 h-4" />
            <span>Deal of the Day ends in 4h 23m 15s</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
            Never Pay Full Price
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              Again.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Discover and track the best deals across 500+ stores. From electronics to travel,
            we find the prices you're actually willing to pay.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-10">
            <div className="relative group">
              <div className="absolute inset-0 bg-emerald-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-white rounded-2xl shadow-xl shadow-slate-200/50 overflow-hidden">
                <div className="flex items-center p-2">
                  <div className="pl-4 text-slate-400">
                    <Search className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search products, stores, or categories..."
                    className="flex-1 px-4 py-3.5 bg-transparent outline-none text-slate-900 placeholder:text-slate-400 text-base"
                  />
                  <button className="bg-slate-900 text-white px-6 py-2.5 rounded-xl font-medium hover:bg-slate-800 transition-colors">
                    Search
                  </button>
                </div>
                <div className="border-t border-slate-100">
                  <div className="flex items-center px-4 py-2 text-sm text-slate-500">
                    <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded text-xs font-medium mr-2">
                      🔥 127 deals active now
                    </span>
                    <span>• Top stores: Amazon, Best Buy, Target</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Value Props */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="flex items-start space-x-3 p-4 rounded-xl bg-white/60 backdrop-blur border border-slate-200/50">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Real-time alerts</p>
                <p className="text-sm text-slate-500">Instant notifications when prices drop</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-4 rounded-xl bg-white/60 backdrop-blur border border-slate-200/50">
              <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Verified deals</p>
                <p className="text-sm text-slate-500">We only track genuine discounts</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-4 rounded-xl bg-white/60 backdrop-blur border border-slate-200/50">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Lightning fast</p>
                <p className="text-sm text-slate-500">Deal of the day every single morning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
