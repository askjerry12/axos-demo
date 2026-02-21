import Navbar from '../components/Navbar';

export default function AxosPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* FDIC Banner */}
      <div className="bg-gray-100 border-b border-gray-200 py-1 px-4">
        <p className="text-xs text-gray-600 max-w-7xl mx-auto">
          <span className="font-bold">FDIC</span> FDIC-Insured · Backed by the full faith and credit of the U.S. Government
        </p>
      </div>

      <Navbar
        site="axos"
        bgColor="bg-white"
        logoColor="text-blue-900"
        textColor="text-gray-600"
        ctaText="Log in"
        ctaColor="bg-blue-900"
      />

      {/* Sub Nav */}
      <div className="bg-blue-900 text-white">
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
        <section className="bg-blue-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-blue-800 font-semibold text-sm mb-2">Axos ONE®</p>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                  Your money deserves up to 4.21% APY.*
                </h1>
                <p className="text-gray-600 text-lg mb-8">
                  Reach your financial goals faster. Axos ONE® Checking + Savings helps you get there.
                </p>
                <button className="bg-blue-900 hover:bg-blue-950 text-white font-bold py-3 px-8 rounded text-sm transition-colors">
                  Get Axos ONE
                </button>
              </div>
              <div className="hidden lg:flex justify-center relative">
                <img src="/images/axos/hero.png" alt="Axos ONE" className="w-80 h-80 object-cover rounded-2xl" />
                <div className="absolute bottom-8 right-4 bg-white shadow-xl rounded-xl px-4 py-3 flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-sm">💰</span>
                  </div>
                  <div>
                    <p className="font-bold text-green-600">+$6,715</p>
                    <p className="text-xs text-gray-500">Early Pay Day Deposit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Awards Bar */}
        <section className="bg-blue-950 text-white py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            {[
              { award: 'Best Checking Account Overall', source: 'The Ascent' },
              { award: 'America\'s Best Online Bank', source: 'MyBankTracker' },
              { award: 'Best Online Bank for Savings & Checking', source: 'Millennial Money' },
            ].map((item) => (
              <div key={item.award}>
                <div className="flex justify-center gap-0.5 mb-1">
                  {[1,2,3,4,5].map((s) => <span key={s} className="text-yellow-400 text-xs">★</span>)}
                </div>
                <p className="font-bold text-sm">{item.award}</p>
                <p className="text-xs text-blue-200">{item.source}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-8 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4 text-center">
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
                <a key={item.name} href="#" className="flex flex-col items-center gap-2 py-3 hover:text-blue-700 transition-colors group">
                  <img src={item.icon} alt={item.name} className="w-8 h-8 object-contain" />
                  <span className="text-xs text-gray-600 group-hover:text-blue-700 leading-tight">{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Cards */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-200 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">Get up to 4.21% APY* with Axos ONE®</h3>
              <p className="text-gray-600 text-sm mb-4">Early paydays, high APYs on your checking and savings, and no monthly maintenance fees — all bundled into one.</p>
              <a href="#" className="text-blue-700 font-semibold text-sm hover:underline">Start Earning More →</a>
            </div>
            <div className="border border-gray-200 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏡</div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">Know When Mortgage Rates Drop</h3>
              <p className="text-gray-600 text-sm mb-4">Trying to time your mortgage? Sign up for Rate Watch. Get email alerts when rates drop. It&apos;s quick, easy, and free.</p>
              <a href="#" className="text-blue-700 font-semibold text-sm hover:underline">Check Your Rates Now →</a>
            </div>
          </div>
        </section>

        {/* One App Section */}
        <section className="py-16 bg-blue-950 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">One App for All Your Money Needs</h2>
                <p className="text-blue-200 mb-8">
                  Get the Axos app for smart business and personal finance. It&apos;s the sleeker, faster way to bank, borrow, invest, and plan.
                </p>
                <div className="flex gap-4">
                  <div className="bg-white/10 backdrop-blur border border-white/20 rounded-lg px-4 py-2 text-sm">📱 App Store</div>
                  <div className="bg-white/10 backdrop-blur border border-white/20 rounded-lg px-4 py-2 text-sm">▶ Google Play</div>
                </div>
              </div>
              <div className="hidden lg:flex justify-center">
                <img src="/images/axos/phone.png" alt="Axos app" className="w-48 h-80 object-contain" />
              </div>
            </div>
          </div>
        </section>

        {/* Always Protected */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Always Protected, Always Secure</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Advanced data protection. FDIC insurance. Digital security tools. We&apos;re committed to providing a secure online banking experience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                { title: 'FDIC Insured', desc: 'Up to $250K per depositor' },
                { title: '256-bit Encryption', desc: 'Bank-level security on all transactions' },
                { title: 'Fraud Protection', desc: '24/7 monitoring and alerts' },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-6">
                  <div className="text-3xl mb-3">🔒</div>
                  <h4 className="font-bold mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Start Banking Effortlessly */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Start Banking Effortlessly</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Invite Friends', desc: 'Help a friend bank smarter with no fees and high savings rates.' },
                { title: 'Automate Your Bills', desc: 'Never miss a bill payment again with Bill Pay.' },
                { title: 'Send Money to Friends', desc: 'Pay your friends directly from your account.' },
                { title: 'Account Alerts', desc: 'Get real-time updates on transactions and balances.' },
                { title: 'Biometric Authentication', desc: 'Fingerprints, faceprint, or passcode — your choice.' },
                { title: 'Debit Card Management', desc: 'Need a replacement card? Freeze your card instantly.' },
              ].map((item) => (
                <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600 mb-3">{item.desc}</p>
                  <a href="#" className="text-blue-700 font-semibold text-sm hover:underline">Learn More →</a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {[
              { title: 'Personal', items: ['Checking', 'Savings', 'CDs', 'Mortgages', 'Personal Loans'] },
              { title: 'Business', items: ['Small Business', 'Commercial', 'Lending'] },
              { title: 'Company', items: ['About', 'Careers', 'Press', 'Security'] },
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
            <p>© 2024 Axos Bank. All rights reserved. Member FDIC. Equal Housing Lender.</p>
            <p className="mt-2 text-xs text-blue-400">This is a demo site for Builder.io sales demonstrations. All content is mock/placeholder.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
