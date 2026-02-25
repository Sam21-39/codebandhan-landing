"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { BrainCircuit, GitBranchPlus, GitMerge, FileCode2 } from 'lucide-react';

const problems = [
  {
    title: 'Architectural Drift',
    desc: 'Boundaries blur. Features couple silently.',
    icon: <GitBranchPlus className="size-6 text-primary" />,
  },
  {
    title: 'Subjective Standards',
    desc: '"Feels wrong" isn\'t measurable governance.',
    icon: <BrainCircuit className="size-6 text-primary" />,
  },
  {
    title: 'Individual Dependency',
    desc: 'Discipline relies on senior devs\' vigilance.',
    icon: <FileCode2 className="size-6 text-primary" />,
  },
  {
    title: 'Reactive Enforcement',
    desc: 'Problems surface in production, not PRs.',
    icon: <GitMerge className="size-6 text-primary" />,
  }
];

export function Problem() {
  return (
    <section id="problem" className="py-32 bg-surface/30">
      <div className="container-wide">
        <div className="max-w-3xl mb-16">
          <span className="label-caps mb-4 block">The Challenge</span>
          <h2 className="text-4xl md:text-6xl font-heading font-black text-white leading-tight">
            Most Teams Scale Code. <br/>
            <span className="text-text-muted italic">Few Scale Discipline.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full flex flex-col gap-6 bg-surface/40 hover:bg-surface/60 border border-transparent hover:border-primary/20 hover:shadow-[0_0_30px_rgba(0,200,150,0.15)] transition-all duration-300">
                <div className="size-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center">
                  {p.icon}
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white tracking-tight">{p.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl font-bold text-white tracking-tight">
            Without enforced structure, engineering becomes reactive.
          </p>
        </div>
      </div>
    </section>
  );
}
