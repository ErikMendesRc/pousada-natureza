"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bed, Wind, Wifi, Tv, Users } from "lucide-react"
import { useLanguage } from "./language-provider"

export function AcomodacoesSection() {
  const { t } = useLanguage()

  return (
    <section
      id="acomodacoes"
      className="py-16 md:py-24 bg-primary-foreground scroll-mt-16"
      aria-labelledby="acomodacoes-heading"
    >
      <div className="container">
        <div className="text-center mb-12">
          <h2 id="acomodacoes-heading" className="text-3xl md:text-4xl font-bold mb-4">
            {t("accommodations.title")}
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">{t("accommodations.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
          <Image
            src="/images/pousada1.jpeg?height=600&width=600"
            alt="Interior de um chalé confortável da Pousada Natureza"
            width={600}
            height={600}
            className="rounded-lg object-cover h-auto w-full md:order-last"
          />

          <div>
            <h3 className="text-2xl font-semibold mb-4">{t("accommodations.heading")}</h3>
            <p className="mb-6 text-lg">{t("accommodations.p1")}</p>

            <p className="mb-6 text-lg">{t("accommodations.p2")}</p>

            <p className="mb-6 text-lg">{t("accommodations.p3")}</p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Bed className="h-5 w-5 text-primary" aria-hidden="true" />
                <span>{t("accommodations.beds")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Wind className="h-5 w-5 text-primary" aria-hidden="true" />
                <span>{t("accommodations.ac")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Wifi className="h-5 w-5 text-primary" aria-hidden="true" />
                <span>{t("accommodations.wifi")}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bed className="h-5 w-5 text-primary" aria-hidden="true" />
                {t("accommodations.rooms")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="/images/quarto.png?height=200&width=400"
                alt="Quarto com cama de solteiro e beliche na Pousada Natureza"
                width={400}
                height={200}
                className="rounded-lg object-cover h-auto w-full mb-4"
              />
              <p className="text-muted-foreground mb-4">{t("accommodations.rooms.desc")}</p>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" aria-hidden="true" />
                <span>{t("accommodations.capacity")}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bed className="h-5 w-5 text-primary" aria-hidden="true" />
                {t("accommodations.special")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="/about/quarto.png?height=200&width=400"
                alt="Quarto especial com cama de casal na Pousada Natureza"
                width={400}
                height={200}
                className="rounded-lg object-cover h-auto w-full mb-4"
              />
              <p className="text-muted-foreground mb-4">{t("accommodations.special.desc")}</p>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" aria-hidden="true" />
                <span>{t("accommodations.special.capacity")}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-primary"
                >
                  <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                  <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4" />
                  <path d="M12 12h.01" />
                </svg>
                {t("accommodations.amenities")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="/about/amenidade.png?height=200&width=400"
                alt="Área comum da Pousada Natureza com vista para o rio"
                width={400}
                height={200}
                className="rounded-lg object-cover h-auto w-full mb-4"
              />
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Wind className="h-4 w-4 text-primary" aria-hidden="true" />
                  <span>{t("accommodations.amenities.item1")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Wifi className="h-4 w-4 text-primary" aria-hidden="true" />
                  <span>{t("accommodations.amenities.item2")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-primary"
                  >
                    <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                    <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4" />
                    <path d="M12 12h.01" />
                  </svg>
                  <span>{t("accommodations.amenities.item4")}</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}