import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import logo from '@/assets/activ8pay-logo.png';

const menuItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

export function Header() {
  const [menuState, setMenuState] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="px-2 py-2">
        <div
          className={cn(
            'mx-auto max-w-6xl px-6 transition-all duration-300 lg:px-12',
            isScrolled && 'bg-background/80 backdrop-blur-lg rounded-2xl border shadow-lg lg:px-5'
          )}
        >
          <div className="relative flex items-center justify-between py-3 lg:py-4">
            <a href="#home" className="flex items-center">
              <img src={logo} alt="Activ8Pay" className="h-14 md:h-16" />
            </a>

            <button
              onClick={() => setMenuState(!menuState)}
              aria-label={menuState ? 'Close Menu' : 'Open Menu'}
              className="lg:hidden p-2"
            >
              {menuState ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

            <ul className="hidden lg:flex gap-8 text-sm">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="hidden lg:flex gap-3">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
              <Button size="sm">Get Started</Button>
            </div>
          </div>

          {menuState && (
            <div className="lg:hidden pb-6">
              <ul className="space-y-4 mb-6">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      onClick={() => setMenuState(false)}
                      className="block text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-3">
                <Button variant="outline" className="w-full">
                  Sign In
                </Button>
                <Button className="w-full">Get Started</Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
