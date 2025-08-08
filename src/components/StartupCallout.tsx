import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Rocket, Clock, DollarSign, ArrowRight } from 'lucide-react';

interface StartupCalloutProps {
  onSectionChange: (section: string) => void;
}

export const StartupCallout = ({ onSectionChange }: StartupCalloutProps) => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <Card className="glass-card max-w-4xl mx-auto p-12 text-center relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-glow opacity-10"></div>
          
          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-primary/10 border border-primary/20">
                <Rocket className="text-primary" size={48} />
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 fade-in">
              <span className="gradient-text">Pitch. Win. Scale.</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 fade-in-delay-1">
              Secure your spot at IgKnightED'25 and transform your startup journey
            </p>

            {/* Pricing */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-accent">
                <DollarSign size={20} />
                <span className="font-bold text-lg">$3,500 Early Bird</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock size={20} />
                <span>Standard: $5,000</span>
              </div>
            </div>

            <Button 
              size="lg"
              className="glow-blue hover-lift bg-gradient-cta border-0 text-xs sm:text-sm lg:text-xl px-3 sm:px-8 lg:px-12 py-4 sm:py-5 lg:py-6 mb-4 w-full sm:w-auto whitespace-nowrap overflow-hidden"
              onClick={() => onSectionChange('apply')}
            >
              <span className="block sm:hidden">Apply Now – $3,500</span>
              <span className="hidden sm:block">Apply to Pitch – $3,500 Early Bird</span>
              <ArrowRight className="ml-2" size={16} />
            </Button>
            
            <p className="text-sm text-muted-foreground fade-in-delay-3">
              <strong className="text-destructive">Deadline:</strong> 21st August 2025
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};