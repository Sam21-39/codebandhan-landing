"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle2, ShieldAlert } from 'lucide-react';

const violations = [
  { 
    id: 1, 
    title: 'Architectural Drift Detected', 
    icon: <AlertTriangle className="size-4 text-accent-amber" />,
    desc: 'Domain model leaking into presentation layer'
  },
  { 
    id: 2, 
    title: 'Security Guardrail Enforced', 
    icon: <ShieldAlert className="size-4 text-accent-critical" />,
    desc: 'Direct DB access bypassing service layer blocked'
  },
  { 
    id: 3, 
    title: 'Coupling Threshold Exceeded', 
    icon: <AlertTriangle className="size-4 text-accent-amber" />,
    desc: 'Tight coupling threatening microservice extraction'
  }
];

export function ViolationCards() {
  return (
    <div className="space-y-3 w-full max-w-sm">
      {violations.map((v, i) => (
        <motion.div
          key={v.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 + (i * 0.2), duration: 0.4 }}
          className="glass-card p-4 flex items-center gap-4 group"
        >
          <div className="size-8 rounded-lg bg-surface flex items-center justify-center border border-border group-hover:border-primary/40 transition-colors">
            {v.icon}
          </div>
          <div>
            <h4 className="text-sm font-bold text-white tracking-tight">{v.title}</h4>
            <p className="text-[10px] text-text-muted uppercase tracking-wider">{v.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
