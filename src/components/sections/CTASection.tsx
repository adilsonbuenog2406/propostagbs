import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, MessageCircle, ArrowRight } from "lucide-react";

const CTASection = () => {
  const whatsappNumber = "5544999970399";
  const whatsappMessage = encodeURIComponent(
    "Olá! Tenho interesse na proposta comercial da Bueno & Maestri para a GBS Contabilidade. Gostaria de avançar!"
  );

  const handleAccept = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
      "_blank"
    );
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  return (
    <section id="cta-final" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-light/50 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gold/30 bg-gold/5 text-gold text-sm font-medium mb-8"
          >
            <CheckCircle className="w-4 h-4" />
            Proposta Exclusiva
          </motion.div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Pronto para dar o{" "}
            <span className="text-gradient-gold">próximo passo</span>?
          </h2>

          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Esta proposta foi pensada exclusivamente para a{" "}
            <span className="text-gold font-semibold">GBS Contabilidade</span>,
            considerando seus objetivos de crescimento, posicionamento e escala.
          </p>

          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <Button
              variant="cta"
              size="xxl"
              onClick={handleAccept}
              className="group w-full sm:w-auto"
            >
              <CheckCircle className="w-6 h-6" />
              SIM, ACEITO A PROPOSTA E QUERO DAR SEQUÊNCIA
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-border" />
            <span className="text-muted-foreground text-sm">ou</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* WhatsApp Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-card border border-border/50 rounded-2xl p-8 shadow-card"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="text-center sm:text-left">
                <p className="text-muted-foreground mb-1">
                  Fale agora pelo WhatsApp
                </p>
                <p className="text-2xl font-serif font-bold text-foreground">
                  (44) 99997-0399
                </p>
              </div>
              <Button
                variant="gold"
                size="xl"
                onClick={handleWhatsApp}
                className="group"
              >
                <MessageCircle className="w-5 h-5" />
                Enviar Mensagem
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-20 pt-8 border-t border-border/30">
        <div className="container px-6">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Bueno & Maestri – Soluções Empresariais.
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
