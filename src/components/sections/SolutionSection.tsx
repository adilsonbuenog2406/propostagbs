import { motion } from "framer-motion";
import { Database, Globe, RefreshCw, CheckCircle2 } from "lucide-react";

const SolutionSection = () => {
  const pillars = [
    {
      icon: Database,
      number: "01",
      title: "Implementação de CRM",
      description: "Sistema completo para gestão comercial",
      features: [
        "Organização do funil de vendas",
        "Gestão de leads, clientes e oportunidades",
        "Padronização de processos comerciais",
        "Acompanhamento de métricas e performance",
        "Base sólida para escala e previsibilidade",
      ],
    },
    {
      icon: Globe,
      number: "02",
      title: "Criação de Site Profissional",
      description: "Presença digital que converte",
      features: [
        "Site institucional moderno e responsivo",
        "Posicionamento claro da GBS Contabilidade",
        "Transmite autoridade, confiança e credibilidade",
        "Estrutura pensada para conversão",
        "Otimizado para buscadores (SEO)",
      ],
    },
    {
      icon: RefreshCw,
      number: "03",
      title: "Atualização de Ativos Digitais",
      description: "Otimização do que já existe",
      features: [
        "Atualização de site institucional",
        "Atualização de landing page",
        "Ajustes estratégicos focados em conversão",
        "Melhorias de usabilidade e design",
        "Alinhamento com a nova estratégia",
      ],
    },
  ];

  return (
    <section id="solucao" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background decorative */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-0 w-96 h-96 bg-gold/3 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-0 w-96 h-96 bg-gold/3 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <span className="inline-block text-gold text-sm font-medium tracking-widest uppercase mb-4">
            A Proposta
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Uma solução{" "}
            <span className="text-gradient-gold">completa, integrada</span>
            <br />e orientada a resultado
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Três pilares estratégicos que trabalham juntos para transformar a
            operação comercial e digital da GBS Contabilidade.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="h-full bg-gradient-card border border-border/50 rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-1">
                {/* Number badge */}
                <div className="absolute -top-4 left-8">
                  <div className="bg-gradient-to-r from-gold to-gold-dark text-navy-dark text-sm font-bold px-4 py-1 rounded-full">
                    Pilar {pillar.number}
                  </div>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 mt-4 group-hover:scale-110 transition-transform duration-300">
                  <pillar.icon className="w-8 h-8 text-gold" />
                </div>

                {/* Content */}
                <h3 className="font-serif text-2xl font-bold mb-2">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground mb-6">{pillar.description}</p>

                {/* Features */}
                <ul className="space-y-3">
                  {pillar.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Bottom gradient line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
