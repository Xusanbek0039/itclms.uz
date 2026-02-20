import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Palette, Globe, Database, Smartphone, Shield } from "lucide-react";

const courses = [
  {
    icon: Code,
    title: "Dasturlash asoslari",
    description: "Python, JavaScript, C++ tillarida dasturlash. Algoritmlar va ma'lumotlar tuzilmasi.",
    duration: "6 oy",
  },
  {
    icon: Globe,
    title: "Web dasturlash",
    description: "HTML, CSS, React, Node.js texnologiyalari. Frontend va Backend dasturlash.",
    duration: "8 oy",
  },
  {
    icon: Palette,
    title: "Grafik dizayn",
    description: "Adobe Photoshop, Illustrator, Figma. UI/UX dizayn asoslari.",
    duration: "4 oy",
  },
  {
    icon: Smartphone,
    title: "Mobil dasturlash",
    description: "Android va iOS uchun mobil ilovalar yaratish. Flutter va React Native.",
    duration: "6 oy",
  },
  {
    icon: Database,
    title: "Ma'lumotlar bazasi",
    description: "SQL, PostgreSQL, MongoDB. Ma'lumotlarni boshqarish va tahlil qilish.",
    duration: "3 oy",
  },
  {
    icon: Shield,
    title: "Kiberxavfsizlik",
    description: "Axborot xavfsizligi asoslari, tarmoq himoyasi va zaifliklarni aniqlash.",
    duration: "4 oy",
  },
];

const Courses = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="courses" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Bizning kurslar
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Zamonaviy IT sohasining barcha yo'nalishlarida professional kurslar taqdim etamiz.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, i) => (
            <motion.article
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-xl"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="rounded-xl bg-primary/10 p-3 transition-colors group-hover:bg-primary/20">
                  <course.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  {course.duration}
                </span>
              </div>
              <h3 className="mb-2 font-display text-lg font-semibold text-card-foreground">{course.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{course.description}</p>
              <div className="mt-4">
                <a
                  href="https://itc-academy.uz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  Batafsil →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
