import type { ReactNode } from "react"
import { Sidebar } from "./Sidebar"
import { Topbar } from "./Topbar"


type AppShellProps = {
    children: ReactNode
}

export function AppShell({ children }: AppShellProps) {
    return (
        <div className="h-screen grid grid-cols-[18rem_1fr]">
            <Sidebar />
            <main className="flex h-full min-h-0 flex-col">
                <Topbar />
                <div className="min-h-0 flex-1 overflow-y-auto p-6">
                    {children}
                </div>
            </main>
        </div>
    )
}