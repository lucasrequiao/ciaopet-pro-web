import type { ReactNode } from "react"
import { Sidebar } from "./Sidebar"


type AppShellProps = {
    children: ReactNode
}

export function AppShell({ children }: AppShellProps) {
    return (
        <div className="h-screen grid grid-cols-[18rem_1fr]">
            <Sidebar />
            <main className="overflow-y-auto">{children}</main>
        </div>
    )
}