import { Linkedin, Mail } from "lucide-react";
import teamMember1 from "@/assets/team-member-1.jpg";
import teamMember2 from "@/assets/team-member-2.jpg";
import teamMember3 from "@/assets/team-member-3.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Ana Carolina Silva",
      role: "CEO & Estrategista Digital",
      image: teamMember1,
      description: "15+ anos de experiência em marketing digital. Especialista em estratégias de crescimento e ROI. Formada em Marketing pela USP com MBA em Digital Business.",
      linkedin: "#",
      email: "ana@performanceagency.com.br"
    },
    {
      name: "Rafael Mendes", 
      role: "Creative Director",
      image: teamMember2,
      description: "Designer premiado com expertise em branding e UX/UI. Responsável por criar identidades visuais marcantes que convertem. 10+ anos criando campanhas de sucesso.",
      linkedin: "#",
      email: "rafael@performanceagency.com.br"
    },
    {
      name: "Marina Costa",
      role: "Head de Performance",
      image: teamMember3,
      description: "Especialista certificada em Google Ads e Facebook Ads. Gerencia investimentos de mais de R$ 2M/mês em mídia paga com foco em performance e resultados mensuráveis.",
      linkedin: "#",
      email: "marina@performanceagency.com.br"
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-background to-secondary/10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-ice">Nossa </span>
            <span className="text-glow">Equipe</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça os profissionais especializados que fazem a diferença no crescimento 
            do seu negócio digital.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="card-team group">
              {/* Photo */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/30 group-hover:border-primary transition-all duration-500">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              </div>

              {/* Member Info */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-ice mb-2">{member.name}</h3>
                <p className="text-primary font-semibold mb-4">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-4">
                <a 
                  href={member.linkedin}
                  className="w-10 h-10 bg-secondary/50 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 group/link"
                >
                  <Linkedin className="h-5 w-5 text-muted-foreground group-hover/link:text-primary-foreground" />
                </a>
                <a 
                  href={`mailto:${member.email}`}
                  className="w-10 h-10 bg-secondary/50 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 group/link"
                >
                  <Mail className="h-5 w-5 text-muted-foreground group-hover/link:text-primary-foreground" />
                </a>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-glow mb-2">50+</div>
            <div className="text-muted-foreground text-sm">Anos de Experiência Combinada</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-glow mb-2">100+</div>
            <div className="text-muted-foreground text-sm">Certificações Profissionais</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-glow mb-2">500+</div>
            <div className="text-muted-foreground text-sm">Projetos Entregues</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-glow mb-2">24/7</div>
            <div className="text-muted-foreground text-sm">Suporte Dedicado</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="card-neon p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-glow mb-4">
              Pronto para conhecer nossa equipe?
            </h3>
            <p className="text-muted-foreground mb-6">
              Agende uma reunião gratuita e descubra como podemos acelerar o crescimento do seu negócio.
            </p>
            <button className="btn-neon px-8 py-3">
              Agendar Reunião Gratuita
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;