import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Sobre", href: "#sobre" },
    { name: "Como Funciona", href: "#como-funciona" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "Preços", href: "#precos" },
    { name: "Equipe", href: "#team" }
  ];

  const services = [
    "Criação de Sites",
    "Google Ads",
    "Facebook Ads",
    "SEO & Marketing de Conteúdo",
    "Social Media",
    "Email Marketing"
  ];

  const legalLinks = [
    { name: "Política de Privacidade", href: "#" },
    { name: "Termos de Uso", href: "#" },
    { name: "Política de Cookies", href: "#" },
    { name: "LGPD", href: "#" }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace("#", ""));
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-br from-card to-secondary/20 border-t border-border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-glow mb-4">Performance Agency</h3>
              <p className="text-muted-foreground leading-relaxed">
                Transformando negócios através de estratégias digitais inovadoras e resultados mensuráveis há mais de 5 anos.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">contato@performanceagency.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-ice mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-ice mb-6">Serviços</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-muted-foreground">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-bold text-ice mb-4">Newsletter</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Receba dicas exclusivas de marketing digital
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Seu email" 
                  className="flex-1 px-4 py-2 bg-secondary/50 border border-border/50 rounded-l-lg focus:outline-none focus:border-primary text-ice"
                />
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-r-lg hover:bg-primary/90 transition-colors">
                  →
                </button>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-bold text-ice mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-secondary/50 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 group"
                >
                  <Facebook className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-secondary/50 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 group"
                >
                  <Instagram className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-secondary/50 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 group"
                >
                  <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-secondary/50 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 group"
                >
                  <Twitter className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 bg-card/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-muted-foreground text-sm">
              © 2024 Performance Agency. Todos os direitos reservados.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center space-x-6">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary text-sm transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;