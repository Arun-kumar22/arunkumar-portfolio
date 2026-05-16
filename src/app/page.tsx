"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import AIChatbot from "@/components/AIChatbot";
import dynamic from "next/dynamic";

const ThreeBackground = dynamic(() => import("@/components/ThreeBackground"), {
  ssr: false, // Prevents server-side rendering and defers hydration
});

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <CustomCursor />
      <ThreeBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <AIChatbot />
    </main>
  );
}
