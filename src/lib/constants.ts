export const COMPANY_NAME = "SurfUp"
export const SITE_URL = "https://surfupapp.com"
export const COMPANY_EMAIL = "aloha@surfupapp.com"
export const APP_STORE_URL = "https://bit.ly/surfuptheapp"
export const PLAY_STORE_URL = "https://bit.ly/surfupgoogleapp"

export const SOCIAL = {
  facebook: "https://www.facebook.com/surfupapp",
  instagram: "https://www.instagram.com/surfupapp",
} as const

export interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
  linkedin?: string
}

export const TEAM: TeamMember[] = [
  {
    name: "Christian Hissom",
    role: "CEO / Co-Founder",
    bio: "",
    image: "/images/team/christian.jpg",
    linkedin: "",
  },
  {
    name: "Jonathan Burris",
    role: "CTO / Co-Founder",
    bio: "",
    image: "/images/team/jonathan.jpg",
    linkedin: "",
  },
  {
    name: "Mazen Abugharbieh",
    role: "CPO / Co-Founder",
    bio: "",
    image: "/images/team/mazen.jpg",
    linkedin: "https://www.linkedin.com/in/mazenabugharbieh/",
  },
  {
    name: "Mishal al-Rawaf",
    role: "CFO / Co-Founder",
    bio: "",
    image: "/images/team/mishal.jpg",
    linkedin: "",
  },
  {
    name: "Albert Liu",
    role: "VP of Strategy",
    bio: "",
    image: "/images/team/albert.jpg",
    linkedin: "",
  },
]

export const ADVISORS: TeamMember[] = [
  {
    name: "Derrick Oien",
    role: "Advisor, Founder of ScoreStream",
    bio: "",
    image: "/images/team/derrick.jpg",
    linkedin: "",
  },
  {
    name: "Mark Bowles",
    role: "Advisor, Founder of EcoATM",
    bio: "",
    image: "/images/team/mark.jpg",
    linkedin: "",
  },
]

export const MEDIA = [
  { name: "ABC 10 News San Diego", logo: "/images/media/abc10.svg" },
  { name: "CBS 8", logo: "/images/media/cbs8.svg" },
  { name: "San Diego Union-Tribune", logo: "/images/media/sdut.svg" },
  { name: "Spectrum News 1", logo: "/images/media/spectrum.svg" },
  { name: "UC San Diego", logo: "/images/media/ucsd.svg" },
] as const

export const NAV_LINKS = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Products", href: "/#products" },
  { label: "Team", href: "/team" },
] as const
