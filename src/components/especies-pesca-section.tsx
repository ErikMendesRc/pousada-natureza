"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Fish, Scale, Ruler } from "lucide-react"
import { useLanguage } from "./language-provider"

export function EspeciesPescaSection() {
  const { t } = useLanguage()

  return (
    <section
      id="especies"
      className="py-16 md:py-24 bg-primary-foreground scroll-mt-16"
      aria-labelledby="especies-heading"
    >
      <div className="container">
        <div className="text-center mb-12">
          <h2 id="especies-heading" className="text-3xl md:text-4xl font-bold mb-4">
            {t("species.title")}
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">{t("species.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
          <Image
            src="/images/foto1.jpeg?height=600&width=600"
            alt="Pescador exibindo um grande tucunaré capturado no Rio Preto da Eva"
            width={600}
            height={600}
            className="rounded-lg object-cover h-auto w-full"
          />

          <div>
            <h3 className="text-2xl font-semibold mb-4">{t("species.heading")}</h3>
            <p className="mb-6 text-lg">{t("species.p1")}</p>

            <p className="mb-6 text-lg">{t("species.p2")}</p>

            <p className="mb-6 text-lg">{t("species.p3")}</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Fish className="h-5 w-5 text-primary" aria-hidden="true" />
                {t("species.peacock")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="/peixes/12.png?height=200&width=400"
                alt="Tucunaré, peixe típico da Amazônia"
                width={400}
                height={200}
                className="rounded-lg object-cover h-auto w-full mb-4"
              />
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <Scale className="h-4 w-4 text-primary" aria-hidden="true" />
                  <span className="text-sm">{t("species.peacock.weight")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Ruler className="h-4 w-4 text-primary" aria-hidden="true" />
                  <span className="text-sm">{t("species.peacock.size")}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{t("species.peacock.desc")}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Fish className="h-5 w-5 text-primary" aria-hidden="true" />
                {t("species.arapaima")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="/peixes/10.png?height=200&width=400"
                alt="Pirarucu, um dos maiores peixes de água doce do mundo"
                width={400}
                height={200}
                className="rounded-lg object-cover h-auto w-full mb-4"
              />
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <Scale className="h-4 w-4 text-primary" aria-hidden="true" />
                  <span className="text-sm">{t("species.arapaima.weight")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Ruler className="h-4 w-4 text-primary" aria-hidden="true" />
                  <span className="text-sm">{t("species.arapaima.size")}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{t("species.arapaima.desc")}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Fish className="h-5 w-5 text-primary" aria-hidden="true" />
                {t("species.tambaqui")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="/peixes/11.png?height=200&width=400"
                alt="Tambaqui, peixe amazônico apreciado por pescadores"
                width={400}
                height={200}
                className="rounded-lg object-cover h-auto w-full mb-4"
              />
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <Scale className="h-4 w-4 text-primary" aria-hidden="true" />
                  <span className="text-sm">{t("species.tambaqui.weight")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Ruler className="h-4 w-4 text-primary" aria-hidden="true" />
                  <span className="text-sm">{t("species.tambaqui.size")}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{t("species.tambaqui.desc")}</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-6">{t("species.other")}</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="bg-white px-4 py-2 rounded-full text-sm">{t("species.traira")}</span>
            <span className="bg-white px-4 py-2 rounded-full text-sm">{t("species.pirarara")}</span>
            <span className="bg-white px-4 py-2 rounded-full text-sm">{t("species.surubim")}</span>
            <span className="bg-white px-4 py-2 rounded-full text-sm">{t("species.piraiba")}</span>
            <span className="bg-white px-4 py-2 rounded-full text-sm">{t("species.matrinxa")}</span>
            <span className="bg-white px-4 py-2 rounded-full text-sm">{t("species.piau")}</span>
            <span className="bg-white px-4 py-2 rounded-full text-sm">{t("species.aruana")}</span>
            <span className="bg-white px-4 py-2 rounded-full text-sm">{t("species.piranha")}</span>
          </div>
        </div>
      </div>
    </section>
  )
}