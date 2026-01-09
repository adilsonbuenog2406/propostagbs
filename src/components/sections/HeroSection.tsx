import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import bmLogo from "@/assets/bm-logo.png";
import gbsLogo from "@/assets/gbs-logo.png";

const HeroSection = () => {
  const scrollToSection = () => {
    const element = document.getElementById("contexto");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/3 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-navy-light/30 rounded-full blur-3xl" />
      </div>

      {/* Gold accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="container relative z-10 px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center max-w-5xl mx-auto"
        >
          {/* Logos */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-12 mb-12"
          >
            <div className="h-20 md:h-28 w-auto flex items-center justify-center">
              <img
                src={bmLogo}
                alt="Bueno & Maestri - Soluções Empresariais"
                className="h-full w-auto object-contain max-w-[200px] md:max-w-[280px]"
              />
            </div>
            <div className="text-gold text-3xl font-serif">×</div>
            <div className="h-16 md:h-24 bg-foreground/10 rounded-lg p-2 flex items-center justify-center">
              <img
                src={gbsLogo}
                alt="GBS Contabilidade"
                className="h-full w-auto object-contain max-w-[120px] md:max-w-[160px]"
              />
            </div>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 text-gold text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            Proposta Comercial Exclusiva
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            Transformando a{" "}
            <span className="text-gradient-gold">GBS Contabilidade</span>
            <br />
            em uma Máquina de Aquisição,
            <br />
            Gestão e Conversão de Clientes
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-10 leading-relaxed"
          >
            Uma proposta completa de tecnologia, posicionamento digital e CRM
            para escalar resultados com previsibilidade.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col items-center gap-6"
          >
            <Button
              variant="hero"
              size="xl"
              onClick={() => document.getElementById("cta-final")?.scrollIntoView({ behavior: "smooth" })}
              className="group"
            >
              <span>👉</span>
              Quero avançar com essa proposta
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          onClick={scrollToSection}
        >
          <span className="text-muted-foreground text-sm">Saiba mais</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-5 text-gold" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
