import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeftRight, CornerDownRight } from 'lucide-react';
import aboutImg1 from '../../assets/about-img1.jpeg';
import bannerImg from '../../assets/banner.jpg';
import avatar2 from '../../assets/avatar2.png';
import banner2Img from '../../assets/banner2.jpg';

const stepsData = [
    {
        id: 1,
        title: "Analyze Your Farm",
        description: "We gather key soil, crop, and weather insights.",
        image: aboutImg1
    },
    {
        id: 2,
        title: "Plan Smarter",
        description: "Get tailored insights for irrigation and crop care.",
        image: bannerImg
    },
    {
        id: 3,
        title: "Monitor & Optimize",
        description: "Monitor results in real time and boost yields.",
        image: banner2Img
    },
    {
        id: 4,
        title: "Improve Yield",
        description: "Apply data-driven techniques for maximum output.",
        image: avatar2
    }
];

const Steps = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % stepsData.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    // Get the 3 items to show
    const getVisibleItems = () => {
        const items = [];
        for (let i = 0; i < 3; i++) {
            items.push(stepsData[(currentIndex + i) % stepsData.length]);
        }
        return items;
    };

    return (
        <section className="max-w-11/12 mx-auto py-24 overflow-hidden">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-20 leading-tight">
                Simple steps. Smart technology. <br /> Real results for farmers.
            </h2>

            <div className="relative">
                <div className="flex gap-6">
                    <AnimatePresence mode="popLayout" initial={false}>
                        {getVisibleItems().map((item, index) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ 
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 30,
                                    opacity: { duration: 0.2 }
                                }}
                                className="flex-1 bg-[#f8f9fa] rounded-[2.5rem] p-10 flex flex-col items-start min-h-[500px]"
                            >
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-500 font-medium">{item.description}</p>
                                </div>

                                <div className="flex-grow flex items-center justify-center w-full mb-8">
                                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-inner">
                                        <img 
                                            src={item.image} 
                                            alt={item.title} 
                                            className="w-full h-full object-cover" 
                                        />
                                    </div>
                                </div>

                                <div className="mt-auto">
                                    <a 
                                        href="#" 
                                        className="inline-flex items-center gap-3 text-gray-900 font-bold group"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-gray-900 group-hover:text-white transition-all">
                                            <CornerDownRight className="w-5 h-5" />
                                        </div>
                                        <span>Learn More</span>
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Progress Indicators */}
                <div className="flex justify-center gap-2 mt-12">
                    {stepsData.map((_, i) => (
                        <div 
                            key={i}
                            className={`h-1.5 rounded-full transition-all duration-500 ${
                                currentIndex === i ? 'w-12 bg-gray-900' : 'w-4 bg-gray-200'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Steps;
