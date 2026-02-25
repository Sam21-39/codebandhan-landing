"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { CheckCircle2 } from 'lucide-react';

const betaFeatures = [
  'Repository onboarding (Flutter/Express)',
  'Weekly automated structural scans',
  'Governance trend tracking & dashboards',
  'Structured improvement insights',
  'Optional 1:1 strategy session'
];

export function BetaAccess() {
  const scrollToForm = () => {
    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="container-wide">
        <div className="glass-card p-12 md:p-20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8">
             <div className="bg-accent-amber/10 border border-accent-amber/20 text-accent-amber text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full">
               Limited Enrollment
             </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="label-caps mb-4 block">Beta Phase</span>
              <h2 className="text-4xl md:text-5xl font-heading font-black text-white leading-tight mb-8">
                Request Beta Access: <br/>
                <span className="text-primary italic">30-Day Evaluation.</span>
              </h2>
              <p className="text-text-muted mb-10 leading-relaxed">
                We onboard a limited number of engineering teams into a structured governance program to ensure structural integrity as they scale.
              </p>
              
              <Button onClick={scrollToForm} size="lg">
                Request Access
              </Button>
              <p className="text-[10px] text-text-muted uppercase tracking-widest mt-4 font-bold">
                Applications reviewed within 48 hours.
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white underline decoration-primary/50 underline-offset-8 decoration-2 mb-8">
                What's Included
              </h4>
              <ul className="space-y-5">
                {betaFeatures.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 group/item"
                  >
                    <div className="size-6 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 group-hover/item:border-primary/50 transition-colors">
                      <CheckCircle2 className="size-3 text-primary" />
                    </div>
                    <span className="text-white font-medium tracking-tight">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
