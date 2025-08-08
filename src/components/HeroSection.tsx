import { Button } from '@/components/ui/button';
import { Calendar, MapPin, ArrowRight, Rocket, Users, Trophy } from 'lucide-react';
interface HeroSectionProps {
  onSectionChange: (section: string) => void;
}
export const HeroSection = ({
  onSectionChange
}: HeroSectionProps) => {
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/lovable-uploads/52c5b453-98ff-4284-8686-6124efe8f685.png)` }}
      ></div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-glow opacity-20"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* IgKnightED Logo - Now prominent */}
          <div className="mb-8 fade-in">
            <img src="/ignighted-logo.svg" alt="IgKnightED'25" className="h-32 md:h-40 mx-auto" />
          </div>
          
          {/* Main Headline - Smaller and single line */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 fade-in-delay-1">
            <span className="gradient-text">Rise. Pitch. Conquer.</span>
          </h1>
          
          {/* Subheading with typewriter effect */}
          <div className="text-xl md:text-2xl text-muted-foreground mb-4 fade-in-delay-2">
            <span className="typewriter">Dubai Awaits the Next Fintech Icon</span>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 fade-in-delay-3">
            Welcome to <strong className="text-primary">IgKnightED'25</strong> — where ambition meets acceleration
          </p>

          {/* Event Details */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12 fade-in-delay-4">
            <div className="flex items-center gap-2 text-foreground">
              <Calendar className="text-primary" size={20} />
              <span className="font-medium">17–19 November 2025</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <MapPin className="text-primary" size={20} />
              <span className="font-medium">Dubai, UAE</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 fade-in-delay-5">
            <Button size="lg" className="glow-blue hover-lift bg-gradient-cta border-0 text-lg px-8 py-6" onClick={() => onSectionChange('apply')}>
              <Rocket className="mr-2" size={20} />
              Apply to Pitch
              <ArrowRight className="ml-2" size={20} />
            </Button>
            
            <Button size="lg" variant="outline" className="hover-lift text-lg px-8 py-6 border-primary/30 hover:border-primary" onClick={() => onSectionChange('apply')}>
              <Users className="mr-2" size={20} />
              Become a Partner
            </Button>
            
            <Button size="lg" variant="secondary" className="hover-lift text-lg px-8 py-6" onClick={() => onSectionChange('agenda')}>
              <Trophy className="mr-2" size={20} />
              View Agenda
            </Button>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            <div className="flex flex-col items-center gap-3">
              <p className="text-sm text-muted-foreground">In partnership with</p>
              <img src="/bit-logo.svg" alt="BIT'25" className="h-20 w-auto opacity-90 hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - at very bottom of hero section with mobile spacing */}
      
    </section>;
};