import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Calcula o offset da navbar
      const navbarHeight = 80; // Altura aproximada da navbar
      const elementPosition = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50" : "bg-transparent"
      }`}>
        <div className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
          {/* Logo */}
          <div 
            className="cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <img 
              src="/src/assets/logo.png"
              alt="Performance Agency Logo"
              className="h-10 md:h-12 w-auto transition-all duration-300 hover:scale-105"
            />
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex space-x-4">
            <button className="px-4 py-2 text-ice hover:text-primary transition-colors rounded-lg hover:bg-secondary/20">
              Login
            </button>
            <button className="btn-neon px-6 py-2 rounded-lg">
              Signup
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-ice hover:text-primary transition-colors p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-background/95 backdrop-blur-md border-t border-border/50`}>
          <div className="container mx-auto px-4 py-4 space-y-4">
            <button 
              onClick={() => scrollToSection("como-funciona")} 
              className="block w-full text-left text-ice hover:text-primary transition-colors py-2"
            >
              Como Funciona
            </button>

            <button 
              onClick={() => scrollToSection("precos")} 
              className="block w-full text-left text-ice hover:text-primary transition-colors py-2"
            >
              Preços
            </button>
            
            {/* Mobile Auth Buttons */}
            <div className="flex flex-col space-y-3 pt-4 border-t border-border/30">
              <button className="w-full text-left px-4 py-2 text-ice hover:text-primary transition-colors rounded-lg hover:bg-secondary/20">
                Login
              </button>
              <button className="btn-neon w-full text-left px-4 py-2 rounded-lg">
                Signup
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;