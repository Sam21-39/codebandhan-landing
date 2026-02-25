import { Navigation } from '@/components/sections/Navigation';
import { Hero } from '@/components/sections/Hero';
import { Problem } from '@/components/sections/Problem';
import { Solution } from '@/components/sections/Solution';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { WhoItsFor } from '@/components/sections/WhoItsFor';
import { Pricing } from '@/components/sections/Pricing';
import { FrameworkCoverage } from '@/components/sections/FrameworkCoverage';
import { Roadmap } from '@/components/sections/Roadmap';
import { Authority } from '@/components/sections/Authority';
import { ApplicationForm } from '@/components/sections/ApplicationForm';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/30">
      <Navigation />
      
      <div className="relative">
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <FrameworkCoverage />
        <Roadmap />
        <Authority />
        <WhoItsFor />
        <Pricing />
        <ApplicationForm />
      </div>

      <Footer />
    </main>
  );
}
