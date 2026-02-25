"use client";

import React from 'react';
import { motion } from 'framer-motion';

export function Vision() {
  return (
    <section className="py-32 bg-surface/5 border-t border-border/40">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-heading font-black text-white leading-tight mb-8">
              Engineering Governance <br/>
              <span className="text-primary italic text-3xl md:text-5xl">Is Infrastructure.</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 py-12 border-y border-border/30 my-12">
              <div className="space-y-2">
                <span className="text-white font-black tracking-tighter text-xl italic uppercase">Linting</span>
                <p className="text-text-muted text-xs uppercase tracking-widest font-black">Checks Syntax</p>
              </div>
              <div className="space-y-2">
                <span className="text-white font-black tracking-tighter text-xl italic uppercase">Testing</span>
                <p className="text-text-muted text-xs uppercase tracking-widest font-black">Checks Behavior</p>
              </div>
              <div className="space-y-2">
                <span className="text-primary font-black tracking-tighter text-xl italic uppercase">Governance</span>
                <p className="text-primary text-xs uppercase tracking-widest font-black">Checks Structure</p>
              </div>
            </div>

            <p className="text-lg md:text-2xl text-text-muted leading-relaxed font-medium">
              As engineering teams scale, architecture discipline must become measurable. We're building the layer that ensures your codebase health doesn't depend on the mood of your senior reviewers.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
