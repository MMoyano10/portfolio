'use client';

import Link from 'next/link';
import { ArrowUpRight, Boxes, CalendarDays, GitBranch, Workflow } from 'lucide-react';
import { useLanguage, localized } from '@/context/language-context';

const projects = [
  { name: 'SpotVue · Product pipeline', type: 'Ingeniería · IA aplicada', icon: Workflow, description: 'Flujos para importar catálogos, validar productos e imágenes y coordinar procesos de evaluación y generación asistidos por IA.', contribution: 'Implementé lógica del orquestador, servicios y repositorios, integraciones con Kiota y persistencia en PostgreSQL.', stack: ['.NET', 'React', 'PostgreSQL', 'Kiota', 'Microservicios'], link: 'https://www.spotvue.com/es/', label: 'Conocer SpotVue' },
  { name: 'ReservNow', type: 'Producto propio · SaaS', icon: CalendarDays, description: 'Plataforma de reservas para negocios con gestión de horarios, servicios, enlaces de reserva y arquitectura multi-tenant.', contribution: 'Diseño y desarrollo full-stack, autenticación, reglas de acceso, aprovisionamiento y pruebas automatizadas. Producto en evolución.', stack: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind', 'Genkit'], link: 'https://reservenw.com', label: 'Explorar ReservNow' },
  { name: 'Ragvig · Búsqueda semántica', type: 'IA · Proyecto individual', icon: Boxes, description: 'Prototipo funcional de búsqueda semántica con recuperación de información asistida por modelos de lenguaje.', contribution: 'Implementé de manera individual embeddings vectoriales, FAISS y RAG, con evaluación frente a una búsqueda tradicional.', stack: ['Python', 'React', 'FAISS', 'RAG', 'LLMs'], link: '#contact', label: 'Consultar el proyecto' },
  { name: 'ReservNow · Seguridad', type: 'Arquitectura · Testing', icon: GitBranch, description: 'Pruebas de autenticación, aislamiento de entornos y controles de acceso para una aplicación multi-tenant.', contribution: 'Diseño de casos de prueba y revisión de reglas de Firestore, tokens Firebase y flujos de reservas.', stack: ['Node.js', 'Firebase Auth', 'Firestore', 'E2E'], link: 'https://github.com/MMoyano10', label: 'Ver GitHub' },
];

const englishProjects = [
  { name: 'SpotVue · Product pipeline', type: 'Engineering · Applied AI', description: 'Catalog import workflows, product and image validation, and orchestration of AI-assisted assessment and generation processes.', contribution: 'Implemented orchestration logic, services and repositories, Kiota integrations and PostgreSQL persistence.', label: 'Explore SpotVue' },
  { name: 'ReservNow', type: 'Independent product · SaaS', description: 'Appointment scheduling platform with business hours, services, booking links and multi-tenant architecture.', contribution: 'Full-stack development, authentication, access rules, provisioning and automated testing. Product in active development.', label: 'Explore ReservNow' },
  { name: 'Ragvig · Semantic search', type: 'AI · Independent project', description: 'Functional semantic search prototype that retrieves information with language model assistance.', contribution: 'Independently implemented vector embeddings, FAISS and RAG, comparing results with traditional search.', label: 'Ask about this project' },
  { name: 'ReservNow · Security', type: 'Architecture · Testing', description: 'Authentication tests, environment isolation and access controls for a multi-tenant application.', contribution: 'Designed test cases and reviewed Firestore rules, Firebase tokens and booking workflows.', label: 'View GitHub' },
];

export default function Projects() {
  const { language } = useLanguage();
  return <section id="projects" className="bg-[#111215] py-20 sm:py-28"><div className="container max-w-6xl">
    <div className="mb-12 max-w-3xl"><p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">{localized(language, 'Selected work', 'Trabajo seleccionado')}</p><h2 className="font-headline text-4xl uppercase text-white md:text-6xl">{localized(language, 'Engineering behind the product', 'Ingeniería detrás de los productos')}</h2><p className="mt-4 text-base leading-relaxed text-white/65">{localized(language, 'Selected case studies showcasing my technical contributions, without unverified performance claims.', 'Casos concretos que muestran lo que construyo y mi contribución técnica, sin métricas sin verificar.')}</p></div>
    <div className="grid gap-5 md:grid-cols-2">{projects.map((p, i) => { const Icon = p.icon; const t = language === 'en' ? englishProjects[i] : p; return <article key={p.name} className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition hover:border-primary/60 sm:p-8">
      <div className="mb-7 flex items-start justify-between gap-3"><div className="rounded-xl border border-primary/30 bg-primary/10 p-3 text-primary"><Icon size={25} aria-hidden /></div><span className="text-right text-xs uppercase tracking-wider text-white/50">{t.type}</span></div>
      <h3 className="font-headline text-3xl uppercase text-white">{t.name}</h3><p className="mt-3 text-base leading-relaxed text-white/75">{t.description}</p><p className="mt-4 text-sm leading-relaxed text-white/60"><strong className="text-white">{localized(language, 'My contribution: ', 'Mi aporte: ')}</strong>{t.contribution}</p>
      <ul className="mt-6 flex flex-wrap gap-2">{p.stack.map((s) => <li key={s} className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/75">{s}</li>)}</ul>
      <Link href={p.link} target={p.link.startsWith('https') ? '_blank' : undefined} rel={p.link.startsWith('https') ? 'noopener noreferrer' : undefined} className="mt-8 inline-flex items-center gap-2 self-start text-sm font-semibold text-primary hover:text-white">{t.label}<ArrowUpRight size={16}/></Link>
    </article>; })}</div>
  </div></section>;
}
