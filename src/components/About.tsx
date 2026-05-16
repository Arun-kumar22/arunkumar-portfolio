"use client";

import { motion } from "framer-motion";
import { Activity, Layout, Monitor, ShieldCheck, Globe, Zap } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "3+", icon: Activity },
  { label: "Projects Completed", value: "15+", icon: Layout },
  { label: "Global Clients", value: "5+", icon: Globe },
  { label: "Success Rate", value: "100%", icon: Zap },
];

const expertise = [
  "Ambient AI Integration",
  "Healthcare Software Expertise",
  "Enterprise Dashboard Development",
  "Real-time Monitoring Systems",
  "Cross-platform Mobile Apps",
  "Scalable Architecture",
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Transforming <span className="gradient-text">Healthcare</span> Through Innovative Technology
            </h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Currently based in India and <strong className="text-white">highly open to relocating to Singapore</strong>, I specialize in building mission-critical enterprise applications and integrating intelligent Ambient AI systems. With 3 years of experience, I bridge the gap between complex medical requirements, cutting-edge AI software, and intuitive human-computer interfaces.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-10">
              {expertise.map((item, i) => (
                <div key={i} className="flex items-center space-x-3 text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] shadow-[0_0_8px_rgba(0,229,255,0.8)]" />
                  <span className="text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>

            <button className="flex items-center space-x-2 text-[#00E5FF] font-bold hover:text-[#00E5FF]/80 transition-colors group">
              <span>Learn more about my journey</span>
              <ShieldCheck className="group-hover:rotate-12 transition-transform" />
            </button>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-dark p-8 rounded-3xl border border-white/5 flex flex-col items-center text-center group hover:border-[#00E5FF]/30 transition-colors"
              >
                <div className="p-4 rounded-2xl bg-white/5 text-[#00E5FF] mb-4 group-hover:bg-[#00E5FF]/10 transition-colors">
                  <stat.icon size={32} />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest text-slate-500 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#00E5FF]/5 blur-[120px] rounded-full -z-10" />
    </section>
  );
}
