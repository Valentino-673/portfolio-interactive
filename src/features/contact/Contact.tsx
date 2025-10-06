import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactForm>()

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true)
    // Simular envío del formulario
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log('Form data:', data)
    reset()
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contacto@ejemplo.com',
      href: 'mailto:contacto@ejemplo.com'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      value: 'Ciudad, País',
      href: '#'
    }
  ]

  return (
    <section ref={ref} className="section-padding bg-secondary-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Contacto
          </h2>
          <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">Información de Contacto</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <motion.a
                      key={info.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                      href={info.href}
                      className="flex items-center space-x-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="p-3 bg-primary-100 rounded-lg">
                        <Icon size={24} className="text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary-900">{info.title}</h4>
                        <p className="text-secondary-600">{info.value}</p>
                      </div>
                    </motion.a>
                  )
                })}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white p-6 rounded-lg"
            >
              <h4 className="text-lg font-semibold mb-4">Horarios de Disponibilidad</h4>
              <div className="space-y-2 text-secondary-600">
                <p><span className="font-medium">Lunes - Viernes:</span> 9:00 AM - 6:00 PM</p>
                <p><span className="font-medium">Sábados:</span> 10:00 AM - 2:00 PM</p>
                <p><span className="font-medium">Domingos:</span> Cerrado</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6">Envíame un Mensaje</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name', { required: 'El nombre es requerido' })}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="Tu nombre completo"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', { 
                      required: 'El email es requerido',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Email inválido'
                      }
                    })}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="tu@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 mb-2">
                  Asunto *
                </label>
                <input
                  type="text"
                  id="subject"
                  {...register('subject', { required: 'El asunto es requerido' })}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="¿En qué puedo ayudarte?"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register('message', { required: 'El mensaje es requerido' })}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send size={20} />
                    <span>Enviar Mensaje</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
