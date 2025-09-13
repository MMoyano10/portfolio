'use client';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import backgroundImage from '../../source/images/background.png';

export default function Hero() {
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    // Simulate checking Kick API. In a real app, you'd fetch from an endpoint.
    setIsLive(Math.random() > 0.7);
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
          {isLive && (
            <div className="relative order-1 sm:order-none">
              <span className="flex items-center bg-primary text-primary-foreground font-bold text-xs sm:text-sm px-3 py-1 rounded-full uppercase tracking-widest">
                <span className="relative flex h-3 w-3 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-foreground opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-foreground" />
                </span>
                Live Now
              </span>
            </div>
          )}
          <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl tracking-tighter uppercase text-white w-full sm:w-auto">
            Mathius Moyano
          </h1>
        </div>

        <p className="font-headline text-2xl md:text-3xl lg:text-4xl text-muted-foreground uppercase tracking-widest mb-8">
          Digital Alchemist
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="font-bold uppercase tracking-wider text-lg px-8 py-6 rounded-none"
          >
            <Link href="#contact">Hire Me</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="font-bold uppercase tracking-wider text-lg px-8 py-6 rounded-none border-2"
          >
            <Link href="#products">View Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}