import '../styles/globals.css'
import FooterWithSocialMediaIcons from '../components/FooterWithSocialMediaIcons'
import PerformanceOptimizer from '../components/PerformanceOptimizer'
import { useState, useEffect } from 'react'

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Small delay to ensure all components are properly mounted
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  // Show minimal loading state without footer
  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 border-2 border-gray-200 border-t-primary rounded-full animate-spin"></div>
          <span className="ml-3 text-gray-600 text-sm mt-2">Loading...</span>
        </div>
      </div>
    )
  }

  return (
    <PerformanceOptimizer>
      <div>
        <Component {...pageProps} />
        <FooterWithSocialMediaIcons />
      </div>
    </PerformanceOptimizer>
  )
} 