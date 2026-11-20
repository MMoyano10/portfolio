'use client';

import Link from 'next/link';
import { Menu, Radio } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useLanguage, localized } from '@/context/language-context';

export default function Header({ isLive = false, kickUrl }: { isLive?: boolean; kickUrl?: string }) {
  const { language, setLanguage } = useLanguage();
  const nav = [
    { name: localized(language, 'Expertise', 'Especialidades'), href: '#products' },
    { name: localized(language, 'Projects', 'Proyectos'), href: '#projects' },
    { name: localized(language, 'About', 'Sobre mí'), href: '#about' },
    { name: localized(language, 'Contact', 'Contacto'), href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="h-[2px] w-full bg-gradient-to-r from-primary via-primary/70 to-transparent" />

      <div className="w-full bg-gradient-to-b from-black/90 to-black/70 backdrop-blur-xl border-b border-white/10">
        <div className="mx-0 flex h-12 items-center justify-between px-2 sm:px-4 lg:px-6">
          <Link
            href="/"
            className="flex items-center gap-3 font-headline text-[11px] sm:text-xs uppercase tracking-[0.22em] font-extrabold text-white hover:text-primary transition-colors"
            aria-label="Ir al inicio"
          >
            <span>MATHIUS MOYANO</span>

            {isLive && (
              <Link
                href={kickUrl || '#stream'}
                className={cn(
                  'group relative flex items-center gap-1 rounded-full border border-white/20 px-1.5 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wide',
                  'bg-gradient-to-r from-primary/20 to-primary/10 text-white hover:from-primary/30 hover:to-primary/20 transition-colors'
                )}
                aria-label="Ver transmisión en vivo"
              >
                <span className="relative inline-flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                </span>
                EN VIVO
              </Link>
            )}
          </Link>

          <nav className="hidden md:flex items-center gap-4">
            {nav.map((i) => (
              <Link
                key={i.name}
                href={i.href}
                className="group relative uppercase text-[10px] font-semibold tracking-wide text-white/80 hover:text-white transition-colors"
              >
                {i.name}
                <span className="pointer-events-none absolute -bottom-2 left-0 h-[2px] w-0 bg-gradient-to-r from-primary to-primary/40 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <div className="flex items-center rounded-lg border border-white/30 p-1" role="group" aria-label="Language / Idioma">
              {(['en', 'es'] as const).map((lang) => <button key={lang} type="button" onClick={() => setLanguage(lang)} aria-pressed={language === lang} className={`rounded-md px-2.5 py-1 text-xs font-semibold ${language === lang ? 'bg-primary text-white' : 'text-white/70 hover:text-white'}`}>{lang.toUpperCase()}</button>)}
            </div>
            <Button
              asChild
              size="sm"
              className="ml-2 uppercase tracking-wider font-bold text-[11px] px-3 py-1.5"
            >
              <Link href="#contact">{localized(language, 'Get in touch', 'Contactar')}</Link>
            </Button>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <div className="flex rounded-lg border border-white/30 p-1" role="group" aria-label="Language / Idioma">{(['en', 'es'] as const).map((lang) => <button key={lang} type="button" onClick={() => setLanguage(lang)} aria-pressed={language === lang} className={`rounded px-2 py-1 text-xs font-semibold ${language === lang ? 'bg-primary text-white' : 'text-white/70'}`}>{lang.toUpperCase()}</button>)}</div>
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  aria-label="Abrir menú de navegación"
                >
                  <Menu className="h-[14px] w-[14px]" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-black/90 backdrop-blur-xl border-l border-white/10"
                aria-label="Menú lateral"
              >
                <div className="mt-7 flex flex-col gap-4">
                  {isLive && (
                    <Link
                      href={kickUrl || '#stream'}
                      className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-white/90 hover:text-primary transition-colors"
                    >
                      <Radio className="h-3.5 w-3.5" />
                      <span className="text-[10px] font-bold uppercase tracking-wide">En vivo ahora</span>
                    </Link>
                  )}

                  {nav.map((i) => (
                    <Link
                      key={i.name}
                      href={i.href}
                      className="uppercase font-semibold tracking-wide text-xs text-white/90 hover:text-primary transition-colors"
                    >
                      {i.name}
                    </Link>
                  ))}
                  <Button asChild size="sm" className="mt-2 uppercase tracking-wider font-bold text-[11px] px-3 py-1.5">
                    <Link href="#contact">{localized(language, 'Get in touch', 'Contactar')}</Link>
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
