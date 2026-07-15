import type { ReactNode } from "react"
import { cn } from "@/lib/utils";

type SectionCardProps = {
    title: string
    variant?: "default" | "filled" //filled = header azul
    headerAction?: ReactNode       //link a direita do título
    footer?: ReactNode
    children: ReactNode
}

export function SectionCard({ title, variant, headerAction, footer, children }: SectionCardProps) {
    return (
        <div className="max-w-xs bg-white rounded-sm border border-border">
            <div className={cn(
                "flex items-center justify-between px-4 py-2",
                variant === "filled" ? "bg-primary text-white rounded-t-sm" : "text-foreground rounded-t-sm"
                )}
            >
                <span>{title}</span>
                {headerAction && <div className="text-xs">{headerAction}</div>}      
            </div>
            <div>
                {children}

                {footer && <div className="flex justify-center px-10 py-20 text-xs border-t border-border">{footer}</div>}
            </div>
        </div>
    )
}