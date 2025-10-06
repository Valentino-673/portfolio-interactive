import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold gradient-text"
            >
              Sobre mí
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4 text-secondary-600 leading-relaxed"
            >
              <p>
                Soy un desarrollador full stack apasionado por crear soluciones digitales 
                innovadoras y escalables. Con más de 3 años de experiencia en el desarrollo 
                web, me especializo en tecnologías modernas como React, Node.js, TypeScript 
                y bases de datos.
              </p>
              <p>
                Mi enfoque se centra en escribir código limpio, mantenible y en crear 
                experiencias de usuario excepcionales. Me gusta estar al día con las 
                últimas tendencias tecnológicas y siempre busco aprender nuevas herramientas 
                y metodologías.
              </p>
              <p>
                Cuando no estoy programando, disfruto de la fotografía, los videojuegos 
                y explorar nuevas tecnologías. Creo firmemente en el poder de la tecnología 
                para resolver problemas reales y mejorar la vida de las personas.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <div className="bg-primary-50 px-4 py-2 rounded-lg">
                <span className="text-primary-700 font-medium">3+ Años</span>
                <p className="text-sm text-primary-600">Experiencia</p>
              </div>
              <div className="bg-primary-50 px-4 py-2 rounded-lg">
                <span className="text-primary-700 font-medium">50+</span>
                <p className="text-sm text-primary-600">Proyectos</p>
              </div>
              <div className="bg-primary-50 px-4 py-2 rounded-lg">
                <span className="text-primary-700 font-medium">100%</span>
                <p className="text-sm text-primary-600">Satisfacción</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8 aspect-square flex items-center justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white text-6xl font-bold">DV</span>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary-200 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-200 rounded-full opacity-30"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
