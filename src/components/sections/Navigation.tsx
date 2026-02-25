"use client";

import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Image from 'next/image';

export function Navigation() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 bg-background/80 backdrop-blur-md border-b border-white/5 shadow-2xl shadow-black/50' : 'py-6 bg-transparent'}`}>
      <div className="container-wide flex items-center justify-between">
        <div className="flex items-center">
          <Image 
            src="/codeBandhan.svg" 
            alt="CodeBandhan Logo" 
            width={185} 
            height={24}
            className="h-6 md:h-7 w-auto"
            priority
          />
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {['Problem', 'Capabilities', 'Roadmap'].map((item) => (
            <button
              key={item}
              onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
              className="text-xs uppercase tracking-widest font-black text-text-muted hover:text-white transition-colors"
            >
              {item}
            </button>
          ))}
          <button 
            onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-5 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:text-background transition-all"
          >
            Apply Beta
          </button>
        </div>
      </div>
    </nav>
  );
}
