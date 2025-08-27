'use client'

import { useState, useEffect } from 'react'

export default function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    // Show popup after 10 seconds if user hasn't already dismissed it
    const hasSeenPopup = localStorage.getItem('kombucha-popup-seen')
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 10000) // 10 seconds

      return () => clearTimeout(timer)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/mailchimp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          type: 'attendee',
          source: 'popup-signup'
        })
      })
      
      const data = await response.json()
      
      if (data.success) {
        setIsSubmitted(true)
        localStorage.setItem('kombucha-popup-seen', 'true')
        setTimeout(() => {
          setIsVisible(false)
        }, 3000)
      } else {
        console.error('Subscription failed:', data.error)
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const handleClose = () => {
    setIsVisible(false)
    localStorage.setItem('kombucha-popup-seen', 'true')
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>
        
        {isSubmitted ? (
          <div className="text-center">
            <div className="text-4xl mb-4">🎉</div>
            <h3 className="text-xl font-bold text-green-600 mb-2">
              You&apos;re In!
            </h3>
            <p className="text-gray-600">
              Thanks for joining our kombucha community. You&apos;ll be the first to know about festival updates!
            </p>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <div className="text-4xl mb-3">🥤</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Don&apos;t Miss Out!
              </h3>
              <p className="text-gray-600">
                Get exclusive updates about the Miami Kombucha Festival, including early vendor announcements and special perks.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Get Festival Updates
              </button>
              <p className="text-xs text-gray-500 text-center">
                No spam, just kombucha goodness. Unsubscribe anytime.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
