import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Search } from 'lucide-react'
import { GithubIcon } from '../ui/SocialIcons'
import { personalProjects, projectCategories } from '../../data/projects'
import AnimatedSection from '../ui/AnimatedSection'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'

function ProjectCard({ project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-xl border border-border bg-surface transition-shadow hover:shadow-xl hover:shadow-primary/5"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-t from-surface/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-text">{project.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
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
        <div className="mt-5 flex gap-3">
          <Button
            href={project.github}
            variant="secondary"
            size="sm"
            target="_blank"
            rel="noopener noreferrer"
            icon={GithubIcon}
          >
            GitHub
          </Button>
          <Button
            href={project.demo}
            variant="primary"
            size="sm"
            target="_blank"
            rel="noopener noreferrer"
            icon={ExternalLink}
          >
            Live Demo
          </Button>
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProjects = useMemo(() => {
    return personalProjects.filter((project) => {
      const matchesCategory =
        activeCategory === 'All' || project.category === activeCategory
      const query = searchQuery.toLowerCase()
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technologies.some((t) => t.toLowerCase().includes(query))
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery])

  return (
    <AnimatedSection id="projects" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Portfolio"
          title="Personal Projects"
          description="A selection of projects showcasing my skills in full-stack development."
        />

        {/* Filters & Search */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-primary text-white'
                    : 'border border-border bg-surface text-muted hover:text-text'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="relative">
            <Search
              size={16}
              className="absolute top-1/2 left-3 -translate-y-1/2 text-muted"
              aria-hidden="true"
            />
            <input
              type="search"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-border bg-surface py-2 pr-4 pl-9 text-sm text-text placeholder:text-muted focus:border-primary focus:outline-none sm:w-64"
              aria-label="Search projects"
            />
          </div>
        </div>

        {/* Project grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p className="py-12 text-center text-muted">
            No projects found matching your criteria.
          </p>
        )}
      </div>
    </AnimatedSection>
  )
}
