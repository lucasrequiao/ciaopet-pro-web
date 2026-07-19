import { Eye } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { CashflowSummary } from "@/mocks/dashboard";
import { formatCurrency, formatDate } from "@/lib/format";
import { SectionCard } from "@/components/SectionCard";

type CashflowCardProps = {
    summary: CashflowSummary
    locale: string
    currency: string
}

export function CashflowCard({ summary, locale, currency }: CashflowCardProps) {
    const {t} = useTranslation()
    return (
        <SectionCard 
            title={t("dashboard.cashflow.title")} 
            headerAction={
                <button type="button" aria-label={t("dashboard.cashflow.toggleVisibility")}>
                    <Eye className="h-4 w-4" />
                </button>
            }
        >
            <div className="flex flex-col py-2 px-2">
                <div className="flex items-center justify-between">
                    <div className="flex gap-1 items-center">
                        <span className="h-3 w-3 bg-success rounded-full"></span>
                        <span className="text-sm">{t("dashboard.cashflow.totalReceived")}</span>
                    </div>
                    <span className="text-success text-sm font-medium">{formatCurrency(summary?.totalReceived, locale, currency)}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-muted-foreground text-xs">{t("dashboard.cashflow.receivable")}</span>
                    <span className="text-muted-foreground text-xs">{formatCurrency(summary?.receivable, locale, currency)}</span>
                </div>           
            </div>
            <div className="flex flex-col py-2 px-2">
                <div className="flex items-center justify-between">
                    <div className="flex gap-1 items-center">
                        <span className="h-3 w-3 bg-destructive rounded-full"></span>
                        <span className="text-sm">{t("dashboard.cashflow.totalPaid")}</span>
                    </div>
                    <span className="text-destructive text-sm font-medium">{formatCurrency(summary?.totalPaid, locale, currency)}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-muted-foreground text-xs">{t("dashboard.cashflow.payable")}</span>
                    <span className="text-muted-foreground text-xs">{formatCurrency(summary?.payable, locale, currency)}</span>
                </div>           
            </div>
            <p className="text-xs text-muted-foreground pt-1 px-2">{t("dashboard.cashflow.since", { date: formatDate(summary.collectedSince, locale) })}</p>
        </SectionCard>
    )
}