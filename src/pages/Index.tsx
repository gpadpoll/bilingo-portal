import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ExerciseTypes from "@/components/ExerciseTypes";
import AboutSection from "@/components/AboutSection";
import PublicationsSection from "@/components/PublicationsSection";
import MediaCoverageSection from "@/components/MediaCoverageSection";
import TeamSection from "@/components/TeamSection";
import FAQSection from "@/components/FAQSection";
import EthicsSection from "@/components/EthicsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navigation />
      <main className="overflow-hidden">
        <HeroSection />
        <ExerciseTypes />
        <AboutSection />
        <PublicationsSection />
        <MediaCoverageSection />
        <TeamSection />
        <FAQSection />
        <EthicsSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
