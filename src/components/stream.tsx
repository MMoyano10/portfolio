import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import Link from 'next/link';

const schedule = [
  { day: 'Mon', time: '8 PM EST - Dev Stream' },
  { day: 'Wed', time: '8 PM EST - Project Build' },
  { day: 'Fri', time: '9 PM EST - Gaming Night' },
];

const clips = ['kick-clip-1', 'kick-clip-2', 'kick-clip-3', 'kick-clip-4'];

export default function Stream() {
  const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

  return (
    <section id="stream" className="py-24 sm:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-headline text-5xl md:text-7xl uppercase text-white">Live on Kick</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">Building, breaking, and gaming. Join the community.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="aspect-video w-full overflow-hidden rounded-none border-2 border-primary shadow-2xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=0&mute=1" 
                title="Lofi hip hop radio"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </iframe>
            </div>
          </div>
          <div className="space-y-6 flex flex-col">
            <div className="p-6 rounded-none border border-border/50 bg-card flex-grow">
              <h3 className="font-headline text-2xl uppercase mb-4 flex items-center gap-2"><Calendar className="text-primary"/> Schedule</h3>
              <ul className="space-y-3">
                {schedule.map(item => (
                  <li key={item.day} className="flex items-baseline gap-4">
                    <span className="font-bold text-accent w-10">{item.day}</span>
                    <span className="text-muted-foreground">{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Button asChild className="w-full font-bold uppercase tracking-wider text-lg rounded-none" size="lg">
              <Link href="#" target="_blank">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 fill-current"><title>Discord</title><path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.369-.42.738-.609 1.114a18.29 18.29 0 00-1.213-.135 18.29 18.29 0 00-1.213.135c-.199-.376-.4-.745-.609-1.114a.074.074 0 00-.079-.037A19.736 19.736 0 003.683 4.37a.074.074 0 00-.04.066C3.003 9.49 2.158 14.12 4.025 17.51a.074.074 0 00.066.047c.399-.148.78-.304 1.15-.473a.074.074 0 00.04-.066 14.156 14.156 0 00-.239-1.076.074.074 0 00-.066-.037 13.064 13.064 0 01-.458-.239c.148-.098.296-.207.443-.315a.074.074 0 00.066-.027 12.87 12.87 0 003.732 2.023.074.074 0 00.088-.047c.21-.464.409-.948.598-1.45a.074.074 0 00-.027-.088 12.817 12.817 0 00-1.762-.948.074.074 0 00-.098.027c-.495.698-1.01 1.34-1.524 1.992a.074.074 0 00.018.107 14.947 14.947 0 003.045 1.762c.799.315 1.597.598 2.396.862a.074.074 0 00.088-.027 19.348 19.348 0 005.16-4.539.074.074 0 00.018-.088 15.013 15.013 0 00-1.533-2.002.074.074 0 00-.098-.018c-.533.35-.978.738-1.462 1.076a.074.074 0 00-.057.077c-.018.24-.057.558-.098.847a.074.074 0 00.04.077c.458.197.907.385 1.355.564a.074.074 0 00.066-.037c1.866-3.391.992-8.02.35-13.064a.074.074 0 00-.04-.066zm-4.634 8.178a3.391 3.391 0 01-3.391-3.391 3.391 3.391 0 013.39-3.39 3.391 3.391 0 013.392 3.39 3.391 3.391 0 01-3.391 3.391zm6.782 0a3.391 3.391 0 01-3.391-3.391 3.391 3.391 0 013.39-3.39 3.391 3.391 0 013.392 3.39 3.391 3.391 0 01-3.391 3.391z"/></svg>
                Join The Discord
              </Link>
            </Button>
          </div>
        </div>
        <div className="mt-16">
            <h3 className="font-headline text-3xl uppercase mb-6 text-center">Featured Clips</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {clips.map(clipId => {
                    const image = getImage(clipId);
                    return image ? (
                        <div key={clipId} className="group relative aspect-video overflow-hidden rounded-none shadow-lg">
                            <Image
                                src={image.imageUrl}
                                alt={image.description}
                                fill
                                sizes="(max-width: 768px) 50vw, 25vw"
                                data-ai-hint={image.imageHint}
                                className="object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        </div>
                    ) : null;
                })}
            </div>
        </div>
      </div>
    </section>
  );
}
