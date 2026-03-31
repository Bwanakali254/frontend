import React, { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { motion } from 'framer-motion'

const SolarSolution = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        location: '',
        productInterest: '',
        message: '',
        contactMethod: ''
    });
    
    const [isLoading, setIsLoading] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState({
        productInterest: false,
        contactMethod: false
    });
    const [focusedField, setFocusedField] = useState(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
            },
        },
    };

    const formRowVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.phone.trim() || !formData.email.trim()) {
            toast.error('Please fill all required fields');
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email.trim())) {
            toast.error('Please enter a valid email address');
            return;
        }
        
        try {
            setIsLoading(true);
            const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000';
            
            const inquiryMessage = `
Name: ${formData.firstName} ${formData.lastName}
Phone: ${formData.phone}
Email: ${formData.email}
Location: ${formData.location}
Product Interest: ${formData.productInterest}
Preferred Contact: ${formData.contactMethod}
Message: ${formData.message}
            `.trim();
            
            const response = await axios.post(backendUrl + '/api/inquiry', {
                name: `${formData.firstName} ${formData.lastName}`,
                email: formData.email,
                phone: formData.phone,
                location: formData.location,
                subject: 'Solar Installation Inquiry - Pricing',
                message: inquiryMessage,
                inquiryType: 'pricing'
            });
            
            if (response.data.success) {
                toast.success('Inquiry submitted successfully! We will contact you soon.');
                setFormData({
                    firstName: '',
                    lastName: '',
                    phone: '',
                    email: '',
                    location: '',
                    productInterest: '',
                    message: '',
                    contactMethod: ''
                });
            } else {
                toast.error(response.data.message || 'Failed to submit inquiry');
            }
            
            setIsLoading(false);
        } catch (error) {
            toast.error(error.response?.data?.message || 'Failed to submit inquiry');
            setIsLoading(false);
        }
    };
    
    const PhoneIcon = () => (
        <svg className="w-5 h-5 text-[#9ca3af]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
    );
    
    const EmailIcon = () => (
        <svg className="w-5 h-5 text-[#9ca3af]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
    );
    
    const ChevronIcon = ({ isOpen }) => (
        <svg 
            className={`w-5 h-5 text-[#9ca3af] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
    );
    
    const InputWithIcon = ({ 
        name, 
        type = 'text', 
        placeholder, 
        value, 
        icon: Icon, 
        required = false,
        isSelect = false,
        children
    }) => (
        <div className="relative">
            {Icon && (
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <Icon />
                </div>
            )}
            {isSelect ? (
                <select
                    name={name}
                    value={value}
                    onChange={handleChange}
                    onFocus={() => setFocusedField(name)}
                    onBlur={() => setFocusedField(null)}
                    className={`
                        w-full h-11.5 px-4 
                        ${Icon ? 'pl-12' : 'pl-4'} pr-12
                        border rounded-3xl bg-white text-[14px] text-[#1f2937]
                        appearance-none cursor-pointer
                        transition-all duration-200 ease-in-out
                        ${focusedField === name 
                            ? 'border-[#059669] bg-[rgba(5,150,105,0.05)] shadow-[0_0_0_3px_rgba(5,150,105,0.1)]' 
                            : 'border-[#d1d5db] hover:border-[#9ca3af]'
                        }
                    `}
                >
                    {children}
                </select>
            ) : (
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={handleChange}
                    onFocus={() => setFocusedField(name)}
                    onBlur={() => setFocusedField(null)}
                    placeholder={placeholder}
                    required={required}
                    className={`
                        w-full h-11.5 px-4 
                        ${Icon ? 'pl-12' : 'pl-4'}
                        border rounded-3xl bg-white text-[14px] text-[#1f2937]
                        placeholder:text-[#9ca3af]
                        transition-all duration-200 ease-in-out
                        ${focusedField === name 
                            ? 'border-[#059669] shadow-[0_0_0_3px_rgba(5,150,105,0.1)] outline-none' 
                            : 'border-[#d1d5db] hover:border-[#9ca3af]'
                        }
                    `}
                />
            )}
            {isSelect && (
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <ChevronIcon isOpen={focusedField === name} />
                </div>
            )}
        </div>
    );
    
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-white"
        >
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-150 mx-auto px-6 sm:px-10 py-16 sm:py-20"
            >
                <motion.h1 
                    variants={itemVariants}
                    className="text-center text-[32px] sm:text-[36px] font-bold text-[#1f2937] tracking-[-0.5px] mb-3"
                >
                    Inquiry Form
                </motion.h1>
                
                <motion.p 
                    variants={itemVariants}
                    className="text-center text-[14px] sm:text-[16px] text-[#6b7280] mb-10 sm:mb-12"
                >
                    Request a quote or consultation for your solar energy needs
                </motion.p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div 
                        variants={formRowVariants}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6"
                    >
                        <div>
                            <label className="block text-[14px] font-medium text-[#1f2937] mb-2">
                                First Name <span className="text-[#1f2937]">*</span>
                            </label>
                            <InputWithIcon
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-[14px] font-medium text-[#1f2937] mb-2">
                                Last Name <span className="text-[#1f2937]">*</span>
                            </label>
                            <InputWithIcon
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                required
                            />
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        variants={formRowVariants}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6"
                    >
                        <div>
                            <label className="block text-[14px] font-medium text-[#1f2937] mb-2">
                                Phone <span className="text-[#1f2937]">*</span>
                            </label>
                            <InputWithIcon
                                name="phone"
                                type="tel"
                                placeholder="09171234567"
                                value={formData.phone}
                                icon={PhoneIcon}
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-[14px] font-medium text-[#1f2937] mb-2">
                                Email <span className="text-[#1f2937]">*</span>
                            </label>
                            <InputWithIcon
                                name="email"
                                type="email"
                                placeholder="your@email.com"
                                value={formData.email}
                                icon={EmailIcon}
                                required
                            />
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        variants={formRowVariants}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6"
                    >
                        <div>
                            <label className="block text-[14px] font-medium text-[#1f2937] mb-2">
                                Location / Address
                            </label>
                            <InputWithIcon
                                name="location"
                                placeholder="Nairobi, Karen"
                                value={formData.location}
                            />
                        </div>
                        <div className="relative">
                            <label className="block text-[14px] font-medium text-[#1f2937] mb-2">
                                Product Interest
                            </label>
                            <select
                                name="productInterest"
                                value={formData.productInterest}
                                onClick={() => setDropdownOpen(prev => ({ ...prev, productInterest: !prev.productInterest }))}
                                onChange={(e) => {
                                    handleChange(e);
                                    setDropdownOpen(prev => ({ ...prev, productInterest: false }));
                                }}
                                className="w-full h-11.5 px-4 pr-10 border border-[#d1d5db] rounded-3xl bg-white text-[14px] text-[#1f2937] cursor-pointer focus:border-[#059669] focus:outline-none focus:shadow-[0_0_0_3px_rgba(5,150,105,0.1)] appearance-none"
                            >
                                <option value="" hidden>Select Product Category</option>
                                <option value="single-phase">Single-Phase Products</option>
                                <option value="three-phase">Three-Phase Products</option>
                                <option value="batteries">Batteries</option>
                                <option value="hybrid-system">Hybrid System</option>
                                <option value="not-sure">Not Sure - Need Consultation</option>
                            </select>
                            <div className={`absolute right-3 top-1/2 translate-y-1 pointer-events-none transition-transform duration-200 ${dropdownOpen.productInterest ? 'rotate-180' : ''}`}>
                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        variants={formRowVariants}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6"
                    >
                        <div className="relative">
                            <label className="block text-[14px] font-medium text-[#1f2937] mb-2">
                                Preferred Contact Method
                            </label>
                            <select
                                name="contactMethod"
                                value={formData.contactMethod}
                                onClick={() => setDropdownOpen(prev => ({ ...prev, contactMethod: !prev.contactMethod }))}
                                onChange={(e) => {
                                    handleChange(e);
                                    setDropdownOpen(prev => ({ ...prev, contactMethod: false }));
                                }}
                                className="w-full h-11.5 px-4 pr-10 border border-[#d1d5db] rounded-3xl bg-white text-[14px] text-[#1f2937] cursor-pointer focus:border-[#059669] focus:outline-none focus:shadow-[0_0_0_3px_rgba(5,150,105,0.1)] appearance-none"
                            >
                                <option value="" hidden>Select Contact Method</option>
                                <option value="phone">Phone</option>
                                <option value="email">Email</option>
                                <option value="whatsapp">WhatsApp</option>
                            </select>
                            <div className={`absolute right-3 top-1/2 translate-y-1 pointer-events-none transition-transform duration-200 ${dropdownOpen.contactMethod ? 'rotate-180' : ''}`}>
                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </motion.div>
                    
                    <motion.div variants={formRowVariants}>
                        <label className="block text-[14px] font-medium text-[#1f2937] mb-2">
                            Your Message / Inquiry Details
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('message')}
                            onBlur={() => setFocusedField(null)}
                            placeholder="Tell us about your energy needs, estimated power consumption, or any specific requirements..."
                            rows="4"
                            className={`
                                w-full px-4 py-3
                                border rounded-2xl bg-white text-[14px] text-[#1f2937]
                                placeholder:text-[#9ca3af]
                                transition-all duration-200 ease-in-out resize-none
                                ${focusedField === 'message' 
                                    ? 'border-[#059669] shadow-[0_0_0_3px_rgba(5,150,105,0.1)] outline-none' 
                                    : 'border-[#d1d5db] hover:border-[#9ca3af]'
                                }
                            `}
                        />
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="pt-4"
                    >
                        <motion.button
                            whileHover={{ scale: 1.02, boxShadow: "0 5px 20px rgba(5,150,105,0.3)" }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={isLoading}
                            className="
                                w-full h-12.5 
                                bg-[#059669] hover:bg-[#f97316]
                                text-white text-[16px] font-semibold
                                rounded-3xl
                                transition-colors duration-200 ease-in-out
                                disabled:opacity-50 disabled:cursor-not-allowed
                                flex items-center justify-center gap-2
                                cursor-pointer
                            "
                        >
                            {isLoading ? (
                                <>
                                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                    </svg>
                                    Submitting...
                                </>
                            ) : (
                                'Submit'
                            )}
                        </motion.button>
                    </motion.div>
                </form>
            </motion.div>
        </motion.div>
    )
}

export default SolarSolution
