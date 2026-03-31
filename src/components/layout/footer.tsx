import Image from "next/image"
import Link from "next/link"
import { COMPANY_NAME, COMPANY_EMAIL, SOCIAL, APP_STORE_URL, PLAY_STORE_URL } from "@/lib/constants"

export function Footer() {
  return (
    <footer className="bg-ocean-950 text-white/70">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo-white.png"
              alt="SurfUp"
              width={120}
              height={36}
              className="h-8 w-auto"
            />
            <p className="mt-3 text-sm leading-relaxed">
              Making it easier to do the things that matter more in person.
            </p>
          </div>

          {/* Company */}
          <div>
            <p className="font-semibold text-white">Company</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/partner" className="hover:text-white">Partner</Link></li>
              <li><Link href="/team" className="hover:text-white">Team</Link></li>
              <li><Link href="/download" className="hover:text-white">Download</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="font-semibold text-white">Legal</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms & Conditions</Link></li>
              <li><Link href="/delete-account" className="hover:text-white">Delete Account</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="font-semibold text-white">Connect</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href={`mailto:${COMPANY_EMAIL}`} className="hover:text-white">
                  {COMPANY_EMAIL}
                </a>
              </li>
              <li>
                <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  Instagram
                </a>
              </li>
              <li>
                <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  Facebook
                </a>
              </li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-white/10 px-3 py-1.5 text-xs font-medium text-white hover:bg-white/20"
              >
                App Store
              </a>
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-white/10 px-3 py-1.5 text-xs font-medium text-white hover:bg-white/20"
              >
                Google Play
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
