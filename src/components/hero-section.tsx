"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Play } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { useLanguage } from "./language-provider"

export function HeroSection() {
  const { t } = useLanguage()
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVideoLoaded(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden" aria-labelledby="hero-heading">
      {/* Vídeo de fundo */}
      <div className="absolute inset-0 bg-black">
        {isVideoLoaded && (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover opacity-95"
            poster="/images/vista-aerea.png?height=1080&width=1920"
            aria-hidden="true"
          >
            <source src="/placeholder-video.mp4" type="video/mp4" />
            Seu navegador não suporta vídeos HTML5.
          </video>
        )}
        {!isVideoLoaded && (
          <div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
            }}
            aria-hidden="true"
          />
        )}
      </div>

      {/* Overlay gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" aria-hidden="true" />

      {/* Conteúdo */}
      <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <h1
          id="hero-heading"
          className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6"
        >
          {t("hero.title")}
        </h1>
        <p className="max-w-2xl text-lg md:text-xl mb-8 text-white/90">{t("hero.subtitle")}</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="text-base" asChild>
            <Link href="#reservar">{t("hero.cta")}</Link>
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm text-base gap-2">
                <Play className="h-4 w-4" />
                {t("hero.video")}
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl p-1 bg-black border-0">
              <div className="aspect-video w-full">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/5EMRmadnsfs"
                  title="Vídeo da Pousada Natureza"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-sm"
                ></iframe>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Link href="#sobre" aria-label="Rolar para baixo" className="flex flex-col items-center">
            <span className="text-sm font-medium mb-2">{t("hero.discover")}</span>
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
              className="h-6 w-6"
            >
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}