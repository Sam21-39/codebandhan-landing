"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Circle } from 'lucide-react';

const frameworks = [
  {
    category: 'Mobile Governance',
    items: [
      { name: 'Flutter', status: 'Active' },
      { name: 'React Native', status: 'Planned' },
      { name: 'Native iOS / Android', status: 'Planned' },
    ]
  },
  {
    category: 'Backend Governance',
    items: [
      { name: 'Express + TypeScript', status: 'Active' },
      { name: 'Node Ecosystem', status: 'Expanding' },
    ]
  }
];

export function FrameworkCoverage() {
  return (
    <section className="py-32 bg-surface/10">
      <div className="container-wide">
        <div className="text-center mb-20">
          <span className="label-caps mb-4 block">Ecosystem</span>
          <h2 className="text-4xl md:text-5xl font-heading font-black text-white px-2">
            Framework Coverage
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {frameworks.map((cat, i) => (
            <div key={i} className="glass-card p-10 flex flex-col gap-8">
              <h3 className="text-2xl font-black text-white tracking-tight">{cat.category}</h3>
              <ul className="space-y-6">
                {cat.items.map((item, j) => (
                  <li key={j} className="flex items-center justify-between group">
                    <div className="flex items-center gap-4">
                      {item.status === 'Active' ? (
                        <CheckCircle2 className="size-5 text-primary" />
                      ) : (
                        <Circle className="size-5 text-text-muted/30" />
                      )}
                      <span className={item.status === 'Active' ? 'text-white font-bold' : 'text-text-muted font-medium'}>
                        {item.name}
                      </span>
                    </div>
                    <span className={`text-[10px] uppercase tracking-widest font-black px-3 py-1 rounded-full border ${
                      item.status === 'Active' ? 'bg-primary/10 border-primary/20 text-primary' : 
                      item.status === 'Expanding' ? 'bg-accent-amber/10 border-accent-amber/20 text-accent-amber' :
                      'bg-white/5 border-white/10 text-text-muted/50'
                    }`}>
                      {item.status}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
