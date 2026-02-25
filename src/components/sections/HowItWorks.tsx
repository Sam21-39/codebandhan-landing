"use client";

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { step: '01', title: 'Connect Repository', desc: 'Secure read-only access to your Flutter or Express codebases.' },
  { step: '02', title: 'Run Structural Scan', desc: 'Validate against pre-defined or custom architectural guardrails.' },
  { step: '03', title: 'Receive Score', desc: 'Get an instant governance score based on structural integrity.' },
  { step: '04', title: 'Track Risk Trends', desc: 'Visualize how your structural risk changes over every commit.' }
];

export function HowItWorks() {
  return (
    <section className="py-32 bg-surface/10 border-y border-border/40">
      <div className="container-wide">
        <div className="mb-20">
          <span className="label-caps mb-4 block">The Process</span>
          <h2 className="text-4xl md:text-5xl font-heading font-black text-white tracking-tight">
            How It Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(100%+24px)] w-full h-[1px] bg-border-dark group-hover:bg-primary/30 transition-colors" />
              )}
              
              <div className="flex flex-col gap-6">
                <span className="text-4xl font-heading font-black text-primary/20 group-hover:text-primary transition-colors duration-500">
                  {s.step}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{s.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
