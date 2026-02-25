"use client";

import React from 'react';
import { motion } from 'framer-motion';

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-6">
      <div className="container-wide flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-8 bg-primary rounded-lg flex items-center justify-center font-black text-background italic text-xl">
            B
          </div>
          <span className="text-xl font-heading font-black tracking-tight text-white uppercase">
            CodeBandhan
          </span>
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
