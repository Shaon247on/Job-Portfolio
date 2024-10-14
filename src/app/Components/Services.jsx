import Image from "next/image";
import Title from "./Title";

import icon1 from '@/public/UI-icon.png';
import icon2 from '@/public/Web-icon.png';
import icon3 from '@/public/App-icon.png';
import icon4 from '@/public/Graphic-icon.png';

const Services = () => {
    return (
        <div id="services" className="mb-40 mt-32">
            <Title tittle='Services' subtitle='Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium' />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                <div className="col-span-1 bg-[#F8F8F8] pt-[3.563rem] px-[1.125rem] rounded-2xl">
                    <Image src={icon1} alt="icon" />
                    <h1 className="text-3xl font-semibold text-black mt-6 mb-4">UI/UX</h1>
                    <p className="text-[1.188rem] text-black">Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
                </div>
                <div className="col-span-1 bg-[#F8F8F8] pt-[3.563rem] px-[1.125rem] rounded-2xl">
                    <Image src={icon2} alt="icon" />
                    <h1 className="text-3xl font-semibold text-black mt-6 mb-4">UI/UX</h1>
                    <p className="text-[1.188rem] text-black">Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
                </div>
                <div className="col-span-1 bg-[#F8F8F8] pt-[3.563rem] px-[1.125rem] rounded-2xl">
                    <Image src={icon3} alt="icon" />
                    <h1 className="text-3xl font-semibold text-black mt-6 mb-4">UI/UX</h1>
                    <p className="text-[1.188rem] text-black">Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
                </div>
                <div className="col-span-1 bg-[#F8F8F8] pt-[3.563rem] px-[1.125rem] rounded-2xl">
                    <Image src={icon4} alt="icon" />
                    <h1 className="text-3xl font-semibold text-black mt-6 mb-4">UI/UX</h1>
                    <p className="text-[1.188rem] text-black">Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
                </div>
            </div>
        </div>
    );
};

export default Services;