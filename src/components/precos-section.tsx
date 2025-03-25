"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, CreditCard, Calendar, CheckCircle } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "./language-provider"
import { CurrencyConverter } from "./currency-converter"

export function PrecosSection() {
  const { t } = useLanguage()

  return (
    <section id="precos" className="py-16 md:py-24 scroll-mt-16" aria-labelledby="precos-heading">
      <div className="container">
        <div className="text-center mb-12">
          <h2 id="precos-heading" className="text-3xl md:text-4xl font-bold mb-4">
            {t("prices.title")}
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">{t("prices.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">{t("prices.heading")}</h3>
            <p className="mb-6 text-lg">{t("prices.p1")}</p>

            <p className="mb-6 text-lg">{t("prices.p2")}</p>

            <p className="mb-6 text-lg">{t("prices.p3")}</p>

            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <DollarSign className="h-8 w-8 text-primary" aria-hidden="true" />
                    <div>
                      <h4 className="font-medium text-xl">{t("prices.per-person")}</h4>
                      <p className="text-muted-foreground">{t("prices.package")}</p>
                    </div>
                  </div>
                  <CurrencyConverter amount={5500} />
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{t("prices.item1")}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{t("prices.item2")}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{t("prices.item3")}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{t("prices.item4")}</span>
                  </div>
                </div>

                <Button size="lg" className="w-full" asChild>
                  <a href="#reservar">{t("button.book")}</a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Image
              src="/about/churrasco.png?height=400&width=600"
              alt="Grupo de pescadores satisfeitos na Pousada Natureza"
              width={600}
              height={400}
              className="rounded-lg object-cover h-auto w-full"
            />

            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <CreditCard className="h-5 w-5 text-primary" aria-hidden="true" />
                    {t("prices.payment")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <ul className="space-y-1">
                    <li>{t("prices.payment.item1")}</li>
                    <li>{t("prices.payment.item2")}</li>
                    <li>{t("prices.payment.item3")}</li>
                    <li>{t("prices.payment.item4")}</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Calendar className="h-5 w-5 text-primary" aria-hidden="true" />
                    {t("prices.reservation")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <ul className="space-y-1">
                    <li>{t("prices.reservation.item1")}</li>
                    <li>{t("prices.reservation.item2")}</li>
                    <li>{t("prices.reservation.item3")}</li>
                    <li>{t("prices.reservation.item4")}</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="bg-primary-foreground rounded-xl p-6 md:p-8">
          <h3 className="text-xl font-semibold mb-6 text-center">{t("prices.faq")}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2">{t("prices.faq1.q")}</h4>
              <p className="text-muted-foreground text-sm">{t("prices.faq1.a")}</p>
            </div>

            <div>
              <h4 className="font-medium mb-2">{t("prices.faq2.q")}</h4>
              <p className="text-muted-foreground text-sm">{t("prices.faq2.a")}</p>
            </div>

            <div>
              <h4 className="font-medium mb-2">{t("prices.faq3.q")}</h4>
              <p className="text-muted-foreground text-sm">{t("prices.faq3.a")}</p>
            </div>

            <div>
              <h4 className="font-medium mb-2">{t("prices.faq4.q")}</h4>
              <p className="text-muted-foreground text-sm">{t("prices.faq4.a")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}