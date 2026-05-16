"use client";

import Link from "next/link";
import { Globe, User, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5 bg-black/40">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="text-2xl font-bold gradient-text mb-2">
              ARUNKUMAR
            </Link>
            <p className="text-slate-500 text-sm">
              Building the future of healthcare technology.
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/Arun-kumar22"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Arunkumar's GitHub profile"
              className="text-slate-500 hover:text-white transition-colors"
            >
              <Globe size={20} aria-hidden="true" />
            </a>
            <a
              href="https://linkedin.com/in/arunkumar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Arunkumar's LinkedIn profile"
              className="text-slate-500 hover:text-white transition-colors"
            >
              <User size={20} aria-hidden="true" />
            </a>
            <a
              href="https://github.com/Arun-kumar22"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Arunkumar's GitHub repositories"
              className="text-slate-500 hover:text-white transition-colors"
            >
              <Globe size={20} aria-hidden="true" />
            </a>
            <a
              href="mailto:arunganapathi20@gmail.com"
              aria-label="Send email to Arunkumar at arunganapathi20@gmail.com"
              className="text-slate-500 hover:text-white transition-colors"
            >
              <Mail size={20} aria-hidden="true" />
            </a>
          </div>

          <div className="text-slate-500 text-sm font-mono">
            &copy; {currentYear} Arunkumar. All Rights Reserved.
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-[10px] text-slate-700 uppercase tracking-widest">
            Designed &amp; Developed with Passion in Chennai
          </p>
        </div>
      </div>
    </footer>
  );
}
