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
import { ComingSoon } from '@/components/ComingSoon';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  // Check for admin authentication on mount
  useEffect(() => {
    const adminAuth = localStorage.getItem('igknighted_admin_auth');
    setIsAdminAuthenticated(adminAuth === 'true');
  }, []);

  // Intersection Observer for section tracking (only when authenticated)
  useEffect(() => {
    if (!isAdminAuthenticated) return;
    
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
  }, [isAdminAuthenticated]);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(`[data-section="${sectionId}"]`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAdminLogin = () => {
    setIsAdminAuthenticated(true);
  };

  const handleAdminLogout = () => {
    localStorage.removeItem('igknighted_admin_auth');
    setIsAdminAuthenticated(false);
  };

  // Show coming soon page if not authenticated
  if (!isAdminAuthenticated) {
    return <ComingSoon onAdminLogin={handleAdminLogin} />;
  }

  // Show full site if authenticated
  return (
    <div className="min-h-screen">
      <Navigation activeSection={activeSection} onSectionChange={scrollToSection} />
      
      {/* Admin Logout Button */}
      <div className="fixed top-20 right-4 z-50">
        <Button
          variant="ghost"
          size="sm"
          onClick={handleAdminLogout}
          className="bg-background/80 backdrop-blur-sm border border-border/50 hover:bg-background/90"
        >
          <LogOut size={16} className="mr-2" />
          Logout
        </Button>
      </div>
      
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
