'use client'

import { useState, useEffect } from 'react'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import EmailSignup from '../components/EmailSignup'
import VendorCTA from '../components/VendorCTA'
import LocalVendors from '../components/LocalVendors'
import FarmersMarkets from '../components/FarmersMarkets'
import Footer from '../components/Footer'

export default function Home() {
  const [activeTab, setActiveTab] = useState<'home' | 'artisans' | 'markets'>('home')

  // Persist active tab in localStorage, but default to 'home' for new visitors
  useEffect(() => {
    const savedTab = localStorage.getItem('activeTab') as 'home' | 'artisans' | 'markets'
    // Only use saved tab if it exists and is valid, otherwise default to 'home'
    if (savedTab && ['home', 'artisans', 'markets'].includes(savedTab)) {
      setActiveTab(savedTab)
    } else {
      // Ensure new visitors see the Festival tab
      setActiveTab('home')
      localStorage.setItem('activeTab', 'home')
    }
  }, [])

  const handleTabChange = (tab: 'home' | 'artisans' | 'markets') => {
    setActiveTab(tab)
    localStorage.setItem('activeTab', tab)
  }

  return (
    <>
      <Navigation activeTab={activeTab} onTabChange={handleTabChange} />
      
      {activeTab === 'home' && (
        <main className="min-h-screen">
          <Hero />
          <EmailSignup />
          <VendorCTA />
        </main>
      )}
      
      {activeTab === 'artisans' && (
        <main className="min-h-screen">
          <LocalVendors />
        </main>
      )}
      
      {activeTab === 'markets' && (
        <main className="min-h-screen">
          <FarmersMarkets />
        </main>
      )}
      
      <Footer />
    </>
  )
}
