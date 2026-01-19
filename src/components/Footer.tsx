import { motion } from "framer-motion";
import { Heart, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-16 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Logo */}
          <h2 className="font-display text-4xl font-bold mb-4">Bilingo</h2>
          <p className="text-background/70 mb-8 max-w-md mx-auto">
            {t.footer.tagline}
          </p>

          {/* CTA */}
          <a
            href="mailto:gustavo.polleti@usp.br"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-background text-foreground font-semibold hover:bg-background/90 transition-colors mb-12"
          >
            <Mail className="w-4 h-4" />
            {t.footer.contact}
          </a>

          {/* Divider */}
          <div className="border-t border-background/10 pt-8">
            <p className="text-sm text-background/50 flex items-center justify-center gap-1">
              {t.footer.madeWith} <Heart className="w-4 h-4 text-secondary fill-secondary" /> {t.hero.badge.includes("Brasil") ? "no Brasil" : "in Brazil"}
            </p>
            <p className="text-xs text-background/40 mt-2">
              {t.footer.updated}
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
