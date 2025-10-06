import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Plataforma de comercio electrónico completa con React, Node.js y MongoDB. Incluye autenticación, pagos y panel de administración.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'Aplicación de gestión de tareas con drag & drop, colaboración en tiempo real y notificaciones.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'TypeScript', 'Socket.io', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Weather Dashboard',
      description: 'Dashboard meteorológico con visualizaciones interactivas y pronósticos detallados.',
      image: '/api/placeholder/400/300',
      technologies: ['Next.js', 'Chart.js', 'OpenWeather API'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Social Media Analytics',
      description: 'Herramienta de análisis de redes sociales con métricas en tiempo real y reportes personalizados.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'D3.js', 'Express', 'Redis'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Portfolio Website',
      description: 'Sitio web personal con diseño responsive, animaciones y optimización SEO.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Framer Motion', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Chat Application',
      description: 'Aplicación de chat en tiempo real con salas privadas y compartir archivos.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Socket.io', 'Node.js', 'AWS S3'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ]

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

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
            Proyectos Destacados
          </h2>
          <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
            Una selección de mis proyectos más recientes y desafiantes
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="card group hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <span className="text-primary-600 font-semibold">Imagen del Proyecto</span>
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-primary-100 transition-colors"
                  >
                    <ExternalLink size={20} className="text-primary-600" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-primary-100 transition-colors"
                  >
                    <Github size={20} className="text-primary-600" />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-secondary-600 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl font-semibold gradient-text mb-4">
            Otros Proyectos
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8 + (index * 0.1) }}
              className="card group hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <div className="aspect-video bg-gradient-to-br from-secondary-100 to-secondary-200 flex items-center justify-center">
                  <span className="text-secondary-600 font-semibold">Imagen del Proyecto</span>
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-primary-100 transition-colors"
                  >
                    <ExternalLink size={16} className="text-primary-600" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-primary-100 transition-colors"
                  >
                    <Github size={16} className="text-primary-600" />
                  </a>
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-secondary-600 text-sm mb-3">{project.description}</p>
              
              <div className="flex flex-wrap gap-1">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-secondary-100 text-secondary-700 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
