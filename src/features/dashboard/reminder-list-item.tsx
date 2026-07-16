import type { Reminder } from "@/mocks/dashboard"
import { MessagesSquare } from 'lucide-react';
import { daysUntil } from "@/lib/format";

type ReminderListItemProps = { 
    reminder: Reminder
} 

export function ReminderListItem({ reminder }: ReminderListItemProps) {
    return (
        <div className="flex items-center gap-2 px-2 py-3">
            <MessagesSquare />
            <div className="flex flex-1 min-w-0 flex-col">
                <div className="flex items-baseline justify-between">
                    <span className="text-sm text-primary-dark">{reminder.petName}</span>
                    <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-primary px-1 py-2 text-sm font-medium text-white">
                        {daysUntil(reminder.dueAt)}
                    </span>    
                </div>
                <span className="text-xs text-muted-foreground">{reminder.title}</span>
            </div>
        </div>
    )
} 