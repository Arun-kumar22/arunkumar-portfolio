import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://bio-ivory-mu.vercel.app'),

  title: {
    default: 'Arunkumar | Full Stack Developer',
    template: '%s | Arunkumar',
  },

  description:
    'Full Stack Developer specializing in React, Angular, React Native, Laravel, and Healthcare Applications.',

  keywords: [
    'Full Stack Developer Singapore',
    'React Developer Singapore',
    'Angular Developer',
    'Healthcare Software Developer',
    'React Native Developer',
    'Laravel Developer',
  ],

  openGraph: {
    title: 'Arunkumar Portfolio',
    description:
      'International Full Stack Developer Portfolio',
    url: 'https://bio-ivory-mu.vercel.app',
    siteName: 'Arunkumar Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  verification: {
    google: '1c2603980d832603',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Resource hints — reduce critical path latency */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://linkedin.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Arunkumar",
              url: "https://bio-ivory-mu.vercel.app",
              jobTitle: "Full-Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "CureSelect Healthcare LLP"
              },
              alumniOf: "",
              sameAs: [
                "https://github.com/Arun-kumar22",
                "https://linkedin.com/in/arunkumar"
              ],
              seeks: {
                "@type": "Demand",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Full-Stack Software Development",
                  "areaServed": {
                    "@type": "Country",
                    "name": "Singapore"
                  }
                }
              }
            })
          }}
        />
      </head>

      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-[#060816]`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
