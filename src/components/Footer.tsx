import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
    { name: 'Email', icon: Mail, href: 'mailto:contacto@ejemplo.com' },
  ]

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-secondary-900 text-white"
    >
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Portfolio Interactivo</h3>
            <p className="text-secondary-300">
              Desarrollador Full Stack apasionado por crear experiencias digitales excepcionales.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-secondary-300 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="/about" className="text-secondary-300 hover:text-white transition-colors">Sobre mí</a></li>
              <li><a href="/projects" className="text-secondary-300 hover:text-white transition-colors">Proyectos</a></li>
              <li><a href="/contact" className="text-secondary-300 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Sígueme</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-secondary-800 rounded-lg hover:bg-primary-600 transition-colors"
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-800 mt-8 pt-8 text-center">
          <p className="text-secondary-400">
            © {new Date().getFullYear()} Portfolio Interactivo. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
