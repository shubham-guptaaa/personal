import { useState } from 'react'
import { Send } from 'lucide-react'
import Button from './Button'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Placeholder — connect to your backend or email service
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-text">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-text placeholder:text-muted focus:border-primary focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-text">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-text placeholder:text-muted focus:border-primary focus:outline-none"
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-text">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          placeholder="What's this about?"
          className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-text placeholder:text-muted focus:border-primary focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-text">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message..."
          className="w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-text placeholder:text-muted focus:border-primary focus:outline-none"
        />
      </div>
      <Button type="submit" variant="primary" size="lg" icon={Send}>
        Send Message
      </Button>
      {submitted && (
        <p className="text-sm font-medium text-accent" role="status">
          Thank you! Your message has been sent successfully.
        </p>
      )}
    </form>
  )
}
