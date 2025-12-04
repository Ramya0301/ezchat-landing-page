import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const CheckIcon = () => (
  <svg
    width="20"
    height="15"
    viewBox="0 0 20 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0"
  >
    <path
      d="M6.35588 11.8345L1.61455 7.17002L0 8.7472L6.35588 15L20 1.57718L18.3968 0L6.35588 11.8345Z"
      fill="#28A745"
    />
  </svg>
);

// Inline Email Form Component
const InlineEmailForm = ({ planName, buttonText, bestFor }: { planName: string; buttonText: string; bestFor: string }) => {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch('http://localhost:5001/api/send-plan-interest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          planName,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Error sending email:', err);
      setError('Unable to send request. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setShowForm(false);
    setSubmitted(false);
    setEmail("");
  };

  return (
    <div className="mt-auto pt-8">
      <AnimatePresence mode="wait">
        {!showForm ? (
          <motion.div
            key="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.button
              onClick={() => setShowForm(true)}
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              className="w-full py-4 font-semibold bg-blue-gradient text-white rounded-lg uppercase text-center hover:opacity-90 transition-opacity"
            >
              {buttonText}
            </motion.button>
            <p className="text-xs text-[#6B7280] text-center mt-4">{bestFor}</p>
          </motion.div>
        ) : !submitted ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-gray-50 rounded-lg p-4 border border-gray-200"
          >
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-semibold text-gray-900">{buttonText}</h4>
              <button
                onClick={handleReset}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-3">Enter your email for the {planName} plan</p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm disabled:opacity-50"
              />
              {error && (
                <p className="text-xs text-red-500">{error}</p>
              )}
              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full py-2.5 bg-blue-gradient hover:opacity-90 text-white font-semibold rounded-lg transition-opacity text-sm disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Submit'
                )}
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-green-50 rounded-lg p-4 border border-green-200 text-center"
          >
            <div className="mb-2 flex justify-center">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">Thank You!</h4>
            <p className="text-xs text-gray-600 mb-1">
              Your interest has been sent to the EZTech team.
            </p>
            <p className="text-xs font-semibold text-gray-700">
              We'll respond within 2 hours (business days)
            </p>
            <button 
              onClick={handleReset}
              className="mt-3 px-4 py-1.5 text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              Done
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export function PricingSection() {
  const [selected, setSelected] = useState<"M" | "A">("M");

  return (
    <section id="pricing" className="w-full text-black bg-[#F9FAFB] px-4 lg:px-8 py-12 lg:py-20 relative overflow-hidden">
      <Heading selected={selected} setSelected={setSelected} />
      <PriceCards selected={selected} />
      <TopLeftCircle />
      <BottomRightCircle />
    </section>
  );
}

const SELECTED_STYLES = "text-white font-medium rounded-lg py-3 w-28 relative text-center";
const DESELECTED_STYLES =
  "font-medium rounded-lg py-3 w-28 hover:bg-slate-100 transition-colors relative text-center";

interface HeadingProps {
  selected: "M" | "A";
  setSelected: React.Dispatch<React.SetStateAction<"M" | "A">>;
}

const Heading = ({ selected, setSelected }: HeadingProps) => {
  return (
    <div className="mb-12 lg:mb-24 relative z-10">
      <h2 className="mb-4" style={{ color: '#2563EB', fontWeight: 'bold', fontSize: '2.5rem', textAlign: 'center' }}>
                   Pricing That Scales with Your Firm
      </h2>
      <p className="text-center mx-auto max-w-lg mb-8 text-[#6B7280]">
        Per-user pricing with automatic volume discounts. 
        <br />
        Start free, scale unlimited.
      </p>
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => setSelected("M")}
          className={selected === "M" ? SELECTED_STYLES : DESELECTED_STYLES}
        >
          Monthly
          {selected === "M" && <BackgroundShift />}
        </button>
        <div className="relative">
          <button
            onClick={() => setSelected("A")}
            className={selected === "A" ? SELECTED_STYLES : DESELECTED_STYLES}
          >
            Annual
            {selected === "A" && <BackgroundShift />}
          </button>
          <CTAArrow />
        </div>
      </div>
    </div>
  );
};

const BackgroundShift = () => (
  <motion.span
    layoutId="bg-shift"
    className="absolute inset-0 bg-blue-gradient rounded-lg -z-10"
  />
);

const CTAArrow = () => (
  <div className="absolute -right-[100px] top-2 sm:top-0">
    <motion.svg
      width="95"
      height="62"
      viewBox="0 0 95 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="scale-50 sm:scale-75"
      initial={{ scale: 0.7, rotate: 5 }}
      animate={{ scale: 0.75, rotate: 0 }}
      transition={{
        repeat: Infinity,
        repeatType: "mirror",
        duration: 1,
        ease: "easeOut",
      }}
    >
      <path
        d="M14.7705 15.8619C33.2146 15.2843 72.0772 22.1597 79.9754 54.2825"
        stroke="#3A7BD5"
        strokeWidth="3"
      />
      <path
        d="M17.7987 7.81217C18.0393 11.5987 16.4421 15.8467 15.5055 19.282C15.2179 20.3369 14.9203 21.3791 14.5871 22.4078C14.4728 22.7608 14.074 22.8153 13.9187 23.136C13.5641 23.8683 12.0906 22.7958 11.7114 22.5416C8.63713 20.4812 5.49156 18.3863 2.58664 15.9321C1.05261 14.6361 2.32549 14.1125 3.42136 13.0646C4.37585 12.152 5.13317 11.3811 6.22467 10.7447C8.97946 9.13838 12.7454 8.32946 15.8379 8.01289"
        stroke="#3A7BD5"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </motion.svg>
    <span className="block text-xs w-fit bg-blue-gradient text-white shadow px-1.5 py-0.5 rounded -mt-1 ml-8 -rotate-2 font-light italic">
      Save 20%
    </span>
  </div>
);

interface PriceCardProps {
  selected: "M" | "A";
}

const PriceCards = ({ selected }: PriceCardProps) => (
  <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 w-full max-w-6xl mx-auto relative z-10 mb-16">
    {/* BEGINNER */}
    <div className="w-full bg-white p-6 border-[1px] border-slate-300 rounded-xl flex flex-col">
      <p className="text-2xl font-bold mb-2">Beginner</p>
      <p className="text-lg mb-6 text-[#6B7280]">Perfect for testing AI workflows</p>
      <div className="overflow-hidden mb-8">
        <AnimatePresence mode="wait">
          {selected === "M" ? (
            <motion.p
              key="beginner-monthly"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ ease: "linear", duration: 0.25 }}
              className="text-6xl font-bold"
            >
              <span>₹599</span>
              <span className="font-normal text-xl">/user/mo</span>
            </motion.p>
          ) : (
            <motion.p
              key="beginner-annual"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ ease: "linear", duration: 0.25 }}
              className="text-6xl font-bold"
            >
              <span>₹479</span>
              <span className="font-normal text-xl">/user/mo</span>
            </motion.p>
          )}
        </AnimatePresence>
      </div>
      <div className="flex-grow">
        <div className="flex items-center gap-2 mb-2">
          <CheckIcon />
          <span className="text-base">3 AI models (GPT-4, Gemini, Grok)</span>
        </div>
      <div className="flex items-center gap-2 mb-2">
        <CheckIcon />
        <span className="text-base">Basic code & image generation</span>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <CheckIcon />
        <span className="text-base">5GB knowledge base per user</span>
      </div>
        <div className="flex items-center gap-2 mb-2">
          <CheckIcon />
          <span className="text-base">Email support (48-hour response)</span>
        </div>
      </div>

      <InlineEmailForm 
        planName="Beginner" 
        buttonText="Start Free Trial" 
        bestFor="Best for: Individual professionals or small teams" 
      />
    </div>

    {/* PRO  */}
    <div className="w-full bg-white p-6 border-[2px] border-[#3A7BD5] rounded-xl relative flex flex-col">
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-gradient text-white px-4 py-1 rounded-full text-sm">
        ⭐ MOST POPULAR
      </div>
      <p className="text-2xl font-bold mb-2">Pro</p>
      <p className="text-lg mb-6 text-[#6B7280]">Everything your firm needs</p>
      <div className="overflow-hidden mb-8">
        <AnimatePresence mode="wait">
          {selected === "M" ? (
            <motion.p
              key="pro-monthly"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ ease: "linear", duration: 0.25 }}
              className="text-6xl font-bold text-[#3A7BD5]"
            >
              <span>₹999</span>
              <span className="font-normal text-xl">/user/mo</span>
            </motion.p>
          ) : (
            <motion.p
              key="pro-annual"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ ease: "linear", duration: 0.25 }}
              className="text-6xl font-bold text-[#3A7BD5]"
            >
              <span>₹799</span>
              <span className="font-normal text-xl">/user/mo</span>
            </motion.p>
          )}
        </AnimatePresence>
      </div>
      <div className="flex-grow">
        <div className="flex items-center gap-2 mb-2">
          <CheckIcon />
          <span className="text-base">ALL AI models (10+ platforms)</span>
        </div>
      <div className="flex items-center gap-2 mb-2">
        <CheckIcon />
        <span className="text-base">Unlimited code & image generation</span>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <CheckIcon />
        <span className="text-base">25GB knowledge base per user</span>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <CheckIcon />
        <span className="text-base">PowerPoint generation</span>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <CheckIcon />
        <span className="text-base">Team collaboration channels</span>
      </div>
        <div className="flex items-center gap-2 mb-2">
          <CheckIcon />
          <span className="text-base">Priority support (2-hour response)</span>
        </div>
      </div>

      <InlineEmailForm 
        planName="Pro" 
        buttonText="Start Free Trial" 
        bestFor="Best for: Growing professional firms (10-100 employees)" 
      />
    </div>

    {/* ULTRA */}
    <div className="w-full bg-white p-6 border-[1px] border-slate-300 rounded-xl flex flex-col">
      <p className="text-2xl font-bold mb-2">Ultra</p>
      <p className="text-lg mb-6 text-[#6B7280]">Maximum power & control</p>
      <div className="overflow-hidden mb-8">
        <AnimatePresence mode="wait">
          {selected === "M" ? (
            <motion.p
              key="ultra-monthly"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ ease: "linear", duration: 0.25 }}
              className="text-6xl font-bold"
            >
              <span>₹1,499</span>
              <span className="font-normal text-xl">/user/mo</span>
            </motion.p>
          ) : (
            <motion.p
              key="ultra-annual"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ ease: "linear", duration: 0.25 }}
              className="text-6xl font-bold"
            >
              <span>₹1,199</span>
              <span className="font-normal text-xl">/user/mo</span>
            </motion.p>
          )}
        </AnimatePresence>
      </div>
      <div className="flex-grow">
        <div className="flex items-center gap-2 mb-2">
          <CheckIcon />
          <span className="text-base">Everything in Pro, plus:</span>
        </div>
      <div className="flex items-center gap-2 mb-2">
        <CheckIcon />
        <span className="text-base">Ultra-class models (Claude 4.5, GPT-5)</span>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <CheckIcon />
        <span className="text-base">Unlimited knowledge base</span>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <CheckIcon />
        <span className="text-base">Custom AI agent creation</span>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <CheckIcon />
        <span className="text-base">White-label option</span>
      </div>
        <div className="flex items-center gap-2 mb-2">
          <CheckIcon />
          <span className="text-base">1-hour support SLA</span>
        </div>
      </div>

      <InlineEmailForm 
        planName="Ultra" 
        buttonText="Talk to Sales" 
        bestFor="Best for: Large firms or specialized needs" 
      />
    </div>
  </div>
);

const TopLeftCircle = () => {
  return (
    <motion.div
      initial={{ rotate: "0deg" }}
      animate={{ rotate: "360deg" }}
      transition={{ duration: 100, ease: "linear", repeat: Infinity }}
      className="w-[450px] h-[450px] rounded-full border-2 border-slate-500 border-dotted absolute z-0 -left-[250px] -top-[200px]"
    />
  );
};

const BottomRightCircle = () => {
  return (
    <motion.div
      initial={{ rotate: "0deg" }}
      animate={{ rotate: "-360deg" }}
      transition={{ duration: 100, ease: "linear", repeat: Infinity }}
      className="w-[450px] h-[450px] rounded-full border-2 border-slate-500 border-dotted absolute z-0 -right-[250px] -bottom-[200px]"
    />
  );
};
