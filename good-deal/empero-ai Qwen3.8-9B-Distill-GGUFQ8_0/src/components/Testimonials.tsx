import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">
            Loved by Smart Shoppers
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Real people saving real money. See what our community has to say.
          </p>
        </div>

        {/* Testimonials - asymmetrical layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* First testimonial - full width on mobile */}
          <div className="md:col-span-2 group">
            <div className="bg-slate-50 rounded-2xl p-6 lg:p-8 border border-slate-100 hover:border-emerald-200 transition-colors">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < 5 ? 'text-amber-400 fill-amber-400' : 'text-slate-300'}`} />
                ))}
              </div>
              <blockquote className="text-lg text-slate-700 leading-relaxed mb-6">
                "I saved $342 last month alone by using Good Deal. The notifications are spot-on
                and the deals are genuinely legit. My favorite feature is how it shows exactly when
                a deal expires so I never miss out."
              </blockquote>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white font-bold text-sm">
                  SC
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Sarah Chen</div>
                  <div className="text-sm text-slate-500">Freelance Designer • San Francisco, CA</div>
                </div>
              </div>
            </div>
          </div>

          {/* Second testimonial */}
          <div className="group">
            <div className="bg-slate-900 rounded-2xl p-6 lg:p-8 border border-slate-800 hover:border-rose-500/50 transition-colors">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <blockquote className="text-lg text-slate-200 leading-relaxed mb-6">
                "As someone who buys tech gear weekly, this is an absolute lifesaver. I caught a 50%
                off deal on a monitor I had my eye on for months. The store verification gives me
                peace of mind too."
              </blockquote>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-400 to-orange-500 flex items-center justify-center text-white font-bold text-sm">
                  MJ
                </div>
                <div>
                  <div className="font-semibold text-white">Marcus Johnson</div>
                  <div className="text-sm text-slate-400">Tech Reviewer • Austin, TX</div>
                </div>
              </div>
            </div>
          </div>

          {/* Third testimonial - full width on mobile */}
          <div className="md:col-span-2 group">
            <div className="bg-slate-50 rounded-2xl p-6 lg:p-8 border border-slate-100 hover:border-emerald-200 transition-colors">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < 4 ? 'text-amber-400 fill-amber-400' : 'text-slate-300'}`} />
                ))}
                <Star className="w-4 h-4 text-amber-300 fill-amber-300" />
              </div>
              <blockquote className="text-lg text-slate-700 leading-relaxed mb-6">
                "I run a boutique and I track all my supplier pricing through Good Deal. It's helped
                me negotiate better rates with vendors because I can show them I've found competitive
                pricing elsewhere."
              </blockquote>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white font-bold text-sm">
                  ER
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Emily Rodriguez</div>
                  <div className="text-sm text-slate-500">Small Business Owner • Portland, OR</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
