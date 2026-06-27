import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'
import { certifications } from '../../data/certifications'
import AnimatedSection from '../ui/AnimatedSection'
import SectionHeading from '../ui/SectionHeading'

export default function Certifications() {
  return (
    <AnimatedSection id="certifications" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Certifications"
          title="Credentials & Certifications"
          description="Professional certifications validating my expertise."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {certifications.map((cert, index) => (
            <motion.a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="group flex gap-4 rounded-xl border border-border bg-surface p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary/10">
                <Award size={24} className="text-secondary" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-text transition-colors group-hover:text-primary">
                  {cert.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-muted">{cert.date}</span>
                  <ExternalLink
                    size={14}
                    className="text-muted transition-colors group-hover:text-primary"
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-1 text-xs text-muted/70">
                  ID: {cert.credentialId}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
