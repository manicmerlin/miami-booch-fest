'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export default function VendorSignup() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    website: '',
    description: '',
    experience: '',
    socialMedia: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [activeTab, setActiveTab] = useState<'home' | 'artisans' | 'markets'>('home')

  // Handle navigation to home page with specific tab
  const handleTabChange = (tab: 'home' | 'artisans' | 'markets') => {
    // Navigate to home page - the tab state will be handled by the main page
    router.push('/')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    console.log('Form submitted with data:', formData)
    
    try {
      console.log('Sending request to /api/mailchimp...')
      const response = await fetch('/api/mailchimp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          type: 'vendor',
          firstName: formData.contactName.split(' ')[0] || '',
          lastName: formData.contactName.split(' ').slice(1).join(' ') || '',
          source: 'vendor-application',
          companyName: formData.companyName,
          phone: formData.phone,
          website: formData.website,
          description: formData.description
        })
      })
      
      console.log('Response status:', response.status)
      const data = await response.json()
      console.log('Response data:', data)
      
      if (data.success) {
        console.log('SUCCESS! Setting isSubmitted to true')
        setIsSubmitted(true)
        // Clear form data after successful submission
        setFormData({
          companyName: '',
          contactName: '',
          email: '',
          phone: '',
          website: '',
          description: '',
          experience: '',
          socialMedia: ''
        })
      } else {
        console.error('Vendor application submission failed:', data.error)
        alert('Submission failed: ' + (data.error || 'Unknown error'))
      }
    } catch (error) {
      console.error('Error during submission:', error)
      alert('Error: ' + error)
    }
  }

  if (isSubmitted) {
    return (
      <main>
        <Navigation activeTab={activeTab} onTabChange={handleTabChange} />
        
        {/* Success Hero Section */}
        <section className="bg-gradient-to-br from-neutral-100 to-accent-100 py-12 sm:py-20 px-4 min-h-screen flex items-center">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="font-headline text-4xl sm:text-6xl md:text-8xl font-bold text-primary-500 mb-4 sm:mb-6 headline-caps tracking-headline leading-tight">
              Application Submitted!
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-primary-500 mb-6 sm:mb-8 max-w-3xl mx-auto font-body leading-relaxed-body px-2">
              Thank you for your interest! We&apos;ll review your application and get back to you soon.
            </p>
            
            {/* Action buttons */}
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Link 
                href="/"
                className="block sm:inline-block bg-secondary-500 text-white px-6 sm:px-8 py-4 sm:py-6 rounded-lg text-base sm:text-lg font-headline font-semibold shadow-lg hover:bg-secondary-600 transition-colors"
              >
                Back to Home
              </Link>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="block sm:inline-block w-full sm:w-auto bg-primary-500 text-white px-6 sm:px-8 py-4 sm:py-6 rounded-lg text-base sm:text-lg font-headline font-semibold shadow-lg hover:bg-primary-600 transition-colors"
              >
                Submit Another Application
              </button>
            </div>
            
            {/* Decorative elements */}
            <div className="mt-8 sm:mt-12 flex justify-center space-x-4 sm:space-x-8 text-2xl sm:text-4xl opacity-60">
              <span>✅</span>
              <span>🎉</span>
              <span>🥤</span>
              <span>🌟</span>
              <span>📧</span>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main>
      <Navigation activeTab={activeTab} onTabChange={handleTabChange} />
      
      {/* Hero Section with same structure as home page */}
      <section className="bg-gradient-to-br from-neutral-100 to-accent-100 py-12 sm:py-20 px-4 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-headline text-4xl sm:text-6xl md:text-8xl font-bold text-primary-500 mb-4 sm:mb-6 headline-caps tracking-headline leading-tight">
            Become a Festival Vendor
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-primary-500 mb-6 sm:mb-8 max-w-3xl mx-auto font-body leading-relaxed-body px-2">
            Join the Miami Kombucha Festival and showcase your amazing products to kombucha enthusiasts across South Florida!
          </p>
          
          {/* Decorative elements */}
          <div className="mt-8 sm:mt-12 flex justify-center space-x-4 sm:space-x-8 text-2xl sm:text-4xl opacity-60">
            <span>🥤</span>
            <span>🛍️</span>
            <span>🌟</span>
            <span>🤝</span>
            <span>🎉</span>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-4 bg-neutral-50">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                Company/Brand Name *
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            <div>
              <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-2">
                Contact Name *
              </label>
              <input
                type="text"
                id="contactName"
                name="contactName"
                value={formData.contactName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                Website/Online Store
              </label>
              <input
                type="text"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="https://"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Tell us about your brand *
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Describe your kombucha flavors, brewing process, what makes your brand unique..."
              />
            </div>

            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                Previous festival/market experience
              </label>
              <textarea
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Have you participated in other festivals or farmers markets?"
              />
            </div>

            <div>
              <label htmlFor="socialMedia" className="block text-sm font-medium text-gray-700 mb-2">
                Social Media Handles
              </label>
              <input
                type="text"
                id="socialMedia"
                name="socialMedia"
                value={formData.socialMedia}
                onChange={handleChange}
                placeholder="@yourinstagram, @yourfacebook, etc."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-secondary-500 text-white py-4 px-6 rounded-lg font-headline font-semibold text-lg hover:bg-secondary-600 transition-colors"
            >
              Submit Vendor Application
            </button>
          </form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
