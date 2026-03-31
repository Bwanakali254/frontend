import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets'

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [selectedImage, setSelectedImage] = useState(0)

  const allProducts = [
    { _id: "battery-1", name: "Battery Pack Series - Model 1", image: [assets.batteryPack1], category: "batteries", price: "Contact for Quote" },
    { _id: "battery-2", name: "Battery Pack Series - Model 2", image: [assets.batteryPack2], category: "batteries", price: "Contact for Quote" },
    { _id: "battery-3", name: "Battery Pack Series - Model 3", image: [assets.batteryPack3], category: "batteries", price: "Contact for Quote" },
    { _id: "battery-4", name: "Battery Pack Series - Model 4", image: [assets.batteryPack4], category: "batteries", price: "Contact for Quote" },
    { _id: "single-phase-all-in-one-stack", name: "Single-Phase All-in-one Solution (Stack Model)", image: [assets.singlePhaseAllInOne1, assets.singlePhaseAllInOne2], category: "energy-storage-systems", price: "Contact for Quote" },
    { _id: "single-phase-hybrid", name: "Single-Phase Hybrid Series", image: [assets.singlePhaseHybrid], category: "energy-storage-systems", price: "Contact for Quote" },
    { _id: "three-phase-all-in-one-indoor", name: "Three-Phase All-in-One Solution (Indoor)", image: [assets.threePhaseAllInOneIndoor], category: "energy-storage-systems", price: "Contact for Quote" },
    { _id: "three-phase-all-in-one-outdoor", name: "Three-Phase All-in-One Solution (Outdoor)", image: [assets.threePhaseAllInOneOutdoor], category: "energy-storage-systems", price: "Contact for Quote" },
    { _id: "three-phase-grid-on", name: "Three-Phase Grid-on Series", image: [assets.threePhaseGridOn], category: "energy-storage-systems", price: "Contact for Quote" },
    { _id: "three-phase-hybrid", name: "Three-Phase Hybrid Series", image: [assets.threePhaseHybrid], category: "energy-storage-systems", price: "Contact for Quote" }
  ]

  const product = allProducts.find(p => p._id === id)

  if (!product) {
    return (
      <div className="pt-10 text-center">
        <h1 className="text-2xl text-gray-700">Product not found</h1>
        <button 
          onClick={() => navigate('/collection')}
          className="mt-4 text-green-600 hover:underline"
        >
          Back to Products
        </button>
      </div>
    )
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-10 px-4 max-w-6xl mx-auto"
    >
      <button
        onClick={() => navigate('/collection')}
        className="mb-6 text-sm text-gray-600 hover:text-gray-800 flex items-center gap-1"
      >
        ← Back to Products
      </button>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-50 rounded-lg p-8"
        >
          {/* Main Image */}
          <div className="flex items-center justify-center mb-4">
            <img 
              src={product.image[selectedImage]} 
              alt={product.name}
              className="max-w-full max-h-96 object-contain"
            />
          </div>

          {/* Thumbnail Gallery for multiple images */}
          {product.image.length > 1 && (
            <div className="flex justify-center gap-3 mt-4">
              {product.image.map((img, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-green-500' : 'border-gray-200'
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`${product.name} - ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </motion.button>
              ))}
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col justify-center"
        >
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">{product.name}</h1>
          <p className="text-xl text-green-600 font-medium mb-6">{product.price}</p>
          
          <div className="space-y-4 mb-8">
            <h3 className="font-semibold text-gray-700">Product Details</h3>
            <ul className="text-gray-600 space-y-2">
              <li>Category: {product.category.replace('-', ' ').toUpperCase()}</li>
              <li>High-quality solar energy solution</li>
              <li>Professional installation available</li>
              <li>Warranty included</li>
            </ul>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/contact')}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full transition-colors w-fit"
          >
            Inquire Now
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ProductDetail
