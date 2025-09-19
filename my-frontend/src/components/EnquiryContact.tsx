"use client";
import { useState, useEffect } from 'react';
import { X, Code, Smartphone, Globe, Zap, CheckCircle, Star, ArrowRight } from 'lucide-react';

export default function WebDevServicePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    query: '',
    priority: '',
    source: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const projectTypes = [
    { value: 'website', label: 'Business Website', icon: Globe },
    { value: 'ecommerce', label: 'E-commerce Store', icon: Smartphone },
    { value: 'webapp', label: 'Web Application', icon: Code },
    { value: 'redesign', label: 'Website Redesign', icon: Zap }
  ];

  const budgetRanges = [
    '$2,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000+',
    'Not sure yet'
  ];

  const timelineOptions = [
    'ASAP (Rush job)',
    '1-2 weeks',
    '1 month',
    '2-3 months',
    '3+ months',
    'Flexible'
  ];

  const priorityOptions = [
    'Brand new business launch',
    'Existing business growth',
    'Competitor advantage',
    'Technical upgrade',
    'Just exploring options'
  ];

  const sourceOptions = [
    'Google Search',
    'Social Media',
    'Referral',
    'Previous Client',
    'Other'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Auto close after success
    setTimeout(() => {
      setIsOpen(false);
      setIsSuccess(false);
      setCurrentStep(1);
    }, 3000);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.projectType && formData.budget;
      case 2:
        return formData.name && formData.email && formData.mobile;
      default:
        return false;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden relative animate-in zoom-in-95 duration-300 flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white/80 hover:text-white z-10"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <Code className="w-6 h-6" />
              <h2 className="text-xl font-bold">Get Your Dream Website!</h2>
            </div>
            <p className="text-blue-100 text-sm">
              Transform your vision into stunning digital reality
            </p>
            
            {/* Progress bar */}
            <div className="flex gap-2 mt-4">
              {[1, 2].map(step => (
                <div
                  key={step}
                  className={`flex-1 h-1 rounded-full transition-colors ${
                    step <= currentStep ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6">
          {isSuccess ? (
            <div className="text-center py-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Thank You!</h3>
              <p className="text-gray-600">
                We'll contact you within 24 hours with a custom proposal!
              </p>
              <div className="flex justify-center gap-1 mt-4">
                {[1, 2, 3, 4, 5].map(i => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-2">Join 200+ happy clients</p>
            </div>
          ) : (
            <>
              {/* Step 1: Project Details First */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold text-gray-800">Tell Us About Your Project</h3>
                    <p className="text-gray-600 text-sm">Share your vision - no commitment required</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      What type of project? *
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {projectTypes.map(type => {
                        const Icon = type.icon;
                        return (
                          <button
                            key={type.value}
                            onClick={() => handleInputChange('projectType', type.value)}
                            className={`p-3 border rounded-lg text-left transition-colors ${
                              formData.projectType === type.value
                                ? 'border-blue-500 bg-blue-50 text-blue-700'
                                : 'border-gray-200 hover:border-gray-300 text-gray-700'
                            }`}
                          >
                            <Icon className={`w-5 h-5 mb-1 ${
                              formData.projectType === type.value ? 'text-blue-700' : 'text-gray-600'
                            }`} />
                            <div className={`text-sm font-medium ${
                              formData.projectType === type.value ? 'text-blue-700' : 'text-gray-700'
                            }`}>{type.label}</div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Budget Range *
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => handleInputChange('budget', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map(range => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => handleInputChange('timeline', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
                    >
                      <option value="">When do you need this?</option>
                      {timelineOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      What's driving this project?
                    </label>
                    <select
                      value={formData.priority}
                      onChange={(e) => handleInputChange('priority', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
                    >
                      <option value="">Select main reason</option>
                      {priorityOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  

                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      How did you find us?
                    </label>
                    <select
                      value={formData.source}
                      onChange={(e) => handleInputChange('source', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
                    >
                      <option value="">Select source</option>
                      {sourceOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 text-blue-600">
                      <Zap className="w-4 h-4" />
                      <span className="text-sm font-medium">FREE Strategy Call Included!</span>
                    </div>
                    <p className="text-xs text-blue-600 mt-1">No spam, no obligation - just expert advice</p>
                  </div>
                </div>
              )}

              {/* Step 2: Contact Info (After Interest is Shown) */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold text-gray-800">Let's Connect!</h3>
                    <p className="text-gray-600 text-sm">Just need your details to send the custom proposal</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg border border-green-200 mb-6">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <div className="font-medium text-gray-800 text-sm">What you'll get within 24 hours:</div>
                        <ul className="text-xs text-gray-600 mt-1 space-y-1">
                          <li>• Custom project proposal & timeline</li>
                          <li>• FREE 30-min strategy consultation</li>
                          <li>• No obligation quote with transparent pricing</li>
                          <li>• Portfolio examples similar to your project</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <input
                      type="text"
                      placeholder="Your Full Name *"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500 bg-white"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      placeholder="Business Email *"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500 bg-white"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="tel"
                      placeholder="Mobile Number *"
                      value={formData.mobile}
                      onChange={(e) => handleInputChange('mobile', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500 bg-white"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="text"
                      placeholder="Company Name (Optional)"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500 bg-white"
                    />
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg border">
                    <div className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm">Your information is 100% secure and never shared</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between items-center pt-6 border-t bg-white sticky bottom-0">
                <button
                  onClick={handlePrevious}
                  className={`px-4 py-2 text-gray-600 ${
                    currentStep === 1 ? 'invisible' : 'hover:text-gray-800'
                  }`}
                >
                  ← Back
                </button>
                
                <div className="text-center">
                  <div className="text-xs text-gray-500">Step {currentStep} of 2</div>
                </div>
                
                {currentStep < 2 ? (
                  <button
                    onClick={handleNext}
                    disabled={!canProceed()}
                    className={`px-6 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors ${
                      canProceed()
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Get My Quote <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={!canProceed() || isSubmitting}
                    className={`px-8 py-3 rounded-lg font-medium transition-colors ${
                      canProceed() && !isSubmitting
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {isSubmitting ? 'Sending Proposal...' : 'Send My Custom Proposal 🚀'}
                  </button>
                )}
              </div>
            </>
          )}
        </div>
        </div>
      </div>
    </div>
  );
}