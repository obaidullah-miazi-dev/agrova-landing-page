import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Leaf } from 'lucide-react';
import { FacebookFilled, InstagramOutlined, TwitterOutlined, LinkedinFilled } from '@ant-design/icons';

const Footer = () => {
    return (
        <footer className="relative bg-black text-white pt-24 pb-12">
            {/* Top Gradient Overlay */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#1a2e1a] to-black opacity-80" />

            <div className="max-w-11/12 mx-auto relative z-10">
                
                {/* Newsletter Section */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-24 border-b border-white/10 pb-16">
                    <h3 className="text-3xl md:text-4xl font-semibold mb-8 md:mb-0">
                        Join Our Farming Community Today
                    </h3>
                    <div className="relative w-full md:w-[500px]">
                        <input 
                            type="email" 
                            placeholder="Enter Your Email Address" 
                            className="w-full bg-transparent border-b border-white/20 py-4 pr-32 outline-none focus:border-[#f9e059] transition-colors text-lg"
                        />
                        <button className="absolute right-0 bottom-2 px-6 py-3 bg-[#f9e059] text-gray-900 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform">
                            Submit <ArrowUpRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Branding Section */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 md:w-24 md:h-24">
                            {/* Agrova Leaf Logo SVG */}
                            <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full text-white">
                                <path d="M50 10 C20 10 10 40 10 70 C10 85 25 90 40 90 C60 90 90 70 90 30 C90 15 70 10 50 10 Z" fill="white" />
                                <path d="M50 10 C45 30 30 50 10 70" stroke="black" strokeWidth="2" fill="none" />
                            </svg>
                        </div>
                        <h2 className="text-7xl md:text-9xl font-bold tracking-tighter">Agrova</h2>
                    </div>
                    <p className="max-w-xs text-gray-400 text-lg leading-relaxed mt-4 md:mt-12">
                        Empowering farmers with sustainable solutions and modern technology for a better agricultural future.
                    </p>
                </div>

                {/* Navigation Section */}
                <nav className="flex flex-wrap justify-center gap-4 md:gap-8 mb-24 text-lg font-medium text-gray-300">
                    {["Home", "Solutions", "Sustainability", "About Us", "How It Work"].map((link, i, arr) => (
                        <React.Fragment key={link}>
                            <a href="#" className="hover:text-white transition-colors">{link}</a>
                            {i < arr.length - 1 && <span className="text-gray-700">/</span>}
                        </React.Fragment>
                    ))}
                </nav>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-8">
                    <p className="text-gray-500">©2026 All Rights Reserved</p>
                    
                    <div className="flex gap-4">
                        {[FacebookFilled, InstagramOutlined, TwitterOutlined, LinkedinFilled].map((Icon, i) => (
                            <a 
                                key={i} 
                                href="#" 
                                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                            >
                                <Icon className="text-xl" />
                            </a>
                        ))}
                    </div>

                    <div className="flex gap-8 text-gray-500">
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Privacy policy</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
