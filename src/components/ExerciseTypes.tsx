import { motion } from "framer-motion";
import { Mic, Puzzle, Languages } from "lucide-react";
import speechExercise from "@/assets/speech-exercise.jpg";
import morphemeMatch from "@/assets/morpheme-match.jpg";
import translateSentence from "@/assets/translate-sentence.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const exerciseData = [
  {
    id: "speech",
    icon: Mic,
    image: speechExercise,
    color: "primary",
  },
  {
    id: "morpheme",
    icon: Puzzle,
    image: morphemeMatch,
    color: "secondary",
  },
  {
    id: "translate",
    icon: Languages,
    image: translateSentence,
    color: "accent",
  },
];

const ExerciseTypes = () => {
  const { t } = useLanguage();

  const exercises = exerciseData.map((exercise) => ({
    ...exercise,
    title: t.exercises.types[exercise.id as keyof typeof t.exercises.types].title,
    description: t.exercises.types[exercise.id as keyof typeof t.exercises.types].description,
  }));

  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            {t.exercises.badge}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            {t.exercises.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.exercises.subtitle}
          </p>
        </motion.div>

        {/* Exercise cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {exercises.map((exercise, index) => (
            <motion.div
              key={exercise.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 border border-border">
                {/* Phone mockup */}
                <div className="p-6 pb-0">
                  <div className="phone-mockup mx-auto max-w-[200px]">
                    <div className="phone-screen">
                      <img 
                        src={exercise.image} 
                        alt={exercise.title}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                    exercise.color === 'primary' ? 'bg-primary/10 text-primary' :
                    exercise.color === 'secondary' ? 'bg-secondary/10 text-secondary' :
                    'bg-accent/10 text-accent'
                  }`}>
                    <exercise.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">
                    {exercise.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {exercise.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExerciseTypes;
