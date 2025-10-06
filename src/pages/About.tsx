import { motion } from 'framer-motion'
import About from '../features/about/About'
import Skills from '../features/skills/Skills'
import Experience from '../features/experience/Experience'

const AboutPage = () => {
  return (
    <div className="pt-16">
      <About />
      <Skills />
      <Experience />
    </div>
  )
}

export default AboutPage
