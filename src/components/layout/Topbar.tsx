import { Bell, ChevronDown, Menu, Search } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Input } from "../ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function Topbar() {
    const {t} = useTranslation()

    return (
        <header className="flex items-center gap-4 px-6 py-3">
            <span className="text-4xl font-bold lg:hidden">WashDog</span>
            <button type="button" aria-label={t("topbar.menu")} className="text-primary">
                    <Menu className="size-7"/>
            </button>
            <div className="relative w-full max-w-md ml-auto">
                <Search className="absolute text-muted-foreground left-2 top-1/2 size-6 -translate-y-1/2"/>
                <Input placeholder={t("topbar.searchPlaceholder")} className="pl-10"/>
            </div>

            {/* sino com badge */}
            <button type="button" aria-label={t("topbar.notifications")} className="relative text-primary">
                <Bell className="size-8"/>
                <span className="absolute -top-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-accent-red px-1 text-[12px] font-medium text-white">
                    70
                </span>
            </button>

            {/* usuário */}
            <button type="button" className="flex items-center gap-2">
                <Avatar size="lg">
                    <AvatarImage src="https://github.com/shadcn.png"/>
                    <AvatarFallback>LR</AvatarFallback>
                </Avatar>
                <span className="text-sm text-primary-dark">Admin</span>
                <ChevronDown className="size-5 text-primary-dark"/>
            </button>

            {/* idioma */}
            <button type="button" aria-label={t("topbar.language")} className="text-xl">
                🇮🇹    
            </button>
        </header>
    )
}