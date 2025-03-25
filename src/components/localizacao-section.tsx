"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Car, Plane, SailboatIcon as Boat, MapPin } from "lucide-react"
import { useLanguage } from "./language-provider"

export function LocalizacaoSection() {
  const { t } = useLanguage()

  return (
    <section id="localizacao" className="py-16 md:py-24 scroll-mt-16" aria-labelledby="localizacao-heading">
      <div className="container">
        <div className="text-center mb-12">
          <h2 id="localizacao-heading" className="text-3xl md:text-4xl font-bold mb-4">
            {t("location.title")}
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">{t("location.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">{t("location.heading")}</h3>
            <p className="mb-6 text-lg">{t("location.p1")}</p>

            <p className="mb-6 text-lg">{t("location.p2")}</p>

            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <Plane className="h-6 w-6 text-primary shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h4 className="font-medium text-lg">{t("location.plane")}</h4>
                    <p className="text-muted-foreground">{t("location.plane.desc")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 mb-4">
                  <Car className="h-6 w-6 text-primary shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h4 className="font-medium text-lg">{t("location.car")}</h4>
                    <p className="text-muted-foreground">{t("location.car.desc")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Boat className="h-6 w-6 text-primary shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h4 className="font-medium text-lg">{t("location.boat")}</h4>
                    <p className="text-muted-foreground">{t("location.boat.desc")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex items-center gap-3 mb-6">
              <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
              <span>{t("location.coordinates")}</span>
            </div>

            <Button size="lg" asChild>
              <a href="#contato">{t("location.transfer")}</a>
            </Button>
          </div>

          <div className="space-y-4">
            <div className="rounded-lg overflow-hidden h-[400px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4902.2926014187815!2d-59.4610173!3d-3.0718531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926ec7df45ab9693%3A0xc8c7eb35c0368805!2sPousada%20Natureza!5e1!3m2!1spt-BR!2sbr!4v1742929422402!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa da localização da Pousada Natureza"
                aria-label="Mapa mostrando a localização da Pousada Natureza no Rio Preto da Eva, Amazonas"
              ></iframe>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/images/aerea.png?height=200&width=300"
                alt="Vista aérea do Igarapé Tiririca, onde está localizada a Pousada Natureza"
                width={300}
                height={200}
                className="rounded-lg object-cover h-auto w-full"
              />
              <Image
                src="/galeria/sol.jpg?height=200&width=300"
                alt="Entrada da Pousada Natureza vista do rio"
                width={300}
                height={200}
                className="rounded-lg object-cover h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}