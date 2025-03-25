"use client"

import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import { useLanguage } from "./language-provider"

export function SobreSection() {
  const { t } = useLanguage()

  return (
    <section id="sobre" className="py-16 md:py-24 bg-primary-foreground scroll-mt-16" aria-labelledby="sobre-heading">
      <div className="container">
        <div className="text-center mb-12">
          <h2 id="sobre-heading" className="text-3xl md:text-4xl font-bold mb-4">
            {t("about.title")}
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">{t("about.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="mb-6 text-lg">{t("about.p1")}</p>
            <p className="mb-6 text-lg">{t("about.p2")}</p>
            <p className="mb-6 text-lg">{t("about.p3")}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <span>{t("about.feature1")}</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <span>{t("about.feature2")}</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <span>{t("about.feature3")}</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <span>{t("about.feature4")}</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <span>{t("about.feature5")}</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <span>{t("about.feature6")}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <Image
                src="/about/pousada01.jpg?height=300&width=400"
                alt="Vista da Pousada Natureza no Rio Preto da Eva"
                width={300}
                height={400}
                className="rounded-lg object-cover h-auto w-full"
                priority
              />
              <Image
                src="/images/quarto.png?height=300&width=300"
                alt="Quarto de casal em nossa pousada."
                width={300}
                height={300}
                className="rounded-lg object-cover h-auto w-full"
              />
            </div>
            <div className="space-y-4 pt-8">
              <Image
                src="/about/pousada03.jpg?height=300&width=300"
                alt="Floresta amazônica ao redor da Pousada Natureza"
                width={300}
                height={300}
                className="rounded-lg object-cover h-auto w-full"
              />
              <Image
                src="/about/pousada02.jpg?height=400&width=300"
                alt="Chalé confortável da Pousada Natureza"
                width={300}
                height={400}
                className="rounded-lg object-cover h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}