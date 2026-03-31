import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send } from 'lucide-react'

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  
  const phoneNumber = '254119027300'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message || 'Hello! I would like to inquire about your solar products.')}`

  const handleSubmit = (e) => {
    e.preventDefault()
    window.open(whatsappUrl, '_blank')
    setIsOpen(false)
    setMessage('')
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
            className="mb-4 bg-white rounded-2xl shadow-2xl overflow-hidden min-w-[300px] max-w-[350px] border border-gray-100"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-green-600" />
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

      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-5 py-3.5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="font-medium hidden sm:inline">WhatsApp</span>
      </motion.button>
    </div>
  )
}

export default WhatsAppWidget
