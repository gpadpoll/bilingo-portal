import { createContext, useContext, useState, ReactNode } from "react";

type Language = "pt" | "en";

interface Translations {
  nav: {
    exercises: string;
    about: string;
    publications: string;
    media: string;
    team: string;
    contact: string;
  };
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    skills: string[];
    cta: string;
  };
  exercises: {
    badge: string;
    title: string;
    subtitle: string;
    types: {
      speech: { title: string; description: string };
      morpheme: { title: string; description: string };
      translate: { title: string; description: string };
    };
  };
  about: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    verified: string;
    madeIn: string;
    features: { title: string; description: string }[];
  };
  publications: {
    badge: string;
    title: string;
    subtitle: string;
  };
  media: {
    badge: string;
    title: string;
    subtitle: string;
    featured: string;
    reproduced: string;
    by: string;
  };
  team: {
    badge: string;
    title: string;
    subtitle: string;
    contact: string;
  };
  footer: {
    tagline: string;
    contact: string;
    madeWith: string;
    updated: string;
  };
}

const translations: Record<Language, Translations> = {
  pt: {
    nav: {
      exercises: "Exercícios",
      about: "Sobre",
      publications: "Publicações",
      media: "Mídia",
      team: "Equipe",
      contact: "Contato",
    },
    hero: {
      badge: "🇧🇷 Feito no Brasil",
      title: "Aprenda sua",
      titleHighlight: "língua ancestral",
      subtitle: "Aplicativo de celular para aprendizado de línguas indígenas brasileiras. Pratique em casa com sua família.",
      skills: ["Leia", "Escreva", "Ouça", "Fale"],
      cta: "Entre em contato",
    },
    exercises: {
      badge: "Tipos de Exercícios",
      title: "Fonte ilimitada de exercícios",
      subtitle: "Pratique a língua você mesmo, verificado por falantes nativos",
      types: {
        speech: {
          title: "Exercício de Fala",
          description: "Pratique a pronúncia correta com reconhecimento de voz. Fale as palavras na língua indígena e receba feedback instantâneo.",
        },
        morpheme: {
          title: "Morfemas",
          description: "Aprenda a estrutura da língua conectando partes das palavras. Entenda como morfemas se combinam para formar significados.",
        },
        translate: {
          title: "Traduza Frases",
          description: "Desenvolva fluência traduzindo frases entre português e a língua indígena. Expanda seu vocabulário contexto a contexto.",
        },
      },
    },
    about: {
      badge: "Sobre o Projeto",
      title: "Barato, rápido e",
      titleHighlight: "verificado",
      description: "Bilingo é um aplicativo inovador que usa inteligência artificial generativa para criar cursos de línguas indígenas brasileiras. Desenvolvido em parceria com comunidades indígenas, linguistas e engenheiros, o app oferece uma forma acessível e engajante de preservar e revitalizar idiomas ancestrais.",
      verified: "Verificado por falantes nativos",
      madeIn: "Feito no Brasil",
      features: [
        { title: "Geração por IA", description: "Nossa plataforma de IA permite que cursos sejam criados em semanas com baixo custo" },
        { title: "Esforço Conjunto", description: "Desenvolvido por engenheiros, linguistas e comunidades indígenas" },
        { title: "Rápido e Cativante", description: "Mecânicas que reforçam hábitos e guiam uma jornada de aprendizado única" },
        { title: "Rede em Expansão", description: "Geração escalável de curso de idiomas com nossa plataforma de IA" },
      ],
    },
    publications: {
      badge: "Publicações Acadêmicas",
      title: "Pesquisa e Inovação",
      subtitle: "Nosso trabalho é fundamentado em pesquisa científica rigorosa e publicações em conferências internacionais",
    },
    media: {
      badge: "Na Mídia",
      title: "Cobertura na Mídia",
      subtitle: "O projeto Bilingo tem recebido atenção de veículos de comunicação nacionais e internacionais",
      featured: "Destaque",
      reproduced: "Reproduzido em:",
      by: "Por",
    },
    team: {
      badge: "Equipe",
      title: "Quem está por trás",
      subtitle: "Uma equipe internacional de pesquisadores dedicados à preservação de línguas indígenas",
      contact: "Contato",
    },
    footer: {
      tagline: "Aprenda sua língua ancestral. Pratique em casa com sua família.",
      contact: "Entre em contato",
      madeWith: "Feito com",
      updated: "Atualizado em Novembro de 2025, São Paulo, Brasil",
    },
  },
  en: {
    nav: {
      exercises: "Exercises",
      about: "About",
      publications: "Publications",
      media: "Media",
      team: "Team",
      contact: "Contact",
    },
    hero: {
      badge: "🇧🇷 Made in Brazil",
      title: "Learn your",
      titleHighlight: "ancestral language",
      subtitle: "Mobile app for learning Brazilian indigenous languages. Practice at home with your family.",
      skills: ["Read", "Write", "Listen", "Speak"],
      cta: "Get in touch",
    },
    exercises: {
      badge: "Exercise Types",
      title: "Unlimited source of exercises",
      subtitle: "Practice the language yourself, verified by native speakers",
      types: {
        speech: {
          title: "Speech Exercise",
          description: "Practice correct pronunciation with voice recognition. Speak the words in the indigenous language and receive instant feedback.",
        },
        morpheme: {
          title: "Morphemes",
          description: "Learn the structure of the language by connecting word parts. Understand how morphemes combine to form meanings.",
        },
        translate: {
          title: "Translate Sentences",
          description: "Develop fluency by translating sentences between Portuguese and the indigenous language. Expand your vocabulary context by context.",
        },
      },
    },
    about: {
      badge: "About the Project",
      title: "Affordable, fast and",
      titleHighlight: "verified",
      description: "Bilingo is an innovative app that uses generative AI to create courses for Brazilian indigenous languages. Developed in partnership with indigenous communities, linguists and engineers, the app offers an accessible and engaging way to preserve and revitalize ancestral languages.",
      verified: "Verified by native speakers",
      madeIn: "Made in Brazil",
      features: [
        { title: "AI Generation", description: "Our AI platform allows courses to be created in weeks at low cost" },
        { title: "Joint Effort", description: "Developed by engineers, linguists and indigenous communities" },
        { title: "Fast & Engaging", description: "Mechanics that reinforce habits and guide a unique learning journey" },
        { title: "Expanding Network", description: "Scalable language course generation with our AI platform" },
      ],
    },
    publications: {
      badge: "Academic Publications",
      title: "Research & Innovation",
      subtitle: "Our work is grounded in rigorous scientific research and publications at international conferences",
    },
    media: {
      badge: "In the Media",
      title: "Media Coverage",
      subtitle: "The Bilingo project has received attention from national and international media outlets",
      featured: "Featured",
      reproduced: "Reproduced in:",
      by: "By",
    },
    team: {
      badge: "Team",
      title: "Who's behind it",
      subtitle: "An international team of researchers dedicated to preserving indigenous languages",
      contact: "Contact",
    },
    footer: {
      tagline: "Learn your ancestral language. Practice at home with your family.",
      contact: "Get in touch",
      madeWith: "Made with",
      updated: "Updated November 2025, São Paulo, Brazil",
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("pt");

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
