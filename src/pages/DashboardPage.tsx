import { useTranslation } from "react-i18next";

export function DashboardPage() {
    const {t} = useTranslation()
    return <h1 className="font-heading text-primary-dark">{t("dashboard.title")}</h1>
}