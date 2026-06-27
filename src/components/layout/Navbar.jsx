import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../../data/site'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import ThemeToggle from '../ui/ThemeToggle'
import Button from '../ui/Button'

const sectionIds = navLinks.map((link) => link.id)

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeSection = useScrollSpy(sectionIds)

  const handleNavClick = () => setMobileOpen(false)

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="text-lg font-bold tracking-tight text-text transition-colors hover:text-primary"
        >
          Shubham Gupta<span className="text-primary"></span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'text-primary'
                    : 'text-muted hover:text-text'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            href="/resume.pdf"
            download="Shubham_Gupta_Resume.pdf"
            variant="primary"
            size="sm"
            className="hidden sm:inline-flex"
          >
            Resume
          </Button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-muted transition-colors hover:bg-surface-hover hover:text-text lg:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-border/50 bg-background lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={handleNavClick}
                    className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                      activeSection === link.id
                        ? 'bg-primary/10 text-primary'
                        : 'text-muted hover:bg-surface-hover hover:text-text'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2 sm:hidden">
                <Button
                  href="/resume.pdf"
                  download="Shubham_Gupta_Resume.pdf"
                  variant="primary"
                  size="md"
                  className="w-full"
                  onClick={handleNavClick}
                >
                  Download Resume
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
