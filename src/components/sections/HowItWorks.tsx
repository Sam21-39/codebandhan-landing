"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const steps = [
  { step: '01', title: 'Connect Repository', desc: 'GitHub integration via OAuth' },
  { step: '02', title: 'Configure Rules', desc: 'Pre-built rules + custom configuration' },
  { step: '03', title: 'Track Violations', desc: 'Developer dashboard + CI checks' },
  { step: '04', title: 'Measure Governance', desc: 'Scoring trends + compliance analytics' }
];

export function HowItWorks() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Start tracking when the top of the section is at 70% from top of viewport
    // End tracking when the top of the section reaches 20% from top of viewport
    offset: ["start 70%", "start 20%"]
  });

  // Apply spring to the base progress so everything (line + cards) stays perfectly synced without lag
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="py-32 bg-surface/10 border-y border-border/40 relative overflow-hidden">
      <div className="container-wide">
        <div className="mb-20">
          <span className="label-caps mb-4 block">The Process</span>
          <h2 className="text-4xl md:text-5xl font-heading font-black text-white tracking-tight">
            Four Steps to Structural Governance
          </h2>
        </div>

        <div className="relative">
          {/* Progress Line - Placed behind cards with lower z-index */}
          <div className="hidden lg:block absolute top-[44px] left-[12.5%] right-[12.5%] h-[2px] bg-border/20 z-0">
            <motion.div 
              className="h-full bg-primary shadow-[0_0_15px_rgba(0,200,150,0.5)] origin-left"
              style={{ scaleX: smoothProgress }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((s, i) => (
              <StepItem key={i} step={s} index={i} progress={smoothProgress} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepItem({ step, index, progress }: { step: any, index: number, progress: any }) {
  // Line goes from 0 to 1 over 4 cards. 
  // Card 1 is at 0, Card 2 is at 0.33, Card 3 is at 0.66, Card 4 is at 0.99
  const threshold = index * 0.333;
  
  // Cards light up mathematically in sync with the line reaching them
  const opacity = useTransform(progress, [Math.max(0, threshold - 0.15), threshold], [0.15, 1]);
  const scale = useTransform(progress, [Math.max(0, threshold - 0.15), threshold], [0.98, 1]);
  const glow = useTransform(progress, [Math.max(0, threshold - 0.15), threshold], ['0px 0px 0px rgba(0,200,150,0)', '0px 0px 20px rgba(0,200,150,0.2)']);
  const borderColor = useTransform(progress, [Math.max(0, threshold - 0.15), threshold], ['rgba(255,255,255,0.03)', 'rgba(0,200,150,0.25)']);

  return (
    <motion.div
      style={{ opacity, scale, borderColor }}
      className="relative group bg-surface/80 backdrop-blur-md p-8 rounded-2xl border transition-colors duration-500"
    >
      <div className="flex flex-col gap-6">
        <motion.span 
          style={{ textShadow: glow }}
          className="text-4xl font-heading font-black text-primary transition-colors duration-500"
        >
          {step.step}
        </motion.span>
        <div>
          <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{step.title}</h3>
          <p className="text-text-muted text-sm leading-relaxed">
            {step.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
