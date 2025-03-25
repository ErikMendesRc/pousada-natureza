"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "./language-provider"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { DollarSign } from "lucide-react"

type Currency = "BRL" | "USD" | "EUR"

interface CurrencyRates {
  USD: number
  EUR: number
}

export function CurrencyConverter({ amount }: { amount: number }) {
  const { t } = useLanguage()
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>("BRL")
  const [rates, setRates] = useState<CurrencyRates>({ USD: 0.2, EUR: 0.18 })
  const [convertedAmount, setConvertedAmount] = useState<number>(amount)

  useEffect(() => {
    // In a real application, you would fetch the latest exchange rates from an API
    // For this example, we'll use fixed rates
    setRates({
      USD: 0.2, // 1 BRL = 0.2 USD
      EUR: 0.18, // 1 BRL = 0.18 EUR
    })
  }, [])

  useEffect(() => {
    if (selectedCurrency === "BRL") {
      setConvertedAmount(amount)
    } else if (selectedCurrency === "USD") {
      setConvertedAmount(amount * rates.USD)
    } else if (selectedCurrency === "EUR") {
      setConvertedAmount(amount * rates.EUR)
    }
  }, [selectedCurrency, amount, rates])

  const formatCurrency = (value: number, currency: Currency) => {
    const formatter = new Intl.NumberFormat(currency === "BRL" ? "pt-BR" : currency === "USD" ? "en-US" : "de-DE", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
    return formatter.format(value)
  }

  const getCurrencySymbol = (currency: Currency) => {
    switch (currency) {
      case "BRL":
        return t("currency.brl")
      case "USD":
        return t("currency.usd")
      case "EUR":
        return t("currency.eur")
      default:
        return ""
    }
  }

  return (
    <div className="flex items-center gap-2">
      <span className="font-bold text-2xl">{formatCurrency(convertedAmount, selectedCurrency)}</span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <DollarSign className="h-3.5 w-3.5" />
            {selectedCurrency}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem
            onClick={() => setSelectedCurrency("BRL")}
            className={selectedCurrency === "BRL" ? "bg-primary/10 font-medium" : ""}
          >
            🇧🇷 BRL ({getCurrencySymbol("BRL")})
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setSelectedCurrency("USD")}
            className={selectedCurrency === "USD" ? "bg-primary/10 font-medium" : ""}
          >
            🇺🇸 USD ({getCurrencySymbol("USD")})
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setSelectedCurrency("EUR")}
            className={selectedCurrency === "EUR" ? "bg-primary/10 font-medium" : ""}
          >
            🇪🇺 EUR ({getCurrencySymbol("EUR")})
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}