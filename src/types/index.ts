export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
  featured: boolean
  category: 'web' | 'mobile' | 'desktop' | 'other'
  createdAt: Date
}

export interface Skill {
  name: string
  level: number
  category: 'frontend' | 'backend' | 'tools' | 'other'
  icon?: string
}

export interface Experience {
  id: string
  title: string
  company: string
  location: string
  period: string
  description: string
  achievements: string[]
  technologies: string[]
  type: 'full-time' | 'part-time' | 'contract' | 'freelance'
}

export interface Education {
  id: string
  title: string
  institution: string
  location?: string
  period: string
  description: string
  type: 'degree' | 'certification' | 'course'
}

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}

export interface PersonalInfo {
  name: string
  title: string
  description: string
  email: string
  phone: string
  location: string
  socialLinks: SocialLink[]
  resumeUrl: string
}
