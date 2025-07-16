import Image from "next/image";
import Stripes from "@/public/images/stripes-dark.svg";

export default function ProjectStats() {
  const stats = [
    {
      number: "50+",
      label: "Years Asset Life Extension",
      description: "Our solutions extend infrastructure life up to 50 years"
    },
    {
      number: "150%",
      label: "Time Savings",
      description: "Platepro system installation saves 150% time vs standard"
    },
    {
      number: "30+",
      label: "Years Protection",
      description: "Corrosion protection systems lasting 30+ years"
    },
    {
      number: "12",
      label: "Countries Served",
      description: "Global presence across diverse markets"
    }
  ];

  return (
    <section className={`relative mt-16 before:absolute before:inset-0 before:-z-20 before:bg-[#f3f3f3] animate-fade-in`}>
           {/* Stripes illustration (default) or custom background */}
        <div
          className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={Stripes}
            width={768}
            height={432}
            alt="Background"
          />
        </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center py-12">
          <h2 
            className="text-3xl font-bold text-gray-900 mb-4"
            data-aos="zoom-y-out"
          >
            Proven Results Across Industries
          </h2>
          <p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            data-aos="zoom-y-out"
            data-aos-delay={150}
          >
            Our track record speaks for itself with measurable outcomes that demonstrate the effectiveness of our cathodic protection solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-[#d9823f]/5 to-[#d9823f]/10 rounded-xl border border-[#d9823f]/20"
              data-aos="zoom-y-out"
              data-aos-delay={index * 100}
            >
              <div className="text-4xl font-bold text-[#d9823f] mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Additional achievements */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            className="text-center p-6"
            data-aos="zoom-y-out"
            data-aos-delay={400}
          >
            <div className="text-6xl mb-4">🌍</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Global Reach</h3>
            <p className="text-gray-600">
              From the Middle East to Asia, our solutions protect critical infrastructure worldwide
            </p>
          </div>
          
          <div 
            className="text-center p-6"
            data-aos="zoom-y-out"
            data-aos-delay={500}
          >
            <div className="text-6xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Rapid Deployment</h3>
            <p className="text-gray-600">
              Quick installation and commissioning with minimal disruption to operations
            </p>
          </div>
          
          <div 
            className="text-center p-6"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <div className="text-6xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Comprehensive Protection</h3>
            <p className="text-gray-600">
              Complete corrosion mitigation from design to long-term monitoring
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 