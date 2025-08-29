import { useState, useEffect } from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="text-2xl font-bold text-glow cursor-pointer"
          onClick={() => scrollToSection("hero")}
        >
          Performance Agency
        </div>

        {/* Navigation Links - Hidden on mobile */}
        <div className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection("sobre")} className="text-ice hover:text-primary transition-colors">
            Sobre
          </button>
          <button onClick={() => scrollToSection("como-funciona")} className="text-ice hover:text-primary transition-colors">
            Como Funciona
          </button>
          <button onClick={() => scrollToSection("depoimentos")} className="text-ice hover:text-primary transition-colors">
            Depoimentos
          </button>
          <button onClick={() => scrollToSection("precos")} className="text-ice hover:text-primary transition-colors">
            Preços
          </button>
          <button onClick={() => scrollToSection("team")} className="text-ice hover:text-primary transition-colors">
            Equipe
          </button>
        </div>

        {/* Auth Buttons */}
        <div className="flex space-x-4">
          <Button variant="ghost" className="text-ice hover:text-primary">
            Login
          </Button>
          <Button className="btn-neon">
            Signup
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;