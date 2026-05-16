"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "CureSelect Healthcare LLP",
    role: "Associate Software Full-Stack Developer + AI Integration",
    period: "2024 - Present",
    location: "Chennai, India",
    description: "Spearheading the development of intelligent healthcare systems by integrating Ambient AI technologies into full-stack applications. Architecting and optimizing both frontend (React/Angular) and robust backend solutions (Laravel).",
    highlights: ["Ambient AI Integration", "Full-Stack Architecture", "Healthcare Tech"],
  },
  {
    company: "CureSelect Healthcare LLP",
    role: "Junior Full-Stack Developer",
    period: "2023 - 2024",
    location: "Chennai, India",
    description: "Started as a fresher and rapidly progressed into full-stack development. Built scalable enterprise dashboards, implemented real-time patient monitoring systems, and designed secure, HIPAA-compliant APIs.",
    highlights: ["React & Angular", "API Optimization", "Real-time Data"],
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          Career <span className="gradient-text">Trajectory</span>
        </motion.h2>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00E5FF] via-[#7C3AED] to-transparent transform -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Node */}
                <div className="absolute left-0 md:left-1/2 top-0 md:top-8 w-4 h-4 rounded-full bg-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.8)] transform -translate-x-1/2 z-10" />

                {/* Content */}
                <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pl-12" : "md:pr-12"} w-full pl-8 md:pl-0`}>
                  <div className="glass-dark p-8 rounded-3xl border border-white/5 hover:border-[#00E5FF]/30 transition-all duration-300 group hover:-translate-y-1">
                    <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-[#00E5FF] transition-colors">{exp.role}</h3>
                      <span className="px-3 py-1 rounded-full bg-[#00E5FF]/10 text-[#00E5FF] text-xs font-bold border border-[#00E5FF]/20">
                        {exp.period}
                      </span>
                    </div>
                    
                    <div className="flex flex-col space-y-2 mb-6">
                      <div className="flex items-center text-slate-400 text-sm">
                        <Briefcase size={14} className="mr-2" /> {exp.company}
                      </div>
                      <div className="flex items-center text-slate-500 text-sm">
                        <MapPin size={14} className="mr-2" /> {exp.location}
                      </div>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((h) => (
                        <span key={h} className="text-[10px] text-slate-500 font-mono uppercase"># {h}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
