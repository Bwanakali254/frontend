import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { assets } from '../assets/assets'

const Title = ({text1,text2}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
     <p className='text-gray-500'>{text1} <span className='text-gray-700 font-medium'>{text2}</span></p>
     <p className='w-8 sm:w-12 h-px sm:h-[2px] bg-gray-700'></p>
    </div>
  )
}

const ProductItem = ({id,image,name,price}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
      className='border-2 border-green-500 rounded-lg p-2 flex flex-col h-full'
    >
      <Link className='text-gray-700 cursor-pointer flex flex-col h-full' to={`/product/${id}`}>
        <div className='overflow-hidden h-48 flex items-center justify-center'>
          <motion.img 
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className='max-h-full max-w-full object-contain' 
            src={image[0]} 
            alt={name}
          />
        </div>
        <div className='flex-1 flex flex-col justify-between pt-3'>
          <p className='text-sm min-h-12'>{name}</p>
          <motion.p 
            className='text-sm font-medium mt-auto'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {price}
          </motion.p>
        </div>
      </Link>
      <Link 
        to={`/product/${id}`}
        className='mt-3 w-full bg-green-600 hover:bg-green-700 text-white text-center text-sm font-medium py-2 rounded transition-colors'
      >
        View Details
      </Link>
    </motion.div>
  )
}

const Collection = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    { name: "Single-Phase Products", value: "single-phase", image: assets.singlePhaseProductsCover },
    { name: "Three-Phase Products", value: "three-phase", image: assets.threePhaseProductsCover },
    { name: "Batteries", value: "batteries", image: assets.batteriesCover }
  ];

  const allProducts = [
    // Batteries Category
    {
      _id: "battery-1",
      name: "Battery Pack Series - Model 1",
      price: "Contact for Quote",
      image: [assets.batteryPack1],
      category: "batteries",
      subCategory: ["battery-pack-series"]
    },
    {
      _id: "battery-2",
      name: "Battery Pack Series - Model 2",
      price: "Contact for Quote",
      image: [assets.batteryPack2],
      category: "batteries",
      subCategory: ["battery-pack-series"]
    },
    {
      _id: "battery-3",
      name: "Battery Pack Series - Model 3",
      price: "Contact for Quote",
      image: [assets.batteryPack3],
      category: "batteries",
      subCategory: ["battery-pack-series"]
    },
    {
      _id: "battery-4",
      name: "Battery Pack Series - Model 4",
      price: "Contact for Quote",
      image: [assets.batteryPack4],
      category: "batteries",
      subCategory: ["battery-pack-series"]
    },
    // Single-Phase Products - Only 2 products shown
    {
      _id: "single-phase-all-in-one-stack",
      name: "Single-Phase All-in-one Solution (Stack Model)",
      price: "Contact for Quote",
      image: [assets.singlePhaseAllInOne1, assets.singlePhaseAllInOne2],
      category: "energy-storage-systems",
      subCategory: ["single-phase", "all-in-one"]
    },
    {
      _id: "single-phase-hybrid",
      name: "Single-Phase Hybrid Series",
      price: "Contact for Quote",
      image: [assets.singlePhaseHybrid],
      category: "energy-storage-systems",
      subCategory: ["single-phase", "hybrid"]
    },
    // Three-Phase Products
    {
      _id: "three-phase-all-in-one-indoor",
      name: "Three-Phase All-in-One Solution (Indoor)",
      price: "Contact for Quote",
      image: [assets.threePhaseAllInOneIndoor],
      category: "energy-storage-systems",
      subCategory: ["three-phase", "all-in-one"]
    },
    {
      _id: "three-phase-all-in-one-outdoor",
      name: "Three-Phase All-in-One Solution (Outdoor)",
      price: "Contact for Quote",
      image: [assets.threePhaseAllInOneOutdoor],
      category: "energy-storage-systems",
      subCategory: ["three-phase", "all-in-one"]
    },
    {
      _id: "three-phase-grid-on",
      name: "Three-Phase Grid-on Series",
      price: "Contact for Quote",
      image: [assets.threePhaseGridOn],
      category: "energy-storage-systems",
      subCategory: ["three-phase", "grid-on"]
    },
    {
      _id: "three-phase-hybrid",
      name: "Three-Phase Hybrid Series",
      price: "Contact for Quote",
      image: [assets.threePhaseHybrid],
      category: "energy-storage-systems",
      subCategory: ["three-phase", "hybrid"]
    }
  ];

  const categoryProducts = allProducts.filter(
    (item) => {
      if (activeCategory === "single-phase") {
        return item.category === "energy-storage-systems" && item.subCategory.includes("single-phase");
      } else if (activeCategory === "three-phase") {
        return item.category === "energy-storage-systems" && item.subCategory.includes("three-phase");
      } else {
        return item.category === activeCategory;
      }
    }
  );

  return (
    <div className="pt-10 border-t">

      <Title text1="OUR" text2="PRODUCTS" />
      <h1 className="text-4xl sm:text-6xl font-semibold text-gray-700 mb-16">
        PRODUCTS
      </h1>

      {!activeCategory && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-5xl mx-auto">

          {categories.map((cat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="text-center cursor-pointer group flex flex-col items-center"
            >
              <motion.img
                src={cat.image}
                className="w-48 h-48 object-contain mx-auto mb-4"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 120 }}
              />
              <p className="text-base font-medium text-gray-800 mb-4">
                {cat.name}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveCategory(cat.value)}
                className="bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-6 py-2 rounded-full transition-colors"
              >
                View More
              </motion.button>
            </motion.div>
          ))}

        </div>
      )}

      {activeCategory && (
        <div className="max-w-6xl mx-auto px-4">

          <button
            onClick={() => setActiveCategory(null)}
            className="mb-6 text-sm text-gray-600 hover:text-gray-800 flex items-center gap-1"
          >
            ← Back to Products
          </button>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl mb-8 capitalize font-medium text-gray-800"
          >
            {activeCategory.replace("-", " ")}
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

            {categoryProducts.map((item, index) => (
              <motion.div
                key={item._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <ProductItem
                  id={item._id}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                />
              </motion.div>
            ))}

          </div>
        </div>
      )}

    </div>
  )
}

export default Collection;
