"use client";

import Image from "next/image";
import { useState } from "react";
import ProjectFilters from "./project-filters";

interface Project {
  id: string;
  title: string;
  location: string;
  description: string;
  benefits: string[];
  image?: string;
  industry: string;
  locationCode: string;
}

const projects: Project[] = [
  {
    id: "dubai-water-canal",
    title: "Dubai Water Canal",
    location: "United Arab Emirates",
    locationCode: "uae",
    industry: "infrastructure",
    description: "The Dubai Water Canal changed the face of Dubai and made history as one of the biggest urban transformation in the world. This canal is 3.2km long waterway.",
    benefits: [
      "Maximize Efficiency",
      "Speed up delivery",
      "Extending the life of the asset up to 50 years"
    ],
    image: "/images/projects/Projetcts/05 Project Image - Dubai Water Canal (1).jpg"
  },
  {
    id: "marsa-al-seef",
    title: "Marsa Al Seef",
    location: "United Arab Emirates",
    locationCode: "uae",
    industry: "marine",
    description: "Ducorr deployed the Cathodic protection materials, designed, installed and commissioned for the Marsa Al Seef Marine site project. The proposed development is spread over approximately 1.80km along the Creek and includes generally hotel, retail, marina, underground car park, canal, etc. It covers marine infrastructure and environmental design elements.",
    benefits: [
      "Flexible project team",
      "Easy product application solution",
      "Extending the life of the asset up to 50 years"
    ],
    image: "/images/projects/Projetcts/04 Project Image - Marsa Al Seef.jpg"
  },
  {
    id: "aqaba-port",
    title: "Aqaba Port Development",
    location: "Kingdom of Jordan",
    locationCode: "jordan",
    industry: "marine",
    description: "Ducorr has been the preferred vendor for the design & deployment of cathodic protection for the Aqaba New Port. Ducorr was retained to carry out the detailed design and supply of the cathodic protection system for a combi-wall structure that eventually made up four marine berths. The port configuration consisted of four berths, complete with dry dock facility.",
    benefits: [
      "Professional on their craft",
      "Extending the life of the asset up to 50 years"
    ],
    image: "/images/projects/Projetcts/02 Project Image - Aqaba.JPG"
  },
  {
    id: "adnoc-ras-al-khaimah",
    title: "Abu Dhabi National Oil Company (ADNOC) Distribution",
    location: "UAE",
    locationCode: "uae",
    industry: "oil-gas",
    description: "Ducorr has completed the deployment of corrosion protection systems at an ADNOC project in Ras Al Khaimah. The system provides corrosion protection for up to 30 years. Platepro system was also used in this project, adding that it was installed in less than three hours which represents an estimated 150% time savings compared to standard systems.",
    benefits: [
      "150% time savings compared to standard systems",
      "30 years corrosion protection",
      "Platepro system implementation"
    ],
    image: "/images/projects/Projetcts/07 Project Image - Adnoc .jpg"
  },
  {
    id: "shell-iraq",
    title: "Shell Iraq Development Company",
    location: "Iraq",
    locationCode: "iraq",
    industry: "oil-gas",
    description: "Ducorr was contracted to design and deploy a Cathodic Protection System for Shell Iraq Petroleum Development (SIPD) to protect its new and existing buried flowlines in Majnoon Oil Field, Iraq. The Majnoon Oil field being development by SIPD has several existing and new buried flowlines and production facilities. These flowlines are buried in very corrosive soil and therefore require protection.",
    benefits: [
      "Temporary protection during commissioning",
      "Protection for corrosive soil conditions",
      "Comprehensive flowline protection"
    ]
  },
  {
    id: "emirates-aluminum",
    title: "Emirates Aluminum",
    location: "United Arab Emirates",
    locationCode: "uae",
    industry: "industrial",
    description: "The world's largest aluminum smelting plant chose Ducorr for the complete design and deployment of cathodic protection for its underground fuel and water cooling pipelines as well as the cathodic protection of its storage tanks. The systems involved a temporary cathodic protection system for the pipelines, followed by a distributed discrete impressed current system once permanent power was made available.",
    benefits: [
      "Complete pipeline protection",
      "Storage tank protection",
      "Distributed discrete impressed current system"
    ]
  },
  {
    id: "khor-al-zubair",
    title: "Khor Al Zubair",
    location: "Republic of Iraq",
    locationCode: "iraq",
    industry: "marine",
    description: "The existing import/export terminal of the port Khor Al Zubari positioned at the extreme south of Iraq was constructed in the mid 80s. The rehabilitation program undertaken by the Ministry of Port involved the application of protective coating, followed by the implementation of a cathodic protection system for the steel tubular piles. The system covered the protection of four wharfs.",
    benefits: [
      "Rehabilitation of existing infrastructure",
      "Protection of four wharfs",
      "Steel tubular pile protection"
    ]
  },
  {
    id: "engro-lng",
    title: "Engro Liquefied Natural Gas Project",
    location: "Pakistan",
    locationCode: "pakistan",
    industry: "oil-gas",
    description: "The LNG development taking in the port city of Karachi involved the laying of gas pipelines that shall be tied into the main gas network. Ducorr was retained for the review of the detailed design, followed by the supply of all cathodic protection equipment and the supply of specialist monolithic isolating joints. The project covered the ICCP of two coated high gas pressure gas pipelines approaching 50km in length.",
    benefits: [
      "50km pipeline protection",
      "High gas pressure protection",
      "Specialist monolithic isolating joints"
    ]
  },
  {
    id: "pearl-gtl",
    title: "The Pearl Project Gas to Liquids",
    location: "State of Qatar",
    locationCode: "qatar",
    industry: "oil-gas",
    description: "At one time known as the worlds largest construction site, the Pearl GTL project also included the construction of a number of above ground storage tanks. Ducorr was responsible for the plant wide cathodic protection of all storage tanks. The project was designed & deployed on time & on budget.",
    benefits: [
      "Plant-wide protection",
      "Over thirty storage tanks",
      "On-time and on-budget delivery"
    ]
  },
  {
    id: "dubai-airport",
    title: "Dubai Airport Terminal 3",
    location: "United Arab Emirates",
    locationCode: "uae",
    industry: "aviation",
    description: "The Dubai International Airport has grown to be one of the worlds busiest airports. As part of the durability monitoring of the concrete structure, Ducorr was retained design and install a corrosion monitoring system for the reinforced concrete. The system was installed in select areas of the buried reinforced concrete foundation and shall serve to give an early warning of any early onset of corrosion.",
    benefits: [
      "Early corrosion detection",
      "Reinforced concrete monitoring",
      "Durability monitoring system"
    ],
    image: "/images/projects/Projetcts/01 Project Image - Dubai Airport T3.jpg"
  },
  {
    id: "al-khaleej-gas",
    title: "Al Khaleej Gas Project",
    location: "State of Qatar",
    locationCode: "qatar",
    industry: "oil-gas",
    description: "The State of Qatar is one of the worlds largest gas producers. As part of its strategic development, the construction of LPG tanks to store large quantities of propane & butane formed the back bone of the Al Khaleej gas project. Ducorr carried out the detailed design & supply of the impressed current system for the reinforced concrete foundation raft & associated piles.",
    benefits: [
      "LPG tank protection",
      "Foundation raft protection",
      "Strategic gas infrastructure"
    ]
  },
  {
    id: "banana-island",
    title: "Banana Island by Anantara",
    location: "State of Qatar",
    locationCode: "qatar",
    industry: "marine",
    description: "Anantara Doha Island Resort is an uninhabited offshore island situated approximately 3½ Kilometers from new Doha International Airport (closest main land point) and 11 Kilometers east of Doha City. The project involves the construction, development and operation of a 5-Star island resort property. The island resort incorporates the use of tubular steel piles that support various structures such as villas or walkways. The steel tubular piles suffered premature severe corrosion a shortly after installation. DUCORR has been retained to propose a durability solution using cathodic protection.",
    benefits: [
      "Offshore island protection",
      "Tubular steel pile protection",
      "Durability solution for marine environment"
    ],
    image: "/images/projects/Projetcts/09 Project Image - Banana Island (2).jpg"
  },
  {
    id: "oxagon-terminal-1",
    title: "Oxagon Terminal 1",
    location: "Saudi Arabia",
    locationCode: "saudi-arabia",
    industry: "marine",
    description: "Oxagon Terminal 1 represents a cutting-edge marine infrastructure project in Saudi Arabia's NEOM region. Ducorr was selected to design and implement comprehensive cathodic protection systems for the terminal's steel structures, ensuring long-term durability in the challenging marine environment of the Red Sea.",
    benefits: [
      "Advanced marine protection systems",
      "NEOM region infrastructure",
      "Red Sea environment durability"
    ]
  },
  {
    id: "sumuo-tower",
    title: "Sumuo Tower",
    location: "Saudi Arabia",
    locationCode: "saudi-arabia",
    industry: "infrastructure",
    description: "The Sumuo Tower project showcases Ducorr's expertise in protecting high-rise infrastructure in Saudi Arabia. Our cathodic protection systems were designed to safeguard the building's foundation and underground utilities, ensuring structural integrity for decades to come.",
    benefits: [
      "High-rise foundation protection",
      "Underground utility safeguarding",
      "Long-term structural integrity"
    ]
  },
  {
    id: "saudi-detergent-factory",
    title: "Saudi Detergent Factory",
    location: "Saudi Arabia",
    locationCode: "saudi-arabia",
    industry: "industrial",
    description: "Ducorr provided comprehensive cathodic protection solutions for the Saudi Detergent Factory's industrial infrastructure. Our systems protect critical processing equipment, storage tanks, and pipeline networks from corrosion, ensuring reliable operations in the demanding industrial environment.",
    benefits: [
      "Industrial equipment protection",
      "Storage tank corrosion prevention",
      "Pipeline network safeguarding"
    ]
  }
];

export default function PortfolioProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filters, setFilters] = useState({ industry: "all", location: "all" });

  const filteredProjects = projects.filter(project => {
    const industryMatch = filters.industry === "all" || project.industry === filters.industry;
    const locationMatch = filters.location === "all" || project.locationCode === filters.location;
    return industryMatch && locationMatch;
  });

  const handleFilterChange = (newFilters: { industry: string; location: string }) => {
    setFilters(newFilters);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl font-bold text-gray-900 mb-6"
            data-aos="zoom-y-out"
          >
            Our Portfolio of Excellence
          </h2>
          <p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            data-aos="zoom-y-out"
            data-aos-delay={150}
          >
            Discover how Ducorr has delivered innovative cathodic protection solutions across diverse industries and challenging environments worldwide.
          </p>
        </div>

        {/* Filters */}
        <ProjectFilters onFilterChange={handleFilterChange} />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer group"
              data-aos="zoom-y-out"
              data-aos-delay={index * 100}
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              {project.image ? (
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
              ) : (
                <div className="h-48 bg-gradient-to-br from-[#d9823f] to-[#d9823f]/80 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl mb-2">🏗️</div>
                    <div className="text-sm font-medium">{project.title}</div>
                  </div>
                </div>
              )}
              
              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#d9823f] transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs bg-[#d9823f]/10 text-[#d9823f] px-2 py-1 rounded-full">
                    {project.location}
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-900">Why Ducorr:</h4>
                  <ul className="space-y-1">
                    {project.benefits.slice(0, 2).map((benefit, idx) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-center">
                        <span className="w-1.5 h-1.5 bg-[#d9823f] rounded-full mr-2"></span>
                        {benefit}
                      </li>
                    ))}
                    {project.benefits.length > 2 && (
                      <li className="text-xs text-[#d9823f] font-medium">
                        +{project.benefits.length - 2} more benefits
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No results message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No projects found</h3>
            <p className="text-gray-600">
              Try adjusting your filters to see more projects
            </p>
          </div>
        )}

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/75 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {selectedProject.title}
                    </h3>
                    <span className="text-sm bg-[#d9823f]/10 text-[#d9823f] px-3 py-1 rounded-full">
                      {selectedProject.location}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-gray-600 text-2xl"
                  >
                    ×
                  </button>
                </div>
                
                {selectedProject.image && (
                  <div className="mb-6">
                    <div className="relative h-64 rounded-lg overflow-hidden">
                      <Image
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                )}
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Project Overview</h4>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Why Ducorr</h4>
                  <ul className="space-y-2">
                    {selectedProject.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-gray-600 flex items-start">
                        <span className="w-2 h-2 bg-[#d9823f] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 