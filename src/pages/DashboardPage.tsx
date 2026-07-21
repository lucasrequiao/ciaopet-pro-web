import { AppShell } from "@/components/layout/App-shell";
import { SectionCard } from "@/components/SectionCard";
import { AppointmentItem } from "@/features/dashboard/appointment-list-item";
import { PetListItem } from "@/features/dashboard/pet-list-item";
import { newPetsMock, appointmentsMock, remindersMock, statsMock, activitiesMock, loyalClientsMock, cashflowMock } from "@/mocks/dashboard";
import { useTranslation } from "react-i18next";
import { tenantConfigMock } from "@/mocks/tenant"
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { AgendaSparkline } from "@/features/dashboard/agenda-sparkline";
import { ReminderListItem } from "@/features/dashboard/reminder-list-item";
import { StatCard } from "@/components/StatCard";
import { statsConfig } from "@/features/dashboard/stats-config";
import { ActivityItem } from "@/features/dashboard/activity-list-item";
import { LoyalClientsCard } from "@/features/dashboard/loyal-clients-card";
import { CashflowCard } from "@/features/dashboard/cashflow-card";
import { NotesCard } from "@/features/dashboard/notes-card";
import { NewsBar } from "@/features/dashboard/news-bar";
import { Printer, FileOutput } from "lucide-react";
import { DashboardGreeting } from "@/features/dashboard/dashboard-greeting";

export function DashboardPage() {
    const{t} = useTranslation()
    return (
        <AppShell>
            <div className="flex flex-col space-y-4">
                <DashboardGreeting locale={tenantConfigMock.locale} timeZone={tenantConfigMock.timeZone} locationLabel={tenantConfigMock.locationLabel}/>
                <div className="flex items-center gap-3">
                    <div className="flex-1 min-w-0 grid grid-cols-1 gap-4 
                            md:flex md:snap-x md:snap-mandatory md:overflow-x-auto 
                            md:scrollbar-none md:[&::-webkit-scrollbar]:hidden 
                            lg:grid lg:grid-cols-5 lg:overflow-visible">
                        {statsConfig.map((entry) => (
                            <StatCard
                                key={entry.statKey}
                                value={statsMock[entry.statKey]}
                                label={t(entry.labelKey)}
                                icon={entry.icon}
                                variant={entry.variant}
                                className="md:w-56 md:shrink-0 md:snap-start lg:w-auto"
                            />
                        ))}
                    </div>
                    <div className="hidden md:flex lg:hidden items-center gap-1.5" aria-hidden="true">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                        <span className="h-2 w-2 rounded-full bg-primary/40" />
                        <span className="h-2 w-2 rounded-full bg-primary/40" />                          
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_1fr_1fr_4fr] lg:grid-cols-5">
                    <SectionCard title={t("dashboard.newFriends.title")} variant="filled" footer={<Link to="/registration" className="hover:underline">{t("dashboard.newFriends.seeAll")}</Link>}>
                        <div className="px-2 py-2 divide-y divide-border">
                            {newPetsMock.map((pet) => (
                                <PetListItem key={pet.id} pet={pet}/>
                            ))}          
                        </div>
                    </SectionCard>    
                    <SectionCard title={t("dashboard.todayAgenda")} variant="filled" headerAction={<Link to="/calendar" className="hover:underline">{t("dashboard.seeCalendar")}</Link>}>
                        <div className="px-2 py-2 divide-y divide-border">
                        {appointmentsMock.map((appointment) => (
                                <AppointmentItem key={appointment.id} appointment={appointment} locale={tenantConfigMock.locale} timeZone={tenantConfigMock.timeZone}/> 
                        ))}
                        </div>
                        <div className="px-2 pt-3">
                            <Button type="button" variant="outline" className="w-full text-xs bg-transparent">{t("dashboard.newAppointment")}</Button>   
                        </div>
                        <div className="px-2 pt-3 pb-2">
                            <AgendaSparkline />
                        </div>
                    </SectionCard>    
                    <SectionCard title={t("dashboard.memorandum.title")} variant="default" footer={<Link to="/memorandum" className="hover:underline">{t("dashboard.memorandum.seeAll")}</Link>}>
                        <div className="px-2 py-2 divide-y divide-border">
                        {remindersMock.map((reminder) => (
                                <ReminderListItem key={reminder.id} reminder={reminder} />
                        ))}
                        </div>
                    </SectionCard>
                    <div className="flex flex-col gap-3 md:row-span-2 lg:col-span-2">
                        <SectionCard title={t("dashboard.activitiesInProgress")} className="flex-1">
                            {activitiesMock.map((activity) => (
                                    <ActivityItem key={activity.id} activity={activity} />
                            ))}
                        </SectionCard>
                        <div className="flex justify-end gap-2">
                            <Button type="button" size="icon" className="text-white bg-primary-dark" aria-label={t("dashboard.pageActions.print")}>
                                <Printer/>
                            </Button>
                            <Button type="button" size="icon" className="text-white bg-primary-dark" aria-label={t("dashboard.pageActions.export")}>
                                <FileOutput />
                            </Button>
                        </div>
                    </div>            
                    <LoyalClientsCard stats={loyalClientsMock} />    
                    <CashflowCard summary={cashflowMock} locale={tenantConfigMock.locale} currency={tenantConfigMock.currency}/> 
                    <NotesCard />               
                </div>
                <NewsBar />
            </div>
        </AppShell>
    )
}