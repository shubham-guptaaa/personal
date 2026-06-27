import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { experience } from '../../data/experience'
import AnimatedSection from '../ui/AnimatedSection'
import SectionHeading from '../ui/SectionHeading'

export default function Experience() {
  return (
    <AnimatedSection id="experience" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Experience"
          title="Work History"
          description="My professional journey and the roles that shaped my skills."
        />

        <div className="relative mx-auto max-w-3xl">
          {/* Timeline line */}
          <div
            className="absolute top-0 left-6 h-full w-px bg-border md:left-1/2 md:-translate-x-px"
            aria-hidden="true"
          />

          <div className="space-y-12">
            {experience.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center md:left-1/2">
                  <div className="h-3 w-3 rounded-full border-2 border-primary bg-background" />
                </div>

                {/* Content */}
                <div
                  className={`ml-14 w-full md:ml-0 md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? 'md:pl-8' : 'md:pr-8 md:text-right'
                  }`}
                >
                  <div className="rounded-xl border border-border bg-surface p-6 transition-shadow hover:shadow-lg hover:shadow-primary/5">
                    <div
                      className={`mb-3 flex items-center gap-2 ${
                        index % 2 === 0 ? 'md:justify-end' : ''
                      }`}
                    >
                      <Briefcase size={16} className="text-primary" aria-hidden="true" />
                      <span className="text-xs font-medium text-primary">
                        {item.period}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-text">{item.role}</h3>
                    <p className="mt-1 text-sm font-medium text-muted">
                      {item.company} &middot; {item.location}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                    <ul
                      className={`mt-4 space-y-3 ${
                        index % 2 === 0 ? 'md:text-right' : ''
                      }`}
                    >
                      {item.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className={`flex items-start gap-2 text-sm text-muted ${
                            index % 2 === 0 ? 'md:justify-end' : ''
                          }`}
                        >
                          <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                          <span className={index % 2 === 0 ? 'md:text-right' : ''}>
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
