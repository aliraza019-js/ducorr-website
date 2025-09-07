export default function PlateproTechnology() {
  return (
    <section className="relative py-20 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2
            className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl"
            data-aos="zoom-y-out"
          >
            Smart Protection Technology
          </h2>
          <p
            className="mx-auto max-w-3xl text-lg text-gray-600"
            data-aos="zoom-y-out"
            data-aos-delay={150}
          >
            PlatePro™ integrates advanced impressed current technology with practical features 
            designed for optimal performance and ease of installation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            className="text-center"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="w-16 h-16 bg-[#d9823f] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Durable MMO Anode Mesh
            </h3>
            <p className="text-gray-600">
              Evenly distributes protective current across the tank bottom for comprehensive coverage
            </p>
          </div>

          <div
            className="text-center"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="w-16 h-16 bg-[#d9823f] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Integrated Monitoring
            </h3>
            <p className="text-gray-600">
              Built-in reference points for accurate system performance checks and maintenance
            </p>
          </div>

          <div
            className="text-center"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            <div className="w-16 h-16 bg-[#d9823f] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Reliable Power Supply
            </h3>
            <p className="text-gray-600">
              Compact DC power unit ensures consistent operation and optimal current delivery
            </p>
          </div>

          <div
            className="text-center"
            data-aos="fade-up"
            data-aos-delay={400}
          >
            <div className="w-16 h-16 bg-[#d9823f] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Simplified Installation
            </h3>
            <p className="text-gray-600">
              No resistance spot welding or special labor required for quick deployment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
