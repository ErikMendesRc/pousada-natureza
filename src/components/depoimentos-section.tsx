"use client"

import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useLanguage } from "./language-provider"

export function DepoimentosSection() {
  const { t } = useLanguage()

  return (
    <section id="depoimentos" className="py-16 md:py-24 scroll-mt-16" aria-labelledby="depoimentos-heading">
      <div className="container">
        <div className="text-center mb-12">
          <h2 id="depoimentos-heading" className="text-3xl md:text-4xl font-bold mb-4">
            {t("testimonials.title")}
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">{t("testimonials.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" aria-hidden="true" />
                ))}
              </div>
              <p className="italic mb-4">{t("testimonials.1.text")}</p>
            </CardContent>
            <CardFooter className="flex items-center gap-3 border-t pt-4">
              <Image
                src="https://avatar.iran.liara.run/public/11"
                alt="Foto de Carlos Silva, cliente satisfeito da Pousada Natureza"
                width={50}
                height={50}
                className="rounded-full object-cover"
              />
              <div>
                <h4 className="font-medium">{t("testimonials.1.name")}</h4>
                <p className="text-sm text-muted-foreground">{t("testimonials.1.location")}</p>
              </div>
            </CardFooter>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" aria-hidden="true" />
                ))}
              </div>
              <p className="italic mb-4">{t("testimonials.2.text")}</p>
            </CardContent>
            <CardFooter className="flex items-center gap-3 border-t pt-4">
              <Image
                src="https://avatar.iran.liara.run/public/72"
                alt="Foto de Mariana Costa, cliente satisfeita da Pousada Natureza"
                width={50}
                height={50}
                className="rounded-full object-cover"
              />
              <div>
                <h4 className="font-medium">{t("testimonials.2.name")}</h4>
                <p className="text-sm text-muted-foreground">{t("testimonials.2.location")}</p>
              </div>
            </CardFooter>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" aria-hidden="true" />
                ))}
              </div>
              <p className="italic mb-4">{t("testimonials.3.text")}</p>
            </CardContent>
            <CardFooter className="flex items-center gap-3 border-t pt-4">
              <Image
                src="https://avatar.iran.liara.run/public/14"
                alt="Foto de Roberto Mendes, cliente frequente da Pousada Natureza"
                width={50}
                height={50}
                className="rounded-full object-cover"
              />
              <div>
                <h4 className="font-medium">{t("testimonials.3.name")}</h4>
                <p className="text-sm text-muted-foreground">{t("testimonials.3.location")}</p>
              </div>
            </CardFooter>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" aria-hidden="true" />
                ))}
              </div>
              <p className="italic mb-4">
                &quot;Pescaria dos sonhos! Consegui pescar um pirarucu de mais de 2 metros com a ajuda do guia
                especializado. A estrutura da pousada é excelente, com quartos confortáveis e uma vista deslumbrante
                para o rio. Recomendo a todos os pescadores.&quot;
              </p>
            </CardContent>
            <CardFooter className="flex items-center gap-3 border-t pt-4">
              <Image
                src="https://avatar.iran.liara.run/public/13"
                alt="Foto de Pedro Almeida, pescador satisfeito da Pousada Natureza"
                width={50}
                height={50}
                className="rounded-full object-cover"
              />
              <div>
                <h4 className="font-medium">Pedro Almeida</h4>
                <p className="text-sm text-muted-foreground">Fortaleza, CE</p>
              </div>
            </CardFooter>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" aria-hidden="true" />
                ))}
              </div>
              <p className="italic mb-4">
                &quot;Como fotógrafo de natureza, encontrei na Pousada Natureza um verdadeiro tesouro. A diversidade de
                aves e animais é impressionante, e os guias conhecem os melhores locais para observação. As acomodações
                são excelentes e a comida regional é deliciosa.&quot;
              </p>
            </CardContent>
            <CardFooter className="flex items-center gap-3 border-t pt-4">
              <Image
                src="https://avatar.iran.liara.run/public/12"
                alt="Foto de Marcelo Santos, fotógrafo que visitou a Pousada Natureza"
                width={50}
                height={50}
                className="rounded-full object-cover"
              />
              <div>
                <h4 className="font-medium">Marcelo Santos</h4>
                <p className="text-sm text-muted-foreground">Curitiba, PR</p>
              </div>
            </CardFooter>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" aria-hidden="true" />
                ))}
              </div>
              <p className="italic mb-4">
                &quot;Viagem em família inesquecível! As crianças adoraram o contato com a natureza e os passeios de
                barco. Meu marido pescou vários peixes e eu pude relaxar em meio à tranquilidade da floresta. Equipe
                muito atenciosa e prestativa.&quot;
              </p>
            </CardContent>
            <CardFooter className="flex items-center gap-3 border-t pt-4">
              <Image
                src="https://avatar.iran.liara.run/public/73"
                alt="Foto de Ana Paula Ferreira, hóspede da Pousada Natureza"
                width={50}
                height={50}
                className="rounded-full object-cover"
              />
              <div>
                <h4 className="font-medium">Ana Paula Ferreira</h4>
                <p className="text-sm text-muted-foreground">Brasília, DF</p>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}