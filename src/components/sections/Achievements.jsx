import { motion } from 'framer-motion'
import { Briefcase, Code, GitBranch, Trophy } from 'lucide-react'
import { achievements } from '../../data/achievements'
import AnimatedSection from '../ui/AnimatedSection'
import SectionHeading from '../ui/SectionHeading'

const iconMap = {
  code: Code,
  trophy: Trophy,
  briefcase: Briefcase,
  'git-branch': GitBranch,
}

export default function Achievements() {
  return (
    <AnimatedSection id="achievements" className="bg-surface/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Achievements"
          title="Highlights & Milestones"
          description="Key accomplishments across coding, hackathons, freelance work, and open source."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {achievements.map((achievement, index) => {
            const Icon = iconMap[achievement.icon]
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="rounded-xl border border-border bg-surface p-6 transition-shadow hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                    <Icon size={20} className="text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-text">
                    {achievement.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {achievement.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </AnimatedSection>
  )
}
