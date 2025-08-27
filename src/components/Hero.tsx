'use client'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-neutral-100 to-accent-100 py-20 px-4 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="font-headline text-6xl md:text-8xl font-bold text-primary-500 mb-6 headline-caps tracking-headline">
          Miami Kombucha Festival
        </h1>
        <p className="text-xl md:text-2xl text-primary-500 mb-8 max-w-3xl mx-auto font-body leading-relaxed-body">
          South Florida&apos;s kombucha festival — a vibrant celebration of craft brews, mindful makers, and a community vibe that feels as good as it tastes.
        </p>
        <a 
          href="#email-signup"
          onClick={(e) => {
            e.preventDefault()
            document.getElementById('email-signup')?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="bg-secondary-500 text-white px-8 py-6 rounded-lg inline-block text-lg font-headline font-semibold shadow-lg hover:bg-secondary-600 transition-colors cursor-pointer"
        >
          Get Launch Updates
        </a>
        <div className="mt-8 text-lg text-primary-500 font-body">
          📍 Miami, Florida | 🥤 Tastings & Community
        </div>
        
        {/* Decorative elements */}
        <div className="mt-12 flex justify-center space-x-8 text-4xl opacity-60">
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
