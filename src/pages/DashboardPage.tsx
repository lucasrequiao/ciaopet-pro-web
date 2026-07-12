import { AppShell } from "@/components/layout/App-shell";
import { useTranslation } from "react-i18next";

export function DashboardPage() {
    const {t} = useTranslation()
    return (
        <AppShell>
            <div>{t("dashboard.title")}</div>
        </AppShell>
    )
}