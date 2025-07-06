import '../styles/globals.css'
import FooterWithSocialMediaIcons from '../components/FooterWithSocialMediaIcons'
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
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 border-2 border-slate-700 border-t-cyan-500 rounded-full animate-spin"></div>
          <span className="ml-3 text-slate-400 text-sm mt-2">Loading...</span>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Component {...pageProps} />
      <FooterWithSocialMediaIcons />
    </div>
  )
} 