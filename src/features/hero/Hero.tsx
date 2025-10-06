import { motion } from 'framer-motion'
import { ChevronDown, Download } from 'lucide-react'

const Hero = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('about')
    nextSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-primary-50 to-secondary-100">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold"
          >
            <span className="gradient-text">Desarrollador</span>
            <br />
            <span className="text-secondary-900">Full Stack</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-secondary-600 max-w-3xl mx-auto"
          >
            Creando experiencias digitales excepcionales con tecnologías modernas
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="btn-primary text-lg px-8 py-3">
              Ver Proyectos
            </button>
            <button className="btn-secondary text-lg px-8 py-3 flex items-center gap-2">
              <Download size={20} />
              Descargar CV
            </button>
          </motion.div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
          aria-label="Scroll to next section"
        >
          <ChevronDown size={24} className="text-secondary-600" />
        </motion.button>
      </div>
    </section>
  )
}

export default Hero
