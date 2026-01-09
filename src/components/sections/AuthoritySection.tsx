import { motion } from "framer-motion";
import { Target, Lightbulb, TrendingUp, Award, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import bmLogo from "@/assets/bm-logo.png";

const AuthoritySection = () => {
  const strengths = [
    {
      icon: Target,
      title: "Expertise em Soluções Empresariais",
      description: "Anos de experiência em transformação digital e comercial",
    },
    {
      icon: Lightbulb,
      title: "Visão Estratégica",
      description: "Foco no panorama geral, não apenas na execução técnica",
    },
    {
      icon: TrendingUp,
      title: "Foco em Crescimento",
      description: "Processos e estruturas pensadas para escalar resultados",
    },
    {
      icon: Award,
      title: "Estruturação Comercial",
      description: "Experiência comprovada em organização e vendas",
    },
  ];

  const socialLinks = [
    {
      name: "Bueno & Maestri",
      url: "https://www.instagram.com/buenomaestri/",
      handle: "@buenomaestri",
    },
    {
      name: "GBS Contabilidade",
      url: "https://www.instagram.com/gbscontabilidade/",
      handle: "@gbscontabilidade",
    },
  ];

  return (
    <section id="autoridade" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy-light/30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container relative z-10 px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-gold text-sm font-medium tracking-widest uppercase mb-4">
              Quem Somos
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 gold-line">
              Por que a{" "}
              <span className="text-gradient-gold">Bueno & Maestri</span>?
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Não somos apenas executores. Somos parceiros estratégicos que entendem
              que cada empresa precisa de soluções sob medida para crescer de forma
              sustentável e previsível.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {strengths.map((strength, index) => (
                <motion.div
                  key={strength.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-muted/30 border border-border/30"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <strength.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">{strength.title}</h4>
                    <p className="text-xs text-muted-foreground">{strength.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="goldOutline"
                  size="lg"
                  className="group"
                  onClick={() => window.open(social.url, "_blank")}
                >
                  <Instagram className="w-5 h-5" />
                  <span>{social.handle}</span>
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Right column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative">
              {/* Decorative circles */}
              <div className="absolute inset-0 -m-8">
                <div className="absolute top-0 left-0 w-full h-full border border-gold/20 rounded-full animate-pulse" />
                <div className="absolute top-4 left-4 right-4 bottom-4 border border-gold/10 rounded-full" />
              </div>

              {/* Logo container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-card border border-border/50 shadow-elegant flex items-center justify-center p-8">
                <img
                  src={bmLogo}
                  alt="Bueno & Maestri"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-gold text-navy-dark text-xs font-bold px-4 py-2 rounded-full shadow-gold"
              >
                + de 5 anos
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute -bottom-4 -left-4 bg-gradient-card border border-gold/30 text-foreground text-xs font-semibold px-4 py-2 rounded-full"
              >
                Soluções Empresariais
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
