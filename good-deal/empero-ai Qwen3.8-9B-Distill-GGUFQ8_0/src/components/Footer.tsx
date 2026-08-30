import {
  ShieldCheck,
  Lock,
  X,
  ExternalLink,
} from 'lucide-react';

const productLinks = [
  { name: 'Browse Deals', href: '/deals' },
  { name: 'Categories', href: '/categories' },
  { name: 'Stores', href: '/stores' },
  { name: 'Deal of the Day', href: '/deals' },
  { name: 'How It Works', href: '/how-it-works' },
];

const companyLinks = [
  { name: 'About Us', href: '#' },
  { name: 'Careers', href: '#' },
  { name: 'Blog', href: '#' },
  { name: 'Press', href: '#' },
  { name: 'Contact', href: '#' },
];

const resourceLinks = [
  { name: 'Help Center', href: '#' },
  { name: 'Privacy Policy', href: '#' },
  { name: 'Terms of Service', href: '#' },
  { name: 'Cookie Policy', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                G
              </div>
              <span className="font-bold text-xl text-white">GoodDeal</span>
            </div>
            <p className="text-sm text-slate-400 mb-6 max-w-xs">
              The smartest way to find and track the best deals across the internet.
            </p>
            <div className="flex items-center space-x-4 mb-6">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors"
                aria-label="X"
              >
                <X className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors"
                aria-label="LinkedIn"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors"
                aria-label="GitHub"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors"
                aria-label="Contact"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust badges */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-slate-400 text-sm">
                <ShieldCheck className="w-4 h-4" />
                <span>Secure & Verified</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-400 text-sm">
                <Lock className="w-4 h-4" />
                <span>256-bit Encryption</span>
              </div>
            </div>
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} GoodDeal. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
