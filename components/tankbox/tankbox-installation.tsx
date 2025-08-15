import Image from "next/image";
import Stripes from "@/public/images/stripes-dark.svg";
import TankboxImage2 from "@/public/images/tankbox/tankbox2.webp";

const installationSteps = [
  {
    step: 1,
    title: "Site Preparation",
    description: "Prepare the installation area and ensure proper access to the tank location.",
    icon: "🔧"
  },
  {
    step: 2,
    title: "System Placement",
    description: "Position the pre-assembled Tankbox system in the designated location.",
    icon: "📍"
  },
  {
    step: 3,
    title: "Connection Setup",
    description: "Connect the structure to cable system and power control box.",
    icon: "🔌"
  },
  {
    step: 4,
    title: "Verification",
    description: "Verify system operation and protection levels using built-in reference electrodes.",
    icon: "✅"
  }
];

export default function TankboxInstallation() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-[#000000] md:text-4xl mb-4">
              Simple & Fast Installation
            </h2>
            <p className="text-lg text-gray-600">
              The Tankbox system is designed for quick deployment with minimal complexity
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Installation Steps */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#d9823f] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    Site Preparation
                  </h3>
                  <p className="text-gray-600">Prepare the installation area and ensure proper access to the tank location.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#d9823f] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    System Placement
                  </h3>
                  <p className="text-gray-600">Position the pre-assembled Tankbox system in the designated location.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#d9823f] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    Connection Setup
                  </h3>
                  <p className="text-gray-600">Connect the structure to cable system and power control box.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#d9823f] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    Verification
                  </h3>
                  <p className="text-gray-600">Verify system operation and protection levels using built-in reference electrodes.</p>
                </div>
              </div>
            </div>

            {/* Installation Visual with Tankbox Image */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-[#d9823f]/20 to-[#d9823f]/5 rounded-2xl p-6 shadow-xl">
                <div className="text-4xl mb-4">⏱️</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  20-40 Minutes
                </h3>
                <p className="text-gray-600 mb-4">
                  Total installation time for a 7080L tank
                </p>
                
                {/* Tankbox Image */}
                <div className="relative rounded-xl overflow-hidden mb-4 h-48">
                  <Image
                    src={TankboxImage2}
                    alt="Tankbox Installation"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#d9823f]/20 to-transparent"></div>
                </div>
                
                <div className="text-sm text-[#d9823f] font-semibold">
                  No complex assembly required
                </div>
              </div>
            </div>
          </div>

          {/* Key Installation Benefits */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="font-semibold text-gray-800 mb-2">Ready to Deploy</h3>
              <p className="text-sm text-gray-600">Factory assembled and tested</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-semibold text-gray-800 mb-2">Quick Setup</h3>
              <p className="text-sm text-gray-600">Minimal installation time</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="font-semibold text-gray-800 mb-2">Secure Connection</h3>
              <p className="text-sm text-gray-600">Reliable electrical continuity</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 