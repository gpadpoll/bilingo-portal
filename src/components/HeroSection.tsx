import { motion } from "framer-motion";
import { ChevronDown, Volume2, BookOpen, MessageSquare, Mic } from "lucide-react";
import heroPattern from "@/assets/hero-pattern.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToNext = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
  };

  const skillIcons = [BookOpen, MessageSquare, Volume2, Mic];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <img 
          src={heroPattern} 
          alt="" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/80" />
      </div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/10 blur-2xl"
        animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 right-20 w-32 h-32 rounded-full bg-secondary/15 blur-3xl"
        animate={{ y: [0, 20, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <span className="text-sm font-medium text-primary">{t.hero.badge}</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            {t.hero.title}{" "}
            <span className="text-gradient-hero">{t.hero.titleHighlight}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* Feature pills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {t.hero.skills.map((skill, i) => {
              const Icon = skillIcons[i];
              return (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-card shadow-card border border-border"
                >
                  <Icon className="w-4 h-4 text-primary" />
                  <span className="font-medium">{skill}</span>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA Button */}
          <motion.a
            href="mailto:gustavo.polleti@usp.br"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-cta text-primary-foreground font-semibold text-lg shadow-elevated hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            {t.hero.cta}
          </motion.a>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1, duration: 0.6 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full bg-card/50 border border-border backdrop-blur-sm hover:bg-card transition-colors"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </motion.button>
    </section>
  );
};

export default HeroSection;
