export type TenantConfig = {
    locale: string,
    timeZone: string,
    currency: string
}

export const tenantConfigMock: TenantConfig = {
    locale: "it-IT",
    timeZone: "Europe/Rome",
    currency: "EUR"
}