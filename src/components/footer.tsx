export function Footer() {
  return (
    <footer
      id="contact"
      role="contentinfo"
      aria-label="Contact EZTECH and company information"
      className="relative py-10 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #334155 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Content Section */}
        <div className="mb-4">
          {/* Content Row with Logo */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left Side: Text and Contact Info */}
            <div style={{ marginLeft: '120px', marginTop: '40px' }}>
              {/* Contact Us Header with Phone Icon */}
              <div className="flex items-center gap-3 mb-6">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"
                    fill="#3A7BD5"
                  />
                </svg>
                <h3 className="text-2xl font-medium" style={{ color: '#3A7BD5' }}>Contact Us</h3>
              </div>

              <h2 className="mb-2" style={{ color: '#F1F5F9', fontSize: '1.5rem', lineHeight: '1.3' }}>
                Interested in working together,
              </h2>
              <p className="mb-6" style={{ color: '#94A3B8', fontSize: '1.125rem', lineHeight: '1.7' }}>
                Trying our Platform or Simply Learning More?
              </p>

              <address className="mb-4 not-italic">
                {/* Email with icon */}
                <a href="mailto:vandit@eztech.ai" className="flex items-center gap-3 mb-3 hover:opacity-80 transition-opacity" aria-label="Email EZTECH at vandit@eztech.ai">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" stroke="#3A7BD5" strokeWidth="2" fill="none"/>
                    <path d="M2 7L12 13L22 7" stroke="#3A7BD5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-lg font-medium" style={{ color: '#3A7BD5' }}>
                    vandit@eztech.ai
                  </span>
                </a>

                {/* Mobile number */}
                <a href="tel:+61422925443" className="flex items-center gap-3 hover:opacity-80 transition-opacity" aria-label="Call EZTECH at +61 422925443">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <rect x="6" y="2" width="12" height="20" rx="2" stroke="#3A7BD5" strokeWidth="2" fill="none"/>
                    <line x1="6" y1="18" x2="18" y2="18" stroke="#3A7BD5" strokeWidth="2"/>
                    <circle cx="12" cy="20" r="0.5" fill="#3A7BD5" stroke="#3A7BD5" strokeWidth="1"/>
                  </svg>
                  <span className="text-lg font-medium" style={{ color: '#3A7BD5' }}>
                    +61 422925443
                  </span>
                </a>
              </address>
            </div>

            {/* Right Side: Logo */}
            <div className="flex items-center justify-center md:justify-end">
              <img
                src="https://raw.githubusercontent.com/Vandit13S/ezchat-logo/main/Frame%2057.svg"
                alt="EZTECH AI Systems - EZChat AI Assistant for CA Firms, Law Firms and Consulting Firms in India"
                className="brightness-200"
                style={{ width: '600px', height: '300px', objectFit: 'contain' }}
                width="600"
                height="300"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="pt-2" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <p className="text-sm text-center pt-6" style={{ color: '#94A3B8' }}>
            © 2025 EZTECH AI SYSTEMS Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
