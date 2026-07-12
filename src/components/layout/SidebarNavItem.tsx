import { NavLink } from "react-router";
import type { LucideIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

type NavItem = {
    label: string
    icon: LucideIcon
    to:string
}

type SidebarNavItemProps = {
    item: NavItem
}

export function SidebarNavItem({ item }: SidebarNavItemProps) {
    const {t} = useTranslation()
    return (
        <NavLink
            to={item.to}
            className={({ isActive }) =>
                cn(
                    "flex items-center gap-3 rounded-lg px-3 py-1.5 text-sm",
                    isActive
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-foreground hover:bg-muted"
                )
            }
        >
            <item.icon className="size-4" />
            {t(item.label)}
        </NavLink>
    )
}