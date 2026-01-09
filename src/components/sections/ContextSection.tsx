import { motion } from "framer-motion";
import { TrendingUp, Users, BarChart3, AlertTriangle } from "lucide-react";

const ContextSection = () => {
  const challenges = [
    {
      icon: Users,
      title: "Processos comerciais claros",
      description: "Fluxos definidos para cada etapa do relacionamento com o cliente",
    },
    {
      icon: BarChart3,
      title: "CRM estruturado",
      description: "Gestão centralizada de leads, oportunidades e conversões",
    },
    {
      icon: TrendingUp,
      title: "Presença digital estratégica",
      description: "Posicionamento que gera autoridade e atrai clientes qualificados",
    },
  ];

  return (
    <section id="contexto" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy-light/30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 gold-line gold-line-center">
            O próximo nível da GBS Contabilidade
            <br />
            <span className="text-gradient-gold">começa agora</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="bg-gradient-card border border-border/50 rounded-2xl p-8 shadow-card">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-gold/10 rounded-xl">
                <AlertTriangle className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold mb-2">
                  O mercado contábil está em transformação
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  O setor contábil está cada vez mais competitivo, digital e orientado
                  ao relacionamento. Escritórios que não acompanham essa evolução perdem
                  oportunidades valiosas todos os dias.
                </p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-8 pl-16">
              Sem processos comerciais claros, CRM estruturado e presença digital
              estratégica, é impossível alcançar previsibilidade e escala no
              crescimento do negócio.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {challenges.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-center p-4 rounded-xl bg-muted/30 border border-border/30"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gold/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-gold" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-lg md:text-xl text-foreground max-w-2xl mx-auto leading-relaxed">
            A <span className="text-gold font-semibold">GBS Contabilidade</span> está
            pronta para dar esse salto. E nós temos a solução completa para isso.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContextSection;
