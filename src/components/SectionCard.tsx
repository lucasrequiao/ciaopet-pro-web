import type { ReactNode } from "react"
import { cn } from "@/lib/utils";

type SectionCardProps = {
    title: string
    variant?: "default" | "filled" //filled = header azul
    headerAction?: ReactNode       //link a direita do título
    footer?: ReactNode
    children: ReactNode
    className?: string
}

export function SectionCard({ title, variant, headerAction, footer, children, className }: SectionCardProps) {
    return (
        <div className={cn(
                "bg-white rounded-sm border border-border",
                className
            )}
        >
            <div className={cn(
                "flex items-center justify-between px-2 py-2",
                variant === "filled" ? "bg-primary text-white font-medium rounded-t-sm" : "text-foreground font-medium rounded-t-sm"
                )}
            >
                <span>{title}</span>
                {headerAction && <div className="text-xs">{headerAction}</div>}      
            </div>
            <div>
                {children}

                {footer && <div className="flex justify-center px-10 py-20 text-xs">{footer}</div>}
            </div>
        </div>
    )
}