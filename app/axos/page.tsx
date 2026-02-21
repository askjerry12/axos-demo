import Navbar from '../components/Navbar';

export default function AxosPage() {
  return (
    <div className="min-h-screen bg-white" style={{ color: '#333D46' }}>
      {/* FDIC Banner */}
      <div className="bg-[#f5f5f5] border-b border-gray-200 py-1 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <span className="font-bold text-[11px] bg-white border border-gray-300 px-1.5 py-0.5 rounded text-[#1E3860]">FDIC</span>
          <p className="text-[11px] text-[#333D46]">
            <span className="font-bold">FDIC</span> FDIC-Insured · Backed by the full faith and credit of the U.S. Government
          </p>
        </div>
      </div>

      <Navbar
        site="axos"
        bgColor="bg-white"
        logoColor="text-[#1E3860]"
        textColor="text-[#333D46]"
        ctaText="Log in"
        ctaColor="bg-[#1E3860]"
      />

      {/* Sub Nav */}
      <div className="bg-[#1E3860] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-8">
          {['Bank', 'Borrow', 'Invest', 'Plan'].map((item) => (
            <button key={item} className="py-3 text-sm font-medium hover:text-blue-200 flex items-center gap-1 transition-colors">
              {item}
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
          ))}
        </div>
      </div>

      <main>
        {/* Hero */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-[#1E3860] font-bold text-sm mb-2">Axos ONE<sup>®</sup></p>
                <h1 className="text-[40px] font-semibold leading-tight mb-4" style={{ color: '#1E3860' }}>
                  Your money deserves up to 4.21% APY.<sup>*</sup>
                </h1>
                <p className="text-lg mb-8" style={{ color: '#333D46', fontSize: '18px' }}>
                  Reach your financial goals faster. Axos ONE<sup>®</sup> Checking + Savings helps you get there.
                </p>
                <a href="#" className="inline-block bg-[#1E3860] hover:bg-[#162d4d] text-white font-bold py-3 px-8 rounded text-sm transition-colors">
                  Get Axos ONE
                </a>
              </div>
              <div className="hidden lg:flex justify-center relative">
                <div className="rounded-2xl overflow-hidden" style={{ width: '480px', height: '380px' }}>
                  <img src="/images/axos/hero.png" alt="Axos ONE" className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-12 left-4 bg-white shadow-xl rounded-xl px-4 py-3 flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#e8f5e9] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#2e7d32]" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z"/></svg>
                  </div>
                  <div>
                    <p className="font-bold text-[#2e7d32] text-sm">+$6,715</p>
                    <p className="text-[11px] text-[#666]">Early Pay Day Deposit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Awards Bar */}
        <section className="bg-[#0f1b2d] text-white py-5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            {[
              { award: 'Best Checking Account Overall', source: 'The Ascent' },
              { award: 'America\'s Best Online Bank', source: 'MyBankTracker' },
              { award: 'Best Online Bank for Savings & Checking', source: 'Millennial Money' },
            ].map((item, idx) => (
              <div key={item.award} className={`${idx < 2 ? 'md:border-r md:border-gray-600' : ''}`}>
                <div className="flex justify-center gap-0.5 mb-1">
                  {[1,2,3,4,5].map((s) => <span key={s} className="text-yellow-400 text-xs">★</span>)}
                </div>
                <p className="font-bold text-[14px]">{item.award}</p>
                <p className="text-[12px] text-[#ddd]">{item.source}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-6 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
              {[
                { name: 'Checking', icon: '/images/axos/icon-checking.svg' },
                { name: 'Savings', icon: '/images/axos/icon-savings.svg' },
                { name: 'Investing', icon: '/images/axos/icon-investing.png' },
                { name: 'Small Business Banking', icon: '/images/axos/icon-small-business.svg' },
                { name: 'Commercial Banking & Lending', icon: '/images/axos/icon-commercial.png' },
                { name: 'Personal Loans', icon: '/images/axos/icon-personal-loans.png' },
                { name: 'Auto Loans', icon: '/images/axos/icon-auto-loans.png' },
                { name: 'Mortgage', icon: '/images/axos/icon-mortgage.svg' },
              ].map((item) => (
                <a key={item.name} href="#" className="flex flex-col items-start gap-2 py-3 hover:text-[#1E3860] transition-colors group">
                  <img src={item.icon} alt={item.name} className="w-7 h-7 object-contain" />
                  <span className="text-[13px] text-[#333D46] group-hover:text-[#1E3860] leading-tight">{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Cards */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <a href="#" className="border border-gray-200 rounded-xl p-8 text-center hover:shadow-lg transition-shadow block">
              <img src="/images/axos/icon-savings.svg" alt="" className="w-10 h-10 mx-auto mb-4" />
              <h2 className="text-[22px] font-bold mb-2" style={{ color: '#1E3860' }}>Get up to 4.21% APY<sup>*</sup> with Axos ONE<sup>®</sup></h2>
              <p className="text-[14px] mb-4" style={{ color: '#333D46' }}>Early paydays,<sup>1</sup> high APYs on your checking and savings, and no monthly maintenance fees — all bundled into one.</p>
              <span className="text-[#1E3860] font-semibold text-[14px]">Start Earning More →</span>
            </a>
            <a href="#" className="border border-gray-200 rounded-xl p-8 text-center hover:shadow-lg transition-shadow block">
              <img src="/images/axos/icon-mortgage.svg" alt="" className="w-10 h-10 mx-auto mb-4" />
              <h2 className="text-[22px] font-bold mb-2" style={{ color: '#1E3860' }}>Know When Mortgage Rates Drop</h2>
              <p className="text-[14px] mb-4" style={{ color: '#333D46' }}>Trying to time your mortgage? Sign up for Rate Watch. Get email alerts when rates drop. It&apos;s quick, easy, and free.</p>
              <span className="text-[#1E3860] font-semibold text-[14px]">Check Your Rates Now →</span>
            </a>
          </div>
        </section>

        {/* One App Section */}
        <section className="py-16 bg-[#1E3860] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-[28px] font-bold mb-4">One App for All Your Money Needs</h2>
                <p className="text-gray-300 text-[16px] mb-8">
                  Get the Axos app for smart business and personal finance. It&apos;s the sleeker, faster way to bank, borrow, invest, and plan.
                </p>
                <div className="inline-flex items-center gap-3 bg-black/20 rounded-lg px-5 py-3">
                  <span className="text-sm font-medium">Scan to get the App!</span>
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-[40px] font-bold mb-4" style={{ color: '#1E3860' }}>Always Protected, Always Secure</h2>
            <p className="max-w-2xl mx-auto mb-8" style={{ color: '#333D46', fontSize: '16px' }}>
              Advanced data protection. FDIC insurance. Digital security tools. We&apos;re committed to providing a secure online banking experience for our customers.
            </p>
            <a href="#" className="inline-block bg-[#1E3860] hover:bg-[#162d4d] text-white font-bold py-3 px-8 rounded text-sm transition-colors">
              Find Out More
            </a>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <div className="flex justify-center gap-1 mb-4">
              {[1,2,3,4,5].map((s) => <span key={s} className="text-yellow-400 text-lg">★</span>)}
            </div>
            <p className="text-[16px] italic mb-4" style={{ color: '#333D46' }}>
              &ldquo;Excellent customer service, good mobile app experience (especially impressed with mobile deposit), good website experience, understandable services and setup.&rdquo;
            </p>
          </div>
        </section>

        {/* FDIC Insurance Banner */}
        <section className="bg-[#f0f6ff] py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-[28px] font-bold mb-3" style={{ color: '#1E3860' }}>Your deposits are protected with FDIC insurance up to $250K.</h2>
            <p className="text-[14px] mb-4" style={{ color: '#333D46' }}>Or up to $500K with a joint account. Need more coverage? Access up to $265MM with Axos Bank InsureGuard+ Savings through IntraFi® Network Deposits℠.</p>
            <a href="#" className="text-[#1E3860] font-semibold text-[14px]">Learn More →</a>
          </div>
        </section>

        {/* Start Banking Effortlessly */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-[40px] font-bold text-center mb-12" style={{ color: '#1E3860' }}>Start Banking Effortlessly</h2>
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
                  <p className="text-[14px] mb-3" style={{ color: '#333D46' }}>{item.desc}</p>
                  <a href="#" className="text-[#1E3860] font-semibold text-[14px] hover:underline">Learn More →</a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0f1b2d] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {[
              { title: 'Personal', items: ['Bank', 'Checking', 'Savings', 'Premier', 'Borrow', 'Mortgages', 'Personal Loans', 'Auto Loans'] },
              { title: 'Business', items: ['Small Business', 'Checking', 'Savings', 'Services', 'Commercial Lending', 'Commercial Banking'] },
              { title: 'Partners', items: ['Wholesale Lending', 'Dealer Services', 'Strategic Partnerships'] },
              { title: 'Support', items: ['Help Center', 'Contact', 'FAQ', 'Accessibility'] },
            ].map((col) => (
              <div key={col.title}>
                <h3 className="font-bold mb-3 text-sm">{col.title}</h3>
                <ul className="space-y-2">
                  {col.items.map((item) => (
                    <li key={item}><a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">{item}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-blue-800 pt-6 text-sm text-blue-300">
            <p>© 2026 Axos Financial, Inc., All Rights Reserved. © 2026 Axos Bank, All Rights Reserved.</p>
            <p className="mt-2 text-xs text-blue-400">This is a demo site for Builder.io sales demonstrations. All content is mock/placeholder.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
