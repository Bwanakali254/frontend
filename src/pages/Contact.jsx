import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'
import { motion } from 'framer-motion'

const Title = ({text1,text2}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
     <p className='text-gray-500'>{text1} <span className='text-gray-700 font-medium'>{text2}</span></p>
     <p className='w-8 sm:w-12 h-px sm:h-[2px] bg-gray-700'></p>
    </div>
  )
}

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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
    try {
      setIsLoading(true);
      const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000';
      const response = await axios.post(backendUrl + '/api/contact', {
        name,
        email,
        subject,
        message
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
              whileHover={{ scale: 1.02, boxShadow: "0 5px 15px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.98 }}
              type='submit' 
              disabled={isLoading}
              className={`w-full bg-green-500 hover:bg-amber-500 text-white py-3 mt-4 transition-all duration-300 ${isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
            >
              {isLoading ? 'Sending...' : 'Send message'}
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
