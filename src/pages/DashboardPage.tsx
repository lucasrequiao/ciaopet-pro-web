import { AppShell } from "@/components/layout/App-shell";
import { SectionCard } from "@/components/SectionCard";
import { PetListItem } from "@/features/dashboard/pet-list-item";
import { newPetsMock } from "@/mocks/dashboard";
import { useTranslation } from "react-i18next";

export function DashboardPage() {
    const{t} = useTranslation()
    return (
        <AppShell>
            <div className="grid grid-cols-3 gap-4">
                <SectionCard title={t("dashboard.newFriends")} variant="filled" footer={<a href="#" className="hover:underline">{t("dashboard.seeAll")}</a>}>
                    <div className="space-y-3 px-2 py-2 divide-y divide-border">
                        {newPetsMock.map((pet) => (
                            <PetListItem key={pet.id} pet={pet}/>
                        ))}          
                    </div>
                </SectionCard>    
                <SectionCard title="Agenda di oggi" variant="filled" headerAction={t("dashboard.seeCalendar")}>
                    <div></div>
                </SectionCard>    
                <SectionCard title="Promemoria" variant="default" footer={t("dashboard.seeAll")}>
                    <div></div>
                </SectionCard>    
            </div>
        </AppShell>
    )
}