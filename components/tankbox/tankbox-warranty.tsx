import Image from "next/image";
import Stripes from "@/public/images/stripes-dark.svg";

const warrantyFeatures = [
  {
    title: "5 Year Standard Warranty",
    description: "Comprehensive coverage on all system components and performance guarantees.",
    icon: "🛡️"
  },
  {
    title: "Field Proven Reliability",
    description: "Over 10 years of successful deployment with documented performance history.",
    icon: "📊"
  },
  {
    title: "Certified Specialist Support",
    description: "Expert technical support from certified cathodic protection specialists.",
    icon: "👨‍💼"
  },
  {
    title: "Quality Assurance",
    description: "Manufactured to international standards with rigorous quality control.",
    icon: "🏭"
  }
];

export default function TankboxWarranty() {
  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-[#f3f3f3]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-[#000000] md:text-4xl mb-4">
              Warranty & Support
            </h2>
            <p className="text-lg text-gray-600">
              Trust in our commitment to quality and long-term performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Warranty Content */}
            <div>
              <div className="bg-[#d9823f] text-white rounded-2xl p-8 mb-8">
                <h3 className="text-3xl font-bold mb-4">5 Year Warranty</h3>
                <p className="text-lg opacity-90">
                  Every Tankbox system comes with our comprehensive 5-year warranty, 
                  ensuring your investment is protected and your tanks remain corrosion-free.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">🛡️</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      5 Year Standard Warranty
                    </h4>
                    <p className="text-sm text-gray-600">Comprehensive coverage on all system components and performance guarantees.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-2xl">📊</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Field Proven Reliability
                    </h4>
                    <p className="text-sm text-gray-600">Over 10 years of successful deployment with documented performance history.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-2xl">👨‍💼</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Certified Specialist Support
                    </h4>
                    <p className="text-sm text-gray-600">Expert technical support from certified cathodic protection specialists.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Warranty Visual */}
            <div className="text-center">
              <div className="relative">
                <div className="w-64 h-64 mx-auto bg-gradient-to-br from-[#d9823f]/20 to-[#d9823f]/5 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🛡️</div>
                    <div className="text-4xl font-bold text-[#d9823f] mb-2">5</div>
                    <div className="text-lg font-semibold text-gray-800">Years</div>
                    <div className="text-sm text-gray-600">Warranty</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Ready to Protect Your Investment?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Contact our certified specialists today to learn more about the Tankbox system 
                and how it can provide reliable corrosion protection for your underground storage tanks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-[#d9823f] text-white rounded-lg font-semibold hover:bg-[#d9823f]/90 transition-colors">
                  Request Quote
                </button>
                <button className="px-8 py-3 border border-[#d9823f] text-[#d9823f] rounded-lg font-semibold hover:bg-[#d9823f]/10 transition-colors">
                  Download Datasheet
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 