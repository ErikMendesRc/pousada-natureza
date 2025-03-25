"use client"

import React, { useRef, useState } from "react"
import emailjs from "emailjs-com"
import { EMAILJS_CONFIG } from "@/config/emailjs.config"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { CalendarIcon, Mail, MapPin, Phone, Facebook, Instagram } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useLanguage } from "./language-provider"

export function ContatoSection() {
  const { t, language } = useLanguage()
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return

    emailjs
      .sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        formRef.current,
        EMAILJS_CONFIG.PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Email enviado com sucesso!", result.text)
          setFormSubmitted(true)
        },
        (error) => {
          console.error("Erro ao enviar o email:", error.text)
        }
      )
  }

  // Determina o locale com base na linguagem selecionada
  const getLocale = () => {
    switch (language) {
      case "en":
        return undefined
      case "es":
        return undefined
      default:
        return ptBR
    }
  }

  return (
    <section
      id="contato"
      className="py-16 md:py-24 bg-primary-foreground scroll-mt-16"
      aria-labelledby="contato-heading"
    >
      <div className="container">
        <div className="text-center mb-12">
          <h2 id="contato-heading" className="text-3xl md:text-4xl font-bold mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">{t("contact.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            {/* Informações de contato */}
            <h3 className="text-2xl font-semibold mb-4">{t("contact.info")}</h3>
            <p className="mb-6 text-lg">{t("contact.p")}</p>
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <Phone className="h-6 w-6 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h4 className="font-medium text-lg">{t("contact.phone")}</h4>
                    <p className="text-muted-foreground">
                      <a href="tel:+559295266653" className="hover:text-primary transition-colors">
                        (92) 9526-6653
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 mb-4">
                  <Mail className="h-6 w-6 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h4 className="font-medium text-lg">{t("contact.email")}</h4>
                    <p className="text-muted-foreground">
                      <a
                        href="mailto:contato.pousadanatureza@gmail.com"
                        className="hover:text-primary transition-colors"
                      >
                        contato.pousadanatureza@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-6 w-6 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h4 className="font-medium text-lg">{t("contact.address")}</h4>
                    <p className="text-muted-foreground whitespace-pre-line">
                      {t("contact.address.text")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h3 className="text-xl font-semibold mb-4">{t("contact.social")}</h3>
            <div className="flex gap-4 mb-6">
              <a
                href="https://www.facebook.com/ruy.martins.923"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-sm hover:bg-primary/10 transition-colors"
                aria-label="Facebook da Pousada Natureza"
              >
                <Facebook className="h-6 w-6 text-primary" aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com/pousada_natureza/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-sm hover:bg-primary/10 transition-colors"
                aria-label="Instagram da Pousada Natureza"
              >
                <Instagram className="h-6 w-6 text-primary" aria-hidden="true" />
              </a>
            </div>

            <h3 className="text-xl font-semibold mb-4">{t("contact.hours")}</h3>
            <p className="mb-2">
              <strong>{t("contact.hours.phone")}</strong>
            </p>
            <p className="mb-2">
              <strong>{t("contact.hours.email")}</strong>
            </p>
            <p className="mb-2">
              <strong>{t("contact.hours.checkin")}</strong>
            </p>
            <p>
              <strong>{t("contact.hours.checkout")}</strong>
            </p>
          </div>

          <div id="reservar">
            <h3 className="text-2xl font-semibold mb-4">{t("contact.form")}</h3>
            {formSubmitted ? (
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
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
                      className="h-8 w-8 text-green-600"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <h4 className="text-xl font-medium mb-2">{t("contact.success")}</h4>
                  <p className="text-muted-foreground mb-4">{t("contact.success.text")}</p>
                  <Button variant="outline" onClick={() => setFormSubmitted(false)}>
                    {t("contact.new")}
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nome">
                      {t("contact.name")} <span className="text-red-500">*</span>
                    </Label>
                    <Input id="nome" name="nome" placeholder="Seu nome completo" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      {t("contact.email.label")} <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu.email@exemplo.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="telefone">
                      {t("contact.phone.label")} <span className="text-red-500">*</span>
                    </Label>
                    <Input id="telefone" name="telefone" placeholder="(00) 00000-0000" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="assunto">
                      {t("contact.subject")} <span className="text-red-500">*</span>
                    </Label>
                    <Select name="assunto" required>
                      <SelectTrigger id="assunto">
                        <SelectValue placeholder={t("contact.subject")} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="reserva">{t("contact.subject.reservation")}</SelectItem>
                        <SelectItem value="informacoes">{t("contact.subject.info")}</SelectItem>
                        <SelectItem value="pacotes">{t("contact.subject.packages")}</SelectItem>
                        <SelectItem value="orcamento">{t("contact.subject.quote")}</SelectItem>
                        <SelectItem value="outros">{t("contact.subject.other")}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="data">{t("contact.date")}</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button id="data" variant="outline" className="w-full justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" aria-hidden="true" />
                        {date ? format(date, "PPP", { locale: getLocale() }) : t("contact.date.select")}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        selected={date}
                        onSelect={setDate}
                        locale={getLocale()}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Campo oculto para enviar a data selecionada para o emailjs */}
                <input
                  type="hidden"
                  name="data"
                  value={date ? format(date, "PPP", { locale: getLocale() }) : ""}
                />

                <div className="space-y-2">
                  <Label htmlFor="pessoas">{t("contact.people")}</Label>
                  <Select name="pessoas">
                    <SelectTrigger id="pessoas">
                      <SelectValue placeholder={t("contact.people.select")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-3">{t("contact.people.1-3")}</SelectItem>
                      <SelectItem value="4-6">{t("contact.people.4-6")}</SelectItem>
                      <SelectItem value="7-9">{t("contact.people.7-9")}</SelectItem>
                      <SelectItem value="10-12">{t("contact.people.10-12")}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensagem">
                    {t("contact.message")} <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="mensagem"
                    name="mensagem"
                    placeholder={t("contact.message.placeholder")}
                    rows={5}
                    required
                  />
                </div>

                <div className="flex items-start gap-2">
                  <Checkbox id="termos" name="termos" required />
                  <div className="grid gap-1.5 leading-none">
                    <Label htmlFor="termos" className="text-sm font-medium leading-none">
                      {t("contact.terms")}
                    </Label>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  {t("contact.send")}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}