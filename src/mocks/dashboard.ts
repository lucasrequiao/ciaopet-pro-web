export type Pet = {
  id: string
  name: string
  breed: string
  ageMonths: number
  createdAt: string
  registeredAgo: string 
  avatarUrl: string
}

// Formato idêntico ao contrato: GET /api/v1/pets?sort=createdAt&order=desc&limit=3
export const newPetsMock: Pet[] = [
  { id: "1", name: "Teo", breed: "Golden Retriever", ageMonths: 24, createdAt: "2026-06-09T10:00:00Z", registeredAgo: "1 sec", avatarUrl: "src/assets/teo.avif" },
  { id: "2", name: "Stella", breed: "Persa", ageMonths: 8, createdAt: "2026-06-08T15:30:00Z", registeredAgo: "2 giorni fa", avatarUrl: "src/assets/persa_branco.webp" },
  { id: "3", name: "Lilly", breed: "Yorkshire", ageMonths: 48, createdAt: "2026-06-07T09:00:00Z", registeredAgo: "2 giorni fa", avatarUrl: "src/assets/yorkshire.jpg" },
];

export type AppointmentStatus = "confirmed" | "attention"

export type Appointment = {
  id: string
  scheduledAt: string
  petName: string
  petAvatarUrl: string
  services: string[]
  status: AppointmentStatus
}

export const appointmentsMock: Appointment[] = [
  {
    id: "apt-001",
    scheduledAt: "2026-06-10T07:00:00Z", // 09.00 em Roma (CEST)
    petName: "Benta",
    petAvatarUrl: "src/assets/pastor.jpeg", 
    services: ["Bagno", "Piega"],
    status: "confirmed",
  },
  {
    id: "apt-002",
    scheduledAt: "2026-06-10T08:30:00Z", // 10.30
    petName: "Griggio",
    petAvatarUrl: "src/assets/lulu.webp",
    services: ["Taglio igienico"],
    status: "attention",
  },
  {
    id: "apt-003",
    scheduledAt: "2026-06-10T10:00:00Z", // 12.00
    petName: "Nuvem",
    petAvatarUrl: "src/assets/gato.jpg",
    services: ["Bagno", "Spazzolatura"],
    status: "attention",
  },
];