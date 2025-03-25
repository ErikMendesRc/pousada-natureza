"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X } from "lucide-react"
import { useLanguage } from "./language-provider"

export function GaleriaSection() {
  const { t } = useLanguage()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const images = [
    {
      src: "/galeria/sol.jpg?height=400&width=600",
      alt: "Por do sol Rio Preto da Eva 2024",
      width: 600,
      height: 400,
    },
    {
      src: "/galeria/75.jpg?height=400&width=600",
      alt: "Tucunaré Açu: 75cm",
      width: 600,
      height: 400,
    },
    {
      src: "/galeria/ruy.jpg?height=400&width=600",
      alt: "2025: Ruy Martins: Proprietário",
      width: 600,
      height: 400,
    },
    {
      src: "/galeria/barco03.jpg?height=400&width=600",
      alt: "2025: Igarapé Tiririca: Cabeceira.",
      width: 600,
      height: 400,
    },
    {
      src: "/galeria/77.jpg?height=400&width=600",
      alt: "2025: Tucunaré Açu: 77cm",
      width: 600,
      height: 400,
    },
    {
      src: "/galeria/73cm.jpg?height=400&width=600",
      alt: "2025: Tucunaré Açu: 73,5cm",
      width: 600,
      height: 400,
    },
    {
      src: "/galeria/pescadora.jpg?height=400&width=600",
      alt: "2025: Tucunaré Açu: 81.0cm",
      width: 600,
      height: 400,
    },
    {
      src: "/about/pescador.jpg?height=400&width=600",
      alt: "2025: Tucunaré Açu: 80.0cm",
      width: 600,
      height: 400,
    },
  ]

  return (
    <section
      id="galeria"
      className="py-16 md:py-24 bg-primary-foreground scroll-mt-16"
      aria-labelledby="galeria-heading"
    >
      <div className="container">
        <div className="text-center mb-12">
          <h2 id="galeria-heading" className="text-3xl md:text-4xl font-bold mb-4">
            {t("gallery.title")}
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">{t("gallery.subtitle")}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium text-center px-4">{image.alt}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button size="lg" variant="outline" asChild>
            <a href="#contato">{t("gallery.more")}</a>
          </Button>
        </div>

        <Dialog open={!!selectedImage} onOpenChange={(open: any) => !open && setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-2 z-10 rounded-full bg-white/80 backdrop-blur-sm"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">{t("gallery.close")}</span>
            </Button>
            {selectedImage && (
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="Imagem ampliada da Pousada Natureza"
                width={1200}
                height={800}
                className="object-contain max-h-[80vh]"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}