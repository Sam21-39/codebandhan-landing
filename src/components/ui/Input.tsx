"use client";

import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  error?: string;
  isTextArea?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement & HTMLTextAreaElement, InputProps>(
  ({ label, error, isTextArea, className, ...props }, ref) => {
    const Component = isTextArea ? 'textarea' : 'input';
    
    return (
      <div className="w-full space-y-2">
        <label className="block text-[10px] uppercase tracking-widest font-black text-text-muted">
          {label}
        </label>
        <Component
          // @ts-ignore
          ref={ref}
          className={cn(
            'w-full bg-surface/50 border rounded-xl px-4 py-3 text-white placeholder:text-text-muted/50 focus:outline-none focus:border-primary/50 focus:bg-surface/80 transition-all',
            error ? 'border-accent-critical' : 'border-border',
            isTextArea ? 'min-h-[120px] resize-none' : '',
            className
          )}
          {...props}
        />
        {error && <p className="text-xs font-bold text-accent-critical">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';
