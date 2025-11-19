'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/generated/hero-car.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          PREMIUM AUTO
          <br />
          DETAILING SERVICES
        </h1>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Professional car detailing that restores your vehicle to showroom condition
        </p>
        <Link href="/booking">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-base">
            Book Now
          </Button>
        </Link>
      </div>
    </section>
  );
}
