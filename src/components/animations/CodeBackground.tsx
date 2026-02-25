"use client";

import React, { useMemo, useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TERMINAL_LINES = [
  { text: '> git clone https://github.com/org/repo.git', color: 'primary' },
  { text: '> cb-engine init --framework flutter', color: 'primary' },
  { text: '> identifying architectural boundaries...', color: 'muted' },
  { text: '[OK] 124 components identified.', color: 'success' },
  { text: '> scanning for circular dependencies...', color: 'muted' },
  { text: '[WARN] tight-coupling detected in /lib/core', color: 'amber' },
  { text: '> generating governance score...', color: 'muted' },
  { text: '[SUCCESS] Score: 84/100', color: 'success' },
  { text: '> deploying guardrails to ci/cd...', color: 'primary' },
  { text: '> listening for incoming commits...', color: 'primary' },
];

export function CodeBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {/* Layer 1: Matrix Digital Rain (Canvas) */}
      <MatrixRain />

      {/* Layer 2: Terminal Window Overlay (Right Side) */}
      <div className="absolute top-40 right-20 w-[400px] h-[300px] hidden md:block opacity-[0.25]">
        <div className="w-full h-full bg-surface border border-border/40 rounded-lg overflow-hidden flex flex-col shadow-2xl">
          {/* Terminal Header */}
          <div className="h-8 bg-border/20 flex items-center px-4 gap-2">
            <div className="size-2 rounded-full bg-red-500/50" />
            <div className="size-2 rounded-full bg-amber-500/50" />
            <div className="size-2 rounded-full bg-green-500/50" />
            <span className="text-[10px] text-text-muted ml-2 font-mono uppercase tracking-widest">codebandhan-terminal</span>
          </div>
          
          {/* Terminal Body */}
          <div className="flex-1 p-6 font-mono text-[11px] overflow-hidden">
            <XTerminal />
          </div>
        </div>
      </div>

      {/* Gradients to fade edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent/50 to-background pointer-events-none" />
    </div>
  );
}

function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@&%*<>[]{}|;:";
    const fontSize = 14;
    const columns = width / fontSize;
    const drops: number[] = [];

    for (let x = 0; x < columns; x++) {
      drops[x] = Math.random() * -100;
    }

    const draw = () => {
      // Semi-transparent black to create trailing effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = "#00D1A0"; // CodeBandhan Primary Emerald
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    const interval = setInterval(draw, 66); // Slower for subtlety

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 opacity-[0.08]" // Slightly higher opacity as requested
    />
  );
}

function XTerminal() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % TERMINAL_LINES.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-3">
      <AnimatePresence mode="popLayout">
        {TERMINAL_LINES.slice(0, index + 1).map((line, i) => (
          <motion.div
            key={`${i}-${line.text}`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-start gap-2"
          >
            <span className={cn(
              "font-bold",
              line.color === 'primary' && 'text-primary',
              line.color === 'success' && 'text-primary',
              line.color === 'amber' && 'text-accent-amber',
              line.color === 'muted' && 'text-text-muted'
            )}>
              {line.text}
            </span>
          </motion.div>
        ))}
      </AnimatePresence>
      <motion.div
        animate={{ opacity: [0, 1] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="size-1.5 w-3 h-0.5 bg-primary mt-1"
      />
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
