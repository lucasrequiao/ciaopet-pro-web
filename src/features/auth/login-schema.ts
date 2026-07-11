import { z } from "zod"
import type { TFunction } from "i18next"

export function createLoginSchema(t: TFunction) {
    return z.object({
        email: z
            .string()
            .min(1, t("validation.emailRequired"))
            .email(t("validation.emailInvalid")),
        password: z.string().min(1, t("validation.passwordRequired")),
        rememberMe: z.boolean()
    })
}


export type LoginFormData = z.infer<ReturnType<typeof createLoginSchema>>