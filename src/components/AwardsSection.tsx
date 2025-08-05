import { Card } from '@/components/ui/card';
import { Trophy, Lightbulb, Heart, TrendingUp, Eye, Star } from 'lucide-react';

export const AwardsSection = () => {
  const awards = [
    {
      icon: <Lightbulb className="text-accent" size={32} />,
      title: "FinKnight Innovation",
      description: "Breakthrough technology that transforms financial services",
      prize: "For revolutionary fintech solutions"
    },
    {
      icon: <Heart className="text-accent" size={32} />,
      title: "FinKnight Impact",
      description: "Serving underserved markets and creating social value",
      prize: "For inclusive financial innovation"
    },
    {
      icon: <TrendingUp className="text-accent" size={32} />,
      title: "FinKnight Growth",
      description: "Strong metrics and proven scalability",
      prize: "For exceptional business performance"
    },
    {
      icon: <Eye className="text-accent" size={32} />,
      title: "FinKnight Visionary",
      description: "Outstanding founder vision and leadership",
      prize: "For transformational leadership"
    },
    {
      icon: <Star className="text-accent" size={32} />,
      title: "Investor's Choice",
      description: "Chosen by our expert VC panel",
      prize: "Selected by investment committee"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-accent/10 border border-accent/20">
                <Trophy className="text-accent" size={48} />
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 fade-in">
              The <span className="gradient-text">FinKnight Awards</span>
            </h2>
            <p className="text-xl text-muted-foreground fade-in-delay-1 max-w-3xl mx-auto">
              Recognition that opens doors. Awards that launch careers. 
              Join the elite circle of FinKnight winners.
            </p>
          </div>

          {/* Awards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {awards.slice(0, 3).map((award, index) => (
              <Card key={index} className="glass-card hover-lift p-8 text-center relative overflow-hidden fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-cta opacity-10 rounded-bl-full"></div>
                <div className="relative z-10">
                  <div className="flex justify-center mb-4">
                    {award.icon}
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3 text-foreground">
                    {award.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {award.description}
                  </p>
                  <div className="inline-block px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-sm text-accent">
                    {award.prize}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Special Awards Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.slice(3).map((award, index) => (
              <Card key={index + 3} className="glass-card hover-lift p-8 text-center relative overflow-hidden fade-in" style={{animationDelay: `${(index + 3) * 0.1}s`}}>
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-cta opacity-10 rounded-bl-full"></div>
                <div className="relative z-10">
                  <div className="flex justify-center mb-4">
                    {award.icon}
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3 text-foreground">
                    {award.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {award.description}
                  </p>
                  <div className="inline-block px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-sm text-accent">
                    {award.prize}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Award Benefits */}
          <Card className="glass-card mt-12 p-8 border-2 border-accent/20">
            <div className="text-center">
              <h3 className="text-2xl font-heading font-bold mb-4 gradient-text">
                Award Benefits
              </h3>
              <p className="text-muted-foreground mb-6">
                FinKnight Award winners receive exclusive benefits designed to accelerate their growth
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <Trophy className="text-accent mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm mb-1">Recognition</h4>
                  <p className="text-xs text-muted-foreground">Industry-wide visibility</p>
                </div>
                <div className="text-center">
                  <Star className="text-accent mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm mb-1">Media Coverage</h4>
                  <p className="text-xs text-muted-foreground">PR amplification</p>
                </div>
                <div className="text-center">
                  <TrendingUp className="text-accent mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm mb-1">Investor Access</h4>
                  <p className="text-xs text-muted-foreground">Direct introductions</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};