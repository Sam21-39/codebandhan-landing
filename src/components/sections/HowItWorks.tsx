"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const steps = [
  { step: '01', title: 'Link Codebase', desc: 'Secure read-only access to your Flutter or Express codebases.' },
  { step: '02', title: 'Analyze Architecture', desc: 'Validate against pre-defined or custom architectural guardrails.' },
  { step: '03', title: 'Audit Integrity', desc: 'Get an instant governance score based on structural integrity.' },
  { step: '04', title: 'Monitor Evolution', desc: 'Visualize how your structural risk changes over every commit.' }
];

export function HowItWorks() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Adjusted mapping so the line connects cards as they enter view
  const progressLine = useTransform(scrollYProgress, [0.35, 0.75], [0, 1]);
  const scaleX = useSpring(progressLine, {
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
            How It Works
          </h2>
        </div>

        <div className="relative">
          {/* Progress Line - Placed behind cards with lower z-index */}
          <div className="hidden lg:block absolute top-[44px] left-[12.5%] right-[12.5%] h-[2px] bg-border/20 z-0">
            <motion.div 
              className="h-full bg-primary shadow-[0_0_15px_rgba(0,200,150,0.5)] origin-left"
              style={{ scaleX }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((s, i) => (
              <StepItem key={i} step={s} index={i} progress={scrollYProgress} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepItem({ step, index, progress }: { step: any, index: number, progress: any }) {
  // Faster thresholds (0.1, 0.25, 0.4, 0.55) to ensure they light up early in view
  // Thresholds adjusted to match the 0.35-0.75 range
  const threshold = 0.35 + index * 0.13;
  const opacity = useTransform(progress, [threshold - 0.15, threshold], [0.15, 1]);
  const scale = useTransform(progress, [threshold - 0.15, threshold], [0.98, 1]);
  const glow = useTransform(progress, [threshold - 0.15, threshold], ['0px 0px 0px rgba(0,200,150,0)', '0px 0px 20px rgba(0,200,150,0.2)']);
  const borderColor = useTransform(progress, [threshold - 0.15, threshold], ['rgba(255,255,255,0.03)', 'rgba(0,200,150,0.25)']);

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
