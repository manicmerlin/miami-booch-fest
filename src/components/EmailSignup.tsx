'use client'

import { useState } from 'react'

export default function EmailSignup() {
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
          source: 'homepage-signup'
        })
      })
      
      const data = await response.json()
      
      if (data.success) {
        setIsSubmitted(true)
        setEmail('')
      } else {
        console.error('Subscription failed:', data.error)
        // You can add error handling UI here
      }
    } catch (error) {
      console.error('Error:', error)
      // You can add error handling UI here
    }
  }

  return (
    <section id="email-signup" className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-headline text-4xl font-bold text-primary-500 mb-6 headline-caps tracking-headline">
          Get Festival Updates
        </h2>
        <p className="text-xl text-primary-500 mb-8 font-body leading-relaxed-body">
          Be the first to know about festival dates, vendor announcements, and special kombucha experiences!
        </p>
        
        {isSubmitted ? (
          <div className="bg-accent-100 border-2 border-accent-500 text-primary-500 px-6 py-4 rounded-lg inline-block font-body">
            ✅ Thanks for joining our kombucha community! We'll keep you updated on all the bubbly goodness.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-4 py-3 border-2 border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 font-body"
              />
              <button
                type="submit"
                className="bg-secondary-500 text-white px-6 py-3 rounded-lg font-headline font-semibold hover:bg-secondary-600 transition-colors shadow-md"
              >
                Join Us
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
