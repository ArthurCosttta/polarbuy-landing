"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

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
    <header className="container mx-auto px-6 py-4 flex justify-between items-center border-b border-primary/10 bg-background/95 backdrop-blur-sm">
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
              className={`font-medium transition-all duration-300 ${
                item.active
                  ? 'text-accent border-b-2 border-accent'
                  : 'text-primary/80 hover:text-accent hover:border-b-2 hover:border-accent/40'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Right side: Theme Toggle + CTA Button */}
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <a
          href={ctaHref}
          className="hidden md:block bg-accent text-background font-bold py-2 px-6 rounded-lg hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 shadow-accent"
        >
          {ctaLabel}
        </a>
      </div>
    </header>
  );
};

export default Header;
