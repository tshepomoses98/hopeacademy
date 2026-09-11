export function HeroSection() {
  return (
    <section id="home" className="gradient-hero min-h-screen flex items-center relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-green-400 rounded-full opacity-10 blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-green-300 rounded-full opacity-10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-32 md:py-40 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-green-800 bg-opacity-50 text-green-200 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            South Africa's Education Partner
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Bridge Your Dreams<br />
            <span className="text-green-300">Into Reality</span>
          </h1>
          <p className="text-green-100 text-lg md:text-xl mb-8 leading-relaxed max-w-lg">
            Helping South Africans access education, unlock opportunities, and build a better future — one application at a time.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#apply" className="btn-primary text-base">
              Get Started
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="https://wa.me/27678216307"
              target="_blank"
              rel="noreferrer"
              className="btn-outline text-base"
            >
              <WhatsAppIcon />
              Chat on WhatsApp
            </a>
          </div>

          {/* Trust stats */}
          <div className="mt-12 flex flex-wrap gap-8">
            {[
              { num: '500+', label: 'Students Helped' },
              { num: '7', label: 'Services Offered' },
              { num: '98%', label: 'Success Rate' },
            ].map(s => (
              <div key={s.label}>
                <div className="text-2xl font-bold text-white">{s.num}</div>
                <div className="text-green-300 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero card mockup */}
        <div className="hidden md:flex justify-center">
          <div className="relative">
            <div className="w-80 bg-white rounded-3xl shadow-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-green-700 flex items-center justify-center">
                  <span className="text-white font-bold">H</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">HopeBridge</div>
                  <div className="text-xs text-green-600 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    Online now
                  </div>
                </div>
              </div>
              <div className="space-y-3 mb-5">
                <div className="chat-bubble-bot">
                  Hi! 👋 How can HopeBridge help you today?
                </div>
                <div className="chat-bubble-user ml-auto">
                  I need help with my university application
                </div>
                <div className="chat-bubble-bot">
                  Great! We handle university applications for just <strong>R100</strong>. Let's get started! 🎓
                </div>
              </div>
              <div className="bg-green-50 rounded-xl p-3 text-xs text-green-800 font-medium text-center">
                ✓ Trusted by 500+ South Africans
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white text-xs font-bold px-3 py-2 rounded-full shadow-lg">
              Affordable ✓
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white text-green-800 text-xs font-bold px-3 py-2 rounded-full shadow-lg border border-green-100">
              🇿🇦 South Africa
            </div>
          </div>
        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80H1440V40C1200 80 960 0 720 40C480 80 240 0 0 40V80Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.529 5.845L0 24l6.335-1.511A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.001-1.369l-.359-.213-3.72.887.932-3.617-.234-.371A9.792 9.792 0 012.182 12c0-5.418 4.4-9.818 9.818-9.818 5.418 0 9.818 4.4 9.818 9.818 0 5.418-4.4 9.818-9.818 9.818z" />
    </svg>
  )
}
