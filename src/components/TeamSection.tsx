import { motion } from "framer-motion";
import { ExternalLink, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const team = [
  {
    name: "Gustavo Padilha Polleti",
    institution: "USP",
    country: "Brasil",
    email: "gustavo.polleti@usp.br",
    doi: "https://www.linkedin.com/in/gustavo-polleti/",
  },
  {
    name: "Fabricio Ferraz Gerardi",
    institution: "Universität Tübingen",
    country: "Alemanha",
    doi: "https://www.linkedin.com/in/fabr%C3%ADcio-ferraz-gerardi-539258390/",
  },
  {
    name: "Fabio Gagliardi Cozman",
    institution: "USP",
    country: "Brasil",
    doi: "https://www.linkedin.com/in/fabio-cozman-15750432/",
  },
  // {
  //   name: "Rocco Nazzarelli",
  //   institution: "Politecnico di Milano",
  //   country: "Italia",
  // },
];

const TeamSection = () => {
  const { t } = useLanguage();

  return (
    <section id="team" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            {t.team.badge}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            {t.team.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.team.subtitle}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-card transition-all duration-300 group"
            >
              {/* Avatar placeholder */}
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <span className="font-display text-2xl font-bold text-primary">
                  {member.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                </span>
              </div>

              <h3 className="font-display font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                {member.doi && (
                    <a 
                      href={member.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-3 text-sm text-primary hover:underline"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      {member.name}
                    </a>
                  )}
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                {member.institution}
              </p>
              <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                <MapPin className="w-3 h-3" />
                {member.country}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
