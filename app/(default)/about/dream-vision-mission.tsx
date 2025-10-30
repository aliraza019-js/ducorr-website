"use client";

import Icon from "@mdi/react";
import { mdiEarth, mdiKeyboard, mdiLaptop, mdiCheckCircle, mdiLightningBolt, mdiFileDocument, mdiPencil } from "@mdi/js";

export default function DreamVisionMission() {
  return (
    <section className="mt-20 mb-16 mx-auto max-w-7xl px-4 sm:px-6">
      {/* Section Header */}
      <div className="text-center mb-12 animate-fade-in">
        <div className="inline-flex items-center gap-3 pb-3 mb-4 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-[#d9823f]/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-[#d9823f]/50">
          <span className="text-xl font-semibold text-[var(--color-primary)] uppercase tracking-wider">
            Our Foundation
          </span>
        </div>
      </div>

      {/* My Dream Section - Dark Panel with Feature Grid */}
      <div className="mb-20 bg-gray-100 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left - Large Dark Panel */}
          <div className="lg:col-span-2 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)] flex items-center justify-center">
                <Icon path={mdiEarth} size={1.2} className="text-white" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">My Dream</h3>
                <p className="text-xs text-gray-400">This is what is in my Head!</p>
              </div>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
              To eliminate corrosion of embedded steel in the world
            </h2>
            
            <p className="text-sm text-gray-300 leading-relaxed mb-6">
              Our mission is to create solutions that make a measurable impact on infrastructure longevity. Every cathodic protection system we develop helps reduce the need to extract more iron from the earth, protecting a non-renewable resource.
            </p>
          </div>

          {/* Right - 2x2 Feature Grid */}
          <div className="lg:col-span-1 grid grid-cols-2 gap-4">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-5 flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/30 flex items-center justify-center mb-3">
                <Icon path={mdiCheckCircle} size={1.1} className="text-[var(--color-primary)]" />
              </div>
              <h4 className="text-sm font-bold text-white mb-2">Global Impact</h4>
              <p className="text-xs text-gray-400 leading-relaxed">Gives me reason to know I impact the world</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-5 flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/30 flex items-center justify-center mb-3">
                <Icon path={mdiLightningBolt} size={1.1} className="text-[var(--color-primary)]" />
              </div>
              <h4 className="text-sm font-bold text-white mb-2">Resource Protection</h4>
              <p className="text-xs text-gray-400 leading-relaxed">Preserving finite Iron ore resources</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-5 flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/30 flex items-center justify-center mb-3">
                <Icon path={mdiFileDocument} size={1.1} className="text-[var(--color-primary)]" />
              </div>
              <h4 className="text-sm font-bold text-white mb-2">Sustainable Future</h4>
              <p className="text-xs text-gray-400 leading-relaxed">Reducing extraction through innovation</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-5 flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/30 flex items-center justify-center mb-3">
                <Icon path={mdiPencil} size={1.1} className="text-[var(--color-primary)]" />
              </div>
              <h4 className="text-sm font-bold text-white mb-2">Long-term Vision</h4>
              <p className="text-xs text-gray-400 leading-relaxed">Building lasting infrastructure solutions</p>
            </div>
          </div>
        </div>
      </div>

      {/* My Vision Section - Dark Panel with Feature Grid */}
      <div className="mb-20 bg-gray-100 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left - Large Dark Panel */}
          <div className="lg:col-span-2 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)] flex items-center justify-center">
                <Icon path={mdiLaptop} size={1.2} className="text-white" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">My Vision</h3>
                <p className="text-xs text-gray-400">This is the <span className="underline">form</span> the company will take</p>
              </div>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
              To do for Cathodic protection engineering,{" "}
              <span className="text-[var(--color-primary)]">what Microsoft did</span> for the world of document management
            </h2>
            
            <p className="text-sm text-gray-300 leading-relaxed mb-6">
              We envision making cathodic protection as ubiquitous and easy to use as modern software. Our systems will be accessible, intuitive, and seamlessly integrated into infrastructure projects worldwide.
            </p>
          </div>

          {/* Right - 2x2 Feature Grid */}
          <div className="lg:col-span-1 grid grid-cols-2 gap-4">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-5 flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/30 flex items-center justify-center mb-3">
                <Icon path={mdiCheckCircle} size={1.1} className="text-[var(--color-primary)]" />
              </div>
              <h4 className="text-sm font-bold text-white mb-2">Ubiquitous Adoption</h4>
              <p className="text-xs text-gray-400 leading-relaxed">Using CP becomes standard practice</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-5 flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/30 flex items-center justify-center mb-3">
                <Icon path={mdiLightningBolt} size={1.1} className="text-[var(--color-primary)]" />
              </div>
              <h4 className="text-sm font-bold text-white mb-2">Simple Integration</h4>
              <p className="text-xs text-gray-400 leading-relaxed">Easy to use, install and run</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-5 flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/30 flex items-center justify-center mb-3">
                <Icon path={mdiKeyboard} size={1.1} className="text-[var(--color-primary)]" />
              </div>
              <h4 className="text-sm font-bold text-white mb-2">Vintage Innovation</h4>
              <p className="text-xs text-gray-400 leading-relaxed">The foundation of progress</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-5 flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/30 flex items-center justify-center mb-3">
                <Icon path={mdiLaptop} size={1.1} className="text-[var(--color-primary)]" />
              </div>
              <h4 className="text-sm font-bold text-white mb-2">Modern Accessibility</h4>
              <p className="text-xs text-gray-400 leading-relaxed">Technology for everyone</p>
            </div>
          </div>
        </div>
      </div>

      {/* My Mission Section - Dark Panel with Feature Grid */}
      <div className="bg-gray-100 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left - Large Dark Panel */}
          <div className="lg:col-span-2 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)] flex items-center justify-center">
                <Icon path={mdiCheckCircle} size={1.2} className="text-white" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">My Mission</h3>
                <p className="text-xs text-gray-400">What we must create to succeed</p>
              </div>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
              To re-engineer cathodic protection systems & products to make it{" "}
              <span className="text-[var(--color-primary)] font-extrabold">10X</span> easier to buy, install & run so that its use becomes ubiquitous.
            </h2>
            
            <p className="text-sm text-gray-300 leading-relaxed mb-6">
              Simplicity is the ultimate sophistication. We're making complex protection systems as accessible as everyday technology, ensuring widespread adoption and long-term infrastructure protection.
            </p>
            
            {/* CTA Button */}
            <button className="bg-gradient-to-r from-[var(--color-primary)] to-[#efb08e] text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all flex items-center gap-2">
              Learn More About Our Mission
              <span className="text-lg">→</span>
            </button>
          </div>

          {/* Right - 2x2 Feature Grid */}
          <div className="lg:col-span-1 grid grid-cols-2 gap-4">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-5 flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/30 flex items-center justify-center mb-3">
                <Icon path={mdiLightningBolt} size={1.1} className="text-[var(--color-primary)]" />
              </div>
              <h4 className="text-sm font-bold text-white mb-2">10X Easier</h4>
              <p className="text-xs text-gray-400 leading-relaxed">Simplified installation process</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-5 flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/30 flex items-center justify-center mb-3">
                <Icon path={mdiCheckCircle} size={1.1} className="text-[var(--color-primary)]" />
              </div>
              <h4 className="text-sm font-bold text-white mb-2">Widespread Use</h4>
              <p className="text-xs text-gray-400 leading-relaxed">Becoming ubiquitous in industry</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-5 flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/30 flex items-center justify-center mb-3">
                <Icon path={mdiFileDocument} size={1.1} className="text-[var(--color-primary)]" />
              </div>
              <h4 className="text-sm font-bold text-white mb-2">Easy to Buy</h4>
              <p className="text-xs text-gray-400 leading-relaxed">Streamlined purchasing process</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-5 flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/30 flex items-center justify-center mb-3">
                <Icon path={mdiPencil} size={1.1} className="text-[var(--color-primary)]" />
              </div>
              <h4 className="text-sm font-bold text-white mb-2">Simple to Run</h4>
              <p className="text-xs text-gray-400 leading-relaxed">User-friendly operation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
