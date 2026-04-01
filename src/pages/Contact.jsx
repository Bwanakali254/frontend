import React, { useState, useEffect } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'
import { motion } from 'framer-motion'

/**
 * Load reCAPTCHA v3 script dynamically
 */
const loadRecaptchaScript = (siteKey) => {
  return new Promise((resolve, reject) => {
    if (window.grecaptcha) {
      resolve();
      return;
    }
    
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    script.defer = true;
    
    script.onload = () => {
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

const Title = ({text1,text2}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
     <p className='text-gray-500'>{text1} <span className='text-gray-700 font-medium'>{text2}</span></p>
     <p className='w-8 sm:w-12 h-px sm:h-0.5 bg-gray-700'></p>
    </div>
  )
}

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

  const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
  const backendUrl = 'https://api.sunmega.co.ke';

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
      console.warn('[reCAPTCHA] Site key not configured');
    }
  }, [recaptchaSiteKey]);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Check if reCAPTCHA is loaded
    if (!recaptchaLoaded || !recaptchaSiteKey) {
      toast.error('Security verification not ready. Please wait a moment and try again.');
      return;
    }
    
    try {
      setIsLoading(true);
      
      // Execute reCAPTCHA to get token
      const recaptchaToken = await executeRecaptcha(recaptchaSiteKey, 'submit');
      
      const response = await axios.post(backendUrl + '/api/contact', {
        name,
        email,
        subject,
        message,
        recaptchaToken
      });
      if (response.data.success) {
        toast.success(response.data.message || 'Message sent successfully!');
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        toast.error(response.data.message || 'Failed to send message');
      }
      setIsLoading(false);
    } catch (error) {
      toast.error(error.response?.data?.message || error.message || 'Failed to send message');
      setIsLoading(false);
    }
  };

  return (
    <div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='text-2xl text-center pt-10 border-t'
      >
        <Title text1={'Contact'} text2={'Us'} />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className='my-10 flex flex-col md:flex-row gap-16'
      >
        <motion.img 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          whileHover={{ scale: 1.02 }}
          src={assets.contactUs} 
          alt="contact" 
          className='w-full h-full md:max-w-112.5' 
        />
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className='flex flex-col justify-center items-start gap-6'
        >
          <motion.p variants={fadeInUp} className='font-semibold text-xl text-gray-600'>Contact Details</motion.p>
          <motion.p variants={fadeInUp} className='text-gray-500'>Saramala round, 2nd floor <br />2c Mombasa, Kenya.</motion.p>
          <motion.p variants={fadeInUp} className='text-gray-500'> Phone: +254 1190 27300 <br />Email: support@sunmega.co.ke</motion.p>
          <motion.p variants={fadeInUp} className='font-semibold text-xl text-gray-600'>Get in touch with us</motion.p>
          <motion.form 
            variants={fadeInUp}
            onSubmit={handleSubmit} 
            className='w-full'
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className='grid grid-cols-1 sm:grid-cols-2 gap-3'
            >
              <input 
                type="text" 
                placeholder='Input your name' 
                className='w-full px-3 py-2 border border-green-500 transition-all duration-300 focus:shadow-md focus:outline-none' 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input 
                type="email" 
                placeholder='Input your email' 
                className='w-full px-3 py-2 border border-green-500 transition-all duration-300 focus:shadow-md focus:outline-none' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </motion.div>
            <motion.input 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              type="text" 
              placeholder='Subject' 
              className='w-full px-3 py-2 border border-green-500 mt-3 transition-all duration-300 focus:shadow-md focus:outline-none' 
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
            <motion.textarea 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              placeholder='Submit your message request' 
              className='w-full px-3 py-2 border border-green-500 mt-3 h-48 transition-all duration-300 focus:shadow-md focus:outline-none' 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></motion.textarea>
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: isLoading ? 1 : 1.02, boxShadow: "0 5px 15px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: isLoading ? 1 : 0.98 }}
              type='submit' 
              disabled={isLoading}
              className={`w-full bg-green-500 hover:bg-amber-500 text-white py-3 mt-4 transition-all duration-300 flex items-center justify-center gap-2 ${isLoading ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'}`}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Sending...
                </>
              ) : 'Send message'}
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
