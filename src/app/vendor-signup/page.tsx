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
      <div className="min-h-screen bg-gray-50 py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-lg p-8 shadow-sm">
                        <h1 className="font-headline text-3xl font-bold text-primary-500 mb-4 headline-caps tracking-headline">
              Submitted!
            </h1>
            <p className="text-lg text-primary-500 mb-6 font-body leading-relaxed-body">
              We&apos;ll let you know once we get things rolling!
            </p>
            <div className="space-y-3">
              <Link 
                href="/"
                className="block w-full bg-primary-500 text-white py-2 px-4 rounded-lg font-headline font-semibold hover:bg-primary-600 transition-colors text-center"
              >
                Back to Home
              </Link>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="w-full bg-secondary-500 text-white py-2 px-4 rounded-lg font-headline font-semibold hover:bg-secondary-600 transition-colors"
              >
                Submit Another Application
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <main>
      <Navigation activeTab={activeTab} onTabChange={handleTabChange} />
      <div className="min-h-screen bg-gray-50 py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="font-headline text-4xl font-bold text-primary-500 mb-4 headline-caps tracking-headline">
              Become a Festival Vendor
            </h1>
            <p className="text-lg text-primary-500 font-body leading-relaxed-body">
              Join the Miami Kombucha Festival and showcase your amazing products to kombucha enthusiasts!
            </p>
          </div>

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
        <Footer />
      </div>
    </div>
    </main>
  )
}
