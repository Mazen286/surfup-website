export const COMPANY_NAME = "SurfUp"
export const SITE_URL = "https://surfupapp.com"
export const COMPANY_EMAIL = "aloha@surfupapp.com"
export const APP_STORE_URL = "https://apps.apple.com/us/app/surfup/id1525152192"
export const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.surfup.aloha"

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
  { name: "ABC 10 News San Diego", logo: "/images/media/abc10.webp" },
  { name: "CBS 8", logo: "/images/media/cbs8.webp" },
  { name: "San Diego Union-Tribune", logo: "/images/media/sdut.jpg" },
  { name: "Spectrum News 1", logo: "/images/media/spectrum.webp" },
  { name: "UC San Diego", logo: "/images/media/ucsd.webp" },
] as const

export const NAV_LINKS = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Partner", href: "/partner" },
  { label: "Team", href: "/team" },
] as const
