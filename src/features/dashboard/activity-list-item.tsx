import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import type { Appointment } from "@/mocks/dashboard"
import { useTranslation } from "react-i18next"

type ActivityItemProps = { activity: Appointment }

export function ActivityItem({ activity }: ActivityItemProps) {
    const {t} = useTranslation()
    return (
        <div className="flex items-center gap-2 py-3 px-4">
            <Avatar size="lg">
                <AvatarImage src={activity.petAvatarUrl}/>
                <AvatarFallback>{activity.petName.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="flex flex-1 min-w-0 flex-col">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-sm text-primary-dark">{activity.petName}</span>
                        <span className="text-xs text-muted-foreground">{activity.services.join(" + ")}</span>
                    </div>          
                    <span className="bg-primary text-white font-semibold rounded-md py-1 px-20">{t("dashboard.activities.inProgress")}</span>
                </div>
                
            </div>
        </div>
    )
}