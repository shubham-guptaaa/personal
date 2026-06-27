import { motion } from 'framer-motion'
import { skillCategories } from '../../data/skills'
import AnimatedSection from '../ui/AnimatedSection'
import SectionHeading from '../ui/SectionHeading'

export default function Skills() {
  return (
    <AnimatedSection id="skills" className="bg-surface/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Skills"
          title="Technologies I Work With"
          description="A curated set of tools and technologies I use to bring ideas to life."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="rounded-xl border border-border bg-surface p-6 transition-shadow hover:shadow-lg hover:shadow-primary/5"
            >
              <h3 className="mb-4 text-lg font-semibold text-text">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-background px-3 py-1.5 text-sm font-medium text-muted transition-colors hover:text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
