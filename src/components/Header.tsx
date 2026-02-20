import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Bosh sahifa", href: "#hero" },
  { label: "Biz haqimizda", href: "#about" },
  { label: "Kurslar", href: "#courses" },
  { label: "Afzalliklar", href: "#features" },
  { label: "Statistika", href: "#stats" },
  { label: "Aloqa", href: "#contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <a href="#hero" className="flex items-center gap-2" onClick={() => scrollTo("#hero")}>
          <Code2 className="h-8 w-8 text-primary" />
          <span className="font-display text-xl font-bold text-foreground">
            IT Park <span className="text-primary">Zomin</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </button>
          ))}
          <ThemeToggle />
          <a
            href="https://itc-academy.uz"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-hero-text transition-all hover:opacity-90 glow-primary"
          >
            Kirish
          </a>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu" className="p-2">
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border md:hidden"
          >
            <div className="container mx-auto flex flex-col gap-3 px-4 py-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="py-2 text-left text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="https://itc-academy.uz"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 rounded-lg bg-primary py-3 text-center text-sm font-semibold text-primary-foreground"
              >
                Kirish
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
