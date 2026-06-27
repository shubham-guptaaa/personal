import { motion } from 'framer-motion'
import { GraduationCap, MapPin } from 'lucide-react'
import { education } from '../../data/education'
import AnimatedSection from '../ui/AnimatedSection'
import SectionHeading from '../ui/SectionHeading'

export default function Education() {
  return (
    <AnimatedSection id="education" className="bg-surface/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Education"
          title="Academic Background"
          description="My educational journey and academic achievements."
        />

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {education.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="rounded-xl border border-border bg-surface p-6 transition-shadow hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <GraduationCap size={24} className="text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-text">{item.degree}</h3>
              <p className="mt-1 text-sm font-medium text-primary">
                {item.institution}
              </p>
              <div className="mt-2 flex items-center gap-1 text-sm text-muted">
                <MapPin size={14} aria-hidden="true" />
                <span>{item.location}</span>
              </div>
              <p className="mt-1 text-sm text-muted">{item.period}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
              <div className="mt-4 inline-block rounded-lg bg-background px-3 py-1.5 text-sm font-medium text-accent">
                GPA: {item.gpa}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
