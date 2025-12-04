import { useEffect, useRef } from 'react';
import { animate, useInView, motion, useMotionTemplate, useMotionValue, useSpring } from 'motion/react';
import { Calculator, Scale, Briefcase, Zap, Receipt } from 'lucide-react';

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
      <p 
        className="mb-2 text-center font-semibold" 
        style={{ 
          fontSize: '60px', 
          lineHeight: '1',
          color: '#28A745',
          fontFamily: 'var(--font-heading)',
        }}
      >
        {prefix}
        <span ref={ref}>0</span>
        {suffix}
      </p>
      <p 
        className="max-w-64 text-center" 
        style={{ 
          color: '#6B7280',
          fontSize: '16px',
          lineHeight: '1.4',
          fontFamily: 'var(--font-body)',
        }}
      >
        {subheading}
      </p>
    </div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({ name, type }: { name: string; type: string }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const IconComponent = getIcon(name);
  const colors = getColors(name);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
        backgroundColor: '#FFFFFF',
        borderColor: '#E5E7EB',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      }}
      className="flex flex-col items-center justify-center p-6 min-h-[140px] rounded-xl transition-all border hover:shadow-lg"
    >
      <div
        style={{
          transform: "translateZ(50px)",
          transformStyle: "preserve-3d",
        }}
        className="flex flex-col items-center"
      >
        <div className="mb-3 p-3 rounded-full" style={{ backgroundColor: colors.bg }}>
          <IconComponent className="w-8 h-8" style={{ color: colors.icon }} strokeWidth={2} />
        </div>
        <div className="font-medium mb-1" style={{ color: '#1F2937' }}>{name}</div>
        <div className="text-xs" style={{ color: '#6B7280' }}>{type}</div>
      </div>
    </motion.div>
  );
};

const getIcon = (name: string) => {
  const iconMap: { [key: string]: any } = {
    'CA Firm': Calculator,
    'Law Firm': Scale,
    'Consulting': Briefcase,
    'Agency': Zap,
    'Tax Firm': Receipt,
  };
  return iconMap[name] || Calculator;
};

const getColors = (name: string) => {
  const colorMap: { [key: string]: { bg: string; icon: string } } = {
    'CA Firm': { bg: '#FEF3C7', icon: '#F59E0B' }, // Amber/Gold
    'Law Firm': { bg: '#DBEAFE', icon: '#3B82F6' }, // Blue
    'Consulting': { bg: '#D1FAE5', icon: '#10B981' }, // Green
    'Agency': { bg: '#FCE7F3', icon: '#EC4899' }, // Pink
    'Tax Firm': { bg: '#E0E7FF', icon: '#6366F1' }, // Indigo
  };
  return colorMap[name] || { bg: '#E0F2FF', icon: '#3A7BD5' };
};

export function TrustBar() {
  const logos = [
    { name: 'CA Firm', type: 'Chartered Accountants' },
    { name: 'Law Firm', type: 'Legal Services' },
    { name: 'Consulting', type: 'Business Consulting' },
    { name: 'Agency', type: 'Professional Agency' },
    { name: 'Tax Firm', type: 'Tax Advisory' },
  ];

  return (
    <section 
      className="relative min-h-[400px] md:min-h-[500px] py-16 md:py-20 px-6 flex items-center overflow-hidden"
      style={{ backgroundColor: '#F9FAFB' }}
    >
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

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <p 
            className="tracking-wider mb-8"
            style={{
              fontSize: '13px',
              color: '#6B7280',
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              letterSpacing: '0.12em',
            }}
          >
            JOIN 100+ PROFESSIONAL FIRMS ALREADY SCALING WITH EZTECH
          </p>

          {/* Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">
            {logos.map((logo, index) => (
              <TiltCard key={index} name={logo.name} type={logo.type} />
            ))}
          </div>
        </div>

        {/* Stats with Count Up Animation */}
        <div className="flex flex-col items-center justify-center sm:flex-row gap-4 sm:gap-0">
          <Stat num={6.4} decimals={1} prefix="₹" suffix="L" subheading="Average annual savings per firm" />
          <div className="h-[1px] w-12 sm:h-12 sm:w-[1px]" style={{ backgroundColor: '#E5E7EB' }} />
          <Stat num={75} decimals={0} suffix="%" subheading="Reduction in reporting time" />
          <div className="h-[1px] w-12 sm:h-12 sm:w-[1px]" style={{ backgroundColor: '#E5E7EB' }} />
          <Stat num={11.3} decimals={1} suffix="x" subheading="Return on investment" />
        </div>
      </div>
    </section>
  );
}
