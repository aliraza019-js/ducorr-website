import "./css/style.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Ducorr | Leading Cathodic Protection Specialists | Corrosion Solutions UAE",
    template: "%s | Ducorr - Cathodic Protection Specialists"
  },
  description: "Ducorr is a leading cathodic protection specialist in UAE, offering comprehensive corrosion solutions for marine structures, storage tanks, and concrete. Expert cathodic protection services with proven track record.",
  keywords: "cathodic protection specialists, corrosion solutions, cathodic protection UAE, marine corrosion protection, storage tank protection, concrete corrosion, Ducorr, cathodic protection experts",
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
    title: "Ducorr - Leading Cathodic Protection Specialists | Corrosion Solutions UAE",
    description: "Ducorr is a leading cathodic protection specialist in UAE, offering comprehensive corrosion solutions for marine structures, storage tanks, and concrete.",
    images: [
      {
        url: "/images/ducorr-logo.svg",
        width: 1200,
        height: 630,
        alt: "Ducorr - Cathodic Protection Specialists",
      },
    ],
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
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
