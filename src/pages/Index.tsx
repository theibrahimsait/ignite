import { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { EventOverview } from '@/components/EventOverview';
import { StartupCallout } from '@/components/StartupCallout';
import { PackageSection } from '@/components/PackageSection';
import { JudgingSection } from '@/components/JudgingSection';
import { AwardsSection } from '@/components/AwardsSection';
import { AgendaSection } from '@/components/AgendaSection';
import { ApplicationSection } from '@/components/ApplicationSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Intersection Observer for section tracking
  useEffect(() => {
    const sections = document.querySelectorAll('[data-section]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('data-section');
            if (sectionId) {
              setActiveSection(sectionId);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(`[data-section="${sectionId}"]`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation activeSection={activeSection} onSectionChange={scrollToSection} />
      
      <main>
        {/* Hero Section */}
        <div data-section="home">
          <HeroSection onSectionChange={scrollToSection} />
        </div>

        {/* Event Overview */}
        <div data-section="overview">
          <EventOverview />
        </div>

        {/* Startup Callout */}
        <div>
          <StartupCallout onSectionChange={scrollToSection} />
        </div>

        {/* Package Section */}
        <div data-section="package">
          <PackageSection onSectionChange={scrollToSection} />
        </div>

        {/* Judging Criteria */}
        <div data-section="judging">
          <JudgingSection />
        </div>

        {/* Awards */}
        <div data-section="awards">
          <AwardsSection />
        </div>

        {/* Agenda */}
        <div data-section="agenda">
          <AgendaSection />
        </div>

        {/* Application */}
        <div data-section="apply">
          <ApplicationSection />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
