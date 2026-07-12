import { LayoutDashboard, Zap, Calendar, AppWindowMac, PhoneCall, ShoppingBag, PersonStanding, Cog, FileText, Container, SquarePercent, 
    SquareActivity, ClipboardType, Archive, LucideFileText, AlarmClock, PawPrint, Contact, Mail, StickyNotePlus } from "lucide-react";

export const navGroups = [
    {
        title: null,
        items: [
            { label: "nav.dashboard", icon: LayoutDashboard, to: "/" },
            { label: "nav.quickActions", icon: Zap, to: "/actions" }
        ]
    },
    {
        title: "nav.groups.business", 
        items: [
            { label: "nav.app", icon: AppWindowMac, to: "/app" },
            { label: "nav.calendar", icon: Calendar, to: "/calendar" },
            { label: "nav.communications", icon: PhoneCall, to: "/communications" },
            { label: "nav.shop", icon: ShoppingBag, to: "/shop" },
            { label: "nav.staff", icon: PersonStanding, to: "/staff" }
        ]
    },
    {
        title: "nav.groups.client", 
        items: [
            { label: "nav.animal", icon: PawPrint, to: "/animal" },
            { label: "nav.client", icon: Contact, to: "/client" },
            { label: "nav.document", icon: LucideFileText, to: "/document" },
            { label: "nav.message", icon: Mail, to: "/message" },
            { label: "nav.registration", icon: StickyNotePlus, to: "/registration" },
            { label: "nav.memorandum", icon: AlarmClock, to: "/memorandum" },
            { label: "nav.archive", icon: Archive, to: "/archive" }
        ]
    },
    {
        title: "nav.groups.accounting", 
        items: [
            { label: "nav.configuration", icon: Cog, to: "/configuration" },
            { label: "nav.document", icon: FileText, to: "/document" },
            { label: "nav.suppliers", icon: Container, to: "/suppliers" },
            { label: "nav.priceList", icon: SquarePercent, to: "/priceList" },
            { label: "nav.movements", icon: SquareActivity, to: "/movements" },
            { label: "nav.report", icon: ClipboardType, to: "/report" }
        ]
    }
]