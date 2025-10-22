export const metadata = {
  title: "Cathodic Protection UAE & KSA | Leading Specialists | Ducorr",
  description: "Leading cathodic protection specialists in UAE and KSA. Expert corrosion solutions for marine structures, storage tanks, pipelines, and concrete. Certified cathodic protection services with 15+ years experience across Middle East.",
  keywords: "cathodic protection UAE, cathodic protection KSA, cathodic protection specialists UAE, cathodic protection Saudi Arabia, marine cathodic protection UAE, storage tank cathodic protection, pipeline cathodic protection, concrete cathodic protection, corrosion protection UAE, cathodic protection services Dubai, cathodic protection Abu Dhabi, cathodic protection Riyadh, cathodic protection Jeddah, offshore cathodic protection, impressed current cathodic protection, sacrificial anode cathodic protection, Ducorr cathodic protection",
  openGraph: {
    title: "Cathodic Protection UAE & KSA | Leading Specialists | Ducorr",
    description: "Leading cathodic protection specialists in UAE and KSA. Expert corrosion solutions for marine structures, storage tanks, pipelines, and concrete. Certified cathodic protection services with 15+ years experience.",
    url: "https://ducorr.com",
    siteName: "Ducorr",
    images: [
      {
        url: "/images/cathodic-protection-uae.jpg",
        width: 1200,
        height: 630,
        alt: "Cathodic Protection Services UAE and KSA - Ducorr Specialists",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cathodic Protection UAE & KSA | Leading Specialists",
    description: "Expert cathodic protection services for marine structures, storage tanks, pipelines, and concrete corrosion solutions in UAE and Saudi Arabia.",
    images: ["/images/cathodic-protection-uae.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import Workflows from "@/components/workflows";
import FeaturesPlanet from "@/components/features-planet";
// import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import StickyActions from "@/components/StickyActions";
import Icon from "@mdi/react";
import { 
  mdiClockOutline, 
  mdiAccountHardHat, 
  mdiTrophyOutline, 
  mdiLightningBolt, 
  mdiHeadset, 
  mdiCheckCircleOutline,
  mdiAnchor,
  mdiPipe,
  mdiTank,
  mdiHomeOutline,
  mdiCalendarClock
} from "@mdi/js";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ducorr",
    "alternateName": ["Ducorr Arabia", "Ducorr Cathodic Protection", "Cathodic Protection UAE", "Cathodic Protection KSA"],
    "description": "Leading cathodic protection specialists in UAE and KSA offering comprehensive corrosion solutions for marine structures, storage tanks, pipelines, and concrete. Certified cathodic protection services with 15+ years experience across Middle East.",
    "url": "https://ducorr.com",
    "logo": "https://ducorr.com/images/ducorr-logo.svg",
    "image": "https://ducorr.com/images/cathodic-protection-uae.jpg",
    "telephone": "+971 50 168 2057",
    "email": "sales@ducorr.com",
    "address": [
      {
        "@type": "PostalAddress",
        "addressCountry": "AE",
        "addressRegion": "UAE",
        "addressLocality": "Dubai"
      },
      {
        "@type": "PostalAddress", 
        "addressCountry": "SA",
        "addressRegion": "Saudi Arabia",
        "addressLocality": "Riyadh"
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/ducorr",
      "https://twitter.com/ducorr"
    ],
    "foundingDate": "2010",
    "numberOfEmployees": "50-100",
    "industry": "Cathodic Protection and Corrosion Engineering",
    "serviceArea": [
      {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 25.2048,
          "longitude": 55.2708
        },
        "geoRadius": "500000",
        "name": "UAE Service Area"
      },
      {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates", 
          "latitude": 24.7136,
          "longitude": 46.6753
        },
        "geoRadius": "500000",
        "name": "KSA Service Area"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Cathodic Protection Services UAE and KSA",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Marine Cathodic Protection UAE",
            "description": "Comprehensive cathodic protection for marine structures, ports, offshore facilities, and underwater pipelines in UAE and KSA"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Storage Tank Cathodic Protection",
            "description": "Advanced cathodic protection systems for aboveground and underground storage tanks in UAE and Saudi Arabia"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pipeline Cathodic Protection",
            "description": "Complete pipeline cathodic protection solutions for oil, gas, and water pipelines across UAE and KSA"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Concrete Cathodic Protection",
            "description": "Specialized cathodic protection for concrete structures, bridges, and reinforced concrete in UAE and Saudi Arabia"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Offshore Cathodic Protection",
            "description": "Expert offshore cathodic protection services for oil platforms, subsea structures, and marine installations"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150",
      "bestRating": "5"
    },
    "knowsAbout": [
      "Cathodic Protection UAE",
      "Cathodic Protection KSA", 
      "Marine Corrosion Protection",
      "Pipeline Cathodic Protection",
      "Storage Tank Protection",
      "Concrete Cathodic Protection",
      "Offshore Cathodic Protection",
      "Impressed Current Cathodic Protection",
      "Sacrificial Anode Systems"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Hero />
      <Workflows />
      <FeaturesPlanet />
      {/* <Testimonials /> */}
      <BusinessCategories />
      <Cta />
      <StickyActions />
      
      {/* SEO Content Section - Styled to match theme */}
      <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[url('/images/stripes.svg')] opacity-5"></div>
        
        <div className="mx-auto max-w-6xl px-4 sm:px-6 relative">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6" data-aos="fade-up">
              Cathodic Protection Services UAE & KSA
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay={100}>
              Expert corrosion solutions for marine structures, storage tanks, pipelines, and concrete installations across the Middle East
            </p>
          </div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left column */}
            <div className="space-y-8" data-aos="fade-right">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#d9823f] to-[#b86a2f] rounded-xl flex items-center justify-center mr-4">
                    <Icon path={mdiAnchor} size={1.5} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Marine Cathodic Protection UAE & Saudi Arabia
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Our <strong>marine cathodic protection UAE</strong> services include offshore platforms, 
                  port structures, underwater pipelines, and marine installations. We specialize in both 
                  impressed current cathodic protection and sacrificial anode systems for optimal corrosion control.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#d9823f] to-[#b86a2f] rounded-xl flex items-center justify-center mr-4">
                    <Icon path={mdiTank} size={1.5} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Storage Tank Cathodic Protection Services
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Advanced <strong>storage tank cathodic protection</strong> systems for aboveground and 
                  underground tanks in Dubai, Abu Dhabi, Riyadh, and Jeddah. Our solutions ensure long-term 
                  protection against corrosion in harsh Middle Eastern environments.
                </p>
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-8" data-aos="fade-left">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#d9823f] to-[#b86a2f] rounded-xl flex items-center justify-center mr-4">
                    <Icon path={mdiPipe} size={1.5} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Pipeline Cathodic Protection UAE & KSA
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Complete <strong>pipeline cathodic protection</strong> solutions for oil, gas, and water 
                  pipelines across UAE and Saudi Arabia. Our expertise covers both onshore and offshore 
                  pipeline systems with proven track record in the region.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#d9823f] to-[#b86a2f] rounded-xl flex items-center justify-center mr-4">
                    <Icon path={mdiHomeOutline} size={1.5} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Concrete Cathodic Protection Solutions
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Specialized <strong>concrete cathodic protection</strong> for bridges, buildings, and 
                  reinforced concrete structures. Our innovative systems prevent rebar corrosion and extend 
                  structure lifespan in coastal and industrial environments.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Ducorr Section */}
          <div className="bg-gradient-to-r from-[#d9823f] to-[#b86a2f] rounded-3xl p-12 text-white mb-16" data-aos="fade-up">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Why Choose Ducorr for Cathodic Protection Services?</h3>
              <p className="text-xl opacity-90">Leading specialists with proven expertise across UAE and KSA</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon path={mdiCalendarClock} size={1.5} className="text-[#d9823f]" />
                </div>
                <h4 className="font-semibold mb-2">15+ Years Experience</h4>
                <p className="text-sm opacity-90">in <strong>cathodic protection UAE</strong> and <strong>cathodic protection KSA</strong></p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon path={mdiAccountHardHat} size={1.5} className="text-[#d9823f]" />
                </div>
                <h4 className="font-semibold mb-2">Certified Engineers</h4>
                <p className="text-sm opacity-90">specializing in <strong>marine cathodic protection UAE</strong></p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon path={mdiTrophyOutline} size={1.5} className="text-[#d9823f]" />
                </div>
                <h4 className="font-semibold mb-2">Proven Track Record</h4>
                <p className="text-sm opacity-90">with major projects across <strong>Saudi Arabia</strong> and <strong>UAE</strong></p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon path={mdiLightningBolt} size={1.5} className="text-[#d9823f]" />
                </div>
                <h4 className="font-semibold mb-2">Advanced Technology</h4>
                <p className="text-sm opacity-90">for <strong>storage tank cathodic protection</strong> and <strong>pipeline cathodic protection</strong></p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon path={mdiHeadset} size={1.5} className="text-[#d9823f]" />
                </div>
                <h4 className="font-semibold mb-2">24/7 Support</h4>
                <p className="text-sm opacity-90">for all <strong>cathodic protection specialists UAE</strong> services</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon path={mdiCheckCircleOutline} size={1.5} className="text-[#d9823f]" />
                </div>
                <h4 className="font-semibold mb-2">Compliance Certified</h4>
                <p className="text-sm opacity-90">for <strong>concrete cathodic protection</strong> standards</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16" data-aos="fade-up">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">Ready to Protect Your Infrastructure?</h3>
              <p className="text-xl mb-8 opacity-90">
                Contact Ducorr today for expert <strong>cathodic protection UAE</strong> and 
                <strong>cathodic protection KSA</strong> services
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+971501682057" className="btn bg-[#d9823f] hover:bg-[#b86a2f] text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                  Call +971 50 168 2057
                </a>
                <a href="mailto:sales@ducorr.com" className="btn bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors">
                  Email sales@ducorr.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
