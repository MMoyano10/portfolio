'use client';

import Link from 'next/link';
import { ArrowUpRight, Github, Linkedin, MapPin } from 'lucide-react';
import { useLanguage, localized } from '@/context/language-context';

export default function Hero() {
  const { language } = useLanguage();
  return <section id="home" className="portfolio-hero relative isolate flex min-h-[min(780px,95svh)] items-center overflow-hidden py-24 sm:py-32">
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_72%_42%,rgba(234,49,65,0.16),transparent_47%),linear-gradient(145deg,#121216,#070709)]" />
    <div className="portfolio-grid absolute inset-0 -z-10 opacity-40" aria-hidden />
    <div className="container max-w-6xl">
      <div className="max-w-4xl">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/75"><span className="h-2 w-2 rounded-full bg-emerald-400"/>{localized(language, 'Open to remote opportunities', 'Abierto a oportunidades remotas')}<span className="mx-1 text-white/30">·</span><MapPin size={14}/>{localized(language, 'Quito, Ecuador', 'Quito, Ecuador')}</div>
        <p className="mb-4 text-base font-bold uppercase tracking-[0.24em] text-primary">{localized(language, 'Software engineer & product builder', 'Ingeniero de software y creador de productos')}</p>
        <h1 className="font-headline text-[clamp(3.8rem,10vw,8.5rem)] uppercase leading-[0.94] tracking-tight text-white">Mathius<br/><span className="text-primary">Moyano.</span></h1>
        <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white/75 sm:text-2xl">{localized(language, 'I build reliable full-stack systems and AI-powered products with .NET, React and thoughtful engineering.', 'Construyo sistemas full-stack confiables y productos con IA utilizando .NET, React e ingeniería orientada a resultados.')}</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link href="#projects" className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white transition hover:bg-red-500">{localized(language, 'View selected work', 'Ver proyectos')}<ArrowUpRight size={17}/></Link>
          <Link href="#contact" className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-white/30 bg-white/5 px-6 py-3 text-sm font-bold text-white transition hover:border-white/70">{localized(language, 'Get in touch', 'Contáctame')}</Link>
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-white/15 pt-6 text-sm text-white/60"><span>C# / .NET</span><span>React / TypeScript</span><span>PostgreSQL</span><span>AI / RAG</span><div className="flex items-center gap-4"><a aria-label="GitHub" href="https://github.com/MMoyano10" target="_blank" rel="noopener noreferrer" className="text-white/75 hover:text-white"><Github size={20}/></a><a aria-label="LinkedIn" href="https://www.linkedin.com/in/mathius-moyano/" target="_blank" rel="noopener noreferrer" className="text-white/75 hover:text-white"><Linkedin size={20}/></a></div></div>
      </div>
    </div>
  </section>;
}
