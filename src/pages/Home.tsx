import { motion } from 'framer-motion'
import Hero from '../features/hero/Hero'
import About from '../features/about/About'
import Skills from '../features/skills/Skills'
import Projects from '../features/projects/Projects'
import Contact from '../features/contact/Contact'

const Home = () => {
  return (
    <div className="pt-16">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home
