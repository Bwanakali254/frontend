/**
 * ============================================================
 * FRONTEND reCAPTCHA v3 INTEGRATION - ContactForm Component
 * ============================================================
 * 
 * This component demonstrates how to integrate Google reCAPTCHA v3
 * with the security-hardened backend controller.
 * 
 * Setup Required:
 * 1. Get reCAPTCHA v3 site key from https://www.google.com/recaptcha/admin
 * 2. Add to .env: VITE_RECAPTCHA_SITE_KEY=your_site_key
 * 3. Add script to index.html or load dynamically
 * 
 * Security Features:
 * - Invisible reCAPTCHA (no checkbox, no user friction)
 * - Token expires after 2 minutes, so we fetch on submit
 * - Honeypot field (invisible to users, traps bots)
 * - CSRF protection via proper CORS setup on backend
 * ============================================================
 */

import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

/**
 * Load reCAPTCHA v3 script dynamically
 * This ensures the script is loaded before we try to use grecaptcha
 */
const loadRecaptchaScript = (siteKey) => {
  return new Promise((resolve, reject) => {
    // Check if already loaded
    if (window.grecaptcha) {
      resolve();
      return;
    }
    
    // Create script element
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    script.defer = true;
    
    script.onload = () => {
      // Wait for grecaptcha to be ready
      window.grecaptcha.ready(() => {
        resolve();
      });
    };
    
    script.onerror = () => {
      reject(new Error('Failed to load reCAPTCHA script'));
    };
    
    document.head.appendChild(script);
  });
};

/**
 * Execute reCAPTCHA and get token
 * Called when user submits the form
 * 
 * @param {string} siteKey - reCAPTCHA v3 site key
 * @param {string} action - Action name (e.g., 'submit')
 * @returns {Promise<string>} - reCAPTCHA token
 */
const executeRecaptcha = async (siteKey, action = 'submit') => {
  return new Promise((resolve, reject) => {
    if (!window.grecaptcha) {
      reject(new Error('reCAPTCHA not loaded'));
      return;
    }
    
    window.grecaptcha.ready(async () => {
      try {
        const token = await window.grecaptcha.execute(siteKey, { action });
        resolve(token);
      } catch (error) {
        reject(error);
      }
    });
  });
};

const SecureContactForm = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    phone: '',
    location: '',
    productInterest: ''
  });
  
  // Honeypot field - invisible to users, should remain empty
  // Bots often fill all visible fields, so this catches them
  const [honeypot, setHoneypot] = useState('');
  
  const [isLoading, setIsLoading] = useState(false);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  
  const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000';
  const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
  
  // Load reCAPTCHA on component mount
  useEffect(() => {
    if (recaptchaSiteKey) {
      loadRecaptchaScript(recaptchaSiteKey)
        .then(() => {
          setRecaptchaLoaded(true);
          console.log('[reCAPTCHA] v3 loaded successfully');
        })
        .catch(error => {
          console.error('[reCAPTCHA] Failed to load:', error);
          toast.error('Security verification failed to load. Please refresh the page.');
        });
    } else {
      console.error('[reCAPTCHA] Site key not configured');
    }
  }, [recaptchaSiteKey]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  /**
   * Validate form before submission
   * Frontend validation provides immediate feedback and reduces server load
   */
  const validateForm = () => {
    const errors = [];
    
    // Name validation
    if (!formData.name || formData.name.length < 2) {
      errors.push('Name must be at least 2 characters');
    }
    if (!/^[a-zA-Z\s'-]+$/.test(formData.name)) {
      errors.push('Name contains invalid characters');
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.push('Please enter a valid email address');
    }
    
    // Subject validation
    if (!formData.subject || formData.subject.length < 5) {
      errors.push('Subject must be at least 5 characters');
    }
    
    // Message validation
    if (!formData.message || formData.message.length < 10) {
      errors.push('Message must be at least 10 characters');
    }
    if (formData.message.length > 2000) {
      errors.push('Message is too long (max 2000 characters)');
    }
    
    return errors;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Frontend validation
    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      validationErrors.forEach(error => toast.error(error));
      return;
    }
    
    // Check if reCAPTCHA is loaded
    if (!recaptchaLoaded) {
      toast.error('Security verification not ready. Please wait a moment and try again.');
      return;
    }
    
    setIsLoading(true);
    
    try {
      // =====================================================================
      // STEP 1: Get reCAPTCHA v3 token
      // We get the token at submit time (not on page load) because tokens
      // expire after 2 minutes
      // =====================================================================
      const recaptchaToken = await executeRecaptcha(recaptchaSiteKey, 'submit');
      
      // =====================================================================
      // STEP 2: Prepare submission data
      // Include honeypot field - backend will reject if it's filled
      // =====================================================================
      const submissionData = {
        ...formData,
        recaptchaToken,        // Required for security verification
        website: honeypot     // Honeypot field (should be empty)
      };
      
      // =====================================================================
      // STEP 3: Submit to backend
      // =====================================================================
      const response = await axios.post(
        `${backendUrl}/api/contact`,
        submissionData,
        {
          headers: {
            'Content-Type': 'application/json'
          },
          timeout: 15000 // 15 second timeout
        }
      );
      
      if (response.data.success) {
        toast.success(response.data.message || 'Message sent successfully!');
        
        // Clear form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          phone: '',
          location: '',
          productInterest: ''
        });
        
        // Optional: Log recaptcha score for debugging
        if (response.data.data?.recaptchaScore !== undefined) {
          console.log(`[reCAPTCHA] Score: ${response.data.data.recaptchaScore}`);
        }
      } else {
        toast.error(response.data.error || 'Failed to send message');
      }
      
    } catch (error) {
      console.error('[Submit Error]', error);
      
      // Handle different error types
      if (error.response) {
        // Server responded with error status
        const status = error.response.status;
        const message = error.response.data?.error || 'An error occurred';
        
        if (status === 429) {
          toast.error('Too many attempts. Please try again later.');
        } else if (status === 400) {
          toast.error(message);
        } else {
          toast.error('Server error. Please try again later.');
        }
      } else if (error.request) {
        // Request made but no response
        toast.error('Network error. Please check your connection.');
      } else {
        // Something else happened
        toast.error('An unexpected error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="max-w-2xl mx-auto p-6">
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* Name Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            minLength={2}
            maxLength={100}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="Your full name"
          />
        </div>
        
        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            maxLength={254}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="your@email.com"
          />
        </div>
        
        {/* Phone Field (Optional) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="+254 712 345 678"
          />
        </div>
        
        {/* Subject Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Subject <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            minLength={5}
            maxLength={200}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="What is this about?"
          />
        </div>
        
        {/* Message Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            minLength={10}
            maxLength={2000}
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
            placeholder="Please describe your inquiry in detail..."
          />
          <p className="text-xs text-gray-500 mt-1">
            {formData.message.length}/2000 characters
          </p>
        </div>
        
        {/* =====================================================================
            HONEYPOT FIELD - INVISIBLE TO HUMANS
            This field is hidden via CSS. Bots often fill it, revealing themselves.
            The backend will reject any submission where this field has content.
            ===================================================================== */}
        <div className="absolute opacity-0 top-0 left-0 h-0 w-0 overflow-hidden">
          <label>Leave this field empty</label>
          <input
            type="text"
            name="website"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
        
        {/* Submit Button with Loading State */}
        <motion.button
          whileHover={{ scale: isLoading ? 1 : 1.02 }}
          whileTap={{ scale: isLoading ? 1 : 0.98 }}
          type="submit"
          disabled={isLoading || !recaptchaLoaded}
          className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 ${
            isLoading || !recaptchaLoaded
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-green-600 hover:bg-green-700 cursor-pointer'
          }`}
        >
          {isLoading ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </motion.button>
        
        {/* Privacy Note */}
        <p className="text-xs text-gray-500 text-center">
          This site is protected by reCAPTCHA and the Google{' '}
          <a href="https://policies.google.com/privacy" className="underline" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>{' '}
          and{' '}
          <a href="https://policies.google.com/terms" className="underline" target="_blank" rel="noopener noreferrer">
            Terms of Service
          </a>{' '}
          apply.
        </p>
      </motion.form>
    </div>
  );
};

export default SecureContactForm;
