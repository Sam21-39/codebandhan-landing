"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TimelineProgress } from '@/components/animations/TimelineProgress';

const phases = [
  {
    phase: 'Q1 2026',
    title: 'Governance Core (Active)',
    items: ['Flutter rules engine', 'Express structural validation', 'Developer + admin dashboards', 'Governance scoring system'],
    status: 'current'
  },
  {
    phase: 'Q2 2026',
    title: 'Automation & Scale',
    items: ['CI/CD integration (GitHub Actions, GitLab)', 'Multi-repository governance', 'Trend analytics & forecasting', 'Slack/Discord notifications'],
    status: 'upcoming'
  },
  {
    phase: 'Q3 2026',
    title: 'Framework Expansion',
    items: ['React Native rules engine', 'Native iOS/Android support', 'Backend ecosystem expansion (NestJS, Fastify)'],
    status: 'upcoming'
  },
  {
    phase: 'Q4 2026',
    title: 'Platform Maturity',
    items: ['Custom rule builder (no-code)', 'Organization-wide analytics', 'Compliance reporting layer', 'Self-hosted deployment option'],
    status: 'upcoming'
  }
];

export function Roadmap() {
  const sectionRef = React.useRef<HTMLElement>(null);
  return (
    <section ref={sectionRef} id="roadmap" className="py-32 bg-background relative overflow-hidden">
      <div className="container-wide relative">
        <div className="text-center mb-32">
          <span className="label-caps mb-4 block">Future</span>
          <h2 className="text-4xl md:text-5xl font-heading font-black text-white tracking-tight px-4">
            Roadmap to Multi-Stack Governance
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <TimelineProgress containerRef={sectionRef as React.RefObject<HTMLElement>} />
          
          <div className="space-y-24">
            {phases.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative grid md:grid-cols-2 gap-8 items-start ${i % 2 === 0 ? '' : 'md:text-right'}`}
              >
                {/* Desktop layout toggle */}
                <div className={`${i % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 ${
                    p.status === 'current' ? 'bg-primary/20 text-primary border border-primary/30' : 'bg-surface border border-border text-text-muted'
                  }`}>
                    {p.phase}
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4 tracking-tight">{p.title}</h3>
                  <ul className={`space-y-2 text-text-muted text-sm ${i % 2 === 0 ? '' : 'md:flex md:flex-col md:items-end'}`}>
                    {p.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2">
                        {i % 2 === 0 ? <div className="size-1 rounded-full bg-primary" /> : null}
                        {item}
                        {i % 2 !== 0 ? <div className="size-1 rounded-full bg-primary" /> : null}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Vertical dot */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 hidden md:flex items-center justify-center">
                   <motion.div 
                     initial={{ backgroundColor: 'rgb(55 65 81)', boxShadow: '0 0 0px rgba(0,200,150,0)' }}
                     whileInView={{ 
                       backgroundColor: p.status === 'current' ? 'rgb(0 200 150)' : 'rgb(0 200 150 / 0.4)',
                       boxShadow: p.status === 'current' ? '0 0 15px rgba(0,200,150,0.3)' : '0 0 5px rgba(0,200,150,0.1)',
                       scale: 1.1 // Subtler scale
                     }}
                     viewport={{ once: true, margin: "-150px" }}
                     className={`size-3 rounded-full border-2 border-background z-10 transition-all duration-500`} // Smaller size
                   />
                </div>

                <div className={`${i % 2 === 0 ? 'md:order-2' : 'md:order-1'} hidden md:block`} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
