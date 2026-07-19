import type { LoyalClientsStats } from "@/mocks/dashboard"
import { useTranslation } from "react-i18next"
import { Dog } from "lucide-react"

type LoyalClientsCardProps = {
    stats: LoyalClientsStats
}

export function LoyalClientsCard({ stats }: LoyalClientsCardProps) {
    const {t} = useTranslation()
    return (
        <div className="flex items-start justify-between bg-white rounded-sm border border-border px-2 py-2">
            <div className="flex flex-col">
                <span className="text-primary font-semibold pt-8">{t("dashboard.loyalClients.title")}</span>
                <span className="text-primary text-4xl">{stats.total}</span>
                <span className="text-sm">{t("dashboard.loyalClients.newThisMonth", { count: stats.newThisMonth })}</span>
            </div>
            <div>
                <Dog className="text-primary" size={70}/>
            </div>
        </div>
    )
}