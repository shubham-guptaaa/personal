import AnimatedSection from '../ui/AnimatedSection'
import SectionHeading from '../ui/SectionHeading'

export default function About() {
  return (
    <AnimatedSection id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="About Me"
          title="Who I Am"
          description="A brief introduction to my background, passion, and what drives me as a developer."
        />

        <div className="grid items-center gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-surface">
              <img
                src="shubham.png"
                alt="Shubham Gupta"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="space-y-5 lg:col-span-3">
            <h3 className="text-2xl font-semibold text-text">
              Passionate Developer &amp; Problem Solver
            </h3>
            <p className="leading-relaxed text-muted">
              I&apos;m a software developer, with a
              strong foundation in full-stack web development. I enjoy building
              products that are not only functional but also delightful to use.
            </p>
            <p className="leading-relaxed text-muted">
              My journey in tech started with curiosity about how things work
              behind the screen. Since then, I&apos;ve worked on diverse projects
              ranging from e-commerce platforms to real-time dashboards, always
              striving to write clean, maintainable code.
            </p>
            <p className="leading-relaxed text-muted">
              When I&apos;m not coding, you&apos;ll find me exploring new
              technologies, contributing to open source, or participating in
              hackathons. I believe in continuous learning and sharing knowledge
              with the developer community.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-4">
              {[
                { value: '1+', label: 'Years Experience' },
                { value: '7+', label: 'Projects Built' },
                { value: '500+', label: 'Problems Solved' },
                { value: '15+', label: 'Open Source PRs' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border bg-surface p-4 text-center"
                >
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="mt-1 text-xs text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
