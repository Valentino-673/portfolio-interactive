import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin, Briefcase } from 'lucide-react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const experiences = [
    {
      title: 'Desarrollador Full Stack Senior',
      company: 'TechCorp Solutions',
      location: 'Ciudad, País',
      period: '2022 - Presente',
      description: 'Lidero el desarrollo de aplicaciones web escalables utilizando React, Node.js y tecnologías cloud. Implementé arquitecturas microservicios que mejoraron el rendimiento en un 40%.',
      achievements: [
        'Reducción del tiempo de carga en 40% mediante optimización de código',
        'Implementación de CI/CD que redujo el tiempo de despliegue en 60%',
        'Mentoría de 3 desarrolladores junior'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'PostgreSQL']
    },
    {
      title: 'Desarrollador Frontend',
      company: 'Digital Agency Pro',
      location: 'Ciudad, País',
      period: '2021 - 2022',
      description: 'Desarrollé interfaces de usuario modernas y responsivas para clientes de diversos sectores. Colaboré estrechamente con diseñadores UX/UI para crear experiencias excepcionales.',
      achievements: [
        'Desarrollo de 15+ proyectos web exitosos',
        'Implementación de metodologías ágiles',
        'Mejora de la accesibilidad web en todos los proyectos'
      ],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Figma', 'Jest']
    },
    {
      title: 'Desarrollador Junior',
      company: 'StartupTech',
      location: 'Ciudad, País',
      period: '2020 - 2021',
      description: 'Inicié mi carrera profesional desarrollando aplicaciones web con tecnologías modernas. Participé en proyectos de e-commerce y aplicaciones móviles híbridas.',
      achievements: [
        'Desarrollo de primera aplicación móvil híbrida',
        'Contribución a proyecto de e-commerce con 10k+ usuarios',
        'Certificación en React y Node.js'
      ],
      technologies: ['JavaScript', 'React', 'React Native', 'MongoDB', 'Express']
    }
  ]

  const education = [
    {
      title: 'Ingeniería en Sistemas Computacionales',
      institution: 'Universidad Tecnológica',
      location: 'Ciudad, País',
      period: '2016 - 2020',
      description: 'Especialización en desarrollo de software y arquitectura de sistemas.'
    },
    {
      title: 'Certificación en Desarrollo Web Full Stack',
      institution: 'Platzi',
      period: '2020',
      description: 'Curso intensivo de desarrollo web moderno con React, Node.js y bases de datos.'
    }
  ]

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Experiencia y Educación
          </h2>
          <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
            Mi trayectoria profesional y formación académica
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center mb-8">
              <Briefcase className="text-primary-600 mr-3" size={24} />
              <h3 className="text-2xl font-semibold">Experiencia Profesional</h3>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                  className="relative pl-8 border-l-2 border-primary-200"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-600 rounded-full"></div>
                  
                  <div className="bg-secondary-50 p-6 rounded-lg">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h4 className="text-lg font-semibold text-secondary-900">{exp.title}</h4>
                      <span className="text-sm text-primary-600 font-medium">{exp.period}</span>
                    </div>
                    
                    <div className="flex items-center text-secondary-600 mb-3">
                      <span className="font-medium">{exp.company}</span>
                      <span className="mx-2">•</span>
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-1" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-secondary-600 mb-4">{exp.description}</p>

                    <div className="mb-4">
                      <h5 className="font-medium text-secondary-900 mb-2">Logros principales:</h5>
                      <ul className="list-disc list-inside space-y-1 text-sm text-secondary-600">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center mb-8">
              <Calendar className="text-primary-600 mr-3" size={24} />
              <h3 className="text-2xl font-semibold">Educación</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                  className="card"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h4 className="text-lg font-semibold text-secondary-900">{edu.title}</h4>
                    <span className="text-sm text-primary-600 font-medium">{edu.period}</span>
                  </div>
                  
                  <div className="flex items-center text-secondary-600 mb-3">
                    <span className="font-medium">{edu.institution}</span>
                    {edu.location && (
                      <>
                        <span className="mx-2">•</span>
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          <span>{edu.location}</span>
                        </div>
                      </>
                    )}
                  </div>

                  <p className="text-secondary-600">{edu.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8"
            >
              <h4 className="text-lg font-semibold mb-4">Certificaciones</h4>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-secondary-50 p-4 rounded-lg">
                  <h5 className="font-medium text-secondary-900">AWS Certified Developer</h5>
                  <p className="text-sm text-secondary-600">Amazon Web Services - 2023</p>
                </div>
                <div className="bg-secondary-50 p-4 rounded-lg">
                  <h5 className="font-medium text-secondary-900">React Developer Certification</h5>
                  <p className="text-sm text-secondary-600">Meta - 2022</p>
                </div>
                <div className="bg-secondary-50 p-4 rounded-lg">
                  <h5 className="font-medium text-secondary-900">Scrum Master Certified</h5>
                  <p className="text-sm text-secondary-600">Scrum Alliance - 2021</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience
