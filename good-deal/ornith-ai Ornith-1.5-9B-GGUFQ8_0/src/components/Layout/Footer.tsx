import { Github, Linkedin, Twitter, Youtube } from "lucide-react";
import { Logo } from "../Logo";

const PRODUCT = [
  { label: "Deals", href: "#deals" },
  { label: "Categories", href: "#categories" },
  { label: "Deal of the Day", href: "#deal-of-the-day" },
  { label: "Price alerts", href: "#newsletter" },
];

const COMPANY = [
  { label: "About", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Press", href: "#" },
  { label: "Contact", href: "#" },
];

const RESOURCES = [
  { label: "How it works", href: "#how-it-works" },
  { label: "For stores", href: "#" },
  { label: "Help center", href: "#" },
  { label: "Privacy", href: "#" },
];

const SOCIAL = [
  { icon: Twitter, href: "#", label: "Follow us on Twitter" },
  { icon: Linkedin, href: "#", label: "Connect on LinkedIn" },
  { icon: Youtube, href: "#", label: "Watch on YouTube" },
  { icon: Github, href: "#", label: "View on GitHub" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="section-pad">
        <div className="container-narrow">
          <div className="grid gap-12 lg:grid-cols-6">
            <div className="lg:col-span-2">
              <Logo />
              <p className="mt-4 max-w-sm text-sm text-slate-500">
                The smarter way to shop online. Discover, compare, and save on the best deals
                across hundreds of stores.
              </p>
              <div className="mt-6 flex gap-2">
                {SOCIAL.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-colors hover:bg-slate-900 hover:text-white"
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-4">
              <div>
                <h3 className="text-sm font-semibold text-slate-900">Product</h3>
                <ul className="mt-4 space-y-3">
                  {PRODUCT.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-sm text-slate-500 transition-colors hover:text-slate-900">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">Company</h3>
                <ul className="mt-4 space-y-3">
                  {COMPANY.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-sm text-slate-500 transition-colors hover:text-slate-900">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">Resources</h3>
                <ul className="mt-4 space-y-3">
                  {RESOURCES.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-sm text-slate-500 transition-colors hover:text-slate-900">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-8 sm:flex-row">
            <p className="text-xs text-slate-400">
              © {new Date().getFullYear()} GoodDeal, Inc. This is a demo product — all store names are fictional.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-xs text-slate-400 transition-colors hover:text-slate-700">
                Privacy policy
              </a>
              <a href="#" className="text-xs text-slate-400 transition-colors hover:text-slate-700">
                Terms of service
              </a>
              <a href="#" className="text-xs text-slate-400 transition-colors hover:text-slate-700">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
