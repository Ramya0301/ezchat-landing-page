import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Zap, Play } from 'lucide-react';
import { SpinningLogo } from './spinning-logo';

export function Hero() {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] bg-white overflow-hidden py-16 md:py-20">
      <StaticBackground />
      <Copy />
    </section>
  );
}

const Copy = () => {
  return (
    <div className="relative z-[999999] h-full flex items-center">
      <div className="mx-auto grid md:grid-cols-2 gap-12 max-w-7xl items-center px-6 md:px-8 py-8 md:py-12 w-full">
        <div>
          {/* Badge */}
          <Badge variant="outline" className="bg-[#E0F2FF] backdrop-blur-sm border-[#3A7BD5] text-[#3A7BD5] px-4 py-2 mb-6">
            <Zap className="w-4 h-4 mr-2 inline" />
            For Professional Services Firms
          </Badge>

          {/* Headline */}
          <h1 className="mb-6 max-w-5xl text-[#1F2937]" style={{ fontSize: 'clamp(2.25rem, 8vw, 3.25rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}>
            Your Firm's AI Assistant<br />
            Powered by <span className="text-[#3A7BD5]">Your Knowledge</span>
          </h1>

          {/* Subheadline - Chunked Format */}
          <div className="max-w-3xl space-y-6 mb-8">
            {/* Chunk 1 */}
            <div>
              <h3 className="mb-2" style={{
                color: '#3A7BD5',
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '1.25rem',
                lineHeight: '1.4'
              }}>
                Access 10+ Leading AI Models
              </h3>
              <p className="text-[#4B5563]" style={{ fontSize: '1.125rem', lineHeight: '1.7' }}>
                EZChat brings together GPT-5, Claude-4.5, Gemini, and more <strong>SECURELY</strong> trained on <strong>YOUR</strong> firm's past work and expertise.
              </p>
            </div>

            {/* Chunk 2 */}
            <div>
              <h3 className="mb-2" style={{
                color: '#3A7BD5',
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '1.25rem',
                lineHeight: '1.4'
              }}>
                Junior Staff → Senior-Level Answers
              </h3>
              <p className="text-[#4B5563]" style={{ fontSize: '1.125rem', lineHeight: '1.7' }}>
                Your team gets instant responses with citations to your firm's knowledge base. No more interrupting partners.
              </p>
            </div>

            {/* Chunk 3 */}
            <div>
              <h3 className="mb-2" style={{
                color: '#3A7BD5',
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '1.25rem',
                lineHeight: '1.4'
              }}>
                Scale Without Hiring
              </h3>
              <p className="text-[#4B5563]" style={{ fontSize: '1.125rem', lineHeight: '1.7' }}>
                Generate reports in minutes, not hours. Serve 3x more clients with the same team size.
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 items-center">
            <Button 
              size="lg" 
              className="bg-blue-gradient hover:opacity-90 text-white transition-opacity"
              asChild
            >
              <a href="https://chat.eztech.ai" target="_blank" rel="noopener noreferrer">
                See How It Works →
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-[#3A7BD5] text-[#3A7BD5] hover:bg-[#3A7BD5] hover:text-white">
              <Play className="w-4 h-4 mr-2" />
              Watch 2-Min Demo ▶
            </Button>
          </div>

          {/* Trust Line */}
          <p className="text-base text-[#6B7280] mt-6 font-bold">
            Trusted by CA firms, law firms, and consulting firms across India
          </p>
        </div>

        {/* EZChat Logo with Spinning Effect - Right Side */}
        <div className="hidden md:flex items-center justify-center">
          <SpinningLogo 
            logoSrc="https://raw.githubusercontent.com/Vandit13S/ezchat-logo/main/Frame%2058.svg"
            logoAlt="EZChat"
          />
        </div>
      </div>
    </div>
  );
};

const StaticBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      <StaticWatermark text="EZChat AI" />
      <StaticWatermark text="Professional Services" />
      <StaticWatermark text="Knowledge Base" />
      <StaticWatermark text="Auto Reports" />
      <StaticWatermark text="Expert Answers" />
      <StaticWatermark text="Scale Faster" />
      <StaticWatermark text="Save Time" />
      <StaticWatermark text="Grow Revenue" />
    </div>
  );
};

const StaticWatermark = ({ text }: { text: string }) => (
  <div className="flex -translate-y-12 select-none overflow-hidden opacity-[0.03]">
    <span className="w-fit whitespace-nowrap font-black uppercase leading-[0.75] text-gray-900" style={{ fontSize: '20vmax' }}>
      {text}
    </span>
    <span className="ml-48 w-fit whitespace-nowrap font-black uppercase leading-[0.75] text-gray-900" style={{ fontSize: '20vmax' }}>
      {text}
    </span>
  </div>
);
