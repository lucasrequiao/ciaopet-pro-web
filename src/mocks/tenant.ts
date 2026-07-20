export type TenantConfig = {
    locale: string,
    timeZone: string,
    currency: string,
    locationLabel: string
}

export const tenantConfigMock: TenantConfig = {
    locale: "it-IT",                
    timeZone: "Europe/Rome",       
    currency: "EUR",
    locationLabel: "Roma RM"
}