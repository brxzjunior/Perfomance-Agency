import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Paraná Performance",
      role: "Paraná, CEO",
      image: "https://i.ibb.co/DDbnHYz7/Parana-Performance.jpg",
      rating: 5,
      text: "A gente tinha dificuldade em conseguir clientes novos e qualificados. Depois da otimização no Google Meu Negócio, começamos a aparecer com mais destaque para quem realmente busca por oficina mecânica em Santarém. Hoje temos muito mais visibilidade, novos clientes chegando e um reconhecimento muito maior online."
    },
    {
      name: "FreeCar AutoCenter",
      role: "Paraná, CEO",
      image: "https://i.ibb.co/FqJZx3s1/FreeCar.jpg",
      rating: 5,
      text: "Antes da Performance Digital, tínhamos dificuldades em aparecer no Google e quase não recebíamos contatos novos. Depois do trabalho de otimização, nossa oficina passou a se destacar nas buscas, e hoje já estamos gerando leads consistentes toda semana. O resultado superou nossas expectativas!"
    },
    {
      name: "Salão Deus é Mestre",
      role: "Delzanita, CEO",
      image: "https://i.ibb.co/j94QTZff/salao.jpg",
      rating: 5,
      text: "Antes eu tinha dificuldade de atrair clientes pelo Google, quase ninguém encontrava meu salão. Depois da otimização, comecei a aparecer para quem realmente procura por salão de beleza na região. Hoje consigo mais agendamentos e clientes chegando direto pelo perfil. Foi a melhor decisão que tomei para o meu negócio."
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
              <div className="text-3xl font-bold text-glow mb-2">20+</div>
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