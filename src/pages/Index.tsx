import HeroSection from "@/components/sections/HeroSection";
import ContextSection from "@/components/sections/ContextSection";
import SolutionSection from "@/components/sections/SolutionSection";
import InvestmentSection from "@/components/sections/InvestmentSection";
import ConditionsSection from "@/components/sections/ConditionsSection";
import AuthoritySection from "@/components/sections/AuthoritySection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <ContextSection />
      <SolutionSection />
      <InvestmentSection />
      <ConditionsSection />
      <AuthoritySection />
      <CTASection />
    </main>
  );
};

export default Index;
