import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/hooks/use-scroll';
import logo from '@/assets/activ8pay-logo.png';
import icon from '@/assets/activ8pay-icon.png';

const menuItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const scrolled = useScroll(50);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 mx-auto w-full max-w-5xl border-b border-transparent md:rounded-md md:border md:transition-all md:ease-out',
        {
          'bg-background/95 supports-[backdrop-filter]:bg-background/50 border-border backdrop-blur-lg md:top-4 md:max-w-4xl md:shadow':
            scrolled && !open,
          'bg-background/90': open,
        }
      )}
    >
      <nav
        className={cn(
          'flex h-16 w-full items-center justify-between px-4 md:h-14 md:transition-all md:ease-out md:grid md:grid-cols-3',
          {
            'md:px-2': scrolled,
          }
        )}
      >
        <a href="#home" className="flex items-center">
          <img 
            src={logo} 
            alt="Activ8Pay" 
            className="h-10 w-auto transition-all duration-300"
          />
        </a>

        <div className="hidden items-center gap-2 md:flex md:justify-center">
          {menuItems.map((item, i) => (
            <a
              key={i}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-2"
              href={item.href}
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex md:justify-end">
          <Button size="sm" asChild>
            <a href="#contact">Get Started</a>
          </Button>
        </div>

        <Button
          size="icon"
          variant="outline"
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          <MenuToggleIcon open={open} className="size-5" duration={300} />
        </Button>
      </nav>

      <div
        className={cn(
          'bg-background/90 fixed top-16 right-0 bottom-0 left-0 z-50 flex flex-col overflow-hidden border-y md:hidden',
          open ? 'block' : 'hidden'
        )}
      >
        <div
          data-slot={open ? 'open' : 'closed'}
          className={cn(
            'data-[slot=open]:animate-in data-[slot=open]:zoom-in-95 data-[slot=closed]:animate-out data-[slot=closed]:zoom-out-95 ease-out',
            'flex h-full w-full flex-col justify-between gap-y-2 p-4'
          )}
        >
          <div className="grid gap-y-2">
            {menuItems.map((item) => (
              <a
                key={item.name}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors block px-3 py-2"
                href={item.href}
                onClick={() => setOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <Button className="w-full" asChild>
              <a href="#contact" onClick={() => setOpen(false)}>Get Started</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
