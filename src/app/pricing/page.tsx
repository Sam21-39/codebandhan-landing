"use client";

import Link from "next/link";
import { 
  ArrowLeftIcon, 
  CheckIcon, 
  SparklesIcon, 
  ShieldCheckIcon,
  ChartBarIcon,
  CpuChipIcon,
  RocketLaunchIcon,
  PhoneIcon
} from "@heroicons/react/24/outline";

export default function PricingPage() {
  const BETA_FEATURES = [
    "Up to 3 repositories",
    "Up to 10 developers",
    "12 Governance Rules",
    "Weekly automated scans",
    "Governance Score dashboard",
    "Violation breakdown (Admin + Dev view)",
    "90-day history tracking",
    "CI-ready scoring architecture (beta mode)",
    "Direct founder access",
    "Early feature influence"
  ];

  const ROADMAP_PLANS = [
    { name: "Starter", price: "₹7,500", desc: "1 repo, 5 devs", status: "v1.0 Release" },
    { name: "Growth", price: "₹15,000", desc: "5 repos, 20 devs, CI integration", status: "v1.0 Release" },
    { name: "Scale", price: "₹35,000", desc: "Unlimited repos/devs, Analytics", status: "v1.0 Release" }
  ];

  return (
    <main className="min-h-screen bg-background-dark text-text-main selection:bg-primary/30 selection:text-white">
      {/* 1. Header/Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
        <div className="glass-panel px-6 py-3 rounded-2xl flex items-center gap-8 border border-border-dark shadow-2xl">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="size-8 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30 group-hover:scale-110 transition-transform">
              <ArrowLeftIcon className="size-4 text-primary" />
            </div>
            <span className="font-display font-black text-lg tracking-tighter text-white uppercase italic">Back to Home</span>
          </Link>
        </div>
      </nav>

      {/* 2. Strategy Hero */}
      <section className="relative pt-40 pb-20 px-6 lg:px-8 overflow-hidden bg-grid-pattern">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[100px] rounded-full -z-10"></div>
        
        <div className="mx-auto max-w-[1280px]">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-xs font-black uppercase tracking-[0.15em] text-primary">v0.1 Closed Beta • Only 25 Seats</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]">
              Invest in <span className="text-primary italic">Permanence.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-text-muted leading-relaxed font-medium max-w-3xl mx-auto">
              We are onboarding a limited number of Flutter teams who want architectural governance before scaling chaos sets in. No tier confusion. Serious teams only.
            </p>
          </div>
        </div>
      </section>

      {/* 3. The Beta Plan */}
      <section className="py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-[1000px]">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-accent/30 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity rounded-[3rem]"></div>
            
            <div className="relative bg-surface-dark/60 border-2 border-primary/50 rounded-[3rem] overflow-hidden shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-5 h-full">
                {/* Left Side: Pricing & CTA */}
                <div className="lg:col-span-2 p-10 lg:p-14 border-b lg:border-b-0 lg:border-r border-border-dark flex flex-col justify-center bg-background-dark/40">
                  <span className="label-caps mb-4 block text-primary">CodeBandhan Beta Access</span>
                  <div className="mb-8">
                    <span className="text-6xl font-black text-white">₹9,999</span>
                    <span className="text-text-muted font-bold text-xl"> / month</span>
                  </div>
                  
                  <div className="space-y-4 mb-10">
                    <div className="flex items-center gap-3 text-sm font-bold text-white">
                      <CheckIcon className="size-5 text-primary" />
                      <span>Pricing locked for life</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm font-bold text-white">
                      <CheckIcon className="size-5 text-primary" />
                      <span>Direct Founder Access</span>
                    </div>
                  </div>

                  <Link 
                    href="/#lead-form"
                    className="btn btn-primary w-full h-16 text-lg font-black uppercase tracking-widest shadow-xl shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-all"
                  >
                    Apply for Beta
                  </Link>
                  
                  <p className="mt-6 text-center text-xs text-text-muted font-bold uppercase tracking-widest leading-relaxed">
                    Min. 2-month commitment <br/> for architecture stabilization.
                  </p>
                </div>

                {/* Right Side: Features */}
                <div className="lg:col-span-3 p-10 lg:p-14 bg-surface-dark/20 flex flex-col justify-center">
                  <h4 className="text-lg font-black text-white mb-8 uppercase tracking-widest italic tracking-tight">What You Get —</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                    {BETA_FEATURES.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <SparklesIcon className="size-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-text-main leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10 flex items-center gap-4 group/audit cursor-pointer transition-colors hover:bg-primary/10">
                    <div className="size-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary group-hover/audit:scale-110 transition-transform">
                      <PhoneIcon className="size-6" />
                    </div>
                    <div>
                      <h5 className="font-bold text-white leading-tight">Free 30-min Architecture Audit</h5>
                      <p className="text-xs text-text-muted mt-1">Book a call before onboarding to ensure we're the right fit.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Release Roadmap (Future Tiers) */}
      <section className="py-20 px-6 lg:px-8 max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <span className="label-caps mb-4 block">Product Evolution</span>
          <h2 className="text-3xl md:text-5xl font-black text-white">v1.0 Release <span className="text-primary italic">Roadmap.</span></h2>
          <p className="text-text-muted mt-4 font-medium opacity-60">Future tiers for teams not requiring founder-led governance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-60 pointer-events-none grayscale">
          {ROADMAP_PLANS.map((plan, i) => (
            <div key={i} className="p-8 rounded-[2.5rem] bg-surface-dark/20 border border-border-dark flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  <span className="text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded bg-border-dark text-text-muted">{plan.status}</span>
                </div>
                <div className="text-3xl font-black text-white mb-4">{plan.price}</div>
                <p className="text-sm text-text-muted font-medium mb-8 leading-relaxed">{plan.desc}</p>
              </div>
              <div className="h-[1px] bg-border-dark w-full"></div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Terms / Trust Section */}
      <section className="py-32 px-6 lg:px-8 border-t border-border-dark bg-surface-dark/10">
        <div className="mx-auto max-w-[1280px] grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-8">Positioning <br/> <span className="text-primary italic">Statement.</span></h2>
              <div className="space-y-6 text-lg text-text-muted leading-relaxed font-medium">
                <p>₹9,999/month is not a tool subscription. It is a strategic investment in the structural integrity of your product.</p>
                <p>We say no to teams who aren&apos;t ready to prioritize architecture. This ensures my bandwidth is reserved for high-growth teams that value permanence over vanity speed.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-background-dark border border-border-dark">
                <CpuChipIcon className="size-10 text-primary mb-6" />
                <h4 className="text-xl font-bold text-white mb-3">Flutter Exclusive</h4>
                <p className="text-sm text-text-muted leading-relaxed">Purpose-built for v0.x Flutter architectures. We understand Dart patterns better than anyone.</p>
              </div>
              <div className="p-8 rounded-3xl bg-background-dark border border-border-dark">
                <RocketLaunchIcon className="size-10 text-primary mb-6" />
                <h4 className="text-xl font-bold text-white mb-3">2-Month Filter</h4>
                <p className="text-sm text-text-muted leading-relaxed">A commitment required to stabilize foundations and train your team on governed patterns.</p>
              </div>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 lg:px-8 border-t border-border-dark">
        <div className="mx-auto max-w-[1280px] flex flex-col md:flex-row justify-between items-center gap-8 opacity-50">
          <span className="font-display font-black text-lg tracking-tighter text-white uppercase italic">CODEBANDHAN</span>
          <p className="text-sm">© 2026 CodeBandhan. Engineering Governance Platform.</p>
        </div>
      </footer>
    </main>
  );
}
