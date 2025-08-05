import { Card } from '@/components/ui/card';
import { Building2, Handshake, Camera, Ticket, TrendingUp, Globe, Award, Network } from 'lucide-react';

export const EventOverview = () => {
  const highlights = [
    {
      icon: <TrendingUp className="text-primary" size={32} />,
      title: "Access top VCs before they spot you on big stages",
      description: "Get early access to decision-makers"
    },
    {
      icon: <Handshake className="text-primary" size={32} />,
      title: "Curated founder-investor meetings",
      description: "Strategic 1-on-1 networking sessions"
    },
    {
      icon: <Camera className="text-primary" size={32} />,
      title: "Media exposure with 30+ publications",
      description: "Amplify your startup's visibility"
    },
    {
      icon: <Ticket className="text-primary" size={32} />,
      title: "BIT'25 access included",
      description: "Comprehensive event package"
    }
  ];

  const benefits = [
    {
      icon: <Building2 className="text-accent" size={24} />,
      title: "Not Just a Pitch. A Launchpad.",
      description: "Transform your startup journey with strategic connections and insights."
    },
    {
      icon: <Network className="text-accent" size={24} />,
      title: "1-on-1 Meetings with Investors",
      description: "Direct access to VCs, family offices, and strategic partners."
    },
    {
      icon: <Award className="text-accent" size={24} />,
      title: "Win the Coveted FinKnight Awards",
      description: "Recognition that opens doors to future opportunities."
    },
    {
      icon: <Globe className="text-accent" size={24} />,
      title: "Build Your Global Footprint from the GCC",
      description: "Expand your reach from the heart of the Middle East."
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Event Overview */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 fade-in">
            The IgKnightED <span className="gradient-text">Experience</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 fade-in-delay-1 leading-relaxed">
            At the heart of the GCC, Dubai – the launchpad for the world's most disruptive startups. 
            Join the <strong className="text-primary">IgKnightED Startup Majlis</strong> – where bold founders 
            meet global VCs, family offices, and fintech pioneers.
          </p>
        </div>

        {/* Key Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {highlights.map((highlight, index) => (
            <Card key={index} className="glass-card hover-lift p-6 text-center fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="flex justify-center mb-4">
                {highlight.icon}
              </div>
              <h3 className="font-heading font-semibold mb-2 text-foreground">
                {highlight.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {highlight.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Why IgKnightED Grid */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 fade-in">
            Why <span className="gradient-text">IgKnightED</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="glass-card hover-lift p-8 fade-in" style={{animationDelay: `${index * 0.15}s`}}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-xl mb-2 text-foreground">
                      {benefit.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};