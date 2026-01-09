import { motion } from "framer-motion";
import { Database, Globe, RefreshCw, Sparkles } from "lucide-react";

const InvestmentSection = () => {
  const packages = [
    {
      icon: Database,
      title: "Implementação de CRM",
      description: "Sistema completo de gestão comercial para organizar leads, oportunidades e processos",
      price: "5.000",
      featured: true,
    },
    {
      icon: Globe,
      title: "Criação de Site",
      description: "Site institucional profissional com posicionamento estratégico e foco em conversão",
      price: "2.500",
      featured: false,
    },
    {
      icon: RefreshCw,
      title: "Atualização de Site",
      description: "Atualização estratégica por site (institucional ou landing page)",
      price: "500",
      priceNote: "por site",
      featured: false,
    },
  ];

  return (
    <section id="investimento" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy-light/30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <span className="inline-block text-gold text-sm font-medium tracking-widest uppercase mb-4">
            Investimento
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Investimento no crescimento
            <br />
            <span className="text-gradient-gold">da GBS Contabilidade</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Valores transparentes para uma parceria de resultado
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="flex items-center gap-1.5 bg-gradient-to-r from-gold to-gold-dark text-navy-dark text-xs font-bold px-4 py-1.5 rounded-full shadow-gold">
                    <Sparkles className="w-3 h-3" />
                    Mais Popular
                  </div>
                </div>
              )}

              <div
                className={`h-full rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1 ${
                  pkg.featured
                    ? "bg-gradient-to-b from-gold/10 to-gold/5 border-2 border-gold/50 shadow-gold"
                    : "bg-gradient-card border border-border/50 shadow-card hover:shadow-elegant"
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                    pkg.featured ? "bg-gold/20" : "bg-muted"
                  }`}
                >
                  <pkg.icon className={`w-7 h-7 ${pkg.featured ? "text-gold" : "text-gold"}`} />
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-bold mb-2">{pkg.title}</h3>
                <p className="text-sm text-muted-foreground mb-6 min-h-[60px]">
                  {pkg.description}
                </p>

                {/* Price */}
                <div className="border-t border-border/50 pt-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-muted-foreground">R$</span>
                    <span className={`font-serif text-4xl font-bold ${pkg.featured ? "text-gold" : "text-foreground"}`}>
                      {pkg.price}
                    </span>
                    <span className="text-muted-foreground">,00</span>
                  </div>
                  {pkg.priceNote && (
                    <p className="text-sm text-muted-foreground mt-1">{pkg.priceNote}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note about combo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-2xl mx-auto mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground">
            * A atualização de sites (2 sites: institucional + landing page) é uma
            alternativa caso não seja criado um site novo.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestmentSection;
