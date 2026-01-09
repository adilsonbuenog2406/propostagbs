import { motion } from "framer-motion";
import { BadgePercent, CreditCard, Calendar, AlertCircle } from "lucide-react";

const ConditionsSection = () => {
  const conditions = [
    {
      icon: BadgePercent,
      title: "Pagamento à Vista",
      description: "10% de desconto em qualquer pacote",
      highlight: true,
    },
    {
      icon: CreditCard,
      title: "Parcelamento",
      description: "Em até 6x",
      highlight: false,
    },
    {
      icon: Calendar,
      title: "Duração do Projeto",
      description: "26 semanas (6 meses) de contrato",
      highlight: false,
    },
  ];

  return (
    <section id="condicoes" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background decorative */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <span className="inline-block text-gold text-sm font-medium tracking-widest uppercase mb-4">
            Facilidades
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold">
            Condições{" "}
            <span className="text-gradient-gold">facilitadas</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto sm:[&>*:last-child]:col-span-2 sm:[&>*:last-child]:justify-self-center lg:[&>*:last-child]:col-span-1">
          {conditions.map((condition, index) => (
            <motion.div
              key={condition.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-6 rounded-2xl text-center transition-all duration-300 hover:-translate-y-1 ${
                condition.highlight
                  ? "bg-gradient-to-b from-gold/15 to-gold/5 border-2 border-gold/40 shadow-gold"
                  : "bg-gradient-card border border-border/50 shadow-card hover:shadow-elegant"
              }`}
            >
              {condition.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gold text-navy-dark text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Economia
                  </span>
                </div>
              )}

              <div
                className={`w-14 h-14 mx-auto rounded-xl flex items-center justify-center mb-4 ${
                  condition.highlight ? "bg-gold/20" : "bg-muted"
                }`}
              >
                <condition.icon className="w-7 h-7 text-gold" />
              </div>

              <h3 className="font-serif text-lg font-bold mb-2">{condition.title}</h3>
              <p className="text-sm text-muted-foreground">{condition.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConditionsSection;
