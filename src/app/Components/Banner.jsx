import React from 'react';
import Button from './Button';

const Banner = () => {
    return (
        <div>
            <div className='mt-[27px] h-[200vh] xl:mt-[120px] text-black'>
                <p className='xl:text-[24px] font-semibold'>Hi I am</p>
                <h3 className='xl:text-[32px] font-semibold'>Muhammad Umair</h3>
                <div>
                    <h1 className='xl:text-[100px] font-bold text-black'>UI & UX</h1>
                    <h1 className='xl:text-[100px] font-bold text-black xl:ml-[220px] xl:-mt-[60px]'>Designer</h1>
                </div>

                <p className='xl:w-[698px] text-[21px] xl:mt-5 xl:mb-[22px]'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>

                <Button text="Hire Me " />
            </div>
            <div>

            </div>
        </div>
    );
};

export default Banner;