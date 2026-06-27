# Shubham Gupta — Portfolio

A premium, modern, and fully responsive personal portfolio website built with React, Tailwind CSS, React Router, Framer Motion, and Lucide React icons.

## Features

- Dark theme with light/dark mode toggle
- Sticky navigation with active section highlighting
- Responsive mobile menu
- Scroll progress indicator & scroll-to-top button
- Project filtering and search
- Subtle Framer Motion animations
- SEO-friendly structure with meta tags
- 404 page
- Resume download

## Tech Stack

- React 19 + Vite
- Tailwind CSS v4
- React Router v7
- Framer Motion
- Lucide React

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
npm run build
npm run preview
```

## Customization

Edit the data files in `src/data/` to update your content:

| File | Content |
|------|---------|
| `site.js` | Navigation, contact info, social links |
| `skills.js` | Skill categories |
| `projects.js` | Personal projects (5) |
| `freelance.js` | Freelance projects (2) |
| `experience.js` | Work experience timeline |
| `education.js` | Education cards |
| `certifications.js` | Certification cards |
| `achievements.js` | Achievement highlights |

Replace `public/resume.pdf` with your actual resume.

## Project Structure

```
src/
├── components/
│   ├── layout/     # Navbar, Footer, ScrollProgress, ScrollToTop
│   ├── sections/   # Hero, About, Skills, Projects, etc.
│   └── ui/         # Reusable UI components
├── context/        # Theme context
├── data/           # Content data files
├── hooks/          # Custom hooks
└── pages/          # Home, NotFound
```

## License

MIT
