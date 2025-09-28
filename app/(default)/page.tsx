export const metadata = {
  title: "Ducorr - Leading Cathodic Protection Specialists | Corrosion Solutions UAE",
  description: "Ducorr is a leading cathodic protection specialist in UAE, offering comprehensive corrosion solutions for marine structures, storage tanks, and concrete. Expert cathodic protection services with proven track record.",
  keywords: "cathodic protection specialists, corrosion solutions, cathodic protection UAE, marine corrosion protection, storage tank protection, concrete corrosion, Ducorr, cathodic protection experts",
  openGraph: {
    title: "Ducorr - Leading Cathodic Protection Specialists | Corrosion Solutions UAE",
    description: "Ducorr is a leading cathodic protection specialist in UAE, offering comprehensive corrosion solutions for marine structures, storage tanks, and concrete.",
    url: "https://ducorr.com",
    siteName: "Ducorr",
    images: [
      {
        url: "/images/ducorr-logo.svg",
        width: 1200,
        height: 630,
        alt: "Ducorr - Cathodic Protection Specialists",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ducorr - Leading Cathodic Protection Specialists",
    description: "Expert cathodic protection services for marine structures, storage tanks, and concrete corrosion solutions in UAE.",
    images: ["/images/ducorr-logo.svg"],
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
    "alternateName": "Ducorr Arabia",
    "description": "Leading cathodic protection specialists offering comprehensive corrosion solutions for marine structures, storage tanks, and concrete.",
    "url": "https://ducorr.com",
    "logo": "https://ducorr.com/images/ducorr-logo.svg",
    "image": "https://ducorr.com/images/ducorr-logo.svg",
    "telephone": "+971 50 168 2057",
    "email": "sales@ducorr.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "AE",
      "addressRegion": "UAE"
    },
    "sameAs": [
      "https://www.linkedin.com/company/ducorr",
      "https://twitter.com/ducorr"
    ],
    "foundingDate": "2010",
    "numberOfEmployees": "50-100",
    "industry": "Cathodic Protection and Corrosion Engineering",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 25.2048,
        "longitude": 55.2708
      },
      "geoRadius": "1000000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Cathodic Protection Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Marine Cathodic Protection",
            "description": "Protection for marine structures, ports, and offshore facilities"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Storage Tank Protection",
            "description": "Cathodic protection for aboveground and underground storage tanks"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Concrete Corrosion Protection",
            "description": "Protection for concrete structures and reinforced concrete"
          }
        }
      ]
    }
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
    </>
  );
}
