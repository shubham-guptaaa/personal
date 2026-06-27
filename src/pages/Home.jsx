import Hero from '../components/sections/Hero.jsx'
import About from '../components/sections/About.jsx'
import Skills from '../components/sections/Skills.jsx'
import Projects from '../components/sections/Projects.jsx'
import Freelance from '../components/sections/Freelance.jsx'
import Experience from '../components/sections/Experience.jsx'
import Education from '../components/sections/Education.jsx'
import Certifications from '../components/sections/Certifications.jsx'
import Achievements from '../components/sections/Achievements.jsx'
import Contact from '../components/sections/Contact.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Freelance />
      <Experience />
      <Education />
      <Certifications />
      <Achievements />
      <Contact />
    </>
  )
}
