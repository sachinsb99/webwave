import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-8 relative overflow-hidden">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        {/* Top Section with Logo and Links */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
          
          {/* Enhanced Logo Section */}
            <div className="flex flex-col space-y-4 mb-8 lg:mb-0 lg:max-w-md">
            {/* Logo with Brand */}
            <div className="flex items-center group cursor-pointer">
              {/* <div className="w-20 h-20 rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300 mr-3 bg-white/10 backdrop-blur-sm flex items-center justify-center"> */}
                <img 
                  src="/images/logo/HeaderTW2.png" 
                  alt="The Web Wave Logo" 
                  className="w-50 h-30 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              {/* </div> */}
            </div>
            
            {/* Brand Description */}
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Creating stunning, high-performance websites that drive growth and deliver exceptional user experiences.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              <SocialIcon href="#" icon="facebook" />
              <SocialIcon href="#" icon="twitter" />
              <SocialIcon href="#" icon="instagram" />
              <SocialIcon href="#" icon="linkedin" />
              <SocialIcon href="#" icon="github" />
            </div>
          </div>
          
          {/* Navigation Links Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Services Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
              <ul className="space-y-3">
                <li><FooterLink href="#">Web Development</FooterLink></li>
                <li><FooterLink href="#">UI/UX Design</FooterLink></li>
                <li><FooterLink href="#">E-commerce</FooterLink></li>
                <li><FooterLink href="#">SEO Optimization</FooterLink></li>
                <li><FooterLink href="#">Maintenance</FooterLink></li>
              </ul>
            </div>
            
            {/* Company Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
              <ul className="space-y-3">
                <li><FooterLink href="#">About Us</FooterLink></li>
                <li><FooterLink href="#">Our Team</FooterLink></li>
                <li><FooterLink href="#">Portfolio</FooterLink></li>
                <li><FooterLink href="#">Careers</FooterLink></li>
                <li><FooterLink href="#">Contact</FooterLink></li>
              </ul>
            </div>
            
            {/* Resources Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
              <ul className="space-y-3">
                <li><FooterLink href="#">Blog</FooterLink></li>
                <li><FooterLink href="#">Case Studies</FooterLink></li>
                <li><FooterLink href="#">Documentation</FooterLink></li>
                <li><FooterLink href="#">Help Center</FooterLink></li>
                <li><FooterLink href="#">Pricing</FooterLink></li>
              </ul>
            </div>
            
            {/* Legal Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
              <ul className="space-y-3">
                <li><FooterLink href="#">Privacy Policy</FooterLink></li>
                <li><FooterLink href="#">Terms of Service</FooterLink></li>
                <li><FooterLink href="#">Cookie Policy</FooterLink></li>
                <li><FooterLink href="#">GDPR</FooterLink></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Newsletter Signup Section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-400 text-sm">Get the latest news and updates delivered to your inbox.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-200 flex-1 md:min-w-[250px]"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-lg whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom Copyright */}
        {/* <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2024 The Web Wave. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Made with ❤️ in India</span>
              <span>•</span>
              <span>Proudly serving globally</span>
            </div>
          </div>
        </div> */}
        
        {/* Brand Background Text at Bottom */}
        <div className="flex items-center justify-center">
          <h1 className="text-[3rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] xl:text-[10rem] font-bold bg-gradient-to-r from-purple-600/30 to-blue-600/30 bg-clip-text text-transparent select-none pointer-events-none leading-none">
            The Web Wave
          </h1>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/5 rounded-full blur-xl"></div>
      </div>
    </footer>
  );
};

// Reusable Footer Link Component
const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block text-sm"
  >
    {children}
  </a>
);

// Social Media Icon Component
const SocialIcon = ({ href, icon }: { href: string; icon: string }) => {
  const getIcon = () => {
    switch (icon) {
      case 'facebook':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        );
      case 'twitter':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        );
      case 'instagram':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.295C4.198 14.553 3.95 13.39 3.95 12.017s.248-2.536 1.176-3.676c.875-.805 2.026-1.295 3.323-1.295s2.448.49 3.323 1.295c.928 1.14 1.176 2.301 1.176 3.676s-.248 2.536-1.176 3.676c-.875.805-2.026 1.295-3.323 1.295z"/>
          </svg>
        );
      case 'linkedin':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        );
      case 'github':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <a
      href={href}
      className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 hover:scale-110 group"
    >
      {getIcon()}
    </a>
  );
};

export default Footer;