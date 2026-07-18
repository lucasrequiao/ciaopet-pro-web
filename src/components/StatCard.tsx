import { cn } from "@/lib/utils";
import type { StatCardVariant } from "@/features/dashboard/stats-config"; 
import type { LucideIcon } from "lucide-react";

const variantClasses: Record<StatCardVariant, { card: string; value: string }> = {
    default: {
        card: "bg-white text-primary-dark",
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
            <div className="flex flex-col py-3">
                <span className={cn(
                    "text-4xl font-medium",
                    variantClasses[variant].value
                )}>
                    {value}
                </span>
                <span className="text-sm font-medium">{label}</span>
            </div>
            <div className="ml-auto">
                <Icon className={cn(
                    "h-12 w-12",
                    variantClasses[variant].value
                )}/>  
            </div>
        </div>
    )
}