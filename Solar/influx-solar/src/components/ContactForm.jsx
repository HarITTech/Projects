import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaSolarPanel, FaComment, FaSpinner, FaCheck, FaExclamationTriangle } from 'react-icons/fa';

const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    installationType: 'residential',
    message: '',
  });
  const [status, setStatus] = useState({ submitting: false, success: false, error: false });
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: false });
    setStatusMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'fef839bc-9dce-445b-b477-cf6fb3274cf1',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          installationType: formData.installationType,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ submitting: false, success: true, error: false });
        setStatusMessage(t('contact.form.success'));
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          installationType: 'residential',
          message: '',
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setStatus({ submitting: false, success: false, error: false });
          setStatusMessage('');
        }, 5000);
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (error) {
      setStatus({ submitting: false, success: false, error: true });
      setStatusMessage(error.message || t('contact.form.error'));
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setStatus({ submitting: false, success: false, error: false });
        setStatusMessage('');
      }, 5000);
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-primaryBlue/5 to-secondaryGreen/5 rounded-2xl shadow-xl overflow-hidden max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Left Side: Image */}
        <div className="relative w-full h-64 sm:h-80 lg:h-auto">
          <img
            src="https://images.unsplash.com/photo-1689561800626-cc4f71cd8c7b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Solar Panels"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primaryBlue/60 to-secondaryGreen/60 flex items-center justify-center p-4 sm:p-6">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-2 sm:mb-4 flex items-center justify-center space-x-3">
                <FaSolarPanel className="text-accentYellow text-3xl sm:text-4xl animate-pulse" />
                <span>{t('contact.title')}</span>
              </h2>
              <p className="text-white text-sm sm:text-base md:text-lg opacity-90">
                {t('contact.subtitle')}
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="p-6 sm:p-8 md:p-10 bg-white">
          {/* Status Message */}
          {(status.success || status.error) && (
            <div className={`mb-6 p-4 rounded-lg ${status.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              <div className="flex items-center space-x-2">
                {status.success ? (
                  <FaCheck className="text-green-600" />
                ) : (
                  <FaExclamationTriangle className="text-red-600" />
                )}
                <p>{statusMessage}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Form fields remain the same as your original */}
            {/* ... (all your existing form fields) ... */}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status.submitting}
              className={`w-full bg-gradient-to-r from-primaryBlue to-secondaryGreen text-white py-3 sm:py-4 rounded-lg text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
                status.submitting ? 'opacity-70 cursor-not-allowed' : 'hover:from-secondaryGreen hover:to-primaryBlue'
              }`}
            >
              {status.submitting ? (
                <div className="flex items-center justify-center space-x-2">
                  <FaSpinner className="animate-spin" />
                  <span>{t('contact.form.submitting')}</span>
                </div>
              ) : (
                t('contact.form.submit')
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;