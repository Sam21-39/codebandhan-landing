"use client";

import React from 'react';
import { motion } from 'framer-motion';

export function Authority() {
  return (
    <section className="py-32 bg-surface/10 border-y border-border/40 relative overflow-hidden">
      <div className="container-wide max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="label-caps mb-4 block">The Mission</span>
          <h2 className="text-4xl md:text-5xl font-heading font-black text-white px-2 leading-tight">
            Engineering Governance <br/>
            <span className="text-primary italic">Is Infrastructure.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6 text-xl text-text-muted leading-relaxed font-medium"
          >
            <p>Linting checks syntax.</p>
            <p>Testing checks behavior.</p>
            <p className="text-white font-bold text-2xl">Governance checks structure.</p>
            <p className="text-lg mt-6">
              As teams scale from 10 to 100 engineers, architectural discipline must become measurable — not dependent on code review gatekeeping.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-10 relative flex flex-col gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="size-16 rounded-full bg-surface border border-border overflow-hidden shrink-0 flex items-center justify-center">
                <img src="/architect-avatar.png" alt="The Architect" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-lg font-black text-white">The Architect</h4>
                <p className="text-sm font-bold text-primary uppercase tracking-widest mt-1 text-[10px]">
                  System Creator
                </p>
              </div>
            </div>
            
            <p className="text-sm text-white/80 leading-relaxed italic border-l-2 border-primary/30 pl-4">
              "CodeBandhan exists to institutionalize what senior engineers already know: structure prevents chaos."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
