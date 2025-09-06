import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode
} from 'react'

type ResponsiveContextType = {
  isMobile: boolean
}

const ResponsiveContext = createContext<ResponsiveContextType>({
  isMobile: false
})

export const ResponsiveProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <ResponsiveContext.Provider value={{ isMobile }}>
      {children}
    </ResponsiveContext.Provider>
  )
}

export const useResponsive = () => useContext(ResponsiveContext)
