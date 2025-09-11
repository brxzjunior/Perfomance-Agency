import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-foreground">
              Termos de Uso
            </CardTitle>
            <div className="flex flex-wrap gap-2 mt-4">
              <Button variant="outline" size="sm" asChild>
                <Link to="/politica">Política de Privacidade</Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link to="/cookies">Política de Cookies</Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link to="/lgpd">LGPD</Link>
              </Button>
              <Button variant="secondary" size="sm" asChild>
                <Link to="/">Home</Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none">
            <div className="space-y-6 text-muted-foreground">
              <p>
                Bem-vindo ao Performance Digital. Estes termos de uso regem o uso do nosso site{" "}
                <a 
                  href="https://performancedigitalbr.com" 
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Performance Digital
                </a> e dos serviços oferecidos.
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  1. Aceitação dos Termos
                </h3>
                <p>
                  Ao acessar e usar este site, você aceita e concorda em ficar vinculado aos termos e condições deste acordo. Se você não concordar com alguma parte destes termos, não deverá usar nosso site.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  2. Uso Permitido
                </h3>
                <p className="mb-4">
                  Você pode usar nosso site para fins legais e de acordo com estes termos. Você concorda em não usar o site:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>De forma que viole qualquer lei ou regulamento aplicável</li>
                  <li>Para transmitir material que seja abusivo, ofensivo ou inadequado</li>
                  <li>Para prejudicar menores de qualquer forma</li>
                  <li>Para transmitir vírus ou códigos maliciosos</li>
                  <li>Para fins comerciais não autorizados</li>
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  3. Propriedade Intelectual
                </h3>
                <p>
                  Todo o conteúdo deste site, incluindo textos, gráficos, logos, ícones, imagens e software, é propriedade do Performance Digital e está protegido por leis de direitos autorais e outras leis de propriedade intelectual.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  4. Limitação de Responsabilidade
                </h3>
                <p>
                  O Performance Digital não será responsável por quaisquer danos diretos, indiretos, incidentais, especiais ou consequenciais resultantes do uso ou da incapacidade de usar nosso site.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  5. Modificações dos Termos
                </h3>
                <p>
                  Reservamo-nos o direito de modificar estes termos a qualquer momento. As modificações entrarão em vigor imediatamente após a publicação no site. O uso continuado do site após tais modificações constituirá sua aceitação dos novos termos.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  6. Contato
                </h3>
                <p>
                  Se você tiver dúvidas sobre estes termos de uso, entre em contato conosco através dos canais disponíveis em nosso site.
                </p>
              </div>

              <p className="text-sm text-muted-foreground italic mt-8">
                Estes termos são efetivos a partir de 11 September 2025 14:52
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </>
  );
};

export default TermsOfService;