'use client';

import * as React from 'react';
import Image from 'next/image';
import { ArrowRight, BadgeCheck, Rocket, Sparkles } from 'lucide-react';
import { useMemo } from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

function trackCTA(project: string, cta: string) {
  // @ts-ignore
  window?.gtag?.('event', 'click_cta_project', { project, cta });
  if (typeof window !== 'undefined' && !window?.gtag) {
    // eslint-disable-next-line no-console
    console.log('[trackCTA:project]', { project, cta });
  }
}

export type ProjectCard = {
  title: string;
  metric: string;
  description: string;
  imageId: string;
  tags?: string[];
  impact?: string;
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
    tags: ['Branding', 'E-commerce', 'Story'],
    impact: 'Brand power • Funnel optimizado',
    inDevelopment: false,
  },
];

const getImage = (id: string) => PlaceHolderImages.find((img) => img.id === id);

export default function ProjectsShowcase() {
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
    <section id="projects" className="py-16 sm:py-24 bg-card">
      <div className="container">
        <div className="text-center mb-12">
          <div className="mx-auto mb-2 inline-flex items-center gap-1.5 rounded-full border border-primary/50 px-2.5 py-0.5 text-[10px] uppercase tracking-widest text-primary">
            <Sparkles className="h-3 w-3" />
            <span>Projects & Achievements</span>
          </div>
          <h2 className="font-headline text-3xl md:text-5xl uppercase text-white">
            De idea a impacto real
          </h2>
          <p className="text-sm text-muted-foreground mt-2 max-w-2xl mx-auto">
            Transformando conceptos en resultados medibles.
          </p>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => {
            const image = getImage(project.imageId);

            return (
              <article
                key={project.title}
                className="group relative isolate overflow-hidden border border-black/80 bg-black/70 shadow-2xl rounded-none transition duration-300 hover:-translate-y-[2px] hover:rotate-[-0.6deg] hover:shadow-[0_0_22px_rgba(239,68,68,0.18)]"
              >
                <div className="absolute left-0 top-0 z-20 flex items-center gap-1.5 p-2.5">
                  {project.isNew && (
                    <span className="inline-flex items-center gap-1 bg-yellow-400 px-1.5 py-0.5 text-[10px] font-bold uppercase text-black">
                      <Rocket className="h-3 w-3" /> Nuevo
                    </span>
                  )}
                  {project.inDevelopment && (
                    <span className="inline-flex items-center gap-1 bg-blue-400 px-1.5 py-0.5 text-[10px] font-bold uppercase text-black">
                      En desarrollo
                    </span>
                  )}
                </div>

                {image && (
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    width={800}
                    height={1000}
                    data-ai-hint={image.imageHint}
                    className="h-[340px] w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-110"
                    priority={false}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 z-10 p-5 text-white">
                  <header className="mb-1.5">
                    <h3 className="font-headline text-xl uppercase drop-shadow-sm leading-tight">
                      {project.title}
                    </h3>
                  </header>

                  <div className="mb-2.5 inline-flex items-center gap-1.5 text-primary font-extrabold text-lg">
                    <ArrowRight className="h-5 w-5" />
                    <span>{project.metric}</span>
                  </div>

                  <p className="text-xs text-white/90 opacity-80 transition-opacity duration-300 group-hover:opacity-100 max-w-xl">
                    {project.description}
                  </p>

                  {project.tags?.length ? (
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {project.tags.map((t) => (
                        <li
                          key={t}
                          className="rounded border border-white/20 bg-white/10 px-2 py-0.5 text-[10px] uppercase tracking-widest text-white/90"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {project.impact ? (
                    <p className="mt-2 text-[10px] text-white/70 flex items-center gap-1">
                      <BadgeCheck className="h-3 w-3" /> {project.impact}
                    </p>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-6 text-center text-[10px] text-white/60">
          *Las métricas mostradas representan resultados obtenidos en contextos reales y/o entornos controlados.
        </p>
      </div>
    </section>
  );
}
