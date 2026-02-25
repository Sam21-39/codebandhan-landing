"use client";

import React, { useEffect, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

export function GovernanceScore({ targetScore = 78 }: { targetScore?: number }) {
  const spring = useSpring(0, { stiffness: 40, damping: 20 });
  const displayValue = useTransform(spring, (current) => Math.round(current));
  const [value, setValue] = useState(0);

  useEffect(() => {
    spring.set(targetScore);
    return displayValue.on("change", (latest) => setValue(latest));
  }, [targetScore, spring, displayValue]);

  return (
    <div className="relative size-48 md:size-64 flex items-center justify-center">
      {/* Background Circle */}
      <svg className="absolute inset-0 size-full -rotate-90">
        <circle
          cx="50%"
          cy="50%"
          r="45%"
          className="stroke-border-dark fill-none"
          strokeWidth="8"
        />
        {/* Animated Progress Circle */}
        <motion.circle
          cx="50%"
          cy="50%"
          r="45%"
          className="stroke-primary fill-none"
          strokeWidth="8"
          strokeLinecap="round"
          style={{
            pathLength: spring.get() / 100,
          }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
      </svg>
      
      <div className="text-center">
        <motion.span className="text-5xl md:text-7xl font-heading font-black text-white leading-none">
          {value}
        </motion.span>
        <p className="text-[10px] uppercase tracking-widest font-black text-text-muted mt-2">
          Governance Score
        </p>
      </div>
    </div>
  );
}
