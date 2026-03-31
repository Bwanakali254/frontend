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

const Terms = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'Terms and'} text2={'Conditions'} />
      </div>

      <div className='my-10 flex flex-col gap-6 text-gray-600'>
        <div>
          <h2 className='text-xl font-semibold text-gray-800 mb-3'>1. Acceptance of Terms</h2>
          <p>By accessing and using the Sun Mega Limited website and services, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.</p>
        </div>

        <div>
          <h2 className='text-xl font-semibold text-gray-800 mb-3'>2. Products and Services</h2>
          <p className='mb-3'>Sun Mega Limited provides solar energy products and related services. We strive to ensure:</p>
          <ul className='list-disc list-inside ml-4 space-y-2'>
            <li>Accurate product descriptions and specifications</li>
            <li>Quality products that meet industry standards</li>
            <li>Professional installation and maintenance services</li>
            <li>Competitive pricing and transparent billing</li>
          </ul>
        </div>

        <div>
          <h2 className='text-xl font-semibold text-gray-800 mb-3'>3. Quotations and Inquiries</h2>
          <p className='mb-3'>When requesting a quote:</p>
          <ul className='list-disc list-inside ml-4 space-y-2'>
            <li>All quotations are valid for 30 days unless otherwise stated</li>
            <li>Prices may vary based on site assessment and requirements</li>
            <li>We reserve the right to modify quotations based on additional information</li>
            <li>Formal quotations must be accepted in writing to proceed</li>
          </ul>
        </div>

        <div>
          <h2 className='text-xl font-semibold text-gray-800 mb-3'>4. Delivery and Installation</h2>
          <p className='mb-3'>For delivery and installation services:</p>
          <ul className='list-disc list-inside ml-4 space-y-2'>
            <li>Delivery timeframes are estimates and may vary</li>
            <li>Installation will be scheduled after delivery confirmation</li>
            <li>Customers must provide safe access to installation sites</li>
            <li>Additional charges may apply for remote locations</li>
          </ul>
        </div>

        <div>
          <h2 className='text-xl font-semibold text-gray-800 mb-3'>5. Returns and Refunds</h2>
          <p className='mb-3'>Our return policy includes:</p>
          <ul className='list-disc list-inside ml-4 space-y-2'>
            <li>Products may be returned within 14 days of delivery</li>
            <li>Items must be unused and in original packaging</li>
            <li>Refunds will be processed within 7-14 business days</li>
            <li>Installation services are non-refundable once completed</li>
            <li>Custom orders may not be eligible for returns</li>
          </ul>
        </div>

        <div>
          <h2 className='text-xl font-semibold text-gray-800 mb-3'>6. Warranties</h2>
          <p>All products come with manufacturer warranties. Sun Mega Limited also provides installation warranties as specified in individual service agreements. Warranty terms vary by product and service.</p>
        </div>

        <div>
          <h2 className='text-xl font-semibold text-gray-800 mb-3'>7. Limitation of Liability</h2>
          <p>Sun Mega Limited shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our products or services. Our total liability shall not exceed the amount paid for the specific product or service in question.</p>
        </div>

        <div>
          <h2 className='text-xl font-semibold text-gray-800 mb-3'>8. Intellectual Property</h2>
          <p>All content on this website, including text, images, logos, and designs, is the property of Sun Mega Limited and protected by copyright and trademark laws. Unauthorized use is prohibited.</p>
        </div>

        <div>
          <h2 className='text-xl font-semibold text-gray-800 mb-3'>9. User Conduct</h2>
          <p className='mb-3'>Users agree not to:</p>
          <ul className='list-disc list-inside ml-4 space-y-2'>
            <li>Violate any laws or regulations</li>
            <li>Infringe on intellectual property rights</li>
            <li>Transmit harmful or malicious code</li>
            <li>Engage in fraudulent activities</li>
            <li>Harass or harm other users</li>
          </ul>
        </div>

        <div>
          <h2 className='text-xl font-semibold text-gray-800 mb-3'>10. Governing Law</h2>
          <p>These Terms and Conditions are governed by the laws of Kenya. Any disputes shall be resolved in the courts of Kenya.</p>
        </div>

        <div>
          <h2 className='text-xl font-semibold text-gray-800 mb-3'>11. Changes to Terms</h2>
          <p>We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting. Continued use of our services constitutes acceptance of modified terms.</p>
        </div>

        <div>
          <h2 className='text-xl font-semibold text-gray-800 mb-3'>12. Contact Information</h2>
          <p className='mb-2'>For questions about these Terms and Conditions, contact us:</p>
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

export default Terms
