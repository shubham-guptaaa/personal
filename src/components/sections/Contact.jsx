import { Globe, Mail, MapPin, Phone } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons'
import { contactInfo } from '../../data/site'
import AnimatedSection from '../ui/AnimatedSection'
import SectionHeading from '../ui/SectionHeading'
import ContactForm from '../ui/ContactForm'

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
  },
  // {
  //   icon: Phone,
  //   label: 'Phone',
  //   value: contactInfo.phone,
  //   href: `tel:${contactInfo.phone.replace(/\s/g, '')}`,
  // },
  {
    icon: MapPin,
    label: 'Location',
    value: contactInfo.location,
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'linkedin.com/in/shubham-gupta-077a40276',
    href: contactInfo.linkedin,
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'github.com/shubham-guptaaa',
    href: contactInfo.github,
  },
  {
    icon: Globe,
    label: 'Portfolio',
    value: 'portfolio.example.com',
    href: contactInfo.portfolio,
  },
]

export default function Contact() {
  return (
    <AnimatedSection id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Contact"
          title="Get In Touch"
          description="Have a project in mind or want to connect? I'd love to hear from you."
        />

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact info */}
          <div className="space-y-4 lg:col-span-2">
            {contactItems.map((item) => {
              const Icon = item.icon
              const content = (
                <div className="flex items-start gap-4 rounded-xl border border-border bg-surface p-4 transition-colors hover:border-primary/30">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Icon size={18} className="text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-medium tracking-wide text-muted uppercase">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-text">{item.value}</p>
                  </div>
                </div>
              )

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block"
                >
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              )
            })}
          </div>

          {/* Contact form */}
          <div className="rounded-xl border border-border bg-surface p-6 lg:col-span-3 lg:p-8">
            <h3 className="mb-6 text-lg font-semibold text-text">Send a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
