import "./css/style.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Cathodic Protection UAE & KSA | Leading Specialists | Ducorr",
    template: "%s | Ducorr - Cathodic Protection Specialists UAE & KSA"
  },
  description: "Leading cathodic protection specialists in UAE and KSA. Expert corrosion solutions for marine structures, storage tanks, pipelines, and concrete. Certified cathodic protection services with 15+ years experience across Middle East.",
  keywords: "cathodic protection UAE, cathodic protection KSA, cathodic protection specialists UAE, cathodic protection Saudi Arabia, marine cathodic protection UAE, storage tank cathodic protection, pipeline cathodic protection, concrete cathodic protection, corrosion protection UAE, cathodic protection services Dubai, cathodic protection Abu Dhabi, cathodic protection Riyadh, cathodic protection Jeddah, offshore cathodic protection, impressed current cathodic protection, sacrificial anode cathodic protection, Ducorr cathodic protection",
  authors: [{ name: "Ducorr" }],
  creator: "Ducorr",
  publisher: "Ducorr",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ducorr.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ducorr.com",
    siteName: "Ducorr",
    title: "Cathodic Protection UAE & KSA | Leading Specialists | Ducorr",
    description: "Leading cathodic protection specialists in UAE and KSA. Expert corrosion solutions for marine structures, storage tanks, pipelines, and concrete. Certified cathodic protection services with 15+ years experience.",
    images: [
      {
        url: "/images/cathodic-protection-uae.jpg",
        width: 1200,
        height: 630,
        alt: "Cathodic Protection Services UAE and KSA - Ducorr Leading Specialists",
      },
    ],
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "Cathodic Protection Services",
  classification: "Engineering Services",
  referrer: "origin-when-cross-origin",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  colorScheme: "light",
  themeColor: "#d9823f",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* SEO Meta Tags */}
        <meta name="geo.region" content="AE-SA" />
        <meta name="geo.placename" content="UAE, Saudi Arabia" />
        <meta name="geo.position" content="25.2048;55.2708" />
        <meta name="ICBM" content="25.2048, 55.2708" />
        <meta name="DC.title" content="Cathodic Protection UAE & KSA | Leading Specialists" />
        <meta name="DC.subject" content="Cathodic Protection Services" />
        <meta name="DC.description" content="Leading cathodic protection specialists in UAE and KSA" />
        <meta name="DC.language" content="en" />
        <meta name="DC.coverage" content="UAE, Saudi Arabia" />
        <meta name="DC.type" content="Service" />
        <meta name="rating" content="General" />
        <meta name="distribution" content="Global" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="English" />
        <meta name="audience" content="Engineers, Project Managers, Oil & Gas Companies" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-831188944"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-831188944');
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} bg-gray-50 font-inter tracking-tight text-gray-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
