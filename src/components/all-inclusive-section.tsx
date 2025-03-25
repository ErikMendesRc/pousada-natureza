"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Coffee, Utensils, Beer, Droplets, Apple, Sandwich, Fish } from "lucide-react"
import { useLanguage } from "./language-provider"

export function AllInclusiveSection() {
  const { t } = useLanguage()

  return (
    <section
      id="all-inclusive"
      className="py-16 md:py-24 bg-primary-foreground scroll-mt-16"
      aria-labelledby="all-inclusive-heading"
    >
      <div className="container">
        <div className="text-center mb-12">
          <h2 id="all-inclusive-heading" className="text-3xl md:text-4xl font-bold mb-4">
            {t("all-inclusive.title")}
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">{t("all-inclusive.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
          <Image
            src="/all-inclusive/refeicao.png?height=600&width=600"
            alt="Refeição típica amazônica servida na Pousada Natureza"
            width={600}
            height={600}
            className="rounded-lg object-cover h-auto w-full md:order-last"
          />

          <div>
            <h3 className="text-2xl font-semibold mb-4">{t("all-inclusive.heading")}</h3>
            <p className="mb-6 text-lg">{t("all-inclusive.p1")}</p>

            <p className="mb-6 text-lg">{t("all-inclusive.p2")}</p>

            <p className="mb-6 text-lg">{t("all-inclusive.p3")}</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Utensils className="h-5 w-5 text-primary" aria-hidden="true" />
                {t("all-inclusive.meals")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>{t("all-inclusive.meals.item1")}</li>
                <li>{t("all-inclusive.meals.item2")}</li>
                <li>{t("all-inclusive.meals.item3")}</li>
                <li>{t("all-inclusive.meals.item4")}</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Beer className="h-5 w-5 text-primary" aria-hidden="true" />
                {t("all-inclusive.drinks")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>{t("all-inclusive.drinks.item1")}</li>
                <li>{t("all-inclusive.drinks.item2")}</li>
                <li>{t("all-inclusive.drinks.item3")}</li>
                <li>{t("all-inclusive.drinks.item4")}</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sandwich className="h-5 w-5 text-primary" aria-hidden="true" />
                {t("all-inclusive.snacks")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>{t("all-inclusive.snacks.item2")}</li>
                <li>{t("all-inclusive.snacks.item3")}</li>
                <li>{t("all-inclusive.snacks.item4")}</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 bg-white rounded-xl p-6 md:p-8 shadow-sm">
          <h3 className="text-xl font-semibold mb-4 text-center">{t("all-inclusive.highlights")}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <Fish className="h-8 w-8 text-primary" aria-hidden="true" />
              </div>
              <span className="text-sm font-medium">{t("all-inclusive.fish")}</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <Apple className="h-8 w-8 text-primary" aria-hidden="true" />
              </div>
              <span className="text-sm font-medium">{t("all-inclusive.fruits")}</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <Droplets className="h-8 w-8 text-primary" aria-hidden="true" />
              </div>
              <span className="text-sm font-medium">{t("all-inclusive.juices")}</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <Coffee className="h-8 w-8 text-primary" aria-hidden="true" />
              </div>
              <span className="text-sm font-medium">{t("all-inclusive.coffee")}</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
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
                  className="h-8 w-8 text-primary"
                >
                  <path d="M6 8h12"></path>
                  <path d="M8 8c0-2.2 1.8-4 4-4s4 1.8 4 4"></path>
                  <path d="M2 12h20"></path>
                  <path d="M16 12v8"></path>
                  <path d="M8 12v8"></path>
                  <path d="M12 12v8"></path>
                </svg>
              </div>
              <span className="text-sm font-medium">{t("all-inclusive.manioc")}</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <Beer className="h-8 w-8 text-primary" aria-hidden="true" />
              </div>
              <span className="text-sm font-medium">{t("all-inclusive.beer")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}