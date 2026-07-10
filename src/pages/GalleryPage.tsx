import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function GalleryPage() {
    return (
        <main className="max-w-3xl mx-auto p-8 space-y-12">
            <section className="max-w-sm">
                <h2 className="font-heading text-primary-dark text-xl mb-4">Button</h2>
                <div className="flex flex-col gap-4 justify-center flex-wrap">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Inserisci la tua email"></Input>
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" placeholder="Inserisci la password"></Input>
                    <div className="flex gap-2 items-center">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember">Ricordami</Label>
                    </div>
                    <Button>Accedi</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button disabled>Disabled</Button>
                </div>
            </section>
        </main>
    )
}