"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Check, Lock } from 'lucide-react';

const betaFeatures = [
  "Full governance engine (Flutter + Express)",
  "Weekly automated scans",
  "Admin + developer dashboards",
  "Architecture violation reports",
  "Email + Slack support (24hr response)",
  "Monthly governance summary"
];

const productionPlans = [
  {
    name: "Professional",
    monthly: "₹18,000",
    annual: "₹15,000/mo*",
    repos: "Up to 3",
    size: "10-30 devs",
    support: "Email + Slack",
    strategy: "—",
    deployment: "Cloud"
  },
  {
    name: "Team",
    monthly: "₹32,000",
    annual: "₹26,666/mo*",
    repos: "Up to 10",
    size: "30-100 devs",
    support: "Priority Slack",
    strategy: "Bi-weekly",
    deployment: "Cloud"
  },
  {
    name: "Enterprise",
    monthly: "Custom",
    annual: "Negotiated",
    repos: "Unlimited",
    size: "100+",
    support: "Dedicated account",
    strategy: "Weekly",
    deployment: "Cloud or Self-hosted"
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-background relative overflow-hidden">
      <div className="container-wide">
        
        {/* BETA PROGRAM (SINGLE OPTION) */}
        <div className="max-w-3xl mx-auto mb-32">
          <div className="text-center mb-12">
            <span className="label-caps mb-4 block">Limited Beta Cohort</span>
            <p className="text-lg text-text-muted leading-relaxed">
              We're onboarding a limited number of engineering teams into a structured beta program to refine governance rules through real-world implementation.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 md:p-14 relative border-primary/50 ring-1 ring-primary/20 bg-surface/20"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full bg-primary text-background">
              Beta Access
            </div>

            <div className="flex flex-col md:flex-row gap-12 items-center">
              {/* Left Side: Pricing & CTA */}
              <div className="flex-1 text-center md:text-left">
                <div className="mb-6">
                  <div className="flex items-baseline justify-center md:justify-start gap-1">
                    <span className="text-5xl font-black text-white">₹12,000</span>
                    <span className="text-text-muted">/month</span>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary mt-3 inline-block">Minimum 3-month commitment</span>
                </div>
                
                <p className="text-sm font-medium text-white/80 mb-8 italic">
                  Beta pricing locks in permanently for early adopters.
                </p>

                <Button 
                  size="lg"
                  fullWidth
                  onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Apply for Beta Cohort
                </Button>
                
                <p className="text-[10px] text-text-muted mt-4 font-bold uppercase tracking-widest text-center">
                  Applications reviewed within 48 hours. 8 seats remaining this cohort.
                </p>
              </div>

              {/* Right Side: Features */}
              <div className="flex-1 w-full flex flex-col justify-center">
                <ul className="space-y-4">
                  {betaFeatures.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className="size-5 shrink-0 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <Check className="size-3 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-white/90 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* PRODUCTION PLANS */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-black text-white tracking-tight flex items-center justify-center gap-3">
              <Lock className="size-6 text-text-muted" />
              Production Plans (Launching Q2 2026)
            </h2>
          </div>

          <div className="overflow-x-auto pb-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-4 border-b border-white/10 text-text-muted font-bold"></th>
                  {productionPlans.map((plan) => (
                    <th key={plan.name} className="p-4 border-b border-white/10 text-white font-black text-xl w-1/4">
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="p-4 border-b border-white/5 font-bold text-text-muted">Monthly</td>
                  {productionPlans.map((plan) => (
                    <td key={plan.name} className="p-4 border-b border-white/5 text-white/90 font-medium">{plan.monthly}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 border-b border-white/5 font-bold text-text-muted">Annual</td>
                  {productionPlans.map((plan) => (
                    <td key={plan.name} className="p-4 border-b border-white/5 text-primary font-bold">{plan.annual}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 border-b border-white/5 font-bold text-text-muted">Repositories</td>
                  {productionPlans.map((plan) => (
                    <td key={plan.name} className="p-4 border-b border-white/5 text-white/80">{plan.repos}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 border-b border-white/5 font-bold text-text-muted">Team Size</td>
                  {productionPlans.map((plan) => (
                    <td key={plan.name} className="p-4 border-b border-white/5 text-white/80">{plan.size}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 border-b border-white/5 font-bold text-text-muted">Support</td>
                  {productionPlans.map((plan) => (
                    <td key={plan.name} className="p-4 border-b border-white/5 text-white/80">{plan.support}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 border-b border-white/5 font-bold text-text-muted">Strategy Calls</td>
                  {productionPlans.map((plan) => (
                    <td key={plan.name} className="p-4 border-b border-white/5 text-white/80">{plan.strategy}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 border-b border-white/5 font-bold text-text-muted">Deployment</td>
                  {productionPlans.map((plan) => (
                    <td key={plan.name} className="p-4 border-b border-white/5 text-white/80">{plan.deployment}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-text-muted mt-2 gap-4">
            <span>*Annual plans include 2 months free</span>
            <span>Full production rollout after beta validation. Beta participants transition seamlessly.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
