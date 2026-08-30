import { Search, ArrowRight, DollarSign } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: 'Search',
      description:
        'Browse thousands of deals across 500+ partner stores. Use our smart filters to find exactly what you need.',
    },
    {
      icon: ArrowRight,
      title: 'Compare',
      description:
        'We automatically track price history and compare deals across stores so you never miss a better offer.',
    },
    {
      icon: DollarSign,
      title: 'Save',
      description:
        'Get instant notifications when prices drop, and track your savings with our personalized dashboard.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with asymmetrical layout */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-12">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              How Good Deal Works
            </h2>
            <p className="text-lg text-slate-600">
              Three simple steps to finding and locking in the best deals of your life.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex -space-x-3">
              {['JD', 'MK', 'SL', 'TP'].map((initials) => (
                <div
                  key={initials}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 border-2 border-white flex items-center justify-center text-sm font-medium text-slate-700"
                >
                  {initials}
                </div>
              ))}
            </div>
            <div className="text-sm text-slate-600">
              <span className="font-semibold text-slate-900">10K+</span> users this week
            </div>
          </div>
        </div>

        {/* Steps - horizontal layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative group"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              {/* Step number badge */}
              <div className="absolute -top-4 -left-2 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm z-10 group-hover:scale-110 transition-transform">
                {index + 1}
              </div>

              {/* Card */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all duration-300">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <step.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-emerald-200 to-transparent z-0" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-12 p-6 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl text-white text-center">
          <h3 className="text-xl font-bold mb-2">Ready to start saving?</h3>
          <p className="text-emerald-100 text-sm mb-4">Join 50,000+ smart shoppers who deal smarter.</p>
          <button className="bg-white text-emerald-600 px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-emerald-50 transition-colors">
            Get Started Free
          </button>
        </div>
      </div>
    </section>
  );
}
