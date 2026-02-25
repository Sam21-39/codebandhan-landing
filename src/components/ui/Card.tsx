"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

export function Card({ children, className, animate = true }: CardProps) {
  const Component = animate ? motion.div : 'div';
  
  return (
    <Component
      {...(animate ? {
        whileHover: { 
          y: -4,
          borderColor: 'rgba(0, 200, 150, 0.4)',
          boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.5)'
        },
        transition: { duration: 0.2 }
      } : {})}
      className={cn('glass-card p-6', className)}
    >
      {children}
    </Component>
  );
}
