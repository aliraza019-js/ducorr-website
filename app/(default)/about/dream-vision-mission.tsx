"use client";

import Icon from "@mdi/react";
import { 
  mdiEarth, 
  mdiLaptop, 
  mdiRocketLaunch, 
  mdiCheckCircle, 
  mdiLightningBolt, 
  mdiFileDocument, 
  mdiPencil,
  mdiKeyboard,
  mdiShieldCheck,
  mdiTrendingUp,
  mdiCart,
  mdiCog
} from "@mdi/js";

export default function DreamVisionMission() {
  const dreamFeatures = [
    { icon: mdiCheckCircle, title: "Global Impact", desc: "Gives me reason to know I impact the world" },
    { icon: mdiLightningBolt, title: "Resource Protection", desc: "Preserving finite Iron ore resources" },
    { icon: mdiFileDocument, title: "Sustainable Future", desc: "Reducing extraction through innovation" },
    { icon: mdiShieldCheck, title: "Long-term Vision", desc: "Building lasting infrastructure solutions" },
  ];

  const visionFeatures = [
    { icon: mdiCheckCircle, title: "Ubiquitous Adoption", desc: "Using CP becomes standard practice" },
    { icon: mdiLightningBolt, title: "Simple Integration", desc: "Easy to use, install and run" },
    { icon: mdiKeyboard, title: "Vintage Innovation", desc: "The foundation of progress" },
    { icon: mdiLaptop, title: "Modern Accessibility", desc: "Technology for everyone" },
  ];

  const missionFeatures = [
    { icon: mdiLightningBolt, title: "10X Easier", desc: "Simplified installation process" },
    { icon: mdiTrendingUp, title: "Widespread Use", desc: "Becoming ubiquitous in industry" },
    { icon: mdiCart, title: "Easy to Buy", desc: "Streamlined purchasing process" },
    { icon: mdiCog, title: "Simple to Run", desc: "User-friendly operation" },
  ];

  return (
    <section className="mt-20 mb-16 mx-auto max-w-7xl px-4 sm:px-6">
      {/* Section Header */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-3 pb-3 mb-4 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-[#d9823f]/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-[#d9823f]/50">
          <span className="text-xl font-semibold text-[var(--color-primary)] uppercase tracking-wider">
            Our Foundation
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
          Dream, Vision & Mission
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          The core principles that guide our journey in revolutionizing corrosion protection and making infrastructure protection accessible to everyone.
        </p>
      </div>

      {/* My Dream Section */}
      <div className="mb-20">
        <div className="relative group">
          {/* Main Card */}
          <div className="relative bg-gradient-to-br from-orange-50 via-white to-amber-50 rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-3xl hover:scale-[1.01]">
            {/* Animated Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#d9823f]/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#b86a2f]/20 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                <div className="flex items-center gap-5 mb-4 md:mb-0">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#d9823f] to-[#b86a2f] rounded-2xl blur-lg opacity-50"></div>
                    <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-[#d9823f] to-[#b86a2f] flex items-center justify-center shadow-xl">
                      <Icon path={mdiEarth} size={2} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm uppercase tracking-wider text-[#d9823f] font-bold mb-1">My Dream</div>
                    <p className="text-sm text-gray-500">This is what is in my Head!</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {dreamFeatures.slice(0, 2).map((feature, idx) => (
                    <div key={idx} className="hidden lg:flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-xl px-4 py-2 shadow-sm border border-gray-100">
                      <Icon path={feature.icon} size={1} className="text-[#d9823f]" />
                      <span className="text-xs font-semibold text-gray-700">{feature.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Content */}
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  To eliminate corrosion of embedded steel{" "}
                  <span className="bg-gradient-to-r from-[#d9823f] to-[#b86a2f] bg-clip-text text-transparent">in the world</span>
                </h2>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl">
                  Our mission is to create solutions that make a measurable impact on infrastructure longevity. Every cathodic protection system we develop helps reduce the need to extract more iron from the earth, protecting a non-renewable resource.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {dreamFeatures.map((feature, idx) => (
                  <div 
                    key={idx}
                    className="bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#d9823f]/10 to-[#b86a2f]/10 flex items-center justify-center mb-3 group-hover:from-[#d9823f]/20 group-hover:to-[#b86a2f]/20 transition-all">
                      <Icon path={feature.icon} size={1.2} className="text-[#d9823f]" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-1 text-sm">{feature.title}</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* My Vision Section */}
      <div className="mb-20">
        <div className="relative group">
          {/* Main Card */}
          <div className="relative bg-gradient-to-br from-orange-50 via-white to-amber-50 rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-3xl hover:scale-[1.01]">
            {/* Animated Background Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#d9823f]/20 to-transparent rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-[#b86a2f]/20 to-transparent rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-[#d9823f]/10 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="relative z-10">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                <div className="flex items-center gap-5 mb-4 md:mb-0">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#d9823f] to-[#b86a2f] rounded-2xl blur-lg opacity-50"></div>
                    <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-[#d9823f] to-[#b86a2f] flex items-center justify-center shadow-xl">
                      <Icon path={mdiLaptop} size={2} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm uppercase tracking-wider text-[#d9823f] font-bold mb-1">My Vision</div>
                    <p className="text-sm text-gray-500">This is the <span className="underline font-semibold">form</span> the company will take</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {visionFeatures.slice(0, 2).map((feature, idx) => (
                    <div key={idx} className="hidden lg:flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-xl px-4 py-2 shadow-sm border border-gray-100">
                      <Icon path={feature.icon} size={1} className="text-[#d9823f]" />
                      <span className="text-xs font-semibold text-gray-700">{feature.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Content */}
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  To do for Cathodic protection engineering,{" "}
                  <span className="bg-gradient-to-r from-[#d9823f] to-[#b86a2f] bg-clip-text text-transparent">what Microsoft did</span>{" "}
                  for the world of document management
                </h2>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl">
                  We envision making cathodic protection as ubiquitous and easy to use as modern software. Our systems will be accessible, intuitive, and seamlessly integrated into infrastructure projects worldwide.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {visionFeatures.map((feature, idx) => (
                  <div 
                    key={idx}
                    className="bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#d9823f]/10 to-[#b86a2f]/10 flex items-center justify-center mb-3 group-hover:from-[#d9823f]/20 group-hover:to-[#b86a2f]/20 transition-all">
                      <Icon path={feature.icon} size={1.2} className="text-[#d9823f]" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-1 text-sm">{feature.title}</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* My Mission Section */}
      <div>
        <div className="relative group">
          {/* Main Card */}
          <div className="relative bg-gradient-to-br from-orange-50 via-white to-amber-50 rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-3xl hover:scale-[1.01]">
            {/* Animated Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-200/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-200/20 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-[#d9823f]/10 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="relative z-10">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                <div className="flex items-center gap-5 mb-4 md:mb-0">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#d9823f] to-[#b86a2f] rounded-2xl blur-lg opacity-50"></div>
                    <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-[#d9823f] to-[#b86a2f] flex items-center justify-center shadow-xl">
                      <Icon path={mdiRocketLaunch} size={2} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm uppercase tracking-wider text-[#d9823f] font-bold mb-1">My Mission</div>
                    <p className="text-sm text-gray-500">What we must create to succeed</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {missionFeatures.slice(0, 2).map((feature, idx) => (
                    <div key={idx} className="hidden lg:flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-xl px-4 py-2 shadow-sm border border-gray-100">
                      <Icon path={feature.icon} size={1} className="text-[#d9823f]" />
                      <span className="text-xs font-semibold text-gray-700">{feature.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Content */}
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  To re-engineer cathodic protection systems & products to make it{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10 bg-gradient-to-r from-[#d9823f] to-[#b86a2f] bg-clip-text text-transparent font-extrabold">10X</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-[#d9823f]/20 to-[#b86a2f]/20 blur-xl"></span>
                  </span>{" "}
                  easier to buy, install & run so that its use becomes ubiquitous.
                </h2>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mb-6">
                  Simplicity is the ultimate sophistication. We're making complex protection systems as accessible as everyday technology, ensuring widespread adoption and long-term infrastructure protection.
                </p>
                
                {/* CTA Button */}
                <button className="group relative bg-gradient-to-r from-[#d9823f] to-[#b86a2f] text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-[#b86a2f] to-[#d9823f] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative z-10 flex items-center gap-2">
                    Learn More About Our Mission
                    <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </button>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {missionFeatures.map((feature, idx) => (
                  <div 
                    key={idx}
                    className="bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#d9823f]/10 to-[#b86a2f]/10 flex items-center justify-center mb-3 group-hover:from-[#d9823f]/20 group-hover:to-[#b86a2f]/20 transition-all">
                      <Icon path={feature.icon} size={1.2} className="text-[#d9823f]" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-1 text-sm">{feature.title}</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
