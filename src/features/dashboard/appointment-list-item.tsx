import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { formatTime } from "@/lib/format"
import { cn } from "@/lib/utils"
import type { Appointment, AppointmentStatus } from "@/mocks/dashboard"

const statusColor: Record<AppointmentStatus, string> = {
  confirmed: "bg-primary",
  attention: "bg-destructive"
}

type AppointmentItemProps = { 
    appointment: Appointment
    locale: string
    timeZone: string 
}

export function AppointmentItem({ appointment, locale, timeZone }: AppointmentItemProps) {
    return (
        <div className="flex items-center gap-2 p-2 py-3">
            <span className="text-xs text-primary">{formatTime(appointment.scheduledAt, locale, timeZone)}</span>
            <Avatar size="lg">
                <AvatarImage src={appointment.petAvatarUrl}/>
                <AvatarFallback>{appointment.petName.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="flex flex-1 min-w-0 flex-col">
                <div className="flex items-baseline justify-between">
                    <span className="text-sm text-primary-dark">{appointment.petName}</span>    
                    <span className={cn("h-3 w-3 rounded-full", statusColor[appointment.status])} aria-hidden="true"></span>
                </div>
                <span className="text-xs text-muted-foreground">{appointment.services.join(" + ")}</span>
            </div>
        </div>
    )
}