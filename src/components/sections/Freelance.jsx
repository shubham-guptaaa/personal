import { motion } from 'framer-motion'
import { ArrowUpRight, BookOpen, Clock } from 'lucide-react'
import { freelanceProjects } from '../../data/freelance'
import AnimatedSection from '../ui/AnimatedSection'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'

export default function Freelance() {
  return (
    <AnimatedSection id="freelance" className="bg-surface/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Freelance"
          title="Client Projects"
          description="Professional work delivered for clients across various industries."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {freelanceProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="overflow-hidden rounded-xl border border-border bg-surface transition-shadow hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="relative aspect-21/9 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  {project.clientIndustry}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-text">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {project.overview}
                </p>

                <div className="mt-4 flex items-center gap-2 text-sm text-muted">
                  <Clock size={14} aria-hidden="true" />
                  <span>{project.duration}</span>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-background px-2.5 py-1 text-xs font-medium text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  <Button
                    href={project.preview}
                    variant="primary"
                    size="sm"
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={ArrowUpRight}
                  >
                    Live Preview
                  </Button>
                  <Button
                    href={project.caseStudy}
                    variant="secondary"
                    size="sm"
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={BookOpen}
                  >
                    Case Study
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
