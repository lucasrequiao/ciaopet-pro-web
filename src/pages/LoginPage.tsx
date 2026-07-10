import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { AuthLayout } from "@/components/AuthLayout";
import { FormField } from "@/components/FormField";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/PasswordInput";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";


export function LoginPage() {
    const {t} = useTranslation()
    return (
        <AuthLayout 
            footer={
                <p className="text-center text-xs text-muted-foreground space-x-3">
                    <span>© CiaoPet®</span>
                    <a href="#" className="hover:underline">{t("login.footer.privacy")}</a> 
                    <a href="#" className="hover:underline">{t("login.footer.terms")}</a>
                    <a href="#" className="hover:underline">{t("login.footer.appPrivacy")}</a>
                    <a href="#" className="hover:underline">{t("login.footer.help")}</a>   
                </p>
            }
        >
            <div className="text-center space-y-4 mb-8">
                <p className="font-heading text-3xl text-primary">CiaoPet PRO</p>
                <h1 className="font-heading text-2xl text-primary-dark">{t("login.welcome")}</h1>
                <p className="text-sm">{t("login.subtitle")}</p>
            </div>
            <form 
                onSubmit={(e) => {
                    e.preventDefault()
                    console.log("login!")
                }}
                className="space-y-6"
            >
                <FormField label={t("login.emailLabel")} htmlFor="email" required>
                    <Input id="email" placeholder={t("login.emailPlaceholder")} />
                </FormField>
                <FormField label={t("login.passwordLabel")} htmlFor="password" required>
                    <PasswordInput id="password" placeholder={t("login.passwordPlaceholder")}/>
                </FormField>
                <div className="flex items-center justify-between">
                    <div className="flex gap-2 items-center">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember" className="text-primary">{t("login.rememberMe")}</Label>
                    </div>
                    <span className="text-sm text-primary hover:underline">{t("login.forgotPassword")}</span>
                </div>
                <Button type="submit" className="w-full">{t("login.submit")}</Button>
                <div className="flex items-center gap-4">
                    <div className="h-px flex-1 bg-border" />
                    <span className="text-sm text-muted-foreground">{t("login.orContinueWith")}</span>
                    <div className="h-px flex-1 bg-border"/>    
                </div>
                <div className="flex items-center gap-4 mt-4">
                    <Button type="button" variant="outline"  className="flex-1">Google</Button> 
                    <Button type="button" variant="outline"  className="flex-1">Apple</Button>
                </div>
            </form>
        </AuthLayout>
    )
}