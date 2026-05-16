"use client";

import dynamic from "next/dynamic";

// Lazy-load heavy/below-fold components to minimize initial JS bundle
// ssr:false is valid here since this is a Client Component
const About = dynamic(() => import("@/components/About"), { ssr: false });
const Skills = dynamic(() => import("@/components/Skills"), { ssr: false });
const Projects = dynamic(() => import("@/components/Projects"), { ssr: false });
const Experience = dynamic(() => import("@/components/Experience"), {
  ssr: false,
});
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const ThreeBackground = dynamic(
  () => import("@/components/ThreeBackground"),
  { ssr: false }
);
const CustomCursor = dynamic(() => import("@/components/CustomCursor"), {
  ssr: false,
});
const AIChatbot = dynamic(() => import("@/components/AIChatbot"), {
  ssr: false,
});

export default function ClientShell() {
  return (
    <>
      <ThreeBackground />
      <CustomCursor />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <AIChatbot />
    </>
  );
}
