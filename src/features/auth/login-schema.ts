import { z } from "zod"

export const loginSchema = z.object({
    email: z
        .string()
        .min(1, "L'email è obbligatoria")
        .email("Formato email non valido"),
    password: z.string().min(1, "La password è obbligatoria"),
    rememberMe: z.boolean()
})

export type LoginFormData = z.infer<typeof loginSchema>