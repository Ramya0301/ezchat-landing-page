import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { motion } from 'motion/react';
import useMeasure from 'react-use-measure';
import { Button } from './ui/button';

export function FAQSection() {
  const faqs = [
    {
      question: 'Will AI give wrong advice and create liability for our firm?',
      answer: (
        <div className="space-y-4">
          <p>
            EZChat is a decision support tool, not a replacement for professional judgment. Here&apos;s how it works:
          </p>
          <ol className="space-y-3 list-none">
            <li>
              <strong>1. RETRIEVAL, NOT CREATION:</strong> EZChat doesn&apos;t create advice—it retrieves and
              synthesizes YOUR firm&apos;s past work, opinions, and uploaded knowledge.
            </li>
            <li>
              <strong>2. ALWAYS CITED:</strong> Every answer includes source citations (regulatory references, your
              past work) so your professionals can verify.
            </li>
            <li>
              <strong>3. PROFESSIONAL REVIEW:</strong> Think of it like a junior staff member&apos;s draft—your senior
              professional reviews and approves before signing off.
            </li>
            <li>
              <strong>4. KNOWLEDGE AUGMENTATION:</strong> It makes your team more informed, but the licensed
              professional still makes final decisions.
            </li>
          </ol>
          <p>
            We provide a Data Processing Agreement that clarifies we&apos;re your data processor, not your advisor. You
            remain in full control.
          </p>
        </div>
      ),
    },
    {
      question: 'How is client data kept secure and confidential?',
      answer: (
        <div className="space-y-4">
          <p>We take data security as seriously as you do:</p>
          <ul className="space-y-2 list-none">
            <li>
              <strong>• DATA STORAGE:</strong> Encrypted storage on AWS Mumbai region (India)
            </li>
            <li>
              <strong>• ACCESS CONTROL:</strong> Only your firm&apos;s users access your knowledge base
            </li>
            <li>
              <strong>• DPDP COMPLIANCE:</strong> Full Data Processing Agreement provided
            </li>
            <li>
              <strong>• AUDIT TRAIL:</strong> Every query logged (who, when, what)
            </li>
            <li>
              <strong>• NO TRAINING:</strong> Client data never used to train AI models
            </li>
            <li>
              <strong>• ON-PREMISE OPTION:</strong> Available for highest sensitivity requirements
            </li>
          </ul>
          <p>
            We recommend uploading anonymized examples (Client A, Client B) rather than actual identifying information
            for additional safety.
          </p>
          </div>
      ),
    },
    {
      question: "What if our senior partners don't trust AI?",
      answer: (
        <div className="space-y-4">
          <p>Common concern! Here&apos;s how successful firms onboard skeptical partners:</p>
          <ol className="space-y-3 list-none">
            <li>
              <strong>1. START WITH JUNIORS:</strong> Let junior staff use it first for research and drafts. Partners
              review their work as usual.
            </li>
            <li>
              <strong>2. SHOW, DON&apos;T TELL:</strong> When a junior produces a well-researched document in 15 minutes
              instead of 4 hours, partners notice.
            </li>
            <li>
              <strong>3. TIME SAVINGS:</strong> Partners care about not being interrupted 30 times/day. When juniors
              self-serve answers, partners get their time back.
            </li>
            <li>
              <strong>4. PILOT PROGRAM:</strong> Start with 5 users for 2 weeks. Measure time saved. Let results speak.
            </li>
          </ol>
          <p>Most skeptical partners become biggest advocates once they see junior staff producing better work faster.</p>
        </div>
      ),
    },
    {
      question: 'We already use [other AI tool]. Why switch to EZChat?',
      answer: (
        <div className="space-y-4">
          <p>Great question! Here&apos;s how EZChat differs:</p>
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <p className="text-gray-900 mb-2">ChatGPT/Claude:</p>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>• Generic knowledge, doesn&apos;t know YOUR firm&apos;s positions</li>
              <li>• Can&apos;t access your past work or client data</li>
              <li>• No team collaboration</li>
            </ul>
          </div>
          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
            <p className="text-gray-900 mb-2">EZChat for Professional Firms:</p>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>• Trained on YOUR knowledge base (past work, SOPs)</li>
              <li>• Generates formatted reports with visualizations</li>
              <li>• Team channels with approval workflows</li>
              <li>• Citations to your firm&apos;s actual past work</li>
              <li>• Built for professional services compliance</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      question: 'What happens when regulations change? Does AI give outdated info?',
      answer: (
        <div className="space-y-4">
          <p>We handle regulatory updates systematically:</p>
          <ol className="space-y-2 list-none">
            <li>1. You let us know when new regulations/updates are released</li>
            <li>2. We update the knowledge base accordingly</li>
            <li>3. AI immediately incorporates latest rules</li>
          </ol>
        </div>
      ),
    },
    {
      question: 'Can we try it with our actual client data before committing?',
      answer: (
        <div className="space-y-4">
          <p>Absolutely. Here&apos;s our pilot program:</p>
          <ul className="space-y-2 list-none">
            <li>• 14-day free trial (no credit card required)</li>
            <li>• We help you upload your firm&apos;s knowledge base</li>
            <li>• Use with real (anonymized) client scenarios</li>
            <li>• Measure actual time savings vs current process</li>
            <li>• Get dedicated onboarding support</li>
          </ul>
          <p>If you don&apos;t see clear ROI after 14 days, we part as friends. No hard feelings.</p>
        </div>
      ),
    },
    {
      question: "What if we're already at capacity and can't onboard new software?",
      answer: (
        <div className="space-y-4">
          <p>This is precisely why you need EZChat :)</p>
          <p>
            If you&apos;re at capacity, you&apos;re saying no to new clients and leaving revenue on table. EZChat lets
            you serve 3x more clients with same team size.
          </p>
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <p className="text-gray-900 mb-2">Onboarding time:</p>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>• Day 1 (2 hours): Upload knowledge base</li>
              <li>• Day 2 (1 hour): Team training call</li>
              <li>• Day 3: Start using</li>
            </ul>
          </div>
          <p>
            Total investment: <strong>3 hours once</strong>. Return: <strong>20+ hours saved weekly forever</strong>.
          </p>
          <p>
            The question isn&apos;t &quot;Can we afford time to onboard?&quot; It&apos;s &quot;Can we afford NOT
            to?&quot;
          </p>
        </div>
      ),
    },
    {
      question: 'Do you offer training and support after purchase?',
      answer: (
        <div className="space-y-4">
          <p>Yes! Every plan includes:</p>
          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
            <p className="text-gray-900 mb-2">ONBOARDING:</p>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>• Personalized setup call</li>
              <li>• We help upload your knowledge base</li>
              <li>• Team training session (30 minutes)</li>
            </ul>
          </div>
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <p className="text-gray-900 mb-2">ONGOING SUPPORT:</p>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>• Email support (2-hour response on Pro tier)</li>
              <li>• Help center with tutorials</li>
              <li>• Monthly office hours (group Q&A)</li>
              <li>• Dedicated account manager (Enterprise tier)</li>
            </ul>
          </div>
          <p>
            <strong>Our goal:</strong> Get your team to ROI within first week.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section id="faqs" aria-labelledby="faqs-heading" className="py-20 px-6" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-4xl mx-auto">
        {/* Headline */}
        <div className="text-center mb-12">
          <h2 id="faqs-heading" className="mb-4" style={{ color: '#2563EB', fontWeight: 'bold', fontSize: '2.3rem', textAlign: 'center' }}>Questions from Professional Firms Like Yours</h2>
        </div>

        {/* FAQ Accordion */}
        <div>
          {faqs.map((faq, index) => (
            <Question key={index} title={faq.question} defaultOpen={index === 0}>
              <div>{faq.answer}</div>
            </Question>
          ))}
        </div>
      </div>
    </section>
  );
}

const Question = ({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: JSX.Element;
  defaultOpen?: boolean;
}) => {
  const [ref, { height }] = useMeasure();
  const [open, setOpen] = useState(defaultOpen);

  return (
    <motion.div
      animate={open ? 'open' : 'closed'}
      className="border-b-[1px]"
      style={{ borderColor: '#E5E7EB' }}
    >
      <button
        onClick={() => setOpen((pv) => !pv)}
        className="flex w-full items-center justify-between gap-4 py-6"
      >
        <motion.span
          variants={{
            open: {
              color: '#3A7BD5',
            },
            closed: {
              color: '#1F2937',
            },
          }}
          className="text-left font-semibold"
        >
          {title}
        </motion.span>
        <motion.span
          variants={{
            open: {
              rotate: '180deg',
              color: '#3A7BD5',
            },
            closed: {
              rotate: '0deg',
              color: '#1F2937',
            },
          }}
        >
          <FiChevronDown className="text-2xl" />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: open ? height : '0px',
          marginBottom: open ? '24px' : '0px',
        }}
        className="overflow-hidden"
        style={{ color: '#4B5563' }}
      >
        <div ref={ref}>{children}</div>
      </motion.div>
    </motion.div>
  );
};
