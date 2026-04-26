import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, Leaf, Droplets, Bug, Tractor, Microscope, ChevronUp } from 'lucide-react';
import precisionImg from '../../assets/solutions/precision.png';
import irrigationImg from '../../assets/solutions/irrigation.png';
import pestImg from '../../assets/solutions/pest.png';
import harvestingImg from '../../assets/solutions/harvesting.png';
import soilImg from '../../assets/solutions/soil.png';

const solutions = [
    {
        id: 1,
        title: "Precision Farming",
        subtitle: "Smart input",
        badge: "500+ acres support",
        description: "GPS-guided equipment and sensors for accurate field management and resource allocation.",
        image: precisionImg,
        icon: <Leaf className="w-6 h-6 text-green-600" />,
        link: "Learn more about smart farming"
    },
    {
        id: 2,
        title: "Smart Irrigation Systems",
        subtitle: "Water Management",
        badge: "30% water saved",
        description: "Automated irrigation that responds to real-time soil moisture and weather data.",
        image: irrigationImg,
        icon: <Droplets className="w-6 h-6 text-blue-600" />,
        link: "Learn more about irrigation"
    },
    {
        id: 3,
        title: "Pest & Disease Monitoring",
        subtitle: "Crop Guard",
        badge: "Real-time alerts",
        description: "AI-powered detection systems that identify pests and diseases before they spread.",
        image: pestImg,
        icon: <Bug className="w-6 h-6 text-red-600" />,
        link: "Learn more about pest control"
    },
    {
        id: 4,
        title: "Automated Harvesting",
        subtitle: "Efficient Harvest",
        badge: "2x faster yield",
        description: "Robotic harvesting solutions that minimize waste and maximize efficiency during peak season.",
        image: harvestingImg,
        icon: <Tractor className="w-6 h-6 text-orange-600" />,
        link: "Learn more about harvesting"
    },
    {
        id: 5,
        title: "Soil Health Analysis",
        subtitle: "Data Driven",
        badge: "Deep nutrient scan",
        description: "Comprehensive soil testing and nutrient analysis to optimize fertilizer use and soil health.",
        image: soilImg,
        icon: <Microscope className="w-6 h-6 text-purple-600" />,
        link: "Learn more about soil health"
    }
];

const Solutions = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % (showMore ? solutions.length : 3));
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + (showMore ? solutions.length : 3)) % (showMore ? solutions.length : 3));
    };

    const displayedSolutions = showMore ? solutions : solutions.slice(0, 3);

    return (
        <section className="max-w-11/12 mx-auto py-24">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                <div>
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-[1.1]">
                        Complete Solutions for <br className="hidden md:block" /> Modern Agriculture
                    </h2>
                </div>
                
                <div className="flex items-center gap-3">
                    <button 
                        onClick={handlePrev}
                        className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 transition-all group"
                    >
                        <ArrowLeft className="w-5 h-5 text-gray-600 group-hover:-translate-x-1 transition-transform" />
                    </button>
                    <button 
                        onClick={handleNext}
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-[#f9e059] hover:brightness-95 transition-all group"
                    >
                        <ArrowRight className="w-5 h-5 text-gray-900 group-hover:translate-x-1 transition-transform" />
                    </button>
                    
                    {/* Upside arrow icon for more cards */}
                    <button 
                        onClick={() => setShowMore(!showMore)}
                        className={`w-12 h-12 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 transition-all ${showMore ? 'bg-gray-100 rotate-180' : ''}`}
                        title={showMore ? "Show Less" : "Show More"}
                    >
                        <ChevronUp className={`w-5 h-5 text-gray-600 transition-transform`} />
                    </button>
                </div>
            </div>

            {/* Cards Grid */}
            <div className="flex flex-col md:flex-row gap-5 h-auto md:h-[550px] transition-all duration-700">
                <AnimatePresence mode='popLayout'>
                    {displayedSolutions.map((solution, index) => {
                        const isActive = activeIndex === index;
                        
                        return (
                            <motion.div
                                key={solution.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                onClick={() => setActiveIndex(index)}
                                className={`relative cursor-pointer rounded-3xl overflow-hidden shadow-sm transition-all duration-500 ${
                                    isActive 
                                    ? 'flex-[3] bg-white border border-gray-100' 
                                    : 'flex-[0.7] md:flex-[0.6] min-w-[100px]'
                                }`}
                            >
                                {isActive ? (
                                    <div className="flex flex-col md:flex-row h-full w-full p-4 md:p-6 gap-6 md:gap-8">
                                        {/* Image Section */}
                                        <motion.div 
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className="w-full md:w-5/12 h-64 md:h-full rounded-2xl overflow-hidden"
                                        >
                                            <img 
                                                src={solution.image} 
                                                alt={solution.title} 
                                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                                            />
                                        </motion.div>
                                        
                                        {/* Content Section */}
                                        <div className="w-full md:w-7/12 flex flex-col justify-between py-2">
                                            {/* Top info */}
                                            <div className="flex gap-4 items-center">
                                                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100">
                                                    {solution.icon}
                                                </div>
                                                <div>
                                                    <p className="text-gray-400 text-sm font-medium">{solution.subtitle}</p>
                                                    <p className="font-bold text-gray-800">{solution.badge}</p>
                                                </div>
                                            </div>
                                            
                                            {/* Middle info */}
                                            <div className="mt-8 md:mt-0">
                                                <motion.h3 
                                                    layoutId={`title-${solution.id}`}
                                                    className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
                                                >
                                                    {solution.title}
                                                </motion.h3>
                                                <p className="text-gray-500 text-lg leading-relaxed max-w-md">
                                                    {solution.description}
                                                </p>
                                            </div>
                                            
                                            {/* Bottom info */}
                                            <div className="mt-8 md:mt-0 pt-6 border-t border-gray-50">
                                                <a 
                                                    href="#" 
                                                    className="inline-flex items-center gap-2 font-bold text-gray-900 group/link"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <span className="border-b-2 border-[#f9e059] pb-0.5 transition-all group-hover/link:border-gray-900">
                                                        {solution.link}
                                                    </span>
                                                    <ArrowUpRight className="w-5 h-5 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="relative h-64 md:h-full w-full group">
                                        <img 
                                            src={solution.image} 
                                            alt={solution.title} 
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                        />
                                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500" />
                                        
                                        {/* Vertical Title for Desktop */}
                                        <div className="hidden md:block absolute bottom-10 left-1/2 -translate-x-1/2 w-full text-center">
                                            <motion.h3 
                                                layoutId={`title-${solution.id}`}
                                                className="text-white font-bold text-xl md:text-2xl whitespace-nowrap rotate-[-90deg] origin-center"
                                            >
                                                {solution.title}
                                            </motion.h3>
                                        </div>

                                        {/* Horizontal Title for Mobile */}
                                        <div className="md:hidden absolute bottom-6 left-6 right-6">
                                            <motion.h3 
                                                layoutId={`title-${solution.id}`}
                                                className="text-white font-bold text-2xl"
                                            >
                                                {solution.title}
                                            </motion.h3>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Solutions;
