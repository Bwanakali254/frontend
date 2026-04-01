import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send } from 'lucide-react'
import { assets } from '../assets/assets'

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [showTooltip, setShowTooltip] = useState(true)
  
  const phoneNumber = '254119027300'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message || 'Hello! I would like to inquire about your solar products.')}`

  const handleSubmit = (e) => {
    e.preventDefault()
    window.open(whatsappUrl, '_blank')
    setIsOpen(false)
    setMessage('')
  }

  const handleButtonClick = () => {
    setIsOpen(!isOpen)
    setShowTooltip(false)
  }

  const quickMessages = [
    'I need a solar quote',
    'Product inquiry',
    'Installation question',
    'Battery pricing'
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="mb-4 bg-white rounded-2xl shadow-2xl overflow-hidden min-w-75 max-w-87.5 border border-gray-100"
          >
            {/* Header */}
            <div className="bg-linear-to-r from-green-500 to-green-600 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
                    <img src={assets.whatsappLogo} alt="WhatsApp" className="w-6 h-6 object-contain" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">WhatsApp Chat</h3>
                    <p className="text-green-100 text-sm">Typically replies instantly</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="p-4 bg-[#f0f2f5]">
              <p className="text-gray-600 text-sm mb-3">How can we help you today?</p>
              
              {/* Quick Messages */}
              <div className="flex flex-wrap gap-2 mb-4">
                {quickMessages.map((msg, index) => (
                  <button
                    key={index}
                    onClick={() => setMessage(msg)}
                    className="px-3 py-1.5 bg-white text-gray-700 text-sm rounded-full border border-gray-200 hover:border-green-500 hover:text-green-600 transition-colors"
                  >
                    {msg}
                  </button>
                ))}
              </div>

              {/* Input Form */}
              <form onSubmit={handleSubmit} className="relative">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="w-full pl-4 pr-12 py-3 bg-white rounded-full border border-gray-200 focus:border-green-500 focus:outline-none text-sm"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button with Tooltip */}
      <div className="relative">
        {/* Tooltip */}
        <AnimatePresence>
          {showTooltip && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: -10, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -10, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg"
            >
              <div className="flex items-center gap-2">
                <span>Let's talk</span>
                <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-gray-800"></div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={handleButtonClick}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => isOpen && setShowTooltip(false)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-linear-to-r from-green-500 to-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
        >
          <img src={assets.whatsappLogo} alt="WhatsApp" className="w-7 h-7 object-contain" />
        </motion.button>
      </div>
    </div>
  )
}

export default WhatsAppWidget
