const values = [
  { icon: '🌍', label: 'Accessibility', desc: 'Everyone deserves access to education and opportunities, regardless of background.' },
  { icon: '🤝', label: 'Trust', desc: 'We handle your personal information with the highest level of care and confidentiality.' },
  { icon: '⭐', label: 'Excellence', desc: 'We are committed to delivering quality service every single time.' },
  { icon: '🚀', label: 'Impact', desc: 'Our work creates real, measurable change in people\'s lives and communities.' },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-14 items-center">
        {/* Left: story */}
        <div>
          <span className="inline-block bg-green-200 text-green-800 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            About HopeBridge
          </span>
          <h2 className="section-heading mb-5">
            A Bridge Between Your Thoughts and Your Dreams
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            HopeBridge was founded by a young South African entrepreneur who witnessed firsthand how many talented students miss life-changing opportunities — not due to lack of ability, but because of overwhelming application processes, language barriers, and lack of guidance.
          </p>
          <p className="text-gray-600 leading-relaxed mb-5">
            Our mission is simple: <strong className="text-green-700">to be the bridge between your thoughts and your dreams.</strong> We break down barriers by offering affordable, accessible, and expert assistance for every stage of your educational and administrative journey.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            From university applications to government grants, from CAPS tutoring to document assistance — HopeBridge is with you every step of the way.
          </p>

          <a href="#apply" className="btn-primary inline-flex">
            Start Your Journey
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Right: values */}
        <div className="grid grid-cols-2 gap-4">
          {values.map(v => (
            <div key={v.label} className="card-hover bg-white rounded-2xl p-5 shadow-sm border border-green-100">
              <div className="text-3xl mb-3">{v.icon}</div>
              <div className="font-bold text-gray-900 mb-1">{v.label}</div>
              <div className="text-gray-500 text-sm leading-relaxed">{v.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
