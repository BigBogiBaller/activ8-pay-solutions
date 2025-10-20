import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/hooks/use-scroll';
import { NavBar } from '@/components/ui/tubelight-navbar';
import { ArrowRight } from 'lucide-react';
import logo from '@/assets/activ8pay-logo-white.png';

const menuItems = [
  { name: 'About', url: '#about' },
  { name: 'Solutions', url: '#services' },
  { name: 'Industries', url: '#industries' },
  { name: 'FAQ', url: '#faq' },
  { name: 'Contact', url: '#contact' },
];

export function Header({ className }: { className?: string }) {
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
      className="sticky top-0 z-50 mx-auto w-full md:transition-all md:ease-out"
    >
      <nav
        className={cn(
          'flex h-16 w-full items-center justify-between px-6 md:h-20 md:transition-all md:ease-out md:px-12',
          {
            'md:px-8': scrolled,
          }
        )}
      >
        {/* Logo */}
        <a href="#hero" className="flex items-center z-10">
          <img 
            src={logo} 
            alt="Activ8Pay" 
            className="h-12 md:h-14 w-auto transition-all duration-300"
          />
        </a>

        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
          <NavBar items={menuItems} />
        </div>

        {/* Book Demo Button - Desktop */}
        <div className="hidden md:flex">
          <Button size="lg" asChild className="gap-2 bg-[#B3CBB9] hover:bg-[#9fb8a6] text-[#0A1128]">
            <a href="#contact">
              Book a Demo
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <Button
          size="icon"
          variant="outline"
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          <MenuToggleIcon open={open} className="size-5" duration={300} />
        </Button>
      </nav>

      {/* Mobile Menu - Slide from Right */}
      <div
        className={cn(
          'bg-[#0A1128] backdrop-blur-lg fixed top-16 right-0 bottom-0 w-72 z-50 flex flex-col overflow-hidden border-l shadow-2xl md:hidden transform transition-transform duration-300 ease-in-out',
          open ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex h-full w-full flex-col justify-between gap-y-4 p-6">
          <div className="grid gap-y-2">
            {menuItems.map((item) => (
              <a
                key={item.name}
                className="text-base font-medium text-white/70 hover:text-white transition-colors block px-4 py-3 rounded-lg hover:bg-white/10"
                href={item.url}
                onClick={() => setOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <Button className="w-full gap-2 bg-[#B3CBB9] hover:bg-[#9fb8a6] text-[#0A1128]" size="lg" asChild>
              <a href="#contact" onClick={() => setOpen(false)}>
                Book a Demo
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-[#0A1128]/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </header>
  );
}
