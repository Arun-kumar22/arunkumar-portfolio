"use client";

import { motion } from "framer-motion";
import { 
  Code2, Database, Globe, Layers, Layout, Monitor, 
  Smartphone, Terminal, Cpu, Shield, Zap, Bot
} from "lucide-react";

const skills = [
  { name: "Ambient AI", icon: Bot, color: "from-[#00E5FF]/20 to-[#7C3AED]/20", border: "border-[#00E5FF]/50" },
  { name: "React", icon: Code2, color: "from-blue-500/20 to-cyan-500/20", border: "border-blue-500/50" },
  { name: "Angular", icon: Shield, color: "from-red-500/20 to-rose-500/20", border: "border-red-500/50" },
  { name: "React Native", icon: Smartphone, color: "from-cyan-500/20 to-blue-500/20", border: "border-cyan-500/50" },
  { name: "Laravel", icon: Zap, color: "from-orange-500/20 to-red-500/20", border: "border-orange-500/50" },
  { name: "Electron", icon: Cpu, color: "from-indigo-500/20 to-purple-500/20", border: "border-indigo-500/50" },
  { name: "Tailwind CSS", icon: Layout, color: "from-sky-500/20 to-indigo-500/20", border: "border-sky-500/50" },
  { name: "Firebase", icon: Database, color: "from-yellow-500/20 to-orange-500/20", border: "border-yellow-500/50" },
  { name: "MySQL", icon: Database, color: "from-blue-600/20 to-indigo-600/20", border: "border-blue-600/50" },
  { name: "GitHub Actions", icon: Terminal, color: "from-slate-700/20 to-slate-500/20", border: "border-slate-500/50" },
  { name: "REST APIs", icon: Globe, color: "from-emerald-500/20 to-teal-500/20", border: "border-emerald-500/50" },
  { name: "JWT Auth", icon: Shield, color: "from-violet-500/20 to-purple-500/20", border: "border-violet-500/50" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Technical <span className="gradient-text">Arsenal</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            A comprehensive suite of modern technologies used to build high-performance, enterprise-grade applications.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`relative group p-8 rounded-3xl border bg-gradient-to-br ${skill.color} ${skill.border} transition-all duration-300 overflow-hidden backdrop-blur-sm`}
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 flex flex-col items-center">
                <div className="p-4 rounded-2xl bg-white/10 text-white mb-4 shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:shadow-[#00E5FF]/50 transition-all duration-300">
                  <skill.icon size={28} />
                </div>
                <h3 className="font-bold text-white text-sm md:text-base tracking-wide uppercase">
                  {skill.name}
                </h3>
              </div>
              
              {/* Corner Glow */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-white/10 blur-2xl rounded-full transition-transform group-hover:scale-150" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
