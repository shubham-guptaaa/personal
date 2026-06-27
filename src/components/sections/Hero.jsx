import { motion } from 'framer-motion'
import { ArrowDown, Download, Mail } from 'lucide-react'
import Button from '../ui/Button'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pt-20"
    >
      <div className="mx-auto grid max-w-6xl flex-1 items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="mb-4 text-sm font-medium tracking-widest text-primary uppercase">
            Hello, I&apos;m
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-text sm:text-5xl lg:text-6xl">
            Shubham Gupta
          </h1>
          <div className="mt-4 flex flex-wrap gap-2">
            {['Software Developer', 'Full Stack Developer', 'Solution Engineer'].map(
              (role) => (
                <span
                  key={role}
                  className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted sm:text-sm"
                >
                  {role}
                </span>
              ),
            )}
          </div>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            I craft elegant, high-performance web applications with a focus on
            clean code, intuitive user experiences, and scalable architecture.
            Passionate about turning complex problems into simple, beautiful
            solutions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#projects" variant="primary" icon={ArrowDown}>
              View Projects
            </Button>
            <Button
              href="/resume.pdf"
              download="Shubham_Gupta_Resume.pdf"
              variant="secondary"
              icon={Download}
            >
              Download Resume
            </Button>
            <Button href="#contact" variant="ghost" icon={Mail}>
              Contact Me
            </Button>
          </div>
        </motion.div>

        {/* Illustration placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-surface">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
              {/* Developer-themed SVG illustration */}
              <svg
                viewBox="0 0 400 400"
                className="h-full w-full"
                aria-hidden="true"
              >
                <rect width="400" height="400" fill="transparent" />
                <rect
                  x="60"
                  y="80"
                  width="280"
                  height="200"
                  rx="12"
                  fill="#111827"
                  stroke="#1f2937"
                  strokeWidth="2"
                />
                <rect x="60" y="80" width="280" height="32" rx="12" fill="#1f2937" />
                <circle cx="82" cy="96" r="6" fill="#ef4444" />
                <circle cx="102" cy="96" r="6" fill="#eab308" />
                <circle cx="122" cy="96" r="6" fill="#22c55e" />
                <text x="80" y="150" fill="#3B82F6" fontFamily="monospace" fontSize="14">
                  {'const dev = {'}
                </text>
                <text x="100" y="175" fill="#06B6D4" fontFamily="monospace" fontSize="14">
                  name: &quot;Shubham&quot;,
                </text>
                <text x="100" y="200" fill="#22C55E" fontFamily="monospace" fontSize="14">
                  role: &quot;Developer&quot;,
                </text>
                <text x="100" y="225" fill="#F9FAFB" fontFamily="monospace" fontSize="14">
                  passion: &quot;Code&quot;
                </text>
                <text x="80" y="250" fill="#3B82F6" fontFamily="monospace" fontSize="14">
                  {'};'}
                </text>
                <rect
                  x="120"
                  y="300"
                  width="160"
                  height="48"
                  rx="8"
                  fill="#3B82F6"
                  opacity="0.15"
                />
                <text
                  x="200"
                  y="330"
                  fill="#3B82F6"
                  fontFamily="sans-serif"
                  fontSize="16"
                  textAnchor="middle"
                  fontWeight="600"
                >
                  Building...
                </text>
              </svg>
            </div>
            {/* Decorative accent */}
            <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-2xl border border-primary/20 bg-primary/5" />
            <div className="absolute -top-4 -left-4 h-16 w-16 rounded-xl border border-secondary/20 bg-secondary/5" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
