"use client";

import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export function TimelineProgress({ containerRef }: { containerRef: React.RefObject<HTMLElement> }) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Adjusted mapping to ensure the line travels between the nodes correctly
  const progressLine = useTransform(scrollYProgress, [0.4, 0.8], [0, 1]);
  const height = useSpring(useTransform(progressLine, [0, 1], ["0%", "100%"]), {
    stiffness: 80,
    damping: 30
  });
  
  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-border/20 hidden md:block">
      <motion.div 
        className="absolute top-0 left-0 right-0 bg-primary shadow-[0_0_15px_rgba(0,200,150,0.4)]"
        style={{ height }}
      />
    </div>
  );
}
