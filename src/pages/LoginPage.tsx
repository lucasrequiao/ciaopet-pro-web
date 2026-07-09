import { useTranslation } from "react-i18next";

export function LoginPage() {
    const {t} = useTranslation()
    return <h1 className="font-heading text-primary-dark">{t("login.welcome")}</h1> 
}