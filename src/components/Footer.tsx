import { Code2 } from "lucide-react";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-2">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="font-display text-lg font-bold text-card-foreground">
              IT Park <span className="text-primary">Zomin</span>
            </span>
          </div>

          <p className="max-w-md text-sm text-muted-foreground">
            IT Park Zomin tuman filiali — Axborot texnologiyalari bo'yicha ta'lim markazi.
            Zomin, Jizzax viloyati, O'zbekiston.
          </p>

          <SocialLinks />

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#about" className="text-muted-foreground transition-colors hover:text-primary">Biz haqimizda</a>
            <a href="#courses" className="text-muted-foreground transition-colors hover:text-primary">Kurslar</a>
            <a href="#contact" className="text-muted-foreground transition-colors hover:text-primary">Aloqa</a>
            <a href="https://itc-academy.uz" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
              ITC Academy
            </a>
          </div>

          <div className="w-full border-t border-border pt-6">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} IT Park Zomin. Barcha huquqlar himoyalangan. | itclms.uz
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
