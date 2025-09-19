import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { XMarkIcon, PhoneIcon, EnvelopeIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

// Set app element for accessibility (add in _app.tsx if not already)
if (typeof window !== 'undefined') {
  Modal.setAppElement('#__next');
}

interface FormData {
  name: string;
  mobile: string;
  email: string;
  query: string;
}

interface Errors {
  name?: string;
  mobile?: string;
  email?: string;
  query?: string;
}

const ContactPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false); // Set to true for auto-open
  const [formData, setFormData] = useState<FormData>({
    name: '',
    mobile: '',
    email: '',
    query: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    setSubmitSuccess(false);
    setFormData({ name: '', mobile: '', email: '', query: '' });
    setErrors({});
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = (): boolean => {
    const newErrors: Errors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.mobile.trim() || !/^\+?[\d\s-]{7,15}$/.test(formData.mobile))
      newErrors.mobile = 'Valid mobile number is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Valid email is required';
    if (!formData.query.trim()) newErrors.query = 'Query is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitSuccess(true);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      alert('Error submitting form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Auto-open after 5 seconds (optional)
  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Trigger button - place where you want to open the popup manually */}
      <button
        onClick={openModal}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Get a Free Quote
      </button>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Contact Form"
        className="fixed inset-0 flex items-center justify-center z-50 outline-none"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
      >
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-4 relative animate-fade-in">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            aria-label="Close"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>

          {!submitSuccess ? (
            <>
              <h2 className="text-2xl font-bold mb-4 text-center text-blue-800">
                Unlock Your Project's Potential – Free Consultation!
              </h2>
              <p className="text-center text-gray-600 mb-6">
                Share your details for a quick quote. Limited spots for free dev audits!
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center border-b border-gray-300 py-2">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full outline-none"
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>
                <div className="flex items-center border-b border-gray-300 py-2">
                  <PhoneIcon className="h-5 w-5 text-gray-500 mr-2" />
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Mobile Number"
                    className="w-full outline-none"
                    aria-invalid={!!errors.mobile}
                  />
                  {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
                </div>
                <div className="flex items-center border-b border-gray-300 py-2">
                  <EnvelopeIcon className="h-5 w-5 text-gray-500 mr-2" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full outline-none"
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                <div className="flex items-start border-b border-gray-300 py-2">
                  <ChatBubbleLeftRightIcon className="h-5 w-5 text-gray-500 mr-2 mt-1" />
                  <textarea
                    name="query"
                    value={formData.query}
                    onChange={handleChange}
                    placeholder="Your Query or Project Details"
                    rows={3}
                    className="w-full outline-none resize-none"
                    aria-invalid={!!errors.query}
                  />
                  {errors.query && <p className="text-red-500 text-sm">{errors.query}</p>}
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  We respect your privacy. Your info is safe with us.
                </p>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Claim Your Free Quote Now'}
                </button>
              </form>
              <button
                onClick={closeModal}
                className="w-full mt-4 text-gray-500 hover:underline"
              >
                No thanks, maybe later
              </button>
            </>
          ) : (
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4 text-green-600">Thank You!</h2>
              <p className="text-gray-600 mb-6">We've received your details. Our team will reach out soon for your free consultation.</p>
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};

export default ContactPopup;