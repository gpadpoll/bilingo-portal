import { motion } from "framer-motion";
import { FileText, ExternalLink, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const publications = [
  {
    authors: "Gustavo Polleti",
    year: "2024",
    title: "Building a Language-Learning Game for Brazilian Indigenous Languages: A Case of Study",
    venue: "Proceedings of the 16th International Conference on Computational Processing of Portuguese - Vol. 2",
    pages: "18–22",
    location: "Santiago de Compostela, Galicia/Spain",
    publisher: "Association for Computational Linguistics (ACM)",
    doi: "https://aclanthology.org/2024.propor-2.5/",
  },
  {
    authors: "Gustavo Polleti, Fabio Cozman, and Fabrício Gerardi",
    year: "2024",
    title: "Unified Knowledge-Graph for Brazilian Indigenous Languages: An Educational Applications Perspective",
    venue: "Anais do XV Simpósio Brasileiro de Tecnologia da Informação e da Linguagem Humana",
    location: "Belém/PA, Brasil",
    publisher: "SBC, Porto Alegre, Brasil",
    doi: "https://doi.org/10.5753/stil.2024.245403",
  },
  {
    authors: "Gustavo Polleti, Fabio Cozman, and Fabrício Gerardi",
    year: "2025",
    title: "A Simple Audio and Text Collection-Annotation Tool Targeted to Brazilian Indigenous Language Native Speakers",
    venue: "Proceedings of the Third Workshop on Resources and Representations for Under-Resourced Languages and Domains (RESOURCEFUL-2025)",
    location: "Tallinn, Estonia",
    publisher: "University of Tartu Library",
    doi: "https://aclanthology.org/2025.resourceful-1.19/"
  },
];

const PublicationsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="publications" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Award className="w-4 h-4" />
            {t.publications.badge}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            {t.publications.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.publications.subtitle}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {publications.map((pub, index) => (
            <motion.article
              key={pub.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-card transition-all duration-300 group"
            >
              <div className="flex gap-4">
                <div className="hidden sm:flex flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-display font-semibold text-lg leading-snug group-hover:text-primary transition-colors">
                      {pub.title}
                    </h3>
                    <span className="flex-shrink-0 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                      {pub.year}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {pub.authors}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{pub.venue}</span>
                    {pub.pages && `, pp. ${pub.pages}`}. {pub.location}. {pub.publisher}.
                  </p>
                  {pub.doi && (
                    <a 
                      href={pub.doi}
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

export default PublicationsSection;
