import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arunkumar | Full-Stack Developer | Healthcare Tech | Singapore",
  description: "Portfolio of Arunkumar, a Full-Stack Developer specializing in Healthcare Technology, Ambient AI, React, Angular, and Laravel. Open to tech roles and relocation to Singapore.",
  keywords: ["Arunkumar", "Full-Stack Developer", "Singapore", "Singapore Tech Jobs", "Singapore Recruiter", "Healthcare Tech", "React", "Angular", "Laravel", "Ambient AI", "Software Engineer", "Relocation"],
  authors: [{ name: "Arunkumar" }],
  creator: "Arunkumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arunkumar.dev",
    title: "Arunkumar | Full-Stack Developer | Available for Singapore",
    description: "Building Intelligent Healthcare & Enterprise Solutions. Specialist in React, Angular, and Laravel. Open to tech roles in Singapore.",
    siteName: "Arunkumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arunkumar | Full-Stack Developer | Available for Singapore",
    description: "Building Intelligent Healthcare & Enterprise Solutions. Specialist in React, Angular, and Laravel. Open to tech roles in Singapore.",
    creator: "@arunkumar",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Arunkumar",
              url: "https://arunkumar.dev",
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
      </body>
    </html>
  );
}
