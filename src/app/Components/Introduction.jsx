import Button from './Button';
import Image from 'next/image';
import img1 from '@/public/Group-2.png';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Introduction = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row items-center justify-between md:gap-8 lg:gap-[5rem] xl:gap-[9rem]'>
            <div className=' mt-[1.5rem] xl:mt-[7.5rem]'>
                <p className='text-[.8rem] lg:text-[1.5rem]
                font-semibold'>Hi I am</p>
                <h3 className=' text-[1.5rem] xl:text-[2rem] font-semibold text-[#FD6F00]'>Muhammad Umair</h3>
                <div>
                    <h1 className='text-[2.5rem] lg:text-[3.5rem] xl:text-[6.25rem] font-bold '>UI & UX</h1>
                    <h1 className='text-[2.5rem] lg:text-[3.5rem] xl:text-[6.25rem] font-bold ml-[18%] xl:ml-[32%] -mt-[3.6%] xl:-mt-[8.6%]'>Designer</h1>
                </div>

                <p className='md:w-[26rem] lg:w-[32rem] xl:w-[43.625rem] md:text-[.8rem] lg:text-[1rem] xl:text-[1.313rem] mt-7 md:mt-5 mb-[1rem] xl:mb-[1.375rem]'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>

                <Button text="Hire Me " />
            </div>
            <div>
                <div className='relative group'>
                    <div className='absolute z-[1] w-[70%] h-[13.5%] bg-[#FD6F0099] top-[12.7%] left-[15%]'></div>
                    <Image src={img1} alt='Banner Image 1' />
                </div>
                <div className='flex items-center justify-center gap-[5%] mt-[6.7%]'>
                    <FaFacebook className='lg:w-[1.5rem] xl:w-[2.063rem] lg:h-[1.5rem] xl:h-[2.063rem]' />
                    <FaTwitter className='lg:w-[1.5rem] xl:w-[2.063rem] lg:h-[1.5rem] xl:h-[2.063rem]' />
                    <FaInstagram className='lg:w-[1.5rem] xl:w-[2.063rem] lg:h-[1.5rem] xl:h-[2.063rem]' />
                    <FaLinkedin className='lg:w-[1.5rem] xl:w-[2.063rem] lg:h-[1.5rem] xl:h-[2.063rem]' />
                </div>
            </div>
        </div>
    );
};

export default Introduction;