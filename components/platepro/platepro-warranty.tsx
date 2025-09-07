export default function PlateproWarranty() {
  const warrantyFeatures = [
    {
      title: "5-Year Warranty",
      description: "Standard coverage for all PlatePro™ systems",
      icon: "🛡️"
    },
    {
      title: "Extended Service Packages",
      description: "Additional service packages available upon request",
      icon: "📋"
    },
    {
      title: "Technical Support",
      description: "Supported by Ducorr's experienced technical team",
      icon: "👨‍💼"
    },
    {
      title: "Regional Expertise",
      description: "Proven success across the Middle East region",
      icon: "🌍"
    }
  ];

  return (
    <section className="relative py-20 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2
            className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl"
            data-aos="zoom-y-out"
          >
            Warranty & Support
          </h2>
          <p
            className="mx-auto max-w-3xl text-lg text-gray-600"
            data-aos="zoom-y-out"
            data-aos-delay={150}
          >
            PlatePro™ comes with comprehensive warranty coverage and ongoing support 
            from Ducorr's experienced technical team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {warrantyFeatures.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center"
              data-aos="fade-up"
              data-aos-delay={100 + (index * 150)}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Warranty Details */}
        <div
          className="bg-white rounded-2xl p-8 shadow-lg"
          data-aos="fade-up"
          data-aos-delay={600}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Standard Warranty Coverage
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#d9823f]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-[#d9823f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">5-year comprehensive warranty on all components</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#d9823f]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-[#d9823f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Free replacement of defective parts</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#d9823f]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-[#d9823f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Technical support and maintenance guidance</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#d9823f]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-[#d9823f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Performance monitoring and optimization</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Ducorr Support Team
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#d9823f]/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#d9823f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Regional Presence</h4>
                    <p className="text-sm text-gray-600">Local support across the Middle East</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#d9823f]/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#d9823f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Certified Expertise</h4>
                    <p className="text-sm text-gray-600">NACE certified corrosion specialists</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#d9823f]/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#d9823f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Proven Track Record</h4>
                    <p className="text-sm text-gray-600">10+ years of successful implementations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
