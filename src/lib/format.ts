export function formatTime(iso: string, locale: string, timeZone: string): string {
    return new Intl.DateTimeFormat(locale, {
        hour: "2-digit",
        minute: "2-digit",
        timeZone,    
    }).format(new Date(iso))
}

export function daysUntil(iso: string): number {
    const targetDate = new Date(iso)
    const currentDate = new Date()

    // Calcula a diferença em milissegundos
    const diffInMs = targetDate.getTime() - currentDate.getTime();

    // Define quantos milissegundos existem em um dia
    const msPerDay = 1000 * 60 * 60 * 24;

    // Converte a diferença para dias e arredonda para cima
    return Math.ceil(diffInMs / msPerDay);
}

export function formatCurrency(cents: number, locale:string, currency: string): string {
    return new Intl.NumberFormat(locale, { style: "currency", currency }).format(cents / 100)
}

export function formatDate(isoDate: string, locale: string): string {
    return new Intl.DateTimeFormat(locale, { dateStyle: "long", timeZone: "UTC" }).format(new Date(isoDate))
} 