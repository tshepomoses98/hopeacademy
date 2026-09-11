const testimonials = [
  {
    name: 'Thabo M.',
    location: 'Soweto, GP',
    text: 'HopeBridge helped me submit my university application on time. I got into my first-choice institution. I couldn\'t have done it without them!',
    service: 'University Application',
    rating: 5,
  },
  {
    name: 'Nomsa K.',
    location: 'Rustenburg, NW',
    text: 'The bursary application service was incredible. They knew exactly what documents were needed and handled everything professionally.',
    service: 'Bursary Application',
    rating: 5,
  },
  {
    name: 'Sipho D.',
    location: 'Pretoria, GP',
    text: 'Hope AI helped my daughter pass Grade 11 Mathematics. The step-by-step explanations made everything click. Highly recommend!',
    service: 'Online Tutoring',
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="section-heading">Real People, Real Results</h2>
          <p className="section-sub">
            Join hundreds of South Africans who've transformed their futures with HopeBridge.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(t => (
            <div key={t.name} className="card-hover bg-green-50 border border-green-100 rounded-2xl p-6 shadow-sm">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.location}</div>
                </div>
                <span className="bg-green-100 text-green-700 text-xs font-medium px-2.5 py-1 rounded-full">
                  {t.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
