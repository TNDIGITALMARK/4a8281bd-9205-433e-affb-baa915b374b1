import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Services } from '@/components/services';
import { Gallery } from '@/components/gallery';
import { Testimonials } from '@/components/testimonials';
import { Footer } from '@/components/footer';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
      <Footer />
    </div>
  );
}