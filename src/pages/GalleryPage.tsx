import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { FormField } from "@/components/FormField";
import { PasswordInput } from "@/components/PasswordInput";

export function GalleryPage() {
    return (
        <main className="max-w-3xl mx-auto p-8 space-y-12">
            <section className="max-w-sm">
                <h2 className="font-heading text-primary-dark text-xl mb-4">Login</h2>
                <div className="flex flex-col gap-4 justify-center flex-wrap">
                    <FormField label="Email" htmlFor="email" required>
                        <Input id="email" placeholder="Inserisci la tua email" />
                    </FormField>
                    <FormField label="Senha" htmlFor="senha" required>
                        <PasswordInput />
                    </FormField>
                    <div className="flex gap-2 items-center">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember">Lembre de mim</Label>
                    </div>
                    <Button onSubmit={ (e) => {e.preventDefault(); console.log("login!")} }>Entrar</Button>
                </div>
            </section>           
        </main>
    )
}