"use client"
import { EffectCoverflow, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Image from 'next/image';
const Slider = () => {
    return (
        <div id='Testimonials' className='mt-40 relative xl:-ml-[18%] xl:w-[136%] h-[600px] pb-32'>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                modules={[EffectCoverflow, Pagination]}
                spaceBetween={100}
                slidesPerView={2}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 70,
                    modifier: 2.5,
                }}
                pagination={{
                    clickable: false,                    
                }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className='h-[650px] md:h-[550px]'
                breakpoints={{
                    1024:{slidesPerView:"auto"},
                    768:{slidesPerView:"auto"},
                    375:{slidesPerView:"auto"}
                }}
                >
                <SwiperSlide>
                    <div className='py-20 flex flex-col md:flex-row items-center justify-center gap-3 p-5 bg-[#f0ecec] rounded-lg'>
                        <div className=''>
                            <Image src="https://i.pinimg.com/736x/09/6c/ed/096ced12ba67edfd972a97c5c2e94e66.jpg" width={235} height={235} className='rounded-full max-h-60 max-w-60 object-cover object-center' alt='' />
                        </div>
                        <div>
                            <h1 className='text-black text-[1rem] lg:text-[1.313rem] xl:w-[40rem]'><span className='text-primary'> &ldquo; </span>Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.<span className='text-primary'> &ldquo; </span></h1>
                            <p className='text-[1.5rem] text-black font-semibold mt-5'>Name</p>
                            <p className='text-black'>CEO</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='py-20 flex flex-col md:flex-row items-center justify-center gap-3 p-5 bg-[#f0ecec] rounded-lg'>
                        <div className=' '>
                            <Image src="https://i.pinimg.com/enabled_hi/564x/8d/a7/41/8da7418c70faa5abfacc5bd20ba78e23.jpg" width={235} height={235} className='rounded-full max-h-60 max-w-60 object-cover object-center' alt='' />
                        </div>
                        <div>
                            <h1 className='text-black text-[1rem] lg:text-[1.313rem] xl:w-[40rem]'><span className='text-primary'> &ldquo; </span>Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.<span className='text-primary'> &ldquo; </span></h1>
                            <p className='text-[1.5rem] text-black font-semibold mt-5'>Name</p>
                            <p className='text-black'>CEO</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='py-20 flex flex-col md:flex-row items-center justify-center gap-3 p-5 bg-[#f0ecec] rounded-lg'>
                        <div className=' '>
                            <Image src="https://i.pinimg.com/736x/e7/58/53/e758532c24aec8aba81dbbd934cd65a7.jpg" width={235} height={470} className='rounded-full max-h-60 max-w-60 object-cover object-center' alt='' />
                        </div>
                        <div>
                            <h1 className='text-black text-[1rem] lg:text-[1.313rem] xl:w-[40rem]'><span className='text-primary'> &ldquo; </span>Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.<span className='text-primary'> &ldquo; </span></h1>
                            <p className='text-[1.5rem] text-black font-semibold mt-5'>Name</p>
                            <p className='text-black'>CEO</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='py-20 flex flex-col md:flex-row items-center justify-center gap-3 p-5 bg-[#f0ecec] rounded-lg'>
                        <div className=' '>
                            <Image src="https://i.pinimg.com/enabled_hi/564x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg" width={235} height={235} className='rounded-full max-h-60 max-w-60 object-cover object-center' alt='' />
                        </div>
                        <div>
                            <h1 className='text-black text-[1rem] lg:text-[1.313rem] xl:w-[40rem]'><span className='text-primary'> &ldquo; </span>Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.<span className='text-primary'> &ldquo; </span></h1>
                            <p className='text-[1.5rem] text-black font-semibold mt-5'>Name</p>
                            <p className='text-black'>CEO</p>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
            <div className="custom-pagination absolute left-0 right-0 bottom-[-50px] text-center"></div>
        </div>
    );
};

export default Slider;