import { SectionCard } from "@/components/SectionCard";
import { Input } from "@/components/ui/input";
import { NotepadText } from "lucide-react";
import { useTranslation } from "react-i18next";

export function NotesCard() {
    const {t} = useTranslation()
    return (
        <SectionCard title={t("dashboard.notes.title")}>
            <div className="flex flex-col items-center justify-center px-2 gap-4">
                <Input placeholder={t("dashboard.notes.placeholder")} className="px-2 h-10"/>
                <button type="button" aria-label={t("dashboard.notes.save")}>
                    <NotepadText className="h-10 w-10" />
                </button>
            </div>
        </SectionCard>
    )
}