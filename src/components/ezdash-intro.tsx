import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowRight, Database, BarChart3, FileSpreadsheet } from 'lucide-react';

export function EZDashIntro() {
  return (
    <section className="py-16 px-6" style={{ backgroundColor: '#F5F3FF' }}>
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="grid md:grid-cols-5 gap-0">
            {/* Left Column - Content (60%) */}
            <div className="md:col-span-3 p-10 md:p-12">
              {/* Logo and Text */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex-shrink-0" style={{ width: '80px', height: '80px' }}>
                  <img 
                    src="https://raw.githubusercontent.com/Vandit13S/ezchat-logo/main/Frame%2059.svg"
                    alt="EZDash"
                    className="w-full h-full"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <span 
                  className="font-bold text-2xl uppercase tracking-wide"
                  style={{
                    background: 'linear-gradient(to bottom right, #3B82F6, #9333EA)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  ALSO FROM EZTECH
                </span>
              </div>

              {/* Headline Boxes */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <div className="bg-purple-50 border-2 border-[#8A2BE2] rounded-lg px-4 py-3 flex-1 flex items-center justify-center">
                  <h2 className="text-[#8A2BE2] font-semibold text-sm uppercase tracking-wide text-center">Need More Than Productivity?</h2>
                </div>
                <div className="bg-purple-50 border-2 border-[#8A2BE2] rounded-lg px-4 py-3 flex-1 flex items-center justify-center">
                  <h2 className="text-[#8A2BE2] font-semibold text-sm uppercase tracking-wide text-center">Need Real-Time Business Intelligence?</h2>
                </div>
              </div>

              {/* Subheadline */}
              <p className="text-[#6B7280] mb-8">
                If your operations, finance, or supply chain teams are drowning in manual reports from ERP
                systems - we have a separate solution for that.
              </p>

              {/* Value Props */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 rounded-lg p-2 mt-0.5">
                    <Database className="w-5 h-5 text-[#8A2BE2]" />
                  </div>
                  <div>
                    <p className="text-[#1F2937] font-bold">Connect to any ERP</p>
                    <p className="text-sm text-[#6B7280]">Tally, SAP, Oracle, 1C, custom databases</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 rounded-lg p-2 mt-0.5">
                    <BarChart3 className="w-5 h-5 text-[#8A2BE2]" />
                  </div>
                  <div>
                    <p className="text-[#1F2937] font-bold">Auto-generate dashboards</p>
                    <p className="text-sm text-[#6B7280]">Sales forecasting, inventory, P&L analysis</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 rounded-lg p-2 mt-0.5">
                    <FileSpreadsheet className="w-5 h-5 text-[#8A2BE2]" />
                  </div>
                  <div>
                    <p className="text-[#1F2937] font-bold">Stop Excel hell</p>
                    <p className="text-sm text-[#6B7280]">Save 40+ hours/week on manual reporting</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <Button className="bg-purple-gradient hover:opacity-90 text-white transition-opacity" size="lg">
                Learn About EZDash
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              {/* Subtext */}
              <p className="text-sm text-gray-500 mt-4">
                Built specifically for operations, finance, and supply chain teams with complex data infrastructure
                needs.
              </p>
            </div>

            {/* Right Column - Dashboard Visual (40%) */}
            <div className="md:col-span-2 bg-gradient-to-br from-blue-500 to-purple-600 p-8 flex items-center justify-center">
              <div className="w-full h-full flex flex-col gap-4 justify-center">
                <img 
                  src="/EZDash screenshot.png"
                  alt="EZDash Dashboard - Top"
                  className="w-full h-auto object-contain rounded-lg shadow-2xl"
                />
                <img 
                  src="/tutorial_first_dashboard.png"
                  alt="EZDash Dashboard - Bottom"
                  className="w-full h-auto object-contain rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
