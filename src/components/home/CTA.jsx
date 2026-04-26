import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import ctaBg from '../../assets/cta-bg.png';

const CTA = () => {
    return (
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img 
                    src={ctaBg} 
                    alt="Agricultural landscape" 
                    className="w-full h-full object-cover"
                />
                {/* Subtle overlay to make text pop */}
                <div className="absolute inset-0 bg-white/10" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
                >
                    Smarter Technology. Bigger Yields <br /> Greater Success.
                </motion.h2>
                
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-xl md:text-2xl text-gray-700 mb-10 max-w-2xl mx-auto"
                >
                    Join thousands of farmers using modern solutions to grow more with less.
                </motion.p>
                
                <motion.button 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    whileHover={{ scale: 1.05 }}
                    whileActive={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-[#f9e059] rounded-full text-lg font-bold text-gray-900 shadow-xl hover:brightness-95 transition-all"
                >
                    Start Free Trial <ArrowUpRight className="w-5 h-5" />
                </motion.button>
            </div>
        </section>
    );
};

export default CTA;
