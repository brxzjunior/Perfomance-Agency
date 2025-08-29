import { Target, Rocket, TrendingUp, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Estratégia Focada",
      description: "Desenvolvemos estratégias personalizadas baseadas em dados e análises profundas do seu mercado."
    },
    {
      icon: Rocket,
      title: "Crescimento Acelerado",
      description: "Implementamos técnicas avançadas para acelerar o crescimento da sua presença digital."
    },
    {
      icon: TrendingUp,
      title: "Resultados Mensuráveis", 
      description: "Acompanhamos métricas reais e fornecemos relatórios detalhados do seu ROI."
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Nossa equipe é composta por profissionais certificados e experientes no mercado digital."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-to-br from-background to-secondary/10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-ice">Sobre a </span>
            <span className="text-glow">Performance Agency</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Há mais de 5 anos no mercado, somos pioneiros em transformar negócios através de 
            estratégias de marketing digital inovadoras e orientadas por resultados.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="card-neon p-8 md:p-12 mb-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-glow mb-6">Nossa Missão</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Potencializar o crescimento de empresas através de soluções digitais personalizadas, 
            combinando criatividade, tecnologia e estratégia para entregar resultados que superam expectativas.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card-neon p-6 text-center group cursor-pointer"
            >
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
              
              <h4 className="text-xl font-bold text-ice mb-4">{feature.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-glow mb-2">500M+</div>
            <div className="text-muted-foreground">Impressões Geradas</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-glow mb-2">15M+</div>
            <div className="text-muted-foreground">Leads Qualificados</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-glow mb-2">250%</div>
            <div className="text-muted-foreground">ROI Médio</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-glow mb-2">24/7</div>
            <div className="text-muted-foreground">Suporte Dedicado</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;