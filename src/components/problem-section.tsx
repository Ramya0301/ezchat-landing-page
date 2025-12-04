import { Brain, Clock, TrendingDown } from 'lucide-react';

export function ProblemSection() {
  const problems = [
    {
      icon: Brain,
      iconColor: '#EF4444',
      iconBg: '#FEE2E2',
      title: 'Knowledge Trapped in Senior Staff',
      bullets: [
        'Seniors are interrupted 30+ times a day answering repetitive questions.',
        'When your experts leave, your firm\'s intellectual capital walks out the door with them.',
      ],
    },
    {
      icon: Clock,
      iconColor: '#F59E0B',
      iconBg: '#FEF3C7',
      title: 'Everything Takes Too Long',
      bullets: [
        'Partners are buried in routine work instead of strategy.',
        'Between manual research and waiting for reviews, client deliverables take days longer than they should.',
      ],
    },
    {
      icon: TrendingDown,
      iconColor: '#8B5CF6',
      iconBg: '#EDE9FE',
      title: "Can't Scale Without Hiring",
      bullets: [
        'You\'re stuck in a cycle of linear growth: more revenue requires more headcount.',
        'High salary costs and long training cycles make scaling profitable impossible.',
      ],
    },
  ];

  return (
    <section className="bg-[#F9FAFB] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <div className="text-center mb-16">
          <h2 className="text-[#1F2937] mb-4">Three Problems Holding Professional Firms Back</h2>
        </div>

        {/* 3-Column Grid - Wider Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-10 min-h-[180px] transition-all hover:scale-105 border border-[#E5E7EB]"
                style={{
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                }}
              >
                <div 
                  className="mb-6 w-14 h-14 rounded-lg flex items-center justify-center" 
                  style={{ backgroundColor: problem.iconBg }}
                >
                  <IconComponent className="w-7 h-7" style={{ color: problem.iconColor }} strokeWidth={2.5} />
                </div>
                <h3 className="mb-4" style={{ color: '#3A7BD5', fontWeight: 700 }}>{problem.title}</h3>
                <ul className="space-y-3">
                  {problem.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="text-[#4B5563] flex items-start">
                      <span className="text-[#3A7BD5] mr-2 flex-shrink-0">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
