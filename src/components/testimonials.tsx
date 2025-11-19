'use client';

import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah M.',
    review: 'My BMW looks better than when I bought it new. The attention to detail is incredible and the ceramic coating has kept it pristine for months.',
    rating: 5,
    initial: 'S',
  },
  {
    name: 'Mike R.',
    review: 'Professional service and fair pricing. They transformed my work truck and the interior looks and smells amazing again.',
    rating: 5,
    initial: 'M',
  },
  {
    name: 'Jessica L.',
    review: 'Outstanding work on my luxury sedan. The paint correction removed years of swirls and the finish is mirror-like.',
    rating: 5,
    initial: 'J',
  },
];

export function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-secondary mb-3">CUSTOMER TESTIMONIALS</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="text-center">
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-secondary">{testimonial.initial}</span>
              </div>

              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Review */}
              <p className="text-sm text-gray-600 leading-relaxed mb-3">{testimonial.review}</p>

              {/* Name */}
              <p className="text-sm font-semibold text-secondary">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
