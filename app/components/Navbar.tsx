import Link from 'next/link';

interface NavbarProps {
  site: 'creditone' | 'salliemae' | 'axos' | 'iterable';
  navItems?: { label: string; href: string }[];
  logoText?: string;
  logoColor?: string;
  bgColor?: string;
  textColor?: string;
  ctaText?: string;
  ctaColor?: string;
}

export default function Navbar({
  site,
  navItems = [],
  logoText = '',
  logoColor = 'text-white',
  bgColor = 'bg-gray-900',
  textColor = 'text-gray-300',
  ctaText = 'Sign In',
  ctaColor = 'bg-blue-600',
}: NavbarProps) {
  // Default navigation items based on site
  const defaultNavItems: Record<NavbarProps['site'], { label: string; href: string }[]> = {
    creditone: [
      { label: 'Accept Mail Offer', href: '#' },
      { label: 'See If You Pre-Qualify', href: '#' },
      { label: 'For What\'s Ahead', href: '#' },
      { label: 'Customer Service', href: '#' },
    ],
    salliemae: [
      { label: 'Student Loans', href: '#' },
      { label: 'Savings', href: '#' },
      { label: 'Resources and Tools', href: '#' },
      { label: 'Log in', href: '#' },
    ],
    axos: [
      { label: 'Personal', href: '#' },
      { label: 'Business', href: '#' },
      { label: 'Partners', href: '#' },
      { label: 'Support', href: '#' },
    ],
    iterable: [
      { label: 'Why Iterable', href: '#' },
      { label: 'Product', href: '#' },
      { label: 'Solutions', href: '#' },
      { label: 'Learning', href: '#' },
      { label: 'Support', href: '#' },
      { label: 'Login', href: '#' },
    ],
  };

  const defaultLogoText: Record<NavbarProps['site'], string> = {
    creditone: 'CreditOne Bank',
    salliemae: 'Sallie Mae',
    axos: 'Axos Bank',
    iterable: 'Iterable',
  };

  const items = navItems.length > 0 ? navItems : defaultNavItems[site];
  const logo = logoText || defaultLogoText[site];

  return (
    <nav className={`${bgColor} border-b border-gray-200`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href={`/${site}`} className={`${logoColor} text-xl font-bold`}>
                {logo}
              </Link>
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                {items.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`${textColor} hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium transition-colors`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {/* Search icon for Sallie Mae */}
              {site === 'salliemae' && (
                <button className="text-gray-700 hover:text-gray-900 px-3 py-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              )}
              
              <Link
                href="/"
                className={`${textColor} hover:opacity-80 px-3 py-2 text-sm font-medium`}
              >
                All Demos
              </Link>
              <button
                className={`${ctaColor} hover:opacity-90 text-white px-4 py-2 rounded-md text-sm font-medium ml-4 transition-opacity`}
              >
                {ctaText}
              </button>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            {/* Hamburger menu for CreditOne */}
            {site === 'creditone' && (
              <button className={`${textColor} hover:opacity-80 mr-4`}>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            )}
            <button className={`${textColor} hover:opacity-80`}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}