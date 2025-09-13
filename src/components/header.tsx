'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

export default function Header() {
  const nav = [
    { name: 'Products', href: '#products' },
    { name: 'Projects', href: '#projects' },
    { name: 'Stream', href: '#stream' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* barra de acento arriba */}
      <div className="h-[2px] w-full bg-gradient-to-r from-primary via-primary/70 to-transparent" />

      {/* fondo full-bleed con contraste */}
      <div className="w-full bg-gradient-to-b from-black/90 to-black/70 backdrop-blur-xl border-b border-white/10">
        {/* wrapper sin container: padding responsivo, sin límites */}
        <div className="mx-0 flex h-16 items-center justify-between px-4 sm:px-6 lg:px-10">
          {/* brand pegado a la izquierda */}
          <Link
            href="/"
            className="font-headline text-[15px] sm:text-base uppercase tracking-[0.22em] font-extrabold text-white hover:text-primary transition-colors"
          >
            MATHIUS MOYANO
          </Link>

          {/* desktop nav pegado a la derecha */}
          <nav className="hidden md:flex items-center gap-6">
            {nav.map((i) => (
              <Link
                key={i.name}
                href={i.href}
                className="group relative uppercase text-xs font-semibold tracking-wide text-white/80 hover:text-white transition-colors"
              >
                {i.name}
                <span className="pointer-events-none absolute -bottom-2 left-0 h-[2px] w-0 bg-gradient-to-r from-primary to-primary/40 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <Button asChild className="ml-2 uppercase tracking-wider font-bold">
              <Link href="#contact">Hire Me</Link>
            </Button>
          </nav>

          {/* mobile */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="h-10 w-10" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-black/90 backdrop-blur-xl border-l border-white/10">
                <div className="mt-10 flex flex-col gap-6">
                  {nav.map((i) => (
                    <Link
                      key={i.name}
                      href={i.href}
                      className="uppercase font-semibold tracking-wide text-white/90 hover:text-primary transition-colors"
                    >
                      {i.name}
                    </Link>
                  ))}
                  <Button asChild className="mt-2 uppercase tracking-wider font-bold">
                    <Link href="#contact">Hire Me</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}