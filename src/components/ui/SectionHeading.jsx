export default function SectionHeading({ label, title, description }) {
  return (
    <div className="mb-12 text-center md:mb-16">
      {label && (
        <p className="mb-2 text-sm font-medium tracking-widest text-primary uppercase">
          {label}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-text md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-muted">{description}</p>
      )}
      <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-primary" />
    </div>
  )
}
