'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { useMemo } from 'react';

function trackCTA(product: string, cta: string) {
  window?.gtag?.('event', 'click_cta', { product, cta });
  if (typeof window !== 'undefined' && !window?.gtag) {
    console.log('[trackCTA]', { product, cta });
  }
}

type Product = {
  name: string;
  category: 'SaaS' | '3D & VR' | 'IA' | 'Branding';
  problem: string;
  solution: string;
  features: string[];
  cta: { text: string; href: string };
  microcopy?: string;
  isNew?: boolean;
  inDevelopment?: boolean;
};

const products: Product[] = [
  {
    name: 'ReservNow',
    category: 'SaaS',
    problem:
      'Los negocios pierden clientes por sistemas de reservas complicados y poco intuitivos.',
    solution:
      'Una plataforma simple y efectiva para agendar citas online, con recordatorios automáticos y disponibilidad personalizada.',
    features: [
      'Reserva en un clic',
      'Recordatorios automáticos',
      'Integración con Stripe',
      'Disponibilidad personalizable',
    ],
    cta: { text: 'Agendar demo', href: '#reservnow-demo' },
    microcopy: 'Demo guiada • Sin tarjeta requerida',
  },
  {
    name: 'SpotVue',
    category: '3D & VR',
    problem:
      'Las imágenes estáticas no transmiten la experiencia real de un mueble o producto en línea.',
    solution:
      'Visualización inmersiva de muebles y productos en 360° y realidad aumentada/virtual, mejorando la confianza y la conversión.',
    features: [
      'Modelos 3D interactivos',
      'Visor AR/VR integrado',
      'Integración sencilla en catálogos online',
      'Experiencia inmersiva que impulsa ventas',
    ],
    cta: { text: 'Ver en 360°', href: 'https://www.spotvue.com/es/' },
    microcopy: 'Experiencia interactiva • Compatible con VR',
  },
  {
    name: 'Recommendation Engine',
    category: 'IA',
    problem:
      'Los clientes se sienten abrumados con catálogos extensos y no encuentran lo que buscan.',
    solution:
      'Un motor de recomendaciones inteligente que sugiere productos personalizados en tiempo real, aumentando la satisfacción y las ventas.',
    features: [
      'Recomendaciones basadas en IA',
      'Análisis de comportamiento de usuario',
      'Integración en e-commerce',
      'Mejora la conversión y el ticket promedio',
    ],
    cta: { text: 'Probar IA ahora', href: '#reco-engine' },
    microcopy: 'Aumento de conversión • Integración rápida',
    inDevelopment: true,
  },
  {
    name: 'Invencible',
    category: 'Branding',
    problem:
      'Las nuevas marcas online luchan por destacar y generar confianza en sus primeros pasos.',
    solution:
      'Un lanzamiento integral de branding y e-commerce: identidad visual, desarrollo de tienda y automatización de marketing.',
    features: [
      'Estrategia de marca',
      'Logo e identidad visual',
      'Desarrollo en Shopify',
      'Automatización de marketing',
    ],
    cta: { text: 'Solicitar propuesta', href: '#invencible-propuesta' },
    microcopy: 'De idea a tienda online en semanas',
  },
];

export default function Products() {
  const jsonLd = useMemo(
    () =>
      ({
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        itemListElement: products.map((p, i) => ({
          '@type': 'Product',
          position: i + 1,
          name: p.name,
          category: p.category,
          brand: 'Mathius Moyano',
          description: p.solution,
        })),
      } as const),
    []
  );

  const resolveVariant = (name: string) => {
    if (name === 'Invencible') return 'ghost' as const;
    if (name === 'SpotVue') return 'outline' as const;
    return 'default' as const;
  };

  return (
    <section id="products" className="py-16 sm:py-24">
      <div className="container max-w-[1080px] mx-auto">
        <div className="text-center mb-12">          <h2 className="font-headline text-3xl md:text-5xl uppercase text-white">Productos</h2>
          <p className="text-sm text-muted-foreground mt-2 max-w-2xl mx-auto">
            Soluciones diseñadas para transformar experiencias digitales.
          </p>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-10">
          {products.map((product) => (
            <Card
              key={product.name}
              className="bg-card border border-black/80 flex flex-col transition duration-300 hover:-translate-y-[2px] hover:rotate-[-0.5deg] hover:shadow-[0_0_22px_rgba(239,68,68,0.18)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:rotate-0 rounded-none"
            >
              <CardHeader className="p-5">
                <div className="mb-2.5 flex items-center gap-2">
                  <span className="inline-block text-[10px] font-bold tracking-wider uppercase text-white bg-black px-1.5 py-0.5">
                    {product.category}
                  </span>
                  {product.isNew && (
                    <span className="inline-block text-[10px] font-bold tracking-wider uppercase text-black bg-yellow-400 px-1.5 py-0.5">
                      Nuevo
                    </span>
                  )}
                  {product.inDevelopment && (
                    <span className="inline-block text-[10px] font-bold tracking-wider uppercase text-black bg-blue-400 px-1.5 py-0.5">
                      In Development
                    </span>
                  )}
                </div>

                <CardTitle
                  className="font-headline text-2xl md:text-3xl uppercase text-red-600 leading-tight"
                  style={{ WebkitTextStroke: '1px black', color: 'red' }}
                >
                  {product.name}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-grow flex flex-col p-5 pt-0">
                <div className="flex-grow space-y-4">
                  <div>
                    <h3 className="font-bold text-accent uppercase text-[10px] mb-1.5 tracking-widest">
                      Problema
                    </h3>
                    <p className="text-muted-foreground text-xs">{product.problem}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-accent uppercase text-[10px] mb-1.5 tracking-widest">
                      Solución
                    </h3>
                    <p className="text-muted-foreground text-xs">{product.solution}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-accent uppercase text-[10px] mb-2 tracking-widest">
                      Características
                    </h3>
                    <ul className="grid grid-cols-2 gap-x-3 gap-y-1 text-muted-foreground text-xs">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-1.5">
                          <CheckCircle className="h-3 w-3 text-red-600" />
                          <span className="truncate">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button
                  asChild
                  size="sm"
                  className="w-full mt-5 font-bold uppercase tracking-wider rounded-none text-xs py-2.5"
                  variant={resolveVariant(product.name)}
                >
                  <Link
                    href={product.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`CTA de ${product.name}: ${product.cta.text}`}
                    onClick={() => trackCTA(product.name, product.cta.text)}
                  >
                    {product.cta.text}
                  </Link>
                </Button>

                {product.microcopy && (
                  <p className="mt-2 text-[10px] text-white/70">{product.microcopy}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}