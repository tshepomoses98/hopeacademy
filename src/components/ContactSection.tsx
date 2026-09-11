import { useState } from 'react'

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

export function ContactSection() {
  const [fields, setFields] = useState({ name: '', email: '', message: '', 'bot-field': '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFields({ ...fields, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('/hopebridge-contact.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'hopebridge-contact',
          name: fields.name,
          email: fields.email,
          message: fields.message,
          'bot-field': fields['bot-field'],
        }),
      })
    } finally {
      setSubmitted(true)
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-14 items-start">
        {/* Info */}
        <div>
          <span className="inline-block bg-green-200 text-green-800 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            Contact Us
          </span>
          <h2 className="section-heading mb-5">Get In Touch</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Have questions? We'd love to hear from you. Reach out via WhatsApp for the fastest response, or use the contact form.
          </p>

          <div className="space-y-5">
            <a
              href="https://wa.me/27678216307"
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp inline-flex"
            >
              <WhatsAppIcon />
              Chat on WhatsApp
            </a>

            <div className="space-y-4 mt-4">
              {[
                { icon: '📧', label: 'Email', value: 'tshepomoses98@gmail.com', href: 'mailto:tshepomoses98@gmail.com' },
                { icon: '📍', label: 'Location', value: 'North West, South Africa', href: null },
                { icon: '🕐', label: 'Business Hours', value: 'Mon – Sat: 08:00 – 18:00', href: null },
                { icon: '📞', label: 'WhatsApp', value: '+27 67 821 6307', href: 'https://wa.me/27678216307' },
              ].map(item => (
                <div key={item.label} className="flex items-start gap-3">
                  <span className="text-xl mt-0.5">{item.icon}</span>
                  <div>
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-green-700 font-medium hover:underline">
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-gray-700 font-medium">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact form */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          {submitted ? (
            <div className="text-center py-6">
              <div className="text-4xl mb-3">✅</div>
              <h3 className="font-bold text-green-800 text-lg mb-2">Message Received!</h3>
              <p className="text-gray-500 text-sm">We'll get back to you shortly via WhatsApp or email.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <p className="hidden">
                <label>
                  Don't fill this out:{' '}
                  <input name="bot-field" value={fields['bot-field']} onChange={handleChange} />
                </label>
              </p>
              <input type="hidden" name="form-name" value="hopebridge-contact" />

              <h3 className="font-bold text-gray-900 text-lg mb-6">Send a Message</h3>

              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={fields.name}
                  onChange={handleChange}
                  required
                  placeholder="Full name"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm transition-all"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={fields.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm transition-all"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message</label>
                <textarea
                  name="message"
                  value={fields.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full justify-center"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
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
