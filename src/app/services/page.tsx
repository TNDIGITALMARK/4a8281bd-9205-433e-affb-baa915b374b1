import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import Link from 'next/link';

const packages = [
  {
    name: 'Basic Wash & Wax',
    price: '$89',
    duration: '2 hours',
    features: [
      'Exterior hand wash',
      'Clay bar treatment',
      'Premium wax application',
      'Tire shine',
      'Window cleaning',
    ],
  },
  {
    name: 'Full Detail Package',
    price: '$189',
    duration: '4 hours',
    features: [
      'Complete interior vacuum',
      'Leather conditioning',
      'Exterior wash & clay',
      'Polish & wax',
      'Engine bay cleaning',
      'Tire & wheel detailing',
    ],
    popular: true,
  },
  {
    name: 'Premium Ceramic Coating',
    price: '$599',
    duration: '8 hours',
    features: [
      'Paint correction',
      'Ceramic coating application',
      'Interior protection',
      '6-month warranty',
      'Free maintenance wash',
      'Lifetime support',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-secondary text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services & Pricing</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Professional detailing packages tailored to your vehicle's needs
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative border ${
                  pkg.popular ? 'border-primary shadow-lg scale-105' : 'border-gray-200'
                } rounded-sm p-8 bg-white`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold">
                    MOST POPULAR
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-secondary mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-primary mb-1">{pkg.price}</div>
                  <p className="text-sm text-gray-600">{pkg.duration}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/booking" className="block">
                  <Button
                    className={`w-full ${
                      pkg.popular
                        ? 'bg-primary hover:bg-primary/90'
                        : 'bg-secondary hover:bg-secondary/90'
                    }`}
                  >
                    Book This Package
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          {/* Add-ons Section */}
          <div className="mt-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-secondary mb-8">Popular Add-Ons</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-sm p-6">
                <h3 className="text-lg font-bold text-secondary mb-2">Headlight Restoration</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Remove oxidation and restore clarity to foggy headlights
                </p>
                <p className="text-2xl font-bold text-primary">+$49</p>
              </div>
              <div className="border border-gray-200 rounded-sm p-6">
                <h3 className="text-lg font-bold text-secondary mb-2">Pet Hair Removal</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Specialized treatment for vehicles with pet hair
                </p>
                <p className="text-2xl font-bold text-primary">+$39</p>
              </div>
              <div className="border border-gray-200 rounded-sm p-6">
                <h3 className="text-lg font-bold text-secondary mb-2">Odor Elimination</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Professional treatment to remove stubborn odors
                </p>
                <p className="text-2xl font-bold text-primary">+$59</p>
              </div>
              <div className="border border-gray-200 rounded-sm p-6">
                <h3 className="text-lg font-bold text-secondary mb-2">Paint Sealant</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Extended protection with premium paint sealant
                </p>
                <p className="text-2xl font-bold text-primary">+$79</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
