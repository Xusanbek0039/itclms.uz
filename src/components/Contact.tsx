import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import SocialLinks from "./SocialLinks";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Biz bilan bog'laning
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Savollaringiz bormi? Biz bilan bog'laning yoki markazimizga tashrif buyuring.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="mb-6 font-display text-xl font-semibold text-card-foreground">Aloqa ma'lumotlari</h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-2.5">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Manzil</p>
                    <p className="text-sm text-muted-foreground">Zomin tumani, Jizzax viloyati, O'zbekiston</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-2.5">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Telefon</p>
                    <p className="text-sm text-muted-foreground">+998 XX XXX XX XX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-2.5">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">info@itclms.uz</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-2.5">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Ish vaqti</p>
                    <p className="text-sm text-muted-foreground">Dushanba - Shanba: 09:00 - 18:00</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="mb-4 text-sm text-muted-foreground">
                  <span className="font-medium text-card-foreground">Rahbar:</span> Husan Suyunov
                </p>
                <p className="mb-3 text-sm font-medium text-card-foreground">Ijtimoiy tarmoqlar:</p>
                <SocialLinks />
              </div>
            </div>

            <a
              href="https://itc-academy.uz"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-center font-semibold text-primary-foreground transition-all hover:opacity-90 glow-primary"
            >
              ITC Academy platformasiga o'tish
              <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Map embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="overflow-hidden rounded-2xl border border-border"
          >
            <iframe
              title="IT Park Zomin joylashuvi"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48815.42247395!2d68.3!3d39.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f524bcc8be01a39%3A0x4b4f2e16c1c10b65!2sZomin!5e0!3m2!1sen!2suz!4v1700000000000!5m2!1sen!2suz"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
