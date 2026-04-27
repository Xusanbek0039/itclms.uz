import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden" aria-label="IT Park Zomin asosiy sahifa">
      <div className="absolute inset-0">
        <img src={heroBg} alt="IT Park Zomin binosi" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-gradient opacity-80" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 pt-20">
        <div className="max-w-3xl">
          <header>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-hero-text backdrop-blur-sm"
              role="banner"
            >
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              IT Shaharchasi — Zomin tumani
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-6 font-display text-4xl font-bold leading-tight text-hero-text sm:text-5xl lg:text-7xl"
              role="heading"
              aria-level={1}
            >
              Kelajakni birga{" "}
              <span className="text-gradient">quramiz</span>
            </motion.h1>
          </header>

          <main>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-8 max-w-xl text-lg leading-relaxed text-hero-text-muted sm:text-xl"
              role="doc-introduction"
            >
              IT Park Zomin tuman filiali — zamonaviy texnologiyalar, dasturlash va IT sohasida
              professional kadrlar tayyorlash markazi. Biz bilan raqamli kelajakka qadam qo'ying!
            </motion.p>

            <nav aria-label="Asosiy harakatlar">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap gap-4"
                role="navigation"
              >
                <a
                  href="https://itc-academy.uz/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-hero-text transition-all hover:opacity-90 glow-primary"
                  aria-label="IT Park Zomin arizasiga kirish"
                >
                  Kirish
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </a>
                <button
                  onClick={() => document.querySelector("#courses")?.scrollIntoView({ behavior: "smooth" })}
                  className="inline-flex items-center gap-2 rounded-xl border border-hero-text/30 px-8 py-4 text-lg font-semibold text-hero-text backdrop-blur-sm transition-all hover:bg-hero-text/10"
                  aria-label="Kurslar bo'limiga o'tish"
                >
                  Kurslarni ko'rish
                </button>
              </motion.div>
            </nav>
          </main>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="h-10 w-6 rounded-full border-2 border-hero-text/40 flex items-start justify-center p-1.5">
          <div className="h-2 w-1 rounded-full bg-hero-text/60" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
