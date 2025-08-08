import { Card } from '@/components/ui/card';
import { Clock, Coffee, Mic, Users, Trophy, Sunset } from 'lucide-react';

export const AgendaSection = () => {
  const agendaItems = [
    {
      time: "08:00",
      icon: <Coffee className="text-primary" size={20} />,
      title: "Registration & Breakfast",
      description: "Welcome networking and registration"
    },
    {
      time: "09:00",
      icon: <Mic className="text-primary" size={20} />,
      title: "Keynote: The Future of FinTech",
      description: "Industry insights from global leaders"
    },
    {
      time: "09:20",
      icon: <Users className="text-primary" size={20} />,
      title: "Finalist Introductions",
      description: "Meet the competing startups"
    },
    {
      time: "09:40",
      icon: <Users className="text-primary" size={20} />,
      title: "VC Panel: Next Billion-Dollar Bets",
      description: "Investment trends and opportunities"
    },
    {
      time: "10:25",
      icon: <Mic className="text-primary" size={20} />,
      title: "Pitch Round 1",
      description: "First batch of startup presentations"
    },
    {
      time: "11:25",
      icon: <Coffee className="text-primary" size={20} />,
      title: "Coffee Break",
      description: "Networking and refreshments"
    },
    {
      time: "12:00",
      icon: <Mic className="text-primary" size={20} />,
      title: "Pitch Round 2",
      description: "Second batch of presentations"
    },
    {
      time: "13:00",
      icon: <Users className="text-primary" size={20} />,
      title: "Networking Lunch",
      description: "Founders, investors, and partners connect"
    },
    {
      time: "13:50",
      icon: <Mic className="text-primary" size={20} />,
      title: "Pitch Round 3",
      description: "Final batch of startup pitches"
    },
    {
      time: "15:00",
      icon: <Users className="text-primary" size={20} />,
      title: "Startup Founders Panel",
      description: "Success stories and lessons learned"
    },
    {
      time: "16:00",
      icon: <Trophy className="text-accent" size={20} />,
      title: "FinKnight Awards",
      description: "Recognition ceremony and prizes"
    },
    {
      time: "16:30",
      icon: <Sunset className="text-accent" size={20} />,
      title: "Founders & Funders Sundowner",
      description: "Celebration and continued networking"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 fade-in">
              IgKnightED'25 <span className="gradient-text">Full-Day Agenda</span>
            </h2>
            <p className="text-xl text-muted-foreground fade-in-delay-1">
              <em>"Knighting the Future of FinTech Innovation"</em>
            </p>
            <div className="mt-4 inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <span className="text-primary font-semibold">November 17, 2025 • Dubai, UAE</span>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-20 top-0 bottom-0 w-px bg-border"></div>
            
            <div className="space-y-6">
              {agendaItems.map((item, index) => (
                <div key={index} className="relative fade-in" style={{animationDelay: `${index * 0.05}s`}}>
                  <Card className="glass-card hover-lift ml-12 md:ml-32 p-6 relative">
                    {/* Time Badge */}
                    <div className="absolute -left-16 md:-left-20 top-6 w-12 h-12 bg-card border-2 border-border rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-foreground">{item.time}</span>
                    </div>
                    
                    {/* Timeline Dot */}
                    <div className="absolute left-2 md:left-18 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                    
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-2 rounded-lg bg-primary/10 border border-primary/20">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading font-semibold text-lg mb-1 text-foreground">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Event Note */}
          <Card className="glass-card mt-12 p-6 border-2 border-accent/20">
            <div className="text-center">
              <h3 className="font-heading font-bold text-lg mb-2 gradient-text">
                Full Event Experience
              </h3>
              <p className="text-muted-foreground text-sm">
                All timings are approximate and subject to minor adjustments. 
                The agenda includes multiple networking opportunities, investor meetings, 
                and exclusive access to industry leaders throughout the day.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};