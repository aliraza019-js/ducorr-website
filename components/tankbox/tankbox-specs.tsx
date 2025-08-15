import Image from "next/image";
import Stripes from "@/public/images/stripes-dark.svg";

const specifications = [
  {
    category: "Design Standards",
    items: [
      "AMPP (NACE) SP0285 - Corrosion Control of Underground Storage Tank Systems by Cathodic Protection",
      "UAE Civil Defense Code – Section 11 - Liquefied Petroleum Gas Code of Practice"
    ]
  },
  {
    category: "Service Life",
    items: [
      "5 Year Anode Service Life Option",
      "10 Year Anode Service Life Option"
    ]
  },
  {
    category: "Installation",
    items: [
      "Factory manufactured ready for immediate installation",
      "7080L tank installation time: 20-40 minutes only",
      "No anode to tank direct connections required"
    ]
  },
  {
    category: "Performance",
    items: [
      "10+ years successful field history",
      "High potential magnesium anodes",
      "Built-in reference electrodes for monitoring"
    ]
  }
];

const complianceBadges = [
  {
    name: "AMPP (NACE) SP0285",
    description: "Corrosion Control Standards",
    color: "bg-blue-100 text-blue-800"
  },
  {
    name: "UAE Civil Defense",
    description: "LPG Code Compliance",
    color: "bg-green-100 text-green-800"
  },
  {
    name: "Certified Specialist",
    description: "Design & Manufacturing",
    color: "bg-[#d9823f]/10 text-[#d9823f]"
  }
];

export default function TankboxSpecs() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-[#000000] md:text-4xl mb-4">
              Technical Specifications & Compliance
            </h2>
            <p className="text-lg text-gray-600">
              Built to the highest industry standards with certified specialist design and manufacturing
            </p>
          </div>

          {/* Compliance Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {complianceBadges.map((badge, index) => (
              <div
                key={badge.name}
                className={`px-6 py-3 rounded-full font-medium ${badge.color}`}
                data-aos="zoom-y-out"
                data-aos-delay={index * 100}
              >
                <div className="font-semibold">{badge.name}</div>
                <div className="text-sm opacity-80">{badge.description}</div>
              </div>
            ))}
          </div>

          {/* Specifications Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {specifications.map((spec, index) => (
              <div
                key={spec.category}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <h3 className="text-xl font-bold text-[#d9823f] mb-4 border-b border-gray-200 pb-2">
                  {spec.category}
                </h3>
                <ul className="space-y-3">
                  {spec.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#d9823f] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-[#d9823f]/10 to-[#d9823f]/5 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Ready for Immediate Deployment
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The Tankbox system comes factory-manufactured and ready for immediate installation. 
                With no complex assembly required and proven field performance, you can trust in 
                reliable protection from day one.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 