export const formatDate = (date: Date | string): string => {
  const d = new Date(date)
  return d.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export const formatPeriod = (startDate: string, endDate?: string): string => {
  const start = new Date(startDate)
  const end = endDate ? new Date(endDate) : new Date()
  
  const startFormatted = start.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'short'
  })
  
  const endFormatted = endDate 
    ? end.toLocaleDateString('es-ES', { year: 'numeric', month: 'short' })
    : 'Presente'
  
  return `${startFormatted} - ${endFormatted}`
}

export const calculateDuration = (startDate: string, endDate?: string): string => {
  const start = new Date(startDate)
  const end = endDate ? new Date(endDate) : new Date()
  
  const diffTime = Math.abs(end.getTime() - start.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  const diffMonths = Math.floor(diffDays / 30)
  const diffYears = Math.floor(diffMonths / 12)
  
  if (diffYears > 0) {
    const remainingMonths = diffMonths % 12
    return remainingMonths > 0 
      ? `${diffYears} año${diffYears > 1 ? 's' : ''} ${remainingMonths} mes${remainingMonths > 1 ? 'es' : ''}`
      : `${diffYears} año${diffYears > 1 ? 's' : ''}`
  }
  
  return `${diffMonths} mes${diffMonths > 1 ? 'es' : ''}`
}

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null
  
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

export const scrollToElement = (elementId: string, offset: number = 0): void => {
  const element = document.getElementById(elementId)
  if (element) {
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (err) {
    console.error('Error copying to clipboard:', err)
    return false
  }
}

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  return emailRegex.test(email)
}

export const generateId = (): string => {
  return Math.random().toString(36).substr(2, 9)
}
