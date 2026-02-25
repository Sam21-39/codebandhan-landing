"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Check, Lock } from 'lucide-react';

const plans = [
  {
    name: "Guided Beta",
    price: "₹0",
    period: "for 30 days",
    description: "Highly selective cohort. Requires deep engagement.",
    features: [
      "60-min architecture strategy session",
      "Weekly 20-min feedback sync",
      "Governance data access",
      "Case study permission"
    ],
    cta: "Apply for Beta",
    popular: false,
    badge: "Selective",
    disabled: false
  },
  {
    name: "Priority Beta",
    price: "₹15k",
    period: "/mo",
    setup: "+ ₹25k Setup Fee",
    description: "For scaling teams who want implementation without weekly sync.",
    features: [
      "Governance setup & mapping",
      "Custom rule configuration",
      "Admin dashboard access",
      "Monthly governance report",
      "Direct Slack support channel"
    ],
    cta: "Start Priority Beta",
    popular: true,
    badge: "No Sync Required",
    disabled: false
  },
  {
    name: "Production Plans",
    price: "Soon",
    period: "",
    description: "Engineered for scaling organizations.",
    features: [
      "Governance Core (₹35k/mo)",
      "Governance Pro (₹60k/mo)",
      "Governance Enterprise (Custom)",
      "CI/CD native integrations",
      "Multi-repo custom compliance"
    ],
    cta: "Join Waitlist",
    popular: false,
    badge: "Launching Q3",
    disabled: true
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-background relative overflow-hidden">
      <div className="container-wide">
        <div className="text-center mb-20">
          <span className="label-caps mb-4 block">Scalable Governance</span>
          <h2 className="text-4xl md:text-5xl font-heading font-black text-white tracking-tight">
            High-Touch Cohort Beta
          </h2>
          <p className="text-text-muted mt-6 max-w-2xl mx-auto leading-relaxed">
            We are working closely with a limited number of engineering teams to harden the system before general availability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card p-10 flex flex-col relative transition-all ${
                plan.popular ? 'border-primary/50 ring-1 ring-primary/20 bg-surface/20' : ''
              } ${plan.disabled ? 'opacity-50 grayscale hover:grayscale-0 focus-within:grayscale-0 transition-all duration-500' : ''}`}
            >
              {(plan.popular || plan.badge) && (
                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full ${
                  plan.popular ? 'bg-primary text-background' : 'bg-surface border border-border text-text-muted'
                }`}>
                  {plan.badge || (plan.popular && "Most Popular")}
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex flex-col items-start gap-1">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-white">{plan.price}</span>
                    {plan.period && <span className="text-text-muted text-sm">{plan.period}</span>}
                  </div>
                  {plan.setup && (
                    <span className="text-xs font-black uppercase tracking-widest text-primary/80 mt-1">{plan.setup}</span>
                  )}
                </div>
                <p className="text-text-muted text-sm mt-4 leading-relaxed h-10">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-10 flex-grow pt-4 border-t border-border/20">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <div className="size-5 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="size-3 text-primary" />
                    </div>
                    <span className="text-sm text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.popular ? 'primary' : 'secondary'} 
                fullWidth
                disabled={plan.disabled}
                onClick={() => {
                  if (!plan.disabled) {
                    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={plan.disabled ? 'opacity-50 cursor-not-allowed border-border/40 text-text-muted' : ''}
              >
                {plan.disabled && <Lock className="size-3 mr-2 inline-block" />}
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
