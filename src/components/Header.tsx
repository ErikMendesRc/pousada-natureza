"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Fish, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSelector } from "./language-selector"
import { useLanguage } from "./language-provider"

export function Header() {
  const { t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b shadow-sm"
          : "bg-transparent"
      }`}
      aria-label="Navegação principal"
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2" aria-label="Pousada Natureza - Página inicial">
            <Fish className="h-6 w-6 text-primary" aria-hidden="true" />
            <span className="text-xl font-bold">Pousada Natureza</span>
          </Link>
        </div>
        <nav className="hidden md:flex gap-6" aria-label="Menu principal">
          <Link href="#sobre" className="text-sm font-medium hover:text-primary">
            {t("nav.about")}
          </Link>
          <Link href="#pacotes" className="text-sm font-medium hover:text-primary">
            {t("nav.packages")}
          </Link>
          <Link href="#all-inclusive" className="text-sm font-medium hover:text-primary">
            {t("nav.all-inclusive")}
          </Link>
          <Link href="#equipamentos" className="text-sm font-medium hover:text-primary">
            {t("nav.equipment")}
          </Link>
          <Link href="#especies" className="text-sm font-medium hover:text-primary">
            {t("nav.species")}
          </Link>
          <Link href="#precos" className="text-sm font-medium hover:text-primary">
            {t("nav.prices")}
          </Link>
          <Link href="#acomodacoes" className="text-sm font-medium hover:text-primary">
            {t("nav.accommodations")}
          </Link>
          <Link href="#localizacao" className="text-sm font-medium hover:text-primary">
            {t("nav.location")}
          </Link>
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <LanguageSelector />
          <Button variant="outline" size="sm" className="gap-2" asChild>
            <Link href="#contato" aria-label="Entre em contato conosco">
              <Phone className="h-4 w-4" aria-hidden="true" />
              {t("nav.contact")}
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="#reservar" aria-label="Faça sua reserva agora">
              {t("button.book")}
            </Link>
          </Button>
        </div>
        <div className="flex items-center md:hidden gap-2">
          <LanguageSelector />
          <button
            className="flex items-center justify-center rounded-md p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
            <span className="sr-only">{isMenuOpen ? "Fechar menu" : "Abrir menu"}</span>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="container md:hidden py-4">
          <nav className="flex flex-col gap-4" aria-label="Menu mobile">
            <Link href="#sobre" className="text-sm font-medium hover:text-primary" onClick={() => setIsMenuOpen(false)}>
              {t("nav.about")}
            </Link>
            <Link
              href="#pacotes"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.packages")}
            </Link>
            <Link
              href="#all-inclusive"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.all-inclusive")}
            </Link>
            <Link
              href="#equipamentos"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.equipment")}
            </Link>
            <Link
              href="#especies"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.species")}
            </Link>
            <Link
              href="#precos"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.prices")}
            </Link>
            <Link
              href="#acomodacoes"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.accommodations")}
            </Link>
            <Link
              href="#localizacao"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.location")}
            </Link>
            <div className="flex flex-col gap-2 mt-2">
              <Button variant="outline" size="sm" className="gap-2 justify-center" asChild>
                <Link href="#contato" onClick={() => setIsMenuOpen(false)}>
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {t("nav.contact")}
                </Link>
              </Button>
              <Button size="sm" className="w-full" asChild>
                <Link href="#reservar" onClick={() => setIsMenuOpen(false)}>
                  {t("button.book")}
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}