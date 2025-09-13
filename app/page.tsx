import Header from '@/components/header';
import Hero from '@/components/hero';
import Products from '@/components/products';
import Projects from '@/components/projects';
import Stream from '@/components/stream';
import About from '@/components/about';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Products />
        <Projects />
        <Stream />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
