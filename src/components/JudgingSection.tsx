import { Card } from '@/components/ui/card';
import { CheckCircle, Target, Cog, TrendingUp, Users, Scale } from 'lucide-react';

export const JudgingSection = () => {
  const criteria = [
    {
      icon: <Target className="text-primary" size={24} />,
      title: "Market problem clarity & founder-market fit",
      description: "Clear understanding of the problem and the founder's unique position to solve it"
    },
    {
      icon: <Cog className="text-primary" size={24} />,
      title: "Technology differentiation",
      description: "Innovative technology stack and competitive advantages"
    },
    {
      icon: <TrendingUp className="text-primary" size={24} />,
      title: "Traction and business model",
      description: "Proven market validation and sustainable revenue streams"
    },
    {
      icon: <Scale className="text-primary" size={24} />,
      title: "Scalability and market potential",
      description: "Ability to scale operations and capture significant market share"
    },
    {
      icon: <Users className="text-primary" size={24} />,
      title: "Team strength",
      description: "Experienced team with complementary skills and execution capability"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 fade-in">
              What It Takes to Be <span className="gradient-text">FinKnighted</span>
            </h2>
            <p className="text-xl text-muted-foreground fade-in-delay-1">
              Our expert panel evaluates startups across five critical dimensions
            </p>
          </div>

          {/* Criteria Cards */}
          <div className="space-y-6">
            {criteria.map((criterion, index) => (
              <Card key={index} className="glass-card hover-lift p-6 fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 rounded-full bg-primary/10 border border-primary/20">
                    {criterion.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-heading font-semibold text-lg text-foreground pr-4">
                        {criterion.title}
                      </h3>
                      <CheckCircle className="text-accent flex-shrink-0" size={20} />
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {criterion.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <Card className="glass-card mt-12 p-8 border-2 border-accent/20">
            <div className="text-center">
              <h3 className="text-2xl font-heading font-bold mb-4 gradient-text">
                Evaluation Process
              </h3>
              <p className="text-muted-foreground mb-6">
                Each startup will be evaluated by a panel of leading VCs, successful entrepreneurs, 
                and industry experts. The evaluation process includes live pitches, Q&A sessions, 
                and detailed technical assessments.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-accent" size={16} />
                  <span>6-minute pitch presentation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-accent" size={16} />
                  <span>5-minute Q&A session</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-accent" size={16} />
                  <span>Technical deep-dive review</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};