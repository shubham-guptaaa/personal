import { Globe } from 'lucide-react'
import { footerLinks, socialLinks } from '../../data/site'
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons'

const iconMap = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  globe: Globe,
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <a href="#home" className="text-xl font-bold text-text">
              Shubham Gupta
            </a>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Software Developer passionate about building clean, scalable, and
              user-focused web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wide text-text uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wide text-text uppercase">
              Connect
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.icon]
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted transition-all hover:border-primary hover:text-primary"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted">
            &copy; {year} Shubham Gupta. All rights reserved.
          </p>
          <p className="text-sm text-muted">
            Designed &amp; Developed by{' '}
            <span className="font-medium text-text">Shubham Gupta</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
