"use client"
import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import webDevAPI from '../../api/api'; // Import your API

const NewsLetterBox = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    setMessage(null);

    try {
      const result = await webDevAPI.subscribeNewsletter(formData);
      console.log('Newsletter subscription successful:', result);
      
      setIsSuccess(true);
      setMessage('Successfully subscribed! Welcome to our newsletter.');
      setFormData({ name: '', email: '' });

    } catch (error: any) {
      console.error('Newsletter subscription failed:', error);
      setIsSuccess(false);
      
      if (error.status === 422 && error.message.includes('already subscribed')) {
        setMessage('You are already subscribed to our newsletter.');
      } else {
        setMessage(error.message || 'Failed to subscribe. Please try again.');
      }

    } finally {
      setIsSubmitting(false);
      
      // Clear message after 5 seconds
      setTimeout(() => {
        setMessage(null);
        setIsSuccess(false);
      }, 5000);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-sm p-8 shadow-2xl border border-white/20 dark:from-gray-800/95 dark:to-gray-900/90 dark:border-gray-700/30">
      {/* Decorative Elements */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
      <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="mb-6">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
            Stay Updated
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            Subscribe to receive the latest updates, insights, and exclusive content delivered to your inbox.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3 bg-white/80 dark:bg-gray-700/80 border border-gray-200/50 dark:border-gray-600/50 rounded-xl text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300 backdrop-blur-sm disabled:opacity-50"
            />
          </div>
          
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3 bg-white/80 dark:bg-gray-700/80 border border-gray-200/50 dark:border-gray-600/50 rounded-xl text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300 backdrop-blur-sm disabled:opacity-50"
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting || !formData.name || !formData.email}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Subscribing...</span>
              </div>
            ) : (
              'Subscribe Now'
            )}
          </button>
        </form>

        {/* Success/Error Message */}
        {message && (
          <div className={`mt-4 p-3 rounded-lg text-sm ${
            isSuccess 
              ? 'bg-green-50 border border-green-200 text-green-700 dark:bg-green-900/50 dark:border-green-800 dark:text-green-300'
              : 'bg-red-50 border border-red-200 text-red-700 dark:bg-red-900/50 dark:border-red-800 dark:text-red-300'
          }`}>
            {message}
          </div>
        )}

        <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4 leading-relaxed">
          Your privacy matters. No spam, unsubscribe anytime.
        </p>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute top-6 left-6 w-2 h-2 bg-blue-500/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-8 right-8 w-1 h-1 bg-purple-500/40 rounded-full animate-ping"></div>
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setMessage(null);

    try {
      const result = await webDevAPI.submitContact(formData);
      console.log('Contact message sent successfully:', result);
      
      setIsSuccess(true);
      setMessage('Message sent successfully! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });

    } catch (error: any) {
      console.error('Contact form submission failed:', error);
      setIsSuccess(false);
      
      if (error.status === 422) {
        setMessage('Please check your information and try again.');
      } else {
        setMessage(error.message || 'Failed to send message. Please try again.');
      }

    } finally {
      setIsSubmitting(false);
      
      // Clear message after 5 seconds
      setTimeout(() => {
        setMessage(null);
        setIsSuccess(false);
      }, 5000);
    }
  };

  return (
    <section 
      id="contact" 
      className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="mb-12 lg:mb-0">
              {/* Header */}
              <div className="mb-12 text-center lg:text-left">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  Get in{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                    Touch
                  </span>
                </h2>
                <p className="text-gray-700 dark:text-blue-100 text-lg max-w-2xl">
                  Have a question or need assistance? Our support team is here to help you every step of the way.
                </p>
              </div>

              {/* Contact Form */}
              <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-3xl p-8 lg:p-12 border border-gray-200/50 dark:border-gray-700/50 shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-white/80 dark:bg-gray-700/80 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm disabled:opacity-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-white/80 dark:bg-gray-700/80 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm disabled:opacity-50"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      placeholder="Tell us how we can help you..."
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-white/80 dark:bg-gray-700/80 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none backdrop-blur-sm disabled:opacity-50"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                    className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending Message...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <span>Send Message</span>
                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    )}
                  </button>
                </form>

                {/* Success/Error Message */}
                {message && (
                  <div className={`mt-6 p-4 rounded-lg ${
                    isSuccess 
                      ? 'bg-green-50 border border-green-200 text-green-700 dark:bg-green-900/50 dark:border-green-800 dark:text-green-300'
                      : 'bg-red-50 border border-red-200 text-red-700 dark:bg-red-900/50 dark:border-red-800 dark:text-red-300'
                  }`}>
                    {message}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <div className="lg:ml-8">
              <NewsLetterBox />
              
              {/* Contact Info Cards */}
              <div className="mt-8 space-y-4">
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-gray-900 dark:text-white font-semibold">Quick Response</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">We typically respond within 2-4 hours</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 110 19.5 9.75 9.75 0 010-19.5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-gray-900 dark:text-white font-semibold">24/7 Support</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Round-the-clock assistance available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;