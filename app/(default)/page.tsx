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
      
      {/* SEO Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Cathodic Protection Services UAE & KSA - Expert Solutions
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>Ducorr</strong> is the leading <strong>cathodic protection specialist in UAE and KSA</strong>, 
                providing comprehensive corrosion solutions for critical infrastructure. Our certified engineers 
                deliver expert <strong>cathodic protection services</strong> across the Middle East region, 
                protecting marine structures, storage tanks, pipelines, and concrete installations.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Marine Cathodic Protection UAE & Saudi Arabia
              </h3>
              <p className="mb-6">
                Our <strong>marine cathodic protection UAE</strong> services include offshore platforms, 
                port structures, underwater pipelines, and marine installations. We specialize in both 
                impressed current cathodic protection and sacrificial anode systems for optimal corrosion control.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Storage Tank Cathodic Protection Services
              </h3>
              <p className="mb-6">
                Advanced <strong>storage tank cathodic protection</strong> systems for aboveground and 
                underground tanks in Dubai, Abu Dhabi, Riyadh, and Jeddah. Our solutions ensure long-term 
                protection against corrosion in harsh Middle Eastern environments.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Pipeline Cathodic Protection UAE & KSA
              </h3>
              <p className="mb-6">
                Complete <strong>pipeline cathodic protection</strong> solutions for oil, gas, and water 
                pipelines across UAE and Saudi Arabia. Our expertise covers both onshore and offshore 
                pipeline systems with proven track record in the region.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Concrete Cathodic Protection Solutions
              </h3>
              <p className="mb-6">
                Specialized <strong>concrete cathodic protection</strong> for bridges, buildings, and 
                reinforced concrete structures. Our innovative systems prevent rebar corrosion and extend 
                structure lifespan in coastal and industrial environments.
              </p>
              
              <p className="text-lg font-medium text-gray-900">
                Contact Ducorr today for expert <strong>cathodic protection UAE</strong> and 
                <strong>cathodic protection KSA</strong> services. Call +971 50 168 2057 or email sales@ducorr.com
              </p>
              
              <div className="mt-8 p-6 bg-white rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Why Choose Ducorr for Cathodic Protection Services?
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• <strong>15+ Years Experience</strong> in <strong>cathodic protection UAE</strong> and <strong>cathodic protection KSA</strong></li>
                  <li>• <strong>Certified Engineers</strong> specializing in <strong>marine cathodic protection UAE</strong></li>
                  <li>• <strong>Proven Track Record</strong> with major projects across <strong>Saudi Arabia</strong> and <strong>UAE</strong></li>
                  <li>• <strong>Advanced Technology</strong> for <strong>storage tank cathodic protection</strong> and <strong>pipeline cathodic protection</strong></li>
                  <li>• <strong>24/7 Support</strong> for all <strong>cathodic protection specialists UAE</strong> services</li>
                  <li>• <strong>Compliance Certified</strong> for <strong>concrete cathodic protection</strong> standards</li>
                </ul>
              </div>
              
              <div className="mt-6 p-6 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Our Cathodic Protection Expertise
                </h3>
                <p className="text-gray-700 mb-4">
                  As leading <strong>cathodic protection specialists UAE</strong> and <strong>cathodic protection Saudi Arabia</strong> experts, 
                  Ducorr provides comprehensive solutions for industrial and marine applications. Our <strong>cathodic protection KSA</strong> 
                  services include advanced monitoring systems, impressed current protection, and sacrificial anode installations.
                </p>
                <p className="text-gray-700">
                  Whether you need <strong>marine cathodic protection UAE</strong> for offshore platforms or <strong>storage tank cathodic protection</strong> 
                  for industrial facilities, our certified team delivers reliable <strong>cathodic protection UAE</strong> solutions that meet 
                  international standards and local regulations.
                </p>
              </div>
              
              <div className="mt-8 p-6 bg-gray-100 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Cathodic Protection Services Locations
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">UAE Services</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Cathodic Protection Dubai</strong> - Marine & Industrial</li>
                      <li>• <strong>Cathodic Protection Abu Dhabi</strong> - Offshore Platforms</li>
                      <li>• <strong>Cathodic Protection Sharjah</strong> - Storage Facilities</li>
                      <li>• <strong>Cathodic Protection Ajman</strong> - Pipeline Systems</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">KSA Services</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Cathodic Protection Riyadh</strong> - Industrial Plants</li>
                      <li>• <strong>Cathodic Protection Jeddah</strong> - Port Facilities</li>
                      <li>• <strong>Cathodic Protection Dammam</strong> - Oil & Gas</li>
                      <li>• <strong>Cathodic Protection Khobar</strong> - Marine Structures</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
