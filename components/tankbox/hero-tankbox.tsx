import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import Stripes from "@/public/images/stripes-dark.svg";
import TankboxImage1 from "@/public/images/tankbox/tankbox1.webp";
import TankboxImage2 from "@/public/images/tankbox/tankbox2.webp";

export default function HeroTankbox() {
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
                Galvanic Cathodic Protection System
              </span>
            </div>
            
            <h1
              className="mb-6 text-5xl font-bold text-[#000000] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Tankbox
            </h1>
            
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-gray-700 leading-relaxed"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Advanced galvanic cathodic protection system for underground storage tanks. 
                Designed by certified specialists with proven 10+ year field performance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                data-aos="zoom-y-out"
                data-aos-delay={450}
              >
                <div className="flex items-center gap-2 text-[#d9823f] font-semibold">
                  <div className="w-3 h-3 bg-[#d9823f] rounded-full"></div>
                  <span>5 or 10 Year Anode Service Life</span>
                </div>
                <div className="flex items-center gap-2 text-[#d9823f] font-semibold">
                  <div className="w-3 h-3 bg-[#d9823f] rounded-full"></div>
                  <span>20-40 Min Installation</span>
                </div>
                <div className="flex items-center gap-2 text-[#d9823f] font-semibold">
                  <div className="w-3 h-3 bg-[#d9823f] rounded-full"></div>
                  <span>5 Year Warranty</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Hero images - using actual Tankbox images */}
          <div className="mx-auto max-w-5xl" data-aos="zoom-y-out" data-aos-delay={600}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl h-64">
                <Image
                  src={TankboxImage1}
                  alt="Tankbox System - Front View"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold">Tankbox System</h3>
                  <p className="text-white/80 text-sm">Underground Storage Tank Protection</p>
                </div>
              </div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-xl h-64">
                <Image
                  src={TankboxImage2}
                  alt="Tankbox System - Technical View"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold">Advanced Technology</h3>
                  <p className="text-white/80 text-sm">Built-in Monitoring & Control</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 