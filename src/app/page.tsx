"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { 
  ShieldCheckIcon, 
  CodeBracketIcon, 
  CpuChipIcon, 
  ShareIcon, 
  BoltIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ArrowRightIcon,
  DocumentMagnifyingGlassIcon,
  PresentationChartLineIcon,
  CubeTransparentIcon
} from "@heroicons/react/24/outline";

type LeadForm = {
  // Section A - Founder Info
  fullName: string;
  companyName: string;
  workEmail: string;
  linkedIn: string;
  website: string;
  
  // Section B - Product Info
  flutterVersion: string;
  appStage: string;
  teamSize: string;
  
  // Section C - Architecture Maturity
  stateManagement: string;
  enforceRules: string;
  biggestPain: string;
  
  // Section D - Qualification
  revenueRange: string;
  paymentIntent: string;
};

type TrackingMeta = {
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  referrer: string;
  landingPath: string;
};

const INITIAL_FORM: LeadForm = {
  fullName: "",
  companyName: "",
  workEmail: "",
  linkedIn: "",
  website: "",
  flutterVersion: "3.22+",
  appStage: "MVP",
  teamSize: "2-5 devs",
  stateManagement: "Bloc",
  enforceRules: "Informal",
  biggestPain: "",
  revenueRange: "<5L",
  paymentIntent: "Maybe",
};

const PILLARS = [
  {
    title: "Architecture Integrity",
    description: "Automated layer boundary validation. Prevent business logic leaks into UI folders.",
    icon: ShieldCheckIcon
  },
  {
    title: "State Discipline",
    description: "Enforce consistent state management patterns (Bloc/Riverpod) across all modules.",
    icon: CubeTransparentIcon
  },
  {
    title: "Dependency Stability",
    description: "Monitor package coupling. Block circular dependencies before they hit production.",
    icon: ShareIcon
  },
  {
    title: "Dev Hygiene",
    description: "High-granularity linting tailored for Flutter scalability and repository health.",
    icon: CodeBracketIcon
  },
  {
    title: "Performance Risk",
    description: "Identify heavy widgets and non-optimized render cycles at the PR stage.",
    icon: BoltIcon
  }
];

export default function Home() {
  const [intent, setIntent] = useState<"Apply for Beta" | "Book Free Audit">(
    "Apply for Beta",
  );
  const [form, setForm] = useState<LeadForm>(INITIAL_FORM);
  const [tracking, setTracking] = useState<TrackingMeta>({
    utmSource: "",
    utmMedium: "",
    utmCampaign: "",
    referrer: "",
    landingPath: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setTracking({
      utmSource: params.get("utm_source") ?? "",
      utmMedium: params.get("utm_medium") ?? "",
      utmCampaign: params.get("utm_campaign") ?? "",
      referrer: typeof document !== "undefined" ? document.referrer : "",
      landingPath: typeof window !== "undefined" ? window.location.href : "",
    });
  }, []);

  const moveToForm = (nextIntent: "Apply for Beta" | "Book Free Audit") => {
    setIntent(nextIntent);
    if (nextIntent === "Book Free Audit") {
      window.open("https://calendly.com/sumitp-dev/30min", "_blank");
    } else {
      document.getElementById("lead-form")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setStatusMessage("");
    setIsSuccess(false);

    const payload = {
      ...form,
      interest: intent,
      version: "0.1.0-beta",
      ...tracking,
    };

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to submit application.");
      }

      setIsSuccess(true);
      setStatusMessage("Application Received. We review within 48 hours.");
      setForm(INITIAL_FORM);
    } catch {
      setIsSuccess(false);
      setStatusMessage("Submission failed. Please try again or contact support.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-border-dark bg-background-dark/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/20 text-primary glow-primary">
              <CpuChipIcon className="size-6" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white font-display uppercase italic">CodeBandhan</span>
          </div>
          <nav className="hidden md:flex items-center gap-10">
            <a className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-white transition-colors" href="#problem">Problem</a>
            <a className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-white transition-colors" href="#solution">Solution</a>
            <a className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-white transition-colors" href="#how-it-works">Process</a>
            <Link href="/pricing" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-white transition-colors">Pricing</Link>
          </nav>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => moveToForm("Apply for Beta")}
              className="hidden sm:flex text-sm font-bold bg-white text-black hover:bg-gray-200 px-5 py-2.5 rounded-xl transition-all"
            >
              Get Started
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* 1. Hero Section */}
        <section className="relative pt-24 pb-20 md:pt-40 md:pb-48 px-6 lg:px-8 overflow-hidden bg-grid-pattern">
          {/* Ambient Glows */}
          <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full -z-10"></div>
          <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-accent/5 blur-[100px] rounded-full -z-10"></div>
          
          <div className="mx-auto max-w-[1280px] relative">
            <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-xs font-black uppercase tracking-[0.15em] text-primary">v0.1 Closed Beta • Flutter Only</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[0.9] md:leading-[1]">
                Govern Your Flutter <br/>
                <span className="text-primary italic">Architecture</span> Before <br/>
                It Slows You Down.
              </h1>
              
              <p className="text-lg md:text-2xl text-text-muted max-w-2xl leading-relaxed font-medium">
                Automated architecture validation & governance scoring built specifically for scaling Flutter teams. Capture structural risk before it becomes technical debt.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-6 mt-4 w-full sm:w-auto">
                <button 
                  onClick={() => moveToForm("Apply for Beta")}
                  className="w-full sm:w-auto btn btn-primary text-lg px-10 h-16 group"
                >
                  Apply for Beta
                  <ArrowRightIcon className="size-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => moveToForm("Book Free Audit")}
                  className="w-full sm:w-auto btn btn-secondary text-lg px-10 h-16"
                >
                  Book Free Audit
                </button>
              </div>

              <div className="mt-16 flex items-center gap-8 opacity-40 grayscale pointer-events-none">
                <span className="text-sm font-black uppercase tracking-widest text-text-muted">Trusted by 200+ Flutter Leads</span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. The Problem */}
        <section id="problem" className="py-32 px-6 lg:px-8 border-y border-border-dark bg-surface-dark/20">
          <div className="mx-auto max-w-[1280px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <span className="label-caps mb-4 block">The Context</span>
                <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                  Scaling Flutter is a <span className="text-danger italic">Risk Management</span> Problem.
                </h2>
                <div className="space-y-6">
                  <p className="text-xl text-text-muted leading-relaxed">
                    As your codebase grows, keeping your architecture clean becomes a manual, error-prone battle. Generic tools don&apos;t understand Flutter patterns.
                  </p>
                  <p className="text-xl text-text-muted leading-relaxed">
                    We've seen it 100 times: technical debt silently compounding until the next rewrite is the only option left.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {[
                  { title: "Features leaking across modules", desc: "Circular imports and unintended coupling breaking modularity." },
                  { title: "Mixed state management patterns", desc: "Bloc, Riverpod, and Provider colliding in a single feature." },
                  { title: "Firebase logic inside UI", desc: "Infrastructure leaks that make testing and migration impossible." },
                  { title: "Increasing PR review friction", desc: "Senior devs spending hours enforcing basic architecture rules." },
                  { title: "Slow onboarding", desc: "New hires struggling to find the 'right way' to build a screen." }
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-surface-dark/40 border border-border-dark flex gap-4 transition-all hover:bg-surface-dark/60">
                    <ExclamationTriangleIcon className="size-6 text-danger shrink-0" />
                    <div>
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-text-muted">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3. The Solution (5 Governance Pillars) */}
        <section id="solution" className="py-32 px-6 lg:px-8 overflow-hidden relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full -z-10"></div>
          
          <div className="mx-auto max-w-[1280px]">
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <span className="label-caps mb-4 block">Our Approach</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">The 5 Pillars of Governance</h2>
              <p className="text-xl text-text-muted">
                CodeBandhan ensures your codebase stays healthy as you scale. We analyze your project against industry standards in real-time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {PILLARS.map((pillar, i) => (
                <div key={i} className="group p-8 rounded-3xl bg-background-dark border border-border-dark glass-panel transition-all hover:border-primary/50 hover:translate-y-[-4px]">
                  <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <pillar.icon className="size-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 tracking-tight">{pillar.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. How It Works */}
        <section id="how-it-works" className="py-32 px-6 lg:px-8 border-t border-border-dark bg-surface-dark/10">
          <div className="mx-auto max-w-[1280px]">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-20">
              <div className="max-w-2xl text-center md:text-left">
                <span className="label-caps mb-4 block">The Process</span>
                <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">Maintain Integrity <br/>At Every Commit.</h2>
              </div>
              <div className="flex items-center gap-2 text-primary font-bold bg-primary/5 px-4 py-2 rounded-full border border-primary/10">
                <DocumentMagnifyingGlassIcon className="size-6" />
                <span>Automated PR Scanning</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
              {/* Connector Line (Desktop) */}
              <div className="hidden md:block absolute top-[1.25rem] left-[10%] right-[10%] h-[1px] bg-border-dark"></div>
              
              {[
                { step: "01", title: "Connect GitHub", desc: "One-click integration with your Flutter repositories. No complex setup." },
                { step: "02", title: "Run Structural Scan", desc: "Our engine maps your architectural layers and dependency graphs." },
                { step: "03", title: "Get Governance Score", desc: "Receive an immediate rating (0-100) on your current code health." },
                { step: "04", title: "Track Risk Trends", desc: "Identify if your team is improving or accumulating debt over time." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-6">
                  <div className="size-10 rounded-full bg-background-dark border-2 border-primary text-primary flex items-center justify-center text-sm font-black font-display relative z-10">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{item.title}</h3>
                    <p className="text-text-muted leading-relaxed text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Who Should Apply */}
        <section className="py-32 px-6 lg:px-8 bg-background-dark">
          <div className="mx-auto max-w-[1280px]">
            <div className="p-10 lg:p-20 rounded-[3rem] bg-gradient-to-br from-surface-dark/80 to-background-dark border border-border-dark relative overflow-hidden">
              <div className="absolute top-0 right-0 size-96 bg-primary/5 blur-3xl rounded-full"></div>
              
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div>
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-8">Who Should <span className="text-primary italic">Apply?</span></h2>
                  <p className="text-xl text-text-muted mb-10 leading-relaxed">
                    We are currently limiting onboarding to ensure every team gets direct access to the founders and deep architectural support.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Flutter teams (2–10 developers)",
                      "Pre-Series A / Seed startups",
                      "Agencies managing 2+ scale apps",
                      "Founders obsessed with code quality"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-4 text-white font-bold">
                        <CheckCircleIcon className="size-6 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-background-dark/50 border border-border-dark rounded-3xl p-8 lg:p-12">
                   <div className="space-y-8">
                     <div className="flex items-center gap-4">
                        <PresentationChartLineIcon className="size-10 text-primary" />
                        <div>
                          <h4 className="text-xl font-bold text-white">Market Positioning</h4>
                          <p className="text-sm text-text-muted">Built for decision makers who value stability over vanity speed.</p>
                        </div>
                     </div>
                     <div className="h-[1px] bg-border-dark"></div>
                     <div className="flex items-center gap-4">
                        <CpuChipIcon className="size-10 text-primary" />
                        <div>
                          <h4 className="text-xl font-bold text-white">Flutter Exclusive</h4>
                          <p className="text-sm text-text-muted">Purpose-built for Dart & Flutter architectures. No generic noise.</p>
                        </div>
                     </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Application Form Section */}
        <section id="lead-form" className="py-32 px-6 lg:px-8 bg-surface-dark border-t border-border-dark overflow-hidden relative">
          <div className="mx-auto max-w-[1280px] grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <span className="label-caps mb-4 block text-primary">Beta Application</span>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">Apply for <br/><span className="text-primary italic">Closed Beta.</span></h2>
              <p className="text-xl text-text-muted leading-relaxed mb-12">
                We review architecture maturity and product stage before onboarding. Every submission goes directly to the engineering team.
              </p>
              
              <div className="space-y-12">
                <div className="flex gap-4">
                  <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <ShieldCheckIcon className="size-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Qualification Engine</h4>
                    <p className="text-text-muted">Answering these helps us prioritize teams facing the most critical rewrite risks.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <BoltIcon className="size-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Direct Response</h4>
                    <p className="text-text-muted">We review and respond within 48 hours for serious applications.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-tr from-primary/20 to-accent/20 blur-xl opacity-50 rounded-3xl -z-10"></div>
              <form onSubmit={handleSubmit} className="bg-background-dark border border-border-dark rounded-3xl p-8 lg:p-12 space-y-12 shadow-2xl">
                
                {/* SECTION A: Founder Info */}
                <div className="space-y-6">
                  <p className="label-caps text-primary">Section A — Founder Info</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-text-muted pl-1">Full Name</label>
                      <input
                        className="w-full bg-surface-dark/50 border border-border-dark rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-all text-white font-medium"
                        placeholder="John Doe"
                        value={form.fullName}
                        onChange={(e) => setForm((prev) => ({ ...prev, fullName: e.target.value }))}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-text-muted pl-1">Work Email</label>
                      <input
                        type="email"
                        className="w-full bg-surface-dark/50 border border-border-dark rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-all text-white font-medium"
                        placeholder="john@company.com"
                        value={form.workEmail}
                        onChange={(e) => setForm((prev) => ({ ...prev, workEmail: e.target.value }))}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-text-muted pl-1">Company Name</label>
                      <input
                        className="w-full bg-surface-dark/50 border border-border-dark rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-all text-white font-medium"
                        placeholder="Engineering Inc."
                        value={form.companyName}
                        onChange={(e) => setForm((prev) => ({ ...prev, companyName: e.target.value }))}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-text-muted pl-1">Website</label>
                      <input
                        className="w-full bg-surface-dark/50 border border-border-dark rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-all text-white font-medium"
                        placeholder="https://company.com"
                        value={form.website}
                        onChange={(e) => setForm((prev) => ({ ...prev, website: e.target.value }))}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-text-muted pl-1">LinkedIn Profile</label>
                    <input
                      className="w-full bg-surface-dark/50 border border-border-dark rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-all text-white font-medium"
                      placeholder="linkedin.com/in/johndoe"
                      value={form.linkedIn}
                      onChange={(e) => setForm((prev) => ({ ...prev, linkedIn: e.target.value }))}
                    />
                  </div>
                </div>

                {/* SECTION B: Product Info */}
                <div className="space-y-6">
                  <p className="label-caps text-primary">Section B — Product Info</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-text-muted pl-1">Flutter Version</label>
                      <select
                        className="w-full bg-surface-dark/50 border border-border-dark rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-all text-white font-medium appearance-none"
                        value={form.flutterVersion}
                        onChange={(e) => setForm((prev) => ({ ...prev, flutterVersion: e.target.value }))}
                      >
                        <option>3.22+</option>
                        <option>3.19-3.21</option>
                        <option>3.10-3.18</option>
                        <option>Legacy (&lt;3.10)</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-text-muted pl-1">App Stage</label>
                      <select
                        className="w-full bg-surface-dark/50 border border-border-dark rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-all text-white font-medium appearance-none"
                        value={form.appStage}
                        onChange={(e) => setForm((prev) => ({ ...prev, appStage: e.target.value }))}
                      >
                        <option>MVP</option>
                        <option>Scaling</option>
                        <option>Production (1M+)</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-text-muted pl-1">Team Size</label>
                      <select
                        className="w-full bg-surface-dark/50 border border-border-dark rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-all text-white font-medium appearance-none"
                        value={form.teamSize}
                        onChange={(e) => setForm((prev) => ({ ...prev, teamSize: e.target.value }))}
                      >
                        <option>Solo</option>
                        <option>2-5 devs</option>
                        <option>5-10 devs</option>
                        <option>10+ devs</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* SECTION C: Architecture */}
                <div className="space-y-6">
                  <p className="label-caps text-primary">Section C — Architecture Maturity</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-text-muted pl-1">State Management</label>
                      <select
                        className="w-full bg-surface-dark/50 border border-border-dark rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-all text-white font-medium appearance-none"
                        value={form.stateManagement}
                        onChange={(e) => setForm((prev) => ({ ...prev, stateManagement: e.target.value }))}
                      >
                        <option>Bloc</option>
                        <option>Riverpod</option>
                        <option>Provider</option>
                        <option>Mixed / Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-text-muted pl-1">Rule Enforcement</label>
                      <select
                        className="w-full bg-surface-dark/50 border border-border-dark rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-all text-white font-medium appearance-none"
                        value={form.enforceRules}
                        onChange={(e) => setForm((prev) => ({ ...prev, enforceRules: e.target.value }))}
                      >
                        <option>Strict</option>
                        <option>Informal</option>
                        <option>None</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-text-muted pl-1">Biggest Architecture Pain Points?</label>
                    <textarea
                      rows={3}
                      className="w-full bg-surface-dark/50 border border-border-dark rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-all text-white font-medium resize-none shadow-inner"
                      placeholder="e.g. Navigation complexity, business logic in UI, slow compilation..."
                      value={form.biggestPain}
                      onChange={(e) => setForm((prev) => ({ ...prev, biggestPain: e.target.value }))}
                    />
                  </div>
                </div>

                {/* SECTION D: Qualification */}
                <div className="space-y-6">
                  <p className="label-caps text-primary">Section D — Qualification</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-text-muted pl-1">Monthly Revenue (Range)</label>
                      <select
                        className="w-full bg-surface-dark/50 border border-border-dark rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-all text-white font-medium appearance-none"
                        value={form.revenueRange}
                        onChange={(e) => setForm((prev) => ({ ...prev, revenueRange: e.target.value }))}
                      >
                        <option>Pre-revenue</option>
                        <option>&lt;5L</option>
                        <option>5-50L</option>
                        <option>50L+</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-text-muted pl-1">Would pay ₹10k/mo for stability?</label>
                      <select
                        className="w-full bg-surface-dark/50 border border-border-dark rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-all text-white font-medium appearance-none"
                        value={form.paymentIntent}
                        onChange={(e) => setForm((prev) => ({ ...prev, paymentIntent: e.target.value }))}
                      >
                        <option>Yes</option>
                        <option>Maybe</option>
                        <option>No</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button 
                    className="group w-full btn btn-primary h-20 text-2xl font-black rounded-2xl glow-primary" 
                    type="submit" 
                    disabled={submitting}
                  >
                    {submitting ? "Reviewing..." : `Submit ${intent}`}
                    {!submitting && <BoltIcon className="size-6 ml-3 text-white group-hover:scale-125 transition-transform" />}
                  </button>

                  <p className="text-center text-xs text-text-muted mt-6 font-medium">
                    Limited to 20 seats. We review every application for quality.
                  </p>
                </div>

                {statusMessage ? (
                  <div className={`p-6 rounded-2xl border flex items-center gap-4 ${isSuccess ? "bg-green-500/10 border-green-500/20 text-green-400" : "bg-danger/10 border-danger/20 text-danger"}`}>
                    {isSuccess ? <CheckCircleIcon className="size-8" /> : <ExclamationTriangleIcon className="size-8" />}
                    <p className="font-bold text-lg">{statusMessage}</p>
                  </div>
                ) : null}
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border-dark bg-background-dark py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-16 md:gap-24 mb-16">
            <div className="max-w-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/20 text-primary">
                  <CpuChipIcon className="size-6" />
                </div>
                <span className="text-xl font-bold tracking-tight text-white font-display uppercase italic">CodeBandhan</span>
              </div>
              <p className="text-text-muted font-medium leading-relaxed">
                CodeBandhan v0.1 — Closed Beta (Flutter Only). <br/>
                Currently supporting Flutter repositories. Multi-stack governance coming soon.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-16">
               <div className="space-y-4">
                  <p className="label-caps !text-white">Product</p>
                  <ul className="space-y-3 text-sm font-medium text-text-muted">
                    <li><a href="#problem" className="hover:text-primary transition-colors">Problem</a></li>
                    <li><a href="#solution" className="hover:text-primary transition-colors">Solution</a></li>
                    <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
                  </ul>
               </div>
               <div className="space-y-4">
                  <p className="label-caps !text-white">Authority</p>
                  <ul className="space-y-3 text-sm font-medium text-text-muted">
                    <li><a href="#" className="hover:text-primary transition-colors">Whitepaper</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors">Case Studies</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors">Audit Guide</a></li>
                  </ul>
               </div>
               <div className="space-y-4">
                  <p className="label-caps !text-white">Connect</p>
                  <ul className="space-y-3 text-sm font-medium text-text-muted">
                    <li><a href="#" className="hover:text-primary transition-colors">Twitter (X)</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors">GitHub</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
                  </ul>
               </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border-dark flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs font-bold text-text-muted uppercase tracking-[0.2em]">
              CodeBandhan v0.1-beta • Built for Architects
            </p>
            <p className="text-xs font-medium text-text-muted">
              Last Updated: Feb 2025
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
