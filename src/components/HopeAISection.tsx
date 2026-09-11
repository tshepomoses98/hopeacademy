const messages = [
  { from: 'bot', text: 'Hello! I\'m Hope AI, your CAPS-aligned tutor 👋. What subject can I help you with today?' },
  { from: 'user', text: 'I\'m struggling with Maths Grade 11 — quadratic equations' },
  { from: 'bot', text: 'No problem! Let\'s break it down step by step. A quadratic equation has the form ax² + bx + c = 0. Ready for step 1?' },
  { from: 'user', text: 'Yes, please!' },
  { from: 'bot', text: '✅ Step 1: Identify a, b, and c. In 2x² + 5x - 3 = 0, we have a=2, b=5, c=-3. Simple, right? 😊' },
]

export function HopeAISection() {
  return (
    <section id="hope-ai" className="py-20 md:py-28 bg-gradient-to-br from-green-900 to-green-800 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-600 rounded-full opacity-20 blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-400 rounded-full opacity-20 blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <span className="inline-block bg-green-700 text-green-200 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            🤖 Hope AI
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5 leading-tight">
            Your Personal<br />
            <span className="text-green-300">AI Study Partner</span>
          </h2>
          <p className="text-green-100 text-lg mb-6 leading-relaxed">
            Hope AI is a CAPS-aligned artificial intelligence tutor that guides high school and first-year university students through every subject — step by step.
          </p>
          <ul className="space-y-3 mb-8">
            {[
              'Aligned to the South African CAPS curriculum',
              'Step-by-step explanations for every topic',
              'Available 24/7 — learn at your own pace',
              'Covers Maths, Science, English, and more',
              'Perfect for Grade 10–12 and first-year students',
            ].map(item => (
              <li key={item} className="flex items-start gap-3 text-green-100">
                <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
          <a
            href="https://wa.me/27678216307?text=Hi%20HopeBridge%2C%20I%20want%20to%20try%20Hope%20AI%20tutoring"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Try Hope AI
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Chat UI mockup */}
        <div className="flex justify-center md:justify-end">
          <div className="w-full max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Chat header */}
            <div className="bg-green-700 px-5 py-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-400 flex items-center justify-center">
                <span className="text-white text-lg">🤖</span>
              </div>
              <div>
                <div className="text-white font-bold text-sm">Hope AI</div>
                <div className="text-green-200 text-xs flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                  CAPS Tutor · Always Online
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="px-4 py-5 space-y-3 bg-gray-50 min-h-64">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={m.from === 'bot' ? 'chat-bubble-bot' : 'chat-bubble-user'}>
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input bar */}
            <div className="px-4 py-3 border-t border-gray-200 bg-white flex items-center gap-2">
              <input
                type="text"
                placeholder="Ask Hope AI anything..."
                className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm text-gray-700 outline-none"
                readOnly
              />
              <button className="w-9 h-9 bg-green-700 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
