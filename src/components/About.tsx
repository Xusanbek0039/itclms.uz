import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, Lightbulb, GraduationCap } from "lucide-react";

const aboutItems = [
  {
    icon: Target,
    title: "Maqsadimiz",
    description: "Zomin tumanida IT sohasini rivojlantirish va yoshlarni zamonaviy texnologiyalar bilan tanishtirish.",
  },
  {
    icon: Users,
    title: "Jamoamiz",
    description: "Tajribali mentorlar va IT mutaxassislari jamoasi bilan professional ta'lim beramiz.",
  },
  {
    icon: Lightbulb,
    title: "Innovatsiya",
    description: "Eng zamonaviy dasturlash tillari va texnologiyalarni o'rgatamiz.",
  },
  {
    icon: GraduationCap,
    title: "Sertifikat",
    description: "Kurslarni muvaffaqiyatli tamomlaganlar rasmiy sertifikat bilan taqdirlanadi.",
  },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Biz haqimizda
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            IT Park Zomin tuman filiali — bu yoshlarning texnologik salohiyatini oshirish va raqamli
            iqtisodiyotga hissa qo'shish uchun yaratilgan innovatsion markaz.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {aboutItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-display text-lg font-semibold text-card-foreground">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
