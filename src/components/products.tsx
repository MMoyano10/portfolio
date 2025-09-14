'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { useMemo } from 'react';

// (12) Tracking simple: compatible con gtag o consola
function trackCTA(product: string, cta: string) {
  // Google Analytics si está disponible
  // @ts-ignore
  window?.gtag?.('event', 'click_cta', { product, cta });
  if (typeof window !== 'undefined' && !window?.gtag) {
    // Fallback en dev
    // eslint-disable-next-line no-console
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
    <section id="products" className="py-24 sm:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-headline text-5xl md:text-7xl uppercase text-white">
            Productos
          </h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            Soluciones diseñadas para transformar experiencias digitales.
          </p>
        </div>

        {/* (10) SEO JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {products.map((product) => (
            <Card
              key={product.name}
              className="bg-card border-2 border-black flex flex-col transition duration-300 hover:-translate-y-1 hover:rotate-[-1deg] hover:shadow-[0_0_30px_rgba(239,68,68,0.25)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:rotate-0 rounded-none"
            >
              <CardHeader className="p-8">
                <div className="mb-3 flex items-center gap-2">
                  <span className="inline-block text-[11px] font-bold tracking-wider uppercase text-white bg-black px-2 py-1">
                    {product.category}
                  </span>
                  {product.isNew && (
                    <span className="inline-block text-[11px] font-bold tracking-wider uppercase text-black bg-yellow-400 px-2 py-1">
                      Nuevo
                    </span>
                  )}
                  {product.inDevelopment && (
                    <span className="inline-block text-[11px] font-bold tracking-wider uppercase text-black bg-blue-400 px-2 py-1">
                      In Development
                    </span>
                  )}
                </div>

                <CardTitle
                  className="font-headline text-4xl uppercase text-red-600"
                  style={{ WebkitTextStroke: '1px black', color: 'red' }}
                >
                  {product.name}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-grow flex flex-col p-8 pt-0">
                <div className="flex-grow space-y-6">
                  <div>
                    <h3 className="font-bold text-accent uppercase text-sm mb-2 tracking-widest">
                      Problema
                    </h3>
                    <p className="text-muted-foreground text-sm">{product.problem}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-accent uppercase text-sm mb-2 tracking-widest">
                      Solución
                    </h3>
                    <p className="text-muted-foreground text-sm">{product.solution}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-accent uppercase text-sm mb-3 tracking-widest">
                      Características
                    </h3>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-muted-foreground text-sm">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-red-600" />
                          <span className="truncate">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button
                  asChild
                  className="w-full mt-8 font-bold uppercase tracking-wider rounded-none"
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
                  <p className="mt-2 text-[11px] text-white/70">{product.microcopy}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}