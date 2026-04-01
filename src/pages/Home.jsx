import React, { useState, useContext } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import axios from 'axios'
import { toast } from 'react-toastify'
import { RefreshCw, ShieldCheck, Headphones } from 'lucide-react'

const Home = () => {
  const navigate = useNavigate();

  // ============ HERO SECTION ============
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // ============ BESTSELLER SECTION ============
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const handleReadMore = (product) => {
    if (product.id === 1) {
      navigate('/collection?category=energy-storage-systems');
    } else if (product.id === 2) {
      navigate('/collection?category=energy-storage-systems');
    } else if (product.id === 3) {
      navigate('/collection?category=batteries');
    }
  };

  const handleViewAllProducts = () => {
    navigate('/collection');
  };

  const products = [
    {
      id: 1,
      title: "Household Residential Energy Storage System",
      subtitle: "5KW-10KWH or 5KW-20KWH ALL-ONE-SOLUTION",
      image: assets.residentialEnergyStorage,
      bullets: [
        "Mine off-grid",
        "Household Energy Storage", 
        "Farm off-grid",
        "Villages & Town without electricity",
        "Island off-grid",
        "Commercial Real Estate"
      ],
      imagePosition: "right"
    },
    {
      id: 2,
      title: "Grid-Tie Three-Phase Inverter",
      subtitle: "10, 12, 15, 17, 20KW THREE PHASE GRID ON INVERTER (KY-3GT SERIES)",
      image: assets.gridTieThreePhaseInverter,
      bullets: [
        "Household",
        "Small-sized Commercial",
        "Commercial Real Estate", 
        "Public Buildings"
      ],
      imagePosition: "left"
    },
    {
      id: 3,
      title: "Battery Pack",
      subtitle: "3.8KWH, 5KWH, 6KWH",
      image: assets.batteryPack,
      bullets: [
        "Electric Two-Wheeled vehicle",
        "Electric logistics vehicle",
        "Low speed vehicle",
        "Electro-tricycle"
      ],
      imagePosition: "right"
    }
  ];

  // ============ OUR POLICY SECTION ============
  const policyContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "backOut",
      },
    },
  };

  const policies = [
    {
      icon: RefreshCw,
      title: "Easy Exchange Policy",
      description: "We offer a 100% satisfaction guarantee on all our products.",
    },
    {
      icon: ShieldCheck,
      title: "Quality Assurance",
      description: "We use the best materials and the latest technology to ensure the best quality products.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Our support team is here to help you with any questions or concerns.",
    },
  ];

  // ============ SOLAR CTA SECTION ============
  const ctaContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const ctaItemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "backOut",
      },
    },
  };

  const handleInquireNow = () => {
    navigate('/contact');
  };

  const handleRequestPricing = () => {
    navigate('/solar-solution');
  };

  // ============ NEWSLETTER SECTION ============
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const backendUrl = 'https://api.sunmega.co.ke';
      const response = await axios.post(backendUrl + '/api/newsletter/subscribe', {
        email
      });
      if (response.data.success) {
        toast.success(response.data.message || 'Subscribed successfully!');
        setIsSubscribed(true);
        setEmail('');
      } else {
        toast.error(response.data.message || 'Failed to subscribe');
      }
      setIsLoading(false);
    } catch (error) {
      toast.error(error.response?.data?.message || error.message || 'Failed to subscribe');
      setIsLoading(false);
    }
  }

  return (
    <div>
      {/* ============ HERO SECTION ============ */}
      <div className="relative overflow-hidden h-96 sm:h-112 md:h-128 lg:h-144">
        {/* Background hero image */}
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full object-cover"
          src={assets.hero}
          alt="Solar background"
        />

        {/* Overlay */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-black/40"
        />

        {/* Floating hero2 image */}
        <motion.img
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="absolute right-4 sm:right-8 md:right-12 bottom-4 sm:bottom-8 md:bottom-12 w-48 sm:w-64 md:w-80 lg:w-96 h-auto object-contain z-10"
          src={assets.hero2}
          alt="Solar product"
        />

        <div className="absolute inset-0 flex items-center justify-start px-4 sm:px-8 md:px-12 lg:px-16 z-10">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-md text-white"
          >
            <motion.div variants={fadeInUp} transition={{ duration: 0.6 }} className="mb-2">
              <p className="text-[10px] sm:text-xs md:text-sm uppercase tracking-wide">
                Lighting Africa, Powering Possibilities
              </p>
            </motion.div>

            <motion.h1 
              variants={fadeInUp} 
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-snug mb-4"
            >
              Wholesale & Retail Solar Solutions 
            </motion.h1>

            <motion.button
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate("/contact")}
              className="group inline-flex items-center gap-2 border border-green-400 px-4 py-2 text-xs sm:text-sm md:text-base font-semibold hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all cursor-pointer"
            >
              INQUIRE NOW
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* ============ OUR POLICY SECTION ============ */}
      <motion.div 
        variants={policyContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'
      >
        {policies.map((policy, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ 
              y: -8, 
              transition: { duration: 0.3 } 
            }}
            className="cursor-default"
          >
            <motion.div
              variants={iconVariants}
              className='w-12 h-12 m-auto mb-5 flex items-center justify-center'
              whileHover={{ 
                rotate: [0, -10, 10, 0],
                scale: 1.1,
                transition: { duration: 0.5 }
              }}
            >
              <policy.icon className="w-10 h-10 text-green-600" />
            </motion.div>
            <motion.p 
              className='font-semibold mb-2'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              {policy.title}
            </motion.p>
            <motion.p 
              className='text-gray-400'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              {policy.description}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>

      {/* ============ BESTSELLER/PRODUCTS SECTION ============ */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className='bg-white py-20 px-6'
      >
        <div className='max-w-7xl mx-auto'>
          <motion.div variants={headerVariants} className='text-center mb-20'>
            <h2 className='text-2xl font-light tracking-wide text-gray-900 mb-4'>
              PRODUCTS
            </h2>
          </motion.div>

          <div className='space-y-20'>
            {/* Card 1 */}
            <motion.div variants={cardVariants} className='flex flex-col md:flex-row items-center justify-between gap-12'>
              <motion.div variants={textVariants} className='flex-1 max-w-xl'>
                <h3 className='text-xl font-normal text-gray-900 mb-3 leading-tight'>
                  {products[0].title}
                </h3>
                <p className='text-xs uppercase tracking-wider text-gray-500 mb-6'>
                  {products[0].subtitle}
                </p>
                <ul className='space-y-2 mb-8'>
                  {products[0].bullets.map((bullet, index) => (
                    <li key={index} className='flex items-start text-sm text-gray-700'>
                      <span className='w-1 h-1 bg-gray-400 rounded-full mt-2 mr-3 shrink-0'></span>
                      {bullet}
                    </li>
                  ))}
                </ul>
                <motion.button 
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleReadMore(products[0])}
                  className='group inline-flex items-center border border-gray-900 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 cursor-pointer'
                >
                  Read More
                </motion.button>
              </motion.div>
              <motion.div variants={imageVariants} whileHover={{ scale: 1.03 }} className='flex-1 max-w-xs'>
                <div className='bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-lg transition-shadow duration-300'>
                  <img 
                    src={products[0].image}
                    alt={products[0].title}
                    className='w-full h-60 object-contain'
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={cardVariants} className='flex flex-col md:flex-row items-center justify-between gap-12 md:ml-20'>
              <motion.div variants={imageVariants} whileHover={{ scale: 1.03 }} className='flex-1 max-w-xs order-2 md:order-1'>
                <div className='bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-lg transition-shadow duration-300'>
                  <img 
                    src={products[1].image}
                    alt={products[1].title}
                    className='w-full h-60 object-contain'
                  />
                </div>
              </motion.div>
              <motion.div variants={textVariants} className='flex-1 max-w-xl order-1 md:order-2'>
                <h3 className='text-xl font-normal text-gray-900 mb-3 leading-tight'>
                  {products[1].title}
                </h3>
                <p className='text-xs uppercase tracking-wider text-gray-500 mb-6'>
                  {products[1].subtitle}
                </p>
                <ul className='space-y-2 mb-8'>
                  {products[1].bullets.map((bullet, index) => (
                    <li key={index} className='flex items-start text-sm text-gray-700'>
                      <span className='w-1 h-1 bg-gray-400 rounded-full mt-2 mr-3 shrink-0'></span>
                      {bullet}
                    </li>
                  ))}
                </ul>
                <motion.button 
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleReadMore(products[1])}
                  className='group inline-flex items-center border border-gray-900 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 cursor-pointer'
                >
                  Read More
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={cardVariants} className='flex flex-col md:flex-row items-center justify-between gap-12'>
              <motion.div variants={textVariants} className='flex-1 max-w-xl'>
                <h3 className='text-xl font-normal text-gray-900 mb-3 leading-tight'>
                  {products[2].title}
                </h3>
                <p className='text-xs uppercase tracking-wider text-gray-500 mb-6'>
                  {products[2].subtitle}
                </p>
                <ul className='space-y-2 mb-8'>
                  {products[2].bullets.map((bullet, index) => (
                    <li key={index} className='flex items-start text-sm text-gray-700'>
                      <span className='w-1 h-1 bg-gray-400 rounded-full mt-2 mr-3 shrink-0'></span>
                      {bullet}
                    </li>
                  ))}
                </ul>
                <motion.button 
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleReadMore(products[2])}
                  className='group inline-flex items-center border border-gray-900 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 cursor-pointer'
                >
                  Read More
                </motion.button>
              </motion.div>
              <motion.div variants={imageVariants} whileHover={{ scale: 1.03 }} className='flex-1 max-w-xs'>
                <div className='bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-lg transition-shadow duration-300'>
                  <img 
                    src={products[2].image}
                    alt={products[2].title}
                    className='w-full h-60 object-contain'
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div 
            variants={headerVariants}
            className='text-center mt-12'
          >
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.98 }}
              onClick={handleViewAllProducts}
              className='inline-flex items-center bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-500 transition-colors cursor-pointer'
            >
              View All Products
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* ============ SOLAR CTA SECTION ============ */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={ctaContainerVariants}
        className="w-full bg-[#064e3b] mt-16 py-16 sm:py-20 px-6 sm:px-8 lg:px-12 mb-16"
      >
        <div className="max-w-212.5 mx-auto text-center">
          <motion.h2 
            variants={ctaItemVariants}
            className="text-white text-[32px] sm:text-[36px] lg:text-[42px] font-bold leading-[1.2] max-w-150 mx-auto mb-6"
          >
            Get started with solar today.
          </motion.h2>
          
          <motion.p 
            variants={ctaItemVariants}
            className="text-[#a7f3d0] text-[16px] sm:text-[18px] leading-[1.6] max-w-175 mx-auto mb-10"
          >
            Enjoy as low as zero bills, hassle-free installation and reliable after-sales support from your most trusted solar partner.
          </motion.p>
          
          <motion.div 
            variants={ctaItemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              variants={buttonVariants}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 30px rgba(249, 115, 22, 0.4)" 
              }}
              whileTap={{ scale: 0.98 }}
              onClick={handleInquireNow}
              className="w-full sm:w-auto bg-[#f97316] hover:bg-[#ea580c] text-white text-[14px] font-semibold uppercase tracking-[1.5px] px-10 py-4 rounded-[9999px] transition-colors duration-200 ease-in-out cursor-pointer"
            >
              Inquire Now
            </motion.button>
            
            <motion.button
              variants={buttonVariants}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#ffffff",
                color: "#064e3b",
                borderColor: "transparent"
              }}
              whileTap={{ scale: 0.98 }}
              onClick={handleRequestPricing}
              className="w-full sm:w-auto bg-transparent text-white text-[14px] font-semibold uppercase tracking-[1.5px] px-10 py-3.5 border-2 border-white rounded-[9999px] transition-colors duration-200 ease-in-out cursor-pointer"
            >
              Request Pricing
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* ============ NEWSLETTER SECTION ============ */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className='text-center pb-20'
      >
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className='text-2xl font-semibold text-gray-700'
        >
          Subscribe to our newsletter
        </motion.p>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className='text-gray-400 mt-3'
        >
          Be the first to know about new products, discounts, and more!   
        </motion.p>
        {!isSubscribed ? (
          <motion.form 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            onSubmit={onSubmitHandler} 
            className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'
          >
            <input 
              className='w-full sm:flex-1 outline-none' 
              type='email' 
              placeholder='Enter your email' 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type='submit' 
              disabled={isLoading || isSubscribed}
              className={`bg-orange-500 hover:bg-orange-600 text-white text-sm px-10 py-4 ${isLoading || isSubscribed ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
            >
              {isLoading ? 'Subscribing...' : isSubscribed ? 'Subscribed' : 'Subscribe'}
            </motion.button>
          </motion.form>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className='w-full sm:w-1/2 mx-auto my-6 p-4 bg-green-100 border border-green-500 rounded'
          >
            <p className='text-green-700 font-semibold'>Thank you! You're subscribed to our newsletter.</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}

export default Home
