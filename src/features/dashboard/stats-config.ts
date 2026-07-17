import type { DashboardStats } from "@/mocks/dashboard"
import { PawPrint, CalendarDays, Users, Dog, CheckCheck } from 'lucide-react'
import type { LucideIcon } from "lucide-react"

export type StatCardVariant = "default" | "filled"

export type StatCardConfig = {
    statKey: keyof DashboardStats // só aceita nome de campos reais
    labelKey: string
    icon: LucideIcon
    variant: StatCardVariant
}

export const statsConfig: StatCardConfig[] = [
    { statKey: "registeredPets",    labelKey: "dashboard.stats.registeredPets",    icon: PawPrint,     variant: "default" },
    { statKey: "todayAppointments", labelKey: "dashboard.stats.todayAppointments", icon: CalendarDays, variant: "filled"  },
    { statKey: "tutorMessages",     labelKey: "dashboard.stats.tutorMessages",     icon: Users,        variant: "default" },
    { statKey: "inProgress",        labelKey: "dashboard.stats.inProgress",        icon: Dog,          variant: "filled"    },
    { statKey: "checkIns",          labelKey: "dashboard.stats.checkIns",          icon: CheckCheck,   variant: "default" }
]