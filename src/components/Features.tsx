import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Wifi, Monitor, BookOpen, Coffee, Clock, Award } from "lucide-react";

const features = [
  { icon: Monitor, title: "Zamonaviy kompyuterlar", description: "Eng so'nggi texnik jihozlar bilan ta'minlangan sinf xonalari" },
  { icon: Wifi, title: "Yuqori tezlikdagi Internet", description: "Uzluksiz internet aloqasi va cloud xizmatlar" },
  { icon: BookOpen, title: "Amaliy mashg'ulotlar", description: "Nazariy bilimlarni amaliyotda qo'llash imkoniyati" },
  { icon: Coffee, title: "Qulay muhit", description: "Dam olish zonasi va co-working maydoni" },
  { icon: Clock, title: "Moslashuvchan jadval", description: "Ertalab, kunduzi va kechki vaqtda darslar" },
  { icon: Award, title: "Xalqaro standart", description: "Xalqaro standartlarga mos o'quv dasturlari" },
];

const Features = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Nega aynan biz?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            IT Park Zomin sizga eng yaxshi sharoitlarni taqdim etadi.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="shrink-0 rounded-lg bg-primary/10 p-3">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="mb-1 font-display font-semibold text-foreground">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
