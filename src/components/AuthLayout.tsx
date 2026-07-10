import type { ReactNode } from "react" 
import petPhoto from "@/assets/pet.png"


type AuthLayoutProps = {
    children: ReactNode
    footer?: ReactNode
}

export function AuthLayout({ children, footer }: AuthLayoutProps) {
    return (
        <div className="min-h-screen grid lg:grid-cols-2">
            {/* Coluna 1: foto (some abaixo de lg) */}
            <div className="hidden lg:block">
                <img src={petPhoto} alt="" className="h-full w-full object-cover" />
            </div>
            {/* Coluna 2: formulário centralizado */}
            <div className="flex flex-col items-center p-8">
                <div className="w-full max-w-sm my-auto">
                    {children}
                </div>

                {footer && (
                    <footer className="w-full max-w-sm pt-8">{footer}</footer>
                )}
            </div>
        </div>
    )
}