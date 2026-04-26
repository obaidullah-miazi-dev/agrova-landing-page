import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import sustainableImg from '../../assets/why-choose-us/sustainable.png';
import farmerImg from '../../assets/why-choose-us/farmer.png';
import techImg from '../../assets/why-choose-us/tech.png';
import yieldImg from '../../assets/why-choose-us/yield.png';

const WhyChooseUs = () => {
    return (
        <section className="max-w-11/12 mx-auto py-24">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                
                {/* Left Column - Large Card */}
                <div className="w-full lg:w-1/2">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative h-[500px] lg:h-full rounded-[3rem] overflow-hidden group shadow-2xl"
                    >
                        <img 
                            src={sustainableImg} 
                            alt="Sustainable Practices" 
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                        
                        {/* Top Right Button */}
                        <div className="absolute top-10 right-10">
                            <button className="w-14 h-14 bg-[#f9e059] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform active:scale-95">
                                <ArrowUpRight className="w-6 h-6 text-gray-900" />
                            </button>
                        </div>
                        
                        {/* Bottom Content */}
                        <div className="absolute bottom-12 left-10 lg:left-14 right-10 lg:right-14">
                            <h3 className="text-4xl lg:text-5xl font-bold text-white mb-4">Sustainable Practices</h3>
                            <p className="text-gray-300 text-lg lg:text-xl mb-8 max-w-md leading-relaxed">
                                Eco-friendly farming solutions that protect soil, water, and crops.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {["Agri-Tech", "Smart Fields", "Eco-Farming"].map((tag, i) => (
                                    <span key={i} className="px-6 py-2.5 bg-white/10 backdrop-blur-xl rounded-full text-white text-sm font-semibold border border-white/20 hover:bg-white/20 transition-colors cursor-default">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
                
                {/* Right Column - Content & Grid */}
                <div className="w-full lg:w-1/2 flex flex-col justify-between py-4">
                    
                    {/* Header */}
                    <div className="relative">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-block px-5 py-2 border border-gray-200 rounded-full text-sm font-bold text-gray-500 mb-8 tracking-wide">
                                Why Choose Us
                            </div>
                            <h2 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-[1.1]">
                                Farming Made <br className="hidden lg:block" /> Easy.
                            </h2>
                            <p className="text-gray-500 text-xl lg:text-2xl leading-relaxed max-w-xl mb-12">
                                We provide comprehensive innovative solutions tailored to address the unique challenges faced by modern farmers today.
                            </p>
                        </motion.div>
                        
                        {/* Nav Arrows - Positioned to the right of header on desktop */}
                        <div className="md:absolute top-4 right-0 flex gap-4 mt-8 md:mt-0">
                            <button className="w-14 h-14 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 transition-all active:scale-95 group">
                                <ArrowLeft className="w-6 h-6 text-gray-400 group-hover:text-gray-900 transition-colors" />
                            </button>
                            <button className="w-14 h-14 flex items-center justify-center rounded-full bg-[#f9e059] hover:brightness-95 transition-all shadow-md active:scale-95 group">
                                <ArrowRight className="w-6 h-6 text-gray-900" />
                            </button>
                        </div>
                    </div>
                    
                    {/* Grid of 3 Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 lg:mt-0">
                        
                        {/* Card 1: Farmer Approach */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="relative group h-[350px] lg:h-[420px]"
                        >
                            <div className="absolute top-5 left-1/2 -translate-x-1/2 z-10 w-[85%]">
                                <div className="bg-white/95 backdrop-blur-md rounded-2xl py-3.5 px-4 shadow-xl border border-gray-100/50 text-center">
                                    <span className="font-bold text-gray-900 text-sm lg:text-base whitespace-nowrap">Farmer Approach</span>
                                </div>
                            </div>
                            <div className="h-full rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100">
                                <img src={farmerImg} alt="Farmer Approach" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                
                            </div>
                        </motion.div>
                        
                        {/* Card 2: Smart Technology */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="relative group h-[350px] lg:h-[420px]"
                        >
                             <div className="absolute top-5 left-1/2 -translate-x-1/2 z-10 w-[85%]">
                                <div className="bg-white/95 backdrop-blur-md rounded-2xl py-3.5 px-4 shadow-xl border border-gray-100/50 text-center">
                                    <span className="font-bold text-gray-900 text-sm lg:text-base whitespace-nowrap">Smart Technology</span>
                                </div>
                            </div>
                            <div className="h-full rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100">
                                <img src={techImg} alt="Smart Technology" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                
                            </div>
                        </motion.div>
                        
                        {/* Card 3: More Yield */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="relative group h-[350px] lg:h-[420px]"
                        >
                            <div className="h-full rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100">
                                <img src={yieldImg} alt="More Yield" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                               
                            </div>
                             <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 w-[85%]">
                                <div className="bg-white/95 backdrop-blur-md rounded-2xl py-3.5 px-4 shadow-xl border border-gray-100/50 text-center">
                                    <span className="font-bold text-gray-900 text-sm lg:text-base whitespace-nowrap">More Yield</span>
                                </div>
                            </div>
                        </motion.div>
                        
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default WhyChooseUs;
