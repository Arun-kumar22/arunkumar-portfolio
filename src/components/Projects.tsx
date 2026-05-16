"use client";

import { motion } from "framer-motion";
import { ExternalLink, Globe, Monitor, Smartphone, Cpu, ShieldCheck, HeartPulse } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Healthcare Management System",
    description: "A comprehensive hospital management platform with patient tracking, appointment scheduling, and electronic health records.",
    tech: ["Angular", "Laravel", "MySQL", "JWT"],
    icon: HeartPulse,
    color: "from-blue-500/20 to-cyan-500/20",
    link: "#",
    github: "#",
  },
  {
    title: "PTZ Camera Monitoring",
    description: "Desktop application built with Electron for real-time control and monitoring of PTZ security cameras in medical facilities.",
    tech: ["Electron", "React", "Node.js", "Socket.io"],
    icon: Monitor,
    color: "from-violet-500/20 to-purple-500/20",
    link: "#",
    github: "#",
  },
  {
    title: "Antenatal Care Dashboard",
    description: "Data-driven analytics dashboard for monitoring maternal health metrics and pregnancy progression across clinics.",
    tech: ["React", "D3.js", "Firebase", "Tailwind"],
    icon: ShieldCheck,
    color: "from-emerald-500/20 to-teal-500/20",
    link: "#",
    github: "#",
  },
  {
    title: "Pet Management App",
    description: "Cross-platform mobile application for pet owners to manage health records, reminders, and professional consultations.",
    tech: ["React Native", "Firebase", "Redux", "Node.js"],
    icon: Smartphone,
    color: "from-orange-500/20 to-rose-500/20",
    link: "#",
    github: "#",
  },
  {
    title: "Stegoface AI Detection",
    description: "Advanced AI-powered system for detecting hidden data in facial images using deep learning algorithms.",
    tech: ["Python", "TensorFlow", "React", "Flask"],
    icon: Cpu,
    color: "from-indigo-500/20 to-blue-500/20",
    link: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Featured <span className="gradient-text">Creations</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 max-w-xl"
            >
              A selection of my recent work in healthcare, enterprise software, and AI-driven systems.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <button className="px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-sm font-medium">
              View All Work
            </button>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group flex flex-col h-full glass-dark rounded-[2.5rem] border border-white/5 overflow-hidden transition-all duration-500"
            >
              {/* Card Header/Preview Placeholder */}
              <div className={`h-48 relative bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative z-10 p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 text-white"
                >
                  <project.icon size={48} />
                </motion.div>
                
                {/* Decorative particles (CSS only) */}
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-white/40 animate-pulse" />
                <div className="absolute bottom-10 left-10 w-3 h-3 rounded-full bg-white/20 animate-bounce" />
              </div>

              {/* Card Body */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full bg-white/5 text-[10px] uppercase tracking-wider font-bold text-slate-400 border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-[#00E5FF] transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex items-center space-x-4">
                  <a href={project.link} aria-label={`View live demo of ${project.title}`} className="p-3 rounded-xl bg-[#00E5FF]/10 text-[#00E5FF] hover:bg-[#00E5FF] hover:text-white transition-all duration-300">
                    <ExternalLink size={20} aria-hidden="true" />
                  </a>
                  <a href={project.github} aria-label={`View source code of ${project.title} on GitHub`} className="p-3 rounded-xl bg-white/5 text-white hover:bg-white/10 transition-all duration-300">
                    <Globe size={20} aria-hidden="true" />
                  </a>
                  <button className="flex-grow py-3 px-4 rounded-xl border border-white/10 hover:border-white/30 text-sm font-bold transition-all">
                    Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
