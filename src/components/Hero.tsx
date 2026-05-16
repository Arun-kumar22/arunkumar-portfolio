"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Download, Laptop, Shield, Zap, Database, Smartphone, Bot } from "lucide-react";
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

  useEffect(() => {
    const timeout = setTimeout(() => {
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
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block px-4 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-6"
          >
            Available for New Opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
          >
            Building{" "}
            <span className="gradient-text">
              Intelligent
            </span>
            <br />
            Healthcare & Enterprise Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-[#E5E7EB]/80 max-w-2xl mx-auto mb-6"
          >
            Full-Stack Developer specializing in Ambient AI Integration, React, Angular, Laravel, and Real-Time Applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-xl md:text-2xl text-slate-400 font-mono mb-10 h-8"
          >
            {currentText}
            <span className="animate-pulse">|</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <button className="px-8 py-4 rounded-xl gradient-bg text-white font-bold transition-all shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:shadow-[0_0_30px_rgba(0,229,255,0.6)] flex items-center group">
              Explore Projects <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold transition-all backdrop-blur-md flex items-center group">
              <Download className="mr-2 group-hover:-translate-y-1 transition-transform" size={20} /> Download Resume
            </button>
            <a 
              href="https://wa.me/916381052784?text=Hi%20Arunkumar,%20I'm%20interested%20in%20hiring%20you%20for%20a%20project!" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold transition-all backdrop-blur-md flex items-center"
            >
              Hire Me
            </a>
          </motion.div>

          {/* Floating Icons */}
          <div className="mt-20 flex flex-wrap justify-center gap-8">
            {techIcons.map((tech, i) => (
              <motion.div
                key={tech.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
                className="flex flex-col items-center group"
              >
                <div className={cn("p-4 rounded-2xl glass mb-2 group-hover:scale-110 transition-transform duration-300", tech.color)}>
                  <tech.icon size={32} />
                </div>
                <span className="text-xs text-slate-500 font-mono">{tech.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-violet-500/20 blur-[120px] rounded-full" />
    </section>
  );
}
