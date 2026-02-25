"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, BarChart3, Eye } from 'lucide-react';
import { Card } from '@/components/ui/Card';

const capabilities = [
  {
    title: 'Structural Validation',
    desc: 'AST-based rule engine detects architectural violations automatically at the CI level.',
    icon: <ShieldCheck className="size-6 text-primary" />,
  },
  {
    title: 'Governance Scoring',
    desc: 'Weighted structural scoring across defined engineering pillars: safety, modularity, and scalability.',
    icon: <BarChart3 className="size-6 text-primary" />,
  },
  {
    title: 'Developer Visibility',
    desc: 'Violations surfaced clearly in PRs without exposing internal scoring mechanics to keep reviews focused.',
    icon: <Eye className="size-6 text-primary" />,
  }
];

export function Solution() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="container-wide">
        <div className="text-center mb-20">
          <span className="label-caps mb-4 block">Capabilities</span>
          <h2 className="text-4xl md:text-5xl font-heading font-black text-white">
            Govern Before It Breaks.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Card className="h-full flex flex-col items-center text-center p-10 bg-surface/20 border-border/30 hover:bg-surface/40 transition-premium">
                <div className="size-16 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center mb-8">
                  {cap.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{cap.title}</h3>
                <p className="text-text-muted leading-relaxed">
                  {cap.desc}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
