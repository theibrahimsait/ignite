import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Rocket, Users, Building, Camera, Upload, Send } from 'lucide-react';

export const ApplicationSection = () => {
  const [selectedTab, setSelectedTab] = useState('startup');

  const fundingStages = [
    'Pre-Seed',
    'Seed',
    'Series A',
    'Series B',
    'Series C+',
    'Growth Stage'
  ];

  const StartupForm = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="founderName">Founder Name *</Label>
          <Input id="founderName" placeholder="Enter founder's full name" className="mt-1" />
        </div>
        <div>
          <Label htmlFor="companyName">Company Name *</Label>
          <Input id="companyName" placeholder="Enter company name" className="mt-1" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="country">Country *</Label>
          <Input id="country" placeholder="Country of incorporation" className="mt-1" />
        </div>
        <div>
          <Label htmlFor="fundingStage">Funding Stage *</Label>
          <Select>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select funding stage" />
            </SelectTrigger>
            <SelectContent>
              {fundingStages.map((stage) => (
                <SelectItem key={stage} value={stage.toLowerCase()}>{stage}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="websiteUrl">Website URL *</Label>
        <Input id="websiteUrl" placeholder="https://yourcompany.com" className="mt-1" />
      </div>

      <div>
        <Label htmlFor="videoApplication">Video Application *</Label>
        <div className="mt-1 border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
          <Upload className="mx-auto mb-2 text-muted-foreground" size={24} />
          <p className="text-sm text-muted-foreground">
            Upload your 2-3 minute video application
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            MP4 format preferred, max 100MB
          </p>
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          Please introduce yourself, your company, and explain why you should be selected for IgKnightED'25
        </p>
      </div>

      <Button className="w-full glow-blue hover-lift bg-gradient-cta border-0">
        <Send className="mr-2" size={20} />
        Submit Startup Application
      </Button>
    </div>
  );

  const InvestorForm = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="investorName">Full Name *</Label>
          <Input id="investorName" placeholder="Enter your full name" className="mt-1" />
        </div>
        <div>
          <Label htmlFor="organization">Organization *</Label>
          <Input id="organization" placeholder="VC firm, family office, etc." className="mt-1" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="investorEmail">Email *</Label>
          <Input id="investorEmail" type="email" placeholder="your.email@company.com" className="mt-1" />
        </div>
        <div>
          <Label htmlFor="investorLinkedin">LinkedIn Profile *</Label>
          <Input id="investorLinkedin" placeholder="https://linkedin.com/in/yourprofile" className="mt-1" />
        </div>
      </div>

      <div>
        <Label htmlFor="investmentFocus">Investment Focus</Label>
        <Textarea 
          id="investmentFocus" 
          placeholder="What sectors, stages, and geographies do you typically invest in?"
          className="mt-1 min-h-[100px]"
        />
      </div>

      <div>
        <Label htmlFor="aum">Assets Under Management</Label>
        <Select>
          <SelectTrigger className="mt-1">
            <SelectValue placeholder="Select AUM range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="under-10m">Under $10M</SelectItem>
            <SelectItem value="10-50m">$10M - $50M</SelectItem>
            <SelectItem value="50-250m">$50M - $250M</SelectItem>
            <SelectItem value="250m-1b">$250M - $1B</SelectItem>
            <SelectItem value="over-1b">Over $1B</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button className="w-full glow-blue hover-lift bg-gradient-cta border-0">
        <Send className="mr-2" size={20} />
        Submit Investor Interest
      </Button>
    </div>
  );

  const SponsorForm = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="sponsorName">Contact Name *</Label>
          <Input id="sponsorName" placeholder="Enter contact name" className="mt-1" />
        </div>
        <div>
          <Label htmlFor="sponsorCompany">Company *</Label>
          <Input id="sponsorCompany" placeholder="Company name" className="mt-1" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="sponsorEmail">Email *</Label>
          <Input id="sponsorEmail" type="email" placeholder="your.email@company.com" className="mt-1" />
        </div>
        <div>
          <Label htmlFor="sponsorPhone">Phone *</Label>
          <Input id="sponsorPhone" placeholder="+1 (555) 123-4567" className="mt-1" />
        </div>
      </div>

      <div>
        <Label htmlFor="sponsorshipInterest">Sponsorship Interest</Label>
        <Select>
          <SelectTrigger className="mt-1">
            <SelectValue placeholder="Select sponsorship level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="title">Title Sponsor</SelectItem>
            <SelectItem value="platinum">Platinum Partner</SelectItem>
            <SelectItem value="gold">Gold Partner</SelectItem>
            <SelectItem value="silver">Silver Partner</SelectItem>
            <SelectItem value="custom">Custom Package</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="sponsorGoals">Partnership Goals</Label>
        <Textarea 
          id="sponsorGoals" 
          placeholder="What are your goals for this partnership? (brand visibility, lead generation, etc.)"
          className="mt-1 min-h-[100px]"
        />
      </div>

      <Button className="w-full glow-blue hover-lift bg-gradient-cta border-0">
        <Send className="mr-2" size={20} />
        Submit Sponsor Inquiry
      </Button>
    </div>
  );

  const MediaForm = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="mediaName">Journalist Name *</Label>
          <Input id="mediaName" placeholder="Enter your full name" className="mt-1" />
        </div>
        <div>
          <Label htmlFor="mediaOutlet">Media Outlet *</Label>
          <Input id="mediaOutlet" placeholder="Publication or media company" className="mt-1" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="mediaEmail">Email *</Label>
          <Input id="mediaEmail" type="email" placeholder="your.email@outlet.com" className="mt-1" />
        </div>
        <div>
          <Label htmlFor="mediaType">Media Type</Label>
          <Select>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select media type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="print">Print/Digital Publication</SelectItem>
              <SelectItem value="broadcast">Broadcast/TV</SelectItem>
              <SelectItem value="podcast">Podcast</SelectItem>
              <SelectItem value="blog">Blog/Online</SelectItem>
              <SelectItem value="social">Social Media</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="coverage">Coverage Interest</Label>
        <Textarea 
          id="coverage" 
          placeholder="What aspects of IgKnightED'25 are you interested in covering?"
          className="mt-1 min-h-[100px]"
        />
      </div>

      <Button className="w-full glow-blue hover-lift bg-gradient-cta border-0">
        <Send className="mr-2" size={20} />
        Submit Media Application
      </Button>
    </div>
  );

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 fade-in">
              Join <span className="gradient-text">IgKnightED'25</span>
            </h2>
            <p className="text-xl text-muted-foreground fade-in-delay-1">
              Choose your path to participate in Dubai's premier fintech event
            </p>
          </div>

          <Card className="glass-card p-8">
            <Tabs value={selectedTab} onValueChange={setSelectedTab}>
              <div className="mb-8 text-center">
                <Button 
                  size="lg" 
                  className="glow-blue hover-lift bg-gradient-cta border-0 text-lg px-8 py-4"
                  onClick={() => setSelectedTab('startup')}
                >
                  <Rocket className="mr-2" size={20} />
                  Apply as Startup
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Currently accepting applications from startups only
                </p>
              </div>

              <TabsContent value="startup">
                <div className="mb-6">
                  <h3 className="text-2xl font-heading font-bold mb-2">Startup Application</h3>
                  <p className="text-muted-foreground">
                    Apply to pitch your fintech startup to global investors and win the FinKnight Awards.
                  </p>
                </div>
                <StartupForm />
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </section>
  );
};