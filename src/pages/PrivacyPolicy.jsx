import React from 'react'
import { motion } from 'framer-motion'

const Title = ({text1,text2}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
     <p className='text-gray-500'>{text1} <span className='text-gray-700 font-medium'>{text2}</span></p>
     <p className='w-8 sm:w-12 h-px sm:h-[2px] bg-gray-700'></p>
    </div>
  )
}

const PrivacyPolicy = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'Privacy'} text2={'Policy'} />
      </div>

      <div className='my-10 flex flex-col gap-6 text-gray-600'>
        <div>
          <h2 className='text-xl font-semibold text-gray-800 mb-3'>1. Introduction</h2>
          <p>Sun Mega Limited respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and protect your data when you use our website and services.</p>
        </div>

        <div>
          <h2 className='text-xl font-semibold text-gray-800 mb-3'>2. Information We Collect</h2>
          <p className='mb-3'>We may collect the following types of information:</p>
          <ul className='list-disc list-inside ml-4 space-y-2'>
            <li>Personal identification information (name, email address, phone number)</li>
            <li>Location and address information for installation services</li>
            <li>Energy consumption data and requirements</li>
            <li>Communication records and inquiries</li>
            <li>Technical data such as IP addresses and browser information</li>
          </ul>
        </div>

        <div>
          <h2 className='text-xl font-semibold text-gray-800 mb-3'>3. How We Use Your Information</h2>
          <p className='mb-3'>We use your information to:</p>
          <ul className='list-disc list-inside ml-4 space-y-2'>
            <li>Provide quotes and consultation for solar solutions</li>
            <li>Process installation requests and service bookings</li>
            <li>Communicate about our products and services</li>
            <li>Improve our website and customer experience</li>
            <li>Comply with legal obligations</li>
          </ul>
        </div>

        <div>
          <h2 className='text-xl font-semibold text-gray-800 mb-3'>4. Information Sharing</h2>
          <p>We do not sell or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our business, provided they agree to keep your information confidential.</p>
        </div>

        <div>
          <h2 className='text-xl font-semibold text-gray-800 mb-3'>5. Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.</p>
        </div>

        <div>
          <h2 className='text-xl font-semibold text-gray-800 mb-3'>6. Cookies and Tracking</h2>
          <p>Our website may use cookies and similar technologies to enhance user experience, analyze website traffic, and understand user behavior. You can modify your browser settings to decline cookies if you prefer.</p>
        </div>

        <div>
          <h2 className='text-xl font-semibold text-gray-800 mb-3'>7. Your Rights</h2>
          <p className='mb-3'>You have the right to:</p>
          <ul className='list-disc list-inside ml-4 space-y-2'>
            <li>Access your personal information</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
            <li>File a complaint with relevant authorities</li>
          </ul>
        </div>

        <div>
          <h2 className='text-xl font-semibold text-gray-800 mb-3'>8. Data Retention</h2>
          <p>We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements.</p>
        </div>

        <div>
          <h2 className='text-xl font-semibold text-gray-800 mb-3'>9. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Changes will be effective immediately upon posting on our website. We encourage you to review this policy periodically.</p>
        </div>

        <div>
          <h2 className='text-xl font-semibold text-gray-800 mb-3'>10. Contact Us</h2>
          <p className='mb-2'>If you have questions about this Privacy Policy or our data practices, contact us:</p>
          <ul className='list-none ml-4 space-y-1'>
            <li>Email: support@sunmega.co.ke</li>
            <li>Phone: +254 1190 27300</li>
            <li>Address: Saramala round, 2nd floor, 2c Mombasa, Kenya</li>
          </ul>
        </div>

        <div className='text-sm text-gray-500 mt-6'>
          <p>Last Updated: March 31, 2026</p>
        </div>
      </div>
    </motion.div>
  )
}

export default PrivacyPolicy
