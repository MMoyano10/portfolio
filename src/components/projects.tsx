import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'SpotVue',
    metric: '+40% Signups',
    description: 'Revamped the user onboarding flow, resulting in a significant increase in user acquisition.',
    imageId: 'project-1'
  },
  {
    title: 'ReservNow',
    metric: '50ms API Response',
    description: 'Optimized backend services to achieve near-instantaneous API responses for a seamless user experience.',
    imageId: 'project-2'
  },
  {
    title: 'Invencible',
    metric: '+25% Conversion',
    description: 'Designed a high-converting e-commerce storefront with a focus on brand storytelling.',
    imageId: 'project-3'
  }
];

export default function Projects() {
  const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

  return (
    <section id="projects" className="py-24 sm:py-32 bg-card">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-headline text-5xl md:text-7xl uppercase text-white">Projects & Achievements</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">Turning ideas into impactful results.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {projects.map((project) => {
            const image = getImage(project.imageId);
            return (
              <div key={project.title} className="group relative overflow-hidden shadow-2xl rounded-none">
                {image && (
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    width={600}
                    height={800}
                    data-ai-hint={image.imageHint}
                    className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white w-full transition-all duration-300 transform group-hover:-translate-y-2">
                  <h3 className="font-headline text-3xl uppercase">{project.title}</h3>
                  <div className="flex items-center gap-2 text-primary font-bold text-2xl my-2">
                     <ArrowRight className="h-6 w-6" />
                    <span>{project.metric}</span>
                  </div>
                  <p className="text-sm text-white/80 opacity-0 max-w-xs group-hover:opacity-100 transition-opacity duration-300">{project.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
