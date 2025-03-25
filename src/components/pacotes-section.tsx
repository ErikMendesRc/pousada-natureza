"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Calendar, Fish, CheckCircle } from "lucide-react"
import { useLanguage } from "./language-provider"

export function PacotesSection() {
  const { t } = useLanguage()

  return (
    <section id="pacotes" className="py-16 md:py-24 scroll-mt-16" aria-labelledby="pacotes-heading">
      <div className="container">
        <div className="text-center mb-12">
          <h2 id="pacotes-heading" className="text-3xl md:text-4xl font-bold mb-4">
            {t("packages.title")}
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">{t("packages.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">{t("packages.heading")}</h3>
            <p className="mb-6 text-lg">{t("packages.p1")}</p>

            <p className="mb-6 text-lg">{t("packages.p2")}</p>

            <Card className="mb-6">
              <CardContent className="p-6 grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-primary shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h4 className="font-medium text-lg">{t("packages.group")}</h4>
                    <p className="text-muted-foreground whitespace-pre-line">{t("packages.group.desc")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="h-6 w-6 text-primary shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h4 className="font-medium text-lg">{t("packages.duration")}</h4>
                    <p className="text-muted-foreground whitespace-pre-line">{t("packages.duration.desc")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Fish className="h-6 w-6 text-primary shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h4 className="font-medium text-lg">{t("packages.modalities")}</h4>
                    <p className="text-muted-foreground whitespace-pre-line">{t("packages.modalities.desc")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h4 className="font-medium text-lg">{t("packages.all-inclusive")}</h4>
                    <p className="text-muted-foreground whitespace-pre-line">{t("packages.all-inclusive.desc")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button size="lg" asChild>
              <a href="#reservar">{t("packages.request")}</a>
            </Button>
          </div>

          <Image
            src="/about/pescador.jpg?height=600&width=600"
            alt="Grupo de pescadores na Pousada Natureza no Rio Preto da Eva"
            width={600}
            height={600}
            className="rounded-lg object-cover h-auto w-full"
          />
        </div>

        <div className="bg-primary-foreground rounded-xl p-6 md:p-8 lg:p-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">{t("packages.why")}</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{t("packages.reason1")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{t("packages.reason2")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{t("packages.reason3")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{t("packages.reason4")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{t("packages.reason5")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{t("packages.reason6")}</span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/pacotes/pescadora.png?height=300&width=300"
                alt="Pescador com tucunaré no Rio Preto da Eva"
                width={300}
                height={300}
                className="rounded-lg object-cover h-auto w-full"
              />
              <Image
                src="/pacotes/barco01.png?height=300&width=300"
                alt="Barco de pesca no Igarapé Tiririca"
                width={300}
                height={300}
                className="rounded-lg object-cover h-auto w-full"
              />
              <Image
                src="/pacotes/cafe.png?height=300&width=300"
                alt="Refeição regional na Pousada Natureza"
                width={300}
                height={300}
                className="rounded-lg object-cover h-auto w-full"
              />
              <Image
                src="/pacotes/vista-aerea.png?height=300&width=300"
                alt="Vista aérea da Pousada Natureza"
                width={300}
                height={300}
                className="rounded-lg object-cover h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}