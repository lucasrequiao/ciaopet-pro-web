import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import type { Pet } from "@/mocks/dashboard"

type PetListItemProps = { pet: Pet }

export function PetListItem({ pet }: PetListItemProps) {
    return (
        <div className="flex items-center gap-2 p-2 py-3">
            <Avatar size="lg">
                <AvatarImage src={pet.avatarUrl}/>
                <AvatarFallback>{pet.name.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="flex flex-1 min-w-0 flex-col">
                <div className="flex items-baseline justify-between">
                    <span className="text-sm text-primary-dark">{pet.name}</span>
                    <span className="text-xs text-muted-foreground">{pet.registeredAgo}</span>    
                </div>
                <span className="text-xs text-muted-foreground">{pet.breed}</span>
            </div>
        </div>
    )
}