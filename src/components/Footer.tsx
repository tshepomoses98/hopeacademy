export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-green-900 text-green-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-xl bg-green-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <span className="text-white font-bold text-xl">HopeBridge</span>
          </div>
          <p className="text-green-300 text-sm leading-relaxed mb-4 max-w-xs">
            We are a bridge between your thoughts and your dreams. Helping South Africans access education, opportunities, and success.
          </p>
          <a
            href="https://wa.me/27678216307"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
          >
            <WhatsAppIcon />
            +27 67 821 6307
          </a>
        </div>

        {/* Services */}
        <div>
          <div className="text-white font-semibold mb-4">Services</div>
          <ul className="space-y-2 text-sm text-green-300">
            {['University Applications', 'Bursary Applications', 'GDE School Applications', 'ID / Birth Certificate', 'SRD R350 Grant', 'Child Support Grant', 'Online Tutoring'].map(s => (
              <li key={s}>
                <a href="#services" className="hover:text-white transition-colors">{s}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Links & contact */}
        <div>
          <div className="text-white font-semibold mb-4">Company</div>
          <ul className="space-y-2 text-sm text-green-300 mb-6">
            {[
              { label: 'Home', href: '#home' },
              { label: 'About', href: '#about' },
              { label: 'Hope AI', href: '#hope-ai' },
              { label: 'Apply', href: '#apply' },
              { label: 'Contact', href: '#contact' },
            ].map(l => (
              <li key={l.label}>
                <a href={l.href} className="hover:text-white transition-colors">{l.label}</a>
              </li>
            ))}
          </ul>
          <div className="text-sm text-green-400">
            <div>📧 <a href="mailto:tshepomoses98@gmail.com" className="hover:text-white transition-colors">tshepomoses98@gmail.com</a></div>
            <div className="mt-1">📍 North West, South Africa</div>
          </div>
        </div>
      </div>

      <div className="border-t border-green-800 py-5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-green-500">
          <div>© {year} HopeBridge. All rights reserved.</div>
          <div>Empowering South Africans · North West, South Africa 🇿🇦</div>
        </div>
      </div>
    </footer>
  )
}

function WhatsAppIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.529 5.845L0 24l6.335-1.511A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.001-1.369l-.359-.213-3.72.887.932-3.617-.234-.371A9.792 9.792 0 012.182 12c0-5.418 4.4-9.818 9.818-9.818 5.418 0 9.818 4.4 9.818 9.818 0 5.418-4.4 9.818-9.818 9.818z" />
    </svg>
  )
}
