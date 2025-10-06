export const SITE_CONFIG = {
  name: 'Portfolio Interactivo',
  description: 'Portfolio profesional de desarrollador full stack',
  url: 'https://portfolio-ejemplo.com',
  author: 'Tu Nombre',
  email: 'contacto@ejemplo.com',
  phone: '+1 (555) 123-4567',
  location: 'Ciudad, País',
  social: {
    github: 'https://github.com/tu-usuario',
    linkedin: 'https://linkedin.com/in/tu-usuario',
    twitter: 'https://twitter.com/tu-usuario',
    email: 'mailto:contacto@ejemplo.com'
  }
}

export const NAVIGATION = [
  { name: 'Inicio', href: '/' },
  { name: 'Sobre mí', href: '/about' },
  { name: 'Proyectos', href: '/projects' },
  { name: 'Contacto', href: '/contact' }
]

export const ANIMATION_VARIANTS = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  },
  slideInLeft: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 }
  },
  slideInRight: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 }
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.3 }
  }
}

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
}
