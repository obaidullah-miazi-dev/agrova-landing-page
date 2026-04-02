import React from 'react';
import avatar1 from '../../assets/avatar1.png';
import avatar2 from '../../assets/avatar2.png';
import avatar3 from '../../assets/avatar3.png';
import aboutimg1 from '../../assets/about-img1.jpeg'
import aboutimg2 from '../../assets/about-img2.jpeg'


const About = () => {
    const cardData = [
        {title:"Acres Farmed",count:"10K+",description:"Supporting efficient tarming at scale"},
        {title:"Yield Improvement",count:"30%",description:"Growing more with smartor farming"},
        {title:"Farmers Trust Us",count:"50K+",description:"Proven results formers trust"},
    ]
    return (
        <section className='max-w-11/12 mx-auto flex justify-between min-h-[20vh] py-16'>
            {/* right side  */}
            <div className='h-[80vh] flex flex-col justify-between'>

                {/* top part of left side */}
                <div>
                    <div className='flex -space-x-4'>
                                {[avatar1, avatar2, avatar3].map((avatar, i) => (
                                    <div key={i} className='w-12 h-12 rounded-full border-2 border-white/20 overflow-hidden shadow-md transform hover:scale-110 hover:z-10 transition-all cursor-pointer'>
                                        <img src={avatar} alt={`Farmer ${i+1}`} className='w-full h-full object-cover' />
                                    </div>
                                ))}

                            </div>
                                <p className='text-sm mt-2 mb-4'>trusted by over</p>

                            <div className='flex gap-1 items-end'>
                                <h2 className='font-semibold text-5xl'>50k+</h2>
                                <p>Farmer Worlwide</p>
                            </div>
                </div>

                {/* bottom part of left side  */}
                <div>
                    <div className='flex items-center gap-4'>
                        {/* img 1 */}
                    <div className='w-40 h-46'>
                        <img src={aboutimg1} alt="farmer" className='h-full w-full rounded-xl'/>
                    </div>
                    {/* img 2 */}
                    <div className='w-40 h-46'>
                        <img src={aboutimg2} alt="farmer" className='h-full w-full rounded-xl'/>
                    </div>
                    </div>

                    <div>
                        <p className='max-w-md font-semibold text-md mt-2 text-gray-600'>Smart, data-driven agricultural solution helping farmers improve yields while using fewer resources.</p>
                    </div>
                </div>

            </div>


            {/* left side  */}
            <div className='h-[80vh] flex flex-col justify-between'>
                {/* top part of right side  */}
                <div>
                    <h2 className='text-5xl font-bold max-w-4xl leading-14 text-gray-700'>We are committed to emopowering farmers through smart sustainable agricultural solutions that improve productivity and protect the land.</h2>

                <p className='text-gray-600 max-w-4xl mt-12'>We empower farmers with smart data driven agricultural solutions that improve crop performance reduce resource waste and promote sustainable farming practices for long term success.</p>
                </div>


            {/* bottom part of right side  */}
            <div className='flex gap-5'>
                {
                    cardData.map((data,i)=>(
                        <div key={i} className='h-60 flex flex-col justify-between bg-gray-100 rounded-xl p-4 relative'>
                            <h3 className='font-semibold text-xl'>{data.title}</h3>

                           <div>
                             <h2 className='font-bold text-5xl'>{data.count}</h2>
                            <p className='font-semibold text-gray-600 mt-1'>{data.description}</p>
                           </div>
                        </div>
                    ))
                }
            </div>
                
            </div>
        </section>
    );
};

export default About;