"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { GovernanceScore } from '@/components/animations/GovernanceScore';
import { ViolationCards } from '@/components/animations/ViolationCards';
import { CodeBackground } from '@/components/animations/CodeBackground';
import { ChevronRight } from 'lucide-react';

export function Hero() {
  const scrollToForm = () => {
    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      <CodeBackground />
      <div className="container-wide grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Column: Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="size-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest font-black text-primary">
              v0.1 Closed Beta Live
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-heading font-black leading-[1.1] mb-6 tracking-tight text-white">
            Govern Engineering <br/>
            <span className="text-white">Before It Governs You.</span>
          </h1>

          <p className="text-lg md:text-xl text-text-muted mb-8 max-w-lg leading-relaxed">
            CodeBandhan is a governance layer for scaling teams — enforcing architectural discipline, measurable standards, and structural code evolution.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={scrollToForm} size="lg" className="group">
              Request Beta Access
              <ChevronRight className="size-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="secondary" size="lg" onClick={() => document.getElementById('roadmap')?.scrollIntoView({ behavior: 'smooth' })}>
              View Roadmap
            </Button>
          </div>
          <p className="text-xs text-text-muted mt-4 font-bold flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-primary inline-block" />
            Cohort-based beta. 15 teams per cohort.
          </p>

          <div className="mt-12 flex items-center gap-6">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-widest font-black text-text-muted/60">Live Frameworks</span>
              <div className="flex gap-4">
                <span className="text-xs font-bold text-white/80">Flutter</span>
                <span className="text-xs font-bold text-white/80">Express / TS</span>
              </div>
            </div>
            <div className="w-[1px] h-8 bg-border/40" />
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-widest font-black text-text-muted/60">Planned</span>
              <div className="flex gap-4 opacity-50">
                <span className="text-xs font-bold text-text-muted/60 underline decoration-primary/20">React Native</span>
                <span className="text-xs font-bold text-text-muted/60 underline decoration-primary/20">Native iOS/Android</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Interaction */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex flex-col items-center justify-center gap-8"
        >
          <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
          <GovernanceScore />
          <ViolationCards />
        </motion.div>
      </div>
    </section>
  );
}
