import { motion } from "motion/react";

export function CTADivider() {
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
        <div className="text-center">
          <h2 className="text-gray-900 mb-4" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
            Ready to Save 400 Hours Monthly?
          </h2>
        </div>
      </div>
    </section>
  );
}

