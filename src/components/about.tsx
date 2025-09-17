'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Award, BrainCircuit, Download, Rocket } from 'lucide-react';

type Exp = { empresa: string; rol: string; periodo?: string; bullets: string[] };
type Badge = { label: string };

const experiencia: Exp[] = [
  {
    empresa: 'WebCreek',
    rol: 'Software Engineer I (Full-Stack)',
    periodo: 'Ene 2023 – Actual',
    bullets: [
      'Diseño y desarrollo end-to-end (.NET, React, SQL Server).',
      'Optimización de sistemas y entregas bajo Scrum.',
      'Foco en calidad, mantenibilidad y negocio.',
    ],
  },
  {
    empresa: 'MTOP – Ministerio de Transporte y Obras Públicas',
    rol: 'Asesoría / Desarrollo',
    periodo: 'Dic 2024 – Abr 2025',
    bullets: [
      'Sistema modular con microservicios (Spring Boot, Java, Ionic, PostgreSQL).',
      'Migración de legado y transición a arquitectura distribuida.',
    ],
  },
  {
    empresa: 'SPOTVUE (por proyecto)',
    rol: 'Desarrollador',
    periodo: '2024 – 2025',
    bullets: [
      'Automatizaciones con Python y REST APIs.',
      'Sitio en Next.js centrado en eficiencia y UX.',
    ],
  },
  {
    empresa: 'Smartic Solution',
    rol: 'Software Developer Jr.',
    periodo: 'Ene 2021 – Dic 2023',
    bullets: [
      'Desarrollo colaborativo, pruebas y mejora continua.',
      'Resolución de problemas y soporte técnico.',
    ],
  },
];

const skills: Badge[] = [
  { label: 'React' }, { label: 'Next.js' }, { label: 'Angular' }, { label: 'Ionic' },
  { label: '.NET Core' }, { label: 'Java (Spring Boot)' }, { label: 'Node.js' }, { label: 'Python' },
  { label: 'SQL Server' }, { label: 'PostgreSQL' }, { label: 'REST APIs' }, { label: 'Git' },
  { label: 'Scrum' }, { label: 'Microservicios' },
];

const educacion = [
  'ESPE · Ing. en TI (Abr 2021 – presente)',
  'U.E. “Sebastián de Benalcázar” · Bachillerato en Ciencias (2014 – 2020)',
];

const certificaciones = [
  'Foundational C# with Microsoft – freeCodeCamp/Microsoft (Jun 2025)',
  'Scrum Fundamentals Certified (SFC) – ScrumStudy (Jun 2025)',
  'Azure AI Fundamentals – Microsoft (Sep 2023)',
  'React Basics – Meta (Abr 2024)',
  'Responsive Web Design – freeCodeCamp (Mar 2023)',
];

const logros = [
  '3.º lugar en actividades de investigación (Ago 2025).',
  'Ponente ARTIS 2024: “Safe Place”, app de control de ansiedad.',
];

const idiomas = ['Español (Nativo)', 'Inglés (Avanzado)'];

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

                <Image
                  src="/images/profile-hero.jpg"
                  alt="Mathius Moyano"
                  fill
                  priority
                  className="object-cover"
                  style={{ clipPath: 'url(#clip-torn)' }}
                />

                <div className="absolute left-0 right-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6">
                  <h1 className="font-headline text-xl sm:text-2xl uppercase text-white tracking-wide">
                    Mathius Moyano
                  </h1>
                  <p className="text-white/80 text-xs mt-1">
                    Full-stack Engineer · React / .NET / Java
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <Stat label="Años de experiencia" value="4+" />
                    <Stat label="Proyectos" value="10+" />
                    <Stat label="Certificaciones" value="7" />
                  </div>

                  <div className="mt-5">
                    <a
                      href="/docs/MathiusMoyano.pdf"
                      download="MathiusMoyano.pdf"
                      className="inline-flex items-center gap-2 bg-white text-black font-bold uppercase tracking-wider px-4 py-2 border-2 border-black hover:bg-primary hover:text-white transition rounded-none"
                    >
                      <Download className="h-4 w-4" />
                      Descargar CV
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-10">
            <header className="space-y-3">
              <h2 className="font-headline text-3xl md:text-4xl uppercase text-white">Sobre mí</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Ingeniero de software full-stack. Construyo productos escalables combinando ingeniería
                sólida y criterio de producto. Trabajo cómodo entre backend (.NET/Java) y frontend
                (React/Next.js), con bases relacionales y prácticas ágiles.
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
                <p className="text-xs text-white/80">{idiomas.join(' · ')}</p>
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