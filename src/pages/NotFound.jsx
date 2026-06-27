import { Link } from 'react-router-dom'
import { ArrowLeft, Home } from 'lucide-react'
import Button from '../components/ui/Button'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <p className="text-8xl font-bold text-primary">404</p>
      <h1 className="mt-4 text-2xl font-semibold text-text">Page Not Found</h1>
      <p className="mt-2 max-w-md text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-8 flex gap-3">
        <Button href="/" variant="primary" icon={Home}>
          Back to Home
        </Button>
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-2.5 text-sm font-medium text-muted transition-colors hover:text-text"
        >
          <ArrowLeft size={16} />
          Go Back
        </Link>
      </div>
    </div>
  )
}
