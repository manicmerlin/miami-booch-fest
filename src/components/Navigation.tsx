'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

type TabType = 'home' | 'artisans' | 'markets'

interface NavigationProps {
  activeTab: TabType
  onTabChange: (tab: TabType) => void
}

export default function Navigation({ activeTab, onTabChange }: NavigationProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY <= 50) {
        // Always show when near the top
        setIsVisible(true)
      } else if (currentScrollY < lastScrollY - 10) {
        // Scrolling up with some threshold
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY + 10 && currentScrollY > 150) {
        // Scrolling down with threshold and past certain point
        setIsVisible(false)
      }
      
      setLastScrollY(currentScrollY)
    }

    let timeoutId: NodeJS.Timeout
    const handleScroll = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(controlNavbar, 10)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timeoutId)
    }
  }, [lastScrollY])

  return (
    <nav className={`bg-white border-b-2 border-neutral-200 fixed top-0 left-0 right-0 z-50 shadow-sm transition-transform duration-300 ease-in-out ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-6xl mx-auto px-2 sm:px-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-4 space-y-3 sm:space-y-0">
          {/* Logo */}
          <Link href="/" className="font-headline text-lg sm:text-2xl font-bold text-primary-500 headline-caps tracking-headline hover:text-primary-600 transition-colors text-center sm:text-left">
            Miami Kombucha Festival
          </Link>
          
          {/* Tab Navigation */}
          <div className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-1 bg-neutral-100 rounded-lg p-1">
            <button
              onClick={() => onTabChange('home')}
              className={`px-3 sm:px-6 py-2 rounded-md font-headline font-medium transition-colors text-sm sm:text-base ${
                activeTab === 'home'
                  ? 'bg-white text-primary-500 shadow-sm'
                  : 'text-primary-400 hover:text-primary-500'
              }`}
            >
              Festival
            </button>
            <button
              onClick={() => onTabChange('artisans')}
              className={`px-3 sm:px-6 py-2 rounded-md font-headline font-medium transition-colors text-sm sm:text-base ${
                activeTab === 'artisans'
                  ? 'bg-white text-primary-500 shadow-sm'
                  : 'text-primary-400 hover:text-primary-500'
              }`}
            >
              Local Artisans
            </button>
            <button
              onClick={() => onTabChange('markets')}
              className={`px-3 sm:px-6 py-2 rounded-md font-headline font-medium transition-colors text-sm sm:text-base ${
                activeTab === 'markets'
                  ? 'bg-white text-primary-500 shadow-sm'
                  : 'text-primary-400 hover:text-primary-500'
              }`}
            >
              Farmers Markets
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
