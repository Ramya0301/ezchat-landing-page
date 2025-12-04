import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { BookOpen, FileBarChart, Bot, Code, Users, Lock, Check } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      id: 'knowledge',
      label: 'Knowledge Base',
      icon: <BookOpen className="w-5 h-5" />,
      headline: 'Institutional Knowledge That Never Leaves',
      benefits: [
        'Upload unlimited regulations, past opinions, case files',
        'AI indexes every document—find any answer in seconds',
        'Automatic citation of sources (your past work, regulations)',
        'Version control when rules change',
        'Search by question, not keywords',
      ],
      visual: 'knowledge',
    },
    {
      id: 'multimodel',
      label: 'Multi-Model AI',
      icon: <Bot className="w-5 h-5" />,
      headline: 'Choose the Best AI Model for Every Task',
      benefits: [
        'Access 10+ premium AI models in one platform',
        'GPT-5.1, Claude Haiku 4.5, Gemini, Perplexity, Flux Pro, and more',
        'Search and switch between models instantly',
        'Specialized models for specific tasks (coding, image generation, analysis)',
        'One subscription replaces multiple AI tools',
        'Always updated with the latest model releases',
      ],
      visual: 'multimodel',
    },
    {
      id: 'reports',
      label: 'Presentation',
      icon: <FileBarChart className="w-5 h-5" />,
      headline: 'Professional Presentations in Minutes, Not Hours',
      benefits: [
        'AI-powered slide generation from your data and notes',
        'Automatic chart and visualization creation',
        'Brand-consistent formatting and design',
        'Smart content organization and layout',
        'One-click export to PowerPoint/PDF',
        'Real-time editing',
      ],
      visual: 'reports',
    },
    {
      id: 'code',
      label: 'Code & Data Analysis',
      icon: <Code className="w-5 h-5" />,
      headline: 'Data Analysis & Visualization Made Easy',
      benefits: [
        'Generate SQL queries from natural language',
        'Upload CSV/Excel files for instant analysis',
        'Create interactive charts (bar, pie, line, trend)',
        'Build comprehensive sales and performance dashboards',
        'Analyze product trends and regional comparisons',
        'Export visualizations and insights to reports',
      ],
      visual: 'code',
    },
    {
      id: 'collaboration',
      label: 'Team Collaboration',
      icon: <Users className="w-5 h-5" />,
      headline: 'Seamless Team Communication & Knowledge Sharing',
      benefits: [
        'Dedicated channels for different teams and projects',
        'Share AI conversations and insights instantly',
        'Threaded discussions for organized communication',
        'Tag team members and assign tasks',
        'Complete conversation history and audit trail',
        'Slack-style interface your team already knows',
      ],
      visual: 'collaboration',
    },
    {
      id: 'security',
      label: 'Data Security',
      icon: <Lock className="w-5 h-5" />,
      headline: 'Bank-Level Security for Client Confidentiality',
      benefits: [
        'Encrypted data storage on Indian servers (AWS Mumbai)',
        'SOC 2 Type II certified infrastructure',
        'Data Processing Agreement (DPDP Act compliant)',
        'Access logs for every query (who, when, what)',
        'On-premise deployment option available',
        'Client data never used to train AI models',
      ],
      visual: 'security',
    },
  ];

  return (
    <section id="features" className="py-12 px-6" style={{ backgroundColor: '#F9FAFB' }}>
      <div className="max-w-7xl mx-auto">
        {/* Headlines */}
        <div className="text-center mb-12">
          <h2 className="mb-4" style={{ color: '#2563EB', fontWeight: 'bold', fontSize: '2.5rem' }}>Everything Professional Firms Need in One Platform</h2>
          <p style={{ color: '#4B5563' }}>Not just another chat app - a complete AI productivity suite built for expert firms</p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="knowledge" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 mb-12 h-auto gap-2 p-2 rounded-lg bg-transparent" style={{ backgroundColor: '#E5E7EB' }}>
            {features.map((feature) => (
              <TabsTrigger
                key={feature.id}
                value={feature.id}
                className="flex items-center gap-2 py-3"
              >
                {feature.icon}
                <span className="hidden md:inline">{feature.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {features.map((feature) => (
            <TabsContent key={feature.id} value={feature.id} className="mt-0">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* Left Column - Features */}
                <div className="space-y-6">
                  <h3 className="text-gray-900">{feature.headline}</h3>
                  <div className="space-y-4">
                    {feature.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="bg-green-100 rounded-full p-1 mt-1 flex-shrink-0">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                        <p className="text-gray-700">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column - Visual */}
                <div className="bg-gray-50 rounded-xl border-2 border-gray-200 p-6">
                  {/* Knowledge Base Visual */}
                  {feature.visual === 'knowledge' && (
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 border border-gray-200">
                        <div className="flex items-center gap-2 mb-4 pb-3 border-b">
                          <BookOpen className="w-5 h-5 text-blue-600" />
                          <span className="text-gray-900">Knowledge Base</span>
                        </div>
                        <div className="space-y-2 mb-4">
                          {['GST Regulations', 'Past Client Opinions', 'Legal Precedents', 'SOPs & Templates'].map(
                            (folder, i) => (
                              <div key={i} className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded">
                                <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center text-blue-600 text-xs">
                                  📁
                                </div>
                                <span className="text-sm text-gray-700">{folder}</span>
                                <span className="text-xs text-gray-500 ml-auto">{12 + i * 3} docs</span>
                              </div>
                            )
                          )}
                        </div>
                        <div className="bg-blue-50 rounded p-3 border border-blue-200">
                          <p className="text-sm text-gray-600 mb-2">Search:</p>
                          <p className="text-gray-900 mb-3">
                            "What are the transfer pricing requirements for related party transactions?"
                          </p>
                          <div className="bg-white rounded p-3 border-l-4 border-blue-500">
                            <p className="text-sm text-gray-700 mb-2">
                              Based on Section 92 of Income Tax Act, transfer pricing...
                            </p>
                            <p className="text-xs text-blue-600">📎 Source: IT Act Section 92, Page 145</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Multi-Model AI Visual */}
                  {feature.visual === 'multimodel' && (
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-lg">
                        <img 
                          src="/model.png"
                          alt="Multi-Model AI"
                          className="w-full h-auto object-contain rounded"
                        />
                      </div>
                    </div>
                  )}

                  {/* Report Generator Visual */}
                  {feature.visual === 'reports' && (
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-lg">
                        <img 
                          src="/preso.png"
                          alt="Presentation Generator"
                          className="w-full h-auto object-contain rounded"
                        />
                      </div>
                    </div>
                  )}

                  {/* Code & Data Analysis Visual */}
                  {feature.visual === 'code' && (
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-lg">
                        <img 
                          src="/artifacts_2.png"
                          alt="Code & Data Analysis"
                          className="w-full h-auto object-contain rounded"
                        />
                      </div>
                    </div>
                  )}

                  {/* Team Collaboration Visual */}
                  {feature.visual === 'collaboration' && (
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-lg">
                        <div className="flex items-center gap-2 mb-4 pb-3 border-b">
                          <Users className="w-5 h-5 text-orange-600" />
                          <span className="text-gray-900">Channel</span>
                        </div>
                        <img 
                          src="/team.png"
                          alt="Team Collaboration"
                          className="w-full h-auto object-contain rounded"
                        />
                      </div>
                    </div>
                  )}

                  {/* Data Security Visual */}
                  {feature.visual === 'security' && (
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 border border-gray-200">
                        <div className="flex items-center gap-2 mb-4 pb-3 border-b">
                          <Lock className="w-5 h-5 text-red-600" />
                          <span className="text-gray-900">Security & Compliance</span>
                        </div>
                        <div className="space-y-4">
                          {/* Security Badges */}
                          <div className="grid grid-cols-3 gap-3">
                            <div className="bg-green-50 border border-green-200 rounded p-3 text-center">
                              <div className="text-2xl mb-1">🔒</div>
                              <p className="text-xs text-gray-700">SSL Encrypted</p>
                            </div>
                            <div className="bg-blue-50 border border-blue-200 rounded p-3 text-center">
                              <div className="text-2xl mb-1">✓</div>
                              <p className="text-xs text-gray-700">SOC 2 Type II</p>
                            </div>
                            <div className="bg-purple-50 border border-purple-200 rounded p-3 text-center">
                              <div className="text-2xl mb-1">🇮🇳</div>
                              <p className="text-xs text-gray-700">DPDP Act</p>
                            </div>
                          </div>

                          {/* Access Controls */}
                          <div className="bg-gray-50 rounded p-3 border border-gray-200">
                            <p className="text-xs text-gray-600 mb-2">Access Control Settings:</p>
                            <div className="space-y-2">
                              {['2-Factor Authentication: Enabled', 'IP Whitelisting: Active', 'Audit Logs: Recording'].map(
                                (setting, i) => (
                                  <div key={i} className="flex items-center gap-2 text-xs">
                                    <Check className="w-3 h-3 text-green-600" />
                                    <span className="text-gray-700">{setting}</span>
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
