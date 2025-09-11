import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-foreground">
              Política de Cookies
            </CardTitle>
            <div className="flex flex-wrap gap-2 mt-4">
              <Button variant="outline" size="sm" asChild>
                <Link to="/politica">Política de Privacidade</Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link to="/termos">Termos de Uso</Link>
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
                Esta política explica como o Performance Digital usa cookies e tecnologias similares em nosso site{" "}
                <a 
                  href="https://performancedigitalbr.com" 
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Performance Digital
                </a>.
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  O que são Cookies?
                </h3>
                <p>
                  Cookies são pequenos arquivos de texto que são armazenados em seu dispositivo quando você visita um site. Eles são amplamente utilizados para fazer os sites funcionarem de forma mais eficiente, bem como para fornecer informações aos proprietários do site.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Como Usamos os Cookies
                </h3>
                <p className="mb-4">
                  Utilizamos cookies para várias finalidades:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Cookies Essenciais:</strong> Necessários para o funcionamento básico do site</li>
                  <li><strong>Cookies de Performance:</strong> Coletam informações sobre como você usa nosso site</li>
                  <li><strong>Cookies de Funcionalidade:</strong> Permitem que o site lembre suas escolhas</li>
                  <li><strong>Cookies de Marketing:</strong> Usados para exibir anúncios relevantes</li>
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Tipos de Cookies que Utilizamos
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground">Google Analytics</h4>
                    <p>Utilizamos o Google Analytics para entender como os visitantes interagem com nosso site. Estes cookies coletam informações anônimas sobre o número de visitantes, de onde eles vieram e as páginas que visitaram.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Google AdSense</h4>
                    <p>Utilizamos o Google AdSense para exibir anúncios. Estes cookies são usados para personalizar os anúncios com base nos seus interesses e comportamento de navegação.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Controle de Cookies
                </h3>
                <p className="mb-4">
                  Você pode controlar e/ou excluir cookies conforme desejar. Você pode excluir todos os cookies que já estão em seu computador e pode configurar a maioria dos navegadores para impedir que sejam colocados.
                </p>
                <p>
                  No entanto, se você fizer isso, pode ter que ajustar manualmente algumas preferências toda vez que visitar um site, e alguns serviços e recursos podem não funcionar.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Como Desabilitar Cookies
                </h3>
                <p className="mb-4">
                  A maioria dos navegadores web permite algum controle da maioria dos cookies através das configurações do navegador:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Chrome:</strong> Configurações &gt; Avançado &gt; Privacidade e segurança &gt; Cookies</li>
                  <li><strong>Firefox:</strong> Opções &gt; Privacidade e Segurança &gt; Cookies</li>
                  <li><strong>Safari:</strong> Preferências &gt; Privacidade &gt; Cookies</li>
                  <li><strong>Edge:</strong> Configurações &gt; Cookies e permissões do site</li>
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Atualizações desta Política
                </h3>
                <p>
                  Podemos atualizar nossa Política de Cookies de tempos em tempos. Recomendamos que você revise esta página periodicamente para se manter informado sobre nosso uso de cookies.
                </p>
              </div>

              <p className="text-sm text-muted-foreground italic mt-8">
                Esta política é efetiva a partir de 11 September 2025 14:52
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </>
  );
};

export default CookiePolicy;