import type { ReactNode } from "react"
import { navGroups } from "./sidebar-nav-config"
import { useTranslation } from "react-i18next"
import { SidebarNavItem } from "./SidebarNavItem"

type AppShellProps = {
    children: ReactNode
}

export function AppShell({ children }: AppShellProps) {
    const {t} = useTranslation()
    return (
        <div className="h-screen grid grid-cols-[16rem_1fr]">
            <aside className="border-r border-border">               
                {navGroups.map((group) => (
                    <div key={group.title ?? "top"}>{group.title && (
                        <p className="px-3 pt-4 pb-1 text-xs font-medium uppercase text-foreground">{t(group.title)}</p>
                    )}
                    {group.items.map((item) => (
                        <SidebarNavItem key={item.to} item={item}/>
                    ))}
                    </div>
                ))}             
            </aside>
            <main className="overflow-y-auto">{children}</main>
        </div>
    )
}