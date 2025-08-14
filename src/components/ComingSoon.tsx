import { Calendar, MapPin, Shield } from 'lucide-react';
import { AdminAccess } from './AdminAccess';
interface ComingSoonProps {
  onAdminLogin: () => void;
}
export const ComingSoon = ({
  onAdminLogin
}: ComingSoonProps) => {
  return <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(/lovable-uploads/52c5b453-98ff-4284-8686-6124efe8f685.png)`
    }}></div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75"></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/95"></div>
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30"></div>
      
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center relative z-10">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            {/* IgKnightED Logo */}
            <div className="mb-8 mt-8 fade-in">
              <img src="/ignighted-logo.svg" alt="IgKnightED'25" className="h-24 md:h-32 mx-auto opacity-90" />
            </div>
            
            {/* Mysterious Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-8 fade-in-delay-1">
              <span className="gradient-text">Something Extraordinary</span>
            </h1>
            
            <h2 className="text-2xl md:text-4xl font-heading font-medium mb-8 fade-in-delay-2">
              <span className="text-muted-foreground">Is Coming...</span>
            </h2>
            
            {/* Cryptic Message */}
            <div className="text-lg md:text-xl text-muted-foreground mb-12 fade-in-delay-3 max-w-2xl mx-auto">
              <p className="mb-4">Where fintech dreams meet reality.</p>
              <p>Where startups become legends.</p>
            </div>

            {/* Event Details */}
            <div className="glass-card p-8 mb-12 fade-in-delay-4 max-w-md mx-auto">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-center gap-3 text-foreground">
                  <Calendar className="text-primary" size={24} />
                  <span className="font-medium text-lg">17–19 November 2025</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-foreground">
                  <MapPin className="text-primary" size={24} />
                  <span className="font-medium text-lg">Dubai, UAE</span>
                </div>
              </div>
            </div>

            {/* Partnership */}
            
          </div>
        </div>
      </div>
      
      {/* Footer with Admin Access */}
      <footer className="relative z-10 p-6">
        <div className="container mx-auto flex justify-center">
          <AdminAccess onAdminLogin={onAdminLogin} />
        </div>
      </footer>
    </div>;
};