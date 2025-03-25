"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Anchor, Sailboat, Fuel, Compass, Users, Shield } from "lucide-react"
import { useLanguage } from "./language-provider"

export function EquipamentosSection() {
  const { t } = useLanguage()

  return (
    <section id="equipamentos" className="py-16 md:py-24 scroll-mt-16" aria-labelledby="equipamentos-heading">
      <div className="container">
        <div className="text-center mb-12">
          <h2 id="equipamentos-heading" className="text-3xl md:text-4xl font-bold mb-4">
            {t("equipment.title")}
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">{t("equipment.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">{t("equipment.heading")}</h3>
            <p className="mb-6 text-lg">{t("equipment.p1")}</p>

            <p className="mb-6 text-lg">{t("equipment.p2")}</p>

            <p className="mb-6 text-lg">{t("equipment.p3")}</p>

            <Card className="mb-6">
              <CardContent className="p-6 grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Sailboat className="h-6 w-6 text-primary shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h4 className="font-medium text-lg">{t("equipment.boats")}</h4>
                    <p className="text-muted-foreground">{t("equipment.boats.desc")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-primary shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h4 className="font-medium text-lg">{t("equipment.pilots")}</h4>
                    <p className="text-muted-foreground">{t("equipment.pilots.desc")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Fuel className="h-6 w-6 text-primary shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h4 className="font-medium text-lg">{t("equipment.fuel")}</h4>
                    <p className="text-muted-foreground">{t("equipment.fuel.desc")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Anchor className="h-6 w-6 text-primary shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h4 className="font-medium text-lg">{t("equipment.baits")}</h4>
                    <p className="text-muted-foreground">{t("equipment.baits.desc")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/barcos/barco01.jpg?height=300&width=300"
              alt="Barco com motor 15HP utilizado na pesca no Rio Preto da Eva"
              width={300}
              height={300}
              className="rounded-lg object-cover h-auto w-full"
            />
            <Image
              src="/barcos/barco02.jpg?height=300&width=300"
              alt="Piloto nativo guiando pescadores no Igarapé Tiririca"
              width={300}
              height={300}
              className="rounded-lg object-cover h-auto w-full"
            />
          </div>
        </div>

        <div className="bg-primary-foreground rounded-xl p-6 md:p-8">
          <h3 className="text-xl font-semibold mb-6 text-center">{t("equipment.included")}</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Sailboat className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <h4 className="font-medium mb-2">{t("equipment.boats.title")}</h4>
              <p className="text-sm text-muted-foreground">{t("equipment.boats.subtitle")}</p>
            </div>

            <div className="bg-white rounded-lg p-4 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Compass className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <h4 className="font-medium mb-2">{t("equipment.guides.title")}</h4>
              <p className="text-sm text-muted-foreground">{t("equipment.guides.subtitle")}</p>
            </div>

            <div className="bg-white rounded-lg p-4 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Fuel className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <h4 className="font-medium mb-2">{t("equipment.fuel.title")}</h4>
              <p className="text-sm text-muted-foreground">{t("equipment.fuel.subtitle")}</p>
            </div>

            <div className="bg-white rounded-lg p-4 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Shield className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <h4 className="font-medium mb-2">{t("equipment.safety.title")}</h4>
              <p className="text-sm text-muted-foreground">{t("equipment.safety.subtitle")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}