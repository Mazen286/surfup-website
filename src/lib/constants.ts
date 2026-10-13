export const COMPANY_NAME = "SurfUp"
export const SITE_URL = "https://www.surfupapp.com"
export const COMPANY_EMAIL = "aloha@surfupapp.com"
export const APP_STORE_URL = "https://apps.apple.com/us/app/surfup/id1525152192"
export const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.surfupapp.aloha"

export const OG_IMAGE = { url: "/images/og-default.jpg", width: 1200, height: 630, alt: "SurfUp automated surfboard rental station at a beach" }

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
    linkedin: "https://www.linkedin.com/in/christianhissom/",
  },
  {
    name: "Jonathan Burris",
    role: "CTO / Co-Founder",
    bio: "",
    image: "/images/team/jonathan.jpg",
    linkedin: "https://www.linkedin.com/in/jonathan-burris/",
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
    linkedin: "https://www.linkedin.com/in/mishalrawaf/",
  },
  {
    name: "Albert Liu",
    role: "VP of Strategy",
    bio: "",
    image: "/images/team/albert.jpg",
    linkedin: "https://www.linkedin.com/in/albertliu/",
  },
  {
    name: "Malcolm McSwain",
    role: "Full Stack Developer",
    bio: "",
    image: "/images/team/malcolm.jpg",
    linkedin: "https://www.linkedin.com/in/malcolmmcswain/",
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

export const MEDIA: { name: string; logo: string; url?: string }[] = [
  {
    name: "Surfer",
    logo: "/images/media/surfer.png",
    url: "https://www.surfer.com/gear/contactless-surfboard-rental-station-open-waikiki",
  },
  {
    name: "Pacific Business News",
    logo: "/images/media/pbn.png",
    url: "https://www.bizjournals.com/pacific/news/2026/10/08/automated-surf-rental-hyatt-regency.html",
  },
  {
    name: "KHON2",
    logo: "/images/media/khon2.png",
    url: "https://www.khon2.com/local-news/hawaii-surfpod-app-launch-hyatt-waikiki/",
  },
  {
    name: "Hoodline",
    logo: "/images/media/hoodline.png",
    url: "https://hoodline.com/2026/10/waikiki-gets-phone-unlocked-surfboard-rentals-at-hyatt-regency/",
  },
  {
    name: "AOL",
    logo: "/images/media/aol.png",
    url: "https://www.aol.com/articles/surfpod-station-easy-access-waikiki-223502000.html",
  },
  {
    name: "ABC 10 News San Diego",
    logo: "/images/media/abc10.webp",
    url: "https://www.10news.com/news/local-news/local-company-surf-up-is-in-the-business-of-renting-surfboards",
  },
  {
    name: "CBS 8",
    logo: "/images/media/cbs8.webp",
    url: "https://www.cbs8.com/article/news/local/surfup-surfboard-rentals-in-pb/509-341c044b-40c2-49d7-884a-d94ef48ca9e0",
  },
  { name: "San Diego Union-Tribune", logo: "/images/media/sdut.jpg" },
  {
    name: "Spectrum News 1",
    logo: "/images/media/spectrum.webp",
    url: "https://spectrumnews1.com/ca/la/sports/2023/02/03/scan--surf----shaka-with-a-surfboard-rental-app",
  },
  {
    name: "UC San Diego",
    logo: "/images/media/ucsd.webp",
    url: "https://today.ucsd.edu/story/surfs-up-in-san-diego-thanks-to-alumni-led-startup",
  },
]

export const NAV_LINKS = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Partner", href: "/partner" },
  { label: "Team", href: "/team" },
] as const
