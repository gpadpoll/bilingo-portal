import { motion } from "framer-motion";
import { Shield, Scale, Users, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ethicsData = {
  pt: {
    badge: "Compromisso Ético",
    title: "Ética e Respeito",
    subtitle: "Nossa pesquisa segue os mais altos padrões éticos para trabalho com comunidades indígenas",
    statement: `Esta pesquisa está em conformidade com as Resoluções nº 510/2016 e nº 466/2012 do Conselho Nacional de Saúde (CNS) do Brasil, respeitando os princípios éticos de autonomia, beneficência, não-maleficência e justiça. A pesquisa envolvendo povos indígenas segue os princípios do Consentimento Livre, Prévio e Informado (CLPI), conforme estabelecido pela Convenção nº 169 da Organização Internacional do Trabalho, bem como os direitos à autodeterminação, integridade cultural e controle sobre o conhecimento tradicional, conforme afirmado na Declaração das Nações Unidas sobre os Direitos dos Povos Indígenas (UNDRIP). O projeto considera tanto o consentimento individual quanto o coletivo, e adere aos princípios CARE para governança de dados, garantindo benefício coletivo, autoridade da comunidade sobre os dados e o uso ético de dados linguísticos e culturais produzidos.`,
    principles: [
      { icon: Shield, title: "Consentimento CLPI", description: "Consentimento Livre, Prévio e Informado" },
      { icon: Scale, title: "Conformidade Legal", description: "CNS 510/2016 e 466/2012" },
      { icon: Users, title: "Direitos Coletivos", description: "UNDRIP e OIT 169" },
      { icon: Heart, title: "Princípios CARE", description: "Governança ética de dados" },
    ],
  },
  en: {
    badge: "Ethical Commitment",
    title: "Ethics & Respect",
    subtitle: "Our research follows the highest ethical standards for working with indigenous communities",
    statement: `This research complies with Brazilian National Health Council (CNS) Resolutions No. 510/2016 and No. 466/2012, respecting the ethical principles of autonomy, beneficence, non-maleficence, and justice. Research involving Indigenous peoples follows the principles of Free, Prior and Informed Consent (FPIC), as established by the International Labour Organization's Convention No. 169, as well as the rights to self-determination, cultural integrity, and control over traditional knowledge, as affirmed in the United Nations Declaration on the Rights of Indigenous Peoples (UNDRIP). The project considers both individual and collective consent, and adheres to the CARE principles for data governance, ensuring collective benefit, community authority over data, and the ethical use of linguistic and cultural data produced.`,
    principles: [
      { icon: Shield, title: "FPIC Consent", description: "Free, Prior and Informed Consent" },
      { icon: Scale, title: "Legal Compliance", description: "CNS 510/2016 and 466/2012" },
      { icon: Users, title: "Collective Rights", description: "UNDRIP and ILO 169" },
      { icon: Heart, title: "CARE Principles", description: "Ethical data governance" },
    ],
  }
};

const EthicsSection = () => {
  const { language } = useLanguage();
  const data = ethicsData[language];

  return (
    <section id="ethics" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Shield className="w-4 h-4" />
            {data.badge}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            {data.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </motion.div>

        {/* Principles grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12"
        >
          {data.principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
              className="p-5 rounded-2xl bg-card border border-border shadow-soft text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <principle.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-sm mb-1">{principle.title}</h3>
              <p className="text-xs text-muted-foreground">{principle.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Full statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="p-8 rounded-3xl bg-card border border-border shadow-card">
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base text-justify">
              {data.statement}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EthicsSection;
