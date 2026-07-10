import { useState } from "react"
import { Input } from "./ui/input"
import { Eye, EyeOff } from "lucide-react"

export function PasswordInput() {
    const [visible, setVisible] = useState(false)
    return (
        <div className="relative">
            <Input type={visible ? "text" : "password"} className="pr-10"/>
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