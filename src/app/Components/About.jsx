import React from 'react';
import Image from 'next/image';
import img2 from '@/public/Group-7.png';

const About = () => {
    return (
        <div className='flex flex-col md:flex-row items-center justify-center mt-20 md:mt-16 gap-12 md:gap-[2%]'>
                <div className='w-[100%]'>
                    <Image src={img2} alt='Banner Image 2' />
                </div>
                <div className=''>
                        <h1 className='text-[2rem] lg:text-[3rem] xl:text-[4.063rem] font-semibold'>About Me </h1>
                        <p className='md:w-[83.34%] xl:w-[83.34%] md:text-[.8rem] lg:text-[1rem] xl:text-[1.313rem] mb-7'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
                    <div className='md:mt-[2rem]lg:mt-[1.7%]'>
                        <label className='md:text-[1rem] lg:text-[1.5rem] font-semibold mb-[0.86%]'>UX</label>
                        <input type="range" min={0} max="100" value="95" className="w-full customRange1 rounded-lg" />
                        <label className='md:text-[1rem] lg:text-[1.5rem] font-semibold mb-[0.86%]'>Website Design</label>
                        <input type="range" min={0} max="100" value="90" className="w-full customRange2  rounded-lg" />
                        <label className='md:text-[1rem] lg:text-[1.5rem] font-semibold mb-[0.86%]'>App Design</label>
                        <input type="range" min={0} max="100" value="97" className="w-full customRange3 rounded-lg" />
                        <label className='md:text-[1rem] lg:text-[1.5rem] font-semibold mb-[0.86%]'>Graphic Design</label>
                        <input type="range" min={0} max="100" value="95" className="w-full customRange4 rounded-lg" />
                    </div>
                </div>
            </div>
    );
};

export default About;