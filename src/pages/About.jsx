import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const Title = ({text1,text2}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
     <p className='text-gray-500'>{text1} <span className='text-gray-700 font-medium'>{text2}</span></p>
     <p className='w-8 sm:w-12 h-px sm:h-[2px] bg-gray-700'></p>
    </div>
  )
}

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6 }
  };

  return (
    <div>
       <motion.div 
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5 }}
         className='text-2xl text-center pt-8 border-t'
       >
        <Title text1={'About'} text2={'Us'} />
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
           src={assets.aboutUs} 
           alt="about" 
           className='w-full h-100 md:max-w-112.5' 
         />
         <motion.div 
           variants={staggerContainer}
           initial="initial"
           animate="animate"
           className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'
         >
         <motion.p variants={fadeInUp}>Sun Mega Limited was born from a vision to merge soulful living with sustainable energy. Starting in Mombasa, the company set out to empower communities through light and clean power.</motion.p>
         <motion.p variants={fadeInUp}> What began as a local initiative has grown into a brand that celebrates milestones with heart, nurtures relationships with suppliers and clients, and builds bridges between tradition and innovation.</motion.p>
         <motion.b variants={fadeInUp}>Our Mission</motion.b>
         <motion.p variants={fadeInUp}>To deliver accessible, reliable, and soulful solar solutions that empower individuals, businesses, and communities while nurturing the environment and celebrating human connection.</motion.p>
       </motion.div>
       </motion.div>

       <motion.div 
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5, delay: 0.6 }}
         className='text-4xl py-4'
       >
        <Title text1={'Why'} text2={'Choose Us'} />
       </motion.div>

       <motion.div 
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.6, delay: 0.7 }}
         className='flex flex-col sm:flex-row gap-4 text-sm mb-20'
       >
         <motion.div 
           variants={scaleIn}
           initial="initial"
           whileInView="animate"
           viewport={{ once: true }}
           whileHover={{ y: -8, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
           className='border border-green-500 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 flex-1 transition-all duration-300'
         >
           <b>Quality Assurance:</b>
           <p className='text-gray-500'> We use the best materials and the latest technology to ensure the best quality products.</p>
         </motion.div>
         <motion.div 
           variants={scaleIn}
           initial="initial"
           whileInView="animate"
           viewport={{ once: true }}
           whileHover={{ y: -8, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
           className='border border-green-500 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 flex-1 transition-all duration-300'
         >
           <b>Trusted Expertise:</b>
           <p className='text-gray-500'> Our team of experts ensures seamless installations and long-lasting performance.</p>
         </motion.div>
         <motion.div 
           variants={scaleIn}
           initial="initial"
           whileInView="animate"
           viewport={{ once: true }}
           whileHover={{ y: -8, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
           className='border border-green-500 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 flex-1 transition-all duration-300'
         >
           <b>Comprehensive Services:</b>
           <p className='text-gray-500'> We offer a wide range of services including installation, maintenance, and repair.</p>
         </motion.div>
       </motion.div>
    </div>
  )
}

export default About
