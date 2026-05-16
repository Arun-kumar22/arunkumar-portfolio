"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send, Sparkles } from "lucide-react";

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hello! I'm Arunkumar's AI assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages([...messages, { role: "user", text: input }]);
    setInput("");
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: "bot", 
        text: "I'm currently in 'Demo Mode'. Arunkumar specializes in Healthcare Tech, React, and Laravel. You can reach him at arunkumar@example.com!" 
      }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-[350px] md:w-[400px] h-[500px] glass-dark border border-white/10 rounded-[2rem] flex flex-col overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/10 bg-gradient-to-r from-[#00E5FF]/20 to-[#7C3AED]/20 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-xl bg-[#00E5FF]/20 text-[#00E5FF]">
                  <Bot size={20} />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">AI Assistant</div>
                  <div className="text-[10px] text-[#00E5FF] flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mr-1 animate-pulse" /> Online
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-grow p-6 overflow-y-auto space-y-4 scrollbar-hide">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] p-4 rounded-2xl text-sm ${
                    msg.role === "user" 
                      ? "bg-[#00E5FF] text-[#060816] font-medium rounded-tr-none" 
                      : "bg-white/5 text-slate-300 rounded-tl-none border border-white/5"
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10">
              <div className="flex items-center space-x-2 bg-white/5 rounded-xl px-4 py-2 border border-white/5 focus-within:border-[#00E5FF]/30 transition-all">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask something..."
                  className="bg-transparent border-none focus:outline-none text-white text-sm flex-grow py-2"
                />
                <button onClick={handleSend} className="p-2 text-[#00E5FF] hover:text-[#00E5FF]/80 transition-colors">
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center text-white shadow-2xl relative group"
      >
        {isOpen ? <X size={28} /> : <Bot size={28} />}
        {!isOpen && (
          <span className="absolute -top-2 -right-2 w-5 h-5 bg-[#2563EB] rounded-full border-2 border-[#060816] flex items-center justify-center text-[10px] font-bold">1</span>
        )}
        <div className="absolute inset-0 rounded-full bg-[#00E5FF] blur-lg opacity-0 group-hover:opacity-40 transition-opacity" />
      </motion.button>
    </div>
  );
}
