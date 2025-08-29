import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "CEO, TechStart",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "A Performance Agency transformou completamente nossa presença digital. Em 6 meses, triplicamos nosso faturamento online. Equipe excepcional!"
    },
    {
      name: "Carlos Santos",
      role: "Diretor, EcoLoja",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Resultados impressionantes! Nossa loja virtual teve um crescimento de 400% nas vendas. O ROI superou todas as expectativas."
    },
    {
      name: "Ana Costa",
      role: "Fundadora, BeautyPro",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Profissionais altamente qualificados que realmente entendem do mercado. Nossas campanhas geram leads qualificados diariamente."
    },
    {
      name: "João Oliveira",
      role: "Gerente, AutoPeças Plus",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "O melhor investimento que fizemos! Site novo, campanhas otimizadas e suporte 24/7. Recomendo para qualquer empresa que quer crescer."
    },
    {
      name: "Patricia Lima",
      role: "Proprietária, Café Gourmet",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Desde que começamos a trabalhar juntos, nossa cafeteria se tornou referência na cidade. O marketing digital realmente funciona!"
    },
    {
      name: "Roberto Ferreira",
      role: "Sócio, Construtora Prime",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Estratégias inovadoras que trouxeram resultados concretos. Nossos projetos imobiliários vendem muito mais rápido agora."
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`}
      />
    ));
  };

  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-br from-background to-secondary/10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-ice">O Que Nossos </span>
            <span className="text-glow">Clientes Dizem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mais de 500 empresas confiam em nosso trabalho. Veja os depoimentos 
            de quem já transformou seus negócios conosco.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="card-neon p-6 group cursor-pointer"
            >
              {/* Client Info */}
              <div className="flex items-center mb-6">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary/30 group-hover:border-primary transition-colors duration-300"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-xs text-primary-foreground font-bold">✓</span>
                  </div>
                </div>
                
                <div className="ml-4">
                  <h4 className="font-bold text-ice">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex mb-4 space-x-1">
                {renderStars(testimonial.rating)}
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-glow mb-2">98%</div>
              <div className="text-muted-foreground text-sm">Satisfação</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-glow mb-2">500+</div>
              <div className="text-muted-foreground text-sm">Clientes Ativos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-glow mb-2">5.0</div>
              <div className="text-muted-foreground text-sm">Avaliação Média</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-glow mb-2">24h</div>
              <div className="text-muted-foreground text-sm">Tempo Resposta</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;