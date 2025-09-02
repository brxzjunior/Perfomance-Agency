import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-marketing.mov";

const Hero = () => {
  const scrollToPlanos = () => {
    const element = document.getElementById("precos");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative h-[calc(100vh-1px)] pt-20 flex items-center justify-center overflow-hidden"
    >
      {/* Background video */}
      <video
        src={heroBg}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="text-ice">Aumente as conversões no seu </span>
          <span className="text-glow animate-glow"> negócio</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
          Somos especialistas em impulsionar negócios através de estratégias de marketing digital 
          inovadoras e resultados mensuráveis.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button 
            onClick={scrollToPlanos}
            className="btn-neon text-lg px-8 py-4 animate-float flex items-center"
          >
            Ver Planos
            <ArrowDown className="ml-2 h-5 w-5" />
          </button>

          <button className="btn-outline-neon text-lg px-8 py-4">
            Fale Conosco
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-glow mb-2">20+</div>
            <div className="text-muted-foreground">Clientes Satisfeitos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-glow mb-2">98%</div>
            <div className="text-muted-foreground">Taxa de Sucesso</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-glow mb-2">2 Anos</div>
            <div className="text-muted-foreground">No Mercado</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
