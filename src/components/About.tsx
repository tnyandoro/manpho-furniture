import { Award, Shield, Truck, Clock } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Quality Craftsmanship',
    description: 'Professional services with over 8 years of furniture manufacturing experience'
  },
  {
    icon: Shield,
    title: 'One Year Guarantee',
    description: 'All our products come with a comprehensive one-year warranty'
  },
  {
    icon: Truck,
    title: 'Free Delivery',
    description: 'Complimentary country-wide delivery for large orders'
  },
  {
    icon: Clock,
    title: 'Quick Turnaround',
    description: 'Orders completed in 10-14 working days'
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-12 lg:px-20 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Manpho Investments
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Manpho Investments (Pvt) Ltd is a wholly owned Zimbabwean company run by local indigenous entrepreneurs. Established in October 2021, we are working directors with extensive experience from managerial positions in reputable furniture manufacturing industries.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We strive not only to be a front runner, but to be second to none in furniture manufacturing industry. Our mission is to provide diversified quality services to all sectors in our economy, positioning ourselves as a market leader in Zimbabwe.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gradient-to-br from-manpho-green to-manpho-blue text-white p-6 rounded-xl">
                <div className="text-3xl font-bold mb-1">8+</div>
                <div className="text-sm">Years Experience</div>
              </div>
              <div className="bg-gradient-to-br from-manpho-blue to-manpho-green text-white p-6 rounded-xl">
                <div className="text-3xl font-bold mb-1">1000+</div>
                <div className="text-sm">Happy Customers</div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <div className="flex flex-wrap gap-2">
                {['Professionalism', 'Transparency', 'Innovation', 'Reliability', 'Efficiency', 'Effectiveness', 'Fairness', 'Teamwork'].map((value) => (
                  <span
                    key={value}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-manpho-green to-manpho-blue rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
