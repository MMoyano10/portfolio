'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useLanguage, localized } from '@/context/language-context';

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const nav = [
    { href: '#products', text: localized(language, 'Expertise', 'Especialidades') },
    { href: '#projects', text: localized(language, 'Projects', 'Proyectos') },
    { href: '#about', text: localized(language, 'About', 'Sobre mí') },
    { href: '#contact', text: localized(language, 'Contact', 'Contacto') },
  ];
  const switcher = <div className="flex rounded-lg border border-white/25 p-1" role="group" aria-label="Language / Idioma">{(['en', 'es'] as const).map((lang) => <button key={lang} type="button" aria-label={lang === 'en' ? 'English' : 'Español'} aria-pressed={lang === language} onClick={() => setLanguage(lang)} className={`rounded-md px-3 py-1.5 text-sm font-semibold transition ${lang === language ? 'bg-primary text-white' : 'text-white/70 hover:text-white'}`}>{lang.toUpperCase()}</button>)}</div>;

  return <header className="sticky top-0 z-50 border-b border-white/10 bg-[#09090c]/90 backdrop-blur-xl"><div className="container flex h-16 max-w-6xl items-center justify-between gap-4">
    <Link href="#home" className="font-headline text-xl uppercase tracking-[.09em] text-white">Mathius<span className="text-primary">.</span></Link>
    <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">{nav.map((item) => <Link key={item.href} href={item.href} className="text-sm font-medium text-white/70 transition hover:text-white">{item.text}</Link>)}{switcher}<Link href="#contact" className="rounded-lg border border-primary/50 px-4 py-2 text-sm font-bold text-white hover:bg-primary/20">{localized(language, 'Hire me', 'Contáctame')}</Link></nav>
    <div className="flex items-center gap-2 md:hidden">{switcher}<Sheet><SheetTrigger aria-label={localized(language, 'Open menu', 'Abrir menú')} className="rounded-lg border border-white/20 p-2 text-white"><Menu size={22}/></SheetTrigger><SheetContent side="right" className="border-white/10 bg-[#111215]"><nav className="mt-12 flex flex-col gap-6" aria-label="Mobile navigation">{nav.map((item) => <Link key={item.href} href={item.href} className="text-lg text-white">{item.text}</Link>)}</nav></SheetContent></Sheet></div>
  </div></header>;
}
