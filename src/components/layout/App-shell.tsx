import type { ReactNode } from "react"
import { Sidebar } from "./Sidebar"
import { Topbar } from "./Topbar"
import { DashboardGreeting } from "@/features/dashboard/dashboard-greeting"
import { tenantConfigMock } from "@/mocks/tenant"


type AppShellProps = {
    children: ReactNode
}

export function AppShell({ children }: AppShellProps) {
    return (
        <div className="h-screen grid grid-cols-[15rem_1fr]">
            <Sidebar />
            <main className="flex h-full min-h-0 flex-col">
                <Topbar />
                <DashboardGreeting locale={tenantConfigMock.locale} timeZone={tenantConfigMock.timeZone} locationLabel={tenantConfigMock.locationLabel}/>
                <div className="min-h-0 flex-1 overflow-y-auto p-6 space-y-4">
                    {children}
                </div>
            </main>
        </div>
    )
}