import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "500+", label: "O'quvchilar" },
  { value: "15+", label: "Kurslar" },
  { value: "10+", label: "Mentorlar" },
  { value: "95%", label: "Mamnunlik" },
];

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="stats" className="section-padding bg-hero-gradient" ref={ref}>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center"
            >
              <p className="mb-2 font-display text-4xl font-bold text-hero-text sm:text-5xl lg:text-6xl">
                {stat.value}
              </p>
              <p className="text-sm font-medium text-hero-text-muted sm:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
