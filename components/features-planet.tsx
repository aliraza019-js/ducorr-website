"use client";

import Image from "next/image";
import { useState } from "react";
import PlanetImg from "@/public/images/planet.png";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";
import UAEFlag from "@/public/images/flags/UAE.png";
import QatarFlag from "@/public/images/flags/Qatar.png";
import PakistanFlag from "@/public/images/flags/Pakistan.png";
import IraqFlag from "@/public/images/flags/iraq.png";
import DWC from "@/public/images/keyProjects/dwc.jpg";
import AqabaPort from "@/public/images/keyProjects/aqaba+port.jpg";
import PearlGTL from "@/public/images/keyProjects/pearl-project.jpeg";
import ShellIraq from "@/public/images/keyProjects/sipd.jpg";
import Stripes from "@/public/images/stripes-dark.svg";
const projects = [
  {
    name: "Dubai Water Canal",
    image: DWC,
    description: "The Dubai Water Canal changed the face of Dubai and made history as one of the biggest urban transformation in the world. This canal is 3.2km long waterway."
  },
  {
    name: "Aqaba Port Development",
    image: AqabaPort,
    description: "Ducorr has been the preferred vendor for the design & deployment of cathodic protection for the Aqaba New Port. Ducorr was retained to carry out the detailed design and supply of the cathodic protection system for a combi-wall structure that eventually made up four marine berths. The port configuration consisted of four berths, complete with dry dock facility."
  },
  {
    name: "Pearl project Gas to Liquids",
    image: PearlGTL,
    description: "At one time known as the worlds largest construction site, the Pearl GTL project also included the construction of a number of above ground storage tanks. Ducorr was responsible for the plant wide cathodic protection of all storage tanks. The project was designed & deployed on time & on budget."
  },
  {
    name: "Shell Iraq Development Company",
    image: ShellIraq,
    description: "Ducorr was contracted to design and deploy a Cathodic Protection System for Shell Iraq Petroleum Development (SIPD) to protect its new and existing buried flowlines in Majnoon Oil Field,Iraq. The Majnoon Oil field being development by SIPD has several existing and new buried flowlines and production facilities."
  },
];

export default function FeaturesPlanet() {
  const [hovered, setHovered] = useState<number | null>(null);

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
            <h2 className="text-3xl font-bold text-[#000000] md:text-4xl">
              Key Projects That Define Our Expertise
            </h2>
          </div>
          {/* Interactive Project List */}
          <div className="flex flex-col md:flex-row items-center gap-10 justify-center">
            {/* Project Names List */}
            <div className="flex flex-col gap-4 w-full md:w-1/2">
              {projects.map((project, idx) => (
                <div
                  key={project.name}
                  className={`cursor-pointer p-4 rounded-lg transition-colors duration-200 ${hovered === idx ? 'bg-[#d9823f]/20 text-[#d9823f]' : 'bg-[#d9823f] text-white'}`}
                  onMouseEnter={() => setHovered(idx)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className="font-semibold text-lg">{project.name}</div>
                  <div className="text-sm mt-1 opacity-80">{project.description}</div>
                </div>
              ))}
            </div>
            {/* Preview Image with SVG Overlay Effect */}
            <div className="w-full md:w-1/2 flex justify-center items-center min-h-[220px]">
              <div className="relative inline-flex items-center justify-center" style={{width: 550, height: 350}}>
                {/* Project Image */}
                <Image
                  src={hovered !== null ? projects[hovered].image : projects[0].image}
                  alt={hovered !== null ? projects[hovered].name : projects[0].name}
                  width={500}
                  height={180}
                  className="rounded-[15px] shadow-lg bg-white"
                  style={{
                    objectFit: 'cover',
                    background: '#fff',
                    maskImage: 'radial-gradient(ellipse 120% 90% at 50% 50%, black 80%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 120% 90% at 50% 50%, black 80%, transparent 100%)',
                  }}
                />
                {/* SVG Overlay */}
                <Image
                  src={PlanetOverlayImg}
                  alt="Overlay"
                  width={320}
                  height={180}
                  className="absolute inset-0 w-full h-full rounded-[15px] pointer-events-none"
                  style={{objectFit: 'cover'}}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
