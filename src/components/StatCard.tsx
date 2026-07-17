import { cn } from "@/lib/utils";
import type { StatCardVariant } from "@/features/dashboard/stats-config"; 
import type { LucideIcon } from "lucide-react";

const variantClasses: Record<StatCardVariant, { card: string; value: string }> = {
    default: {
        card: "bg-white text-primary",
        value: "text-primary"
    },
    filled: {
        card: "bg-linear-to-r from-primary to-primary/75 text-white",
        value: "text-white"
    }
}

type StatCardProps = { 
    value: number
    label: string
    icon: LucideIcon
    variant: StatCardVariant
 }

export function StatCard({ value, label, icon: Icon, variant }: StatCardProps) {
    return (
        <div className={cn(
            "flex items-center rounded-sm border border-border px-5",
            variantClasses[variant].card
            )}
        >
            <div className="flex flex-col">
                <span className={cn(
                    "text-5xl font-medium",
                    variantClasses[variant].value
                )}>
                    {value}
                </span>
                <span className="text-md font-medium">{label}</span>
            </div>
            <div className="ml-auto">
                <Icon className="h-15 w-15"/>  
            </div>
        </div>
    )
}