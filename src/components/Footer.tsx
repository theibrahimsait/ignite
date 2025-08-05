import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Calendar, MapPin, Mail, Phone, Linkedin, Twitter } from 'lucide-react';
export const Footer = () => {
  return <footer className="py-16 relative">
      <div className="container mx-auto px-6">
        <Card className="glass-card p-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand & Event Info */}
            <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img src="/ignighted-logo.svg" alt="IgKnightED'25" className="h-8 w-auto" />
            </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Where ambition meets acceleration. Join Dubai's premier startup pitch platform 
                connecting bold founders with global VCs, family offices, and fintech pioneers.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Calendar className="text-primary" size={18} />
                  <span className="font-medium">November 17–19, 2025</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-primary" size={18} />
                  <span className="font-medium">Dubai, UAE</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-semibold mb-4 text-foreground">Quick Links</h4>
              <div className="space-y-2">
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Event Package
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Judging Criteria
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  FinKnight Awards
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Full Agenda
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Apply Now
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-heading font-semibold mb-4 text-foreground">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="text-primary" size={18} />
                  <a href="mailto:info@ignightened.com" className="text-muted-foreground hover:text-primary transition-colors">
                    info@ignightened.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-primary" size={18} />
                  <span className="text-muted-foreground">+971 4 123 4567</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mt-6">
                <a href="#" className="p-2 rounded-full bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-colors" aria-label="LinkedIn">
                  <Linkedin className="text-primary" size={18} />
                </a>
                <a href="#" className="p-2 rounded-full bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-colors" aria-label="Twitter">
                  <Twitter className="text-primary" size={18} />
                </a>
              </div>
            </div>
          </div>

          <Separator className="mb-6" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>© 2025 WeValue Consulting. All rights reserved.</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Powered by */}
          <div className="text-center mt-6 pt-6 border-t border-border">
            <div className="flex justify-center items-center gap-8 opacity-60">
              <img src="/bit-logo.svg" alt="BIT'25" className="h-8 w-auto" />
              <img src="/submark.svg" alt="Event Submark" className="h-4 w-auto opacity-60" />
            </div>
          </div>
        </Card>
      </div>
    </footer>;
};