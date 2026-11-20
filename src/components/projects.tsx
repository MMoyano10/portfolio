'use client';

import Link from 'next/link';
import { ArrowUpRight, Boxes, CalendarDays, GitBranch, Workflow } from 'lucide-react';
import { useLanguage, localized } from '@/context/language-context';

const projects = [
  { name: 'SpotVue · Product pipeline', type: 'Ingeniería · IA aplicada', icon: Workflow, description: 'Flujos para importar catálogos, validar productos e imágenes y coordinar procesos de evaluación y generación asistidos por IA.', contribution: 'Implementé lógica del orquestador, servicios y repositorios, integraciones con Kiota y persistencia en PostgreSQL.', stack: ['.NET', 'React', 'PostgreSQL', 'Kiota', 'Microservicios'], link: 'https://www.spotvue.com/es/', label: 'Conocer SpotVue' },
  { name: 'ReservNow', type: 'Producto propio · SaaS', icon: CalendarDays, description: 'Plataforma de reservas para negocios con gestión de horarios, servicios, enlaces de reserva y arquitectura multi-tenant.', contribution: 'Diseño y desarrollo full-stack, autenticación, reglas de acceso, aprovisionamiento y pruebas automatizadas. Producto en evolución.', stack: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind'], link: 'https://www.reservnw.com', label: 'Explorar ReservNow' },
  { name: 'Ragvig · Búsqueda semántica', type: 'IA · Proyecto individual', icon: Boxes, description: 'Prototipo funcional de búsqueda semántica con recuperación de información asistida por modelos de lenguaje.', contribution: 'Implementé de manera individual embeddings vectoriales, FAISS y RAG, con evaluación frente a una búsqueda tradicional.', stack: ['Python', 'React', 'FAISS', 'RAG', 'LLMs'], link: '#contact', label: 'Consultar el proyecto' },
  { name: 'ReservNow · Seguridad', type: 'Arquitectura · Testing', icon: GitBranch, description: 'Pruebas de autenticación, aislamiento de entornos y controles de acceso para una aplicación multi-tenant.', contribution: 'Diseño de casos de prueba y revisión de reglas de Firestore, tokens Firebase y flujos de reservas.', stack: ['Node.js', 'Firebase Auth', 'Firestore', 'E2E'], link: 'https://github.com/MMoyano10', label: 'Ver GitHub' },
];

const englishProjects = [
  { name: 'SpotVue · Product pipeline', type: 'Engineering · Applied AI', description: 'Catalog import workflows, product and image validation, and orchestration of AI-assisted assessment and generation processes.', contribution: 'Implemented orchestration logic, services and repositories, Kiota integrations and PostgreSQL persistence.', label: 'Explore SpotVue' },
  { name: 'ReservNow', type: 'Independent product · SaaS', description: 'Appointment scheduling platform with business hours, services, booking links and multi-tenant architecture.', contribution: 'Full-stack development, authentication, access rules, provisioning and automated testing. Product in active development.', label: 'Explore ReservNow' },
  { name: 'Ragvig · Semantic search', type: 'AI · Independent project', description: 'Functional semantic search prototype that retrieves information with language model assistance.', contribution: 'Independently implemented vector embeddings, FAISS and RAG, comparing results with traditional search.', label: 'Ask about this project' },
  { name: 'ReservNow · Security', type: 'Architecture · Testing', description: 'Authentication tests, environment isolation and access controls for a multi-tenant application.', contribution: 'Designed test cases and reviewed Firestore rules, Firebase tokens and booking workflows.', label: 'View GitHub' },
];

const studyEn = [
  { challenge: 'Large image catalogs required reliable data validation and consistent decisions across services.', approach: 'Extended .NET orchestration, PostgreSQL repositories, image eligibility flags and REST integrations.', outcome: 'Supported functional demonstrations with two customers; conversion and performance metrics are not publicly verified.' },
  { challenge: 'Independent businesses need a clear booking experience and reliable separation of tenant data.', approach: 'Implemented merchant flows with Next.js, Firebase Authentication, Firestore rules and automated tests.', outcome: 'Functional product under ongoing development; AI assistant features are not presented as released.' },
  { challenge: 'Keyword search misses documents related by meaning rather than matching terms.', approach: 'Built vector embedding retrieval with FAISS and a RAG workflow, and compared it with traditional search.', outcome: 'Working research prototype; benchmark measurements are not publicly available.' },
  { challenge: 'Multi-tenant applications need strong authentication and access boundaries.', approach: 'Reviewed token validation, security rules, environment isolation and booking-related tests.', outcome: 'Testing and hardening in progress; not a claim of a completed external security audit.' },
];
const studyEs = [
  { challenge: 'Los catálogos con muchas imágenes requieren validación confiable y decisiones consistentes entre servicios.', approach: 'Amplié la orquestación .NET, repositorios PostgreSQL, indicadores de elegibilidad e integraciones REST.', outcome: 'Apoyé demostraciones funcionales con dos clientes; no se publican métricas de conversión no verificadas.' },
  { challenge: 'Los negocios necesitan reservas sencillas y separación segura de los datos de cada empresa.', approach: 'Implementé flujos comerciales con Next.js, Firebase Auth, Rules de Firestore y pruebas automatizadas.', outcome: 'Producto funcional en evolución; el asistente con IA todavía no se presenta como lanzado.' },
  { challenge: 'La búsqueda por palabras clave no encuentra siempre documentos relacionados por significado.', approach: 'Construí recuperación con embeddings, FAISS y RAG, comparándola con una búsqueda tradicional.', outcome: 'Prototipo funcional de investigación; no se publican benchmarks aún.' },
  { challenge: 'Las plataformas multiempresa necesitan límites sólidos de autenticación y acceso.', approach: 'Revisé validación de tokens, reglas de seguridad, aislamiento de entornos y pruebas de reservas.', outcome: 'Pruebas y mejoras en curso; no se declara una auditoría externa de seguridad terminada.' },
];

export default function Projects() {
  const { language } = useLanguage();
  return <section id="projects" className="bg-[#111215] py-20 sm:py-28"><div className="container max-w-6xl">
    <div className="mb-12 max-w-3xl"><p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">{localized(language, 'Selected work', 'Trabajo seleccionado')}</p><h2 className="font-headline text-4xl uppercase text-white md:text-6xl">{localized(language, 'Engineering behind the product', 'Ingeniería detrás de los productos')}</h2><p className="mt-4 text-base leading-relaxed text-white/65">{localized(language, 'Selected case studies showcasing my technical contributions, without unverified performance claims.', 'Casos concretos que muestran lo que construyo y mi contribución técnica, sin métricas sin verificar.')}</p></div>
    <div className="grid gap-5 md:grid-cols-2">{projects.map((p, i) => { const Icon = p.icon; const t = language === 'en' ? englishProjects[i] : p; return <article key={p.name} className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition hover:border-primary/60 sm:p-8">
      <div className="mb-7 flex items-start justify-between gap-3"><div className="rounded-xl border border-primary/30 bg-primary/10 p-3 text-primary"><Icon size={25} aria-hidden /></div><span className="text-right text-xs uppercase tracking-wider text-white/50">{t.type}</span></div>
      <h3 className="font-headline text-3xl uppercase text-white">{t.name}</h3><p className="mt-3 text-base leading-relaxed text-white/75">{t.description}</p><p className="mt-4 text-sm leading-relaxed text-white/60"><strong className="text-white">{localized(language, 'My contribution: ', 'Mi aporte: ')}</strong>{t.contribution}</p>
      <ul className="mt-6 flex flex-wrap gap-2">{p.stack.map((s) => <li key={s} className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/75">{s}</li>)}</ul>
      <details className="group/study mt-6 rounded-xl border border-white/10 bg-black/20 p-4 text-sm text-white/75"><summary className="cursor-pointer font-semibold text-white marker:text-primary">{localized(language, 'Read case study', 'Ver caso de estudio')}</summary><div className="mt-4 space-y-3 leading-relaxed">{(() => { const s = language === 'en' ? studyEn[i] : studyEs[i]; return <><p><strong className="text-white">{localized(language, 'Challenge: ', 'Desafío: ')}</strong>{s.challenge}</p><p><strong className="text-white">{localized(language, 'Approach: ', 'Enfoque: ')}</strong>{s.approach}</p><p><strong className="text-white">{localized(language, 'Evidence: ', 'Evidencia: ')}</strong>{s.outcome}</p></>; })()}</div></details>
      <Link href={p.link} target={p.link.startsWith('https') ? '_blank' : undefined} rel={p.link.startsWith('https') ? 'noopener noreferrer' : undefined} className="mt-8 inline-flex items-center gap-2 self-start text-sm font-semibold text-primary hover:text-white">{t.label}<ArrowUpRight size={16}/></Link>
    </article>; })}</div>
  </div></section>;
}
