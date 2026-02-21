export default function AxosPage() {
  return (
    <div className="min-h-screen bg-white" style={{ color: '#333D46', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* FDIC Banner - black bg, white text */}
      <div className="bg-black text-white py-1.5 px-4">
        <div className="max-w-[1200px] mx-auto flex items-center gap-2">
          <span className="font-bold text-[12px] tracking-wide">FDIC</span>
          <span className="text-[12px] italic">FDIC-Insured · Backed by the full faith and credit of the U.S. Government</span>
        </div>
      </div>

      {/* Main Nav */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between h-[72px]">
          {/* Logo - always left */}
          <div className="flex items-center gap-10">
            <a href="/axos">
              <img src="/images/axos/logo.svg" alt="Axos" className="h-[30px] w-auto" />
            </a>
            <nav className="hidden md:flex items-center gap-8">
              {['Personal', 'Business', 'Partners'].map((item) => (
                <a key={item} href="#" className="text-[15px] hover:opacity-70 transition-opacity" style={{ color: '#1E3860' }}>
                  {item}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[15px] hidden sm:block" style={{ color: '#1E3860' }}>Support</a>
            <button
              className="text-white flex items-center gap-2 font-medium"
              style={{ backgroundColor: '#1E3860', borderRadius: '8px', padding: '11px 24px', fontSize: '16px' }}
            >
              Log in
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
          </div>
        </div>
      </header>

      {/* Sub Nav */}
      <div style={{ backgroundColor: '#1E3860' }} className="text-white">
        <div className="max-w-[1200px] mx-auto px-4 flex gap-6">
          {['Bank', 'Borrow', 'Invest', 'Plan'].map((item) => (
            <button key={item} className="py-3 text-[16px] font-bold hover:text-blue-200 flex items-center gap-1.5 transition-colors">
              {item}
              <svg className="w-3 h-3 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
          ))}
        </div>
      </div>

      <main>
        {/* Hero */}
        <section style={{ backgroundColor: '#ffffff' }}>
          <div className="max-w-[1200px] mx-auto px-4 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="font-bold text-[14px] mb-3" style={{ color: '#1E3860' }}>Axos ONE<sup>®</sup></p>
                <h1 className="font-semibold leading-[1.15] mb-5" style={{ color: '#1E3860', fontSize: '40px' }}>
                  Your money deserves up to 4.21% APY.<sup>*</sup>
                </h1>
                <p className="mb-8" style={{ color: '#333D46', fontSize: '18px', lineHeight: '1.6' }}>
                  Reach your financial goals faster. Axos ONE<sup>®</sup> Checking + Savings helps you get there.
                </p>
                <a
                  href="#"
                  className="inline-block text-white font-semibold transition-opacity hover:opacity-90"
                  style={{ backgroundColor: '#2F5B88', borderRadius: '8px', padding: '11px 90px', fontSize: '16px' }}
                >
                  Get Axos ONE
                </a>
              </div>
              <div className="hidden lg:flex justify-end relative">
                <div className="rounded-2xl overflow-hidden" style={{ width: '520px', height: '420px' }}>
                  <img src="/images/axos/hero-real.webp" alt="Axos ONE" className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-16 left-0 bg-white shadow-xl rounded-xl px-4 py-3 flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#e8f5e9] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#2e7d32]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                  </div>
                  <div>
                    <p className="font-bold text-[#2e7d32] text-[14px]">+$6,715</p>
                    <p className="text-[11px] text-[#666]">Early Pay Day Deposit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Awards Bar */}
        <section style={{ backgroundColor: '#0f1b2d' }} className="text-white py-5">
          <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 md:grid-cols-3 text-center">
            {[
              { award: 'Best Checking Account Overall', source: 'The Ascent' },
              { award: 'America\'s Best Online Bank', source: 'MyBankTracker' },
              { award: 'Best Online Bank for Savings & Checking', source: 'Millennial Money' },
            ].map((item, idx) => (
              <div key={item.award} className={`py-2 ${idx < 2 ? 'md:border-r md:border-gray-600' : ''}`}>
                <div className="flex justify-center gap-0.5 mb-1">
                  {[1,2,3,4,5].map((s) => <span key={s} className="text-yellow-400 text-[12px]">★</span>)}
                </div>
                <p className="font-bold text-[14px]">{item.award}</p>
                <p className="text-[12px] text-[#ddd]">{item.source}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-6 border-b border-gray-200">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="grid grid-cols-4 md:grid-cols-8 gap-0">
              {[
                { name: 'Checking', icon: '/images/axos/icon-checking.svg' },
                { name: 'Savings', icon: '/images/axos/icon-savings.svg' },
                { name: 'Investing', icon: '/images/axos/icon-investing.png' },
                { name: 'Small Business Banking', icon: '/images/axos/icon-small-business.svg' },
                { name: 'Commercial Banking & Lending', icon: '/images/axos/icon-commercial.png' },
                { name: 'Personal Loans', icon: '/images/axos/icon-personal-loans.png' },
                { name: 'Auto Loans', icon: '/images/axos/icon-auto-loans.png' },
                { name: 'Mortgage', icon: '/images/axos/icon-mortgage.svg' },
              ].map((item, idx) => (
                <a key={item.name} href="#" className={`flex flex-col items-start gap-2 py-4 px-4 hover:text-[#1E3860] transition-colors group ${idx < 7 ? 'border-r border-gray-200' : ''}`}>
                  <img src={item.icon} alt={item.name} className="w-6 h-6 object-contain" />
                  <span className="text-[13px] text-[#333D46] group-hover:text-[#1E3860] leading-tight">{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Cards */}
        <section className="py-14">
          <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
            <a href="#" className="border border-gray-200 rounded-2xl p-10 text-center hover:shadow-lg transition-shadow block">
              <img src="/images/axos/icon-savings.svg" alt="" className="w-12 h-12 mx-auto mb-5" />
              <h2 className="text-[24px] font-bold mb-3" style={{ color: '#1E3860' }}>Get up to 4.21% APY<sup>*</sup> with Axos ONE<sup>®</sup></h2>
              <p className="text-[14px] mb-5 leading-relaxed" style={{ color: '#333D46' }}>Early paydays,<sup>1</sup> high APYs on your checking and savings, and no monthly maintenance fees — all bundled into one.</p>
              <span className="text-[#1E3860] font-semibold text-[14px] underline">Start Earning More &gt;</span>
            </a>
            <a href="#" className="border border-gray-200 rounded-2xl p-10 text-center hover:shadow-lg transition-shadow block">
              <img src="/images/axos/icon-mortgage.svg" alt="" className="w-12 h-12 mx-auto mb-5" />
              <h2 className="text-[24px] font-bold mb-3" style={{ color: '#1E3860' }}>Know When Mortgage Rates Drop</h2>
              <p className="text-[14px] mb-5 leading-relaxed" style={{ color: '#333D46' }}>Trying to time your mortgage? Sign up for Rate Watch. Get email alerts when rates drop. It&apos;s quick, easy, and free.</p>
              <span className="text-[#1E3860] font-semibold text-[14px] underline">Check Your Rates Now &gt;</span>
            </a>
          </div>
        </section>

        {/* One App Section */}
        <section className="py-16" style={{ backgroundColor: '#1E3860' }}>
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-[28px] font-bold mb-4 text-white">One App for All Your Money Needs</h2>
                <p className="text-gray-300 text-[16px] mb-8 leading-relaxed">
                  Get the Axos app for smart business and personal finance. It&apos;s the sleeker, faster way to bank, borrow, invest, and plan.
                </p>
                <div className="inline-flex items-center gap-3 bg-black/20 rounded-lg px-5 py-3">
                  <span className="text-white text-sm font-medium">Scan to get the App!</span>
                </div>
              </div>
              <div className="hidden lg:flex justify-center">
                <img src="/images/axos/phone.png" alt="Axos app" className="w-64 h-auto object-contain" />
              </div>
            </div>
          </div>
        </section>

        {/* Always Protected */}
        <section className="py-16">
          <div className="max-w-[1200px] mx-auto px-4 text-center">
            <h2 className="font-bold mb-4" style={{ color: '#1E3860', fontSize: '40px' }}>Always Protected, Always Secure</h2>
            <p className="max-w-2xl mx-auto mb-8" style={{ color: '#333D46', fontSize: '16px', lineHeight: '1.6' }}>
              Advanced data protection. FDIC insurance. Digital security tools. We&apos;re committed to providing a secure online banking experience for our customers.
            </p>
            <a
              href="#"
              className="inline-block text-white font-semibold transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#2F5B88', borderRadius: '8px', padding: '11px 40px', fontSize: '16px' }}
            >
              Find Out More
            </a>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-10 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <div className="flex justify-center gap-1 mb-4">
              {[1,2,3,4,5].map((s) => <span key={s} className="text-yellow-400 text-lg">★</span>)}
            </div>
            <p className="text-[16px] italic leading-relaxed" style={{ color: '#333D46' }}>
              &ldquo;Excellent customer service, good mobile app experience (especially impressed with mobile deposit), good website experience, understandable services and setup.&rdquo;
            </p>
          </div>
        </section>

        {/* FDIC Insurance Banner */}
        <section style={{ backgroundColor: '#e8f0fe' }} className="py-10">
          <div className="max-w-[1200px] mx-auto px-4">
            <h2 className="text-[28px] font-bold mb-3" style={{ color: '#1E3860' }}>Your deposits are protected with FDIC insurance up to $250K.</h2>
            <p className="text-[14px] mb-4" style={{ color: '#333D46' }}>Or up to $500K with a joint account. Need more coverage? Access up to $265MM with Axos Bank InsureGuard+ Savings through IntraFi® Network Deposits℠.</p>
            <a href="#" className="font-semibold text-[14px]" style={{ color: '#1E3860' }}>Learn More &gt;</a>
          </div>
        </section>

        {/* Start Banking Effortlessly */}
        <section className="py-16">
          <div className="max-w-[1200px] mx-auto px-4">
            <h2 className="font-bold text-center mb-12" style={{ color: '#1E3860', fontSize: '40px' }}>Start Banking Effortlessly</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Invite Friends', desc: 'Help a friend bank smarter with little to no fees, high savings rates, and a simple banking app to fit their busy lifestyle.' },
                { title: 'Automate Your Bills', desc: 'Never miss a bill payment again. With Bill Pay, you can truly "set it and forget it" by making automatic payments.' },
                { title: 'Send Money to Friends', desc: 'Pay your friends directly from your account. All you need is their mobile number or email. It\'s fast, easy, and secure.' },
                { title: 'Account Alerts', desc: 'Want to stay up-to-date on your activity? We\'ve got you covered. Get real-time updates via text, push notifications, or email.' },
                { title: 'Biometric Authentication', desc: 'Fingerprints, voiceprints, and facial recognition = peace of mind. Boost your account security with biometric authentication.' },
                { title: 'Debit Card Management', desc: 'Need a replacement card? Traveling soon? Not a problem – take care of all your debit card needs online.' },
              ].map((item) => (
                <div key={item.title} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-[16px] mb-2" style={{ color: '#1E3860' }}>{item.title}</h4>
                  <p className="text-[14px] mb-3 leading-relaxed" style={{ color: '#333D46' }}>{item.desc}</p>
                  <a href="#" className="font-semibold text-[14px] underline" style={{ color: '#1E3860' }}>Learn More &gt;</a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#0f1b2d' }} className="text-white py-12">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {[
              { title: 'Personal', items: ['Bank', 'Checking', 'Savings', 'Premier', 'Borrow', 'Mortgages', 'Personal Loans', 'Auto Loans'] },
              { title: 'Business', items: ['Small Business', 'Checking', 'Savings', 'Services', 'Commercial Lending', 'Commercial Banking'] },
              { title: 'Partners', items: ['Wholesale Lending', 'Dealer Services', 'Strategic Partnerships'] },
              { title: 'Support', items: ['Help Center', 'Contact', 'FAQ', 'Accessibility'] },
            ].map((col) => (
              <div key={col.title}>
                <h3 className="font-bold mb-3 text-[14px]">{col.title}</h3>
                <ul className="space-y-2">
                  {col.items.map((item) => (
                    <li key={item}><a href="#" className="text-blue-200 hover:text-white text-[13px] transition-colors">{item}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-blue-800 pt-6 text-[13px] text-blue-300">
            <p>© 2026 Axos Financial, Inc., All Rights Reserved. © 2026 Axos Bank, All Rights Reserved.</p>
            <p className="mt-2 text-[11px] text-blue-400">This is a demo site for Builder.io sales demonstrations. All content is mock/placeholder.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
