"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  ctaLabel: string;
  ctaHref: string;
}

const Header: React.FC<HeaderProps> = ({ ctaLabel, ctaHref }) => {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Merchants', active: pathname === '/' },
    { href: '/drivers', label: 'Drivers', active: pathname === '/drivers' },
    { href: '/consumers', label: 'Consumers', active: pathname === '/consumers' },
  ];

  return (
    <header className="container mx-auto px-6 py-4 flex justify-between items-center bg-background">
      <div className="flex items-center gap-8">
        {/* Logo */}
        <Image
          src="/LogoPolarBuy.png" 
          alt="PolarBuy Logo" 
          width={200} 
          height={80} 
          className="h-16 w-auto"
          priority
        />
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-medium transition-colors duration-200 ${
                item.active
                  ? 'text-accent border-b-2 border-accent'
                  : 'text-primary hover:text-accent opacity-80'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* CTA Button */}
      <a
        href={ctaHref}
        className="hidden md:block bg-accent text-background font-bold py-2 px-6 rounded-lg hover:bg-accent/90 transition-all duration-300 transform hover:scale-105"
      >
        {ctaLabel}
      </a>
    </header>
  );
};

export default Header;
