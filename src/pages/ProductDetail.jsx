import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets'

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [selectedImage, setSelectedImage] = useState(0)

  const allProducts = [
    { 
      _id: "battery-1", 
      name: "Stackable cylindrical high-voltage battery pack KY-(102/204/306/408/510)V40AH", 
      image: [assets.batteryPack1], 
      category: "batteries", 
      price: "Contact for Quote",
      description: "102V Voltage output, applicable for a single pack. Max. 5 pcs for one string, which could be adjusted freely. Installed in one stack, no extra wiring.",
      features: [
        "102V Voltage output, applicable for a single pack",
        "Max. 5 pcs for one string, which could be adjusted freely",
        "Installed in one stack, no extra wiring",
        "Real-time monitoring for cell/voltage/current/temperature, 3-level fault warning and multiple protection for soft/hardware",
        "High precision components adopted for the current sampling device, meanwhile, the SOC algorithm combines Ampere hour integration, static calibration and dynamic calibration",
        "Contactor adopted internally, APO for over-discharging, self-loss reduced"
      ],
      downloads: [
        { name: "Koyoe Energy - Warranty commitment", size: "36.7 KB", file: "/downloads/koyoe-warranty-commitment.pdf" },
        { name: "Inverter Compatibility Statement", size: "277 KB", file: "/downloads/inverter-compatibility-statement.pdf" },
        { name: "Installation User Manual KOYOE", size: "2.68 MB", file: "/downloads/koyoe-installation-manual.pdf" },
        { name: "SDS", size: "1,021 KB", file: "/downloads/koyoe-sds.pdf" },
        { name: "Datasheet", size: "2.65 MB", file: "/downloads/koyoe-datasheet.pdf" },
        { name: "WIFI Communication Module", size: "204.5 KB", file: "/downloads/koyoe-wifi-module.pdf" }
      ]
    },
    { 
      _id: "battery-2", 
      name: "Stackable cylindrical high-voltage battery pack KY-(102/204/306/408/510)V40AH", 
      image: [assets.batteryPack2], 
      category: "batteries", 
      price: "Contact for Quote",
      description: "102V Voltage output, applicable for a single pack. Max. 5 pcs for one string, which could be adjusted freely. Installed in one stack, no extra wiring.",
      features: [
        "102V Voltage output, applicable for a single pack",
        "Max. 5 pcs for one string, which could be adjusted freely",
        "Installed in one stack, no extra wiring",
        "Real-time monitoring for cell/voltage/current/temperature, 3-level fault warning and multiple protection for soft/hardware",
        "High precision components adopted for the current sampling device, meanwhile, the SOC algorithm combines Ampere hour integration, static calibration and dynamic calibration",
        "Contactor adopted internally, APO for over-discharging, self-loss reduced"
      ],
      downloads: [
        { name: "Koyoe Energy - Warranty commitment", size: "36.7 KB", file: "/downloads/koyoe-warranty-commitment.pdf" },
        { name: "Inverter Compatibility Statement", size: "277 KB", file: "/downloads/inverter-compatibility-statement.pdf" },
        { name: "Installation User Manual KOYOE", size: "2.68 MB", file: "/downloads/koyoe-installation-manual.pdf" },
        { name: "SDS", size: "1,021 KB", file: "/downloads/koyoe-sds.pdf" },
        { name: "Datasheet", size: "2.65 MB", file: "/downloads/koyoe-datasheet.pdf" },
        { name: "WIFI Communication Module", size: "204.5 KB", file: "/downloads/koyoe-wifi-module.pdf" }
      ]
    },
    { 
      _id: "battery-3", 
      name: "Stackable cylindrical high-voltage battery pack KY-(102/204/306/408/510)V40AH", 
      image: [assets.batteryPack3], 
      category: "batteries", 
      price: "Contact for Quote",
      description: "102V Voltage output, applicable for a single pack. Max. 5 pcs for one string, which could be adjusted freely. Installed in one stack, no extra wiring.",
      features: [
        "102V Voltage output, applicable for a single pack",
        "Max. 5 pcs for one string, which could be adjusted freely",
        "Installed in one stack, no extra wiring",
        "Real-time monitoring for cell/voltage/current/temperature, 3-level fault warning and multiple protection for soft/hardware",
        "High precision components adopted for the current sampling device, meanwhile, the SOC algorithm combines Ampere hour integration, static calibration and dynamic calibration",
        "Contactor adopted internally, APO for over-discharging, self-loss reduced"
      ],
      downloads: [
        { name: "Koyoe Energy - Warranty commitment", size: "36.7 KB", file: "/downloads/koyoe-warranty-commitment.pdf" },
        { name: "Inverter Compatibility Statement", size: "277 KB", file: "/downloads/inverter-compatibility-statement.pdf" },
        { name: "Installation User Manual KOYOE", size: "2.68 MB", file: "/downloads/koyoe-installation-manual.pdf" },
        { name: "SDS", size: "1,021 KB", file: "/downloads/koyoe-sds.pdf" },
        { name: "Datasheet", size: "2.65 MB", file: "/downloads/koyoe-datasheet.pdf" },
        { name: "WIFI Communication Module", size: "204.5 KB", file: "/downloads/koyoe-wifi-module.pdf" }
      ]
    },
    { 
      _id: "battery-4", 
      name: "Stackable cylindrical high-voltage battery pack KY-(102/204/306/408/510)V40AH", 
      image: [assets.batteryPack4], 
      category: "batteries", 
      price: "Contact for Quote",
      description: "102V Voltage output, applicable for a single pack. Max. 5 pcs for one string, which could be adjusted freely. Installed in one stack, no extra wiring.",
      features: [
        "102V Voltage output, applicable for a single pack",
        "Max. 5 pcs for one string, which could be adjusted freely",
        "Installed in one stack, no extra wiring",
        "Real-time monitoring for cell/voltage/current/temperature, 3-level fault warning and multiple protection for soft/hardware",
        "High precision components adopted for the current sampling device, meanwhile, the SOC algorithm combines Ampere hour integration, static calibration and dynamic calibration",
        "Contactor adopted internally, APO for over-discharging, self-loss reduced"
      ],
      downloads: [
        { name: "Koyoe Energy - Warranty commitment", size: "36.7 KB", file: "/downloads/koyoe-warranty-commitment.pdf" },
        { name: "Inverter Compatibility Statement", size: "277 KB", file: "/downloads/inverter-compatibility-statement.pdf" },
        { name: "Installation User Manual KOYOE", size: "2.68 MB", file: "/downloads/koyoe-installation-manual.pdf" },
        { name: "SDS", size: "1,021 KB", file: "/downloads/koyoe-sds.pdf" },
        { name: "Datasheet", size: "2.65 MB", file: "/downloads/koyoe-datasheet.pdf" },
        { name: "WIFI Communication Module", size: "204.5 KB", file: "/downloads/koyoe-wifi-module.pdf" }
      ]
    },
    { 
      _id: "single-phase-all-in-one-stack", 
      name: "Home Energy Storage Solutions (Stack) KYS-5kw-(4-16)kwh-S", 
      image: [assets.singlePhaseAllInOne1, assets.singlePhaseAllInOne2], 
      category: "energy-storage-systems", 
      price: "Contact for Quote",
      description: "Home Energy Storage Solutions with flexible stacking configuration. Features 1~4 stacking strings for adjustable capacity, emergency power supply with seamless off-grid switching, IP65 protection grade, and ultra-quiet design.",
      features: [
        "The number of stacking strings is 1~4, which can be flexibly adjusted",
        "Support emergency power supply and seamless off-grid switching",
        "IP65 protection grade, high power quality, does not interfere with electrical equipment, ultra-low radiation",
        "Maximum efficiency 97.8%, intelligent MPPT algorithm, tracking efficiency up to 99.99%",
        "Stack-type installation, no external wiring",
        "Ultra-quiet design, flexible communication mode"
      ],
      downloads: [
        { name: "Datasheet", size: "557 KB", file: "/downloads/kys-stack-datasheet.pdf" }
      ]
    },
    { 
      _id: "single-phase-hybrid", 
      name: "5KW Single-Phase Energy Hybrid Inverter (KY-1HYBRID-5K0-H)", 
      image: [assets.singlePhaseHybrid], 
      category: "energy-storage-systems", 
      price: "Contact for Quote",
      description: "Max power efficiency 98.5%, smart MPPT Calculation, tracking efficiency reaching 99.99%. IP65 protection, various protection function, natural cooling, longer lifetime. Support multi-inverter parallel connection, with powerful scalability. Compact body, easy installation, supporting PC & cell phone remote monitoring. MPPT voltage range from 200V-950V. Supporting full load working under working temperature of 45℃ via new cooling solution.",
      features: [
        "Max power efficiency 98.5%",
        "Smart MPPT Calculation with 99.99% tracking efficiency",
        "IP65 protection rating",
        "Natural cooling system for longer lifetime",
        "Multi-inverter parallel connection support",
        "PC & cell phone remote monitoring",
        "MPPT voltage range: 200V-950V",
        "Full load operation at 45℃ working temperature"
      ],
      downloads: [
        { name: "Koyoe Energy Warranty commitment", size: "439 KB", file: "/downloads/warranty-commitment.pdf" },
        { name: "KY-1Hybrid User Manual", size: "1.86 MB", file: "/downloads/ky-1hybrid-manual.pdf" },
        { name: "Datasheet", size: "99.4 KB", file: "/downloads/ky-1hybrid-datasheet.pdf" }
      ]
    },
    { 
      _id: "single-phase-all-in-one-indoor", 
      name: "Single Phase All-in-one Solution (Indoor) KYT06kw-25kwh-I/08kw-25kwh-I/12kw-60kwh-I/15kw-60kwh-I/17kw-60kwh-I/20kw-60kwh-I", 
      image: [assets.singlePhaseAllInOne1], 
      category: "energy-storage-systems", 
      price: "Contact for Quote",
      description: "Modular design, plug-in installation, simple appearance design, integration of modern home. Smart air cooling, low temperature rise, long life time, multiple protection functions.",
      features: [
        "Modular design, plug-in installation, simple appearance design, integration of modern home",
        "Smart air cooling, low temperature rise, long life time, multiple protection functions",
        "Off-grid operation, supporting emergency power supply, supporting three-phase imbalance, and seamless switching",
        "Supporting GPRS/WIFI/RS485/USB, LED touching screen, supporting remote monitoring",
        "Ultra-wide PV voltage range 180V-950V, battery Ultra-wide voltage range 180V-700V",
        "Less output power reduction under high temperature, with efficiency improved, max PV input power up to 1.3 X rated power"
      ],
      downloads: [
        { name: "Datasheet", size: "573 KB", file: "/downloads/kyt-indoor-datasheet.pdf" }
      ]
    },
    { 
      _id: "single-phase-all-in-one-outdoor", 
      name: "Single-Phase All-in-One Solution (Outdoor)", 
      image: [assets.singlePhaseAllInOneOutdoor], 
      category: "energy-storage-systems", 
      price: "Contact for Quote",
      description: "Single-phase all-in-one solution for outdoor use, featuring a compact design, high efficiency, and easy installation. Ideal for residential and commercial applications.",
      features: [
        "Compact design for easy installation",
        "High efficiency for maximum energy harvesting",
        "IP65 protection rating for outdoor use",
        "Supports multiple mounting options",
        "Easy monitoring and control through mobile app"
      ],
      downloads: [
        { name: "Datasheet", size: "557 KB", file: "/downloads/single-phase-all-in-one-outdoor-datasheet.pdf" }
      ]
    },
    { 
      _id: "three-phase-grid-on", 
      name: "Three-Phase Grid-on Series KY-3GT-10K0/12k0/15k0/17k0/20k0", 
      image: [assets.threePhaseGridOn], 
      category: "energy-storage-systems", 
      price: "Contact for Quote",
      description: "Max power efficiency 98.5%, smart MPPT Calculation, tracking efficiency reaching 99.99%. IP65 protection, various protection function, natural cooling, longer lifetime. Support multi-inverter parallel connection, with powerful scalability. Compact body, easy installation, supporting PC & cell phone remote monitoring. MPPT voltage range from 200V-950V. Supporting full load working under working temperature of 45℃ via new cooling solution.",
      features: [
        "Max power efficiency 98.5%, smart MPPT Calculation, tracking efficiency reaching 99.99%",
        "IP65 protection, various protection function, natural cooling, longer lifetime",
        "Support multi-inverter parallel connection, with powerful scalability",
        "Compact body, easy installation, supporting PC & cell phone remote monitoring",
        "MPPT voltage range from 200V-950V",
        "Supporting full load working under working temperature of 45℃ via new cooling solution"
      ],
      downloads: [
        { name: "Datasheet", size: "328 KB", file: "/downloads/ky-3gt-datasheet.pdf" },
        { name: "Koyoe Energy Warranty commitment", size: "439 KB", file: "/downloads/warranty-commitment.pdf" },
        { name: "Grid-On Series User Manual", size: "1.86 MB", file: "/downloads/ky-3gt-manual.pdf" }
      ]
    },
    { 
      _id: "three-phase-all-in-one-outdoor", 
      name: "Three-Phase All-in-one Solution (Outdoor) KYT06kw-25kwh-O/08kw-25kwh-O/10kw-25kwh-O", 
      image: [assets.threePhaseAllInOneOutdoor], 
      category: "energy-storage-systems", 
      price: "Contact for Quote",
      description: "IP65 outdoor installation, small size, lightweight and high efficiency. Multi communication interfaces, GPRS, WIFI, Ethernet, CAN, RS485. Visualised management of the operating status and intelligently upgrade and maintain the equipment.",
      features: [
        "IP65 outdoor installation, small size, lightweight and high efficiency",
        "Multi communication interfaces, GPRS, WIFI, Ethernet, CAN, RS485",
        "Visualised management of the operating status and intelligently upgrade and maintain the equipment",
        "Self-adapt to various types of grid, and with a strong adaptability of weak grid",
        "In parallel with several inverters, system has better scalability",
        "Full power operation under 45℃ with a new cooling method"
      ],
      downloads: [
        { name: "Datasheet", size: "439 KB", file: "/downloads/kyt-outdoor-datasheet.pdf" }
      ]
    },
    { 
      _id: "three-phase-hybrid", 
      name: "Three-Phase Energy Hybrid Series KY-EST-06KH/08KH/10KH/12KH/15KH/20KH", 
      image: [assets.threePhaseHybrid], 
      category: "energy-storage-systems", 
      price: "Contact for Quote",
      description: "Integrate PV and storage system modern, support multi batteries, integrate with EMS Smart energy management systems. IP65 protection, aluminum housing. Built-in lightning protection, high-precision leakage protection.",
      features: [
        "Integrate PV and storage system modern, support multi batteries, integrate with EMS Smart energy management systems",
        "IP65 protection, aluminum housing. Built-in lightning protection, high-precision leakage protection",
        "UPS function, support three-phase imbalance, on/off grid switch within 10ms",
        "Ultra silent, flexible communications, support remote/local USB upgrade",
        "Wide PV voltage input range 180V-950V, wide batteries voltage range 180V-700V",
        "Support bifacial panels, max DC current 12.5A, max PV input power up to 1.3 rated power"
      ],
      downloads: [
        { name: "Koyoe Energy Warranty commitment", size: "439 KB", file: "/downloads/warranty-commitment.pdf" },
        { name: "3-Phase User Manual", size: "1.86 MB", file: "/downloads/ky-3phase-manual.pdf" },
        { name: "Datasheet", size: "209 KB", file: "/downloads/ky-est-datasheet.pdf" }
      ]
    }
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
            {product.description ? (
              <p className="text-gray-600">{product.description}</p>
            ) : (
              <ul className="text-gray-600 space-y-2">
                <li>Category: {product.category.replace('-', ' ').toUpperCase()}</li>
                <li>High-quality solar energy solution</li>
                <li>Professional installation available</li>
                <li>Warranty included</li>
              </ul>
            )}
            {product.features && (
              <ul className="text-gray-600 space-y-2 mt-4">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            )}
            {product.downloads && (
              <div className="mt-6">
                <h4 className="font-semibold text-gray-700 mb-3">Downloads</h4>
                <div className="space-y-2">
                  {product.downloads.map((download, index) => (
                    <motion.a 
                      key={index} 
                      href={download.file}
                      download
                      whileHover={{ scale: 1.02, backgroundColor: "#f0fdf4" }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-between bg-gray-50 p-3 rounded-lg hover:shadow-md transition cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-gray-700 font-medium">{download.name}</span>
                      </div>
                      <span className="text-gray-500 text-sm bg-white px-2 py-1 rounded">{download.size}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            )}
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
