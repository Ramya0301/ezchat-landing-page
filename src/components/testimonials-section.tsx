import { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { animate, useInView } from 'motion/react';

const CARD_SIZE_LG = 365;
const CARD_SIZE_SM = 290;

const BORDER_SIZE = 2;
const CORNER_CLIP = 50;
const CORNER_LINE_LEN = Math.sqrt(
  CORNER_CLIP * CORNER_CLIP + CORNER_CLIP * CORNER_CLIP
);

const ROTATE_DEG = 2.5;

const STAGGER = 15;
const CENTER_STAGGER = -65;

const SECTION_HEIGHT = 600;

interface StatProps {
  num: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  subheading: string;
}

const Stat = ({ num, suffix = '', prefix = '', decimals = 0, subheading }: StatProps) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    animate(0, num, {
      duration: 2.5,
      onUpdate(value) {
        if (!ref.current) return;
        ref.current.textContent = value.toFixed(decimals);
      },
    });
  }, [num, decimals, isInView]);

  return (
    <div className="flex w-72 flex-col items-center py-8 sm:py-0">
      <p className="mb-2 text-center font-semibold" style={{ fontSize: '3rem', lineHeight: '1', color: '#28A745' }}>
        {prefix}
        <span ref={ref}>0</span>
        {suffix}
      </p>
      <p className="max-w-64 text-center" style={{ color: '#6B7280' }}>{subheading}</p>
    </div>
  );
};

export function TestimonialsSection() {
  const [cardSize, setCardSize] = useState(CARD_SIZE_LG);
  const [testimonials, setTestimonials] = useState(TESTIMONIAL_DATA);

  const handleMove = (position: number) => {
    const copy = [...testimonials];

    if (position > 0) {
      for (let i = position; i > 0; i--) {
        const firstEl = copy.shift();

        if (!firstEl) return;

        copy.push({ ...firstEl, tempId: Math.random() });
      }
    } else {
      for (let i = position; i < 0; i++) {
        const lastEl = copy.pop();

        if (!lastEl) return;

        copy.unshift({ ...lastEl, tempId: Math.random() });
      }
    }

    setTestimonials(copy);
  };

  useEffect(() => {
    const { matches } = window.matchMedia("(min-width: 640px)");

    if (matches) {
      setCardSize(CARD_SIZE_LG);
    } else {
      setCardSize(CARD_SIZE_SM);
    }

    const handleSetCardSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");

      if (matches) {
        setCardSize(CARD_SIZE_LG);
      } else {
        setCardSize(CARD_SIZE_SM);
      }
    };

    window.addEventListener("resize", handleSetCardSize);

    return () => window.removeEventListener("resize", handleSetCardSize);
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 py-20 overflow-hidden">
      {/* Fuzzy Overlay */}
      <motion.div
        initial={{ transform: "translateX(-10%) translateY(-10%)" }}
        animate={{
          transform: "translateX(10%) translateY(10%)",
        }}
        transition={{
          repeat: Infinity,
          duration: 0.2,
          ease: "linear",
          repeatType: "mirror",
        }}
        style={{
          backgroundImage: 'url("https://www.hover.dev/black-noise.png")',
        }}
        className="pointer-events-none absolute -inset-[100%] opacity-[15%]"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Headline */}
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">What Professional Firms Are Saying</h2>
        </div>
      </div>

      {/* Testimonials Carousel */}
      <div
        className="relative w-full overflow-hidden mb-20"
        style={{
          height: SECTION_HEIGHT,
          backgroundColor: '#F9FAFB',
        }}
      >
        {testimonials.map((t, idx) => {
          let position = 0;

          if (testimonials.length % 2) {
            position = idx - (testimonials.length + 1) / 2;
          } else {
            position = idx - testimonials.length / 2;
          }

          return (
            <TestimonialCard
              key={t.tempId}
              testimonial={t}
              handleMove={handleMove}
              position={position}
              cardSize={cardSize}
            />
          );
        })}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-8">
          <button
            onClick={() => handleMove(-1)}
            className="grid h-14 w-14 place-content-center text-3xl transition-colors bg-white border-2"
            style={{ borderColor: '#E5E7EB', color: '#374151' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#3A7BD5';
              e.currentTarget.style.color = '#FFFFFF';
              e.currentTarget.style.borderColor = '#3A7BD5';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFFFFF';
              e.currentTarget.style.color = '#374151';
              e.currentTarget.style.borderColor = '#E5E7EB';
            }}
          >
            <GoArrowLeft />
          </button>
          <button
            onClick={() => handleMove(1)}
            className="grid h-14 w-14 place-content-center text-3xl transition-colors bg-white border-2"
            style={{ borderColor: '#E5E7EB', color: '#374151' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#3A7BD5';
              e.currentTarget.style.color = '#FFFFFF';
              e.currentTarget.style.borderColor = '#3A7BD5';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFFFFF';
              e.currentTarget.style.color = '#374151';
              e.currentTarget.style.borderColor = '#E5E7EB';
            }}
          >
            <GoArrowRight />
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center justify-center sm:flex-row">
          <Stat num={320} decimals={0} suffix=" Hours" subheading="Saved Monthly Per Firm" />
          <div className="h-[1px] w-12 sm:h-12 sm:w-[1px]" style={{ backgroundColor: '#E5E7EB' }} />
          <Stat num={4.8} decimals={1} prefix="₹" suffix="L" subheading="Value Recovered Per Month" />
          <div className="h-[1px] w-12 sm:h-12 sm:w-[1px]" style={{ backgroundColor: '#E5E7EB' }} />
          <Stat num={2} decimals={0} suffix=" Months" subheading="Typical ROI Payback Period" />
        </div>
      </div>
    </section>
  );
}

interface TestimonialProps {
  position: number;
  testimonial: TestimonialType;
  handleMove: Function;
  cardSize: number;
}

const TestimonialCard = ({
  position,
  testimonial,
  handleMove,
  cardSize,
}: TestimonialProps) => {
  const isActive = position === 0;

  return (
    <motion.div
      initial={false}
      onClick={() => handleMove(position)}
      className="absolute left-1/2 top-1/2 cursor-pointer p-8 transition-colors duration-500"
      style={{
        borderWidth: isActive ? '2px' : BORDER_SIZE,
        borderColor: isActive ? '#3A7BD5' : '#E5E7EB',
        borderStyle: 'solid',
        background: isActive 
          ? 'linear-gradient(135deg, #E0F2FF 0%, #DBEAFE 100%)' 
          : '#FFFFFF',
        color: '#374151',
        clipPath: `polygon(${CORNER_CLIP}px 0%, calc(100% - ${CORNER_CLIP}px) 0%, 100% ${CORNER_CLIP}px, 100% 100%, calc(100% - ${CORNER_CLIP}px) 100%, ${CORNER_CLIP}px 100%, 0 100%, 0 0)`,
        zIndex: isActive ? 10 : 0,
      }}
      animate={{
        width: cardSize,
        height: cardSize,
        x: `calc(-50% + ${position * (cardSize / 1.5)}px)`,
        y: `calc(-50% + ${
          isActive ? CENTER_STAGGER : position % 2 ? STAGGER : -STAGGER
        }px)`,
        rotate: isActive ? 0 : position % 2 ? ROTATE_DEG : -ROTATE_DEG,
        boxShadow: isActive ? "0px 8px 0px 4px #3A7BD5" : "0px 2px 4px 0px rgba(0,0,0,0.1)",
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 object-cover"
        style={{
          right: isActive ? -2 : -BORDER_SIZE,
          top: CORNER_CLIP - (isActive ? 2 : BORDER_SIZE),
          width: CORNER_LINE_LEN,
          height: isActive ? 2 : BORDER_SIZE,
          backgroundColor: isActive ? '#3A7BD5' : '#E5E7EB',
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={`Testimonial image for ${testimonial.by}`}
        className="mb-4 h-14 w-14 object-cover object-top rounded-full"
        style={{
          boxShadow: "3px 3px 0px rgba(0,0,0,0.2)",
          backgroundColor: '#D1D5DB',
        }}
      />
      <h3
        className="text-base sm:text-xl mb-6"
        style={{ color: isActive ? '#1F2937' : '#374151' }}
      >
        "{testimonial.testimonial}"
      </h3>
      <div
        className="absolute bottom-8 left-8 right-8 text-sm"
      >
        <p style={{ color: '#1F2937', fontWeight: isActive ? 600 : 500 }}>{testimonial.name}</p>
        <p className="text-sm" style={{ color: '#6B7280' }}>{testimonial.by}</p>
      </div>
    </motion.div>
  );
};

type TestimonialType = {
  tempId: number;
  testimonial: string;
  name: string;
  by: string;
  imgSrc: string;
};

const TESTIMONIAL_DATA: TestimonialType[] = [
  {
    tempId: 0,
    testimonial:
      "Our juniors wasted 3-4 hours on queries partners could answer in 5 minutes. EZChat solved this instantly.",
    name: "Rahul Sharma",
    by: "Managing Partner, Sharma & Associates, Mumbai",
    imgSrc: "https://images.unsplash.com/photo-1659355894117-0ae6f8f28d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc2MjkzNDI3OXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    tempId: 1,
    testimonial:
      "38 monthly reports went from 8-12 hours each to just 20 minutes. We saved 320 hours monthly.",
    name: "Priya Desai",
    by: "Partner, Desai Tax Consultants, Bangalore",
    imgSrc: "https://images.unsplash.com/photo-1670223364099-eb3f7738cd93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGluZGlhfGVufDF8fHx8MTc2MjkzMDgyOXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    tempId: 2,
    testimonial:
      "When our senior left, we uploaded his 15 years of knowledge to EZChat. His replacement was productive from day one.",
    name: "Amit Patel",
    by: "Senior Partner, Patel & Co., Ahmedabad",
    imgSrc: "https://images.unsplash.com/photo-1584940121258-c2553b66a739?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Mjg5MTQ4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    tempId: 3,
    testimonial:
      "GST filing season meant 16-hour days. EZChat now pulls relevant circulars instantly—60% faster with zero errors.",
    name: "Neha Kapoor",
    by: "Tax Partner, Kapoor Legal & Tax, Delhi",
    imgSrc: "https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MjgzODMwNHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    tempId: 4,
    testimonial:
      "We lost clients to bigger firms due to slow turnaround. EZChat leveled the field—retention jumped from 72% to 94%.",
    name: "Vikram Singh",
    by: "Managing Partner, Singh & Partners CA, Jaipur",
    imgSrc: "https://images.unsplash.com/photo-1652471943570-f3590a4e52ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzc21hbiUyMGhlYWRzaG90fGVufDF8fHx8MTc2MjkzNDQ1M3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    tempId: 5,
    testimonial:
      "Training took 4-6 months before. With EZChat's knowledge base access, new associates bill within 3 weeks.",
    name: "Anjali Reddy",
    by: "HR Director, Reddy Corporate Law, Hyderabad",
    imgSrc: "https://images.unsplash.com/photo-1496180470114-6ef490f3ff22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2Mjg4NzY0MXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    tempId: 6,
    testimonial:
      "Queries created bottlenecks with associates waiting days for partner review. EZChat gives instant answers—workflow is 4x faster.",
    name: "Karan Malhotra",
    by: "Senior Consultant, Malhotra Advisory Group, Pune",
    imgSrc: "https://images.unsplash.com/photo-1737574821698-862e77f044c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjI4NTcyNDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    tempId: 7,
    testimonial:
      "15 years of precedents were in file cabinets. After one week of uploading to EZChat, our win rate improved 23%.",
    name: "Deepa Krishnan",
    by: "Litigation Partner, Krishnan & Associates, Chennai",
    imgSrc: "https://images.unsplash.com/photo-1658249682512-1bb162538ba9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXd5ZXIlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYyODY1NTI0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    tempId: 8,
    testimonial:
      "First month we billed 140 extra hours recovered from research time. ₹2.1L additional revenue—6x ROI.",
    name: "Suresh Kumar",
    by: "Managing Partner, Kumar Chartered Accountants, Kolkata",
    imgSrc: "https://images.unsplash.com/photo-1622169804256-0eb6873ff441?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdWx0YW50JTIwcHJvZmVzc2lvbmFsJTIwaGVhZHNob3R8ZW58MXx8fHwxNzYyOTM0NDU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    tempId: 9,
    testimonial:
      "Drowning in SEBI, RBI, MCA updates. EZChat monitors and alerts—zero missed deadlines in 8 months.",
    name: "Meera Gupta",
    by: "Compliance Head, Gupta Financial Services, Chandigarh",
    imgSrc: "https://images.unsplash.com/photo-1670223364099-eb3f7738cd93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGluZGlhfGVufDF8fHx8MTc2MjkzMDgyOXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    tempId: 10,
    testimonial:
      "With 45 professionals, quality control was hard. EZChat ensures consistent advice across our entire team.",
    name: "Rajesh Verma",
    by: "Quality Partner, Verma & Co. Chartered Accountants, Lucknow",
    imgSrc: "https://images.unsplash.com/photo-1659355894117-0ae6f8f28d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc2MjkzNDI3OXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    tempId: 11,
    testimonial:
      "Skeptical about AI at first, but EZChat makes lawyers superhuman. Half-day research now takes 5 minutes.",
    name: "Arjun Mehta",
    by: "Advocate, Mehta Legal Chambers, Surat",
    imgSrc: "https://images.unsplash.com/photo-1652471943570-f3590a4e52ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBzdWl0fGVufDF8fHx8MTc2Mjg2MzYzMHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];
