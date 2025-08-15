"use client";

import { useState } from "react";
import Image from "next/image";
import Stripes from "@/public/images/stripes-dark.svg";

const benefits = [
  {
    id: 1,
    title: "Rapid Installation",
    description: "Complete system installation in just 20-40 minutes for a 7080L tank, minimizing downtime and labor costs.",
    icon: "⚡",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 2,
    title: "Factory Ready",
    description: "Pre-assembled and tested at the factory, eliminating on-site assembly errors and ensuring consistent quality.",
    icon: "🏭",
    color: "from-green-500 to-green-600"
  },
  {
    id: 3,
    title: "Proven Performance",
    description: "Over 10 years of successful field deployment with documented reliability and protection effectiveness.",
    icon: "✅",
    color: "from-[#d9823f] to-[#d9823f]"
  },
  {
    id: 4,
    title: "Certified Design",
    description: "Engineered by certified specialists following international standards for maximum safety and compliance.",
    icon: "🏆",
    color: "from-purple-500 to-purple-600"
  }
];

export default function TankboxBenefits() {
  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-[#f3f3f3]">
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
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-[#000000] md:text-4xl mb-4">
              Why Choose Tankbox?
            </h2>
            <p className="text-lg text-gray-600">
              Experience the advantages of a system designed for efficiency, reliability, and peace of mind
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative p-6 rounded-xl text-center bg-white shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-2xl text-white">
                ⚡
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Rapid Installation
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Complete system installation in just 20-40 minutes for a 7080L tank.
              </p>
            </div>
            
            <div className="relative p-6 rounded-xl text-center bg-white shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-2xl text-white">
                🏭
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Factory Ready
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Pre-assembled and tested at the factory, eliminating on-site assembly errors.
              </p>
            </div>
            
            <div className="relative p-6 rounded-xl text-center bg-white shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#d9823f] to-[#d9823f] flex items-center justify-center text-2xl text-white">
                ✅
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Proven Performance
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Over 10 years of successful field deployment with documented reliability.
              </p>
            </div>
            
            <div className="relative p-6 rounded-xl text-center bg-white shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-2xl text-white">
                🏆
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Certified Design
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Engineered by certified specialists following international standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 