import { motion } from 'framer-motion'

const variants = {
  primary:
    'bg-primary text-white hover:bg-primary/90 shadow-sm shadow-primary/20',
  secondary:
    'border border-border bg-surface text-text hover:bg-surface-hover',
  ghost: 'text-primary hover:bg-primary/10',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-8 py-3 text-base',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  download,
  target,
  rel,
  onClick,
  type = 'button',
  icon: Icon,
  iconPosition = 'left',
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${variants[variant]} ${sizes[size]} ${className}`

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon size={16} aria-hidden="true" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon size={16} aria-hidden="true" />}
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        target={target}
        rel={rel}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  )
}
