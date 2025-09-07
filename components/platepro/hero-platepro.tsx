import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import Stripes from "@/public/images/stripes-dark.svg";

export default function HeroPlatepro() {
  return (
    <section className="relative">
      <PageIllustration />
      {/* Stripes illustration */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={Stripes}
          width={768}
          height={300}
          alt="Stripes"
        />
      </div>
      
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <div className="mb-6">
              <span className="inline-flex items-center rounded-full bg-[#d9823f]/10 px-4 py-2 text-sm font-medium text-[#d9823f]">
                Impressed Current Cathodic Protection
              </span>
            </div>
            
            <h1
              className="mb-6 text-5xl font-bold text-[#000000] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              PlatePro™
            </h1>
            
            <div className="mx-auto max-w-4xl">
              <p
                className="mb-8 text-xl text-gray-700 leading-relaxed"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Built for Aboveground Storage Tanks. PlatePro™ is Ducorr's ICCP solution designed to protect 
                the soil side of aboveground storage tank (AST) bottoms against corrosion.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
                data-aos="zoom-y-out"
                data-aos-delay={450}
              >
                <div className="flex items-center gap-2 text-[#d9823f] font-semibold">
                  <div className="w-3 h-3 bg-[#d9823f] rounded-full"></div>
                  <span>25-30 Year Service Life</span>
                </div>
                <div className="flex items-center gap-2 text-[#d9823f] font-semibold">
                  <div className="w-3 h-3 bg-[#d9823f] rounded-full"></div>
                  <span>70% Faster Installation</span>
                </div>
                <div className="flex items-center gap-2 text-[#d9823f] font-semibold">
                  <div className="w-3 h-3 bg-[#d9823f] rounded-full"></div>
                  <span>5 Year Warranty</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Key Benefits Grid */}
          <div className="mx-auto max-w-5xl" data-aos="zoom-y-out" data-aos-delay={600}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#d9823f]/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#d9823f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Deployment</h3>
                <p className="text-gray-600 text-sm">Quick installation with minimal labor requirements</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#d9823f]/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#d9823f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No Welding Required</h3>
                <p className="text-gray-600 text-sm">No welding or spot welding required for installation</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#d9823f]/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#d9823f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Long Service Life</h3>
                <p className="text-gray-600 text-sm">25-30 years of reliable protection</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
