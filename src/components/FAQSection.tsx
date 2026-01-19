import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const faqData = {
  pt: [
    {
      question: "O que é o Bilingo?",
      answer: "Bilingo é um aplicativo de celular para aprendizado de línguas indígenas brasileiras. Desenvolvido com inteligência artificial generativa, permite que você pratique leitura, escrita, audição e fala em línguas ancestrais, tudo verificado por falantes nativos."
    },
    {
      question: "Quais línguas indígenas estão disponíveis?",
      answer: "O Bilingo está em constante expansão. Nossa plataforma de IA permite criar cursos rapidamente para diferentes línguas indígenas brasileiras. Entre em contato para saber quais línguas estão disponíveis ou para solicitar a inclusão de uma nova língua."
    },
    {
      question: "O aplicativo é gratuito?",
      answer: "Sim, o Bilingo foi desenvolvido como uma ferramenta educacional acessível para comunidades indígenas."
    },
    {
      question: "Como funciona o reconhecimento de voz?",
      answer: "Nosso sistema de reconhecimento de voz foi treinado especificamente para línguas indígenas, permitindo que você pratique a pronúncia correta e receba feedback instantâneo sobre sua fala."
    },
    {
      question: "Posso usar o app offline?",
      answer: "Algumas funcionalidades do Bilingo podem ser usadas offline após o download inicial do conteúdo. Isso é especialmente importante para comunidades em áreas com acesso limitado à internet."
    },
    {
      question: "Como posso contribuir com o projeto?",
      answer: "Existem várias formas de contribuir: você pode ser um falante nativo que ajuda a verificar conteúdo, um pesquisador interessado em colaborar, ou apoiar financeiramente o projeto. Entre em contato conosco para mais informações."
    },
  ],
  en: [
    {
      question: "What is Bilingo?",
      answer: "Bilingo is a mobile app for learning Brazilian indigenous languages. Developed with generative AI, it allows you to practice reading, writing, listening and speaking in ancestral languages, all verified by native speakers."
    },
    {
      question: "Which indigenous languages are available?",
      answer: "Bilingo is constantly expanding. Our AI platform allows us to quickly create courses for different Brazilian indigenous languages. Contact us to find out which languages are available or to request the inclusion of a new language."
    },
    {
      question: "Is the app free?",
      answer: "Yes, Bilingo was developed as an accessible educational tool for indigenous communities."
    },
    {
      question: "How does voice recognition work?",
      answer: "Our voice recognition system was specifically trained for indigenous languages, allowing you to practice correct pronunciation and receive instant feedback on your speech."
    },
    {
      question: "Can I use the app offline?",
      answer: "Some Bilingo features can be used offline after the initial content download. This is especially important for communities in areas with limited internet access."
    },
    {
      question: "How can I contribute to the project?",
      answer: "There are several ways to contribute: you can be a native speaker who helps verify content, a researcher interested in collaborating, or financially support the project. Contact us for more information."
    },
  ]
};

const FAQSection = () => {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs = faqData[language];
  const title = language === "pt" ? "Perguntas Frequentes" : "Frequently Asked Questions";
  const subtitle = language === "pt" 
    ? "Tire suas dúvidas sobre o Bilingo e o aprendizado de línguas indígenas"
    : "Get answers about Bilingo and indigenous language learning";
  const badge = language === "pt" ? "FAQ" : "FAQ";

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            {badge}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${
                  openIndex === index
                    ? "bg-card border-primary/20 shadow-card"
                    : "bg-card border-border hover:border-primary/10 shadow-soft hover:shadow-card"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display font-semibold text-lg pr-4">
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    openIndex === index ? "bg-primary text-primary-foreground" : "bg-muted"
                  }`}>
                    {openIndex === index ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </div>
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                    marginTop: openIndex === index ? 16 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
