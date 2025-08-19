import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-8 relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-bold text-gray-800/10 select-none whitespace-nowrap">
          DevStudio
        </h1>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Top Section with Logo and Links */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
          {/* Logo */}
          <div className="flex items-center mb-8 lg:mb-0">
            <div className="w-8 h-8 bg-white rounded mr-3 flex items-center justify-center">
              <span className="text-black font-bold text-lg">A</span>
            </div>
            <span className="text-xl font-semibold">DevStudio</span>
          </div>
          
          {/* Navigation Links Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            {/* Pages Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Pages</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">All Products</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Studio</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Clients</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            
            {/* Socials Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Socials</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">LinkedIn</a></li>
              </ul>
            </div>
            
            {/* Legal Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
            
            {/* Register Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Register</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Sign Up</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Login</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Forgot Password</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-400 text-sm">
            © Copyright DevStudios 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;