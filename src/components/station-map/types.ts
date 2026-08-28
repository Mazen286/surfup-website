export interface Board {
  id: string
  status: string
  ratePerMinute?: number
  rentalCode?: string
  image?: string
  boardType?: {
    brand?: string
    model?: string
    sport?: string
    image?: string
  }
}

export interface Station {
  id: string
  name: string
  beach: string
  latitude: number
  longitude: number
  businessName?: string
  businessImage?: string
  address?: string
  isOnline?: boolean
  freeMinutes?: number
  boards?: Board[]
}
