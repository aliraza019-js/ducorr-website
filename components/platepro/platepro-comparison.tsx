export default function PlateproComparison() {
  const features = [
    {
      feature: "Rapid Deployment",
      advantage: "Installation time reduced by 70%",
      icon: "⚡"
    },
    {
      feature: "No Welding Required",
      advantage: "Safer, faster setup",
      icon: "🔧"
    },
    {
      feature: "No Surveyor Needed",
      advantage: "No complex concentric-circle layouts",
      icon: "📐"
    },
    {
      feature: "Factory Ready",
      advantage: "Delivered as a complete ICCP package",
      icon: "📦"
    },
    {
      feature: "Precise Monitoring",
      advantage: "Built-in references ensure accurate control",
      icon: "📊"
    },
    {
      feature: "Long Service Life",
      advantage: "25–30 years of reliable protection",
      icon: "⏰"
    },
    {
      feature: "Certified Expertise",
      advantage: "Backed by Ducorr CP specialists",
      icon: "🏆"
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
            Why Choose PlatePro™?
          </h2>
          <p
            className="mx-auto max-w-3xl text-lg text-gray-600"
            data-aos="zoom-y-out"
            data-aos-delay={150}
          >
            Discover the key advantages that make PlatePro™ the preferred choice for 
            aboveground storage tank cathodic protection.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={100 + (index * 100)}
            >
              <div className="flex items-start gap-4">
                {/* <div className="text-3xl">{item.icon}</div> */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.feature}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {item.advantage}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary section */}
        <div
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
          data-aos="fade-up"
          data-aos-delay={800}
        >
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Complete ICCP Solution
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#d9823f]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#d9823f]">70%</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Faster Installation</h4>
                <p className="text-sm text-gray-600">Compared to conventional systems</p>
              </div>
              
              <div className="text-center">
                <div className="w-22 h-22 bg-[#d9823f]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#d9823f]">25-30</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Years Service Life</h4>
                <p className="text-sm text-gray-600">Long-lasting protection</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#d9823f]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#d9823f]">5</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Year Warranty</h4>
                <p className="text-sm text-gray-600">Backed by Ducorr expertise</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
