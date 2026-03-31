import React from 'react';
import Button from '../buttons/Button';
import { ArrowRightOutlined, StarFilled } from '@ant-design/icons';
import tomatoImg from '../../assets/tomato_card_image.png';
import avatar1 from '../../assets/avatar1.png';
import avatar2 from '../../assets/avatar2.png';
import avatar3 from '../../assets/avatar3.png';
import avatar4 from '../../assets/avatar4.png';

const Banner = () => {
    return (
        <section className='min-h-screen bg-[url("./assets/banner.jpg")] bg-cover bg-center '>
            {/* banner overlay */}
            <div className='absolute inset-0 bg-black/30 bg-opacity-50'></div>

            {/* content  */}
            <div className='flex justify-between items-center z-50 absolute bottom-16 left-12 right-12'>
                {/* left side */}
                <div className='flex-1 py-5 space-y-6'>
                    <h1 className='text-white text-7xl font-bold leading-tight'>Growing Smarter <br/> Farming Better.</h1>
                    <p className='text-white text-lg font-medium max-w-xl opacity-90'>Discover the future of agriculture with our innovative solutions, empowering farmers and businesses with smart technologies, sustainable practices.</p>
                    <div className='pt-4'>
                        <Button className={`px-8 py-3  text-black border-none max-w-46 font-bold flex gap-3 items-center cursor-pointer group rounded-full transition-all duration-300`}>
                            Get Started 
                            <ArrowRightOutlined className='-rotate-45 group-hover:rotate-0 transition-all duration-300'/>
                        </Button>
                    </div>
                </div>

                {/* right side  */}
                <div className='flex-1 flex justify-end'>
                    <div className='bg-black/20 backdrop-blur-sm rounded-[40px] p-8 border border-white/10 shadow-2xl w-full max-w-md space-y-8'>
                        {/* Top Image */}
                        <div className='rounded-3xl overflow-hidden shadow-lg aspect-4/3'>
                            <img src={tomatoImg} alt="Vibrant tomatoes" className='w-full h-full object-cover font-bold' />
                        </div>

                        {/* Middle Row: Social Proof */}
                        <div className='flex items-center justify-between'>
                            <div className='flex -space-x-4'>
                                {[avatar1, avatar2, avatar3, avatar4].map((avatar, i) => (
                                    <div key={i} className='w-12 h-12 rounded-full border-2 border-white/20 overflow-hidden shadow-md transform hover:scale-110 hover:z-10 transition-all cursor-pointer'>
                                        <img src={avatar} alt={`Farmer ${i+1}`} className='w-full h-full object-cover' />
                                    </div>
                                ))}
                            </div>
                            <div className='flex flex-col items-end space-y-1'>
                                <div className='flex gap-1'>
                                    {[1, 2, 3, 4].map((star) => (
                                        <StarFilled key={star} className='text-xl' style={{color:'#f9e059'}} />
                                    ))}
                                </div>
                                <p className='text-white text-sm font-semibold tracking-wide'>Trusted by 50K Farmers</p>
                            </div>
                        </div>

                        {/* Bottom CTA */}
                        <div className='bg-primary text-black font-bold rounded-2xl py-5 px-6 text-center shadow-lg cursor-pointer text-lg tracking-tight'>
                            24/7 Technical Support
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;