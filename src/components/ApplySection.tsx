import { useState } from 'react'

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

const serviceOptions = [
  'University Applications',
  'Bursary Applications',
  'GDE School Applications',
  'ID / Birth Certificate',
  'SRD R350 Grant',
  'Child Support Grant',
  'Online Tutoring',
]

export function ApplySection() {
  const [fields, setFields] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: '',
    message: '',
    'bot-field': '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setFields({ ...fields, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('/hopebridge-apply.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'hopebridge-apply',
          fullName: fields.fullName,
          phone: fields.phone,
          email: fields.email,
          service: fields.service,
          message: fields.message,
          'bot-field': fields['bot-field'],
        }),
      })
      setSubmitted(true)
    } catch {
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="apply" className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Apply Now
          </span>
          <h2 className="section-heading">Submit Your Application</h2>
          <p className="section-sub">
            Fill in your details below and we'll contact you on WhatsApp to complete your application.
          </p>
        </div>

        {submitted ? (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center shadow-md">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-xl font-bold text-green-800 mb-3">
              We have received your request!
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Thank you for reaching out. We will contact you on WhatsApp shortly to discuss your application and next steps.
            </p>
            <a
              href="https://wa.me/27678216307"
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp mt-6 inline-flex"
            >
              <WhatsAppIcon />
              Continue on WhatsApp
            </a>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            <form onSubmit={handleSubmit} name="hopebridge-apply">
              {/* Honeypot */}
              <p className="hidden">
                <label>
                  Don't fill this out if you're human:{' '}
                  <input name="bot-field" value={fields['bot-field']} onChange={handleChange} />
                </label>
              </p>
              <input type="hidden" name="form-name" value="hopebridge-apply" />

              <div className="grid md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={fields.fullName}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Thabo Mokoena"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={fields.phone}
                    onChange={handleChange}
                    required
                    placeholder="e.g. 0678216307"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm transition-all"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={fields.email}
                  onChange={handleChange}
                  placeholder="e.g. thabo@email.com"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm transition-all"
                />
              </div>

              <div className="mb-5">
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Service Required <span className="text-red-500">*</span>
                </label>
                <select
                  name="service"
                  value={fields.service}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm transition-all bg-white"
                >
                  <option value="" disabled>Select a service...</option>
                  {serviceOptions.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Additional Notes
                </label>
                <textarea
                  name="message"
                  value={fields.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us more about your situation or what you need help with..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm transition-all resize-none"
                />
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 text-sm text-green-800">
                📎 <strong>Document upload:</strong> After submitting this form, we'll contact you on WhatsApp to collect any required documents securely.
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full justify-center text-base py-3.5"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  <>
                    Submit Application
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  )
}

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.529 5.845L0 24l6.335-1.511A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.001-1.369l-.359-.213-3.72.887.932-3.617-.234-.371A9.792 9.792 0 012.182 12c0-5.418 4.4-9.818 9.818-9.818 5.418 0 9.818 4.4 9.818 9.818 0 5.418-4.4 9.818-9.818 9.818z" />
    </svg>
  )
}
