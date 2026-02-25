"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const profiles = [
  "Funded startups scaling from 10 to 50+ developers",
  "Founders who've experienced architectural drift firsthand",
  "Teams adopting structured patterns (Clean Architecture, DDD)",
  "Engineering leaders preparing for long-term product maturity"
];

export function WhoItsFor() {
  return (
    <section className="py-24 bg-surface/10 border-y border-border/40 relative overflow-hidden">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-black text-white tracking-tight mb-6">
              Designed for Teams That Take Engineering Seriously.
            </h2>
            <p className="text-sm font-bold uppercase tracking-widest text-text-muted">
              Not built for side projects or agencies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {profiles.map((profile, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-6 glass-card bg-surface/20"
              >
                <div className="size-6 shrink-0 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                  <Check className="size-4 text-primary" />
                </div>
                <span className="text-white/90 font-medium leading-relaxed">{profile}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
