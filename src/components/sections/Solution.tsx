"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, BarChart3, Eye } from 'lucide-react';
import { Card } from '@/components/ui/Card';

const capabilities = [
  {
    title: 'Rule-Based Validation',
    desc: 'AST-powered architectural enforcement across Flutter and Express codebases.',
    icon: <ShieldCheck className="size-6 text-primary" />,
  },
  {
    title: 'Developer Visibility',
    desc: 'Violations surfaced in-context without exposing scoring mechanics.',
    icon: <Eye className="size-6 text-primary" />,
  },
  {
    title: 'Governance Analytics',
    desc: 'Admin-level scoring, trend tracking, and structural health metrics.',
    icon: <BarChart3 className="size-6 text-primary" />,
  }
];

export function Solution() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="container-wide">
        <div className="text-center mb-20">
          <span className="label-caps mb-4 block">Capabilities</span>
          <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-6">
            A Governance Layer for Your Codebase
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
            CodeBandhan embeds structured governance into your engineering workflow — validating architectural rules, surfacing violations to developers, and making compliance measurable for leadership.
          </p>
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
              <Card className="h-full flex flex-col items-center text-center p-10 bg-surface/10 border-border/20 hover:bg-surface/20 transition-premium">
                <div className="size-16 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center mb-8">
                  {cap.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{cap.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">
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
