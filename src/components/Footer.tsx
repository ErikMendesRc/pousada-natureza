"use client"

import Link from "next/link"
import { Fish, Mail, MapPin, Phone } from "lucide-react"
import { useLanguage } from "./language-provider"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-primary-foreground border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Fish className="h-6 w-6 text-primary" aria-hidden="true" />
              <span className="text-xl font-bold">Pousada Natureza</span>
            </div>
            <p className="text-muted-foreground mb-4">{t("footer.description")}</p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/ruy.martins.923?locale=pt_BR"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook da Pousada Natureza"
              >
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
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/pousada_natureza"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram da Pousada Natureza"
              >
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
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://wa.me/559295266653"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="WhatsApp da Pousada Natureza"
              >
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
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M17.6 6.8A7.8 7.8 0 0 0 12 4c-4.4 0-8 3.6-8 8 0 1.4.4 2.8 1 4l-1 4 4.2-1c1.2.6 2.6 1 4 1 4.4 0 8-3.6 8-8 0-2.2-.8-4.2-2.6-5.8" />
                  <path d="M14.5 14.2c-.3.4-1.2.7-1.5.8-.4 0-.7 0-1-.2-.6-.2-1.2-.5-1.7-1-.3-.2-.5-.5-.7-.7-.2-.3 0-.5.2-.7l.6-.6c.2-.1.3-.3.4-.5v-.4c0-.2-.6-1.4-.8-1.7-.1-.3-.3-.4-.5-.4h-.5c-.2 0-.5.2-.6.3-.7.8-.7 1.8 0 2.8 1.4 2 3.2 2.9 5.4 2.7.2 0 .4-.2.6-.4.2-.2.3-.4.3-.6v-.4c0-.2-.1-.4-.2-.5" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.links")}</h3>
            <nav className="flex flex-col gap-2">
              <Link href="#sobre" className="text-muted-foreground hover:text-primary transition-colors">
                {t("footer.about")}
              </Link>
              <Link href="#pacotes" className="text-muted-foreground hover:text-primary transition-colors">
                {t("footer.packages")}
              </Link>
              <Link href="#all-inclusive" className="text-muted-foreground hover:text-primary transition-colors">
                {t("footer.all-inclusive")}
              </Link>
              <Link href="#equipamentos" className="text-muted-foreground hover:text-primary transition-colors">
                {t("footer.equipment")}
              </Link>
              <Link href="#especies" className="text-muted-foreground hover:text-primary transition-colors">
                {t("footer.species")}
              </Link>
              <Link href="#precos" className="text-muted-foreground hover:text-primary transition-colors">
                {t("footer.prices")}
              </Link>
              <Link href="#acomodacoes" className="text-muted-foreground hover:text-primary transition-colors">
                {t("footer.accommodations")}
              </Link>
              <Link href="#localizacao" className="text-muted-foreground hover:text-primary transition-colors">
                {t("footer.location")}
              </Link>
              <Link href="#contato" className="text-muted-foreground hover:text-primary transition-colors">
                {t("footer.contact")}
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("contact.title")}</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-muted-foreground">
                  Igarapé Tiririca, Rio Preto da Eva
                  <br />
                  Amazonas, Brasil
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" aria-hidden="true" />
                <a href="tel:+559295266653" className="text-muted-foreground hover:text-primary transition-colors">
                  (92) 9526-6653
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" aria-hidden="true" />
                <a
                  href="mailto:contato.pousadanatureza@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  contato.pousadanatureza@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Pousada Natureza. {t("footer.rights")}
          </p>
          <p className="mt-2">
            <Link href="#" className="hover:underline">
              {t("footer.privacy")}
            </Link>{" "}
            |
            <Link href="#" className="hover:underline ml-2">
              {t("footer.terms")}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}