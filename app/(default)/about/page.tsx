"use client";

import HeroAbout from "@/app/(default)/about/hero-about";
import SpotlightCard from "@/components/ui/spotlight-card";
import Stripes from "@/public/images/stripes-dark.svg";
import Image from "next/image";
import Cta from "@/components/cta";
import Podcast from "./podcast";
import StickyActions from "@/components/StickyActions";
import DreamVisionMission from "./dream-vision-mission";
import Icon from "@mdi/react";
import { mdiTarget, mdiChartLine, mdiPalette, mdiMessageText, mdiOfficeBuilding, mdiEarth, mdiStar } from "@mdi/js";

export default function AboutPage() {
  const timeline = [
    {
      label: "Priority",
      title: "Prioritize systems thinking in everything we do.",
      desc: "We believe great results come from organized systems - not just people.",
      icon: mdiTarget,
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-500/10 to-blue-600/10",
    },
    {
      label: "Process",
      title: "Track progress with data, metrics, and measurable outcomes.",
      desc: "We use data to ensure our work is effective and transparent.",
      icon: mdiChartLine,
      color: "from-[#d9823f] to-[#b86a2f]",
      bgColor: "from-[#d9823f]/10 to-[#b86a2f]/10",
    },
    {
      label: "Design",
      title: "We design workflows that eliminate chaos and promote clarity.",
      desc: "Our workflows are built to reduce disorder and increase focus.",
      icon: mdiPalette,
      color: "from-green-500 to-green-600",
      bgColor: "from-green-500/10 to-green-600/10",
    },
  ];

  return (
    <>
      <HeroAbout />
      {/* <SpotlightCard
        image="/images/about/ducorr-office.jpeg"
        alt="Spotlight 1"
        title="Why, What & Where"
        description="We promise that we will be responsive to your needs. We promise that we exert all efforts to meet our mutually agreed deadlines. We promise that you will have a consistent experience with us, time & time again."
      /> */}

      {/* Dream, Vision, Mission Sections - Modern Redesign */}
      <DreamVisionMission />

      {/* How We Work Timeline Section */}
      <section className="relative mt-20 mb-16 mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-3 pb-3 mb-4 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-[#d9823f]/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-[#d9823f]/50">
            <span className="text-xl font-semibold text-[var(--color-primary)] uppercase tracking-wider">
              How We Work
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            A System-First Philosophy
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our approach is built on organized systems that deliver consistent, measurable results.
          </p>
        </div>

        {/* Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {timeline.map((item, index) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              data-aos="zoom-y-out"
              data-aos-delay={index * 100}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Icon path={item.icon} size={1.5} className={`text-gradient-to-br ${item.color} bg-clip-text text-transparent`} style={{ color: `var(--color-primary)` }} />
              </div>
              <div className="mb-2 text-xs uppercase tracking-wide text-[var(--color-primary)] font-semibold">{item.label}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#d9823f]/5 to-[#d9823f]/10 rounded-2xl p-8 md:p-12 border border-[#d9823f]/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#d9823f]/5 rounded-full -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#d9823f]/5 rounded-full translate-x-20 translate-y-20"></div>
            <div className="relative">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Icon path={mdiMessageText} size={2} className="text-[#d9823f]" />
                </div>
                <blockquote className="text-lg md:text-xl italic text-gray-700 leading-relaxed">
                  "People cannot be organized. Only the work can be organized. All attempts to organize people instead of their work lead to disorder."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Purpose Section */}
      <section className={`relative mt-20 mb-16 before:absolute before:inset-0 before:-z-20 before:bg-[#f3f3f3]`}>
        {/* Stripes illustration (default) or custom background */}
        <div
          className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={Stripes}
            width={768}
            height={432}
            alt="Background"
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          <div className="py-12 md:py-20">
            {/* Section header */}
            <div className="mx-auto max-w-3xl pb-12 md:pb-16 text-center">
              <div className="inline-flex items-center gap-3 pb-3 mb-4 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-[#d9823f]/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-[#d9823f]/50">
                <span className="text-xl font-semibold text-[var(--color-primary)] uppercase tracking-wider">
                  Why It Matters
                </span>
              </div>
              <h2 className="mb-6 text-3xl md:text-4xl font-bold text-gray-900">
                Our purpose goes beyond engineering.
              </h2>
              <p className="text-lg text-gray-600">
                We create solutions that make a measurable impact on infrastructure longevity and resource conservation.
              </p>
            </div>
            
            {/* Two-column layout with enhanced design */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left column - Content with modern cards */}
              <div className="space-y-6">
                <div 
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                  data-aos="slide-right"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#d9823f]/10 to-[#b86a2f]/10 rounded-xl flex items-center justify-center">
                      <Icon path={mdiOfficeBuilding} size={1.5} className="text-[#d9823f]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">Measurable Impact</h3>
                      <p className="text-gray-600 leading-relaxed">
                        We create solutions that make a measurable impact on infrastructure longevity.
                      </p>
                    </div>
                  </div>
                </div>

                <div 
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                  data-aos="slide-right"
                  data-aos-delay={100}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#d9823f]/10 to-[#b86a2f]/10 rounded-xl flex items-center justify-center">
                      <Icon path={mdiEarth} size={1.5} className="text-[#d9823f]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">Resource Protection</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Every cathodic protection system we develop helps reduce the need to extract more iron from the earth, protecting a non-renewable resource.
                      </p>
                    </div>
                  </div>
                </div>

                <div 
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                  data-aos="slide-right"
                  data-aos-delay={200}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#d9823f]/10 to-[#b86a2f]/10 rounded-xl flex items-center justify-center">
                      <Icon path={mdiStar} size={1.5} className="text-[#d9823f]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">Meaningful Difference</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Our work gives us the opportunity to make a meaningful, lasting difference in the world.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right column - Image with enhanced styling */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#d9823f]/20 to-transparent rounded-2xl transform rotate-3"></div>
                  <div 
                    className="relative rounded-2xl overflow-hidden shadow-2xl"
                    data-aos="slide-left"
                  >
                  <Image
                    src="/images/about/whyitmatters.jpeg"
                    alt="Our Purpose"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Podcast Section */}
      <Podcast />
      {/* CTA Section */}
      <Cta />
      {/* Sticky Actions Section */}
      <StickyActions />

    </>
  );
} 
