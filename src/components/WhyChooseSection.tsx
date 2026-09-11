const reasons = [
  {
    icon: '💡',
    title: 'Expert Guidance',
    description: 'Our team understands the South African application ecosystem — from NSFAS to Home Affairs.',
  },
  {
    icon: '⚡',
    title: 'Fast Turnaround',
    description: 'We move quickly so you never miss a deadline. Most applications are processed within 24–48 hours.',
  },
  {
    icon: '🔒',
    title: 'Secure & Confidential',
    description: 'Your documents and personal information are handled with the highest level of confidentiality.',
  },
  {
    icon: '💰',
    title: 'Truly Affordable',
    description: 'We believe cost should never be a barrier to opportunity. Our fees are among the lowest available.',
  },
  {
    icon: '📱',
    title: 'WhatsApp First',
    description: 'No complicated portals. Everything is handled through WhatsApp for maximum convenience.',
  },
  {
    icon: '🇿🇦',
    title: 'Built for South Africa',
    description: 'We understand local systems, policies, and challenges — designed specifically for South Africans.',
  },
]

export function WhyChooseSection() {
  return (
    <section className="py-20 md:py-28 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-block bg-green-200 text-green-800 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Why HopeBridge
          </span>
          <h2 className="section-heading">The Smarter Way to Apply</h2>
          <p className="section-sub">
            We remove the complexity so you can focus on what matters most — your future.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(r => (
            <div key={r.title} className="card-hover bg-white rounded-2xl p-6 shadow-sm border border-green-100">
              <div className="text-3xl mb-4">{r.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{r.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
