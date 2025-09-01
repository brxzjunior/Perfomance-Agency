import { Search, PenTool, TrendingUp, Megaphone } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Análise e Diagnóstico",
      description: "Realizamos uma análise completa do seu negócio, concorrência e mercado para identificar oportunidades únicas de crescimento."
    },
    {
      icon: PenTool,
      title: "Estratégia Personalizada",
      description: "Desenvolvemos uma estratégia sob medida incluindo criação de sites, branding, conteúdo e campanhas publicitárias otimizadas."
    },
    {
      icon: Megaphone,
      title: "Execução e Implementação",
      description: "Colocamos a estratégia em ação com campanhas no Google Ads, Facebook, Instagram e outras plataformas relevantes para seu público."
    },
    {
      icon: TrendingUp,
      title: "Otimização e Resultados",
      description: "Monitoramos continuamente os resultados, otimizamos as campanhas e ajustamos a estratégia para maximizar o ROI."
    }
  ];

  const services = [
    "Criação de Sites Responsivos",
    "Google Ads & Facebook Ads",
    "SEO e Marketing de Conteúdo", 
    "Social Media Management",
    "Branding e Design Gráfico",
    "Email Marketing",
    "Analytics e Relatórios",
    "Consultoria Estratégica"
  ];

  return (
    <section id="como-funciona" className="py-20 bg-gradient-to-br from-secondary/10 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-ice">Como </span>
            <span className="text-glow">Funciona</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossa metodologia comprovada em 4 etapas garante resultados excepcionais 
            e crescimento sustentável para o seu negócio digital.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent z-0"></div>
              )}
              
              <div className="card-neon p-6 text-center relative z-10">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="mb-6 mt-4 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    <step.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>

                <h4 className="text-xl font-bold text-ice mb-4">{step.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="card-neon p-8 md:p-12">
          <h3 className="text-3xl font-bold text-center text-glow mb-12">
            Nossos Serviços Especializados
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-secondary to-secondary/50 p-4 rounded-lg border border-border/30 hover:border-primary/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-ice font-medium">{service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;