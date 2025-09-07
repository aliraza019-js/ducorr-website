export default function PlateproCompliance() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2
            className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl"
            data-aos="zoom-y-out"
          >
            Compliance & Standards
          </h2>
          <p
            className="mx-auto max-w-3xl text-lg text-gray-600"
            data-aos="zoom-y-out"
            data-aos-delay={150}
          >
            PlatePro™ meets leading industry guidelines and standards for cathodic protection systems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="w-12 h-12 bg-[#d9823f]/10 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#d9823f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              API 651
            </h3>
            <p className="text-gray-600 mb-4">
              Cathodic Protection of Aboveground Storage Tanks
            </p>
            <div className="text-sm text-[#d9823f] font-medium">
              ✓ Fully Compliant
            </div>
          </div>

          <div
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="w-12 h-12 bg-[#d9823f]/10 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#d9823f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              NACE RP0193
            </h3>
            <p className="text-gray-600 mb-4">
              External CP of On-Grade Carbon Steel Tank Bottoms
            </p>
            <div className="text-sm text-[#d9823f] font-medium">
              ✓ Fully Compliant
            </div>
          </div>

          <div
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            <div className="w-12 h-12 bg-[#d9823f]/10 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#d9823f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              NACE RP0285
            </h3>
            <p className="text-gray-600 mb-4">
              CP of Underground Storage Tank Systems
            </p>
            <div className="text-sm text-[#d9823f] font-medium">
              ✓ Fully Compliant
            </div>
          </div>
        </div>

        {/* Additional compliance info */}
        <div
          className="mt-16 bg-gradient-to-r from-[#d9823f]/5 to-[#d9823f]/10 rounded-2xl p-8"
          data-aos="fade-up"
          data-aos-delay={400}
        >
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Industry-Leading Compliance
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              PlatePro™ is designed and manufactured to meet the highest industry standards, 
              ensuring your cathodic protection system operates within regulatory requirements 
              and provides optimal protection for your aboveground storage tanks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
