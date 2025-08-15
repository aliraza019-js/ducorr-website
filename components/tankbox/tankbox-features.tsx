"use client";

import { useState } from "react";
import Image from "next/image";
import Stripes from "@/public/images/stripes-dark.svg";
import TankboxImage1 from "@/public/images/tankbox/tankbox1.webp";

const features = [
  {
    id: 1,
    title: "High Potential Magnesium Anodes",
    description: "Premium quality magnesium anodes designed for maximum corrosion protection efficiency and extended service life.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Built-in Reference Electrodes",
    description: "Integrated reference electrodes for accurate monitoring and assessment of protection levels without external equipment.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Structure to Cable Connection",
    description: "Robust connection system ensuring reliable electrical continuity between the protection system and tank structure.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    )
  },
  {
    id: 4,
    title: "Power and Control Box",
    description: "Advanced control system with monitoring capabilities and power management for optimal protection performance.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    )
  }
];

export default function TankboxFeatures() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-[#f3f3f3]">
      {/* Stripes illustration */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={Stripes}
          width={768}
          height={432}
          alt="Stripes"
        />
      </div>
      
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-[#000000] md:text-4xl mb-4">
              Advanced Protection Technology
            </h2>
            <p className="text-lg text-gray-600">
              The Tankbox system incorporates cutting-edge components designed for maximum reliability and performance
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Feature List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    activeFeature === index
                      ? 'bg-[#d9823f] text-white shadow-lg transform scale-105'
                      : 'bg-white hover:bg-[#d9823f]/5 hover:shadow-md'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 ${activeFeature === index ? 'text-white' : 'text-[#d9823f]'}`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                      <p className={`text-sm leading-relaxed ${
                        activeFeature === index ? 'text-white/90' : 'text-gray-600'
                      }`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Feature Visualization with Tankbox Image */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <div className="bg-gradient-to-br from-[#d9823f]/20 to-[#d9823f]/5 rounded-2xl p-6 shadow-xl">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 mx-auto mb-3 bg-[#d9823f] rounded-full flex items-center text-white justify-center">
                      {features[activeFeature].icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {features[activeFeature].title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {features[activeFeature].description}
                    </p>
                  </div>
                  
                  {/* Tankbox Image */}
                  <div className="relative rounded-xl overflow-hidden h-48">
                    <Image
                      src={TankboxImage1}
                      alt="Tankbox System Features"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#d9823f]/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 