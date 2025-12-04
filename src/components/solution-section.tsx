import React, { useRef } from "react";
import { MotionValue, motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowUp } from "lucide-react";

const items = [
  {
    id: 1,
    icon: "📚",
    title: "Build Your Firm's Knowledge Base",
    description:
      "Upload your firm's past work — tax opinions, advisory notes, research memos, SOPs, templates, regulations. EZChat indexes everything and makes it instantly searchable. Your firm's collective expertise, organized and accessible in one place.",
    img: "/KB.jpeg",
  },
  {
    id: 2,
    icon: "🤖",
    title: "Access 10+ AI Models in One Platform",
    description: (
      <>
        Get the best of GPT-5.1, Claude, Gemini, Grok, and more.
        <br />
        <span style={{ fontWeight: 'bold' }}>ALL IN ONE INTERFACE.</span>
        <br /><br />
        Compare responses side-by-side. Use different models for different tasks. Always get the most accurate, up-to-date AI capabilities without managing multiple subscriptions.
      </>
    ),
    img: "/AI-Logos.jpg",
  },
  {
    id: 3,
    icon: "💬",
    title: "Ask Questions, Get Answers with Citations",
    description:
      "Your team asks questions in plain English: \"What's our position on [tax issue]?\" or \"Find similar cases we've handled.\" EZChat answers instantly using your uploaded knowledge, complete with citations to specific documents and sections. Junior staff get senior - level guidance in seconds.",
    img: "/citations.jpeg",
  },
  {
    id: 4,
    icon: "📊",
    title: "Generate Reports & Analyze Data Automatically",
    description:
      "Upload client data and ask: \"Generate monthly analysis report\" or \"Summarize compliance status\" or \"Create executive presentation.\" EZChat produces formatted deliverables - reports, decks, summaries - in 15 minutes instead of 10 hours. With charts, visualizations, and professional formatting.",
    img: "/artifacts_2.png",
  },
  {
    id: 5,
    icon: "👥",
    title: "Scale Your Expertise Across the Team",
    description:
      "Every team member now has instant access to your firm's best thinking. Junior staff perform at senior level. Partners focus on strategy, not routine questions. Take on 3x more clients with the same team size.",
    img: "/scale.jpeg",
  },
];

const Content = ({ content }: { content: typeof items }) => {
  return (
    <div className="w-full">
      {content.map(({ id, title, description, icon }, idx) => (
        <div
          key={id}
          className="p-8 h-[50vh] flex flex-col snap-start snap-always"
          style={{
            backgroundColor: idx % 2 ? '#FFFFFF' : '#1F2937',
            color: idx % 2 ? '#1F2937' : '#FFFFFF'
          }}
        >
          <div>
            {id !== 2 && <div className="text-5xl mb-4">{icon}</div>}
            <h3 
              className="text-3xl font-medium mb-4" 
              style={
                id === 2 || id === 4
                  ? { color: '#3B82F6', fontWeight: 'bold' } 
                  : id === 1 || id === 3 || id === 5
                  ? { color: '#FFFFFF', fontWeight: 'bold' }
                  : {}
              }
            >
              {title}
            </h3>
          </div>
          <div className="font-light w-full max-w-md" style={{ color: idx % 2 ? '#4B5563' : '#D1D5DB' }}>{description}</div>
        </div>
      ))}
    </div>
  );
};

const Images = ({
  content,
  scrollYProgress,
}: {
  content: typeof items;
  scrollYProgress: MotionValue<number>;
}) => {
  const top = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${(content.length - 1) * 50}vh`, "0vh"]
  );
  return (
    <div className="h-[50vh] overflow-hidden sticky top-0 w-24 md:w-full">
      <motion.div style={{ top }} className="absolute left-0 right-0">
        {[...content].reverse().map(({ img, id, title }) => (
          <img
            key={id}
            alt={title}
            className="h-[50vh] w-full object-cover"
            style={{ borderLeft: '4px solid #E5E7EB' }}
            src={img}
          />
        ))}
      </motion.div>
    </div>
  );
};

export function SolutionSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });
  return (
    <div id="solutions" className="py-12" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container mx-auto px-4">
        <div className="p-4 grid place-items-center mb-4" style={{ backgroundColor: '#F9FAFB', color: '#1F2937' }}>
          <ArrowDown className="text-xl" />
        </div>
        <div
          ref={containerRef}
          className="h-[50vh] overflow-y-scroll snap-y snap-mandatory rounded-lg shadow-2xl"
        >
          <section className="flex" style={{ backgroundColor: '#1F2937', color: '#FFFFFF' }}>
            <Content content={items} />
            <Images content={items} scrollYProgress={scrollYProgress} />
          </section>
        </div>
        <div className="p-4 grid place-items-center mt-4" style={{ backgroundColor: '#F9FAFB', color: '#1F2937' }}>
          <ArrowUp className="text-xl" />
        </div>
      </div>
    </div>
  );
}
