import { Check, Star, Crown } from "lucide-react";
import { Button } from "./ui/button";

const Pricing = () => {
  const plans = [
    {
      name: "Start",
      price: "R$ 1.200",
      period: "/mês",
      description: "Ideal para pequenas empresas que estão começando no digital",
      popular: false,
      features: [
        "Site responsivo de até 5 páginas",
        "Google Ads básico (R$ 500 de verba)",
        "Facebook e Instagram Ads",
        "Relatórios mensais",
        "Suporte por email",
        "2 revisões por mês"
      ]
    },
    {
      name: "Premium",
      price: "R$ 4.000",
      period: "/mês",
      description: "Solução completa para empresas em crescimento",
      popular: true,
      features: [
        "Site completo com até 15 páginas",
        "Google Ads avançado (R$ 2.000 de verba)",
        "Gestão completa de redes sociais",
        "SEO otimizado",
        "Email marketing",
        "Relatórios semanais detalhados",
        "Suporte prioritário 24/7",
        "Revisões ilimitadas",
        "Landing pages otimizadas"
      ]
    },
    {
      name: "Empresarial",
      price: "A Negociar",
      period: "",
      description: "Estratégia personalizada para grandes empresas",
      popular: false,
      features: [
        "Projeto 100% customizado",
        "Verba de mídia personalizada",
        "Equipe dedicada exclusiva",
        "Múltiplas campanhas simultâneas",
        "Consultoria estratégica mensal",
        "Relatórios em tempo real",
        "Suporte 24/7 com gerente dedicado",
        "Integração com CRM",
        "Análise de concorrência",
        "Workshops e treinamentos"
      ]
    }
  ];

  return (
    <section id="precos" className="py-20 bg-gradient-to-br from-secondary/10 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-ice">Nossos </span>
            <span className="text-glow">Planos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Escolha o plano ideal para o seu negócio. Todos incluem suporte completo 
            e garantia de resultados em 90 dias.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative ${
                plan.popular 
                  ? 'card-neon border-2 border-primary scale-105 z-10' 
                  : 'card-neon'
              } p-8`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-accent px-6 py-2 rounded-full">
                  <div className="flex items-center space-x-2">
                    <Crown className="h-4 w-4 text-primary-foreground" />
                    <span className="text-sm font-bold text-primary-foreground">MAIS POPULAR</span>
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-ice mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl md:text-5xl font-bold text-glow">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground ml-2">{plan.period}</span>}
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-muted-foreground text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button 
                className={`w-full ${
                  plan.popular 
                    ? 'btn-neon text-lg py-4' 
                    : 'btn-outline-neon py-4'
                }`}
                size="lg"
              >
                {plan.name === 'Empresarial' ? 'Solicitar Orçamento' : 'Começar Agora'}
              </Button>

              {/* Guarantee Badge */}
              <div className="mt-6 text-center">
                <div className="inline-flex items-center space-x-2 bg-secondary/30 px-4 py-2 rounded-full border border-primary/20">
                  <Star className="h-4 w-4 text-yellow-400" />
                  <span className="text-xs text-muted-foreground">Garantia de 90 dias</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Todos os planos incluem configuração gratuita e migração de dados sem custo adicional.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="btn-outline-neon">
              Agendar Demonstração Gratuita
            </Button>
            <Button variant="ghost" className="text-primary hover:text-primary/80">
              Falar com Especialista
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;