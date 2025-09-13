import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const products = [
  {
    name: 'ReservNow',
    problem: 'Businesses struggle with complex booking systems that deter customers.',
    solution: 'An intuitive, seamless reservation platform that simplifies scheduling for both businesses and users.',
    features: ['One-click booking', 'Automated reminders', 'Stripe integration', 'Customizable availability'],
    cta: { text: 'View Demo', href: '#' }
  },
  {
    name: 'SpotVue Suite',
    problem: 'Lack of actionable insights from user data leads to poor decision-making.',
    solution: 'A powerful analytics suite that transforms raw data into clear, actionable business intelligence.',
    features: ['Real-time dashboards', 'User behavior tracking', 'A/B testing tools', 'Predictive analytics'],
    cta: { text: 'Get Early Access', href: '#' }
  },
  {
    name: 'Invencible',
    problem: 'New e-commerce brands find it hard to build trust and a strong online presence.',
    solution: 'A complete branding and e-commerce launchpad, from identity design to a fully functional online store.',
    features: ['Brand strategy', 'Logo & visual identity', 'Shopify development', 'Marketing automation'],
    cta: { text: 'See Case Study', href: '#' }
  }
];

export default function Products() {
  return (
    <section id="products" className="py-24 sm:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-headline text-5xl md:text-7xl uppercase text-white">Products</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">Crafting solutions for digital challenges.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={product.name} className="bg-card border-border/50 flex flex-col transform transition-transform duration-300 hover:scale-105 hover:-rotate-1 shadow-2xl rounded-none">
              <CardHeader className="p-8">
                <CardTitle className="font-headline text-4xl uppercase text-primary">{product.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col p-8 pt-0">
                <div className="flex-grow space-y-6">
                  <div>
                    <h3 className="font-bold text-accent uppercase text-sm mb-2 tracking-widest">Problem</h3>
                    <p className="text-muted-foreground text-sm">{product.problem}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-accent uppercase text-sm mb-2 tracking-widest">Solution</h3>
                    <p className="text-muted-foreground text-sm">{product.solution}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-accent uppercase text-sm mb-3 tracking-widest">Features</h3>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-muted-foreground text-sm">
                      {product.features.map(feature => <li key={feature} className="truncate">{feature}</li>)}
                    </ul>
                  </div>
                </div>
                <Button asChild className="w-full mt-8 font-bold uppercase tracking-wider rounded-none" variant="outline">
                  <Link href={product.cta.href}>{product.cta.text}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
