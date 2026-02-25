"use client";

import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-20 border-t border-border/40 bg-surface/5">
      <div className="container-wide">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="size-6 bg-primary/20 border border-primary/30 rounded flex items-center justify-center text-primary font-black text-xs">
                B
              </div>
              <span className="text-lg font-heading font-black tracking-tight text-white uppercase">
                CodeBandhan
              </span>
            </div>
            <p className="text-text-muted text-sm max-w-xs leading-relaxed">
              CodeBandhan v0.1 — Closed Beta. <br/>
              Currently supporting Flutter and Express repositories. Multi-stack governance coming soon.
            </p>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-widest font-black text-white">Product</h4>
            <ul className="space-y-4 text-xs font-bold text-text-muted">
              <li><button onClick={() => document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary transition-colors">Problem</button></li>
              <li><button onClick={() => document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary transition-colors">Solution</button></li>
              <li><button onClick={() => document.getElementById('roadmap')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary transition-colors">Roadmap</button></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-widest font-black text-white">Connect</h4>
            <ul className="space-y-4 text-xs font-bold text-text-muted">
              <li><a href="#" className="hover:text-primary transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Twitter (X)</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-10 border-t border-border/20">
          <p className="text-[10px] uppercase tracking-widest font-black text-text-muted">
            CODEBANDHAN v0.1-BETA • BUILT FOR ARCHITECTS
          </p>
          <p className="text-[10px] uppercase tracking-widest font-black text-text-muted/50">
            © {currentYear} • ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
}
