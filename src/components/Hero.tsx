"use client";

import { useEffect, useState, useRef } from "react";
import {
  ArrowRight,
  Download,
  Laptop,
  Shield,
  Zap,
  Smartphone,
  Bot,
} from "lucide-react";
import { cn } from "@/lib/utils";

const roles = [
  "Ambient AI Developer",
  "React & Angular Expert",
  "Full-Stack Engineer",
  "Enterprise App Architect",
];

const techIcons = [
  { icon: Bot, color: "text-[#00E5FF]", label: "Ambient AI" },
  { icon: Laptop, color: "text-blue-400", label: "React" },
  { icon: Shield, color: "text-red-400", label: "Angular" },
  { icon: Zap, color: "text-yellow-400", label: "Laravel" },
  { icon: Smartphone, color: "text-green-400", label: "Mobile" },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation — identical logic, but text element has fixed min-width
  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const fullText = roles[roleIndex];
        if (!isDeleting) {
          setCurrentText(fullText.substring(0, currentText.length + 1));
          if (currentText === fullText) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setCurrentText(fullText.substring(0, currentText.length - 1));
          if (currentText === "") {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, roleIndex]);

  // Ref-based CSS animation instead of framer-motion to avoid reflow
  const badgeRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Trigger CSS animations via class instead of JS-driven layout reads
    const els = [badgeRef.current, h1Ref.current, paraRef.current];
    els.forEach((el, i) => {
      if (el) {
        el.style.animationDelay = `${i * 0.2}s`;
        el.classList.add("hero-fade-in");
      }
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div
            ref={badgeRef}
            className="inline-block px-4 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-6 opacity-0"
          >
            Available for New Opportunities
          </div>

          {/* LCP element — no scale animation (avoids forced reflow) */}
          <h1
            ref={h1Ref}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight opacity-0"
          >
            Building{" "}
            <span className="gradient-text">Intelligent</span>
            <br />
            Healthcare &amp; Enterprise Solutions
          </h1>

          <p
            ref={paraRef}
            className="text-lg md:text-xl text-[#E5E7EB]/80 max-w-2xl mx-auto mb-6 opacity-0"
          >
            Full-Stack Developer specializing in Ambient AI Integration, React,
            Angular, Laravel, and Real-Time Applications.
          </p>

          {/* Typing animation — explicit min-width prevents CLS */}
          <div
            className="text-xl md:text-2xl text-slate-400 font-mono mb-10"
            style={{
              minHeight: "2rem",
              minWidth: "20ch",
              display: "inline-block",
            }}
            aria-live="polite"
            aria-label={`Currently: ${currentText}`}
          >
            {currentText}
            <span className="animate-pulse" aria-hidden="true">
              |
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 hero-fade-in" style={{ animationDelay: "0.6s", opacity: 0 }}>
            <a
              href="#projects"
              className="px-8 py-4 rounded-xl gradient-bg text-white font-bold transition-all shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:shadow-[0_0_30px_rgba(0,229,255,0.6)] flex items-center group"
            >
              Explore Projects{" "}
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold transition-all backdrop-blur-md flex items-center group"
            >
              <Download
                className="mr-2 group-hover:-translate-y-1 transition-transform"
                size={20}
                aria-hidden="true"
              />{" "}
              Download Resume
            </a>
            <a
              href="https://wa.me/916381052784?text=Hi%20Arunkumar,%20I'm%20interested%20in%20hiring%20you%20for%20a%20project!"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold transition-all backdrop-blur-md flex items-center"
            >
              Hire Me
            </a>
          </div>

          {/* Tech Icons — CSS animation, no JS layout reads */}
          <div className="mt-20 flex flex-wrap justify-center gap-8">
            {techIcons.map((tech, i) => (
              <div
                key={tech.label}
                className="flex flex-col items-center group hero-fade-in"
                style={{ animationDelay: `${1 + i * 0.1}s`, opacity: 0 }}
              >
                <div
                  className={cn(
                    "p-4 rounded-2xl glass mb-2 group-hover:scale-110 transition-transform duration-300",
                    tech.color
                  )}
                >
                  <tech.icon size={32} aria-hidden="true" />
                </div>
                <span className="text-xs text-slate-500 font-mono">
                  {tech.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Glows — pure CSS, no JS */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-violet-500/20 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
