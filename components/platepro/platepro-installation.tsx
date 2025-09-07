export default function PlateproInstallation() {
  const steps = [
    {
      step: 1,
      title: "Place the Anode Grid",
      description: "Position the anode grid beneath the tank foundation for optimal current distribution",
      icon: "📐"
    },
    {
      step: 2,
      title: "Connect to Junction Box",
      description: "Link the system to the junction box located near the tank for easy access",
      icon: "🔌"
    },
    {
      step: 3,
      title: "Link to DC Power Supply",
      description: "Connect the system to the compact DC power unit for consistent operation",
      icon: "⚡"
    },
    {
      step: 4,
      title: "Verify and Commission",
      description: "Test the system and commission - protection begins immediately",
      icon: "✅"
    }
  ];

  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2
            className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl"
            data-aos="zoom-y-out"
          >
            Simple & Efficient Installation
          </h2>
          <p
            className="mx-auto max-w-3xl text-lg text-gray-600"
            data-aos="zoom-y-out"
            data-aos-delay={150}
          >
            PlatePro™ installation takes only a fraction of the time compared to traditional ICCP systems. 
            Follow these simple steps for quick deployment.
          </p>
        </div>

        {/* Installation Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((item, index) => (
            <div
              key={index}
              className="relative"
              data-aos="fade-up"
              data-aos-delay={100 + (index * 150)}
            >
              {/* Connection line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-[#d9823f]/20 transform translate-x-4"></div>
              )}
              
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
                <div className="w-16 h-16 bg-[#d9823f] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{item.step}</span>
                </div>
                {/* <div className="text-3xl mb-4">{item.icon}</div> */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Installation Benefits */}
        <div
          className="bg-gradient-to-r from-[#d9823f]/5 to-[#d9823f]/10 rounded-2xl p-8"
          data-aos="fade-up"
          data-aos-delay={700}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              ⏱ Installation Time Comparison
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              PlatePro™ installation takes only a fraction of the time compared to traditional ICCP systems, 
              reducing labor costs and minimizing downtime.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold text-[#d9823f]">70%</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Time Reduction</h4>
              <p className="text-sm text-gray-600">Compared to conventional systems</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold text-[#d9823f]">0</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Welding Required</h4>
              <p className="text-sm text-gray-600">No spot welding or special labor</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold text-[#d9823f]">✓</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Immediate Protection</h4>
              <p className="text-sm text-gray-600">Protection begins right after installation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
