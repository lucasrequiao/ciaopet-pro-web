import { useState, type ComponentProps } from "react"
import { Input } from "./ui/input"
import { Eye, EyeOff } from "lucide-react"
import { cn } from "@/lib/utils"

type PasswordInputProps = Omit<ComponentProps<typeof Input>, "type">

export function PasswordInput({ className, ...props }: PasswordInputProps) {
    const [visible, setVisible] = useState(false)

    return (
        <div className="relative">
            <Input 
                {...props} 
                type={visible ? "text" : "password"} 
                className={cn("pr-10", className)} 
            />
            <button 
                type="button"
                aria-label="Mostrar senha" 
                onClick={() => setVisible(!visible)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-primary"
            >
                {visible ? <Eye className="size-4"/> : <EyeOff className="size-4"/>}
            </button>
        </div>
    )
}