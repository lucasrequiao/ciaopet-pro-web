import { Megaphone } from "lucide-react"
import { useTranslation } from "react-i18next"

export function NewsBar() {
    const {t} = useTranslation()
    return (
        <div className="flex items-center justify-between text-white bg-primary-dark rounded-md px-5 py-2">
            <div className="flex items-center gap-4">
                <Megaphone size={40}/>
                <span className="text-2xl font-bold">{t("dashboard.news.cta")}</span>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-sm mr-auto">{t("dashboard.news.developedBy")}</span>
                <p className="text-4xl font-bold">CiaoPet PRO</p>
                <span className="text-sm font-semibold">Uniti, guidati dal benessere</span>
            </div>
        </div>
    )
}