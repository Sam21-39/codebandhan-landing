"use client";

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

export function CodeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Determine screen size to generate enough blocks
    const updateSize = () => {
      if (containerRef.current) {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    };
    
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none select-none flex items-center justify-center bg-background"
    >
      {/* Premium Grid Pattern Background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
        }}
      />

      {/* 
        We use a massive scale and rotation so it feels vast and abstract, 
        but we generate enough squares based on the window size.
      */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.25] transform -skew-y-6 scale-[1.75] md:scale-[1.25]">
        {dimensions.width > 0 && <GithubHeatmap width={dimensions.width} height={dimensions.height} />}
      </div>

      {/* Gradients to fade edges and keep text readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent/60 to-background pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background pointer-events-none" />
    </div>
  );
}

// 20px is rough size of cell + gap (16px + 4px)
const CELL_SIZE = 24;

function GithubHeatmap({ width, height }: { width: number, height: number }) {
  const [grid, setGrid] = useState<number[][]>([]);
  const [isMounted, setIsMounted] = useState(false);

  // We calculate rows and cols based on screen size, adding extra to account for rotation/scaling
  const cols = Math.ceil(width / CELL_SIZE) + 20; 
  const rows = Math.ceil(height / CELL_SIZE) + 10;

  useEffect(() => {
    setIsMounted(true);
    // Initialize grid with random activity seeded
    const initialGrid = Array.from({ length: cols }, () =>
      Array.from({ length: rows }, () => Math.random() > 0.75 ? Math.floor(Math.random() * 3) : 0)
    );
    setGrid(initialGrid);

    // Animate hot spots to simulate code activity
    const interval = setInterval(() => {
      setGrid((prevGrid) => {
        const newGrid = [...prevGrid.map(col => [...col])];
        
        // Randomly update some cells per tick to simulate continuous activity
        // the number of updates scales with the screen size
        const updates = Math.floor((cols * rows) * 0.05); // update 5% of cells every tick
        for(let i=0; i<updates; i++) {
          const w = Math.floor(Math.random() * cols);
          const d = Math.floor(Math.random() * rows);
          
          const current = newGrid[w][d];
          const modifier = Math.random() > 0.5 ? 1 : -1;
          newGrid[w][d] = Math.max(0, Math.min(4, current + modifier));
        }

        return newGrid;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, [cols, rows]);

  if (!isMounted || grid.length === 0) return null;

  return (
    <div className="flex gap-2 p-4">
      {grid.map((col, cIndex) => (
        <div key={cIndex} className="flex flex-col gap-2">
          {col.map((level, rIndex) => {
            // Color matching primary #00C896
            const bgColor = 
              level === 0 ? 'rgba(255, 255, 255, 0.02)' : 
              level === 1 ? 'rgba(0, 200, 150, 0.15)' :
              level === 2 ? 'rgba(0, 200, 150, 0.3)' :
              level === 3 ? 'rgba(0, 200, 150, 0.6)' :
              'rgba(0, 200, 150, 0.9)';

            return (
              <motion.div
                key={`${cIndex}-${rIndex}`}
                initial={false}
                animate={{ backgroundColor: bgColor }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="size-4 md:size-5 rounded-sm"
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}
