import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Package, DollarSign, Info, Phone } from 'lucide-react'


const Header = () => {

     const [visible, setVisible] = useState(false);

     // Animation variants
     const navItemVariants = {
       hidden: { opacity: 0, y: -10 },
       visible: { 
         opacity: 1, 
         y: 0,
         transition: { duration: 0.3 }
       },
       hover: { 
         scale: 1.05,
         transition: { duration: 0.2 }
       }
     };

     const sidebarVariants = {
       hidden: { x: '100%', opacity: 0 },
       visible: { 
         x: 0, 
         opacity: 1,
         transition: { 
           type: 'spring',
           stiffness: 300,
           damping: 30
         }
       },
       exit: { 
         x: '100%', 
         opacity: 0,
         transition: { duration: 0.3 }
       }
     };

     const staggerContainer = {
       hidden: { opacity: 0 },
       visible: {
         opacity: 1,
         transition: {
           staggerChildren: 0.1,
           delayChildren: 0.1,
         },
       },
     };

  return (
    <div>
      {/* Top Navbar */}
      <div className='bg-green-600 text-white text-xs py-2 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <div className='flex justify-between items-center max-w-7xl mx-auto'>
          <div className='flex items-center gap-4'>
            <span>Your trusted solar energy partner</span>
          </div>
          <div className='flex items-center gap-4'>
            <span>+254 1190 27300</span>
            <span className='hidden sm:inline'>|</span>
            <span className='hidden sm:inline'>support@sunmega.co.ke</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='flex items-center justify-between py-5 font-medium'
    >

        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
          <Link to='/'> <img src={assets.logo} alt="logo" className='w-15 h-15' /> </Link>
        </motion.div>

        <div className='flex items-center gap-6'>
            <motion.ul 
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className='hidden sm:flex gap-5 text-sm text-gray-700'
            > 
              <motion.div variants={navItemVariants} whileHover="hover">
                <NavLink to='/' className='flex flex-col items-center gap-1'>
                   <p>Home</p>
                   <hr className='w-2/4 border-none h-[1.5px] bg-orange-500 hidden' />
                </NavLink>
              </motion.div>
              <motion.div variants={navItemVariants} whileHover="hover">
                <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                   <p>Products</p>
                   <hr className='w-2/4 border-none h-[1.5px] bg-orange-500 hidden' />
                </NavLink>
              </motion.div>
              <motion.div variants={navItemVariants} whileHover="hover">
                <NavLink to='/solar-solution' className='flex flex-col items-center gap-1'>
                   <p>Pricing</p>
                   <hr className='w-2/4 border-none h-[1.5px] bg-orange-500 hidden' />
                </NavLink>
              </motion.div>
              <motion.div variants={navItemVariants} whileHover="hover">
                <NavLink to='/about' className='flex flex-col items-center gap-1'>
                   <p>About</p>
                   <hr className='w-2/4 border-none h-[1.5px] bg-orange-500 hidden' />
                </NavLink>
              </motion.div>
              <motion.div variants={navItemVariants} whileHover="hover">
                <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                   <p>Contact</p>
                   <hr className='w-2/4 border-none h-[1.5px] bg-orange-500 hidden' />
                </NavLink>
              </motion.div>

            </motion.ul>
            
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setVisible(true)} 
              className='p-2 rounded-full bg-green-50 text-green-600 hover:bg-green-100 transition-colors sm:hidden'
              aria-label="Open menu"
            >
              <Menu className='w-6 h-6' />
            </motion.button>
        </div>
        
        {/* Sidebar Menu for small screens */}
        <AnimatePresence>
          {visible && (
            <motion.div 
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className='fixed top-0 right-0 bottom-0 w-72 bg-white z-50 shadow-2xl'
            >
              {/* Header with close button */}
              <div className='flex items-center justify-between p-4 border-b border-gray-100'>
                <span className='font-semibold text-gray-800'>Menu</span>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setVisible(false)}
                  className='p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors'
                  aria-label="Close menu"
                >
                  <X className='w-5 h-5' />
                </motion.button>
              </div>

              {/* Navigation Links */}
              <div className='flex flex-col p-4 gap-2'>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 }}
                >
                  <NavLink 
                    onClick={()=>setVisible(false)} 
                    className={({isActive}) => `flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${isActive ? 'bg-green-50 text-green-600' : 'text-gray-700 hover:bg-gray-50'}`}
                    to='/'
                  >
                    <Home className='w-5 h-5' />
                    <span className='font-medium'>Home</span>
                  </NavLink>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <NavLink 
                    onClick={()=>setVisible(false)} 
                    className={({isActive}) => `flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${isActive ? 'bg-green-50 text-green-600' : 'text-gray-700 hover:bg-gray-50'}`}
                    to='/collection'
                  >
                    <Package className='w-5 h-5' />
                    <span className='font-medium'>Products</span>
                  </NavLink>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <NavLink 
                    onClick={()=>setVisible(false)} 
                    className={({isActive}) => `flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${isActive ? 'bg-green-50 text-green-600' : 'text-gray-700 hover:bg-gray-50'}`}
                    to='/solar-solution'
                  >
                    <DollarSign className='w-5 h-5' />
                    <span className='font-medium'>Pricing</span>
                  </NavLink>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <NavLink 
                    onClick={()=>setVisible(false)} 
                    className={({isActive}) => `flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${isActive ? 'bg-green-50 text-green-600' : 'text-gray-700 hover:bg-gray-50'}`}
                    to='/about'
                  >
                    <Info className='w-5 h-5' />
                    <span className='font-medium'>About</span>
                  </NavLink>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <NavLink 
                    onClick={()=>setVisible(false)} 
                    className={({isActive}) => `flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${isActive ? 'bg-green-50 text-green-600' : 'text-gray-700 hover:bg-gray-50'}`}
                    to='/contact'
                  >
                    <Phone className='w-5 h-5' />
                    <span className='font-medium'>Contact</span>
                  </NavLink>
                </motion.div>
              </div>

              {/* Footer */}
              <div className='absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100'>
                <p className='text-xs text-gray-500 text-center'>© 2026 Sun Mega Limited</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

    </motion.div>
    </div>
  )
}

export default Header
