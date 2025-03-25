import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Anchor, Compass, Map, Shield, Users } from "lucide-react"

export function PescaSection() {
  return (
    <section id="pesca" className="py-16 md:py-24 bg-primary-foreground">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experiências de Pesca</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Descubra as melhores técnicas e locais para pescar no Rio Preto da Eva
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Pesca Esportiva na Amazônia</h3>
            <p className="mb-6">
              O Rio Preto da Eva é conhecido por sua rica biodiversidade e pela abundância de peixes, tornando-o um
              destino ideal para os amantes da pesca esportiva. Na Pousada Natureza, oferecemos experiências de pesca
              guiadas por profissionais experientes que conhecem todos os segredos do rio.
            </p>

            <p className="mb-6">
              Nossos pacotes incluem barcos equipados com motores de 15HP, pilotos nativos experientes, e gasolina
              ilimitada para suas aventuras de pesca. Fornecemos também iscas naturais para pesca de peixes de couro -
              caso deseje pescar esta espécie, recomendamos consultar nossa equipe antecipadamente. Seja você um
              pescador experiente ou iniciante, temos opções que se adaptam ao seu nível de habilidade.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="flex items-start gap-2">
                <Anchor className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Pesca de Tucunaré</span>
              </div>
              <div className="flex items-start gap-2">
                <Anchor className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Pesca de Tambaqui</span>
              </div>
              <div className="flex items-start gap-2">
                <Anchor className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Pesca de Pirarucu</span>
              </div>
              <div className="flex items-start gap-2">
                <Anchor className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Pesca de Traíra</span>
              </div>
            </div>

            <Button size="lg">Ver Pacotes de Pesca</Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Pescador com tucunaré"
              width={300}
              height={300}
              className="rounded-lg object-cover h-auto w-full"
            />
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Pesca no rio"
              width={300}
              height={300}
              className="rounded-lg object-cover h-auto w-full"
            />
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Barco de pesca"
              width={300}
              height={300}
              className="rounded-lg object-cover h-auto w-full"
            />
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Peixe capturado"
              width={300}
              height={300}
              className="rounded-lg object-cover h-auto w-full"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Pacote Básico</CardTitle>
              <CardDescription>Ideal para iniciantes</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  <span>Guia especializado</span>
                </li>
                <li className="flex items-center gap-2">
                  <Compass className="h-4 w-4 text-primary" />
                  <span>4 horas de pesca</span>
                </li>
                <li className="flex items-center gap-2">
                  <Map className="h-4 w-4 text-primary" />
                  <span>Áreas próximas à pousada</span>
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>Equipamentos inclusos</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">
                Saiba Mais
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pacote Aventura</CardTitle>
              <CardDescription>Para pescadores intermediários</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  <span>Guia especializado</span>
                </li>
                <li className="flex items-center gap-2">
                  <Compass className="h-4 w-4 text-primary" />
                  <span>8 horas de pesca</span>
                </li>
                <li className="flex items-center gap-2">
                  <Map className="h-4 w-4 text-primary" />
                  <span>Exploração de igarapés</span>
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>Equipamentos premium inclusos</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">
                Saiba Mais
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pacote Expedição</CardTitle>
              <CardDescription>Para pescadores experientes</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  <span>Guia especializado exclusivo</span>
                </li>
                <li className="flex items-center gap-2">
                  <Compass className="h-4 w-4 text-primary" />
                  <span>Dia completo de pesca</span>
                </li>
                <li className="flex items-center gap-2">
                  <Map className="h-4 w-4 text-primary" />
                  <span>Locais remotos e exclusivos</span>
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>Equipamentos profissionais inclusos</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">
                Saiba Mais
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}