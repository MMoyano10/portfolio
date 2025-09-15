'use client';

import Image from 'next/image';
import Link from 'next/link';
import useSWR from 'swr';
import { Calendar, Loader2, Radio } from 'lucide-react';

import ComingSoonImage from '../../source/images/ComingSoon.png';
import InstagramImage from '../../source/images/Instagram.png';
import TikTokImage from '../../source/images/Tiktok.png'; 

const schedule: Array<{ day: 'Jueves' | 'Viernes' | 'Sábado'; time?: string }> = [
  { day: 'Jueves', time: '21:00'  },                    
  { day: 'Viernes', time: '21:00' },    
  { day: 'Sábado', time: '21:00'  },                    
];

const clips = [
  { id: 'clip-1', image: ComingSoonImage, link: '#' },
  { id: 'clip-2', image: InstagramImage, link: 'https://instagram.com/mathiusmoyano' },
  { id: 'clip-3', image: TikTokImage, link: 'https://tiktok.com/@mathiusmoyano' },
];

type KickStatus = { live: boolean; title?: string | null; user?: string };

const fetcher = (url: string) => fetch(url, { cache: 'no-store' }).then((r) => r.json());

export default function Stream() {
  const username = process.env.NEXT_PUBLIC_KICK_USERNAME || 'mathiusmoyano';

  const { data, isLoading } = useSWR<KickStatus>(
    `/api/kick/status?user=${encodeURIComponent(username)}`,
    fetcher,
    { refreshInterval: 15000 }
  );

  const isLive = !!data?.live;
  const title = data?.title ?? null;
  const channel = data?.user || username;

  return (
    <section id="stream" className="py-24 sm:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-primary/50 px-3 py-1 text-xs uppercase tracking-widest text-primary">
            <Radio className={`h-3.5 w-3.5 ${isLive ? 'animate-pulse' : ''}`} />
            <span>{isLive ? 'En vivo en Kick' : 'Centro de Stream'}</span>
          </div>
          <h2 className="font-headline text-5xl md:text-7xl uppercase text-white">
            {isLive ? 'Estamos en vivo' : 'Próxima transmisión'}
          </h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            {isLive ? 'Míralo aquí mismo o ábrelo en Kick.' : 'Construyendo, probando y jugando. Únete a la comunidad.'}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="aspect-video w-full overflow-hidden rounded-none border-2 border-primary shadow-2xl bg-black relative">
              {isLoading && (
                <div className="absolute inset-0 grid place-items-center text-white/80">
                  <Loader2 className="h-8 w-8 animate-spin" />
                </div>
              )}

              <iframe
                key={`kick-${channel}-${isLive ? 'live' : 'offline'}`}
                width="100%"
                height="100%"
                src={`https://player.kick.com/${channel}${isLive ? '?autoplay=1&muted=1' : ''}`}
                title={`Kick: ${channel}`}
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            <div className="mt-3 flex items-center justify-between text-sm">
              <Link
                href={`https://kick.com/${channel}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 underline underline-offset-4 hover:no-underline"
                aria-label="Abrir canal en Kick en una nueva pestaña"
              >
                Abrir en Kick
              </Link>
              {title ? <span className="text-white/60 line-clamp-1">{title}</span> : null}
            </div>
          </div>

          <div className="space-y-6 flex flex-col">
            <div className="p-6 rounded-none border border-border/50 bg-card flex-grow">
              <h3 className="font-headline text-2xl uppercase mb-4 flex items-center gap-2">
                <Calendar className="text-primary" /> Horarios
              </h3>
              <ul className="space-y-3">
                {schedule.map((item, i) => (
                  <li key={`${item.day}-${i}`} className="flex items-baseline gap-4">
                    <span className="font-bold text-accent w-20">{item.day}</span>
                    <span className="text-muted-foreground">
                      {item.time ?? 'Horario variable'}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-white/50">
                *Los horarios pueden cambiar según el día. Revisa el canal para actualizaciones.
              </p>
            </div>

            <a
              href={process.env.NEXT_PUBLIC_DISCORD_INVITE || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center border-2 border-black bg-white px-4 py-3 font-bold uppercase tracking-wider text-black transition hover:bg-primary hover:text-white"
              aria-label="Unirte al servidor de Discord en una nueva pestaña"
            >
              <svg role="img" viewBox="0 0 24 24" className="h-6 w-6 mr-2 fill-current" aria-hidden>
                <title>Discord</title>
                <path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515...Z" />
              </svg>
              Unirte al Discord
            </a>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="font-headline text-3xl uppercase mb-6 text-center">Clips Destacados</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {clips.map((clip) => (
              <Link key={clip.id} href={clip.link} target="_blank" rel="noopener noreferrer">
                <div className="group relative aspect-video overflow-hidden rounded-none shadow-lg">
                  <Image
                    src={clip.image}
                    alt={clip.id}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}