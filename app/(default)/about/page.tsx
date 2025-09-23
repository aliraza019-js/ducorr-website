"use client";

import HeroAbout from "@/app/(default)/about/hero-about";
import SpotlightCard from "@/components/ui/spotlight-card";
import Stripes from "@/public/images/stripes-dark.svg";
import Image from "next/image";
import Cta from "@/components/cta";
import Podcast from "./podcast";
import StickyActions from "@/components/StickyActions";
export default function AboutPage() {
  const timeline = [
    {
      label: "Priority",
      title: "Prioritize systems thinking in everything we do.",
      desc: "We believe great results come from organized systems — not just people.",
    },
    {
      label: "Process",
      title: "Track progress with data, metrics, and measurable outcomes.",
      desc: "We use data to ensure our work is effective and transparent.",
    },
    {
      label: "Design",
      title: "We design workflows that eliminate chaos and promote clarity.",
      desc: "Our workflows are built to reduce disorder and increase focus.",
    },
  ];

  return (
    <>
      <HeroAbout />
      <SpotlightCard
        image="/images/about/ducorr-office.jpeg"
        alt="Spotlight 1"
        title="Why, What & Where"
        description="We promise that we will be responsive to your needs. We promise that we exert all efforts to meet our mutually agreed deadlines. We promise that you will have a consistent experience with us, time & time again."
      />

      {/* How We Work Timeline Section */}
      <section className="mt-16 max-w-2xl mx-auto animate-fade-in">
        <div className="mb-2 text-[var(--color-primary)] font-medium text-base animate-slide-up">How We Work</div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 animate-slide-up animation-delay-200">A System-First Philosophy</h2>
        <ul className="relative pl-8 space-y-4">
          {timeline.map((item, index) => (
            <li key={item.title} className="relative animate-slide-up" style={{ animationDelay: `${(index + 1) * 200}ms` }}>
              {/* Dot */}
              <span className="absolute left-0 top-2 w-3 h-3 rounded-full bg-[var(--color-primary)]"></span>
              <div className="mb-1 pl-5 pt-1 text-xs uppercase tracking-wide text-[var(--color-primary)] font-semibold">{item.label}</div>
              <div className="ml-7 font-bold text-lg text-gray-900 mb-1">{item.title}</div>
              <div className="ml-7 text-gray-400">{item.desc}</div>
            </li>
          ))}
        </ul>
        <blockquote className="mt-12 border-l-4 border-[var(--color-primary)] pl-4 italic text-gray-400 animate-fade-in animation-delay-1000">
          "People cannot be organized. Only the work can be organized. All attempts to organize people instead of their work lead to disorder."
        </blockquote>
      </section>

      {/* Our Purpose Section */}
      <section className={`relative mt-8 before:absolute before:inset-0 before:-z-20 before:bg-[#f3f3f3] animate-fade-in`}>
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
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section header */}
            <div className="mx-auto max-w-3xl pb-12 md:pb-20 text-center">
              <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-[#d9823f]/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-[#d9823f]/50 animate-slide-up">
                <span className="inline-flex bg-linear-to-r from-[#d9823f] to-[#d9823f] bg-clip-text text-transparent">
                  Why It Matters
                </span>
              </div>
              <h2 className="mb-6 border-y text-4xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-4xl animate-slide-up animation-delay-200">
                Our purpose goes beyond engineering.
              </h2>
            </div>
            
            {/* Two-column layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left column - Content */}
              <div className="flex flex-col gap-4 text-left animate-slide-right">
                <ul className="list-disc pl-6 mt-6 space-y-2 text-gray-700">
                  <li className="animate-fade-in animation-delay-300">We create solutions that make a measurable impact on infrastructure longevity.</li>
                  <li className="animate-fade-in animation-delay-500">Every cathodic protection system we develop helps reduce the need to extract more iron from the earth protecting a non-renewable resource.</li>
                  <li className="animate-fade-in animation-delay-700">Our work gives us the opportunity to make a meaningful, lasting difference.</li>
                </ul>
              </div>
              
              {/* Right column - Image */}
              <div className="flex justify-center lg:justify-end animate-slide-left">
                <div className="relative w-full max-w-md">
                  <Image
                    src="/images/about/whyitmatters.jpeg"
                    alt="Our Purpose"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg animate-scale-in"
                  />
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

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes slideRight {
          from { 
            opacity: 0; 
            transform: translateX(-30px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        @keyframes slideLeft {
          from { 
            opacity: 0; 
            transform: translateX(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        @keyframes scaleIn {
          from { 
            opacity: 0; 
            transform: scale(0.9); 
          }
          to { 
            opacity: 1; 
            transform: scale(1); 
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }
        
        .animate-slide-right {
          animation: slideRight 0.8s ease-out forwards;
        }
        
        .animate-slide-left {
          animation: slideLeft 0.8s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.8s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        
        .animation-delay-300 {
          animation-delay: 300ms;
        }
        
        .animation-delay-500 {
          animation-delay: 500ms;
        }
        
        .animation-delay-700 {
          animation-delay: 700ms;
        }
        
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </>
  );
} 