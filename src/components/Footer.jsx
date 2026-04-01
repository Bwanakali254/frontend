import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const linkHoverVariants = {
    hover: { x: 5, transition: { duration: 0.2 } },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
          
         <motion.div variants={itemVariants}>
            <motion.img 
              whileHover={{ scale: 1.05 }}
              src={assets.logo} 
              alt="logo" 
              className='mb-5 w-32 cursor-pointer' 
            />
            <p className='w-full md:w-2/3 text-gray-500'>
               We are a team of dedicated professionals who are passionate about providing the best possible service to our customers.
            </p>
         </motion.div>

         <motion.div variants={itemVariants}>
            <p className='text-xl font-medium mb-5'>Company</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <motion.li whileHover="hover" variants={linkHoverVariants}>
                  <Link to="/" className='hover:text-gray-900 cursor-pointer inline-block'>Home</Link>
                </motion.li>
                <motion.li whileHover="hover" variants={linkHoverVariants}>
                  <Link to="/about" className='hover:text-gray-900 cursor-pointer inline-block'>About</Link>
                </motion.li>
                <motion.li whileHover="hover" variants={linkHoverVariants}>
                  <Link to="/contact" className='hover:text-gray-900 cursor-pointer inline-block'>Delivery</Link>
                </motion.li>
                <motion.li whileHover="hover" variants={linkHoverVariants}>
                  <Link to="/privacy-policy" className='hover:text-gray-900 cursor-pointer inline-block'>Privacy Policy</Link>
                </motion.li>
                <motion.li whileHover="hover" variants={linkHoverVariants}>
                  <Link to="/terms-and-conditions" className='hover:text-gray-900 cursor-pointer inline-block'>Terms & Conditions</Link>
                </motion.li>
                <motion.li whileHover="hover" variants={linkHoverVariants}>
                  <a href="http://localhost:5174" target="_blank" rel="noopener noreferrer" className='hover:text-gray-900 cursor-pointer inline-block text-xs text-gray-400'>Admin</a>
                </motion.li>
            </ul>
         </motion.div>

         <motion.div variants={itemVariants}>
            <p className='text-xl font-medium mb-5'>Get in touch</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li className='hover:text-gray-900 transition-colors cursor-pointer'>support@sunmega.co.ke</li>
                <li className='hover:text-gray-900 transition-colors cursor-pointer'>+254 1190 27300</li>
                <li>Nairobi, Kenya</li>
            </ul>
         </motion.div>
         
        </div>

        <motion.div 
          variants={itemVariants}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
            <hr />
            <p className='py-5 text-sm text-center text-gray-500'>Copyright © 2026 Sunmega.co.ke - All rights reserved.</p>
        </motion.div>

    </motion.div>
  )
}

export default Footer
