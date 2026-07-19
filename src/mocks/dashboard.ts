import bentaAvatar from "@/assets/benta.jpeg"
import griggioAvatar from "@/assets/griggio.webp"
import nuvemAvatar from "@/assets/nuvem.jpg"
import teoAvatar from "@/assets/teo.avif"
import stellaAvatar from "@/assets/stella.webp"
import lillyAvatar from "@/assets/lilly.jpg"

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
  { id: "1", name: "Teo", breed: "Golden Retriever", ageMonths: 24, createdAt: "2026-06-09T10:00:00Z", registeredAgo: "1 sec", avatarUrl: teoAvatar },
  { id: "2", name: "Stella", breed: "Persa", ageMonths: 8, createdAt: "2026-06-08T15:30:00Z", registeredAgo: "2 giorni fa", avatarUrl: stellaAvatar },
  { id: "3", name: "Lilly", breed: "Yorkshire", ageMonths: 48, createdAt: "2026-06-07T09:00:00Z", registeredAgo: "2 giorni fa", avatarUrl: lillyAvatar },
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
    petAvatarUrl: bentaAvatar, 
    services: ["Bagno", "Piega"],
    status: "confirmed",
  },
  {
    id: "apt-002",
    scheduledAt: "2026-06-10T08:30:00Z", // 10.30
    petName: "Griggio",
    petAvatarUrl: griggioAvatar,
    services: ["Taglio igienico"],
    status: "attention",
  },
  {
    id: "apt-003",
    scheduledAt: "2026-06-10T10:00:00Z", // 12.00
    petName: "Nuvem",
    petAvatarUrl: nuvemAvatar,
    services: ["Bagno", "Spazzolatura"],
    status: "attention",
  },
];

export const activitiesMock: Appointment[] = [
  {
    id: "apt-001",
    scheduledAt: "2026-06-10T07:00:00Z", 
    petName: "Benta",
    petAvatarUrl: bentaAvatar, 
    services: ["Bagno", "Piega"],
    status: "confirmed",
  }
]

export type Reminder = {
  id: string
  petName: string
  title: string
  dueAt: string
}

const daysFromNow = (days: number) => new Date(Date.now() + days * 24 * 60 * 60 * 1000).toISOString()

export const remindersMock: Reminder[] = [
  { id: "rem-001", petName: "Rocky", title: "Richiamo tra 5 giorni",        dueAt: daysFromNow(5) },
  { id: "rem-002", petName: "Luna",  title: "Trattamento antiparassitario", dueAt: daysFromNow(7) },
  { id: "rem-003", petName: "Teddy", title: "Taglio unghie",                dueAt: daysFromNow(10) },
];

export type DashboardStats = {
  registeredPets: number
  todayAppointments: number
  tutorMessages: number
  inProgress: number
  checkIns: number
}

export const statsMock: DashboardStats = {
  registeredPets: 120,
  todayAppointments: 34,
  tutorMessages: 7,
  inProgress: 1,
  checkIns: 3  
}

export type LoyalClientsStats = {
  total: number
  newThisMonth: number
}

export const loyalClientsMock: LoyalClientsStats = {
  total: 92,
  newThisMonth: 8
}