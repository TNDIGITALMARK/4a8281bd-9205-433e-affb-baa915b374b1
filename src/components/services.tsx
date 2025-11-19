'use client';

import { Sparkles, Droplet, Shield, Star } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'INTERIOR CLEANING',
    description: 'Deep cleaning and conditioning of all interior surfaces for a fresh, pristine cabin',
  },
  {
    icon: Droplet,
    title: 'EXTERIOR WASH',
    description: 'Professional hand wash with premium products and meticulous attention to detail',
  },
  {
    icon: Shield,
    title: 'PAINT CORRECTION',
    description: 'Expert paint correction removing swirls, scratches and restoring factory shine',
  },
  {
    icon: Star,
    title: 'CERAMIC COATING',
    description: 'Long-lasting protection with premium ceramic coating for ultimate durability',
  },
];

export function Services() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-secondary mb-3">OUR SERVICES</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white border border-gray-200 rounded-sm p-8 hover:shadow-md transition-shadow text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-sm font-bold text-secondary mb-3 tracking-wide">{service.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
