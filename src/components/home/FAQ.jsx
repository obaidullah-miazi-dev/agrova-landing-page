import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
    {
        id: 1,
        question: "Who can use this agriculture solution?",
        answer: "Our platform is designed for farmers, agribusiness owners, cooperatives, and agricultural startups. Whether you manage a small farm or large-scale operations, our tools adapt to your needs."
    },
    {
        id: 2,
        question: "What crops or farming types do you support?",
        answer: "We support a wide range of crops including cereals, fruits, vegetables, and specialty crops. Our tools are applicable to various farming types, from traditional soil-based farming to hydroponics and greenhouse operations."
    },
    {
        id: 3,
        question: "How does this help increase farm productivity?",
        answer: "By providing data-driven insights on soil health, weather patterns, and crop performance, we help you optimize resource use, detect issues early, and make informed decisions that lead to higher yields and reduced waste."
    },
    {
        id: 4,
        question: "Can this work in my local climate and soil conditions?",
        answer: "Yes, our platform uses localized weather data and soil sensors to provide insights specific to your location. We support various climate zones and soil types globally."
    },
    {
        id: 5,
        question: "Can I access the platform from my mobile phone?",
        answer: "Absolutely! Our platform is fully responsive and available via a mobile app, allowing you to monitor your farm and receive alerts anytime, anywhere."
    }
];

const FAQ = () => {
    const [openId, setOpenId] = useState(1);

    return (
        <section className="max-w-11/12 mx-auto py-24">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight max-w-3xl mx-auto">
                    Clear reliable information to help you start farming with confidence.
                </h2>
                <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                    Find clear answers to common questions and learn how our agriculture solutions support your farming journey.
                </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
                {faqs.map((faq) => {
                    const isOpen = openId === faq.id;
                    return (
                        <div 
                            key={faq.id} 
                            className={`rounded-[2rem] border transition-all duration-300 ${
                                isOpen ? 'bg-[#f8f9fa] border-transparent' : 'border-gray-100 hover:border-gray-200'
                            }`}
                        >
                            <button
                                onClick={() => setOpenId(isOpen ? null : faq.id)}
                                className="w-full flex items-center justify-between p-8 text-left focus:outline-none"
                            >
                                <span className="text-xl md:text-2xl font-bold text-gray-900">
                                    {faq.question}
                                </span>
                                <div className={`w-12 h-12 flex items-center justify-center rounded-full transition-all ${
                                    isOpen ? 'bg-[#f9e059]' : 'border border-gray-100'
                                }`}>
                                    {isOpen ? (
                                        <ChevronUp className="w-6 h-6 text-gray-900" />
                                    ) : (
                                        <ChevronDown className="w-6 h-6 text-gray-400" />
                                    )}
                                </div>
                            </button>

                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-8 md:px-10 pb-10">
                                            <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default FAQ;
