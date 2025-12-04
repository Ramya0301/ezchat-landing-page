import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card } from './ui/card';
import { Check } from 'lucide-react';

export function FinalCTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    firm: '',
    teamSize: '',
    phone: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Call backend API to send email
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5001';
      const response = await fetch(`${apiUrl}/api/send-demo-request`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          firm: formData.firm,
          teamSize: formData.teamSize,
          phone: formData.phone,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Failed to send email');
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error sending email:', error);
      alert('There was an error submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    'Cut client reporting time by 75%',
    'Give junior staff instant access to senior expertise',
    'Never lose institutional knowledge when staff leave',
    'Scale to 3x more clients with same team size',
    'ROI in under 2 months (average: 6 days)',
  ];

  const trustSignals = [
    '14-day free trial with full Pro access',
    'No credit card required to start',
    'Setup completed in 2 hours',
    'Money-back guarantee if no ROI',
  ];

  return (
    <section id="book-demo" className="py-20 px-6" style={{ background: 'linear-gradient(to bottom right, #F9FAFB, #FFFFFF, #E0F2FF)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Left Column - Content (60%) */}
          <div className="md:col-span-3 space-y-8">
            {/* Subheadline */}
            <div>
              <p className="text-2xl md:text-3xl font-medium" style={{ color: '#1F2937' }}>
                Join 100+ professional firms who've eliminated reporting busywork and scaled their client capacity
                without hiring.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="rounded-full p-1 mt-1 flex-shrink-0" style={{ backgroundColor: '#D1FAE5' }}>
                    <Check className="w-5 h-5" style={{ color: '#28A745' }} />
                  </div>
                  <p className="text-lg" style={{ color: '#1F2937' }}>{benefit}</p>
                </div>
              ))}
            </div>

            {/* Trust Signals as Boxes */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {trustSignals.map((signal, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 px-4 py-3 rounded-lg border-2" 
                  style={{ 
                    borderColor: '#3A7BD5',
                    backgroundColor: '#F0F9FF'
                  }}
                >
                  <Check className="w-5 h-5 flex-shrink-0" style={{ color: '#28A745' }} />
                  <p className="text-base font-medium" style={{ color: '#3A7BD5' }}>{signal}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form (40%) */}
          <div className="md:col-span-2">
            <Card className="bg-white border-2 shadow-xl p-8" style={{ borderColor: '#3A7BD5' }}>
              {!isSubmitted ? (
                <>
                  <div className="mb-6">
                    <h3 className="mb-2" style={{ color: '#1F2937' }}>SEE IT WITH YOUR DATA</h3>
                    <p className="text-m" style={{ color: '#4B5563' }}>
                      Book a personalized demo where we'll show you:
                    </p>
                    <ul className="text-sm mt-4 space-y-2" style={{ color: '#4B5563' }}>
                      <li>• EZChat trained on sample scenarios from your industry</li>
                      <li>• Live Q&A with use cases specific to your firm</li>
                    </ul>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        placeholder="Your full name"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        placeholder="you@yourfirm.com"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="firm">Firm Name *</Label>
                      <Input
                        id="firm"
                        type="text"
                        value={formData.firm}
                        onChange={(e) => setFormData({ ...formData, firm: e.target.value })}
                        required
                        placeholder="Your firm name"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="teamSize">Number of Team Members *</Label>
                      <Input
                        id="teamSize"
                        type="number"
                        value={formData.teamSize}
                        onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                        required
                        placeholder="e.g., 25"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone (optional)</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91-XXXXXXXXXX"
                        className="mt-1"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-blue-gradient hover:opacity-90 text-white" 
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Book My Demo →'}
                    </Button>
                  </form>

                  <p className="text-sm text-center mt-4" style={{ color: '#6B7280' }}>
                    We'll respond within 2 hours (business days)
                  </p>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-full p-3" style={{ backgroundColor: '#D1FAE5' }}>
                      <Check className="w-12 h-12" style={{ color: '#28A745' }} />
                    </div>
                  </div>
                  <h3 className="mb-3 text-2xl" style={{ color: '#1F2937' }}>Message Sent!</h3>
                  
                  <p className="text-sm mt-4" style={{ color: '#6B7280' }}>
                    Thank you for your interest in EZChat!
                    <br />
                    We will reach out to you within 2 hours (business days).
                  </p>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
