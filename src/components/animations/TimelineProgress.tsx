"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function TimelineProgress({ totalPhases = 4 }: { totalPhases?: number }) {
  const { scrollYProgress } = useScroll();
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  
  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-border-dark hidden md:block">
      <motion.div 
        className="absolute top-0 left-0 right-0 bg-primary/40 shadow-[0_0_15px_rgba(0,200,150,0.5)]"
        style={{ height }}
      />
    </div>
  );
}
