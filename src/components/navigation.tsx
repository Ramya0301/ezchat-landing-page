import { Dispatch, SetStateAction, useState } from 'react';
import { Menu, ArrowRight, X, ChevronDown } from 'lucide-react';
import { useMotionValueEvent, AnimatePresence, useScroll, motion } from 'motion/react';
import { Button } from './ui/button';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 100 ? true : false);
  });

  return (
    <nav
      className={`fixed top-0 z-50 w-full px-6 transition-all duration-300 ease-out lg:px-12 ${
        scrolled ? 'bg-white py-3 shadow-xl' : 'bg-white py-6 shadow-none'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Logo />
        <div className="hidden gap-6 lg:flex">
          <Links />
          <CTAs />
        </div>
        <MobileMenu />
      </div>
    </nav>
  );
}

const Logo = ({ color = 'white' }: { color?: string }) => {
  return (
    <a href="#" className="flex items-center gap-2">
      <div className="h-8 md:h-10 flex items-center">
        <img 
          src="https://raw.githubusercontent.com/Vandit13S/ezchat-logo/main/Frame%2057.svg" 
          alt="EZTech" 
          className="h-10 md:h-14 transition-transform"
          style={{ transform: 'scale(2.0)' }}
        />
      </div>
    </a>
  );
};

const Links = () => {
  return (
    <div className="flex items-center gap-6">
      {LINKS.map((l) => (
        <NavLink key={l.text} href={l.href} FlyoutContent={l.component}>
          {l.text}
        </NavLink>
      ))}
    </div>
  );
};

const NavLink = ({
  children,
  href,
  FlyoutContent,
}: {
  children: React.ReactNode;
  href: string;
  FlyoutContent?: React.ElementType;
}) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} className="relative h-fit w-fit">
      <a href={href} className="relative transition-colors" style={{ color: '#374151' }}>
        {children}
        <span
          style={{
            transform: showFlyout ? 'scaleX(1)' : 'scaleX(0)',
            backgroundColor: '#3A7BD5',
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full transition-transform duration-300 ease-out"
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: '-50%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CTAs = () => {
  return (
    <div className="flex items-center gap-3">
      <Button asChild className="bg-blue-gradient hover:opacity-90 text-white border-0 transition-opacity">
        <a href="#book-demo">Book Demo</a>
      </Button>
    </div>
  );
};

const SolutionsContent = () => {
  return (
    <div className="w-full bg-white p-6 shadow-xl lg:w-[280px]">
      <div className="space-y-1">
        <h3 className="mb-3 font-semibold text-gray-900">Industry Solutions</h3>
        <a href="#ca-firms" className="block rounded px-3 py-2 text-sm hover:bg-[#E0F2FF] transition-colors" style={{ color: '#374151' }}>
          For CA Firms
        </a>
        <a href="#law-firms" className="block rounded px-3 py-2 text-sm hover:bg-[#E0F2FF] transition-colors" style={{ color: '#374151' }}>
          For Law Firms
        </a>
        <a href="#consulting" className="block rounded px-3 py-2 text-sm hover:bg-[#E0F2FF] transition-colors" style={{ color: '#374151' }}>
          For Consulting Firms
        </a>
        <a href="#agencies" className="block rounded px-3 py-2 text-sm hover:bg-[#E0F2FF] transition-colors" style={{ color: '#374151' }}>
          For Marketing Agencies
        </a>
        <a href="#it-services" className="block rounded px-3 py-2 text-sm hover:bg-[#E0F2FF] transition-colors" style={{ color: '#374151' }}>
          For IT Services
        </a>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-200">
        <a href="#enterprise" className="flex items-center gap-1 text-sm font-semibold transition-colors" style={{ color: '#3A7BD5' }}>
          Enterprise Solutions <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

const FeaturesContent = () => {
  return (
    <div className="grid h-fit w-full grid-cols-12 shadow-xl lg:h-80 lg:w-[650px]">
      <div className="col-span-12 flex flex-col justify-between p-6 lg:col-span-5" style={{ background: 'linear-gradient(135deg, #3A7BD5 0%, #2563EB 100%)' }}>
        <div>
          <h2 className="mb-2 text-xl font-semibold text-white">Features</h2>
          <p className="mb-6 text-sm" style={{ color: '#E0F2FF' }}>
            AI-powered tools designed for professional services firms in India.
          </p>
        </div>
        <a href="#features" className="flex items-center gap-1 text-sm text-white hover:opacity-80 transition-opacity">
          View all features <ArrowRight className="w-4 h-4" />
        </a>
      </div>
      <div className="col-span-12 grid grid-cols-2 gap-3 bg-white p-6 lg:col-span-7">
        <a
          href="#knowledge-base"
          className="rounded border-2 border-gray-200 bg-white p-4 transition-colors hover:bg-[#E0F2FF] hover:border-[#3A7BD5]"
        >
          <h3 className="mb-1 font-semibold text-gray-900">Knowledge Base</h3>
          <p className="text-xs text-gray-600">Upload docs, cases, templates. Never lose institutional knowledge.</p>
        </a>
        <a
          href="#reports"
          className="rounded border-2 border-gray-200 bg-white p-4 transition-colors hover:bg-[#E0F2FF] hover:border-[#3A7BD5]"
        >
          <h3 className="mb-1 font-semibold text-gray-900">Auto Reports</h3>
          <p className="text-xs text-gray-600">Generate client reports in 2 minutes instead of 2 hours.</p>
        </a>
        <a
          href="#assistant"
          className="rounded border-2 border-gray-200 bg-white p-4 transition-colors hover:bg-[#E0F2FF] hover:border-[#3A7BD5]"
        >
          <h3 className="mb-1 font-semibold text-gray-900">AI Assistant</h3>
          <p className="text-xs text-gray-600">Junior staff get instant access to senior expertise.</p>
        </a>
        <a
          href="#security"
          className="rounded border-2 border-gray-200 bg-white p-4 transition-colors hover:bg-[#E0F2FF] hover:border-[#3A7BD5]"
        >
          <h3 className="mb-1 font-semibold text-gray-900">Security</h3>
          <p className="text-xs text-gray-600">SOC 2, SSL encryption, DPDP Act compliant.</p>
        </a>
      </div>
    </div>
  );
};

const ResourcesContent = () => {
  return (
    <div className="w-full bg-white p-6 shadow-xl lg:w-[250px]">
      <div className="grid grid-cols-1">
        <div className="mb-4 space-y-1">
          <h3 className="mb-3 font-semibold text-gray-900">Learn</h3>
          <a href="#blog" className="block rounded px-3 py-2 text-sm hover:bg-[#E0F2FF] transition-colors" style={{ color: '#374151' }}>
            Blog
          </a>
          <a href="#case-studies" className="block rounded px-3 py-2 text-sm hover:bg-[#E0F2FF] transition-colors" style={{ color: '#374151' }}>
            Case Studies
          </a>
          <a href="#webinars" className="block rounded px-3 py-2 text-sm hover:bg-[#E0F2FF] transition-colors" style={{ color: '#374151' }}>
            Webinars
          </a>
        </div>
        <div className="mb-4 space-y-1 pt-4 border-t border-gray-200">
          <h3 className="mb-3 font-semibold text-gray-900">Support</h3>
          <a href="#help" className="block rounded px-3 py-2 text-sm hover:bg-[#E0F2FF] transition-colors" style={{ color: '#374151' }}>
            Help Center
          </a>
          <a href="#tutorials" className="block rounded px-3 py-2 text-sm hover:bg-[#E0F2FF] transition-colors" style={{ color: '#374151' }}>
            Video Tutorials
          </a>
          <a href="#api-docs" className="block rounded px-3 py-2 text-sm hover:bg-[#E0F2FF] transition-colors" style={{ color: '#374151' }}>
            API Docs
          </a>
        </div>
      </div>
    </div>
  );
};

const MobileMenuLink = ({
  children,
  href,
  FoldContent,
  setMenuOpen,
}: {
  children: React.ReactNode;
  href: string;
  FoldContent?: React.ElementType;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [open, setOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);

  return (
    <div className="relative text-gray-900">
      {FoldContent ? (
        <div
          className="flex w-full cursor-pointer items-center justify-between border-b border-gray-300 py-6 text-start text-2xl font-semibold"
          onClick={() => setOpen((pv) => !pv)}
        >
          <a
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(false);
            }}
            href={href}
          >
            {children}
          </a>
          <motion.div
            animate={{ rotate: open ? '180deg' : '0deg' }}
            transition={{
              duration: 0.3,
              ease: 'easeOut',
            }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </div>
      ) : (
        <a
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen(false);
          }}
          href={href}
          className="flex w-full cursor-pointer items-center justify-between border-b border-gray-300 py-6 text-start text-2xl font-semibold"
        >
          <span>{children}</span>
          <ArrowRight className="w-6 h-6" />
        </a>
      )}
      {FoldContent && (
        <motion.div
          initial={false}
          animate={{
            height: open ? 'auto' : '0px',
            marginBottom: open ? '24px' : '0px',
            marginTop: open ? '12px' : '0px',
          }}
          className="overflow-hidden"
        >
          <FoldContent />
        </motion.div>
      )}
    </div>
  );
};

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="block lg:hidden">
      <button onClick={() => setOpen(true)} className="block text-3xl" style={{ color: '#374151' }}>
        <Menu />
      </button>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            exit={{ x: '100vw' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed left-0 top-0 flex h-screen w-full flex-col bg-white"
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex flex-col">
                <span className="text-xl font-bold text-orange-600">EZTECH</span>
                <span className="text-[10px] text-gray-600 -mt-1">AI for Professional Teams</span>
              </div>
              <button onClick={() => setOpen(false)}>
                <X className="text-3xl text-gray-900" />
              </button>
            </div>
            <div className="h-screen overflow-y-scroll bg-gray-50 p-6">
              {LINKS.map((l) => (
                <MobileMenuLink key={l.text} href={l.href} FoldContent={l.component} setMenuOpen={setOpen}>
                  {l.text}
                </MobileMenuLink>
              ))}
            </div>
            <div className="flex gap-3 bg-gray-900 p-6">
              <Button asChild className="flex-1 bg-blue-gradient hover:opacity-90 text-white border-0 py-3 transition-opacity">
                <a href="#book-demo">Book Demo</a>
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

const LINKS = [
  {
    text: 'Solutions',
    href: '#solutions',
  },
  {
    text: 'Features',
    href: '#features',
  },
  {
    text: 'Pricing',
    href: '#pricing',
  },
  {
    text: 'FAQs',
    href: '#faqs',
  },
];
