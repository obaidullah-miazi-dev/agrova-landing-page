import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Quote } from 'lucide-react';
import avatar1 from '../../assets/avatar1.png';
import avatar2 from '../../assets/avatar2.png';
import avatar3 from '../../assets/avatar3.png';

const testimonials = [
    {
        id: 1,
        name: "Leslie Alexander",
        role: "Farm Owner",
        content: "This platform helped us grow healthier crops, reduce costs, and make smarter farming decisions every season.",
        avatar: avatar1,
        likes: "1k",
        replies: "500",
        time: "08:24",
        date: "22 Jan 2026"
    },
    {
        id: 2,
        name: "Darrell Steward",
        role: "Agribusiness Manager",
        content: "This platform helped me improve my crop planning and reduce input costs. I can already see better results each season.",
        avatar: avatar2,
        likes: "1k",
        replies: "500",
        time: "08:24",
        date: "22 Jan 2026"
    },
    {
        id: 3,
        name: "Cody Fisher",
        role: "Organic Farmer",
        content: "This solution supports sustainable farming without compromising productivity. That's exactly what modern farmers need.",
        avatar: avatar3,
        likes: "1k",
        replies: "500",
        time: "08:24",
        date: "22 Jan 2026"
    },
    {
        id: 4,
        name: "Jane Cooper",
        role: "Agribusiness Manager",
        content: "The precision farming tools helped us reduce waste and improve our bottom line significantly.",
        avatar: avatar1,
        likes: "1.2k",
        replies: "450",
        time: "09:15",
        date: "23 Jan 2026"
    },
    {
        id: 5,
        name: "Guy Hawkins",
        role: "Greenhouse Producer",
        content: "Real-time monitoring gives me peace of mind. I can manage my entire operation from my phone.",
        avatar: avatar2,
        likes: "900",
        replies: "300",
        time: "10:30",
        date: "24 Jan 2026"
    },
    {
        id: 6,
        name: "Esther Howard",
        role: "Mixed Farm Operator",
        content: "This platform helped us grow healthier crops and manage our resources more effectively than ever.",
        avatar: avatar3,
        likes: "2k",
        replies: "800",
        time: "11:45",
        date: "25 Jan 2026"
    },
    {
        id: 7,
        name: "Cameron Williamson",
        role: "Generation Farmer",
        content: "The insights provided are invaluable for our family farm's long-term sustainability.",
        avatar: avatar1,
        likes: "1.5k",
        replies: "600",
        time: "12:00",
        date: "26 Jan 2026"
    },
    {
        id: 8,
        name: "Robert Fox",
        role: "Crop Consultant",
        content: "I recommend this to all my clients. It's the most comprehensive tool on the market right now.",
        avatar: avatar2,
        likes: "3k",
        replies: "1k",
        time: "14:20",
        date: "27 Jan 2026"
    }
];

const TestimonialCard = ({ item }) => (
    <div className="min-w-[400px] bg-[#f8f9fa] rounded-[2.5rem] p-8 mx-4 flex flex-col justify-between h-[280px]">
        <div className="flex justify-between items-start">
            <div className="flex gap-4 items-center">
                <img src={item.avatar} alt={item.name} className="w-14 h-14 rounded-full object-cover" />
                <div>
                    <h4 className="font-bold text-gray-900">{item.name}</h4>
                    <p className="text-gray-500 text-sm">{item.role}</p>
                </div>
            </div>
            <Quote className="w-8 h-8 text-gray-200 fill-gray-200" />
        </div>
        
        <p className="text-gray-600 font-medium leading-relaxed mt-4">
            {item.content}
        </p>
        
        <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-100">
            <div className="flex gap-6">
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Heart className="w-4 h-4" /> {item.likes}
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <MessageCircle className="w-4 h-4" /> {item.replies}
                </div>
            </div>
            <div className="flex gap-4 text-gray-400 text-xs">
                <span>{item.time}</span>
                <span>{item.date}</span>
            </div>
        </div>
    </div>
);

const Testimonials = () => {
    // Split testimonials for two rows
    const row1 = testimonials.slice(0, 4);
    const row2 = testimonials.slice(4, 8);

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-11/12 mx-auto text-center mb-20">
                <div className="inline-block px-5 py-2 border border-gray-200 rounded-full text-sm font-bold text-gray-500 mb-8 tracking-wide">
                    Testimonial
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
                    Trusted by Farmers Worldwide
                </h2>
                <p className="text-gray-500 text-xl leading-relaxed max-w-2xl mx-auto">
                    Hear directly from farmers transforming their fields with smart agriculture.
                </p>
            </div>

            {/* Row 1: Sliding Left */}
            <div className="flex mb-8">
                <motion.div 
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{ 
                        duration: 30, 
                        repeat: Infinity, 
                        ease: "linear" 
                    }}
                    className="flex whitespace-nowrap"
                >
                    {[...row1, ...row1, ...row1].map((item, i) => (
                        <TestimonialCard key={`${item.id}-${i}`} item={item} />
                    ))}
                </motion.div>
            </div>

            {/* Row 2: Sliding Right (Reverse) */}
            <div className="flex">
                <motion.div 
                    initial={{ x: "-50%" }}
                    animate={{ x: 0 }}
                    transition={{ 
                        duration: 35, 
                        repeat: Infinity, 
                        ease: "linear" 
                    }}
                    className="flex whitespace-nowrap"
                >
                    {[...row2, ...row2, ...row2].map((item, i) => (
                        <TestimonialCard key={`${item.id}-${i}`} item={item} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
