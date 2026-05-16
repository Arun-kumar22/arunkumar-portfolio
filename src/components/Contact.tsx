"use client";

import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, Globe, User, Layout } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace this URL with your Google Apps Script / SheetDB / Sheet.best URL
      const GOOGLE_SHEET_WEBHOOK = process.env.NEXT_PUBLIC_SHEET_URL || "https://script.google.com/macros/s/AKfycbzn2ha65hAy9Wbl-vMKitaC1qBkDD72J-vikyWMKAQl4YdZ_JU8ES0ZukQfVtzwmHXaDg/exec";

      const formData = new FormData(e.currentTarget);

      await fetch(GOOGLE_SHEET_WEBHOOK, {
        method: "POST",
        body: formData,
        mode: "no-cors" // Essential for free Google Apps Script web apps
      });

      setSuccess(true);
      setFormState({ name: "", email: "", message: "" });

      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      console.error("Submission failed", error);
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Let's Build the <span className="gradient-text">Future</span> Together
              </h2>
              <p className="text-slate-400 text-lg mb-10">
                Interested in healthcare technology, AI-powered systems, or custom enterprise solutions? Drop me a message, and let's discuss your next big project.
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex items-center space-x-6">
                  <div className="p-4 rounded-2xl bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/20">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">Email Me</div>
                    <div className="text-lg font-medium text-white">arunganapathi20@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <div className="p-4 rounded-2xl bg-[#7C3AED]/10 text-[#7C3AED] border border-[#7C3AED]/20">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">Location</div>
                    <div className="text-lg font-medium text-white">Chennai, India</div>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                {[
                  { icon: Globe, href: "https://github.com/Arun-kumar22" },
                  { icon: User, href: "#" },
                  { icon: Layout, href: "#" }
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    aria-label={`Visit my profile on ${social.icon.name || 'Social Media'}`}
                    className="p-4 rounded-2xl glass-dark border border-white/5 text-slate-400 hover:text-[#00E5FF] hover:border-[#00E5FF]/30 transition-all duration-300"
                  >
                    <social.icon size={20} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-dark p-8 md:p-12 rounded-[2.5rem] border border-white/10"
            >
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#00E5FF]/50 focus:ring-1 focus:ring-[#00E5FF]/50 transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#00E5FF]/50 focus:ring-1 focus:ring-[#00E5FF]/50 transition-all"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 uppercase tracking-widest ml-1">Message</label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#00E5FF]/50 focus:ring-1 focus:ring-[#00E5FF]/50 transition-all resize-none"
                    placeholder="How can I help you?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 rounded-2xl gradient-bg text-white font-bold flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? "Sending..." : success ? "Message Sent!" : "Send Message"}</span>
                  {!isSubmitting && !success && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                </button>

                {success && (
                  <p className="text-[#00E5FF] text-center text-sm font-medium mt-4">
                    Thank you! I will get back to you shortly.
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Blobs */}
      <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-[#7C3AED]/10 blur-[150px] rounded-full -z-10" />
    </section>
  );
}
