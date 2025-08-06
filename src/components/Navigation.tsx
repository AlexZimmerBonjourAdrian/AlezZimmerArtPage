'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Story' },
    { href: '/vis-dev', label: 'Vis Dev & Illustration' },
    { href: '/work-story', label: 'WORK (Story)' },
    { href: '/work-visdev', label: 'WORK (VISDEV)' },
    { href: '/sketches', label: 'Sketches & Photo' },
    { href: '/about', label: 'About' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Title */}
          <div className="flex flex-col">
            <h1 className="text-xl font-bold">ART OF ALEZ ZIMMER</h1>
            <p className="text-sm text-gray-600">story & visual development artist</p>
          </div>
          
          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${
                  pathname === item.href ? 'font-semibold' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-black">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
} 