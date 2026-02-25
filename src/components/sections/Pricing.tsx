"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Open Source",
    price: "$0",
    description: "For public repositories & solo devs.",
    features: [
      "Basic structural scans",
      "Public governance score",
      "Community rulesets",
      "Github PR integration"
    ],
    cta: "Start Free",
    popular: false
  },
  {
    name: "Pro",
    price: "$49",
    period: "/mo",
    description: "For scaling engineering teams.",
    features: [
      "Advanced architecture validation",
      "Trend analytics & history",
      "Custom guardrails",
      "Priority scan queue",
      "Team dashboards"
    ],
    cta: "Go Pro",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Full organization governance.",
    features: [
      "SAML / SSO integration",
      "Dedicated success manager",
      "Custom compliance reporting",
      "Private cloud deployment",
      "24/7 Priority support"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-background relative overflow-hidden">
      <div className="container-wide">
        <div className="text-center mb-20">
          <span className="label-caps mb-4 block">Scalable Governance</span>
          <h2 className="text-4xl md:text-5xl font-heading font-black text-white tracking-tight">
            Plans for Every Team
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card p-10 flex flex-col relative ${plan.popular ? 'border-primary/50 ring-1 ring-primary/20' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-background text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-white">{plan.price}</span>
                  {plan.period && <span className="text-text-muted text-sm">{plan.period}</span>}
                </div>
                <p className="text-text-muted text-sm mt-4 leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="size-3 text-primary" />
                    </div>
                    <span className="text-sm text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.popular ? 'primary' : 'secondary'} 
                fullWidth
                onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
