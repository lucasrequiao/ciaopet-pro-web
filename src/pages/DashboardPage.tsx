import { AppShell } from "@/components/layout/App-shell";
import { SectionCard } from "@/components/SectionCard";
import { AppointmentItem } from "@/features/dashboard/appointment-list-item";
import { PetListItem } from "@/features/dashboard/pet-list-item";
import { newPetsMock, appointmentsMock, remindersMock } from "@/mocks/dashboard";
import { useTranslation } from "react-i18next";
import { tenantConfigMock } from "@/mocks/tenant"
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { AgendaSparkline } from "@/features/dashboard/agenda-sparkline";
import { ReminderListItem } from "@/features/dashboard/reminder-list-item";

export function DashboardPage() {
    const{t} = useTranslation()
    return (
        <AppShell>
            <div className="grid grid-cols-3 gap-4">
                <SectionCard title={t("dashboard.newFriends")} variant="filled" footer={<Link to="/calendar" className="hover:underline">{t("dashboard.seeAll")}</Link>}>
                    <div className="px-2 py-2 divide-y divide-border">
                        {newPetsMock.map((pet) => (
                            <PetListItem key={pet.id} pet={pet}/>
                        ))}          
                    </div>
                </SectionCard>    
                <SectionCard title={t("dashboard.todayAgenda")} variant="filled" headerAction={<a href="#" className="hover:underline">{t("dashboard.seeCalendar")}</a>}>
                    <div className="px-2 py-2 divide-y divide-border">
                       {appointmentsMock.map((appointment) => (
                            <AppointmentItem key={appointment.id} appointment={appointment} locale={tenantConfigMock.locale} timeZone={tenantConfigMock.timeZone}/> 
                       ))}
                    </div>
                    <div className="px-2 pt-3">
                        <Button variant="outline" className="w-full text-xs bg-transparent">{t("dashboard.newAppointment")}</Button>   
                    </div>
                    <div className="px-2 pt-3 pb-2">
                        <AgendaSparkline />
                    </div>
                </SectionCard>    
                <SectionCard title="Promemoria" variant="default" footer={<Link to="/memorandum" className="hover:underline">{t("dashboard.seeAll")}</Link>}>
                    <div className="px-2 py-2 divide-y divide-border">
                       {remindersMock.map((reminder) => (
                        <ReminderListItem key={reminder.id} reminder={reminder} />
                       ))}
                    </div>
                </SectionCard>    
            </div>
        </AppShell>
    )
}