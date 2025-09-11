import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const LGPD = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-foreground">
              Lei Geral de Proteção de Dados (LGPD)
            </CardTitle>
            <div className="flex flex-wrap gap-2 mt-4">
              <Button variant="outline" size="sm" asChild>
                <Link to="/politica">Política de Privacidade</Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link to="/termos">Termos de Uso</Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link to="/cookies">Política de Cookies</Link>
              </Button>
              <Button variant="secondary" size="sm" asChild>
                <Link to="/">Home</Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none">
            <div className="space-y-6 text-muted-foreground">
              <p>
                O Performance Digital está comprometido com a conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018) e respeita todos os direitos dos titulares de dados pessoais.
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Nosso Compromisso com a LGPD
                </h3>
                <p>
                  Implementamos medidas técnicas e organizacionais adequadas para proteger os dados pessoais contra acesso não autorizado, destruição, perda, alteração, comunicação ou difusão acidental ou ilícita.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Seus Direitos como Titular dos Dados
                </h3>
                <p className="mb-4">
                  De acordo com a LGPD, você tem os seguintes direitos em relação aos seus dados pessoais:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Confirmação da existência de tratamento:</strong> Saber se tratamos seus dados</li>
                  <li><strong>Acesso aos dados:</strong> Obter cópia dos dados que tratamos sobre você</li>
                  <li><strong>Correção de dados:</strong> Solicitar a correção de dados incompletos, inexatos ou desatualizados</li>
                  <li><strong>Anonimização, bloqueio ou eliminação:</strong> Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários</li>
                  <li><strong>Portabilidade dos dados:</strong> Solicitar a portabilidade dos dados a outro fornecedor</li>
                  <li><strong>Eliminação dos dados:</strong> Solicitar a eliminação dos dados tratados com consentimento</li>
                  <li><strong>Informações sobre compartilhamento:</strong> Obter informações sobre entidades com as quais compartilhamos dados</li>
                  <li><strong>Informações sobre a possibilidade de não fornecer consentimento:</strong> Ser informado sobre as consequências da negativa</li>
                  <li><strong>Revogação do consentimento:</strong> Revogar o consentimento a qualquer momento</li>
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Bases Legais para o Tratamento
                </h3>
                <p className="mb-4">
                  Tratamos seus dados pessoais com base nas seguintes bases legais:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Consentimento:</strong> Quando você nos fornece consentimento livre, informado e inequívoco</li>
                  <li><strong>Execução de contrato:</strong> Para cumprir contratos dos quais você é parte</li>
                  <li><strong>Interesse legítimo:</strong> Para atender nossos interesses legítimos, respeitando seus direitos</li>
                  <li><strong>Proteção da vida:</strong> Para proteger a vida ou incolumidade física</li>
                  <li><strong>Cumprimento de obrigação legal:</strong> Para cumprir obrigações legais ou regulatórias</li>
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Medidas de Segurança
                </h3>
                <p className="mb-4">
                  Implementamos as seguintes medidas de segurança:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Criptografia de dados em trânsito e em repouso</li>
                  <li>Controles de acesso baseados em perfis e necessidade</li>
                  <li>Monitoramento contínuo de segurança</li>
                  <li>Treinamento regular da equipe sobre proteção de dados</li>
                  <li>Avaliações periódicas de impacto à proteção de dados</li>
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Encarregado de Proteção de Dados (DPO)
                </h3>
                <p>
                  Designamos um Encarregado de Proteção de Dados para atuar como canal de comunicação entre você, a empresa e a Autoridade Nacional de Proteção de Dados (ANPD).
                </p>
                <p className="mt-2">
                  <strong>Contato do DPO:</strong> dpo@performancedigitalbr.com
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Como Exercer Seus Direitos
                </h3>
                <p>
                  Para exercer qualquer um dos seus direitos relacionados aos dados pessoais, entre em contato conosco através dos seguintes canais:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Email: privacidade@performancedigitalbr.com</li>
                  <li>Email do DPO: dpo@performancedigitalbr.com</li>
                  <li>Formulário online disponível em nosso site</li>
                </ul>
                <p className="mt-4">
                  Responderemos às suas solicitações dentro do prazo estabelecido pela LGPD (até 15 dias).
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Reclamações à ANPD
                </h3>
                <p>
                  Se você não estiver satisfeito com a forma como tratamos uma solicitação relacionada aos seus dados pessoais, você tem o direito de apresentar uma reclamação à Autoridade Nacional de Proteção de Dados (ANPD).
                </p>
              </div>

              <p className="text-sm text-muted-foreground italic mt-8">
                Esta política é efetiva a partir de 11 September 2025 14:52 e está em conformidade com a LGPD (Lei nº 13.709/2018)
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </>
  );
};

export default LGPD;