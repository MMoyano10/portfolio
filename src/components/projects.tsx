'use client';

import * as React from 'react';
import Image from 'next/image';
import { ArrowRight, BadgeCheck, Rocket, Sparkles } from 'lucide-react';
import { useMemo } from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

// --- Simple tracking compatible con gtag o consola ---
function trackCTA(project: string, cta: string) {
  // @ts-ignore
  window?.gtag?.('event', 'click_cta_project', { project, cta });
  if (typeof window !== 'undefined' && !window?.gtag) {
    // eslint-disable-next-line no-console
    console.log('[trackCTA:project]', { project, cta });
  }
}

// Tipos inspirados en el componente Products
export type ProjectCard = {
  title: string;
  metric: string; // e.g. "+40% Signups"
  description: string;
  imageId: string; // id de PlaceHolderImages
  tags?: string[];
  impact?: string; // microcopy: "Impacto real • Caso de estudio"
  isNew?: boolean;
  inDevelopment?: boolean;
};

const projects: readonly ProjectCard[] = [
  {
    title: 'SpotVue',
    metric: '+40% Signups',
    description:
      'Revamped the user onboarding flow, resulting in a significant increase in user acquisition.',
    imageId: 'project-1',
    tags: ['SaaS', 'Onboarding', 'Growth'],
    impact: 'Crecimiento medible • Caso real',
  },
  {
    title: 'ReservNow',
    metric: '50ms API Response',
    description:
      'Optimized backend services to achieve near-instantaneous API responses for a seamless user experience.',
    imageId: 'project-2',
    tags: ['SaaS', 'OPS', 'DX'],
    impact: 'Rendimiento extremo • Latencia baja',
    isNew: true,
  },
  {
    title: 'Invencible',
    metric: '+25% Conversion',
    description:
      'Designed a high-converting e-commerce storefront with a focus on brand storytelling.',
    imageId: 'project-3',
    tags: ['Branding', 'E‑commerce', 'Story'],
    impact: 'Brand power • Funnel optimizado',
    inDevelopment: false,
  },
];

// Helper para tomar imagen por id
const getImage = (id: string) => PlaceHolderImages.find((img) => img.id === id);

export default function ProjectsShowcase() {
  // SEO JSON-LD (inspirado en Products)
  const jsonLd = useMemo(
    () =>
      ({
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        itemListElement: projects.map((p, i) => ({
          '@type': 'CreativeWork',
          position: i + 1,
          name: p.title,
          headline: p.metric,
          description: p.description,
          genre: p.tags?.join(', '),
        })),
      } as const),
    []
  );

  return (
    <section id="projects" className="py-24 sm:py-32 bg-card">
      <div className="container">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-primary/50 px-3 py-1 text-xs uppercase tracking-widest text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Projects & Achievements</span>
          </div>
          <h2 className="font-headline text-5xl md:text-7xl uppercase text-white">
            De idea a impacto real
          </h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            Transformando conceptos en resultados medibles.
          </p>
        </div>

        {/* SEO JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Grid responsivo con tarjetas creativas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const image = getImage(project.imageId);

            return (
              <article
                key={project.title}
                className="group relative isolate overflow-hidden border-2 border-black bg-black/70 shadow-2xl rounded-none transition duration-300 hover:-translate-y-1 hover:rotate-[-1.2deg] hover:shadow-[0_0_30px_rgba(239,68,68,0.25)]"
              >
                {/* Etiquetas superiores */}
                <div className="absolute left-0 top-0 z-20 flex items-center gap-2 p-3">
                  {project.isNew && (
                    <span className="inline-flex items-center gap-1 bg-yellow-400 px-2 py-1 text-[11px] font-bold uppercase text-black">
                      <Rocket className="h-3.5 w-3.5" /> Nuevo
                    </span>
                  )}
                  {project.inDevelopment && (
                    <span className="inline-flex items-center gap-1 bg-blue-400 px-2 py-1 text-[11px] font-bold uppercase text-black">
                      En desarrollo
                    </span>
                  )}
                </div>

                {/* Imagen */}
                {image && (
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    width={800}
                    height={1000}
                    data-ai-hint={image.imageHint}
                    className="h-[420px] w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-110"
                    priority={false}
                  />
                )}
                {/* Overlay para contraste */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                {/* Contenido */}
                <div className="absolute bottom-0 left-0 right-0 z-10 p-6 text-white">
                  <header className="mb-2">
                    <h3 className="font-headline text-3xl uppercase drop-shadow-sm">
                      {project.title}
                    </h3>
                  </header>

                  {/* Métrica destacada */}
                  <div className="mb-3 inline-flex items-center gap-2 text-primary font-extrabold text-2xl">
                    <ArrowRight className="h-6 w-6" />
                    <span>{project.metric}</span>
                  </div>

                  {/* Descripción (aparece con hover) */}
                  <p className="text-sm text-white/90 opacity-80 transition-opacity duration-300 group-hover:opacity-100 max-w-xl">
                    {project.description}
                  </p>

                  {/* Chips de tags */}
                  {project.tags?.length ? (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((t) => (
                        <li
                          key={t}
                          className="rounded border border-white/20 bg-white/10 px-2 py-1 text-[11px] uppercase tracking-widest text-white/90"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {/* Microcopy de impacto */}
                  {project.impact ? (
                    <p className="mt-3 text-[11px] text-white/70 flex items-center gap-1">
                      <BadgeCheck className="h-3.5 w-3.5" /> {project.impact}
                    </p>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>

        {/* Nota de accesibilidad / microcopy global */}
        <p className="mt-8 text-center text-xs text-white/60">
          *Las métricas mostradas representan resultados obtenidos en contextos reales y/o entornos controlados.
        </p>
      </div>
    </section>
  );
}