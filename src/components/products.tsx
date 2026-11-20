'use client';

import Link from 'next/link';
import { ArrowUpRight, CalendarCheck2, Code2, Cpu } from 'lucide-react';
import { useLanguage, localized } from '@/context/language-context';

const capabilities = [
  { icon: Code2, title: 'Full-stack engineering', detail: 'Aplicaciones web de extremo a extremo: interfaces, APIs, persistencia y despliegues.', tags: '.NET · React · Angular · Next.js' },
  { icon: Cpu, title: 'AI & automation', detail: 'Integración de modelos y flujos para convertir tareas operativas en procesos automatizados.', tags: 'Python · LLMs · Orquestación' },
  { icon: CalendarCheck2, title: 'SaaS & product development', detail: 'Productos multicliente con autenticación, seguridad y experiencias orientadas al usuario.', tags: 'TypeScript · Firebase · PostgreSQL' },
];
export default function Products() {
  const { language } = useLanguage();
  const en = language === 'en';
  const english = [
    { title: 'Full-stack engineering', detail: 'End-to-end web applications: interfaces, APIs, persistence and deployment.' },
    { title: 'AI & automation', detail: 'Model integrations and workflows that turn operational tasks into automated processes.' },
    { title: 'SaaS & product development', detail: 'Multi-tenant products with authentication, security and user-centered experiences.' },
  ];
  return <section id="products" className="py-20 sm:py-28"><div className="container max-w-6xl">
    <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">{localized(language, 'Expertise', 'Especialidades')}</p><h2 className="font-headline text-4xl uppercase text-white md:text-6xl">{localized(language, 'What I build', 'Lo que puedo construir')}</h2></div><p className="max-w-md text-base leading-relaxed text-white/65">{localized(language, 'Product-minded software engineering: reliable solutions that solve real problems.', 'Ingeniería de software con mentalidad de producto: soluciones que funcionan y resuelven problemas concretos.')}</p></div>
    <div className="grid gap-5 md:grid-cols-3">{capabilities.map(({icon: Icon, title, detail, tags}, i) => <article key={title} className="flex flex-col rounded-2xl border border-white/10 bg-card p-7 transition hover:border-primary/40"><Icon size={30} className="mb-7 text-primary" aria-hidden /><h3 className="font-headline text-2xl uppercase text-white">{en ? english[i].title : title}</h3><p className="mt-4 flex-1 text-base leading-relaxed text-white/65">{en ? english[i].detail : detail}</p><p className="mt-6 border-t border-white/10 pt-5 text-sm text-white/55">{tags}</p></article>)}</div>
    <div className="mt-8 flex flex-wrap items-center gap-4 rounded-2xl border border-primary/30 bg-primary/10 px-6 py-5"><div className="flex-1"><p className="font-bold text-white">{localized(language, 'Looking for an engineer for your team?', '¿Buscas un ingeniero para tu equipo?')}</p><p className="mt-1 text-sm text-white/65">{localized(language, 'Let’s discuss remote opportunities and international collaboration.', 'Conversemos sobre oportunidades remotas y colaboración internacional.')}</p></div><Link href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-bold text-white hover:bg-primary/85">{localized(language, 'Contact me', 'Hablemos')} <ArrowUpRight size={16}/></Link></div>
  </div></section>;
}
