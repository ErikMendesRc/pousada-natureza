// @/components/ui/calendar.tsx

import { DayPicker } from "react-day-picker"
import type { PropsBase, PropsSingle } from "react-day-picker"
import "react-day-picker/style.css"

// Combine as props base e as do modo "single", omitindo "mode"
type CalendarProps = Omit<PropsBase & PropsSingle, "mode">

export function Calendar({ selected, onSelect, locale, ...rest }: CalendarProps) {
  return (
    <DayPicker
      // Define o modo single manualmente
      mode="single"
      // Agora você pode usar as props
      selected={selected}
      onSelect={onSelect}
      locale={locale}
      {...rest}
    />
  )
}