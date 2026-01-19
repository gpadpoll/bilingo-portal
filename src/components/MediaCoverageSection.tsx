import { motion } from "framer-motion";
import { ExternalLink, Newspaper, Play } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const mediaCoverage = [
  {
    outlet: "Deutsche Welle (DW) Brasil",
    title: '"Duolingo indígena" quer revitalizar idiomas nativos com IA',
    date: "03 de agosto de 2025",
    author: "Heloisa Traiano",
    featured: true,
    doi: "https://www.dw.com/pt-br/duolingo-ind%C3%ADgena-quer-revitalizar-idiomas-nativos-com-ia/a-73477669",
    // reproductions: ["Instagram", "Folha de São Paulo", "OBIND", "OPIERJ", "UOL", "ANAI", "ISTOÉ", "Jornal Nota"],
  },
  {
    outlet: "G1 Rondônia",
    title: "Bilingo: como pesquisadores e indígenas apostam na tecnologia para salvar línguas ancestrais ameaçadas em RO e MT",
    date: "26 de Outubro de 2025",
    author: "Raíssa Fontes",
    featured: true,
    doi: "https://g1.globo.com/ro/rondonia/noticia/2025/10/26/bilingo-como-pesquisadores-e-indigenas-apostam-na-tecnologia-para-salvar-linguas-ancestrais-ameacadas-em-ro-e-mt.ghtml",
  },
];

const MediaCoverageSection = () => {
  const { t } = useLanguage();

  return (
    <section id="media" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            <Newspaper className="w-4 h-4" />
            {t.media.badge}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            {t.media.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.media.subtitle}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {mediaCoverage.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative p-8 rounded-3xl border transition-all duration-300 group ${
                item.featured 
                  ? 'bg-gradient-to-br from-card to-muted/30 border-border shadow-elevated hover:shadow-2xl' 
                  : 'bg-card border-border shadow-soft hover:shadow-card'
              }`}
            >
              {/* Featured badge */}
              {item.featured && (
                <div className="absolute -top-3 left-8">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-cta text-primary-foreground text-xs font-semibold shadow-lg">
                    <Play className="w-3 h-3" />
                    {t.media.featured}
                  </span>
                </div>
              )}

              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Outlet logo placeholder */}
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Newspaper className="w-7 h-7 text-primary" />
                </div>

                <div className="flex-1">
                  {/* Outlet name */}
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="font-display font-semibold text-primary">
                      {item.outlet}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {item.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl md:text-2xl font-bold mb-3 leading-snug group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  {/* Author */}
                  <p className="text-sm text-muted-foreground mb-4">
                    {t.media.by} {item.author}
                  </p>
                  {item.doi && (
                    <a 
                      href={item.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-3 text-sm text-primary hover:underline"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      LINK
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaCoverageSection;
