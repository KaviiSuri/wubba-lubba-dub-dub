import { useRef, useCallback, useEffect } from "react"

export const useIntersectionObserver = (callback: () => void, deps: React.DependencyList) => {
  const observerElem = useRef(null)
  const handleObserver: IntersectionObserverCallback = useCallback((entries) => {
    const [target] = entries
    if (target.isIntersecting) {
      console.log('[APP]: Intersecting')
      callback()
    }
  }, deps)

  useEffect(() => {
    if (observerElem.current == null)
      return
    const element = observerElem.current
    const option = { threshold: 0 }
    const observer = new IntersectionObserver(handleObserver, option);
    observer.observe(element)
  }, [])

  return observerElem
}

