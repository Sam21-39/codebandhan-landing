"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { applicationSchema, type ApplicationData } from '@/lib/validation';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const techOptions = ['Flutter', 'Express', 'React Native', 'Native iOS', 'Native Android', 'Next.js'];
const teamSizes = ['Solo', '2-5', '6-15', '16-50', '50+'];

export function ApplicationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = useForm<ApplicationData>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      techStack: [],
    }
  });

  const selectedTech = watch('techStack');

  const toggleTech = (tech: string) => {
    const current = selectedTech || [];
    if (current.includes(tech)) {
      setValue('techStack', current.filter(t => t !== tech));
    } else {
      setValue('techStack', [...current, tech]);
    }
  };

  const onSubmit = async (data: ApplicationData) => {
    setIsSubmitting(true);
    setError(null);
    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to submit');
      
      setIsSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="application-form" className="py-32 bg-background relative overflow-hidden">
      <div className="container-wide max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              className="glass-card p-10 md:p-16"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-heading font-black text-white mb-4">Engineering Without Governance Doesn't Scale.</h2>
                <p className="text-text-muted text-sm">Join the next beta cohort. Limited seats. Applications reviewed manually.</p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input 
                    label="Full Name" 
                    placeholder="Jane Doe" 
                    {...register('fullName')} 
                    error={errors.fullName?.message}
                  />
                  <Input 
                    label="Work Email" 
                    placeholder="jane@company.com" 
                    {...register('email')} 
                    error={errors.email?.message}
                  />
                </div>

                <Input 
                  label="Company (Optional)" 
                  placeholder="Acme Inc." 
                  {...register('company')} 
                  error={errors.company?.message}
                />

                <div className="space-y-3">
                  <label className="block text-[10px] uppercase tracking-widest font-black text-text-muted">
                    Tech Stack (Multi-select)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {techOptions.map(tech => (
                      <button
                        key={tech}
                        type="button"
                        onClick={() => toggleTech(tech)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
                          selectedTech?.includes(tech) 
                            ? 'bg-primary/20 border-primary text-primary shadow-[0_0_15px_rgba(0,200,150,0.1)]' 
                            : 'bg-surface border-border text-text-muted hover:border-border-dark'
                        }`}
                      >
                        {tech}
                      </button>
                    ))}
                  </div>
                  {errors.techStack && <p className="text-xs font-bold text-accent-critical">{errors.techStack.message}</p>}
                </div>

                <div className="space-y-3">
                  <label className="block text-[10px] uppercase tracking-widest font-black text-text-muted">
                    Team Size
                  </label>
                  <select
                    {...register('teamSize')}
                    className="w-full bg-surface/50 border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-all appearance-none"
                  >
                    <option value="" disabled>Select size...</option>
                    {teamSizes.map(size => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                  {errors.teamSize && <p className="text-xs font-bold text-accent-critical">{errors.teamSize.message}</p>}
                </div>

                <Input 
                  label="Primary Architecture Concern" 
                  placeholder="What structural risks keep you up at night?" 
                  isTextArea 
                  {...register('architectureConcern')} 
                  error={errors.architectureConcern?.message}
                />

                <Input 
                  label="LinkedIn Profile (Optional)" 
                  placeholder="linkedin.com/in/username" 
                  {...register('linkedin')} 
                  error={errors.linkedin?.message}
                />

                {error && <p className="text-sm font-bold text-accent-critical text-center">{error}</p>}

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full h-16" 
                  isLoading={isSubmitting}
                >
                  Request Beta Access
                </Button>

                <div className="pt-4 flex flex-col md:flex-row justify-center items-center gap-4 text-xs font-medium text-text-muted mt-4">
                  <span className="flex items-center gap-1"><CheckCircle2 className="size-3 text-primary" /> 48-hour application review</span>
                  <span className="hidden md:block text-border">•</span>
                  <span className="flex items-center gap-1"><CheckCircle2 className="size-3 text-primary" /> Personal onboarding call</span>
                  <span className="hidden md:block text-border">•</span>
                  <span className="flex items-center gap-1"><CheckCircle2 className="size-3 text-primary" /> 14-day money-back guarantee</span>
                </div>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card p-16 text-center space-y-8"
            >
              <div className="size-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="size-10 text-primary" />
              </div>
              <h2 className="text-4xl font-heading font-black text-white">Application Received.</h2>
              <p className="text-text-muted max-w-sm mx-auto leading-relaxed text-lg">
                We'll review your engineering stack and respond within <span className="text-white font-bold">48 hours</span>.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
