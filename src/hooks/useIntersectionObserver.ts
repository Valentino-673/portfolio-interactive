import { useEffect, useRef, useState } from 'react'

interface UseIntersectionObserverOptions {
  threshold?: number
  root?: Element | null
  rootMargin?: string
  freezeOnceVisible?: boolean
}

export const useIntersectionObserver = (
  options: UseIntersectionObserverOptions = {}
) => {
  const {
    threshold = 0,
    root = null,
    rootMargin = '0%',
    freezeOnceVisible = false
  } = options

  const [entry, setEntry] = useState<IntersectionObserverEntry>()
  const [node, setNode] = useState<Element | null>(null)
  const observer = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    if (!node) return

    const hasIOSupport = !!window.IntersectionObserver
    if (!hasIOSupport) return

    const observerParams = { threshold, root, rootMargin }
    const currentObserver = new IntersectionObserver(
      ([currentEntry]) => {
        setEntry(currentEntry)
        if (freezeOnceVisible && currentEntry.isIntersecting) {
          currentObserver.disconnect()
        }
      },
      observerParams
    )

    observer.current = currentObserver
    currentObserver.observe(node)

    return () => {
      currentObserver.disconnect()
    }
  }, [node, threshold, root, rootMargin, freezeOnceVisible])

  return [setNode, entry] as const
}
