import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Users, Trophy, Network, Building, FileText, Mic, ArrowRight } from 'lucide-react';

interface PackageSectionProps {
  onSectionChange: (section: string) => void;
}

export const PackageSection = ({ onSectionChange }: PackageSectionProps) => {
  const inclusions = [
    {
      icon: <Mic className="text-primary" size={20} />,
      text: "Pitch live to global investors (6 minutes)"
    },
    {
      icon: <Users className="text-primary" size={20} />,
      text: "Access to BFSI Leaders Networking Reception"
    },
    {
      icon: <Trophy className="text-primary" size={20} />,
      text: "Founders Lounge access"
    },
    {
      icon: <FileText className="text-primary" size={20} />,
      text: "2 Full-access passes to BIT'25"
    },
    {
      icon: <Network className="text-primary" size={20} />,
      text: "Local market entry workshops"
    },
    {
      icon: <FileText className="text-primary" size={20} />,
      text: "Media features pre/during/post event"
    },
    {
      icon: <Building className="text-primary" size={20} />,
      text: "Opportunity for Free Zone setup (Union Free Zone)"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 fade-in">
              IgKnightED <span className="gradient-text">Majlis</span>
            </h2>
            <p className="text-xl text-muted-foreground fade-in-delay-1">
              <em>Dare to Dream. Impress to be FinKnighted.</em>
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* What's Included */}
            <div className="lg:col-span-2">
              <Card className="glass-card p-8 h-full">
                <h3 className="text-2xl font-heading font-bold mb-6 text-foreground">
                  What's Included
                </h3>
                
                <div className="space-y-4">
                  {inclusions.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                      <div className="flex-shrink-0 mt-0.5">
                        {item.icon}
                      </div>
                      <span className="text-muted-foreground">{item.text}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-accent/10 border border-accent/20 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Check className="text-accent" size={20} />
                    <span className="font-semibold text-accent">Exclusive Bonus</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    All participants receive comprehensive post-event support including investor introductions 
                    and strategic partnerships facilitation.
                  </p>
                </div>
              </Card>
            </div>

            {/* Pricing Box */}
            <div className="lg:col-span-1">
              <Card className="glass-card p-8 border-2 border-primary/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-gradient-cta text-dark-navy px-4 py-1 text-sm font-bold">
                  LIMITED TIME
                </div>
                
                <div className="text-center mb-6">
                  <h4 className="text-lg font-heading font-semibold mb-2">Early Bird Pricing</h4>
                  <div className="text-4xl font-bold gradient-text mb-2">$3,500</div>
                  <p className="text-sm text-muted-foreground line-through">Standard: $5,000</p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="text-accent" size={16} />
                    <span>Save $1,500</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="text-accent" size={16} />
                    <span>Priority pitch slot</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="text-accent" size={16} />
                    <span>Extended networking time</span>
                  </div>
                </div>

                <Button 
                  className="w-full glow-blue hover-lift bg-gradient-cta border-0 mb-4"
                  onClick={() => onSectionChange('apply')}
                >
                  Apply Now
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                
                <p className="text-xs text-center text-muted-foreground">
                  Early bird expires August 21, 2025
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};