'use client';

import { Award, BrainCircuit, Download, Rocket } from 'lucide-react';

type Exp = { empresa: string; rol: string; periodo?: string; bullets: string[] };
type Badge = { label: string };

const experiencia: Exp[] = [
  {
    empresa: 'WebCreek',
    rol: 'Software Developer I · Cliente 84 Lumber',
    periodo: 'Abr 2024 – Jul 2025',
    bullets: [
      'Mantenimiento y mejora de 5 microservicios para órdenes de compra usando C#, Entity Framework y SQL Server.',
      'Diagnóstico de errores, hotfixes aprobados, índices SQL y mejora de interfaces React.',
      'Pull requests, validaciones de versiones y apoyo a la planificación de migración de infraestructura.',
    ],
  },
  {
    empresa: 'SpotVue',
    rol: 'Software Engineer · Full-stack',
    periodo: 'Ago 2024 – Actualidad',
    bullets: [
      'Contribución a 8 microservicios .NET, modelos, repositorios, APIs REST y estructuras PostgreSQL.',
      'Lógica de orquestación para procesar imágenes con IA, jobs de evaluación y reglas de exclusión manual.',
      'UI React/TypeScript, GitHub Actions, validación con SQL y Postman y demos con dos clientes.',
    ],
  },
  {
    empresa: 'Smartic Solution',
    rol: 'Desarrollador Junior · Tiempo parcial',
    periodo: 'Ene 2022 – Abr 2024',
    bullets: ['Colaboración en aplicaciones web y móviles usando Angular, React, Ionic y .NET.', 'Implementación de interfaces, backend e integraciones con APIs.'],
  },
];

const skills: Badge[] = [
  { label: 'React' }, { label: 'Next.js' }, { label: 'Angular' }, { label: 'Ionic' },
  { label: '.NET Core' }, { label: 'Java (Spring Boot)' }, { label: 'Node.js' }, { label: 'Python' },
  { label: 'SQL Server' }, { label: 'PostgreSQL' }, { label: 'REST APIs' }, { label: 'Git' },
  { label: 'Scrum' }, { label: 'Microservicios' }, { label: 'Docker' },
  { label: 'Firebase' }, { label: 'GitHub Actions' }, { label: 'TypeScript' }, { label: 'IA / LLMs' },
  { label: 'RAG' }, { label: 'FAISS' }, { label: 'Entity Framework Core' },
];

const educacion = [
  'ESPE · Ingeniería en Tecnologías de la Información (2021 – Ago 2026)',
  'U.E. “Sebastián de Benalcázar” · Bachillerato en Ciencias (2014 – 2020)',
];

const certificaciones = [
  'Foundational C# with Microsoft – freeCodeCamp/Microsoft (Jun 2025)',
  'Scrum Fundamentals Certified (SFC) – ScrumStudy (Jun 2025)',
  'Azure AI Fundamentals – Microsoft (Sep 2023)',
  'React Basics – Meta (Abr 2024)',
  'Responsive Web Design – freeCodeCamp (Mar 2023)',
  'IBM SkillsBuild · Getting Started with Generative AI (2026)',
  'McKinsey Forward (2026)',
  'AWS Academy · Cloud Foundations',
];

const logros = [
  '3.º lugar en actividades de investigación (Ago 2025).',
  'Ponente ARTIS 2024: “Safe Place”, app de control de ansiedad.',
];

const idiomas = ['Español (Nativo)', 'Inglés (B2)'];

export default function About() {
  return (
    <section id="about" className="relative bg-card">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          background:
            'radial-gradient(1200px 600px at 0% 0%, rgba(255,255,255,0.10) 0%, transparent 60%), radial-gradient(900px 500px at 100% 100%, rgba(239,68,68,0.12) 0%, transparent 55%)',
        }}
      />

      <div className="container">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 py-16 sm:py-24">
          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <div className="relative h-[60vh] min-h-[520px] w-full border-2 border-black shadow-2xl overflow-hidden">
                <svg className="absolute inset-0 h-0 w-0">
                  <defs>
                    <clipPath id="clip-torn" clipPathUnits="objectBoundingBox">
                      <path d="M0.00,0.05 C0.10,0.00,0.28,0.10,0.35,0.08 C0.42,0.06,0.50,-0.01,0.62,0.05 C0.75,0.11,0.76,0.22,0.87,0.25 C0.98,0.28,1.02,0.35,1.00,0.48 C0.98,0.61,0.90,0.66,0.82,0.71 C0.74,0.76,0.66,0.84,0.52,0.86 C0.38,0.88,0.28,0.83,0.18,0.86 C0.08,0.89,-0.01,0.98,0.02,1.00 L-0.02,1.00 L-0.02,-0.02 L0.00,-0.02 Z" />
                    </clipPath>
                  </defs>
                </svg>

                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_20%,rgba(239,68,68,0.33),transparent_50%),linear-gradient(145deg,#20232b,#09090b)]" aria-hidden="true" />
                <div className="absolute left-6 top-12 right-6 font-headline text-[clamp(3.5rem,8vw,7rem)] leading-[0.9] uppercase tracking-tight text-white/90" aria-hidden="true">BUILD.<br/>SHIP.<br/><span className="text-primary">EVOLVE.</span></div>

                <div className="absolute left-0 right-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6">
                  <h1 className="font-headline text-xl sm:text-2xl uppercase text-white tracking-wide">
                    Mathius Moyano
                  </h1>
                  <p className="text-white/80 text-xs mt-1">
                    Full-stack Software Engineer · .NET / React / AI
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <Stat label="Experiencia profesional desde" value="2022" />
                    <Stat label="Formación" value="ESPE" />
                  </div>

                  <a href="/docs/MathiusMoyano.pdf" download="Mathius_Moyano_CV.pdf" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-black transition hover:bg-primary hover:text-white"><Download size={17}/> Descargar CV actualizado</a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-10">
            <header className="space-y-3">
              <h2 className="font-headline text-3xl md:text-4xl uppercase text-white">Sobre mí</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Soy ingeniero en Tecnologías de la Información graduado de la ESPE. He desarrollado
                microservicios .NET y aplicaciones React para productos tecnológicos y sistemas empresariales,
                incluido el cliente estadounidense 84 Lumber. Me especializo en backend, arquitectura SaaS
                e integración de inteligencia artificial, desde pipelines de imágenes hasta búsqueda semántica con RAG.
              </p>
            </header>

            <section className="space-y-5">
              <h3 className="font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Rocket className="h-6 w-6 text-primary" /> Experiencia
              </h3>
              <ul className="space-y-4">
                {experiencia.map((exp) => (
                  <li key={exp.empresa} className="border border-border/40 bg-black/30 p-4">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <p className="text-white font-semibold">{exp.rol}</p>
                      {exp.periodo && <span className="text-xs text-white/60">{exp.periodo}</span>}
                    </div>
                    <p className="text-white/80">{exp.empresa}</p>
                    <ul className="mt-2 list-disc pl-5 text-xs text-white/80 space-y-1">
                      {exp.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-2">
              <h3 className="font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <BrainCircuit className="h-6 w-6 text-primary" /> Filosofía
              </h3>
              <p className="text-muted-foreground">
                El código es un oficio: precisión técnica + creatividad. Diseño sistemas modulares
                con foco en calidad, mantenibilidad y resultados medibles.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="font-bold text-white uppercase tracking-wider">Habilidades técnicas</h3>
              <ul className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <li
                    key={s.label}
                    className="rounded border border-white/15 bg-white/10 px-2 py-1 text-[11px] uppercase tracking-widest text-white/90"
                  >
                    {s.label}
                  </li>
                ))}
              </ul>
            </section>

            <section className="grid md:grid-cols-2 gap-6">
              <Card title="Formación">
                <ul className="list-disc pl-5 text-xs text-white/80 space-y-1">
                  {educacion.map((e) => (
                    <li key={e}>{e}</li>
                  ))}
                </ul>
              </Card>
              <Card title="Certificaciones" icon={<Award className="h-5 w-5 text-primary" />}>
                <ul className="list-disc pl-5 text-xs text-white/80 space-y-1">
                  {certificaciones.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </Card>
            </section>

            <section className="grid md:grid-cols-2 gap-6">
              <Card title="Logros">
                <ul className="list-disc pl-5 text-xs text-white/80 space-y-1">
                  {logros.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
              </Card>
              <Card title="Idiomas">
                <p className="text-sm text-white/80">{idiomas.join(' · ')}</p>
              </Card>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white/10 text-white px-2 py-1 text-xs uppercase tracking-widest border border-white/20">
      <span className="font-bold mr-1">{value}</span>
      {label}
    </div>
  );
}

function Card({
  title,
  children,
  icon,
}: {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <div className="border border-border/40 bg-black/30 p-5">
      <h4 className="font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
        {icon} {title}
      </h4>
      {children}
    </div>
  );
}
