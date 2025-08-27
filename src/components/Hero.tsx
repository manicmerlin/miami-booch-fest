'use client'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-neutral-100 to-accent-100 py-12 sm:py-20 px-4 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="font-headline text-4xl sm:text-6xl md:text-8xl font-bold text-primary-500 mb-4 sm:mb-6 headline-caps tracking-headline leading-tight">
          Miami Kombucha Festival
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-primary-500 mb-6 sm:mb-8 max-w-3xl mx-auto font-body leading-relaxed-body px-2">
          South Florida&apos;s kombucha festival — a vibrant celebration of craft brews, mindful makers, and a community vibe that feels as good as it tastes.
        </p>
        <a 
          href="#email-signup"
          onClick={(e) => {
            e.preventDefault()
            document.getElementById('email-signup')?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="bg-secondary-500 text-white px-6 sm:px-8 py-4 sm:py-6 rounded-lg inline-block text-base sm:text-lg font-headline font-semibold shadow-lg hover:bg-secondary-600 transition-colors cursor-pointer"
        >
          Get Launch Updates
        </a>
        <div className="mt-6 sm:mt-8 text-base sm:text-lg text-primary-500 font-body">
          📍 Miami, Florida | 🥤 Tastings & Community
        </div>
        
        {/* Decorative elements */}
        <div className="mt-8 sm:mt-12 flex justify-center space-x-4 sm:space-x-8 text-2xl sm:text-4xl opacity-60">
          <span>🍃</span>
          <span>🥤</span>
          <span>🌱</span>
          <span>☀️</span>
          <span>🧘</span>
        </div>
      </div>
    </section>
  )
}
