"use client"
import { EffectCoverflow, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Slide from './Slide';
const Slider = () => {
    return (
        <div id='Testimonials' className='mt-40 relative xl:-ml-[18%] xl:w-[136%] h-[600px] pb-32'>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                modules={[EffectCoverflow, Pagination]}
                spaceBetween={50}
                slidesPerView={2}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 70,
                    modifier: 2.6,
                }}
                pagination={{
                    clickable: false,
                }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className='h-[650px] md:h-[550px]'
                breakpoints={{
                    1920: { slidesPerView: 2 },
                    1024: { slidesPerView: "auto" },
                    768: { slidesPerView: "auto" },
                    375: { slidesPerView: "auto" }
                }}
            >
                <SwiperSlide>
                    <Slide image="https://i.pinimg.com/736x/09/6c/ed/096ced12ba67edfd972a97c5c2e94e66.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide image="https://i.pinimg.com/enabled_hi/564x/8d/a7/41/8da7418c70faa5abfacc5bd20ba78e23.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide image="https://i.pinimg.com/736x/e7/58/53/e758532c24aec8aba81dbbd934cd65a7.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide image="https://i.pinimg.com/enabled_hi/564x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;