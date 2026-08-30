import { useEffect, useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Logo } from "../Logo";
import { Button } from "../ui/Button";

const NAV = [
  { label: "Deals", href: "#deals" },
  { label: "Categories", href: "#categories" },
  { label: "Stores", href: "#stores" },
  { label: "How It Works", href: "#how-it-works" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full border-b ${scrolled ? "border-slate-200" : "border-transparent"} bg-slate-50/80 backdrop-blur supports-[backdrop-filter]:bg-slate-50/70`}>
      <div className="section-pad">
        <div className="flex items-center justify-between gap-6">
          <Logo />

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button size="sm">
              <ShoppingBag className="h-4 w-4" />
              Find Deals
            </Button>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <nav
          id="mobile-menu"
          className={`${
            open ? "flex" : "hidden"
          } absolute inset-x-0 top-full border-b border-slate-200 bg-white px-4 pb-4 pt-2 shadow-soft-lg md:hidden`}
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-1">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-slate-100"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-slate-100 pt-3">
              <Button variant="ghost" className="w-full">
                Sign In
              </Button>
              <Button className="w-full">
                <ShoppingBag className="h-4 w-4" />
                Find Deals
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
