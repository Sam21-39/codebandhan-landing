"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Circle } from 'lucide-react';

const frameworks = [
  {
    category: 'Mobile Governance',
    items: [
      { name: 'Flutter', status: 'Active', desc: 'Clean Architecture validation, BLoC/Riverpod patterns, cross-feature boundaries' },
      { name: 'React Native', status: 'Q2 2026', desc: 'Component architecture, state management patterns' },
      { name: 'Native iOS/Android', status: 'Q3 2026', desc: 'MVVM, modularization, dependency rules' },
    ]
  },
  {
    category: 'Backend Governance',
    items: [
      { name: 'Express + TypeScript', status: 'Active', desc: 'Layer separation, dependency injection, service boundaries' },
      { name: 'Node Ecosystem', status: 'Q2 2026', desc: 'NestJS, Fastify, Koa support' },
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
                  <li key={j} className="flex flex-col gap-2 group p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        {item.status === 'Active' ? (
                          <CheckCircle2 className="size-5 text-primary" />
                        ) : (
                          <Circle className="size-5 text-text-muted/30" />
                        )}
                        <span className={item.status === 'Active' ? 'text-white font-bold tracking-tight' : 'text-text-muted font-medium'}>
                          {item.name}
                        </span>
                      </div>
                      <span className={`text-[10px] uppercase tracking-widest font-black px-3 py-1 rounded-full border ${
                        item.status === 'Active' ? 'bg-primary/10 border-primary/20 text-primary' : 
                        'bg-white/5 border-white/10 text-text-muted/50'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    {item.desc && (
                      <p className="text-sm text-text-muted/80 pl-9 leading-relaxed">
                        {item.desc}
                      </p>
                    )}
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
