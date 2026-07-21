import type { ReactNode } from "react"
import { Sidebar } from "./Sidebar"
import { Topbar } from "./Topbar"

type AppShellProps = {
    children: ReactNode
}

export function AppShell({ children }: AppShellProps) {
    return (
        <div className="grid h-screen grid-cols-[0.5rem_1fr] lg:grid-cols-[15rem_1fr]">
            <div className="bg-primary-dark  lg:hidden" />
            <Sidebar className="hidden lg:flex" />
            <main className="flex h-full min-h-0 min-w-0 flex-col">
                <Topbar />
                <div className="min-h-0 flex-1 overflow-y-auto p-6 space-y-4">
                    {children}
                </div>
            </main>
        </div>
    )
}