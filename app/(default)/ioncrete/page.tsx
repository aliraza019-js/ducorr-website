import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import Cta from "@/components/cta";
import StickyActions from "@/components/StickyActions";

export default function IoncretePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <PageIllustration />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pb-12 pt-32 md:pb-20 md:pt-40">
            {/* Hero content */}
            <div className="pb-12 text-center md:pb-16">
              <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-[#d9823f]/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-[#d9823f]/50">
                <span className="inline-flex bg-linear-to-r from-[#d9823f] to-[#d9823f] bg-clip-text text-transparent">
                  Cathodic Protection System
                </span>
              </div>
              <h1
                className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl"
                data-aos="zoom-y-out"
                data-aos-delay={150}
              >
                Ioncrete™
              </h1>
              <div className="mx-auto max-w-3xl">
                <p
                  className="mb-8 text-xl text-gray-700"
                  data-aos="zoom-y-out"
                  data-aos-delay={300}
                >
                  Modular, Smart, and Cost-Effective Cathodic Protection System
                </p>
                <p
                  className="mb-8 text-lg text-gray-600"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <strong>"Stop Corrosion in Its Tracks, Power Up Your Protection!"</strong>
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="mailto:sales@ducorr.com"
              className="inline-flex items-center rounded-lg bg-[#d9823f] px-6 py-3 text-white font-semibold shadow-lg transition-all hover:bg-[#b86a2f]"
            >
              <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Sales Team
            </a>
            <a
              href="/projects"
              className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-gray-800 font-semibold shadow-lg transition-all hover:bg-gray-50"
            >
              <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              View Key Projects
            </a>
          </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corrosion Defense Excellence Section */}
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Content */}
            <div className="flex items-center">
              <div>
                <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-[#d9823f]/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-[#d9823f]/50">
                  <span className="inline-flex bg-linear-to-r from-[#d9823f] to-[#d9823f] bg-clip-text text-transparent">
                    Corrosion Defense Excellence
                  </span>
                </div>
                <h2
                  className="mb-6 text-3xl font-bold md:text-4xl"
                  data-aos="fade-up"
                >
                  Protect your concrete structures from costly corrosion
                </h2>
                <p
                  className="mb-8 text-lg text-gray-600"
                  data-aos="fade-up"
                  data-aos-delay={150}
                >
                  Ducorr Ioncrete™ is the advanced, modular cathodic protection system engineered for simplicity, performance, and long-term savings.
                </p>
                
                {/* Features Grid */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div
                    className="rounded-lg border border-gray-200 p-6 shadow-sm"
                    data-aos="fade-up"
                    data-aos-delay={300}
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#d9823f] text-white">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">Expertly Engineered</h3>
                    <p className="text-gray-600">Certified design for precision corrosion prevention by certified specialists.</p>
                  </div>
                  
                  <div
                    className="rounded-lg border border-gray-200 p-6 shadow-sm"
                    data-aos="fade-up"
                    data-aos-delay={450}
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#d9823f] text-white">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">Fully Compliant</h3>
                    <p className="text-gray-600">Meets BS EN 12696 performance requirements for industry standards.</p>
                  </div>
                  
                  <div
                    className="rounded-lg border border-gray-200 p-6 shadow-sm"
                    data-aos="fade-up"
                    data-aos-delay={600}
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#d9823f] text-white">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">Cost-Effective</h3>
                    <p className="text-gray-600">Delivers unmatched reliability while cutting installation time and expenses.</p>
                  </div>
                  
                  <div
                    className="rounded-lg border border-gray-200 p-6 shadow-sm"
                    data-aos="fade-up"
                    data-aos-delay={750}
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#d9823f] text-white">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">100% Plug & Play</h3>
                    <p className="text-gray-600">Just embed in concrete, connect, and let Ioncrete™ do the rest.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Image */}
            <div
              className="flex items-center justify-center"
              data-aos="fade-left"
              data-aos-delay={300}
            >
              <div className="relative group">
                {/* Main Container with 3D Effect */}
                <div className="relative h-[500px] w-full max-w-lg rounded-3xl bg-gradient-to-br from-[#d9823f]/20 via-[#d9823f]/10 to-white p-8 shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl">
                  {/* Animated Background Elements */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#d9823f]/5 via-transparent to-[#d9823f]/10" />
                  <div className="absolute -top-4 -right-4 h-32 w-32 rounded-full bg-gradient-to-br from-[#d9823f]/30 to-transparent blur-xl animate-pulse" />
                  <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-gradient-to-tr from-[#d9823f]/20 to-transparent blur-lg animate-pulse delay-1000" />
                  
                  {/* Floating Elements */}
                  <div className="absolute top-6 right-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm shadow-lg">
                      <svg className="h-6 w-6 text-[#d9823f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-6 left-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d9823f]/20 backdrop-blur-sm">
                      <svg className="h-5 w-5 text-[#d9823f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Main Content */}
                  <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
                    {/* Central Icon with Glow Effect */}
                    <div className="relative mb-8">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#d9823f]/40 to-[#d9823f]/20 blur-2xl animate-pulse" />
                      <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#d9823f] to-[#b86a2f] shadow-2xl">
                        <svg className="h-12 w-12 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Product Title */}
                    <h3 className="mb-3 text-2xl font-bold text-gray-800 drop-shadow-sm">
                      Ioncrete™ System
                    </h3>
                    
                    {/* Description */}
                    <p className="mb-6 text-gray-600 leading-relaxed">
                      Advanced cathodic protection technology engineered for maximum efficiency
                    </p>
                    
                    {/* Feature Pills */}
                    <div className="flex flex-wrap justify-center gap-2">
                      {[
                        { text: "Modular", color: "bg-[#d9823f]/10 text-[#d9823f]" },
                        { text: "Smart", color: "bg-blue-500/10 text-blue-600" },
                        { text: "Cost-Effective", color: "bg-green-500/10 text-green-600" }
                      ].map((pill, index) => (
                        <span
                          key={index}
                          className={`rounded-full px-3 py-1 text-xs font-medium backdrop-blur-sm ${pill.color}`}
                        >
                          {pill.text}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Decorative Lines */}
                  <div className="absolute top-1/2 left-0 h-px w-8 bg-gradient-to-r from-transparent to-[#d9823f]/30" />
                  <div className="absolute top-1/2 right-0 h-px w-8 bg-gradient-to-l from-transparent to-[#d9823f]/30" />
                  <div className="absolute left-1/2 top-0 h-8 w-px bg-gradient-to-b from-transparent to-[#d9823f]/30" />
                  <div className="absolute left-1/2 bottom-0 h-8 w-px bg-gradient-to-t from-transparent to-[#d9823f]/30" />
                </div>
                
                {/* Floating Stats */}
                <div className="absolute -top-4 -left-4 rounded-lg bg-white/90 backdrop-blur-sm p-3 shadow-lg">
                  <div className="text-center">
                    <div className="text-lg font-bold text-[#d9823f]">100%</div>
                    <div className="text-xs text-gray-600">Plug & Play</div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -right-4 rounded-lg bg-white/90 backdrop-blur-sm p-3 shadow-lg">
                  <div className="text-center">
                    <div className="text-lg font-bold text-[#d9823f]">BS EN</div>
                    <div className="text-xs text-gray-600">12696 Compliant</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center pb-12 md:pb-16">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-[#d9823f]/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-[#d9823f]/50">
              <span className="inline-flex bg-linear-to-r from-[#d9823f] to-[#d9823f] bg-clip-text text-transparent">
                Key Features
              </span>
            </div>
            <h2
              className="mb-6 text-3xl font-bold md:text-4xl"
              data-aos="fade-up"
            >
              Built for Durability & Ease
            </h2>
            <p
              className="mx-auto max-w-3xl text-lg text-gray-600"
              data-aos="fade-up"
              data-aos-delay={150}
            >
              Our modular system is designed to provide maximum protection with minimal complexity
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "🔧",
                title: "Minimal Welding",
                description: "Reduced installation complexity and time"
              },
              {
                icon: "🔒",
                title: "Hydraulically & Hermetically Sealed",
                description: "Maximum protection against environmental factors"
              },
              {
                icon: "⚡",
                title: "Pre-Configured & Ready",
                description: "Quick deployment with minimal setup"
              },
              {
                icon: "📊",
                title: "Uniform Current Distribution",
                description: "Consistent protection across entire structure"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="rounded-lg bg-white p-6 shadow-sm"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="mb-4 text-3xl">{feature.icon}</div>
                <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#d9823f]/5 via-transparent to-[#d9823f]/10" />
        <div className="absolute top-20 left-10 h-32 w-32 rounded-full bg-gradient-to-br from-[#d9823f]/20 to-transparent blur-2xl animate-pulse" />
        <div className="absolute bottom-20 right-10 h-24 w-24 rounded-full bg-gradient-to-tl from-[#d9823f]/15 to-transparent blur-xl animate-pulse delay-1000" />
        
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center pb-12 md:pb-16">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-[#d9823f]/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-[#d9823f]/50">
              <span className="inline-flex bg-linear-to-r from-[#d9823f] to-[#d9823f] bg-clip-text text-transparent">
                How It Works
              </span>
            </div>
            <h2
              className="mb-6 text-3xl font-bold md:text-4xl"
              data-aos="fade-up"
            >
              Simple, Powerful Protection
            </h2>
            <p
              className="mx-auto max-w-3xl text-lg text-gray-600"
              data-aos="fade-up"
              data-aos-delay={150}
            >
              Our advanced workflow ensures maximum protection with minimal complexity
            </p>
          </div>
          
          {/* Enhanced Process Steps */}
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#d9823f]/30 via-[#d9823f]/50 to-[#d9823f]/30 hidden lg:block" />
            
            <div className="grid gap-8 lg:grid-cols-4">
              {[
                {
                  icon: "🛡️",
                  title: "Stops Corrosion Before It Starts",
                  description: "Advanced thermodynamic protection for steel-reinforced concrete",
                  color: "from-blue-500 to-blue-600",
                  bgColor: "from-blue-500/10 to-blue-600/10",
                  delay: 0
                },
                {
                  icon: "⚡",
                  title: "AC-Powered Efficiency",
                  description: "Easy to operate with standard power supply requirements",
                  color: "from-[#d9823f] to-[#b86a2f]",
                  bgColor: "from-[#d9823f]/10 to-[#b86a2f]/10",
                  delay: 200
                },
                {
                  icon: "👷",
                  title: "No Specialized Labor Needed",
                  description: "Installed quickly by regular technicians without special training",
                  color: "from-green-500 to-green-600",
                  bgColor: "from-green-500/10 to-green-600/10",
                  delay: 400
                },
                {
                  icon: "🔌",
                  title: "100% Plug & Play",
                  description: "Just embed in concrete, connect, and let Ioncrete™ do the rest",
                  color: "from-purple-500 to-purple-600",
                  bgColor: "from-purple-500/10 to-purple-600/10",
                  delay: 600
                }
              ].map((step, index) => (
                <div
                  key={index}
                  className="group relative"
                  data-aos="fade-up"
                  data-aos-delay={step.delay}
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-r from-[#d9823f] to-[#b86a2f] text-white font-bold text-sm shadow-lg">
                    {index + 1}
                  </div>
                  
                  {/* Main Card */}
                  <div className="relative rounded-2xl bg-gradient-to-br from-white via-white to-gray-50/50 p-6 shadow-xl backdrop-blur-sm border border-gray-200/50 transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:-translate-y-2">
                    {/* Card Background Glow */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    {/* Icon Container */}
                    <div className="relative mb-6 flex justify-center">
                      <div className={`relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl`}>
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent" />
                        <span className="relative text-2xl drop-shadow-sm">{step.icon}</span>
                      </div>
                      {/* Icon Glow Effect */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                    </div>
                    
                    {/* Content */}
                    <div className="relative">
                      <h3 className="mb-3 text-lg font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                        {step.description}
                      </p>
                    </div>
                    
                    {/* Hover Border Effect */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  </div>
                  
                  {/* Arrow Connector (Desktop Only) */}
                  {index < 3 && (
                    <div className="absolute -right-4 top-1/2 hidden h-8 w-8 -translate-y-1/2 transform lg:flex items-center justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#d9823f]/20 to-[#b86a2f]/20 blur-sm" />
                        <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-[#d9823f] to-[#b86a2f] shadow-lg">
                          <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Bottom Decorative Element */}
            <div className="mt-12 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#d9823f]/20 to-[#b86a2f]/20 blur-lg" />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#d9823f] to-[#b86a2f] shadow-lg">
                  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <Cta />
      {/* Sticky Actions */}
      <StickyActions />
    </>
  );
}