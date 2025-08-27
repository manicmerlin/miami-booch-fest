'use client'

import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

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
          source: 'footer-signup'
        })
      })
      
      const data = await response.json()
      
      if (data.success) {
        setIsSubmitted(true)
        setEmail('')
      } else {
        console.error('Subscription failed:', data.error)
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <footer className="bg-primary-800 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Festival Info */}
          <div>
            <h3 className="font-headline text-xl font-bold mb-4 headline-caps tracking-headline">Miami Kombucha Festival</h3>
            <p className="text-primary-200 mb-4 font-body leading-relaxed-body">
              South Florida&apos;s premier kombucha celebration featuring local artisans, 
              tastings, and vibrant community connection.
            </p>
            <div className="space-y-2 text-primary-200 font-body">
              <p>📍 Miami, Florida</p>
              <p>🎉 Coming Soon!</p>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="font-headline text-xl font-bold mb-4 headline-caps tracking-headline">Stay Updated</h3>
            {isSubmitted ? (
              <div className="bg-accent-500 text-primary-800 p-3 rounded-lg font-body font-semibold">
                ✅ Thanks for joining our community!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <p className="text-primary-200 text-sm font-body">
                  Get festival updates and artisan announcements
                </p>
                <div className="space-y-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="w-full max-w-xs px-3 py-2 bg-primary-700 border border-primary-600 rounded-lg text-white placeholder-primary-300 focus:outline-none focus:ring-2 focus:ring-accent-500 font-body"
                  />
                  <button
                    type="submit"
                    className="bg-secondary-500 text-white px-6 py-2 rounded-lg font-headline font-medium hover:bg-secondary-600 transition-colors"
                  >
                    Join
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Links */}
          <div>
            <h3 className="font-headline text-xl font-bold mb-4 headline-caps tracking-headline">Get Involved</h3>
            <div className="space-y-2">
              <a href="/vendor-signup" className="block text-accent-400 hover:text-accent-300 transition-colors font-body">
                → Become a Vendor
              </a>
              <a href="mailto:hello@miamiboochfest.com" className="block text-accent-400 hover:text-accent-300 transition-colors font-body">
                → Contact Us
              </a>
              <a href="mailto:press@miamiboochfest.com" className="block text-accent-400 hover:text-accent-300 transition-colors font-body">
                → Press Inquiries
              </a>
              <a href="mailto:sponsors@miamiboochfest.com" className="block text-accent-400 hover:text-accent-300 transition-colors font-body">
                → Sponsorship Info
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-300 text-sm font-body">
            © 2025 Miami Kombucha Festival. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-primary-300 hover:text-white transition-colors font-body">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-300 hover:text-white transition-colors font-body">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
