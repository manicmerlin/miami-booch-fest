'use client'

import { useState } from 'react'
import Link from 'next/link'

type TabType = 'home' | 'artisans' | 'markets'

interface NavigationProps {
  activeTab: TabType
  onTabChange: (tab: TabType) => void
}

export default function Navigation({ activeTab, onTabChange }: NavigationProps) {
  return (
    <nav className="bg-white border-b-2 border-neutral-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="font-headline text-2xl font-bold text-primary-500 headline-caps tracking-headline hover:text-primary-600 transition-colors">
            Miami Kombucha Festival
          </Link>
          
          {/* Tab Navigation */}
          <div className="flex space-x-1 bg-neutral-100 rounded-lg p-1">
            <button
              onClick={() => onTabChange('home')}
              className={`px-6 py-2 rounded-md font-headline font-medium transition-colors ${
                activeTab === 'home'
                  ? 'bg-white text-primary-500 shadow-sm'
                  : 'text-primary-400 hover:text-primary-500'
              }`}
            >
              Festival
            </button>
            <button
              onClick={() => onTabChange('artisans')}
              className={`px-6 py-2 rounded-md font-headline font-medium transition-colors ${
                activeTab === 'artisans'
                  ? 'bg-white text-primary-500 shadow-sm'
                  : 'text-primary-400 hover:text-primary-500'
              }`}
            >
              Local Artisans
            </button>
            <button
              onClick={() => onTabChange('markets')}
              className={`px-6 py-2 rounded-md font-headline font-medium transition-colors ${
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
