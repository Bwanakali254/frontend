import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { X, MessageSquare, ChevronRight } from 'lucide-react'

const GetQuoteWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const handleNavigate = (path) => {
    setIsOpen(false)
    navigate(path)
  }

  return (
    <div className="fixed bottom-24 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="mb-4 bg-white rounded-2xl shadow-2xl p-4 min-w-[250px] border border-gray-100"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-800">Get a Quote</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-4 h-4 text-gray-500" />
              </button>
            </div>
            <div className="space-y-2">
              <button
                onClick={() => handleNavigate('/solar-solution')}
                className="w-full flex items-center justify-between px-4 py-3 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-xl hover:from-green-700 hover:to-green-600 transition-all duration-200 group"
              >
                <span className="font-medium">Request Pricing</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => handleNavigate('/contact')}
                className="w-full flex items-center justify-between px-4 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all duration-200 group"
              >
                <span className="font-medium">Contact Us</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-5 py-3.5 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
      >
        <MessageSquare className="w-5 h-5" />
        <span className="font-medium hidden sm:inline">Get Quote</span>
      </motion.button>
    </div>
  )
}

export default GetQuoteWidget
