import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'package', label: 'The Package' },
    { id: 'judging', label: 'Judging' },
    { id: 'awards', label: 'Awards' },
    { id: 'agenda', label: 'Agenda' },
    { id: 'apply', label: 'Apply' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-card py-4' : 'py-6'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/1abf5f86-ba86-49e9-9783-667460b57abe.png" 
            alt="IgKnightED'25" 
            className="h-8 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => onSectionChange(section.id)}
              className={`font-medium transition-colors ${
                activeSection === section.id
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          <Button 
            variant="outline" 
            className="hover-lift"
            onClick={() => onSectionChange('apply')}
          >
            Apply to Pitch
          </Button>
          <Button 
            className="glow-blue hover-lift bg-gradient-cta border-0"
            onClick={() => onSectionChange('apply')}
          >
            Become a Partner
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 glass-card border-t">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col space-y-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => {
                    onSectionChange(section.id);
                    setIsMenuOpen(false);
                  }}
                  className={`text-left font-medium transition-colors ${
                    activeSection === section.id
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {section.label}
                </button>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Button 
                  variant="outline" 
                  onClick={() => {
                    onSectionChange('apply');
                    setIsMenuOpen(false);
                  }}
                >
                  Apply to Pitch
                </Button>
                <Button 
                  className="bg-gradient-cta border-0"
                  onClick={() => {
                    onSectionChange('apply');
                    setIsMenuOpen(false);
                  }}
                >
                  Become a Partner
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};