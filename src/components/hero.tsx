'use client';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import backgroundImage from '../../source/images/background.png';

export default function Hero() {
  const [isLive, setIsLive] = useState(false);
  const [loadingLive, setLoadingLive] = useState<boolean>(true);
  const [errorLive, setErrorLive] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);


  async function checkLiveOnce(signal?: AbortSignal) {
  try {
  setErrorLive(null);
  const username = process.env.NEXT_PUBLIC_KICK_USERNAME || '';
  const qs = username ? `?user=${encodeURIComponent(username)}` : '';
  const res = await fetch(`/api/kick-status${qs}`, { signal, cache: 'no-store' });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = (await res.json()) as { live: boolean };
  setIsLive(Boolean(data.live));
  } catch (err: any) {
  if (err?.name !== 'AbortError') {
  setErrorLive('No se pudo verificar el estado en vivo.');
  }
  } finally {
  setLoadingLive(false);
  }
  }


  useEffect(() => {
  abortRef.current?.abort();
  const controller = new AbortController();
  abortRef.current = controller;


  checkLiveOnce(controller.signal);


  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const interval = prefersReduced ? null : setInterval(() => checkLiveOnce(controller.signal), 60000);

  return () => {
  controller.abort();
  if (interval) clearInterval(interval);
  };
  }, []);

  return (
    <section
      id="home"
      className="relative w-full h-[95vh] flex items-center justify-center text-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage.src})` }}
      />
      <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 container flex flex-col items-center justify-center">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mb-4">
          {(!loadingLive && isLive) && (
          <div className="relative order-1 sm:order-none" aria-live="polite">
          <span className="flex items-center bg-primary text-primary-foreground font-bold text-xs sm:text-sm px-3 py-1 rounded-full uppercase tracking-widest">
          <span className="relative flex h-3 w-3 mr-2" aria-hidden>
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-foreground opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-foreground" />
          </span>
          En vivo ahora
          </span>
          </div>
          )}
          <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl tracking-tighter uppercase text-white w-full sm:w-auto">
            Mathius Moyano
          </h1>
        </div>

        <p className="font-headline text-2xl md:text-3xl lg:text-4xl text-muted-foreground uppercase tracking-widest mb-8">
          Transformando ideas en soluciones digitales
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="font-bold uppercase tracking-wider text-lg px-8 py-6 rounded-none"
          >
            <Link href="#contact">Impulsa tu marca</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="font-bold uppercase tracking-wider text-lg px-8 py-6 rounded-none border-2"
          >
            <Link href="#products">Explorar portafolio</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}