const services = [
  {
    icon: '🎓',
    title: 'University Applications',
    description: 'We handle your university application from start to finish — NSFAS, CAO, and direct applications covered.',
    price: 'R100',
    waMsg: 'Hi HopeBridge, I would like help with a University Application (R100)',
  },
  {
    icon: '📋',
    title: 'Bursary Applications',
    description: 'Access funding opportunities. We research and submit bursary applications on your behalf.',
    price: 'R70',
    waMsg: 'Hi HopeBridge, I would like help with a Bursary Application (R70)',
  },
  {
    icon: '🏫',
    title: 'GDE School Applications',
    description: 'Gauteng Department of Education school placements for Grade 1 and Grade 8.',
    price: 'R100',
    waMsg: 'Hi HopeBridge, I would like help with a GDE School Application (R100)',
  },
  {
    icon: '🪪',
    title: 'ID / Birth Certificate',
    description: 'Assistance with ID and birth certificate applications through the Department of Home Affairs.',
    price: 'R80',
    waMsg: 'Hi HopeBridge, I would like help with an ID/Birth Certificate application (R80)',
  },
  {
    icon: '💳',
    title: 'SRD R350 Grant',
    description: 'We help you apply for or appeal the SASSA SRD R350 social relief of distress grant.',
    price: 'R50',
    waMsg: 'Hi HopeBridge, I would like help with an SRD R350 Grant application (R50)',
  },
  {
    icon: '👶',
    title: 'Child Support Grant',
    description: 'We assist with the SASSA Child Support Grant application to ensure eligible families receive their support.',
    price: 'R110',
    waMsg: 'Hi HopeBridge, I would like help with a Child Support Grant application (R110)',
  },
  {
    icon: '📚',
    title: 'Online Tutoring',
    description: 'CAPS-aligned tutoring for high school and first-year university students. All subjects covered.',
    price: 'From R450/month',
    waMsg: 'Hi HopeBridge, I am interested in Online Tutoring (From R450/month)',
    featured: true,
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Our Services
          </span>
          <h2 className="section-heading">Affordable Solutions for Every Need</h2>
          <p className="section-sub">
            From education applications to government grants — we handle the process so you don't have to.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(s => (
            <div
              key={s.title}
              className={`card-hover rounded-2xl p-6 border ${
                s.featured
                  ? 'border-green-400 bg-gradient-to-br from-green-700 to-green-800 text-white shadow-xl'
                  : 'border-gray-100 gradient-card shadow-md'
              }`}
            >
              {s.featured && (
                <div className="inline-block bg-green-400 text-green-900 text-xs font-bold px-3 py-1 rounded-full mb-4">
                  ⭐ Most Popular
                </div>
              )}
              <div className="text-3xl mb-3">{s.icon}</div>
              <h3 className={`text-lg font-bold mb-2 ${s.featured ? 'text-white' : 'text-gray-900'}`}>
                {s.title}
              </h3>
              <p className={`text-sm mb-5 leading-relaxed ${s.featured ? 'text-green-100' : 'text-gray-500'}`}>
                {s.description}
              </p>
              <div className={`text-2xl font-extrabold mb-5 ${s.featured ? 'text-green-300' : 'text-green-700'}`}>
                {s.price}
              </div>
              <a
                href={`https://wa.me/27678216307?text=${encodeURIComponent(s.waMsg)}`}
                target="_blank"
                rel="noreferrer"
                className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full font-semibold text-sm transition-all duration-200 ${
                  s.featured
                    ? 'bg-white text-green-800 hover:bg-green-50'
                    : 'bg-green-700 text-white hover:bg-green-800'
                }`}
              >
                <WhatsAppIcon />
                Order via WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhatsAppIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.529 5.845L0 24l6.335-1.511A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.001-1.369l-.359-.213-3.72.887.932-3.617-.234-.371A9.792 9.792 0 012.182 12c0-5.418 4.4-9.818 9.818-9.818 5.418 0 9.818 4.4 9.818 9.818 0 5.418-4.4 9.818-9.818 9.818z" />
    </svg>
  )
}
