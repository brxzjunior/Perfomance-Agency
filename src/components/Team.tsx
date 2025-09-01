import { Linkedin, Mail } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Erick Raphael",
      role: "Marketing Analyst",
      image: "https://0.gravatar.com/avatar/7d390d9e32b7fe3474183d3fb8ecb1b4c2811cb99429e24b1874551aef20a10f?size=256&d=initials",
      description: "Experiência em marketing digital. Especialista em estratégias de crescimento e ROI.",
      linkedin: "#",
      email: "erick@performanceagency.com.br"
    },
    {
      name: "Williamis Oliveira",
      role: "Backend Developer",
      image: "https://avatars.githubusercontent.com/u/67030481?v=4",
      description: "Experiência em desenvolvimento backend com foco em escalabilidade e performance.",
      linkedin: "#",
      email: "will@performanceagency.com.br"
    },
    {
      name: "Braz Junior",
      role: "Front-end Developer",
      image: "https://avatars.githubusercontent.com/u/90149109?v=4",
      description: "Experiência em desenvolvimento front-end com foco em performance e usabilidade.",
      linkedin: "#",
      email: "brazjunior@performanceagency.com.br"
    },
    {
      name: "Jhonatan Almeida",
      role: "Creative Marketing",
      image: "https://2.gravatar.com/avatar/437dadf011284df43d90e2528a45bd211d51b51ec0414ef8ea094d021281fe08?size=256&d=initials",
      description: "Experiência em marketing criativo com foco em campanhas inovadoras e engajamento de público.",
      linkedin: "#",
      email: "jhonalmeida@performanceagency.com.br"
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
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="relative bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 group h-full flex flex-col">
              {/* Photo */}
              <div className="relative mb-6 flex-shrink-0">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/30 group-hover:border-primary transition-all duration-500 relative">
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
              <div className="text-center mb-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-ice mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-4 mt-auto">
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
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-glow mb-2">5+</div>
            <div className="text-muted-foreground text-sm">Anos de Experiência Combinada</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-glow mb-2">10+</div>
            <div className="text-muted-foreground text-sm">Certificações Profissionais</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-glow mb-2">20+</div>
            <div className="text-muted-foreground text-sm">Projetos Entregues</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-glow mb-2">Rápido</div>
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