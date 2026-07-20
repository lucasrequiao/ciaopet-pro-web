import { capitalize, formatFullDate, formatTime, formatTimeZoneAbbr } from "@/lib/format"
import { useTranslation } from "react-i18next"

type DashboardGreetingProps = {
    locale: string
    timeZone: string
    locationLabel: string
}

export function DashboardGreeting({ locale, timeZone, locationLabel }: DashboardGreetingProps) {
    const {t} = useTranslation()
    const now = new Date()
    return (
        <div className="flex flex-col px-6">
            <p className="text-primary font-extrabold text-3xl">{t("dashboard.greeting.title", { name:  "Leonardo Rossi"})}</p>
            <div className="flex justify-between items-end">
                <span>{t("dashboard.greeting.subtitle")}</span>
                <span>
                    {t("dashboard.greeting.dateTime", {
                        date: capitalize(formatFullDate(now, locale, timeZone)),
                        timeZone: formatTimeZoneAbbr(now, locale, timeZone),
                        time: formatTime(now.toISOString(), locale, timeZone),
                        location: locationLabel,
                    })}
                </span>
            </div>
        </div>       
    )
}