import { useTranslation } from "react-i18next"
import { navGroups } from "./sidebar-nav-config"
import { SidebarNavItem } from "./SidebarNavItem"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowRight, ArrowRightCircle } from "lucide-react"


export function Sidebar() {
    const {t} = useTranslation()
    return (
        <aside className="flex h-full flex-col border-r border-border">  
            {/* futuro logo do tenant aqui, fixo no topo */}

            {/* região da NAV: elástica e rolável */}  
            <nav className="min-h-0 flex-1 overflow-y-auto px-2">
                {navGroups.map((group) => (
                    <div key={group.title ?? "top"}>{group.title && (
                        <p className="px-3 pt-4 pb-1 font-medium uppercase text-primary">{t(group.title)}</p>
                    )}
                    {group.items.map((item) => (
                        <SidebarNavItem key={item.to} item={item}/>
                    ))}
                    </div>
                ))}
            </nav>  

            {/* pé: FORA da região rolável — fica pregado embaixo */}
            <div className="pt-3 px-3">
                <Card className="bg-primary/10 max-w-64 pt-1 pb-1">
                    <CardHeader>
                        <CardTitle className="text-xl text-primary">CiaoPet® PRO</CardTitle>
                        <CardDescription>
                            <span className="text-primary-dark block">Sig. Leonardo Rossi</span>
                            <span>WashDog Milano San Siro</span>
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center">
                            <Avatar size="lg">
                                <AvatarImage src="https://github.com/shadcn.png"/>
                                <AvatarFallback>LR</AvatarFallback>
                            </Avatar>
                            <button type="button" aria-label="Profile" className="ml-auto">
                                <ArrowRightCircle className="size-6 text-primary"/>
                            </button>
                        </div>
                    </CardContent>
                </Card> 
                <p className="text-xs text-muted-foreground mt-2">Versione 000.000.000</p>            
            </div>         
        </aside>
    )
}